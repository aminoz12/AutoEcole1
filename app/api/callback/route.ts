import { NextResponse } from 'next/server'
import { createMailer, escapeHtml, LEADS_INBOX, toSubjectPart, toTelHref } from '@/lib/mailer'

// Demande de rappel : formulaire court (nom + téléphone) affiché sur les pages
// villes, les articles de blog et la popup. Le but est de générer un appel
// sortant de l'équipe, pas de constituer un dossier.
export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { fullName: rawName, phone: rawPhone, source: rawSource } = body

    if (!rawName || !rawPhone) {
      return NextResponse.json(
        { error: 'Nom et numéro de téléphone requis' },
        { status: 400 }
      )
    }

    const fullName = escapeHtml(rawName)
    const phone = escapeHtml(rawPhone)
    const source = rawSource ? escapeHtml(rawSource) : ''
    const telHref = toTelHref(rawPhone)

    const { transporter, from } = createMailer()

    const submittedAt =
      new Date().toLocaleDateString('fr-FR') +
      ' à ' +
      new Date().toLocaleTimeString('fr-FR')

    const mailOptions = {
      from,
      to: LEADS_INBOX,
      subject: `📞 RAPPEL — ${toSubjectPart(rawName)} — ${toSubjectPart(rawPhone)}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #333; border-bottom: 2px solid #ec4899; padding-bottom: 10px;">
            Demande de rappel
          </h2>
          <div style="text-align:center;margin:24px 0;">
            <a href="tel:${telHref}" style="display:inline-block;background:#16a34a;color:#ffffff;text-decoration:none;font-size:18px;font-weight:bold;padding:16px 32px;border-radius:999px;">
              ☎️ Appeler ${fullName} maintenant
            </a>
            <p style="margin:10px 0 0;color:#666;font-size:13px;">${phone}</p>
          </div>
          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 10px 0;"><strong>Nom:</strong> ${fullName}</p>
            <p style="margin: 10px 0;"><strong>Téléphone:</strong> ${phone}</p>
            ${source ? `<p style="margin: 10px 0;"><strong>Page d'origine:</strong> ${source}</p>` : ''}
            <p style="margin: 10px 0;"><strong>Envoyée le:</strong> ${submittedAt}</p>
          </div>
          <p style="color: #666; font-size: 14px;">
            <strong>Rappelez dans l’heure si possible.</strong> Au-delà de quelques heures,
            les chances de joindre le prospect chutent fortement.
          </p>
        </div>
      `,
    }

    await transporter.sendMail(mailOptions)

    return NextResponse.json(
      { success: true, message: 'Demande envoyée avec succès' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error sending callback email:', error)
    return NextResponse.json(
      { error: "Erreur lors de l'envoi de la demande" },
      { status: 500 }
    )
  }
}
