# Auto École des Pâquerettes — site web

Site vitrine et de génération de leads de l'auto-école des Pâquerettes
(375 avenue de la République, 92000 Nanterre), en ligne sur
[autoecoledespaquerettes.fr](https://autoecoledespaquerettes.fr).

Le site n'a pas de base de données : tout le contenu est versionné dans le
dépôt, et chaque formulaire envoie un e-mail à l'équipe via Gmail.

## Stack

- **Next.js 14** (App Router, TypeScript), déployé sur **Vercel**
- **Tailwind CSS** + Framer Motion, icônes Lucide
- **Nodemailer** (SMTP Gmail) pour les leads
- three.js pour le globe décoratif de la section « pack web » (chargé à la demande)

## Démarrer

```bash
npm install
cp .env.example .env.local   # puis renseigner GMAIL_USER / GMAIL_APP_PASSWORD
npm run dev                  # http://localhost:3000
```

`npm run build` reproduit le build Vercel. `npm run lint` lance ESLint.

## Organisation du code

```
app/
  page.tsx                     Accueil
  tarifs/ s-inscrire/ contact/ permis-moto/ prestations-a-l-unite/ a-propos/
  permis-accelere/             Page pilier + /permis-accelere/[ville] (16 villes)
  auto-ecole-<ville>/          20 pages locales (une ligne chacune, données dans lib/content)
  blog/ blog/[slug]/           46 articles, contenu dans lib/blog-data.ts
  merci/                       Confirmation après envoi d'un formulaire (noindex)
  cgv/ mentions-legales/
  api/callback | contact | cpf-request | submit-registration
                               Routes d'e-mail (voir lib/mailer.ts)
  sitemap.ts robots.ts         Générés à partir des données de contenu

components/
  Header, Footer, HeroSection, PricingSection, CallbackForm, RegistrationForm…
  city/CityLandingPage         Gabarit des pages villes
  accelere/                    Gabarit des pages permis accéléré
  blog/                        Liste et article
  seo/JsonLd                   Schémas Organization, FAQ, Breadcrumb, Offer, BlogPosting, HowTo
  ConsentBanner                Bandeau cookies : GTM, GA4, Meta Pixel et Ahrefs
                               ne se chargent qu'après acceptation

lib/
  seo/site-config.ts           Identité de l'entreprise : adresse, horaires, SIREN, réseaux
  seo/metadata.ts              createPageMetadata() — budgets title/description
  content/                     Villes, tarifs, FAQ, HowTo, moto, données éditoriales
  blog-data.ts                 Articles (HTML dans des chaînes)
  mailer.ts                    Transport Gmail partagé + échappement HTML
  analytics.ts                 trackEvent / trackLead (GA4 + dataLayer + Meta)
  phone.ts                     Validation et formatage des numéros français
```

## Règles de contenu

- **Tarifs** : une seule source, `lib/content/pricing-data.ts`. Elle alimente
  l'interface ET le JSON-LD Offer, pour que les deux ne divergent jamais.
- **Titres** : `createPageMetadata` tronque le suffixe de marque au-delà de
  60 caractères et la description à 158, pour éviter la coupe dans Google.
- **Nouvelle ville** : ajouter l'entrée dans `lib/content/cities-data.ts`, créer
  `app/auto-ecole-<slug>/page.tsx` sur le modèle des autres, le sitemap suit.
- **Nouvel article** : ajouter l'objet dans `lib/blog-data.ts` avec un visuel
  WebP dans `public/blog/`. Les anciennes URLs sont redirigées dans
  `next.config.js`, qui porte aussi les 301 héritées de l'ancien site.

## Variables d'environnement

| Variable | Obligatoire | Rôle |
|---|---|---|
| `GMAIL_USER` | oui | Expéditeur SMTP Gmail |
| `GMAIL_APP_PASSWORD` | oui | Mot de passe d'application Google |
| `NEXT_PUBLIC_SITE_URL` | oui | URL canonique (metadata, sitemap, JSON-LD) |
| `LEADS_INBOX` | non | Boîte de réception des leads (défaut dans `lib/mailer.ts`) |

## Déploiement

Voir [VERCEL_DEPLOYMENT.md](VERCEL_DEPLOYMENT.md).
