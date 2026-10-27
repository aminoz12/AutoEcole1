import { NextResponse } from 'next/server'
import { createMailer, escapeHtml, LEADS_INBOX, toSubjectPart, toTelHref } from '@/lib/mailer'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    // Formulaire court : seuls nom + téléphone sont obligatoires. Adresse,
    // ville et date de naissance sont collectées au téléphone (les anciens
    // champs restent acceptés s'ils sont envoyés).
    const raw = body as Record<string, unknown>

    if (!raw.fullName || !raw.phone) {
      return NextResponse.json(
        { error: 'Nom et numéro de téléphone requis' },
        { status: 400 }
      )
    }

    const fullName = escapeHtml(raw.fullName)
    const phone = escapeHtml(raw.phone)
    const email = raw.email ? escapeHtml(raw.email) : ''
    const address = raw.address ? escapeHtml(raw.address) : ''
    const city = raw.city ? escapeHtml(raw.city) : ''
    const licenseType = raw.licenseType ? escapeHtml(raw.licenseType) : 'Non précisée'
    const dateOfBirth = typeof raw.dateOfBirth === 'string' ? raw.dateOfBirth : ''
    const telHref = toTelHref(raw.phone)

    const { transporter, from } = createMailer()

    // Format date
    const formattedDate = dateOfBirth ? new Date(dateOfBirth).toLocaleDateString('fr-FR') : ''
    const submittedAt = new Date().toLocaleDateString('fr-FR') + ' à ' + new Date().toLocaleTimeString('fr-FR')

    // Email content
    const mailOptions = {
      from,
      to: LEADS_INBOX,
      subject: `🎯 INSCRIPTION — ${toSubjectPart(raw.fullName)} — ${toSubjectPart(raw.phone)}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #333; border-bottom: 2px solid #ec4899; padding-bottom: 10px;">
            Nouvelle demande d'inscription
          </h2>
          
          <div style="text-align:center;margin:24px 0;">
            <a href="tel:${telHref}" style="display:inline-block;background:#16a34a;color:#ffffff;text-decoration:none;font-size:18px;font-weight:bold;padding:16px 32px;border-radius:999px;">
              ☎️ Appeler ${fullName} maintenant
            </a>
            <p style="margin:10px 0 0;color:#666;font-size:13px;">${phone}</p>
          </div>
          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 10px 0;"><strong>Nom complet:</strong> ${fullName}</p>
            <p style="margin: 10px 0;"><strong>Téléphone:</strong> ${phone}</p>
            ${email ? `<p style="margin: 10px 0;"><strong>Email:</strong> ${email}</p>` : ''}
            ${address ? `<p style="margin: 10px 0;"><strong>Adresse:</strong> ${address}${city ? `, ${city}` : ''}</p>` : ''}
            ${formattedDate ? `<p style="margin: 10px 0;"><strong>Date de naissance:</strong> ${formattedDate}</p>` : ''}
            <p style="margin: 10px 0;"><strong>Formule souhaitée:</strong> ${licenseType}</p>
            <p style="margin: 10px 0;"><strong>Date d'inscription:</strong> ${submittedAt}</p>
          </div>

          <p style="color: #666; font-size: 14px;">
            <strong>Rappelez dans l’heure si possible.</strong> Ce candidat vient de laisser
            ses coordonnées : c’est le moment où il est le plus réceptif.
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
    console.error('Error sending email:', error)
    return NextResponse.json(
      { error: 'Erreur lors de l\'envoi de l\'email' },
      { status: 500 }
    )
  }
}
