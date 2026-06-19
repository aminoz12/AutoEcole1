// Single source of truth for driving-course pricing.
// Consumed by the PricingSection UI and by the Product/Offer JSON-LD on /tarifs,
// so the structured data can never drift from what visitors actually see.

export type PackKey = 'manuelle' | 'auto' | 'manuelle-code' | 'auto-code'

export interface Pack {
  title: string
  monthly?: number
  total: number
  popular?: boolean
  features: string[]
}

export const packCategories: { key: PackKey; label: string }[] = [
  { key: 'manuelle', label: 'Boîte Manuelle - SANS CODE' },
  { key: 'auto', label: 'Boîte Auto - SANS CODE' },
  { key: 'manuelle-code', label: 'Boîte Manuelle + CODE' },
  { key: 'auto-code', label: 'Boîte Auto + CODE' },
]

export const packsData: Record<PackKey, Pack[]> = {
  manuelle: [
    {
      title: 'Permis B 20h',
      total: 899,
      features: [
        'Leçons de conduite 20h',
        'Fourniture pédagogique (livret apprentissage)',
        ' Paiement en 2 fois sans frais',
        'Suivi pédagogique',
      ],
    },
    {
      title: 'PERMIS B 40H',
      total: 1699,
      features: [
        'Leçons de conduite 40h',
        'Fourniture pédagogique (livret apprentissage)',
        ' Paiement en 2 fois sans frais',
        'Suivi pédagogique',
      ],
    },
    {
      title: 'Permis B accéléré 20h',
      total: 1499,
      popular: true,
      features: [
        'Formation pratique en accéléré minimum 20H',
        'Fourniture pédagogique (livret apprentissage)',
        ' Paiement en 2 fois sans frais',
        'Suivi pédagogique',
      ],
    },
    {
      title: 'Permis B 30h',
      total: 1399,
      features: [
        'Leçons de conduite 30h',
        'Fourniture pédagogique (livret apprentissage)',
        ' Paiement en 2 fois sans frais',
        'Suivi pédagogique',
      ],
    },
  ],
  auto: [
    {
      title: 'Permis BEA 13h',
      total: 799,
      features: [
        'Leçons de conduite 13h',
        'Fourniture pédagogique (livret apprentissage)',
        ' Paiement en 2 fois sans frais',
        'Suivi pédagogique',
      ],
    },
    {
      title: 'Permis BEA 20h accéléré',
      total: 1699,
      popular: true,
      features: [
        'Leçons de conduite 20h',
        'Fourniture pédagogique (livret apprentissage)',
        ' Paiement en 2 fois sans frais',
        'Suivi pédagogique',
      ],
    },
    {
      title: 'Permis BEA 20h',
      total: 1249,
      features: [
        'Leçons de conduite 20h',
        'Fourniture pédagogique (livret apprentissage)',
        ' Paiement en 2 fois sans frais',
        'Suivi pédagogique',
      ],
    },
    {
      title: 'Permis BEA 30h',
      total: 1699,
      features: [
        'Leçons de conduite 30h',
        'Fourniture pédagogique (livret apprentissage)',
        ' Paiement en 2 fois sans frais',
        'Suivi pédagogique',
      ],
    },
    {
      title: 'FORMULE 20H ACCÉLÉRÉ',
      monthly: 150,
      total: 1500,
      features: [
        'Terminez votre formation en 10 jours',
        ' Paiement en 2 fois sans frais',
        'Suivi pédagogique',
      ],
    },
    {
      title: 'Permis BEA 13h accéléré',
      total: 1199,
      features: [
        'Leçons de conduite 13h',
        'Fourniture pédagogique (livret apprentissage)',
        'Paiement en 2 fois sans frais',
        'Suivi pédagogique',
      ],
    },
  ],
  'manuelle-code': [
    {
      title: 'FORMULE 20H',
      total: 899,
      features: [
        'Cours de code illimité (1 an)',
        '20h de leçons de conduite',
        'Paiement en 2 fois sans frais',
        'Suivi pédagogique',
      ],
    },
    {
      title: 'FORMULE 30H',
      total: 1399,
      features: [
        'Cours de code illimité (1 an)',
        '30h de leçons de conduite',
        'Paiement en 2 fois sans frais',
        'Suivi pédagogique',
      ],
    },
    {
      title: 'FORMULE 20H ACCÉLÉRÉ',
      total: 1490,
      features: [
        'Terminez votre formation rapidement',
        'Paiement en 2 fois sans frais',
        'Suivi pédagogique',
      ],
    },
    {
      title: 'FORMULE 40H',
      total: 1699,
      features: [
        'Cours de code illimité (1 an)',
        '40h de leçons de conduite',
        'Paiement en 2 fois sans frais',
        'Suivi pédagogique',
      ],
    },
  ],
  'auto-code': [
    {
      title: 'FORMULE 13H',
      total: 799,
      features: [
        'Cours de code illimité (1 an)',
        '13h de leçons de conduite',
        'Paiement en 2 fois sans frais',
        'Suivi pédagogique',
      ],
    },
    {
      title: 'FORMULE 20H',
      total: 1249,
      features: [
        'Cours de code illimité (1 an)',
        '20h de leçons de conduite',
        'Paiement en 2 fois sans frais',
        'Suivi pédagogique',
      ],
    },
    {
      title: 'FORMULE 20H ACCÉLÉRÉ',
      total: 1740,
      features: [
        'Terminez votre formation rapidement',
        'Paiement en 2 fois sans frais',
        'Suivi pédagogique',
      ],
    },
    {
      title: 'FORMULE 30H',
      total: 1749,
      features: [
        'Cours de code illimité (1 an)',
        '30h de leçons de conduite',
        'Paiement en 2 fois sans frais',
        'Suivi pédagogique',
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
