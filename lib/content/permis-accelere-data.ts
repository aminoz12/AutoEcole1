import type { Pack, PackKey } from './pricing-data'
import { packsData } from './pricing-data'

// Données de la page /permis-accelere et de ses déclinaisons locales
// /permis-accelere/<ville>. Chaque page ville DOIT porter un angle et des
// textes réellement différents (mot-clé, transport, contexte local) — des
// pages quasi identiques seraient traitées en doorway pages par Google.

export interface AccelereOffer {
  pack: Pack
  catKey: PackKey
  transmission: string
}

const findPack = (cat: PackKey, title: string): Pack => {
  const pack = packsData[cat].find((p) => p.title === title)
  if (!pack) throw new Error(`Pack introuvable: ${cat}/${title}`)
  return pack
}

// Les 4 forfaits mis en avant sur les pages « permis accéléré ». Trois
// proviennent de la grille tarifaire (source unique) ; le 13H accéléré est
// propre à cette offre.
export const accelereOffers: AccelereOffer[] = [
  {
    catKey: 'auto',
    transmission: 'Boîte automatique',
    pack: {
      title: 'Permis B 13H accéléré',
      total: 1199,
      features: [
        'Frais de constitution de dossier + démarches préfecture',
        'Séances de code intensif',
        'Formation pratique en accéléré minimum 13h',
        'Fourniture pédagogique (livret apprentissage)',
      ],
    },
  },
  {
    catKey: 'manuelle',
    transmission: 'Boîte manuelle',
    pack: findPack('manuelle', 'Permis B 20H accéléré'),
  },
  {
    catKey: 'auto',
    transmission: 'Boîte automatique',
    pack: findPack('auto', 'Permis B 20H accéléré'),
  },
  {
    catKey: 'auto',
    transmission: 'Manuelle ou automatique',
    pack: findPack('auto', 'Représentation Rapide'),
  },
]

export interface AccelereCity {
  slug: string
  name: string
  /** H1 — chaque ville joue une variante de mot-clé différente. */
  h1: string
  /** Balise <title> — phrasé distinct du H1. */
  title: string
  metaDescription: string
  /** 2 paragraphes uniques (angle local). */
  intro: string[]
  /** 1 question locale, ajoutée aux FAQ communes de la page. */
  faq: { question: string; answer: string }
  /** Slug de la page /auto-ecole-<slug> correspondante (maillage interne). */
  cityPageSlug?: string
}

export const accelerePath = (city: AccelereCity) => `/permis-accelere/${city.slug}`

export function getAccelereCity(slug: string): AccelereCity | undefined {
  return accelereCities.find((c) => c.slug === slug)
}

