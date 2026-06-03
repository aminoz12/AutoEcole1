# Configuration du Formulaire d'Inscription

## Configuration requise

### 1. Créer la table dans Supabase

1. Allez sur [Supabase Dashboard](https://app.supabase.com)
2. Sélectionnez votre projet
3. Allez dans **SQL Editor**
4. Copiez et exécutez le contenu du fichier `supabase/create_registrations_table.sql`

Cela créera la table `registrations` où seront stockées toutes les demandes d'inscription.

### 2. Configurer l'envoi d'emails (Optionnel mais recommandé)

#### Option A: Utiliser Resend (Recommandé - Plus simple)

1. Créez un compte gratuit sur [Resend.com](https://resend.com)
2. Générez une clé API
3. Ajoutez la clé à votre fichier `.env.local`:

```env
RESEND_API_KEY=re_xxxxxxxxxxxxx
```

4. Mettez à jour le fichier `app/api/send-registration/route.ts` avec votre domaine Resend

#### Option B: Utiliser Gmail ou un serveur SMTP

1. Installez nodemailer:
```bash
npm install nodemailer
npm install --save-dev @types/nodemailer
```

2. Remplacez le contenu de `app/api/send-registration/route.ts` par:

```typescript
import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

interface RegistrationData {
  fullName: string
  email: string
  phone: string
  address: string
  city: string
  dateOfBirth: string
  licenseType: string
}

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.SMTP_EMAIL,
    pass: process.env.SMTP_PASSWORD, // Utiliser un App Password pour Gmail
  },
})

export async function POST(request: NextRequest) {
  try {
    const data: RegistrationData = await request.json()

    if (!data.fullName || !data.email || !data.phone || !data.address || !data.city || !data.dateOfBirth) {
      return NextResponse.json(
        { message: 'Données manquantes' },
        { status: 400 }
      )
    }

    // Email de confirmation à l'utilisateur
    await transporter.sendMail({
      from: process.env.SMTP_EMAIL,
      to: data.email,
      subject: 'Votre demande d\'inscription - AutoEcole Pro',
      html: `
        <h2>Merci pour votre inscription!</h2>
        <p>Bonjour ${data.fullName},</p>
        <p>Nous avons bien reçu votre demande d'inscription pour la catégorie de permis <strong>${data.licenseType}</strong>.</p>
        <p>Notre équipe vous contactera très bientôt au numéro <strong>${data.phone}</strong> pour finaliser votre inscription.</p>
        <p>Cordialement,<br/>L'équipe AutoEcole Pro</p>
      `,
    })

    // Email admin
    await transporter.sendMail({
      from: process.env.SMTP_EMAIL,
      to: process.env.ADMIN_EMAIL,
      subject: `Nouvelle inscription - ${data.fullName}`,
      html: `
        <h2>Nouvelle demande d'inscription</h2>
        <p><strong>Nom:</strong> ${data.fullName}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Téléphone:</strong> ${data.phone}</p>
        <p><strong>Adresse:</strong> ${data.address}, ${data.city}</p>
        <p><strong>Date de naissance:</strong> ${new Date(data.dateOfBirth).toLocaleDateString('fr-FR')}</p>
        <p><strong>Catégorie:</strong> ${data.licenseType}</p>
      `,
    })

    return NextResponse.json(
      { message: 'Inscription envoyée avec succès!' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error:', error)
    return NextResponse.json(
      { message: 'Erreur lors de l\'envoi' },
      { status: 500 }
    )
  }
}
```

3. Ajoutez à `.env.local`:

```env
SMTP_EMAIL=votre.email@gmail.com
SMTP_PASSWORD=votre_app_password
ADMIN_EMAIL=admin@autoecole.com
```

### 3. Vérifier le fonctionnement

1. Allez à `http://localhost:3000/s-inscrire`
2. Remplissez le formulaire
3. Cliquez sur "Envoyer ma demande"
4. Vérifiez:
   - La table `registrations` dans Supabase pour voir les données
   - Votre boîte email pour la confirmation

## Structure du formulaire

- ✅ Nom complet
- ✅ Email
- ✅ Téléphone
- ✅ Adresse
- ✅ Ville
- ✅ Date de naissance
- ✅ Catégorie de permis (B, A1, A2, A)
- ❌ Pas de mot de passe (formulaire simple)

## Données envoyées à l'email

Chaque inscription inclut:
- Informations personnelles complètes
- Catégorie de permis choisie
- Date d'inscription
- Statut (en attente de traitement)

## Support

Si vous avez besoin d'aide:
1. Vérifiez que `NEXT_PUBLIC_SUPABASE_URL` et `SUPABASE_SERVICE_ROLE_KEY` sont configurés dans `.env.local`
2. Vérifiez les logs du serveur pour les erreurs
3. Assurez-vous que la table `registrations` existe dans Supabase
