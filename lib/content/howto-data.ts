// HowTo step data for the genuinely step-by-step articles, keyed by slug.
// Steps mirror the visible <h2> sections so the markup matches the page content.
export const howToBySlug: Record<
  string,
  { name: string; description: string; steps: { name: string; text: string }[] }
> = {
  '5-astuces-reussir-code-route-premier-coup': {
    name: 'Comment réussir le code de la route du premier coup',
    description:
      'Cinq étapes pour préparer et réussir l\'examen du code de la route dès la première tentative.',
    steps: [
      {
        name: 'Préparez-vous avec les bonnes ressources',
        text: 'Entraînez-vous chaque jour avec des séries en ligne qui simulent les conditions réelles de l\'examen.',
      },
      {
        name: 'Comprenez plutôt que d\'apprendre par cœur',
        text: 'Cherchez la logique de chaque règle pour répondre juste, même aux questions pièges.',
      },
      {
        name: 'Maîtrisez les panneaux de signalisation',
        text: 'Créez des fiches par type de panneau : danger, interdiction, obligation et indication.',
      },
      {
        name: 'Gérez votre stress le jour J',
        text: 'Arrivez en avance, bien reposé, et lisez chaque question calmement avant de répondre.',
      },
      {
        name: 'Analysez chaque question',
        text: 'Éliminez les réponses manifestement fausses avant de choisir, et ne vous précipitez pas.',
      },
    ],
  },
  'comment-gerer-son-stress-pour-reussir-l-examen-de-conduite': {
    name: 'Comment gérer son stress le jour de l\'examen de conduite',
    description:
      'Cinq étapes pour rester calme et confiant le jour de l\'examen pratique du permis de conduire.',
    steps: [
      {
        name: 'Préparez-vous suffisamment en amont',
        text: 'Accumulez les heures de conduite et variez les situations pour gagner en confiance.',
      },
      {
        name: 'Adoptez une bonne hygiène la veille',
        text: 'Dormez suffisamment, mangez normalement et évitez les excitants comme le café en excès.',
      },
      {
        name: 'Respirez et relâchez la pression',
        text: 'Pratiquez la respiration profonde quelques minutes avant de monter dans le véhicule.',
      },
      {
        name: 'Dédramatisez l\'examen',
        text: 'L\'examinateur vérifie que vous conduisez en sécurité ; une petite erreur n\'est pas forcément éliminatoire.',
      },
      {
        name: 'Concentrez-vous sur la conduite, pas sur le résultat',
        text: 'Restez dans l\'instant présent : observez, anticipez et signalez vos intentions.',
      },
    ],
  },
}