export const accelereCities: AccelereCity[] = [
  {
    slug: 'paris',
    name: 'Paris',
    h1: 'Permis accéléré près de Paris — décrochez-le en quelques semaines',
    title: 'Permis accéléré près de Paris — permis rapide dès 1 199 €',
    metaDescription:
      'Permis accéléré près de Paris : stage intensif code + conduite, boîte auto ou manuelle, dès 1 199 €. À Nanterre, accessible en RER A depuis Paris.',
    intro: [
      'À Paris intra-muros, entre les listes d’attente des auto-écoles et les délais pour obtenir une place d’examen, un permis peut traîner des mois. Notre solution : une formation accélérée à Nanterre, à quelques minutes de Paris en RER A — vous concentrez code et conduite sur quelques semaines au lieu de les étaler sur un an.',
      'Beaucoup de nos élèves parisiens viennent de l’ouest de la capitale : le trajet est souvent plus court que de traverser Paris pour rejoindre une auto-école de quartier saturée. Formation intensive en boîte manuelle ou automatique, moniteurs diplômés d’État, et passage de l’examen sur les centres du secteur, moins engorgés que ceux de Paris.',
    ],
    faq: {
      question: 'Pourquoi passer un permis accéléré à Nanterre plutôt qu’à Paris ?',
      answer:
        'Les délais parisiens (inscription, places d’examen) sont parmi les plus longs de France. À Nanterre, vous démarrez plus vite, vous conduisez sur les parcours réels des centres d’examen des Hauts-de-Seine, et le RER A vous amène de Paris en quelques minutes.',
    },
  },
  {
    slug: 'la-defense',
    name: 'La Défense',
    h1: 'Permis accéléré près de La Défense — formez-vous entre deux réunions',
    title: 'Permis accéléré près de La Défense — stage intensif',
    metaDescription:
      'Permis accéléré près de La Défense : stage intensif dès 1 199 €, leçons jusqu’à 20h après le bureau, à quelques minutes en RER A. Code intensif inclus.',
    intro: [
      'Une mutation, une promotion, un poste qui exige le permis ? Quand la deadline est professionnelle, la formule classique étalée sur des mois ne suffit pas. Notre stage accéléré, à quelques minutes de La Défense, concentre code intensif et conduite sur quelques semaines — avec des leçons jusqu’à 20h pour caler la formation autour de vos journées de travail.',
      'Depuis la Grande Arche, l’agence se rejoint en RER A en quelques minutes. Nos élèves salariés enchaînent souvent deux heures de conduite en fin de journée ou bloquent des demi-journées : le planning intensif est construit avec vous, en fonction de votre agenda professionnel.',
    ],
    faq: {
      question: 'Je travaille à La Défense : le stage accéléré est-il compatible avec un temps plein ?',
      answer:
        'Oui — c’est le profil type de nos élèves en accéléré. Leçons jusqu’à 20h en semaine, samedi 9h–15h, et possibilité de concentrer les heures sur vos jours off. Le code intensif se prépare en ligne et en séances dédiées.',
    },
  },
  {
    slug: 'courbevoie',
    name: 'Courbevoie',
    h1: 'Permis accéléré proche de Courbevoie — votre permis sans attendre',
    title: 'Permis accéléré près de Courbevoie — stage intensif',
    metaDescription:
      'Permis accéléré près de Courbevoie : formation intensive dès 1 199 €, code inclus, date d’examen prioritaire. Auto-école à Nanterre, à quelques minutes.',
    intro: [
      'Courbevoie touche Nanterre : pour un habitant de Bécon ou du centre, notre agence de l’avenue de la République est souvent plus proche que certaines auto-écoles de sa propre ville — et surtout, nos plannings accélérés démarrent sans liste d’attente.',
      'Le principe du stage : évaluation de départ, séances de code intensif, puis vos heures de conduite concentrées sur quelques semaines avec le même moniteur. Dès que le niveau est là, nous réservons la date d’examen — vous passez au bon moment, pas trois mois plus tard.',
    ],
    faq: {
      question: 'En combien de temps un habitant de Courbevoie peut-il obtenir son permis en accéléré ?',
      answer:
        'Tout dépend de vos disponibilités et de votre niveau de départ, mais l’objectif du stage est d’être prêt pour l’examen en quelques semaines — code et conduite compris — au lieu de plusieurs mois en formule classique.',
    },
  },
  {
    slug: 'puteaux',
    name: 'Puteaux',
    h1: 'Permis rapide près de Puteaux — l’accéléré qui tient ses délais',
    title: 'Permis rapide près de Puteaux — accéléré dès 1 199 €',
    metaDescription:
      'Permis rapide près de Puteaux : stage accéléré code + conduite, boîte auto dès 1 199 €, date d’examen prioritaire. Auto-école à Nanterre, accès direct.',
    intro: [
      'Entre la Seine et La Défense, Puteaux est à quelques minutes de notre agence de Nanterre. Si vous avez besoin du permis vite — un emploi, un stage, un déménagement — la formule accélérée remplace des mois d’attente par quelques semaines de formation intensive.',
      'Vous démarrez par une évaluation, puis le planning est verrouillé d’un bloc : séances de code intensif, heures de conduite rapprochées, examen blanc, et réservation de la date d’examen dès que vous êtes prêt(e). Boîte manuelle ou automatique, moniteurs diplômés d’État.',
    ],
    faq: {
      question: 'Quelle est la formule accélérée la plus rapide pour un habitant de Puteaux ?',
      answer:
        'Le Permis B 13H accéléré en boîte automatique (1 199 €) : moins d’heures obligatoires qu’en manuelle, un apprentissage plus simple, et la passerelle de 7h vers la boîte manuelle reste possible ensuite, sans délai d’attente depuis mars 2024.',
    },
  },
  {
    slug: 'colombes',
    name: 'Colombes',
    h1: 'Passez votre permis rapidement, proche de Colombes',
    title: 'Permis accéléré près de Colombes — code + conduite',
    metaDescription:
      'Passer le permis rapidement près de Colombes : stage accéléré dès 1 199 €, code intensif inclus, tram T2 direct vers notre agence de Nanterre.',
    intro: [
      'Depuis le Petit-Colombes ou le centre, le tram T2 et l’avenue de la République mettent notre agence à moins de dix minutes. Pour les habitants de Colombes pressés d’obtenir le permis, le stage accéléré concentre toute la formation — code compris — sur quelques semaines.',
      'C’est la formule qu’on recommande aux candidats qui ont une échéance : rentrée, embauche, alternance. Vous conduisez plusieurs fois par semaine avec le même moniteur, sur les parcours réels des centres d’examen du secteur, et la date d’examen est réservée dès que le niveau est validé.',
    ],
    faq: {
      question: 'Le stage accéléré convient-il à un lycéen ou étudiant de Colombes ?',
      answer:
        'Oui, à condition d’avoir des créneaux réguliers — les vacances scolaires sont idéales pour concentrer les heures. Le paiement en 2 fois sans frais aide aussi les budgets étudiants.',
    },
  },
  {
    slug: 'la-garenne-colombes',
    name: 'La Garenne-Colombes',
    h1: 'Permis express près de La Garenne-Colombes',
    title: 'Permis express près de La Garenne-Colombes — accéléré',
    metaDescription:
      'Permis express près de La Garenne-Colombes : formation accélérée code + conduite dès 1 199 €, date d’examen prioritaire. Agence à Nanterre, tout proche.',
    intro: [
      'La Garenne-Colombes est l’une des communes les plus proches de notre agence : quelques minutes suffisent pour nous rejoindre. Autant dire que le temps de trajet ne sera jamais l’excuse — et avec la formule express, la formation non plus ne traîne pas.',
      'Le format : un bloc de semaines intensives, du code en séances rapprochées, des heures de conduite groupées et un examen blanc en conditions réelles avant la vraie date. Vous savez dès le départ où vous allez et quand vous y serez.',
    ],
    faq: {
      question: 'Combien d’heures de conduite par semaine prévoir pour un permis express ?',
      answer:
        'Comptez idéalement 4 à 6 heures par semaine, en séances d’1h30 à 2h. C’est le rythme qui fait réellement progresser vite sans saturer — nous construisons le planning avec vous.',
    },
  },
  {
    slug: 'bezons',
    name: 'Bezons',
    h1: 'Permis en accéléré près de Bezons — juste de l’autre côté du pont',
    title: 'Permis en accéléré près de Bezons — stage intensif',
    metaDescription:
      'Permis en accéléré près de Bezons : stage intensif code + conduite dès 1 199 €, à 7 minutes par le pont de Bezons. Date d’examen prioritaire.',
    intro: [
      'Une fois le pont de Bezons franchi, vous êtes à notre agence en quelques minutes. Pour les Bezonnais dont le permis presse — emploi, mission intérim, déménagement — le stage accéléré évite les mois d’attente des formules classiques de la rive droite.',
      'Toute la formation est concentrée : code intensif, conduite rapprochée sur les routes de Nanterre et des Hauts-de-Seine (celles des examens du secteur), examen blanc, puis réservation prioritaire de votre date. Boîte manuelle ou automatique selon votre besoin.',
    ],
    faq: {
      question: 'Depuis Bezons, comment se rendre aux leçons d’un stage accéléré ?',
      answer:
        'En voiture par le pont de Bezons (environ 7 minutes) ou par le tram T2 depuis le terminus Pont-de-Bezons. Les heures de conduite peuvent aussi commencer par une prise en charge convenue avec le moniteur.',
    },
    cityPageSlug: 'bezons',
  },
  {
    slug: 'argenteuil',
    name: 'Argenteuil',
    h1: 'Permis accéléré proche d’Argenteuil — arrêtez d’attendre votre tour',
    title: 'Permis accéléré proche d’Argenteuil — dès 1 199 €',
    metaDescription:
      'Permis accéléré près d’Argenteuil : stage intensif code + conduite, boîte auto dès 1 199 €, date d’examen prioritaire. Auto-école à Nanterre.',
    intro: [
      'À Argenteuil, les auto-écoles affichent souvent complet et les délais s’étirent. En traversant la Seine vers Nanterre, vous accédez à des plannings accélérés qui démarrent vite : la formation complète — code intensif et conduite — tient sur quelques semaines.',
      'Nos élèves argenteuillais choisissent l’accéléré surtout pour l’emploi : beaucoup de postes en logistique, santé ou intérim exigent le permis. Le stage est pensé pour cette urgence, avec paiement en 2 fois sans frais et CPF selon éligibilité.',
    ],
    faq: {
      question: 'Le CPF peut-il financer un permis accéléré pour un habitant d’Argenteuil ?',
      answer:
        'Oui, le permis B — accéléré compris — est finançable par le CPF selon votre situation et les règles en vigueur. Vérifiez votre solde sur moncompteformation.gouv.fr ; nous vous guidons pour le dossier.',
    },
    cityPageSlug: 'argenteuil',
  },
  {
    slug: 'asnieres-sur-seine',
    name: 'Asnières-sur-Seine',
    h1: 'Permis intensif près d’Asnières-sur-Seine',
    title: 'Permis intensif près d’Asnières-sur-Seine — accéléré',
    metaDescription:
      'Permis intensif près d’Asnières-sur-Seine : stage accéléré dès 1 199 €, code inclus, date d’examen prioritaire. Auto-école à Nanterre, accès rapide.',
    intro: [
      'Depuis Asnières, notre agence de Nanterre se rejoint facilement par l’axe Colombes ou les transports. Le format intensif s’adresse aux Asniérois qui veulent une échéance claire : plutôt qu’une leçon par semaine pendant un an, un bloc de formation concentré avec un objectif de passage rapide.',
      'Concrètement : évaluation initiale, séances de code intensif jusqu’à l’examen théorique, puis conduite rapprochée — plusieurs séances par semaine, même moniteur, mêmes parcours que les centres d’examen des Hauts-de-Seine. La date d’examen se réserve dès que vous êtes prêt(e).',
    ],
    faq: {
      question: 'Faut-il déjà avoir le code pour commencer un permis intensif ?',
      answer:
        'Non. Les formules accélérées incluent des séances de code intensif. Si vous avez déjà le code (moins de 5 ans), la formation se concentre sur la conduite et va d’autant plus vite.',
    },
    cityPageSlug: 'asnieres-sur-seine',
  },
  {
    slug: 'gennevilliers',
    name: 'Gennevilliers',
    h1: 'Formation accélérée au permis près de Gennevilliers',
    title: 'Permis accéléré près de Gennevilliers — dès 1 199 €',
    metaDescription:
      'Formation accélérée au permis près de Gennevilliers : code intensif + conduite concentrée, dès 1 199 €. Idéal emploi et logistique. Agence à Nanterre.',
    intro: [
      'Au port de Gennevilliers comme dans les zones d’activité, une grande partie des offres d’emploi exigent le permis B. Notre formation accélérée est construite pour cette réalité : obtenir le permis en quelques semaines, pas en un an, avec un planning intensif bâti autour de vos horaires.',
      'L’agence est à Nanterre, à quelques minutes en voiture — et les heures de conduite se déroulent sur les axes que vous utiliserez ensuite au quotidien : A86, routes des Hauts-de-Seine, zones urbaines denses. Une formation utile le jour de l’examen et après.',
    ],
    faq: {
      question: 'Proposez-vous des créneaux compatibles avec des horaires décalés (2x8, nuit) ?',
      answer:
        'Oui. La conduite se réserve de 10h à 20h en semaine et le samedi de 9h à 15h — en accéléré, nous concentrons les heures sur vos jours et créneaux disponibles, y compris pour les horaires décalés.',
    },
    cityPageSlug: 'gennevilliers',
  },
  {
    slug: 'houilles',
    name: 'Houilles',
    h1: 'Permis rapide près de Houilles — quelques semaines suffisent',
    title: 'Permis rapide près de Houilles — stage accéléré',
    metaDescription:
      'Permis rapide près de Houilles : stage accéléré dès 1 199 €, code intensif inclus, date d’examen prioritaire. Auto-école à Nanterre, RER A direct.',
    intro: [
      'Houilles est sur la ligne du RER A : notre agence de Nanterre se rejoint sans voiture — pratique quand on n’a justement pas encore le permis. La formule rapide concentre code et conduite sur quelques semaines, avec un passage d’examen dès que le niveau est validé.',
      'C’est le choix des Ovillois qui préparent une échéance précise : début d’alternance, mutation, besoin familial. Vous connaissez le calendrier dès le départ, et l’examen blanc en conditions réelles enlève la mauvaise surprise du jour J.',
    ],
    faq: {
      question: 'Peut-on faire un permis rapide pendant les vacances scolaires depuis Houilles ?',
      answer:
        'Oui — les vacances sont même la période idéale : les heures se concentrent sur deux à trois semaines, code intensif compris, et la date d’examen se cale dans la foulée selon les places disponibles.',
    },
    cityPageSlug: 'houilles',
  },
  {
    slug: 'sartrouville',
    name: 'Sartrouville',
    h1: 'Permis accéléré proche de Sartrouville — sans les délais habituels',
    title: 'Permis accéléré près de Sartrouville — dès 1 199 €',
    metaDescription:
      'Permis accéléré près de Sartrouville : stage intensif code + conduite dès 1 199 €, date d’examen prioritaire. Auto-école à Nanterre, RER A direct.',
    intro: [
      'Depuis Sartrouville, le RER A file directement vers Nanterre : la distance n’est pas un obstacle, et nos plannings accélérés non plus. L’idée est simple — remplacer un an de leçons espacées par quelques semaines de formation dense, code intensif inclus.',
      'Les Sartrouvillois qui nous choisissent en accéléré ont souvent déjà perdu du temps ailleurs : liste d’attente, moniteurs qui changent, dates d’examen repoussées. Ici, un seul moniteur vous suit du premier cours à l’examen, et la date se réserve dès que vous êtes prêt(e).',
    ],
    faq: {
      question: 'J’ai déjà des heures de conduite faites ailleurs : comptent-elles pour l’accéléré ?',
      answer:
        'Oui. L’évaluation de départ mesure votre niveau réel : si vous avez déjà conduit, le volume du stage s’ajuste et la formation va d’autant plus vite. Apportez votre livret si vous l’avez.',
    },
    cityPageSlug: 'sartrouville',
  },
  {
    slug: 'chatou',
    name: 'Chatou',
    h1: 'Stage de permis accéléré près de Chatou',
    title: 'Stage permis accéléré près de Chatou — code + conduite',
    metaDescription:
      'Stage de permis accéléré près de Chatou : formation intensive dès 1 199 €, code inclus, date d’examen prioritaire. Auto-école à Nanterre, RER A.',
    intro: [
      'De Chatou à notre agence de Nanterre, le RER A fait l’essentiel du trajet. Le stage accéléré s’adresse aux Catoviens qui veulent une formation cadrée : un début, un rythme soutenu, une date d’examen — plutôt qu’un abonnement à une leçon hebdomadaire sans fin.',
      'Le stage combine séances de code intensif et heures de conduite rapprochées sur les parcours des centres d’examen du secteur. Boîte automatique pour aller au plus vite (13h minimum), ou manuelle si votre usage l’exige.',
    ],
    faq: {
      question: 'Boîte automatique ou manuelle pour un stage accéléré depuis Chatou ?',
      answer:
        'Si l’objectif est la vitesse, l’automatique : 13h de minimum légal contre 20h, un apprentissage plus court, et la passerelle de 7h vers la manuelle reste possible ensuite, sans délai d’attente depuis mars 2024.',
    },
    cityPageSlug: 'chatou',
  },
  {
    slug: 'rueil-malmaison',
    name: 'Rueil-Malmaison',
    h1: 'Permis intensif près de Rueil-Malmaison',
    title: 'Permis intensif près de Rueil-Malmaison — dès 1 199 €',
    metaDescription:
      'Permis intensif près de Rueil-Malmaison : stage accéléré code + conduite dès 1 199 €, date d’examen prioritaire. Auto-école à Nanterre, RER A direct.',
    intro: [
      'Rueil et Nanterre sont voisines — RER A ou quelques minutes de voiture séparent votre domicile de notre agence. La formule intensive s’adresse aux Rueillois dont l’agenda ne laisse pas un an au permis : étudiants avant un stage, actifs avant une mutation, parents avant un déménagement.',
      'Vous conduisez plusieurs fois par semaine, toujours avec le même moniteur, sur les axes réels des examens du secteur — Nanterre, Rueil, la Défense. Le code se prépare en séances intensives et en ligne, et la date d’examen se réserve dès que vous êtes prêt(e).',
    ],
    faq: {
      question: 'Les leçons d’un permis intensif peuvent-elles se dérouler côté Rueil ?',
      answer:
        'Les parcours de conduite couvrent Nanterre et les communes voisines, dont Rueil-Malmaison — vous vous formez sur les routes que vous emprunterez réellement, y compris celles des parcours d’examen.',
    },
    cityPageSlug: 'rueil-malmaison',
  },
  {
    slug: 'suresnes',
    name: 'Suresnes',
    h1: 'Permis rapide près de Suresnes — objectif : quelques semaines',
    title: 'Permis rapide près de Suresnes — stage accéléré',
    metaDescription:
      'Permis rapide près de Suresnes : formation accélérée dès 1 199 €, code intensif inclus, date d’examen prioritaire. Auto-école à Nanterre, tout proche.',
    intro: [
      'Suresnes touche Nanterre par le Mont-Valérien : notre agence est à quelques minutes, en voiture comme en transports. Le format rapide est fait pour les Suresnois qui veulent une trajectoire claire vers l’examen, sans les mois d’attente d’une formule classique.',
      'Un stage type : évaluation, code intensif jusqu’à l’examen théorique, puis un bloc de conduite dense — avec examen blanc complet avant le jour J. Vous arrivez à l’examen entraîné(e) sur les parcours mêmes du secteur.',
    ],
    faq: {
      question: 'Un permis rapide est-il aussi sérieux qu’une formation classique ?',
      answer:
        'Le contenu est identique — mêmes exigences, mêmes moniteurs diplômés d’État, même examen. Seul le rythme change : les heures sont rapprochées, ce qui améliore souvent la progression (moins d’oubli entre les leçons).',
    },
    cityPageSlug: 'suresnes',
  },
  {
    slug: 'neuilly-sur-seine',
    name: 'Neuilly-sur-Seine',
    h1: 'Permis accéléré près de Neuilly-sur-Seine',
    title: 'Permis accéléré près de Neuilly-sur-Seine — stage intensif',
    metaDescription:
      'Permis accéléré près de Neuilly-sur-Seine : stage intensif code + conduite dès 1 199 €, date d’examen prioritaire. Auto-école à Nanterre, accès direct.',
    intro: [
      'Depuis Neuilly, l’axe de la Défense mène à notre agence de Nanterre en quelques minutes. Nos élèves neuilléens choisissent l’accéléré pour la même raison que partout : une échéance — études à l’étranger, premier emploi, mutation — qui ne laisse pas le temps d’une formation étalée.',
      'Le stage concentre code intensif et conduite sur quelques semaines, avec un moniteur attitré et un examen blanc en conditions réelles. Boîte automatique pour la vitesse (13h minimum), manuelle si vous en aurez l’usage.',
    ],
    faq: {
      question: 'Peut-on commencer un stage accéléré rapidement depuis Neuilly ?',
      answer:
        'Oui — c’est le principe. Après votre pré-inscription, l’évaluation de départ se programme sous quelques jours et le planning intensif démarre dans la foulée, selon vos disponibilités.',
    },
    cityPageSlug: 'neuilly-sur-seine',
  },
]

// FAQ communes à toutes les pages permis accéléré (ajoutées à la question locale).
export const accelereSharedFaqs = [
  {
    question: 'Combien de temps dure une formation au permis accéléré ?',
    answer:
      'L’objectif est d’être prêt(e) pour l’examen en quelques semaines : le code se prépare en séances intensives, la conduite se concentre en plusieurs séances par semaine, et la date d’examen se réserve dès que votre niveau est validé.',
  },
  {
    question: 'Le code de la route est-il inclus dans les formules accélérées ?',
    answer:
      'Oui — toutes nos formules accélérées incluent des séances de code intensif, en complément de l’entraînement en ligne. Si vous avez déjà un code valide (moins de 5 ans), la formation se concentre sur la conduite.',
  },
  {
    question: 'Quel est le prix d’un permis accéléré ?',
    answer:
      'Dès 1 199 € en boîte automatique (13h) ; 1 559 € en boîte manuelle 20h et 1 749 € en automatique 20h. La Représentation Rapide (dès 749 €) s’adresse aux candidats ayant récemment échoué à l’examen. Paiement en 2 fois sans frais sur toutes les formules.',
  },
]
