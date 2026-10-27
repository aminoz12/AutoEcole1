import { NextResponse } from 'next/server'
import { createMailer, escapeHtml, LEADS_INBOX } from '@/lib/mailer'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const raw = body as Record<string, unknown>

    // Validate required fields
    if (!raw.fullName || !raw.email || !raw.phone || !raw.status) {
      return NextResponse.json(
        { error: 'Veuillez remplir tous les champs obligatoires' },
        { status: 400 }
      )
    }

    const fullName = escapeHtml(raw.fullName)
    const email = escapeHtml(raw.email)
    const phone = escapeHtml(raw.phone)
    const status = escapeHtml(raw.status)
    const licenseType = raw.licenseType ? escapeHtml(raw.licenseType) : ''
    const message = raw.message ? escapeHtml(raw.message) : ''

    const { transporter, from } = createMailer()

    const submittedAt =
      new Date().toLocaleDateString('fr-FR') + ' à ' + new Date().toLocaleTimeString('fr-FR')

    // Email content
    const mailOptions = {
      from,
      to: LEADS_INBOX,
      subject: 'Nouvelle demande CPF — Auto Ecole Des Paquerettes',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #333; border-bottom: 2px solid #ec4899; padding-bottom: 10px;">
            Nouvelle demande de financement CPF
          </h2>

          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 10px 0;"><strong>Nom complet:</strong> ${fullName}</p>
            <p style="margin: 10px 0;"><strong>Email:</strong> ${email}</p>
            <p style="margin: 10px 0;"><strong>Téléphone:</strong> ${phone}</p>
            <p style="margin: 10px 0;"><strong>Statut:</strong> ${status}</p>
            <p style="margin: 10px 0;"><strong>Catégorie de permis:</strong> ${licenseType || 'Non précisé'}</p>
            ${message ? `<p style="margin: 10px 0;"><strong>Message:</strong> ${message}</p>` : ''}
            <p style="margin: 10px 0;"><strong>Date de la demande:</strong> ${submittedAt}</p>
          </div>

          <p style="color: #666; font-size: 14px;">
            Demande de financement CPF — veuillez recontacter ce candidat sous 24h pour
            l'accompagner dans sa démarche sur Mon Compte Formation.
          </p>
        </div>
      `,
    }

    // Send email
    await transporter.sendMail(mailOptions)

    return NextResponse.json(
      { success: true, message: 'Demande envoyée avec succès' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error sending CPF request email:', error)
    return NextResponse.json(
      { error: 'Erreur lors de l\'envoi de la demande' },
      { status: 500 }
    )
  }
}
