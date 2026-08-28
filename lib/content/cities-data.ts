import type { Metadata } from 'next'
import { createPageMetadata } from '@/lib/seo/metadata'

// Local-SEO city landing pages. Each entry MUST carry genuinely city-specific
// content (transit lines, quartiers, angle) — near-duplicate pages with a
// swapped city name read as doorway pages to Google and get ignored.

export interface CityAccess {
  mode: string // "RER A", "Tram T2", "Voiture"…
  detail: string
}

export interface CityFaq {
  question: string
  answer: string
}

export interface City {
  slug: string // route: /auto-ecole-<slug>
  name: string // "Courbevoie", "Paris 16ᵉ"
  schemaName: string // schema.org City name — "Paris 16e arrondissement"
  fromCity: string // "depuis Courbevoie", "depuis le 16ᵉ arrondissement"
  postalCode: string
  department: string
  driveTime: string // "10 min"
  distanceKm: number
  metaDescription: string
  intro: string[] // 2 unique paragraphs
  access: CityAccess[]
  neighborhoods: string[]
  whyUs: string[]
  faqs: CityFaq[]
  /** Visuel de la page, sous public/. Sert aussi d'image de partage. */
  image?: string
}

export const cityPath = (city: City) => `/auto-ecole-${city.slug}`

// « près de Argenteuil » est fautif. Les noms à initiale vocalique prennent
// l'élision ; on laisse le H de Houilles, où l'usage garde « de Houilles ».
export const nearCity = (name: string) =>
  /^[aeiouyàâéèêîïôùû]/i.test(name) ? `près d’${name}` : `près de ${name}`

export function getCity(slug: string): City {
  const city = cities.find((c) => c.slug === slug)
  if (!city) throw new Error(`Unknown city slug: ${slug}`)
  return city
}

export function cityMetadata(city: City): Metadata {
  return createPageMetadata({
    title: `Auto-école ${nearCity(city.name)} — Permis B & tarifs`,
    description: city.metaDescription,
    path: cityPath(city),
    image: city.image,
    keywords: [
      `auto-école ${city.name}`,
      `auto-école ${nearCity(city.name)}`,
      `permis de conduire ${city.name}`,
      `code de la route ${city.name}`,
    ],
  })
}

