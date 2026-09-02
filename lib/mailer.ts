import nodemailer from 'nodemailer'
import type { Transporter } from 'nodemailer'

// Boîte qui reçoit tous les leads (inscriptions, contact, rappels, CPF).
export const LEADS_INBOX = 'autoecole.despaquerettes@gmail.com'

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
      auth: { user, pass },
      tls: {
        rejectUnauthorized: false,
      },
    }),
  }
}
