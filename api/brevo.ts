import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Méthode non autorisé.' });
  }

  const { name, email, subject, message } = req.body ?? {};

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ message: 'Tous les champs sont requis.' });
  }

  const BREVO_API_KEY = process.env.BREVO_API_KEY;
  const TO_EMAIL = process.env.BREVO_TO_EMAIL || 'stdouanla@gmail.com';
  const FROM_EMAIL = process.env.BREVO_FROM_EMAIL || TO_EMAIL;

  if (!BREVO_API_KEY) {
    return res.status(500).json({ message: 'Clé Brevo manquante.' });
  }

  try {
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
        subject: `Portfolio — ${subject}`,
        htmlContent: `
          <p><strong>Nom :</strong> ${name}</p>
          <p><strong>Email :</strong> ${email}</p>
          <p><strong>Sujet :</strong> ${subject}</p>
          <p><strong>Message :</strong></p>
          <p>${String(message).replace(/\n/g, '<br>')}</p>
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
      message: 'Erreur serveur lors de l’envoi du message.',
    });
  }
}
