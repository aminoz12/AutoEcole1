import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

interface RegistrationData {
  fullName: string
  email: string
  phone: string
  address: string
  city: string
  dateOfBirth: string
  licenseType: string
}

function getSupabaseClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseKey =
    process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  if (!supabaseUrl || !supabaseKey) {
    return null
  }

  return createClient(supabaseUrl, supabaseKey)
}

export async function POST(request: NextRequest) {
  try {
    const data: RegistrationData = await request.json()

    // Validate required fields
    if (!data.fullName || !data.email || !data.phone || !data.address || !data.city || !data.dateOfBirth) {
      return NextResponse.json(
        { message: 'Données manquantes' },
        { status: 400 }
      )
    }

    // Save registration to Supabase database
    const supabase = getSupabaseClient()
    if (supabase) {
      const { error: dbError } = await supabase
        .from('registrations')
        .insert([
          {
            full_name: data.fullName,
            email: data.email,
            phone: data.phone,
            address: data.address,
            city: data.city,
            date_of_birth: data.dateOfBirth,
            license_type: data.licenseType,
            created_at: new Date().toISOString(),
            status: 'pending',
          },
        ])

      if (dbError) {
        console.error('Database error:', dbError)
        // Continue even if database save fails - still send emails
      }
    }

    // Send confirmation email via Supabase's email service or external API
    if (process.env.RESEND_API_KEY) {
      // If Resend API is configured, use it
      try {
        const response = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
          },
          body: JSON.stringify({
            from: 'noreply@autoecole.com',
            to: data.email,
            subject: 'Votre demande d\'inscription — Auto Ecole Des Paquerettes',
            html: `
              <h2>Merci pour votre inscription!</h2>
              <p>Bonjour ${data.fullName},</p>
              <p>Nous avons bien reçu votre demande d'inscription pour la catégorie de permis <strong>${data.licenseType}</strong>.</p>
              <p>Notre équipe vous contactera très bientôt au numéro <strong>${data.phone}</strong> pour finaliser votre inscription et vous présenter nos offres.</p>
              <hr />
              <h3>Voici les informations que vous avez fournies:</h3>
              <ul>
                <li><strong>Nom:</strong> ${data.fullName}</li>
                <li><strong>Email:</strong> ${data.email}</li>
                <li><strong>Adresse:</strong> ${data.address}, ${data.city}</li>
                <li><strong>Date de naissance:</strong> ${new Date(data.dateOfBirth).toLocaleDateString('fr-FR')}</li>
                <li><strong>Catégorie de permis:</strong> ${data.licenseType}</li>
              </ul>
              <hr />
              <p>Si vous avez des questions, n'hésitez pas à nous appeler au <strong>01 80 83 49 96</strong>.</p>
              <p>Cordialement,<br/>L'équipe Auto Ecole Des Paquerettes</p>
            `,
          }),
        })

        if (!response.ok) {
          console.error('Failed to send email via Resend')
        }
      } catch (emailError) {
        console.error('Resend email error:', emailError)
      }
    }

    return NextResponse.json(
      { message: 'Inscription envoyée avec succès! Vous recevrez un email de confirmation.' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Registration error:', error)
    return NextResponse.json(
      { message: 'Erreur lors de l\'envoi de votre demande' },
      { status: 500 }
    )
  }
}
