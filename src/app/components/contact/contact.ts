import { Component, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Icon } from '../../shared/icon/icon';
import { SOCIAL_LINKS } from '../../core/portfolio-data';

const CONTACT_EMAIL = 'stdouanla@gmail.com';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [Icon, ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  channels = [
    {
      icon: 'mail',
      label: 'Email',
      value: CONTACT_EMAIL,
      href: `mailto:${CONTACT_EMAIL}?subject=Contact%20depuis%20le%20portfolio`,
    },
    {
      icon: 'phone',
      label: 'Telephone',
      value: '+237 6 58 77 98 32',
      href: 'tel:+237658779832',
    },
    {
      icon: 'pin',
      label: 'Localisation',
      value: 'Saker-Beedi, Douala 5eme',
      href: undefined,
    },
    {
      icon: 'globe',
      label: 'Site web',
      value: 'stdouanla.com',
      href: 'https://stdouanla.com',
    },
  ];

  socials = SOCIAL_LINKS;

  sent = signal(false);
  error = signal<string | null>(null);

  private fb = new FormBuilder().nonNullable;

  form = this.fb.group({
    name: this.fb.control('', [Validators.required, Validators.minLength(2)]),
    email: this.fb.control('', [Validators.required, Validators.email]),
    subject: this.fb.control('', [Validators.required, Validators.minLength(3)]),
    message: this.fb.control('', [Validators.required, Validators.minLength(10)]),
  });

  get f() {
    return this.form.controls;
  }

  async submit(): Promise<void> {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const { name, email, subject, message } = this.form.getRawValue();

    try {
      const response = await fetch('/api/brevo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          subject,
          message,
        }),
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(data?.message || 'Erreur lors de l’envoi du message.');
      }

      this.sent.set(true);
      this.error.set(null);
      this.form.reset();
    } catch (err) {
      console.error('Brevo send error:', err);
      this.sent.set(false);
      this.error.set(
        err instanceof Error
          ? err.message
          : 'Le message n’a pas pu être envoyé. Merci de réessayer ou de me contacter directement par email.'
      );
    }
  }
}