export const cities: City[] = [
  {
    slug: 'bezons',
    name: 'Bezons',
    schemaName: 'Bezons',
    fromCity: 'depuis Bezons',
    postalCode: '95870',
    department: 'Val-d’Oise (95)',
    driveTime: '7 min',
    distanceKm: 3,
    metaDescription:
      'Permis B à Nanterre près de Bezons : boîte auto dès 799 €, manuelle dès 899 €, code en ligne et paiement en 2 fois. CPF selon éligibilité.',
    intro: [
      'Vous habitez Bezons et cherchez une auto-école proche, sérieuse et bien notée ? La nôtre est littéralement de l’autre côté de la Seine : une fois le pont de Bezons franchi, vous êtes au 375 avenue de la République à Nanterre en quelques minutes. Pour beaucoup de nos élèves bezonnais, c’est plus rapide que de traverser leur propre ville aux heures de pointe.',
      'L’offre d’auto-écoles à Bezons est limitée, et les délais s’allongent vite. En venant à Nanterre, vous profitez d’une équipe de moniteurs diplômés d’État, de créneaux de conduite du lundi au samedi jusqu’à 20h, et de formules claires : permis accéléré, boîte automatique, conduite accompagnée dès 15 ans et code en salle ou en ligne.',
    ],
    access: [
      { mode: 'Voiture', detail: 'Environ 7 minutes par le pont de Bezons (D392), direction Nanterre — l’agence est sur l’avenue de la République.' },
      { mode: 'Tram T2', detail: 'Depuis le terminus « Pont de Bezons », le T2 et les lignes de bus qui le prolongent relient directement le secteur de notre agence.' },
      { mode: 'Vélo', detail: 'Environ 10 minutes par la piste cyclable qui traverse le pont de Bezons.' },
    ],
    neighborhoods: ['Centre-ville', 'Val-Notre-Dame', 'Agriculture', 'Bords-de-Seine'],
    whyUs: [
      'À quelques minutes du pont de Bezons : l’auto-école la plus accessible pour la rive droite de la Seine.',
      'Vous vous entraînez sur les routes de Nanterre et des Hauts-de-Seine, là où se déroulent réellement les examens du secteur.',
      'Une équipe pédagogique experte, des moniteurs diplômés d’État et un suivi personnalisé jusqu’au jour J.',
    ],
    faqs: [
      {
        question: 'J’habite Bezons : dois-je habiter Nanterre pour m’inscrire chez vous ?',
        answer:
          'Non, aucune condition de résidence n’existe pour choisir son auto-école. De nombreux élèves de Bezons passent leur permis chez nous : l’agence est à environ 7 minutes du pont de Bezons.',
      },
      {
        question: 'Puis-je passer le code sans me déplacer à Nanterre ?',
        answer:
          'Oui. Nous proposons l’entraînement au code en ligne, accessible depuis chez vous à Bezons, en complément des sessions en salle à l’agence.',
      },
      {
        question: 'Proposez-vous le permis en boîte automatique ?',
        answer:
          'Oui, nous formons en boîte manuelle comme en boîte automatique, avec des formules accélérées. Le CPF dépend des conditions d’éligibilité en vigueur.',
      },
    ],
  },
  {
    slug: 'colombes',
    name: 'Colombes',
    schemaName: 'Colombes',
    fromCity: 'depuis Colombes',
    postalCode: '92700',
    department: 'Hauts-de-Seine (92)',
    driveTime: '9 min',
    distanceKm: 4,
    metaDescription:
      'Permis B à Nanterre près de Colombes : boîte auto dès 799 €, manuelle dès 899 €, code en ligne et paiement en 2 fois. CPF selon éligibilité.',
    intro: [
      'Colombes et Nanterre partagent une frontière — et notre auto-école est installée avenue de la République, l’axe qui relie justement les deux villes. Depuis le Petit-Colombes, comptez moins de 10 minutes en voiture ou en tram pour rejoindre l’agence : un trajet souvent plus court que pour traverser Colombes d’un quartier à l’autre.',
      'Que vous soyez lycéen près du stade Yves-du-Manoir, étudiant ou actif dans le centre, nous adaptons le planning à vos disponibilités : conduite de 10h à 20h en semaine, le samedi jusqu’à 15h, code en salle ou en ligne. Formations en boîte manuelle ou automatique, permis accéléré et conduite accompagnée (AAC) dès 15 ans.',
    ],
    access: [
      { mode: 'Tram T2', detail: 'Les stations « Parc Pierre Lagravère » et « Victor Basch » (à Colombes) mettent le secteur de l’agence à quelques minutes.' },
      { mode: 'Voiture', detail: 'Environ 9 minutes depuis le Petit-Colombes par l’avenue de la République ou la D986.' },
      { mode: 'Bus', detail: 'Plusieurs lignes relient les quartiers de Colombes à l’avenue de la République à Nanterre.' },
    ],
    neighborhoods: ['Petit-Colombes', 'Centre-ville', 'Fossés-Jean', 'Stade / Yves-du-Manoir'],
    whyUs: [
      'L’agence est sur l’avenue de la République, l’axe direct entre Colombes et Nanterre : idéal pour les habitants du Petit-Colombes.',
      'Créneaux de conduite étendus (10h–20h en semaine, samedi matin) pour caser vos leçons autour des cours ou du travail.',
      'Pour les profils et formations éligibles, le CPF peut être mobilisé selon les règles en vigueur.',
    ],
    faqs: [
      {
        question: 'Combien de temps pour venir de Colombes à l’auto-école ?',
        answer:
          'Depuis le Petit-Colombes, comptez environ 9 minutes en voiture ; depuis le centre de Colombes, 10 à 15 minutes en tram T2 ou en bus. L’agence est au 375 avenue de la République à Nanterre.',
      },
      {
        question: 'Les leçons de conduite se passent-elles vers Colombes ?',
        answer:
          'Oui, nous circulons régulièrement entre Nanterre, Colombes et les communes voisines : ce sont les mêmes types de routes que celles des parcours d’examen des Hauts-de-Seine.',
      },
      {
        question: 'Proposez-vous la conduite accompagnée pour les lycéens de Colombes ?',
        answer:
          'Oui, la conduite accompagnée (AAC) est accessible dès 15 ans — une formule très demandée par les familles de Colombes pour préparer le permis en confiance.',
      },
    ],
  },
  {
    slug: 'la-garenne-colombes',
    name: 'La Garenne-Colombes',
    schemaName: 'La Garenne-Colombes',
    fromCity: 'depuis La Garenne-Colombes',
    postalCode: '92250',
    department: 'Hauts-de-Seine (92)',
    driveTime: '10 min',
    distanceKm: 4,
    metaDescription:
      'Permis B à Nanterre près de La Garenne-Colombes : boîte auto dès 799 €, manuelle dès 899 €, code et paiement en 2 fois. CPF selon éligibilité.',
    intro: [
      'Depuis La Garenne-Colombes, notre auto-école est à deux arrêts de train : la ligne L relie les gares de La Garenne-Colombes et des Vallées à Nanterre-Université en quelques minutes, et l’agence du 375 avenue de la République est toute proche. En voiture, comptez environ 10 minutes.',
      'La Garenne-Colombes est une petite commune où l’offre d’auto-écoles reste réduite : beaucoup de Garennois nous choisissent pour la disponibilité des moniteurs et des dates. Permis B en boîte manuelle ou automatique, formule accélérée, code en salle ou en ligne et financement CPF selon les conditions d’éligibilité en vigueur.',
    ],
    access: [
      { mode: 'Ligne L', detail: 'Gares « La Garenne-Colombes » ou « Les Vallées » → « Nanterre-Université » en 2 à 3 arrêts, puis quelques minutes à pied ou en bus.' },
      { mode: 'Tram T2', detail: 'La station « Charlebourg » relie La Garenne au réseau T2 vers la Seine et Nanterre.' },
      { mode: 'Voiture', detail: 'Environ 10 minutes par le boulevard National puis l’avenue de la République.' },
    ],
    neighborhoods: ['Centre-ville', 'Les Vallées', 'Charlebourg', 'Plaine des Sports'],
    whyUs: [
      'À 2 arrêts de ligne L de la gare de La Garenne-Colombes : faire sa conduite sans voiture, c’est simple.',
      'Des délais de présentation courts et un vrai choix de créneaux, là où l’offre locale est restreinte.',
      'Examens blancs en conditions réelles sur les parcours officiels du secteur.',
    ],
    faqs: [
      {
        question: 'Comment venir depuis La Garenne-Colombes sans voiture ?',
        answer:
          'Prenez la ligne L à la gare de La Garenne-Colombes ou des Vallées jusqu’à Nanterre-Université (2 à 3 arrêts), puis rejoignez l’agence au 375 avenue de la République en quelques minutes.',
      },
      {
        question: 'Proposez-vous le permis accéléré ?',
        answer:
          'Oui, notre formule accélérée permet de concentrer code et conduite sur quelques semaines, avec un planning intensif adapté à votre objectif.',
      },
      {
        question: 'Puis-je utiliser mon CPF pour financer mon permis ?',
        answer:
          'Le CPF peut être mobilisé selon votre situation et la formation préparée. Vérifiez les conditions d’éligibilité en vigueur avant toute inscription.',
      },
    ],
  },
  {
    slug: 'courbevoie',
    name: 'Courbevoie',
    schemaName: 'Courbevoie',
    fromCity: 'depuis Courbevoie',
    postalCode: '92400',
    department: 'Hauts-de-Seine (92)',
    driveTime: '12 min',
    distanceKm: 5,
    metaDescription:
      'Permis B à Nanterre près de Courbevoie : boîte auto dès 799 €, manuelle dès 899 €, code et paiement en 2 fois. CPF selon éligibilité.',
    intro: [
      'Depuis Courbevoie, rejoindre notre auto-école de Nanterre est direct : la ligne L relie la gare de Courbevoie à Nanterre-Université en trois arrêts, et le tram T2 dessert le Faubourg de l’Arche. Salariés de La Défense, vous pouvez même caler une leçon après le bureau — nos moniteurs conduisent jusqu’à 20h en semaine.',
      'Autour de La Défense, les tarifs des auto-écoles grimpent vite. À quelques minutes de train, nous proposons des formules transparentes, payables en 2 fois sans frais, en boîte manuelle ou automatique — et vous vous entraînez sur les routes des Hauts-de-Seine où se déroulent les examens, pas dans les tours.',
    ],
    access: [
      { mode: 'Ligne L', detail: 'Gare de Courbevoie ou Bécon-les-Bruyères → « Nanterre-Université » en quelques arrêts directs.' },
      { mode: 'Tram T2', detail: 'Depuis « Faubourg de l’Arche » ou « Les Fauvelles », le T2 rejoint le secteur en une dizaine de minutes.' },
      { mode: 'Voiture', detail: 'Environ 12 minutes par le boulevard de la Mission-Marchand puis l’avenue de la République (D986).' },
    ],
    neighborhoods: ['Bécon-les-Bruyères', 'Faubourg de l’Arche', 'Centre-ville', 'Charras'],
    whyUs: [
      'Ligne L directe depuis Courbevoie et créneaux jusqu’à 20h : compatible avec un emploi du temps chargé à La Défense.',
      'Des tarifs sensiblement plus accessibles que dans le quartier d’affaires, affichés clairement et payables en 2 fois sans frais.',
      'Formation sur les vrais parcours d’examen des Hauts-de-Seine, avec examens blancs en conditions réelles.',
    ],
    faqs: [
      {
        question: 'Je travaille à La Défense : puis-je prendre des leçons après le travail ?',
        answer:
          'Oui, nos moniteurs conduisent de 10h à 20h en semaine. Depuis La Défense ou Courbevoie, l’agence est accessible en quelques minutes de ligne L ou de tram T2.',
      },
      {
        question: 'Pourquoi choisir Nanterre plutôt qu’une auto-école à Courbevoie ?',
        answer:
          'Pour les tarifs, souvent plus doux qu’autour de La Défense, et pour l’entraînement : nous circulons sur les routes où se déroulent réellement les examens du secteur, à quelques minutes de Courbevoie.',
      },
      {
        question: 'Proposez-vous le code en ligne ?',
        answer:
          'Oui, vous pouvez préparer le code de la route en ligne depuis Courbevoie, en complément des sessions en salle à l’agence de Nanterre.',
      },
    ],
  },
  {
    slug: 'rueil-malmaison',
    name: 'Rueil-Malmaison',
    schemaName: 'Rueil-Malmaison',
    fromCity: 'depuis Rueil-Malmaison',
    postalCode: '92500',
    department: 'Hauts-de-Seine (92)',
    driveTime: '10 min',
    distanceKm: 4,
    metaDescription:
      'Permis B à Nanterre près de Rueil-Malmaison : boîte auto dès 799 €, manuelle dès 899 €, code et paiement en 2 fois. CPF selon éligibilité.',
    intro: [
      'Rueil-Malmaison est l’une des villes d’origine de nos élèves les plus nombreuses — et pour cause : le RER A relie la gare de Rueil-Malmaison à Nanterre en quelques minutes, et en voiture l’agence du 375 avenue de la République est à environ 10 minutes par la D913.',
      'Nous connaissons parfaitement les axes que vous emprunterez le jour de l’examen : les leçons se déroulent sur les routes de Nanterre, Rueil et des communes voisines, celles-là mêmes des parcours officiels des Hauts-de-Seine. Permis B en boîte manuelle ou automatique, formule accélérée, AAC dès 15 ans, code en salle ou en ligne et financement CPF selon éligibilité.',
    ],
    access: [
      { mode: 'RER A', detail: 'Gare de Rueil-Malmaison → gares de Nanterre en quelques minutes directes, puis bus ou marche jusqu’à l’agence.' },
      { mode: 'Voiture', detail: 'Environ 10 minutes par la D913 puis l’avenue Georges-Clemenceau et l’avenue de la République.' },
      { mode: 'Bus', detail: 'Les lignes locales reliant Rueil à Nanterre desservent l’avenue de la République et ses abords.' },
    ],
    neighborhoods: ['Centre-ville', 'Rueil-sur-Seine', 'Plateau / Mont-Valérien', 'Buzenval'],
    whyUs: [
      'Les leçons se déroulent en partie sur les axes de Rueil et Nanterre utilisés par les parcours d’examen du secteur.',
      'RER A direct + 10 minutes en voiture : une auto-école réellement pratique au quotidien.',
      'Une équipe pédagogique experte et 451 permis délivrés dans le secteur Nanterre – Rueil.',
    ],
    faqs: [
      {
        question: 'Où se déroulent les leçons de conduite pour un élève de Rueil ?',
        answer:
          'Les leçons partent de notre agence de Nanterre et couvrent régulièrement Rueil-Malmaison et les communes voisines — les mêmes routes que celles des parcours d’examen des Hauts-de-Seine.',
      },
      {
        question: 'Puis-je utiliser mon CPF pour financer mon permis ?',
        answer:
          'Le CPF peut être mobilisé selon votre situation et la formation préparée. Vérifiez les conditions d’éligibilité en vigueur avant toute inscription.',
      },
      {
        question: 'Proposez-vous une formule accélérée ?',
        answer:
          'Oui, notre permis accéléré concentre la formation sur quelques semaines — une option appréciée des actifs de Rueil pressés d’obtenir leur permis.',
      },
    ],
  },
  {
    slug: 'neuilly-sur-seine',
    name: 'Neuilly-sur-Seine',
    schemaName: 'Neuilly-sur-Seine',
    fromCity: 'depuis Neuilly-sur-Seine',
    postalCode: '92200',
    department: 'Hauts-de-Seine (92)',
    driveTime: '15 min',
    distanceKm: 7,
    metaDescription:
      'Permis B à Nanterre près de Neuilly-sur-Seine : boîte auto dès 799 €, manuelle dès 899 €, code et paiement en 2 fois. CPF selon éligibilité.',
    intro: [
      'À Neuilly-sur-Seine, les auto-écoles pratiquent parmi les tarifs les plus élevés d’Île-de-France. À un quart d’heure de là, notre agence de Nanterre propose les mêmes formations — permis B, accéléré, boîte automatique, AAC — à des prix nettement plus accessibles, affichés clairement et payables en 2 fois sans frais.',
      'L’accès est simple : le métro 1 (Pont de Neuilly, Les Sablons) rejoint La Défense en quelques minutes, puis le RER A vous dépose à Nanterre. Et détail qui compte : les examens pratiques ne se passent pas dans Neuilly — s’entraîner sur les routes des Hauts-de-Seine, c’est s’entraîner sur les parcours que vous retrouverez le jour J.',
    ],
    access: [
      { mode: 'Métro 1 + RER A', detail: '« Pont de Neuilly » ou « Les Sablons » → La Défense, puis RER A jusqu’aux gares de Nanterre : environ 20 minutes porte à porte.' },
      { mode: 'Voiture', detail: 'Environ 15 minutes par le pont de Neuilly puis les quais de Seine ou la D913 vers Nanterre.' },
      { mode: 'Bus', detail: 'Les lignes passant par le rond-point de La Défense connectent Neuilly au réseau de bus nanterrien.' },
    ],
    neighborhoods: ['Sablons', 'Château', 'Saint-James', 'Île de la Jatte'],
    whyUs: [
      'Des formules complètes à des tarifs nettement plus doux que ceux pratiqués à Neuilly, sans transiger sur l’encadrement.',
      'Vous apprenez sur les routes où se déroulent les examens du 92 — pas dans les avenues de Neuilly où vous ne serez jamais évalué.',
      'Moniteurs diplômés d’État, 4,9/5 sur plus de 300 avis Google, suivi personnalisé jusqu’à l’examen.',
    ],
    faqs: [
      {
        question: 'Pourquoi quitter Neuilly pour passer son permis à Nanterre ?',
        answer:
          'Pour le budget d’abord : les écarts de tarifs sont importants. Et pour l’efficacité : les examens pratiques du secteur se déroulent sur les routes des Hauts-de-Seine, celles-là mêmes où nous formons nos élèves.',
      },
      {
        question: 'Combien de temps de trajet depuis Neuilly-sur-Seine ?',
        answer:
          'Environ 15 minutes en voiture par le pont de Neuilly, ou une vingtaine de minutes en transports : métro 1 jusqu’à La Défense puis RER A vers Nanterre.',
      },
      {
        question: 'Proposez-vous la boîte automatique et le permis accéléré ?',
        answer:
          'Oui, les deux : formation en boîte automatique (examen possible dès 13h de conduite) et formule accélérée pour obtenir votre permis en quelques semaines.',
      },
    ],
  },
  {
    slug: 'paris-17',
    name: 'Paris 17ᵉ',
    schemaName: 'Paris 17e arrondissement',
    fromCity: 'depuis le 17ᵉ arrondissement',
    postalCode: '75017',
    department: 'Paris (75)',
    driveTime: '20 min',
    distanceKm: 9,
    metaDescription:
      'Permis B à Nanterre près du 17ᵉ : boîte auto dès 799 €, manuelle dès 899 €, code en ligne et paiement en 2 fois. CPF selon éligibilité.',
    intro: [
      'Dans le 17ᵉ arrondissement, entre le prix des forfaits et les délais d’attente, passer son permis relève du parcours du combattant. La solution de nombreux Parisiens de l’Ouest : franchir le périphérique. Depuis Charles de Gaulle-Étoile, le RER A vous dépose à Nanterre en une dizaine de minutes — souvent moins que la traversée de l’arrondissement en bus.',
      'Au-delà du tarif, il y a la pédagogie : conduire dans le 92, c’est apprendre sur des routes variées (ville, voies rapides, ronds-points) qui correspondent aux parcours d’examen d’Île-de-France, loin de la conduite en accordéon du boulevard Malesherbes. Permis B, accéléré, boîte automatique, code en ligne et financement CPF selon les conditions d’éligibilité en vigueur sont proposés à l’agence.',
    ],
    access: [
      { mode: 'RER A', detail: 'Charles de Gaulle-Étoile (accessible des Ternes et de Wagram) → gares de Nanterre en une dizaine de minutes directes.' },
      { mode: 'Ligne L', detail: 'Depuis Saint-Lazare, la branche Cergy de la ligne L dessert directement la gare de Nanterre-Université.' },
      { mode: 'Voiture', detail: 'Environ 20 minutes par la porte Maillot puis l’A14/D913 ou les quais vers Nanterre.' },
    ],
    neighborhoods: ['Ternes', 'Batignolles', 'Wagram', 'Porte de Champerret'],
    whyUs: [
      'Des forfaits nettement moins chers que dans le 17ᵉ, affichés en toute transparence et payables en 2 fois sans frais.',
      'RER A direct depuis Étoile : l’agence est souvent plus vite atteinte qu’une auto-école de l’autre bout de l’arrondissement.',
      'Conduite formatrice dans le 92 (voies rapides, giratoires, zones 30) — le type exact de parcours rencontré à l’examen.',
    ],
    faqs: [
      {
        question: 'Est-ce compliqué de venir du 17ᵉ arrondissement ?',
        answer:
          'Non : depuis Charles de Gaulle-Étoile, le RER A rejoint Nanterre en une dizaine de minutes ; depuis Saint-Lazare, la ligne L dessert Nanterre-Université. L’agence est au 375 avenue de la République.',
      },
      {
        question: 'Passer l’examen en banlieue est-il un avantage ?',
        answer:
          'Oui : les places d’examen y sont souvent plus nombreuses qu’à Paris intra-muros, et vous êtes évalué sur les routes mêmes où vous vous êtes entraîné avec nos moniteurs.',
      },
      {
        question: 'Quels financements acceptez-vous ?',
        answer:
          'Paiement en 2 fois sans frais sur nos formules. Le CPF peut être mobilisé selon votre situation et les conditions d’éligibilité en vigueur.',
      },
    ],
  },
  {
    slug: 'paris-16',
    name: 'Paris 16ᵉ',
    schemaName: 'Paris 16e arrondissement',
    fromCity: 'depuis le 16ᵉ arrondissement',
    postalCode: '75016',
    department: 'Paris (75)',
    driveTime: '20 min',
    distanceKm: 9,
    metaDescription:
      'Permis B à Nanterre près du 16ᵉ : boîte auto dès 799 €, manuelle dès 899 €, code et paiement en 2 fois. CPF selon éligibilité.',
    intro: [
      'Du Trocadéro à la porte d’Auteuil, les auto-écoles du 16ᵉ affichent des forfaits parmi les plus élevés de la capitale. En passant le bois de Boulogne, notre agence de Nanterre propose les mêmes formations pour un budget nettement plus raisonnable — avec des moniteurs diplômés d’État et un suivi individuel jusqu’à l’examen.',
      'Le trajet est plus simple qu’on ne l’imagine : RER A depuis Charles de Gaulle-Étoile jusqu’à Nanterre en une dizaine de minutes, ou une vingtaine de minutes en voiture par le pont de Suresnes. Et pour les familles, la conduite accompagnée dès 15 ans dans le 92 offre un cadre d’apprentissage bien plus varié que les avenues embouteillées du 16ᵉ.',
    ],
    access: [
      { mode: 'RER A', detail: 'Charles de Gaulle-Étoile → gares de Nanterre en une dizaine de minutes directes.' },
      { mode: 'Voiture', detail: 'Environ 20 minutes par le bois de Boulogne et le pont de Suresnes, ou par la porte Maillot et La Défense.' },
      { mode: 'Métro + RER', detail: 'Depuis Passy ou Auteuil, rejoignez Étoile ou La Défense puis le RER A vers Nanterre.' },
    ],
    neighborhoods: ['Passy', 'Auteuil', 'Trocadéro', 'Porte Dauphine'],
    whyUs: [
      'Un budget permis nettement inférieur aux forfaits pratiqués dans le 16ᵉ, pour une formation complète et encadrée.',
      'Conduite accompagnée (AAC) dès 15 ans sur les routes variées du 92 — idéale pour un premier apprentissage serein.',
      'Formules boîte manuelle ou automatique, code en salle ou en ligne, avec financement CPF selon les conditions d’éligibilité en vigueur.',
    ],
    faqs: [
      {
        question: 'Un lycéen du 16ᵉ peut-il faire sa conduite accompagnée chez vous ?',
        answer:
          'Oui, l’AAC est possible dès 15 ans. Beaucoup de familles parisiennes choisissent le 92 pour un apprentissage plus progressif que dans la circulation dense de Paris intra-muros.',
      },
      {
        question: 'Combien de temps depuis le Trocadéro ou Auteuil ?',
        answer:
          'Une dizaine de minutes de RER A depuis Charles de Gaulle-Étoile, ou environ 20 minutes en voiture par le pont de Suresnes. L’agence est au 375 avenue de la République à Nanterre.',
      },
      {
        question: 'Vos tarifs sont-ils vraiment plus intéressants qu’à Paris ?',
        answer:
          'Oui : nos formules sont affichées en toute transparence sur la page tarifs et restent sensiblement en dessous des forfaits couramment pratiqués dans l’Ouest parisien, avec paiement en 2 fois sans frais.',
      },
    ],
  },
  {
    slug: 'paris-8',
    name: 'Paris 8ᵉ',
    schemaName: 'Paris 8e arrondissement',
    fromCity: 'depuis le 8ᵉ arrondissement',
    postalCode: '75008',
    department: 'Paris (75)',
    driveTime: '25 min',
    distanceKm: 10,
    metaDescription:
      'Permis B à Nanterre près du 8ᵉ : boîte auto dès 799 €, manuelle dès 899 €, code et paiement en 2 fois. CPF selon éligibilité.',
    intro: [
      'Vous étudiez ou travaillez dans le 8ᵉ ? Deux lignes directes relient l’arrondissement à notre auto-école : le RER A depuis Charles de Gaulle-Étoile et la ligne L depuis la gare Saint-Lazare, toutes deux vers Nanterre. De quoi caler une leçon de conduite après les cours ou le bureau, nos moniteurs enseignant jusqu’à 20h en semaine.',
      'Passer son permis dans le 8ᵉ coûte cher et les délais s’étirent. À Nanterre, vous retrouvez des forfaits transparents payables en 2 fois sans frais, une formule accélérée pour les plus pressés, la boîte automatique, et un entraînement sur les routes du 92 — celles des parcours d’examen, pas les Champs-Élysées.',
    ],
    access: [
      { mode: 'RER A', detail: 'Charles de Gaulle-Étoile ou Auber → gares de Nanterre en une dizaine de minutes directes.' },
      { mode: 'Ligne L', detail: 'Gare Saint-Lazare → « Nanterre-Université » par la branche Cergy, sans changement.' },
      { mode: 'Voiture', detail: 'Environ 25 minutes par la porte Maillot, La Défense puis l’avenue de la République.' },
    ],
    neighborhoods: ['Champs-Élysées', 'Saint-Lazare / Europe', 'Monceau', 'Madeleine'],
    whyUs: [
      'Deux accès directs (RER A depuis Étoile, ligne L depuis Saint-Lazare) : idéal pour les actifs et étudiants du 8ᵉ.',
      'Leçons possibles jusqu’à 20h en semaine et le samedi : votre permis avance sans empiéter sur vos horaires de bureau.',
      'Formule accélérée, boîte automatique et financement CPF selon éligibilité : des solutions concrètes pour obtenir le permis rapidement et à coût maîtrisé.',
    ],
    faqs: [
      {
        question: 'Je travaille près de Saint-Lazare : comment organiser mes leçons ?',
        answer:
          'La ligne L relie Saint-Lazare à Nanterre-Université sans changement. Avec des créneaux de conduite jusqu’à 20h en semaine et le samedi matin, une leçon après le travail est tout à fait réaliste.',
      },
      {
        question: 'Proposez-vous une formule rapide pour obtenir le permis ?',
        answer:
          'Oui, notre formule accélérée concentre code et conduite sur quelques semaines. En boîte automatique, l’examen est possible dès 13 heures de conduite.',
      },
      {
        question: 'Puis-je financer la formation avec mon CPF ?',
        answer:
          'Le CPF peut être mobilisé selon votre situation et la formation préparée. Vérifiez les conditions d’éligibilité en vigueur avant toute inscription.',
      },
    ],
  },
  {
    slug: 'puteaux',
    name: 'Puteaux',
    schemaName: 'Puteaux',
    fromCity: 'depuis Puteaux',
    postalCode: '92800',
    department: 'Hauts-de-Seine (92)',
    driveTime: '12 min',
    distanceKm: 5,
    metaDescription:
      'Auto-école près de Puteaux : permis B dès 899 €, boîte automatique dès 799 €, accéléré et code. RER A et tram T2 directs vers Nanterre. CPF selon éligibilité.',
    intro: [
      'Adossée à La Défense, Puteaux subit les tarifs du quartier d’affaires : à formation égale, le permis y coûte sensiblement plus cher qu’à quelques stations de là. Notre agence du 375 avenue de la République à Nanterre propose les mêmes formations — permis B manuel ou automatique, formule accélérée, conduite accompagnée — avec des prix affichés et un paiement en 2 fois sans frais.',
      'Le trajet est court et sans rupture de charge : le RER A relie La Défense à Nanterre-Préfecture en une station. Autre avantage, moins visible mais décisif : les parcours d’examen du secteur empruntent les axes des Hauts-de-Seine, pas les voies sur dalle de La Défense. S’entraîner à Nanterre, c’est s’entraîner là où vous serez réellement évalué.',
    ],
    access: [
      { mode: 'RER A', detail: 'Depuis La Défense, une seule station jusqu’à Nanterre-Préfecture — quelques minutes de trajet, sans changement.' },
      { mode: 'Tram T2', detail: 'Les stations Puteaux et Belvédère rejoignent La Défense en quelques minutes, où le RER A prend le relais vers Nanterre.' },
      { mode: 'Voiture', detail: 'Environ 12 minutes par le boulevard Circulaire puis l’avenue Georges-Clemenceau et l’avenue de la République.' },
    ],
    neighborhoods: ['Centre-ville', 'Bergères', 'Île de Puteaux', 'Bas-Rogers'],
    whyUs: [
      'Des tarifs sans commune mesure avec ceux pratiqués sur le secteur de La Défense, à une station de RER.',
      'Conduite jusqu’à 20h en semaine et le samedi jusqu’à 15h : la leçon de fin de journée après le bureau est notre créneau le plus demandé.',
      'Les leçons se déroulent sur les axes du 92 réellement empruntés par les parcours d’examen du secteur.',
    ],
    faqs: [
      {
        question: 'Combien de temps pour venir de Puteaux à votre auto-école ?',
        answer:
          'Comptez environ 12 minutes en voiture, ou une dizaine de minutes en transports : tram T2 ou marche jusqu’à La Défense, puis une station de RER A jusqu’à Nanterre-Préfecture.',
      },
      {
        question: 'Je travaille à La Défense : puis-je prendre des leçons après le travail ?',
        answer:
          'Oui. Nos moniteurs conduisent jusqu’à 20h du lundi au vendredi et le samedi de 9h à 15h. Beaucoup de nos élèves du secteur réservent le créneau de 18h30.',
      },
      {
        question: 'Faut-il habiter Nanterre pour s’inscrire chez vous ?',
        answer:
          'Non, aucune condition de résidence n’existe pour choisir son auto-école. Vous pouvez habiter Puteaux et vous former à Nanterre sans aucune démarche particulière.',
      },
    ],
  },
  {
    slug: 'suresnes',
    name: 'Suresnes',
    schemaName: 'Suresnes',
    fromCity: 'depuis Suresnes',
    postalCode: '92150',
    department: 'Hauts-de-Seine (92)',
    driveTime: '12 min',
    distanceKm: 5,
    metaDescription:
      'Auto-école près de Suresnes : permis B dès 899 €, boîte auto dès 799 €, accéléré et code. Tram T2 et ligne L vers Nanterre. CPF selon éligibilité.',
    intro: [
      'Entre les quais de Seine et les pentes du Mont-Valérien, Suresnes offre un terrain d’apprentissage exigeant — et c’est précisément ce qui en fait un bon voisinage pour apprendre à conduire. Notre auto-école de Nanterre, à une douzaine de minutes, forme au permis B en boîte manuelle ou automatique, en formule accélérée comme en conduite accompagnée.',
      'Un détail que les candidats découvrent souvent trop tard : le démarrage en côte et la maîtrise du frein de stationnement sont des compétences évaluées, et les rues en pente du Mont-Valérien sont l’un des meilleurs terrains d’entraînement du secteur. Nos moniteurs y emmènent régulièrement les élèves qui préparent leur examen.',
    ],
    access: [
      { mode: 'Tram T2', detail: 'Les stations Suresnes-Longchamp et Belvédère mènent à La Défense, d’où le RER A rejoint Nanterre en une station.' },
      { mode: 'Transilien L', detail: 'Depuis la gare de Suresnes Mont-Valérien, la ligne L dessert Nanterre-Université en direction de Saint-Lazare.' },
      { mode: 'Voiture', detail: 'Environ 12 minutes par le boulevard Henri-Sellier puis la D913 vers l’avenue de la République.' },
    ],
    neighborhoods: ['Centre-ville', 'Cité-Jardins', 'Mont-Valérien', 'Quartier Liberté'],
    whyUs: [
      'Un entraînement au démarrage en côte sur les pentes du Mont-Valérien — une compétence notée à l’examen, rarement travaillée en terrain plat.',
      'Deux liaisons directes vers Nanterre : tram T2 via La Défense, ou ligne L jusqu’à Nanterre-Université.',
      'Formules affichées sans devis surprise, payables en 2 fois sans frais.',
    ],
    faqs: [
      {
        question: 'Comment venir de Suresnes jusqu’à votre auto-école ?',
        answer:
          'En voiture, comptez une douzaine de minutes par la D913. En transports, le tram T2 vous mène à La Défense puis le RER A à Nanterre, ou la ligne L depuis Suresnes Mont-Valérien jusqu’à Nanterre-Université.',
      },
      {
        question: 'Travaillez-vous le démarrage en côte pendant la formation ?',
        answer:
          'Oui, systématiquement. C’est une compétence évaluée le jour de l’examen, et le relief du secteur Suresnes – Mont-Valérien offre un terrain d’entraînement bien plus réaliste que les avenues plates.',
      },
      {
        question: 'Proposez-vous la boîte automatique ?',
        answer:
          'Oui. En boîte automatique, l’examen est possible dès 13 heures de conduite contre 20 heures en boîte manuelle, et une formation passerelle de 7 heures permet ensuite de lever la restriction si vous le souhaitez.',
      },
    ],
  },
  {
    slug: 'houilles',
    name: 'Houilles',
    schemaName: 'Houilles',
    fromCity: 'depuis Houilles',
    postalCode: '78800',
    department: 'Yvelines (78)',
    driveTime: '15 min',
    distanceKm: 7,
    metaDescription:
      'Auto-école près de Houilles (78) : permis B dès 899 €, boîte auto dès 799 €, accéléré et code. RER A direct vers Nanterre. CPF selon éligibilité.',
    intro: [
      'Habiter Houilles et se former à Nanterre est plus simple qu’il n’y paraît : la gare de Houilles–Carrières-sur-Seine est desservie par le RER A, qui rejoint les gares de Nanterre en quelques minutes sans changement. Aucune condition de résidence n’existe pour choisir son auto-école — le département sur votre justificatif de domicile ne limite en rien votre inscription.',
      'Ce passage des Yvelines aux Hauts-de-Seine a même un intérêt pratique : votre présentation à l’examen dépend du centre auquel votre auto-école est rattachée. En vous formant à Nanterre, vous vous entraînez pendant toute la formation sur les axes du 92 où se déroulera votre épreuve, au lieu de découvrir le secteur le jour J.',
    ],
    access: [
      { mode: 'RER A', detail: 'Gare de Houilles–Carrières-sur-Seine → gares de Nanterre en quelques minutes, direct et sans changement.' },
      { mode: 'Voiture', detail: 'Environ 15 minutes par le pont de Bezons puis l’avenue de la République.' },
      { mode: 'Transilien L', detail: 'La ligne L relie également Houilles à Nanterre-Université en direction de Paris Saint-Lazare.' },
    ],
    neighborhoods: ['Centre-ville', 'Réveil-Matin', 'Chateaubriand', 'Champs-Fleuris'],
    whyUs: [
      'RER A direct : l’une des liaisons les plus rapides vers Nanterre depuis la boucle de Seine.',
      'Vous vous entraînez toute la formation sur les routes du secteur où se déroule l’examen, plutôt que de les découvrir le jour même.',
      'Permis B manuel ou automatique, formule accélérée, conduite accompagnée dès 15 ans et code en salle comme en ligne.',
    ],
    faqs: [
      {
        question: 'J’habite dans les Yvelines : puis-je m’inscrire dans une auto-école des Hauts-de-Seine ?',
        answer:
          'Oui, sans aucune restriction. Le choix de l’auto-école est libre et ne dépend pas de votre commune ni de votre département de résidence. De nombreux élèves de Houilles se forment chez nous.',
      },
      {
        question: 'Où se déroulera mon examen pratique ?',
        answer:
          'Votre présentation dépend du centre d’examen auquel notre établissement est rattaché, dans les Hauts-de-Seine. C’est précisément pour cela que nos leçons se déroulent sur les axes de Nanterre et des communes voisines.',
      },
      {
        question: 'Combien de temps de trajet depuis Houilles ?',
        answer:
          'Quelques minutes en RER A jusqu’aux gares de Nanterre, ou environ 15 minutes en voiture par le pont de Bezons.',
      },
    ],
  },
  {
    slug: 'sartrouville',
    name: 'Sartrouville',
    schemaName: 'Sartrouville',
    fromCity: 'depuis Sartrouville',
    postalCode: '78500',
    department: 'Yvelines (78)',
    driveTime: '20 min',
    distanceKm: 10,
    metaDescription:
      'Auto-école près de Sartrouville : permis B dès 899 €, boîte automatique dès 799 €, accéléré et code. RER A direct vers Nanterre. CPF selon éligibilité.',
    intro: [
      'Avec plus de cinquante mille habitants, Sartrouville est l’une des plus grandes communes des Yvelines — et l’offre d’auto-écoles y suit rarement la demande. Les listes d’attente pour démarrer la conduite s’allongent, et les délais de présentation à l’examen avec elles. À vingt minutes de là, notre agence de Nanterre garde des créneaux disponibles du lundi au samedi.',
      'Le RER A relie directement la gare de Sartrouville aux gares de Nanterre, sans changement. Aucune condition de résidence n’existe pour choisir son auto-école : habiter les Yvelines ne vous empêche en rien de vous former dans les Hauts-de-Seine, et votre présentation à l’examen suivra le centre auquel notre établissement est rattaché.',
    ],
    access: [
      { mode: 'RER A', detail: 'Depuis la gare de Sartrouville, liaison directe vers les gares de Nanterre — sans changement, quelques minutes de trajet.' },
      { mode: 'Voiture', detail: 'Environ 20 minutes en passant par le pont de Bezons puis l’avenue de la République.' },
      { mode: 'Transilien L', detail: 'La ligne L dessert également Sartrouville en direction de Paris Saint-Lazare, avec correspondance vers Nanterre-Université.' },
    ],
    neighborhoods: ['Centre-ville', 'Les Richebourgs', 'La Vaudoire', 'Cité des Indes'],
    whyUs: [
      'Des créneaux réellement disponibles, là où les délais s’allongent côté Yvelines.',
      'RER A direct : l’une des liaisons les plus simples vers Nanterre depuis la boucle de Seine.',
      'Vous vous entraînez sur les axes du 92 où se déroulera votre épreuve, au lieu de les découvrir le jour J.',
    ],
    image: '/blog/ville-sartrouville.webp',
    faqs: [
      {
        question: 'J’habite Sartrouville, dans les Yvelines : puis-je m’inscrire chez vous ?',
        answer:
          'Oui, sans aucune restriction. Le choix de l’auto-école est libre et ne dépend ni de votre commune ni de votre département de résidence. Plusieurs de nos élèves viennent de Sartrouville et des communes voisines.',
      },
      {
        question: 'Combien de temps de trajet depuis Sartrouville ?',
        answer:
          'Quelques minutes en RER A jusqu’aux gares de Nanterre, sans changement, ou une vingtaine de minutes en voiture par le pont de Bezons.',
      },
      {
        question: 'Proposez-vous la boîte automatique et la formule accélérée ?',
        answer:
          'Oui, les deux. En boîte automatique, l’examen est possible dès 13 heures de conduite contre 20 heures en boîte manuelle, et la formule accélérée concentre code et conduite sur quelques semaines.',
      },
    ],
  },
  {
    slug: 'argenteuil',
    name: 'Argenteuil',
    schemaName: 'Argenteuil',
    fromCity: 'depuis Argenteuil',
    postalCode: '95100',
    department: 'Val-d’Oise (95)',
    driveTime: '15 min',
    distanceKm: 8,
    metaDescription:
      'Auto-école près d’Argenteuil : permis B dès 899 €, boîte auto dès 799 €, accéléré et code. À 15 min par le pont de Bezons. CPF selon éligibilité.',
    intro: [
      'Argenteuil est la commune la plus peuplée du Val-d’Oise, et ses auto-écoles absorbent une demande considérable. Résultat bien connu des candidats du secteur : des mois d’attente avant de commencer, puis avant d’être présenté. Franchir la Seine change souvent radicalement le calendrier.',
      'Le pont de Bezons met notre agence du 375 avenue de la République à un quart d’heure du centre d’Argenteuil. Et le passage dans les Hauts-de-Seine a un intérêt pédagogique : les parcours d’examen du secteur empruntent les axes du 92, ceux-là mêmes sur lesquels se déroulent nos leçons.',
    ],
    access: [
      { mode: 'Voiture', detail: 'Environ 15 minutes par le pont de Bezons puis l’avenue de la République — l’itinéraire le plus direct depuis le sud d’Argenteuil.' },
      { mode: 'Tram T2', detail: 'Le terminus « Pont de Bezons », accessible en bus depuis Argenteuil, relie ensuite tout le secteur de La Défense.' },
      { mode: 'Transilien J', detail: 'La ligne J dessert Argenteuil vers Paris Saint-Lazare, avec correspondance possible vers Nanterre.' },
    ],
    neighborhoods: ['Centre-ville', 'Val d’Argent', 'Orgemont', 'Les Coteaux'],
    whyUs: [
      'Des délais de démarrage sans commune mesure avec ceux du secteur d’Argenteuil.',
      'Un quart d’heure par le pont de Bezons, sans traverser Paris ni La Défense.',
      'Formules affichées sans devis surprise, payables en 2 fois sans frais.',
    ],
    image: '/blog/ville-argenteuil.webp',
    faqs: [
      {
        question: 'Faut-il habiter les Hauts-de-Seine pour s’inscrire ?',
        answer:
          'Non. Aucune condition de résidence n’existe pour choisir son auto-école. De nombreux élèves d’Argenteuil et du Val-d’Oise se forment chez nous.',
      },
      {
        question: 'Où se déroulera mon examen si je viens d’Argenteuil ?',
        answer:
          'Votre présentation dépend du centre d’examen auquel notre établissement est rattaché, dans les Hauts-de-Seine. C’est précisément pour cela que nos leçons se déroulent sur les axes de Nanterre et des communes voisines.',
      },
      {
        question: 'Combien de temps pour venir depuis Argenteuil ?',
        answer:
          'Environ 15 minutes en voiture par le pont de Bezons. En transports, comptez un bus jusqu’au secteur de Bezons puis une correspondance vers Nanterre.',
      },
    ],
  },
  {
    slug: 'asnieres-sur-seine',
    name: 'Asnières-sur-Seine',
    schemaName: 'Asnières-sur-Seine',
    fromCity: 'depuis Asnières-sur-Seine',
    postalCode: '92600',
    department: 'Hauts-de-Seine (92)',
    driveTime: '15 min',
    distanceKm: 8,
    metaDescription:
      'Auto-école près d’Asnières-sur-Seine : ligne L directe vers Nanterre-Université. Permis B dès 899 €, boîte auto, accéléré et code. CPF selon éligibilité.',
    intro: [
      'Depuis Asnières-sur-Seine, rejoindre notre auto-école ne demande pas de changement : la ligne L relie directement la gare d’Asnières à Nanterre-Université, en desservant Bécon-les-Bruyères, Courbevoie et La Garenne-Colombes. C’est l’une des liaisons les plus confortables de tout notre secteur.',
      'Asnières compte près de quatre-vingt-dix mille habitants et une forte proportion de jeunes actifs. Pour eux, la difficulté n’est pas le trajet mais le planning : c’est pourquoi nous conduisons jusqu’à 20h en semaine et le samedi jusqu’à 15h, de façon à caser une leçon après le travail.',
    ],
    access: [
      { mode: 'Transilien L', detail: 'Gare d’Asnières-sur-Seine → Nanterre-Université sans changement, via Bécon-les-Bruyères, Courbevoie et La Garenne-Colombes.' },
      { mode: 'Voiture', detail: 'Environ 15 minutes par Colombes et l’avenue de la République.' },
      { mode: 'Bus', detail: 'Plusieurs lignes relient Asnières à Colombes et à Nanterre, en complément du train.' },
    ],
    neighborhoods: ['Centre-ville', 'Bourguignons', 'Le Bac d’Asnières', 'Voltaire'],
    whyUs: [
      'Une liaison ferroviaire directe vers Nanterre-Université, sans aucun changement.',
      'Conduite jusqu’à 20h en semaine et le samedi jusqu’à 15h : la leçon d’après-travail est notre créneau le plus demandé.',
      'Permis B manuel ou automatique, formule accélérée, conduite accompagnée dès 15 ans et code en salle comme en ligne.',
    ],
    image: '/blog/ville-asnieres-sur-seine.webp',
    faqs: [
      {
        question: 'Comment venir d’Asnières-sur-Seine à votre auto-école ?',
        answer:
          'La ligne L relie la gare d’Asnières-sur-Seine à Nanterre-Université sans changement. En voiture, comptez une quinzaine de minutes par Colombes.',
      },
      {
        question: 'Puis-je prendre des leçons après le travail ?',
        answer:
          'Oui. Nos moniteurs conduisent de 10h à 20h du lundi au vendredi et le samedi de 9h à 15h. Le créneau de fin de journée est le plus réservé par nos élèves du secteur.',
      },
      {
        question: 'Le code se prépare-t-il en salle ou en ligne ?',
        answer:
          'Les deux, au choix. Les séances en salle se tiennent à Nanterre, et notre pack de révision en ligne vous permet de travailler depuis chez vous ou dans le train.',
      },
    ],
  },
  {
    slug: 'chatou',
    name: 'Chatou',
    schemaName: 'Chatou',
    fromCity: 'depuis Chatou',
    postalCode: '78400',
    department: 'Yvelines (78)',
    driveTime: '15 min',
    distanceKm: 8,
    metaDescription:
      'Auto-école près de Chatou : RER A direct vers Nanterre. Permis B dès 899 €, boîte automatique dès 799 €, accéléré et code. CPF selon éligibilité.',
    intro: [
      'La gare de Chatou–Croissy est sur le RER A : quelques stations suffisent pour rejoindre Nanterre, en passant par Rueil-Malmaison. C’est un trajet que font quotidiennement de nombreux Catoviens, et il rend notre auto-école aussi accessible qu’un établissement du centre-ville.',
      'L’intérêt ne se limite pas au tarif. Entre les berges de Seine, l’île des Impressionnistes et les axes qui filent vers Rueil et Nanterre, le secteur offre une variété de situations de conduite bien plus formatrice qu’un apprentissage cantonné aux rues résidentielles — et c’est sur ces axes du 92 que se déroulent les parcours d’examen.',
    ],
    access: [
      { mode: 'RER A', detail: 'Gare de Chatou–Croissy → gares de Nanterre en quelques stations, via Rueil-Malmaison, sans changement.' },
      { mode: 'Voiture', detail: 'Environ 15 minutes par Rueil-Malmaison et l’avenue Georges-Clemenceau.' },
      { mode: 'Bus', detail: 'Les lignes reliant Chatou à Rueil-Malmaison permettent de rejoindre le RER A ou de poursuivre vers Nanterre.' },
    ],
    neighborhoods: ['Centre-ville', 'Le Village', 'Les Landes', 'Île des Impressionnistes'],
    whyUs: [
      'RER A direct depuis Chatou–Croissy : quelques stations, sans changement.',
      'Des leçons sur les axes de Rueil et Nanterre, ceux qu’empruntent les parcours d’examen du secteur.',
      'Des tarifs affichés et payables en 2 fois sans frais, nettement plus doux que sur la rive yvelinoise.',
    ],
    image: '/blog/ville-chatou.webp',
    faqs: [
      {
        question: 'Puis-je m’inscrire chez vous en habitant Chatou, dans les Yvelines ?',
        answer:
          'Oui. Le choix de l’auto-école est entièrement libre et ne dépend pas de votre département de résidence. Le RER A rend le trajet très simple depuis Chatou–Croissy.',
      },
      {
        question: 'Combien de stations depuis Chatou ?',
        answer:
          'Quelques stations de RER A en passant par Rueil-Malmaison, sans changement. En voiture, comptez une quinzaine de minutes.',
      },
      {
        question: 'Proposez-vous la conduite accompagnée ?',
        answer:
          'Oui, dès 15 ans. Cette formule affiche le meilleur taux de réussite au niveau national et réduit la période probatoire à 2 ans au lieu de 3.',
      },
    ],
  },
  {
    slug: 'gennevilliers',
    name: 'Gennevilliers',
    schemaName: 'Gennevilliers',
    fromCity: 'depuis Gennevilliers',
    postalCode: '92230',
    department: 'Hauts-de-Seine (92)',
    driveTime: '15 min',
    distanceKm: 8,
    metaDescription:
      'Auto-école près de Gennevilliers : permis B dès 899 €, boîte automatique dès 799 €, accéléré et code à Nanterre. Métro 13 et T1. CPF selon éligibilité.',
    intro: [
      'Gennevilliers compte l’une des populations les plus jeunes des Hauts-de-Seine, et une part importante de ses habitants passe le permis pour accéder à l’emploi — notamment autour du port et des zones d’activité. Pour ce public, deux choses comptent avant tout : le budget et le délai.',
      'Nos formules sont affichées sans devis surprise et payables en 2 fois sans frais, et nous gardons des créneaux de conduite du lundi au samedi. Si vous êtes inscrit à France Travail, une aide au financement peut par ailleurs être mobilisée : nous en détaillons les conditions dans notre guide des aides au permis.',
    ],
    access: [
      { mode: 'Métro 13', detail: 'Les stations Gabriel Péri et Les Courtilles desservent Gennevilliers, avec correspondances bus vers Colombes et Nanterre.' },
      { mode: 'Voiture', detail: 'Environ 15 minutes par Colombes et l’avenue de la République.' },
      { mode: 'Tram T1', detail: 'Le T1 traverse Gennevilliers et permet de rejoindre les correspondances vers le secteur de Nanterre.' },
    ],
    neighborhoods: ['Le Luth', 'Les Agnettes', 'Village', 'Les Grésillons'],
    whyUs: [
      'Des tarifs affichés parmi les plus accessibles du secteur, payables en 2 fois sans frais.',
      'Un accompagnement sur les dispositifs d’aide au financement, notamment pour les demandeurs d’emploi.',
      'Conduite du lundi au samedi, avec des créneaux jusqu’à 20h en semaine.',
    ],
    image: '/blog/ville-gennevilliers.webp',
    faqs: [
      {
        question: 'Comment venir de Gennevilliers jusqu’à votre auto-école ?',
        answer:
          'Comptez une quinzaine de minutes en voiture par Colombes. En transports, le métro 13 et le T1 desservent Gennevilliers, avec des correspondances bus vers Nanterre.',
      },
      {
        question: 'Existe-t-il des aides pour financer le permis ?',
        answer:
          'Plusieurs dispositifs existent selon votre situation : aide de France Travail pour les demandeurs d’emploi, permis à 1 € par jour pour les 15-25 ans, aides communales ou de la mission locale. Le CPF reste possible selon les règles d’éligibilité en vigueur.',
      },
      {
        question: 'Proposez-vous une formule accélérée ?',
        answer:
          'Oui. Code et conduite peuvent être concentrés sur quelques semaines si vos disponibilités le permettent — une formule souvent choisie lorsque le permis conditionne une embauche.',
      },
    ],
  },
]
