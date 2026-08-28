// Contenu de la page /permis-moto. Isolé ici comme les autres contenus
// éditoriaux (cities-data, faq-data) pour que la page reste une coquille de
// présentation et que les tarifs ne vivent qu'à un seul endroit.

export interface MotoLicence {
  code: string // 'AM', 'A1', 'A2', 'A'
  name: string
  age: string
  scope: string
  training: string
}

export interface MotoFaq {
  question: string
  answer: string
}

// Cadre réglementaire national — vérifié, indépendant de notre offre.
export const motoLicences: MotoLicence[] = [
  {
    code: 'AM',
    name: 'Permis AM (ex-BSR)',
    age: 'Dès 14 ans',
    scope: 'Cyclomoteurs 50 cm³ et quadricycles légers, bridés à 45 km/h.',
    training: '8 heures de formation, sans examen : théorie, plateau et circulation.',
  },
  {
    code: 'A1',
    name: 'Permis A1',
    age: 'Dès 16 ans',
    scope: 'Motos jusqu’à 125 cm³ et 11 kW, ainsi que les scooters à trois roues.',
    training: 'Épreuve théorique moto puis 20 heures minimum : plateau et circulation.',
  },
  {
    code: 'A2',
    name: 'Permis A2',
    age: 'Dès 18 ans',
    scope: 'Motos jusqu’à 35 kW, avec un rapport puissance/poids limité.',
    training: 'Épreuve théorique moto puis 20 heures minimum : plateau et circulation.',
  },
  {
    code: 'A',
    name: 'Passerelle A2 → A',
    age: 'Après 2 ans de permis A2',
    scope: 'Toutes cylindrées, sans limitation de puissance.',
    training: '7 heures de formation en établissement agréé, sans nouvel examen.',
  },
]

export const motoFaqs: MotoFaq[] = [
  {
    question: 'Faut-il repasser le code pour le permis moto ?',
    answer:
      'Oui, sauf exception. Depuis mars 2020, une épreuve théorique spécifique à la moto (l’ETM) a remplacé le code commun : elle porte sur la conduite à deux-roues, l’équipement et la sécurité. Le code voiture ne dispense pas de l’ETM, sauf si vous détenez déjà un permis obtenu depuis moins de cinq ans dans les cas prévus par la réglementation.',
  },
  {
    question: 'Quelle est la différence entre le plateau et la circulation ?',
    answer:
      'Le plateau est l’épreuve hors circulation : maniabilité à allure lente et rapide, freinage d’urgence, évitement, vérifications techniques. La circulation se déroule ensuite sur route ouverte, en autonomie, avec l’inspecteur en liaison radio. Les deux doivent être validées pour obtenir le permis.',
  },
  {
    question: 'Quel équipement faut-il prévoir pour les leçons ?',
    answer:
      'Un casque homologué, des gants certifiés moto, un blouson avec protections, un pantalon adapté et des chaussures montantes couvrant la cheville. Une dorsale est vivement recommandée. Nous vous indiquons dès l’inscription ce que nous prêtons et ce qu’il vous faut acquérir.',
  },
  {
    question: 'J’ai le permis B depuis plusieurs années : puis-je conduire un 125 ?',
    answer:
      'Oui, sous conditions. Si vous détenez le permis B depuis au moins deux ans, une formation de 7 heures en auto-école vous autorise à conduire une 125 cm³ ou un scooter à trois roues, sans examen. C’est la formule la plus demandée par nos élèves déjà titulaires du permis voiture.',
  },
  {
    question: 'Où se déroulent les cours de plateau ?',
    answer:
      'Sur une aire fermée et sécurisée, dédiée à la maniabilité. La partie circulation se fait ensuite sur les axes de Nanterre et des Hauts-de-Seine, ceux-là mêmes qu’empruntent les parcours d’examen du secteur.',
  },
  {
    question: 'Proposez-vous une formule accélérée pour la moto ?',
    answer:
      'Oui. Comme pour la voiture, les heures peuvent être concentrées sur quelques semaines si votre disponibilité le permet. Contactez-nous pour construire un planning adapté à votre rythme.',
  },
]
