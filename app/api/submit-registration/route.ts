import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    // Formulaire court : seuls nom + téléphone sont obligatoires. Adresse,
    // ville et date de naissance sont collectées au téléphone (les anciens
    // champs restent acceptés s'ils sont envoyés).
    const { fullName, email, phone, address, city, dateOfBirth, licenseType } = body

    if (!fullName || !phone) {
      return NextResponse.json(
        { error: 'Nom et numéro de téléphone requis' },
        { status: 400 }
      )
    }

    // Create email transporter
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

    // Format date
    const formattedDate = dateOfBirth ? new Date(dateOfBirth).toLocaleDateString('fr-FR') : ''
    const submittedAt = new Date().toLocaleDateString('fr-FR') + ' à ' + new Date().toLocaleTimeString('fr-FR')

    // Email content
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: 'autoecole.despaquerettes@gmail.com',
      subject: 'Nouvelle demande d\'inscription — Auto Ecole Des Paquerettes',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #333; border-bottom: 2px solid #ec4899; padding-bottom: 10px;">
            Nouvelle demande d'inscription
          </h2>
          
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
            Veuillez contacter ce candidat sous 24h pour finaliser son inscription.
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
