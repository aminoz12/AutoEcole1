export type OfficialSource = {
  label: string
  url: string
  description: string
}

export type ArticleReview = {
  reviewedAt: string
  reviewer: {
    name: string
    role: string
    credential: string
  }
}

export const editorialAuthor = {
  name: 'Équipe éditoriale de l’Auto Ecole Des Paquerettes',
  role: 'Information permis et sécurité routière',
}

// Organization-level accreditation is used until named instructor credentials
// have been verified and supplied for publication.
const pedagogicalReviewer = {
  name: 'Équipe pédagogique de l’Auto Ecole Des Paquerettes',
  role: 'Révision pédagogique',
  credential: 'Auto-école agréée — agrément préfectoral E 2209200030',
}

export const articleReviewsBySlug: Record<string, ArticleReview> = {
  'financement-cpf-compte-permis': {
    reviewedAt: '2026-08-14',
    reviewer: pedagogicalReviewer,
  },
  'papiers-inscription-permis-conduire-liste': {
    reviewedAt: '2026-08-14',
    reviewer: pedagogicalReviewer,
  },
  'code-route-nouvelles-regles-2026': {
    reviewedAt: '2026-08-14',
    reviewer: pedagogicalReviewer,
  },
  'conduite-nuit-regles-precautions': {
    reviewedAt: '2026-08-14',
    reviewer: pedagogicalReviewer,
  },
  'conduite-autoroute-regles-base-maitriser': {
    reviewedAt: '2026-08-14',
    reviewer: pedagogicalReviewer,
  },
  'apprendre-conduire-nanterre-situations-cles': {
    reviewedAt: '2026-08-14',
    reviewer: pedagogicalReviewer,
  },
}

const ants: OfficialSource = {
  label: 'France Titres (ANTS) — démarches permis de conduire',
  url: 'https://permisdeconduire.ants.gouv.fr/demarches-en-ligne?lang=fr',
  description: 'Inscription à l’examen et démarches officielles liées au permis.',
}

const cpf: OfficialSource = {
  label: 'Mon Compte Formation — permis de conduire',
  url: 'https://www.moncompteformation.gouv.fr/espace-public/tout-savoir-sur-le-permis-de-conduire',
  description: 'Conditions d’éligibilité et règles de financement CPF du permis.',
}

const roadSafety: OfficialSource = {
  label: 'Observatoire national interministériel de la sécurité routière — Code de la route',
  url: 'https://www.onisr.securite-routiere.gouv.fr/politique-de-securite-routiere/code-de-la-route',
  description: 'Référence officielle sur les règles de circulation et de sécurité routière.',
}

export const officialSourcesBySlug: Record<string, OfficialSource[]> = {
  'financement-cpf-compte-permis': [cpf],
  'papiers-inscription-permis-conduire-liste': [ants],
  'code-route-nouvelles-regles-2026': [roadSafety],
  'conduite-nuit-regles-precautions': [roadSafety],
  'conduite-autoroute-regles-base-maitriser': [roadSafety],
  'apprendre-conduire-nanterre-situations-cles': [roadSafety],
}
