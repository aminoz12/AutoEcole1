export const siteConfig = {
  name: 'Auto Ecole Des Paquerettes',
  tagline: 'Auto-école à Nanterre — permis accéléré, code et CPF',
  description:
    'Auto Ecole Des Paquerettes vous accompagne à Nanterre pour obtenir votre permis de conduire : formation accélérée, boîte manuelle ou automatique, code en ligne et financement CPF.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://autoecoledespaquerettes.fr',
  locale: 'fr_FR',
  email: 'autoecoledespaquerettes@hotmail.com',
  phone: '01 46 49 38 90',
  phoneTel: '0146493890',
  phones: ['01 46 49 38 90'],
  whatsapp: '+33780950041',
  address: {
    street: '375 Avenue de la République',
    city: 'Nanterre',
    postalCode: '92000',
    region: 'Île-de-France',
    country: 'FR',
    geo: { lat: 48.9107144, lng: 2.219769 },
    full: '375 Av. de la République, 92000 Nanterre',
  },
  openingHours: [
    { days: 'Lundi–Jeudi', hours: '10:00–14:00, 15:30–19:00' },
    { days: 'Vendredi', hours: '10:00–13:00, 15:30–19:00' },
    { days: 'Samedi', hours: '10:00–14:00' },
  ],
  drivingHours: [
    { days: 'Lundi–Vendredi', hours: '10:00–20:00' },
    { days: 'Samedi', hours: '09:00–15:00' },
  ],
  keywords: [
    'Auto Ecole Des Paquerettes',
    'auto-école Nanterre',
    'permis de conduire 92',
    'permis accéléré',
    'formation permis B',
    'permis boîte automatique',
    'code de la route',
    'financement CPF permis',
    'leçon de conduite',
  ],
  // Real profile URLs — used for schema `sameAs` (entity graph) and footer icons.
  social: {
    instagram: 'https://www.instagram.com/autoecoledespaquerettes',
    tiktok: 'https://www.tiktok.com/@autoecoledespaquerettes',
    snapchat: 'https://www.snapchat.com/add/autoecoledespaq',
    google: 'https://www.google.com/maps?cid=16506969104775091149',
  } as Record<string, string>,
} as const

export function absoluteUrl(path: string = '/') {
  const base = siteConfig.url.replace(/\/$/, '')
  return path.startsWith('http') ? path : `${base}${path.startsWith('/') ? path : `/${path}`}`
}
