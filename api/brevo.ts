import type { VercelRequest, VercelResponse } from '@vercel/node';

const MAX_STRING_LENGTH = 250;
const MAX_MESSAGE_LENGTH = 2000;

function escapeHtml(value: string): string {
  return value.replace(/[&<>"']/g, (char) => {
    const entities: Record<string, string> = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;',
    };

    return entities[char] ?? char;
  });
}

function readString(value: unknown, fieldName: string, maxLength: number): string {
  if (typeof value !== 'string') {
    throw new Error(`${fieldName} est requis.`);
  }

  const trimmed = value.trim();

  if (!trimmed) {
    throw new Error(`${fieldName} est requis.`);
  }

  if (trimmed.length > maxLength) {
    throw new Error(`${fieldName} est trop long.`);
  }

  return trimmed;
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Méthode non autorisé.' });
  }

  try {
    const body = typeof req.body === 'object' && req.body ? req.body : {};
    const name = readString(body.name, 'Nom', MAX_STRING_LENGTH);
    const email = readString(body.email, 'Email', MAX_STRING_LENGTH);
    const subject = readString(body.subject, 'Sujet', MAX_STRING_LENGTH);
    const message = readString(body.message, 'Message', MAX_MESSAGE_LENGTH);

    if (!isValidEmail(email)) {
      return res.status(400).json({ message: 'Adresse email invalide.' });
    }

    if (message.length < 10) {
      return res.status(400).json({ message: 'Le message est trop court.' });
    }

    const BREVO_API_KEY = process.env['BREVO_API_KEY'];
    const TO_EMAIL = process.env['BREVO_TO_EMAIL'] || 'stdouanla@gmail.com';
    const FROM_EMAIL = process.env['BREVO_FROM_EMAIL'] || TO_EMAIL;

    if (!BREVO_API_KEY) {
      return res.status(500).json({ message: 'Clé Brevo manquante.' });
    }

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeSubject = escapeHtml(subject);
    const safeMessage = escapeHtml(message).replace(/\n/g, '<br>');

    const response = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'api-key': BREVO_API_KEY,
      },
      body: JSON.stringify({
        sender: {
          name: 'Portfolio Steve Tikemene Douanla',
          email: FROM_EMAIL,
        },
        to: [
          {
            email: TO_EMAIL,
            name: 'Steve Tikemene Douanla',
          },
        ],
        replyTo: {
          email,
          name,
        },
        subject: `Portfolio — ${safeSubject}`,
        htmlContent: `
          <p><strong>Nom :</strong> ${safeName}</p>
          <p><strong>Email :</strong> ${safeEmail}</p>
          <p><strong>Sujet :</strong> ${safeSubject}</p>
          <p><strong>Message :</strong></p>
          <p>${safeMessage}</p>
        `,
        textContent: [
          `Nom : ${name}`,
          `Email : ${email}`,
          `Sujet : ${subject}`,
          '',
          message,
        ].join('\n'),
      }),
    });

    const data = await response.json().catch(() => ({}));

    if (!response.ok) {
      return res.status(response.status).json({
        message: data?.message || 'Erreur lors de l’envoi du message via Brevo.',
      });
    }

    return res.status(200).json({ success: true, message: 'Message envoyé.' });
  } catch (error) {
    console.error('Brevo API error:', error);
    return res.status(500).json({
      message:
        error instanceof Error && error.message
          ? error.message
          : 'Erreur serveur lors de l’envoi du message.',
    });
  }
}
