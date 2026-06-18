export interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  featured_image: string | null
  author_name: string
  category: string
  tags: string[]
  published_at: string
  views_count: number
}

export const blogPosts: BlogPost[] = [
  {
    id: '11',
    title: 'Comment gérer son stress pour réussir l\'examen de conduite',
    slug: 'comment-gérer-son-stress-pour-réussir-l-examen-de-conduite',
    excerpt: "Le stress est l'un des principaux obstacles le jour de l'examen de conduite. Découvrez nos conseils concrets pour rester calme, confiant et mettre toutes les chances de votre côté.",
    content: `# Comment gérer son stress pour réussir l'examen de conduite

Le jour de l'examen de conduite, le stress peut transformer un candidat parfaitement préparé en conducteur hésitant. La bonne nouvelle : le stress se gère et s'anticipe. Voici nos conseils pour aborder l'épreuve avec sérénité.

## 1. Préparez-vous suffisamment en amont

La confiance vient de la préparation. Plus vous avez d'heures de conduite et de situations variées derrière vous, moins l'examen vous semblera impressionnant. N'hésitez pas à demander à votre moniteur de refaire les manœuvres ou les parcours qui vous mettent le moins à l'aise.

## 2. Adoptez une bonne hygiène la veille

- Dormez suffisamment la nuit précédente.
- Mangez normalement avant l'épreuve pour rester concentré.
- Évitez les excitants (café en excès, boissons énergisantes) qui amplifient la nervosité.

## 3. Respirez et relâchez la pression

Quelques minutes avant de monter dans le véhicule, pratiquez la respiration profonde : inspirez lentement par le nez, retenez quelques secondes, puis expirez doucement. Cet exercice simple fait baisser le rythme cardiaque et clarifie l'esprit.

## 4. Dédramatisez l'examen

Rappelez-vous que l'examinateur n'est pas là pour vous piéger, mais pour vérifier que vous conduisez en sécurité. Une petite erreur n'est pas forcément éliminatoire : continuez à conduire calmement plutôt que de vous focaliser dessus.

## 5. Concentrez-vous sur la conduite, pas sur le résultat

Pendant l'épreuve, restez dans l'instant présent : observez, anticipez, signalez vos intentions. En vous concentrant sur les bons gestes plutôt que sur la note finale, vous laissez moins de place à l'anxiété.

## Conclusion

Le stress fait partie de l'examen, mais il ne doit pas vous contrôler. Avec une préparation solide, un bon repos et quelques techniques de respiration, vous aborderez l'épreuve avec confiance. Chez Auto Ecole Des Paquerettes, nous accompagnons chaque élève jusqu'au jour J pour qu'il se présente serein et prêt à réussir.`,
    featured_image: '/blog2.jpeg',
    author_name: 'Équipe Auto Ecole Des Paquerettes',
    category: 'Conseils',
    tags: ['examen de conduite', 'stress', 'conseils', 'permis'],
    published_at: '2026-06-17',
    views_count: 0
  },
  {
    id: '1',
    title: '5 Astuces pour Réussir votre Code de la Route du Premier Coup',
    slug: '5-astuces-reussir-code-route-premier-coup',
    excerpt: "Découvrez les meilleures stratégies et techniques pour réussir votre examen du code de la route dès la première tentative. Nos experts partagent leurs conseils.",
    content: `# 5 Astuces pour Réussir votre Code de la Route du Premier Coup

Réaliser son code de la route du premier coup est l'objectif de tout candidat. Voici nos 5 astuces essentielles pour maximiser vos chances de succès.

## 1. Préparez-vous avec les bonnes ressources

Utilisez des applications sérieuses et reconnues pour votre préparation. Les tests en ligne simulant les conditions réelles de l'examen sont particulièrement efficaces. Entraînez-vous régulièrement, au moins 30 minutes par jour.

## 2. Comprenez plutôt que n'apprenez par cœur

Le code de la route n'est pas une simple mémorisation. Comprenez la logique derrière chaque règle :
- Pourquoi cette limitation de vitesse ?
- Quelle est la priorité à cette intersection ?
- Comment réagir en cas d'urgence ?

Cette compréhension vous permettra de répondre correctement même aux questions pièges.

## 3. Maîtrisez les panneaux de signalisation

Les panneaux représentent une part importante de l'examen. Créez des fiches de révision pour les différents types :
- Panneaux de danger
- Panneaux d'interdiction
- Panneaux d'obligation
- Panneaux d'indication

## 4. Gérez votre stress le jour J

Le stress est l'ennemi numéro un. Arrivez en avance, bien reposé et nourri. Respirez profondément avant de commencer. Rappelez-vous que vous êtes bien préparé.

## 5. Analysez chaque question

Prenez le temps de lire attentivement chaque question et chaque réponse. Éliminez les réponses évidemment fausses avant de choisir. Ne vous précipitez pas, vous avez le temps nécessaire.

## Conclusion

Avec une préparation sérieuse et ces astuces en tête, vous mettez toutes les chances de votre côté pour réussir votre code du premier coup. Bonne chance !`,
    featured_image: '/blog1.jpeg',
    author_name: 'Équipe Auto Ecole Des Paquerettes',
    category: 'Code',
    tags: ['code de la route', 'examen', 'conseils', 'réussite'],
    published_at: '2024-01-15',
    views_count: 0
  },
  {
    id: '2',
    title: 'Comment Choisir sa Auto-École : Les Critères Essentiels',
    slug: 'comment-choisir-auto-ecole-criteres-essentiels',
    excerpt: "Le choix de votre auto-école est crucial pour réussir votre permis. Découvrez les critères à prendre en compte pour faire le bon choix.",
    content: `# Comment Choisir sa Auto-École : Les Critères Essentiels

Choisir la bonne auto-école est une décision importante qui peut influencer votre réussite au permis de conduire. Voici les critères essentiels à considérer.

## 1. Le taux de réussite

Renseignez-vous sur le taux de réussite de l'auto-école. Un bon taux (supérieur à 70%) indique généralement une qualité d'enseignement. N'hésitez pas à demander ces chiffres.

## 2. La qualité des moniteurs

Les moniteurs sont le cœur de l'apprentissage. Recherchez des avis sur :
- Leur pédagogie
- Leur patience
- Leur capacité à expliquer clairement

## 3. Les tarifs et les options de paiement

Comparez les prix mais attention aux offres trop alléchantes. Vérifiez ce qui est inclus :
- Le code de la route
- Les heures de conduite
- Le véhicule d'examen
- Les options de paiement en plusieurs fois

## 4. La flexibilité des horaires

Si vous travaillez ou étudiez, la flexibilité est cruciale. Certaines auto-écoles proposent :
- Des cours le soir
- Des cours le week-end
- Des horaires à la carte

## 5. La localisation

Choisissez une auto-école proche de chez vous ou de votre travail. Cela vous fera gagner du temps et facilitera votre assiduité.

## 6. Le matériel pédagogique

Une bonne auto-école dispose de :
- Véhicules modernes et bien entretenus
- Applications de préparation au code
- Simulateurs de conduite (optionnel)
- Supports de cours complets

## Conclusion

Prenez le temps de visiter plusieurs auto-écoles, de rencontrer les moniteurs et de comparer les offres. Votre choix aura un impact direct sur votre apprentissage et votre réussite.`,
    featured_image: '/blog2.jpeg',
    author_name: 'Équipe Auto Ecole Des Paquerettes',
    category: 'Conseils',
    tags: ['auto-école', 'choix', 'critères', 'permis'],
    published_at: '2024-01-10',
    views_count: 0
  },
  {
    id: '3',
    title: 'Le Permis de Conduire en 10 Jours : Est-ce Possible ?',
    slug: 'permis-conduire-10-jours-possible',
    excerpt: "La formation accélérée en 10 jours est de plus en plus populaire. Découvrez les avantages, les inconvénients et si c'est fait pour vous.",
    content: `# Le Permis de Conduire en 10 Jours : Est-ce Possible ?

La formation accélérée en 10 jours séduit de nombreux candidats pressés. Mais est-ce vraiment une bonne option ? Faisons le point.

## Qu'est-ce que la formation accélérée ?

La formation accélérée condense l'ensemble de l'apprentissage sur une période courte, généralement 10 à 14 jours, avec :
- Des sessions intensives de code de la route
- Plusieurs heures de conduite par jour
- Un examen programmé à la fin

## Les avantages

### Rapidité
C'est l'avantage principal : obtenez votre permis en moins de 2 semaines au lieu de plusieurs mois.

### Immersion totale
L'apprentissage continu permet une meilleure mémorisation et une progression rapide.

### Motivation
Le court délai maintient une motivation constante tout au long de la formation.

## Les inconvénients

### Intensité
Le rythme peut être éprouvant, surtout si vous n'êtes pas habitué à l'intensité.

### Moins de temps pour assimiler
Certaines personnes ont besoin de plus de temps pour intégrer les réflexes de conduite.

### Coût
Les formations accélérées sont souvent plus chères que les formations classiques.

## Est-ce fait pour vous ?

La formation accélérée convient particulièrement si :
- Vous avez déjà une expérience de conduite
- Vous êtes disponible à temps plein pendant la période
- Vous apprenez rapidement
- Vous êtes motivé et discipliné

## Conclusion

La formation en 10 jours est une excellente option pour les candidats qui peuvent supporter l'intensité. Évaluez votre profil et vos disponibilités avant de vous engager.`,
    featured_image: '/blog3.jpeg',
    author_name: 'Équipe Auto Ecole Des Paquerettes',
    category: 'Permis',
    tags: ['permis accéléré', 'formation', '10 jours', 'intensif'],
    published_at: '2024-01-05',
    views_count: 0
  },
  {
    id: '4',
    title: 'Les Erreurs à Éviter le Jour de l\'Examen de Conduite',
    slug: 'erreurs-eviter-jour-examen-conduite',
    excerpt: "Le jour de l'examen, le stress peut vous faire commettre des erreurs évitables. Voici les pièges à connaître pour maximiser vos chances.",
    content: `# Les Erreurs à Éviter le Jour de l'Examen de Conduite

Le jour J est arrivé. Après des mois de préparation, vous passez votre examen de conduite. Voici les erreurs à éviter absolument.

## 1. Ne pas vérifier le véhicule

Avant de partir, vérifiez systématiquement :
- Les feux
- Les pneus
- Le niveau d'huile
- Les rétroviseurs
- La ceinture de sécurité

L'examinateur attend de vous que vous fassiez ces vérifications.

## 2. Oublier les clignotants

Le clignotant est votre meilleur allié. Signalez TOUJOURS vos intentions :
- Avant de tourner
- Avant de changer de file
- Avant de dépasser
- Avant de vous garer

## 3. Ne pas adapter sa vitesse

Adaptez votre vitesse en permanence :
- Ralentissez en agglomération
- Accélérez sur autoroute
- Modérez en virage
- Respectez les limitations

## 4. Mal gérer les intersections

Les intersections sont des points critiques :
- Respectez les priorités
- Regardez à droite et à gauche
- Avancez prudemment
- N'hésitez pas à vous arrêter si nécessaire

## 5. Ne pas communiquer avec l'examinateur

L'examinateur est là pour évaluer, pas pour piéger. Écoutez ses consignes et n'hésitez pas à demander des clarifications si nécessaire.

## 6. Se précipiter

Prenez votre temps. Même si l'examen a une durée limitée, la précipitation mène aux erreurs. Conduisez à votre rythme.

## 7. Perdre ses moyens en cas d'erreur

Si vous commettez une erreur, ne paniquez pas. Continuez à conduire normalement. Une erreur ne signifie pas l'échec automatique.

## Conclusion

La clé est de rester concentré et de conduire comme vous l'avez appris. Avec une bonne préparation et ces conseils en tête, vous mettez toutes les chances de votre côté.`,
    featured_image: '/blog4.jpeg',
    author_name: 'Équipe Auto Ecole Des Paquerettes',
    category: 'Conduite',
    tags: ['examen', 'conduite', 'erreurs', 'conseils'],
    published_at: '2024-01-01',
    views_count: 0
  },
  {
    id: '5',
    title: 'Financement CPF : Comment Utiliser votre Compte pour le Permis',
    slug: 'financement-cpf-compte-permis',
    excerpt: "Le Compte Personnel de Formation peut financer tout ou partie de votre permis de conduire. Découvrez les conditions et les démarches.",
    content: `# Financement CPF : Comment Utiliser votre Compte pour le Permis

Le Compte Personnel de Formation (CPF) est une opportunité pour financer votre permis de conduire. Voici comment en bénéficier.

## Qu'est-ce que le CPF ?

Le CPF est un compte individuel alimenté tout au long de votre vie professionnelle. Il permet de financer des formations éligibles, dont le permis de conduire dans certaines conditions.

## Conditions d'éligibilité

Pour utiliser votre CPF pour le permis de conduire :
- Le permis doit être lié à une activité professionnelle
- La formation doit être dispensée par un organisme certifié
- Vous devez justifier d'un besoin professionnel

## Les permis éligibles

Certains permis sont plus facilement éligibles :
- Permis B (voiture) : souvent accepté avec justification professionnelle
- Permis poids lourd : très éligible pour les métiers du transport
- Permis moto : éligible selon les situations

## Comment faire la demande ?

### 1. Vérifiez votre solde CPF
Connectez-vous sur le site officiel moncompteformation.gouv.fr pour connaître vos droits.

### 2. Trouvez une auto-école éligible
Toutes les auto-écoles n'acceptent pas le CPF. Renseignez-vous auprès de celles qui sont certifiées.

### 3. Constituez votre dossier
Préparez les documents :
- Justificatif d'identité
- Attestation CPF
- Devis de la formation
- Justificatif de besoin professionnel

### 4. Déposez votre demande
Faites la demande en ligne via le site CPF. L'instruction peut prendre plusieurs semaines.

## Montant pris en charge

Le CPF peut couvrir :
- Jusqu'à 100% du coût de la formation
- Dans la limite de vos droits CPF
- Selon l'éligibilité de votre projet

## Conclusion

Le CPF est une excellente opportunité pour financer votre permis. Renseignez-vous dès maintenant sur vos droits et les démarches à suivre.`,
    featured_image: '/blog5.jpeg',
    author_name: 'Équipe Auto Ecole Des Paquerettes',
    category: 'Conseils',
    tags: ['CPF', 'financement', 'permis', 'formation'],
    published_at: '2023-12-20',
    views_count: 0
  },
  {
    id: '6',
    title: 'Conduite de Nuit : Les Règles et Précautions à Connaître',
    slug: 'conduite-nuit-regles-precautions',
    excerpt: "La conduite de nuit présente des défis spécifiques. Découvrez les règles de sécurité et les précautions à prendre pour rouler en toute sécurité.",
    content: `# Conduite de Nuit : Les Règles et Précautions à Connaître

La conduite nocturne demande une vigilance accrue. Voici les règles essentielles et les précautions à adopter.

## Les défis de la conduite de nuit

### Visibilité réduite
La nuit, votre champ de vision est réduit. Vous ne voyez que ce que vos phares éclairement, soit environ 100 mètres.

### Fatigue accrue
Le corps est naturellement programmé pour dormir la nuit. La fatigue arrive plus rapidement.

### Éblouissement
Les phares des autres véhicules peuvent éblouir et gêner votre vision.

## Règles de sécurité

### 1. Adaptez votre vitesse
Roulez moins vite que le jour. Vous devez être capable de vous arrêter dans la zone éclairée par vos phares.

### 2. Utilisez correctement vos feux
- Feux de croisement en agglomération
- Feux de route hors agglomération si personne en face
- Feux antibrouillard uniquement en cas de besoin

### 3. Surveillez les piétons
Les piétons sont moins visibles la nuit. Soyez particulièrement vigilant aux passages piétons.

### 4. Reposez-vous régulièrement
Faites des pauses toutes les 2 heures. La fatigue est dangereuse, surtout la nuit.

## Précautions avant de partir

### Vérifiez l'éclairage
- Phares propres et bien réglés
- Feux arrière fonctionnels
- Phares antibrouillard opérationnels

### Préparez votre véhicule
- Essuie-glaces en bon état
- Lave-glace rempli
- Pare-brise propre

### Planifiez votre trajet
- Choisissez des routes bien éclairées
- Évitez les routes inconnues
- Prévoyez des arrêts

## En cas d'éblouissement

Si vous êtes ébloui par un véhicule en face :
- Regardez à droite de la route
- Ralentissez sans freiner brusquement
- Ne clignez pas des yeux en retour

## Conclusion

La conduite de nuit demande plus de vigilance et d'anticipation. En suivant ces règles, vous roulez en toute sécurité.`,
    featured_image: null,
    author_name: 'Équipe Auto Ecole Des Paquerettes',
    category: 'Sécurité',
    tags: ['conduite de nuit', 'sécurité', 'phares', 'précautions'],
    published_at: '2023-12-15',
    views_count: 0
  },
  {
    id: '7',
    title: 'Première Voiture : Comment Choisir le Modèle Adapté',
    slug: 'premiere-voiture-choisir-modele-adapte',
    excerpt: "Après l'obtention du permis, le choix de la première voiture est crucial. Découvrez les critères pour trouver le véhicule idéal.",
    content: `# Première Voiture : Comment Choisir le Modèle Adapté

Félicitations pour votre permis ! Voici maintenant choisir votre première voiture. Nos conseils pour faire le bon choix.

## Budget : le premier critère

### Prix d'achat
Définissez votre budget maximum. N'oubliez pas d'inclure :
- Le prix du véhicule
- Les frais d'immatriculation
- L'assurance

### Coûts d'entretien
Renseignez-vous sur :
- La consommation de carburant
- Le coût des pièces
- La fréquence des révisions
- Le prix de l'assurance

## Taille et puissance

### Taille adaptée
Pour une première voiture, privilégiez :
- Une citadine ou une compacte
- Un véhicule facile à garer
- Une bonne visibilité

### Puissance raisonnable
Évitez les véhicules trop puissants :
- 60 à 90 chevaux suffisent
- Meilleure consommation
- Assurance moins chère
- Plus facile à maîtriser

## Sécurité avant tout

### Équipements de sécurité
Vérifiez la présence de :
- ABS
- ESP
- Airbags (frontaux et latéraux)
- Aide au freinage d'urgence

### Note de sécurité
Consultez les tests Euro NCAP. Visez au minimum 4 étoiles.

## Fiabilité et entretien

### Marques réputées
Certaines marques sont réputées pour leur fiabilité :
- Toyota
- Honda
- Mazda
- Volkswagen

### Kilométrage
Pour un véhicule d'occasion :
- Privilégiez moins de 100 000 km
- Vérifiez le carnet d'entretien
- Faites une contre-expertise

## Neuf ou occasion ?

### Avantages du neuf
- Garantie constructeur
- Dernières technologies
- Personnalisation possible

### Avantages de l'occasion
- Prix plus bas
- Moins de décote
- Plus de choix

## Conclusion

Prenez votre temps pour choisir. Essayez plusieurs modèles, comparez les offres et n'hésitez pas à demander conseil. Votre première voiture doit vous apporter sécurité et plaisir de conduire.`,
    featured_image: null,
    author_name: 'Équipe Auto Ecole Des Paquerettes',
    category: 'Conseils',
    tags: ['première voiture', 'achat', 'choix', 'critères'],
    published_at: '2023-12-10',
    views_count: 0
  },
  {
    id: '8',
    title: 'Le Code de la Route a Changé : Les Nouvelles Règles de 2024',
    slug: 'code-route-nouvelles-regles-2024',
    excerpt: "Le code de la route évolue régulièrement. Découvrez les nouvelles règles entrées en vigueur en 2024 et leurs implications pour les conducteurs.",
    content: `# Le Code de la Route a Changé : Les Nouvelles Règles de 2024

Le code de la route est mis à jour régulièrement. Voici les principales nouveautés de 2024 à connaître.

## Nouvelles limitations de vitesse

### En agglomération
Certaines villes ont abaissé la vitesse à 30 km/h sur l'ensemble de leur territoire. Vérifiez la signalisation locale.

### Zones à faibles émissions
De nouvelles zones restreignent l'accès aux véhicules polluants. Informez-vous sur les vignettes Crit'Air requises.

## Sécurité routière renforcée

### Alcoolémie
Les sanctions pour conduite sous l'emprise de l'alcool sont durcies :
- Suspension de permis plus longue
- Amendes majorées
- Stage obligatoire systématique

### Téléphone au volant
L'utilisation du téléphone tenu en main est plus sévèrement sanctionnée. Seuls les systèmes mains-libres sont autorisés.

## Équipements obligatoires

### Nouveaux équipements
Certains véhicules doivent désormais être équipés de :
- Alcooltest obligatoire (certaines catégories)
- Gilets de haute visibilité
- Triangle de signalisation

### Véhicules électriques
Des règles spécifiques s'appliquent aux bornes de recharge et au stationnement des véhicules électriques.

## Partage de la route

### Pistes cyclables
Les règles de partage de la route avec les cyclistes sont précisées :
- Distance de dépassement minimale
- Priorité aux cyclables dans certaines situations
- Sanctions renforcées en cas d'infraction

### Trottinettes électriques
Une réglementation spécifique encadre désormais l'utilisation des trottinettes électriques sur la voie publique.

## Permis de conduire

### Nouvelles catégories
Des catégories de permis sont créées ou modifiées pour s'adapter aux nouveaux types de véhicules.

### Formation continue
Certaines catégories de conducteurs doivent suivre une formation continue pour maintenir leurs droits.

## Conclusion

Restez informé des évolutions du code de la route. Consultez régulièrement les sources officielles et adaptez votre conduite en conséquence.`,
    featured_image: null,
    author_name: 'Équipe Auto Ecole Des Paquerettes',
    category: 'Actualités',
    tags: ['code de la route', 'nouvelles règles', '2024', 'sécurité'],
    published_at: '2023-12-05',
    views_count: 0
  },
  {
    id: '9',
    title: 'Assurance Auto : Les Différents Types de Contrats Expliqués',
    slug: 'assurance-auto-types-contrats-expliques',
    excerpt: "L'assurance auto est obligatoire mais il existe plusieurs types de contrats. Découvrez les différences pour choisir celui qui vous convient.",
    content: `# Assurance Auto : Les Différents Types de Contrats Expliqués

L'assurance automobile est obligatoire en France. Voici les différents types de contrats pour vous aider à choisir.

## L'assurance au tiers : le minimum légal

### Ce que couvre
- Responsabilité civile (dégâts causés aux autres)
- Dommages corporels aux tiers
- Dommages matériels aux tiers

### Ce que ne couvre PAS
- Dégâts sur votre véhicule
- Vol
- Incendie
- Bris de glace

### Pour qui ?
- Conducteurs avec véhicule ancien
- Véhicules de faible valeur
- Budget limité

## L'assurance au tiers étendu

### Ce que couvre
- Tout ce que l'assurance au tiers couvre
- Vol
- Incendie
- Bris de glace

### Avantages
- Protection supplémentaire
- Coût modéré
- Bon compromis

### Pour qui ?
- Véhicules de valeur moyenne
- Conducteurs prudents
- Zones à risque modéré

## L'assurance tous risques

### Ce que couvre
- Tous les dommages à votre véhicule
- Responsabilité civile
- Vol, incendie, bris de glace
- Dommages même si vous êtes responsable

### Avantages
- Protection maximale
- Tranquillité d'esprit
- Indemnisation rapide

### Pour qui ?
- Véhicules neufs ou récents
- Financement à crédit
- Zones à risque élevé

## Facteurs influençant le prix

### Le véhicule
- Marque et modèle
- Valeur du véhicule
- Puissance
- Âge

### Le conducteur
- Âge et expérience
- Historique d'assurance
- Bonus-malus
- Kilométrage annuel

### La localisation
- Zone géographique
- Lieu de stationnement
- Risque de vol

## Conseils pour choisir

### Comparez les offres
Utilisez les comparateurs en ligne et demandez plusieurs devis.

### Vérifiez les garanties
Lisez attentivement les conditions générales et les exclusions.

### Adaptez à vos besoins
Choisissez selon la valeur de votre véhicule et votre utilisation.

## Conclusion

L'assurance auto est un investissement important. Prenez le temps de comparer et de choisir le contrat adapté à votre situation.`,
    featured_image: '/blog4.jpeg',
    author_name: 'Équipe Auto Ecole Des Paquerettes',
    category: 'Assurance',
    tags: ['assurance', 'contrats', 'tiers', 'tous risques'],
    published_at: '2023-11-28',
    views_count: 0
  },
  {
    id: '10',
    title: 'Conduite sur Autoroute : Les Règles de Base à Maîtriser',
    slug: 'conduite-autoroute-regles-base-maitriser',
    excerpt: "L'autoroute demande des compétences spécifiques. Découvrez les règles de base pour conduire en toute sécurité sur les voies rapides.",
    content: `# Conduite sur Autoroute : Les Règles de Base à Maîtriser

La conduite sur autoroute présente des particularités qu'il faut maîtriser. Voici les règles essentielles.

## Avant de s'engager

### Vérifications
- Niveau d'huile et de carburant
- Pression des pneus
- État des essuie-glaces
- Fonctionnement des feux

### Documentation
- Carte grise
- Permis de conduire
- Assurance à jour

## Règles de circulation

### Voies de circulation
- Voie de droite : circulation normale
- Voies du centre : dépassement
- Voie de gauche : dépassement uniquement

### Vitesse
- Respectez les limitations (130 km/h, 110 km/h par temps de pluie)
- Adaptez aux conditions météo
- Respectez les distances de sécurité

### Dépassement
- Signalez avec le clignotant
- Vérifiez vos rétroviseurs
- Accélérez pour dépasser
- Rabattez-vous après le dépassement

## Entrée et sortie d'autoroute

### À l'entrée
- Accélérez sur la bretelle d'accès
- Insérez-vous en fluide
- Signalez votre intention

### À la sortie
- Repérez la sortie à l'avance
- Positionnez-vous à droite
- Ralentissez progressivement

## Distance de sécurité

### La règle des 2 secondes
- Choisissez un repère fixe
- Comptez 2 secondes après le passage du véhicule devant
- Vous devez atteindre le repère après ces 2 secondes

### Par temps de pluie
Doublez cette distance (4 secondes minimum).

## En cas de panne ou d'accident

### Panne
- Allumez les feux de détresse
- Garez-vous sur la bande d'arrêt d'urgence
- Mettez votre gilet haute visibilité
- Appelez le secours depuis derrière la glissière

### Accident
- Sécurisez les lieux
- Appelez les secours (112)
- Ne bougez pas les blessés sauf danger imminent
- Remplissez le constat amiable

## Comportement à éviter

### La conduite agressive
- Ne taillez pas
- Ne freinez pas brusquement sans raison
- Respectez la priorité à droite

### La distraction
- Pas d'utilisation du téléphone
- Concentrez-vous sur la route
- Anticipez les situations

## Conclusion

La conduite sur autoroute demande vigilance et anticipation. En respectant ces règles, vous contribuez à la sécurité de tous.`,
    featured_image: '/blog5.jpeg',
    author_name: 'Équipe Auto Ecole Des Paquerettes',
    category: 'Conduite',
    tags: ['autoroute', 'sécurité', 'règles', 'circulation'],
    published_at: '2023-11-20',
    views_count: 0
  }
]

export const blogCategories = [
  { id: '1', name: 'Permis', slug: 'permis' },
  { id: '2', name: 'Code', slug: 'code' },
  { id: '3', name: 'Conduite', slug: 'conduite' },
  { id: '4', name: 'Conseils', slug: 'conseils' },
  { id: '5', name: 'Actualités', slug: 'actualites' },
  { id: '6', name: 'Sécurité', slug: 'securite' },
  { id: '7', name: 'Assurance', slug: 'assurance' },
]
