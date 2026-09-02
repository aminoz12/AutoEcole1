import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

// Demande de rappel : formulaire court (nom + téléphone) affiché sur les pages
// villes, les articles de blog et la popup. Le but est de générer un appel
// sortant de l'équipe, pas de constituer un dossier.
export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { fullName, phone, source } = body

    if (!fullName || !phone) {
      return NextResponse.json(
        { error: 'Nom et numéro de téléphone requis' },
        { status: 400 }
      )
    }

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
      tls: {
        rejectUnauthorized: false,
      },
    })

    const submittedAt =
      new Date().toLocaleDateString('fr-FR') +
      ' à ' +
      new Date().toLocaleTimeString('fr-FR')

    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: 'autoecole.despaquerettes@gmail.com',
      subject: '📞 Demande de rappel — Auto Ecole Des Paquerettes',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #333; border-bottom: 2px solid #ec4899; padding-bottom: 10px;">
            Demande de rappel
          </h2>
          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 10px 0;"><strong>Nom:</strong> ${fullName}</p>
            <p style="margin: 10px 0;"><strong>Téléphone:</strong> ${phone}</p>
            ${source ? `<p style="margin: 10px 0;"><strong>Page d'origine:</strong> ${source}</p>` : ''}
            <p style="margin: 10px 0;"><strong>Envoyée le:</strong> ${submittedAt}</p>
          </div>
          <p style="color: #666; font-size: 14px;">
            Ce prospect attend un rappel — le contacter le plus vite possible augmente
            fortement les chances de conversion.
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
