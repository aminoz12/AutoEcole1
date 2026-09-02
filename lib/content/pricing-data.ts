// Single source of truth for driving-course pricing.
// Consumed by the PricingSection UI and by the Product/Offer JSON-LD on /tarifs,
// so the structured data can never drift from what visitors actually see.

export type PackKey = 'manuelle' | 'auto'

export interface Pack {
  title: string
  monthly?: number
  total: number
  popular?: boolean
  features: string[]
}

// Deux catégories seulement : le code (collectif illimité 1 an, ou intensif
// pour l'accéléré) est désormais inclus dans toutes les formules.
export const packCategories: { key: PackKey; label: string }[] = [
  { key: 'manuelle', label: 'Boîte Manuelle' },
  { key: 'auto', label: 'Boîte Automatique' },
]

export const packsData: Record<PackKey, Pack[]> = {
  manuelle: [
    {
      title: 'Permis B 20H',
      total: 899,
      popular: true,
      features: [
        'Frais de constitution de dossier + démarches préfecture',
        'Cours de code collectif illimité pendant 1 an',
        'Leçons de conduite 20h',
        'Fourniture pédagogique (livret apprentissage)',
      ],
    },
    {
      title: 'Permis B AAC',
      total: 1100,
      features: [
        'Frais de constitution de dossier + démarches préfecture',
        'Cours de code collectif illimité pendant 1 an',
        'Leçons de conduite 20h',
        'Fourniture pédagogique (livret apprentissage)',
      ],
    },
    {
      title: 'Permis B 30H',
      total: 1449,
      features: [
        'Frais de constitution de dossier + démarches préfecture',
        'Cours de code collectif illimité pendant 1 an',
        'Leçons de conduite 30h',
        'Fourniture pédagogique (livret apprentissage)',
      ],
    },
    {
      title: 'Permis B 20H accéléré',
      total: 1559,
      features: [
        'Frais de constitution de dossier + démarches préfecture',
        'Séances de code intensif',
        'Formation pratique en accéléré minimum 20h',
        'Fourniture pédagogique (livret apprentissage)',
      ],
    },
    {
      title: 'Permis B 40H',
      total: 1749,
      features: [
        'Frais de constitution de dossier + démarches préfecture',
        'Cours de code collectif illimité pendant 1 an',
        'Leçons de conduite 40h',
        'Fourniture pédagogique (livret apprentissage)',
      ],
    },
  ],
  auto: [
    {
      title: 'Permis B 13H',
      total: 799,
      popular: true,
      features: [
        'Frais de constitution de dossier + démarches préfecture',
        'Cours de code collectif illimité pendant 1 an',
        'Leçons de conduite 13h',
        'Fourniture pédagogique (livret apprentissage)',
      ],
    },
    {
      title: 'Permis B 20H',
      total: 1249,
      features: [
        'Frais de constitution de dossier + démarches préfecture',
        'Cours de code collectif illimité pendant 1 an',
        'Leçons de conduite 20h',
        'Fourniture pédagogique (livret apprentissage)',
      ],
    },
    {
      title: 'Permis B AAC',
      total: 1250,
      features: [
        'Frais de constitution de dossier + démarches préfecture',
        'Cours de code collectif illimité pendant 1 an',
        'Leçons de conduite 20h',
        'Fourniture pédagogique (livret apprentissage)',
      ],
    },
    {
      title: 'Permis B 20H accéléré',
      total: 1749,
      features: [
        'Frais de constitution de dossier + démarches préfecture',
        'Séances de code intensif',
        'Formation pratique en accéléré minimum 20h',
        'Fourniture pédagogique (livret apprentissage)',
      ],
    },
    {
      title: 'Permis B 30H',
      total: 1749,
      features: [
        'Frais de constitution de dossier + démarches préfecture',
        'Cours de code collectif illimité pendant 1 an',
        'Leçons de conduite 30h',
        'Fourniture pédagogique (livret apprentissage)',
      ],
    },
  ],
}

export interface WebPlan {
  name: string
  price: string
  variant: 'primary' | 'secondary'
  perks: string[]
}

export const webPlans: WebPlan[] = [
  {
    name: 'Pack Web — Accès illimité',
    price: '29',
    variant: 'primary',
    perks: [
      'Révisez le code où vous voulez, quand vous voulez',
      'Accès illimité sans date limite',
      'Plus de 2000 questions',
      'Exercices liés au code de la route',
    ],
  },
  {
    name: 'Pack Web — Accès 1 mois',
    price: '10',
    variant: 'secondary',
    perks: [
      'Révisez le code où vous voulez, quand vous voulez',
      'Accès illimité pendant 1 mois',
      'Plus de 2000 questions',
      'Exercices liés au code de la route',
    ],
  },
]
