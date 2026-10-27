import nodemailer from 'nodemailer'
import type { Transporter } from 'nodemailer'

// Boîte qui reçoit tous les leads (inscriptions, contact, rappels, CPF).
// Surchargeable par variable d'environnement pour les tests ou un changement
// d'adresse sans redéploiement de code.
export const LEADS_INBOX = process.env.LEADS_INBOX || 'autoecole.despaquerettes@gmail.com'

// Les champs saisis par le visiteur sont injectés dans des e-mails HTML : on
// les échappe pour qu'un nom ou un message contenant « <script> » ou une
// balise ne soit jamais interprété par le client mail de l'équipe.
export function escapeHtml(value: unknown): string {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

// Ne garde que les chiffres et le « + » : sûr dans un href="tel:…".
export function toTelHref(phone: unknown): string {
  return String(phone ?? '').replace(/[^0-9+]/g, '')
}

// Les objets d'e-mail n'interprètent pas le HTML mais un retour à la ligne
// injecté dans le sujet peut casser les en-têtes : on l'aplatit.
export function toSubjectPart(value: unknown): string {
  return String(value ?? '').replace(/[\r\n]+/g, ' ').trim()
}

// Transporteur Gmail partagé par toutes les routes d'e-mail. Échoue avec un
// message explicite si les variables d'environnement manquent (sur Vercel :
// Settings → Environment Variables), au lieu d'un 535 cryptique.
export function createMailer(): { transporter: Transporter; from: string } {
  const user = process.env.GMAIL_USER
  // Google affiche le mot de passe d'application par groupes de 4 séparés par
  // des espaces — on les retire pour que le copier-coller ne casse pas l'auth.
  const pass = (process.env.GMAIL_APP_PASSWORD || '').replace(/\s+/g, '')

  if (!user || !pass) {
    throw new Error(
      'GMAIL_USER / GMAIL_APP_PASSWORD manquants — configurez les variables d’environnement du déploiement'
    )
  }

  return {
    from: user,
    transporter: nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      requireTLS: true,
      auth: { user, pass },
    }),
  }
}
