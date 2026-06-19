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
    slug: 'comment-gerer-son-stress-pour-reussir-l-examen-de-conduite',
    excerpt: "Le stress est l'un des principaux obstacles le jour de l'examen de conduite. Découvrez nos conseils concrets pour rester calme, confiant et mettre toutes les chances de votre côté.",
    content: `<p>Le jour de l'<a href="/blog/erreurs-eviter-jour-examen-conduite">examen de conduite</a>, le stress peut transformer un candidat parfaitement préparé en conducteur hésitant. La bonne nouvelle : le stress se gère et s'anticipe. Voici nos conseils pour aborder l'épreuve avec sérénité.</p>
<h2>1. Préparez-vous suffisamment en amont</h2>
<p>La confiance vient de la préparation. Plus vous avez d'heures de conduite et de situations variées derrière vous, moins l'examen vous semblera impressionnant. N'hésitez pas à demander à votre moniteur de refaire les manœuvres ou les parcours qui vous mettent le moins à l'aise.</p>
<h2>2. Adoptez une bonne hygiène la veille</h2>
<ul><li>Dormez suffisamment la nuit précédente.</li><li>Mangez normalement avant l'épreuve pour rester concentré.</li><li>Évitez les excitants (café en excès, boissons énergisantes) qui amplifient la nervosité.</li></ul>
<h2>3. Respirez et relâchez la pression</h2>
<p>Quelques minutes avant de monter dans le véhicule, pratiquez la respiration profonde : inspirez lentement par le nez, retenez quelques secondes, puis expirez doucement. Cet exercice simple fait baisser le rythme cardiaque et clarifie l'esprit.</p>
<h2>4. Dédramatisez l'examen</h2>
<p>Rappelez-vous que l'examinateur n'est pas là pour vous piéger, mais pour vérifier que vous conduisez en sécurité. Une petite erreur n'est pas forcément éliminatoire : continuez à conduire calmement plutôt que de vous focaliser dessus.</p>
<h2>5. Concentrez-vous sur la conduite, pas sur le résultat</h2>
<p>Pendant l'épreuve, restez dans l'instant présent : observez, anticipez, signalez vos intentions. En vous concentrant sur les bons gestes plutôt que sur la note finale, vous laissez moins de place à l'anxiété.</p>
<h2>Conclusion</h2>
<p>Le stress fait partie de l'examen, mais il ne doit pas vous contrôler. Avec une préparation solide, un bon repos et quelques techniques de respiration, vous aborderez l'épreuve avec confiance. Chez Auto Ecole Des Paquerettes, nous accompagnons chaque élève jusqu'au jour J pour qu'il se présente serein et prêt à réussir.</p>`,
    featured_image: '/blog2.jpeg',
    author_name: 'Julien Moreau',
    category: 'Conseils',
    tags: ['examen de conduite', 'stress', 'conseils', 'permis'],
    published_at: '2026-06-19',
    views_count: 0
  },
  {
    id: '1',
    title: '5 Astuces pour Réussir votre Code de la Route du Premier Coup',
    slug: '5-astuces-reussir-code-route-premier-coup',
    excerpt: "Découvrez les meilleures stratégies et techniques pour réussir votre examen du code de la route dès la première tentative. Nos experts partagent leurs conseils.",
    content: `<p>Réaliser son code de la route du premier coup est l'objectif de tout candidat. Voici nos 5 astuces essentielles pour maximiser vos chances de succès.</p>
<h2>1. Préparez-vous avec les bonnes ressources</h2>
<p>Utilisez des applications sérieuses et reconnues pour votre préparation. Les tests en ligne simulant les conditions réelles de l'examen sont particulièrement efficaces. Entraînez-vous régulièrement, au moins 30 minutes par jour.</p>
<h2>2. Comprenez plutôt que n'apprenez par cœur</h2>
<p>Le code de la route n'est pas une simple mémorisation. Comprenez la logique derrière chaque règle :</p>
<ul><li>Pourquoi cette limitation de vitesse ?</li><li>Quelle est la priorité à cette intersection ?</li><li>Comment réagir en cas d'urgence ?</li></ul>
<p>Cette compréhension vous permettra de répondre correctement même aux questions pièges.</p>
<h2>3. Maîtrisez les panneaux de signalisation</h2>
<p>Les <a href="https://www.securite-routiere.gouv.fr" target="_blank" rel="noopener noreferrer">panneaux de signalisation</a> représentent une part importante de l'examen. Créez des fiches de révision pour les différents types :</p>
<ul><li>Panneaux de danger</li><li>Panneaux d'interdiction</li><li>Panneaux d'obligation</li><li>Panneaux d'indication</li></ul>
<h2>4. Gérez votre stress le jour J</h2>
<p>Le stress est l'ennemi numéro un. Arrivez en avance, bien reposé et nourri. Respirez profondément avant de commencer. Rappelez-vous que vous êtes bien préparé.</p>
<h2>5. Analysez chaque question</h2>
<p>Prenez le temps de lire attentivement chaque question et chaque réponse. Éliminez les réponses évidemment fausses avant de choisir. Ne vous précipitez pas, vous avez le temps nécessaire.</p>
<h2>Conclusion</h2>
<p>Avec une préparation sérieuse et ces astuces en tête, vous mettez toutes les chances de votre côté pour réussir votre code du premier coup. Bonne chance !</p>`,
    featured_image: '/blog1.jpeg',
    author_name: 'Julien Moreau',
    category: 'Code',
    tags: ['code de la route', 'examen', 'conseils', 'réussite'],
    published_at: '2026-06-17',
    views_count: 0
  },
  {
    id: '2',
    title: 'Comment Choisir sa Auto-École : Les Critères Essentiels',
    slug: 'comment-choisir-auto-ecole-criteres-essentiels',
    excerpt: "Le choix de votre auto-école est crucial pour réussir votre permis. Découvrez les critères à prendre en compte pour faire le bon choix.",
    content: `<p>Choisir la bonne <a href="/tarifs">auto-école</a> est une décision importante qui peut influencer votre réussite au permis de conduire. Voici les critères essentiels à considérer.</p>
<h2>1. Le taux de réussite</h2>
<p>Renseignez-vous sur le taux de réussite de l'auto-école. Un bon taux (supérieur à 70%) indique généralement une qualité d'enseignement. N'hésitez pas à demander ces chiffres.</p>
<h2>2. La qualité des moniteurs</h2>
<p>Les moniteurs sont le cœur de l'apprentissage. Recherchez des avis sur :</p>
<ul><li>Leur pédagogie</li><li>Leur patience</li><li>Leur capacité à expliquer clairement</li></ul>
<h2>3. Les tarifs et les options de paiement</h2>
<p>Comparez les prix mais attention aux offres trop alléchantes. Vérifiez ce qui est inclus :</p>
<ul><li>Le <a href="/blog/5-astuces-reussir-code-route-premier-coup">code de la route</a></li><li>Les heures de conduite</li><li>Le véhicule d'examen</li><li>Les options de paiement en plusieurs fois</li></ul>
<h2>4. La flexibilité des horaires</h2>
<p>Si vous travaillez ou étudiez, la flexibilité est cruciale. Certaines auto-écoles proposent :</p>
<ul><li>Des cours le soir</li><li>Des cours le week-end</li><li>Des horaires à la carte</li></ul>
<h2>5. La localisation</h2>
<p>Choisissez une auto-école proche de chez vous ou de votre travail. Cela vous fera gagner du temps et facilitera votre assiduité.</p>
<h2>6. Le matériel pédagogique</h2>
<p>Une bonne auto-école dispose de :</p>
<ul><li>Véhicules modernes et bien entretenus</li><li>Applications de préparation au code</li><li>Simulateurs de conduite (optionnel)</li><li>Supports de cours complets</li></ul>
<h2>Conclusion</h2>
<p>Prenez le temps de visiter plusieurs auto-écoles, de rencontrer les moniteurs et de comparer les offres. Votre choix aura un impact direct sur votre apprentissage et votre réussite.</p>`,
    featured_image: '/blog2.jpeg',
    author_name: 'Julien Moreau',
    category: 'Conseils',
    tags: ['auto-école', 'choix', 'critères', 'permis'],
    published_at: '2026-06-16',
    views_count: 0
  },
  {
    id: '3',
    title: 'Le Permis de Conduire en 10 Jours : Est-ce Possible ?',
    slug: 'permis-conduire-10-jours-possible',
    excerpt: "La formation accélérée en 10 jours est de plus en plus populaire. Découvrez les avantages, les inconvénients et si c'est fait pour vous.",
    content: `<p>La formation accélérée en 10 jours séduit de nombreux candidats pressés. Mais est-ce vraiment une bonne option ? Faisons le point.</p>
<h2>Qu'est-ce que la formation accélérée ?</h2>
<p>La formation accélérée condense l'ensemble de l'apprentissage sur une période courte, généralement 10 à 14 jours, avec :</p>
<ul><li>Des sessions intensives de <a href="/blog/5-astuces-reussir-code-route-premier-coup">code de la route</a></li><li>Plusieurs heures de conduite par jour</li><li>Un examen programmé à la fin</li></ul>
<h2>Les avantages</h2>
<h3>Rapidité</h3>
<p>C'est l'avantage principal : obtenez votre permis en moins de 2 semaines au lieu de plusieurs mois.</p>
<h3>Immersion totale</h3>
<p>L'apprentissage continu permet une meilleure mémorisation et une progression rapide.</p>
<h3>Motivation</h3>
<p>Le court délai maintient une motivation constante tout au long de la formation.</p>
<h2>Les inconvénients</h2>
<h3>Intensité</h3>
<p>Le rythme peut être éprouvant, surtout si vous n'êtes pas habitué à l'intensité.</p>
<h3>Moins de temps pour assimiler</h3>
<p>Certaines personnes ont besoin de plus de temps pour intégrer les réflexes de conduite.</p>
<h3>Coût</h3>
<p>Les formations accélérées sont souvent plus chères que les formations classiques.</p>
<h2>Est-ce fait pour vous ?</h2>
<p>La formation accélérée convient particulièrement si :</p>
<ul><li>Vous avez déjà une expérience de conduite</li><li>Vous êtes disponible à temps plein pendant la période</li><li>Vous apprenez rapidement</li><li>Vous êtes motivé et discipliné</li></ul>
<h2>Conclusion</h2>
<p>La formation en 10 jours est une excellente option pour les candidats qui peuvent supporter l'intensité. Évaluez votre profil et vos disponibilités avant de vous engager.</p>`,
    featured_image: '/blog3.jpeg',
    author_name: 'Julien Moreau',
    category: 'Permis',
    tags: ['permis accéléré', 'formation', '10 jours', 'intensif'],
    published_at: '2026-06-13',
    views_count: 0
  },
  {
    id: '4',
    title: 'Les Erreurs à Éviter le Jour de l\'Examen de Conduite',
    slug: 'erreurs-eviter-jour-examen-conduite',
    excerpt: "Le jour de l'examen, le stress peut vous faire commettre des erreurs évitables. Voici les pièges à connaître pour maximiser vos chances.",
    content: `<p>Le jour J est arrivé. Après des mois de préparation, vous passez votre examen de conduite. Voici les erreurs à éviter absolument.</p>
<h2>1. Ne pas vérifier le véhicule</h2>
<p>Avant de partir, vérifiez systématiquement :</p>
<ul><li>Les feux</li><li>Les pneus</li><li>Le niveau d'huile</li><li>Les rétroviseurs</li><li>La ceinture de sécurité</li></ul>
<p>L'examinateur attend de vous que vous fassiez ces vérifications.</p>
<h2>2. Oublier les clignotants</h2>
<p>Le clignotant est votre meilleur allié. Signalez TOUJOURS vos intentions :</p>
<ul><li>Avant de tourner</li><li>Avant de changer de file</li><li>Avant de dépasser</li><li>Avant de vous garer</li></ul>
<h2>3. Ne pas adapter sa vitesse</h2>
<p>Adaptez votre vitesse en permanence :</p>
<ul><li>Ralentissez en agglomération</li><li>Accélérez <a href="/blog/conduite-autoroute-regles-base-maitriser">sur autoroute</a></li><li>Modérez en virage</li><li>Respectez les limitations</li></ul>
<h2>4. Mal gérer les intersections</h2>
<p>Les intersections sont des points critiques :</p>
<ul><li>Respectez les priorités</li><li>Regardez à droite et à gauche</li><li>Avancez prudemment</li><li>N'hésitez pas à vous arrêter si nécessaire</li></ul>
<h2>5. Ne pas communiquer avec l'examinateur</h2>
<p>L'examinateur est là pour évaluer, pas pour piéger. Pour connaître le déroulement officiel de l'épreuve, consultez <a href="https://www.service-public.fr" target="_blank" rel="noopener noreferrer">service-public.fr</a>. Écoutez ses consignes et n'hésitez pas à demander des clarifications si nécessaire.</p>
<h2>6. Se précipiter</h2>
<p>Prenez votre temps. Même si l'examen a une durée limitée, la précipitation mène aux erreurs. Conduisez à votre rythme.</p>
<h2>7. Perdre ses moyens en cas d'erreur</h2>
<p>Si vous commettez une erreur, ne paniquez pas. Continuez à conduire normalement. Une erreur ne signifie pas l'échec automatique.</p>
<h2>Conclusion</h2>
<p>La clé est de rester concentré et de conduire comme vous l'avez appris. Avec une bonne préparation et ces conseils en tête, vous mettez toutes les chances de votre côté.</p>`,
    featured_image: '/blog4.jpeg',
    author_name: 'Julien Moreau',
    category: 'Conduite',
    tags: ['examen', 'conduite', 'erreurs', 'conseils'],
    published_at: '2026-06-12',
    views_count: 0
  },
  {
    id: '5',
    title: 'Financement CPF : Comment Utiliser votre Compte pour le Permis',
    slug: 'financement-cpf-compte-permis',
    excerpt: "Le Compte Personnel de Formation peut financer tout ou partie de votre permis de conduire. Découvrez les conditions et les démarches.",
    content: `<p>Le Compte Personnel de Formation (CPF) est une opportunité pour financer votre permis de conduire. Voici comment en bénéficier.</p>
<h2>Qu'est-ce que le CPF ?</h2>
<p>Le CPF est un compte individuel alimenté tout au long de votre vie professionnelle. Il permet de financer des formations éligibles, dont le permis de conduire dans certaines conditions.</p>
<h2>Conditions d'éligibilité</h2>
<p>Pour utiliser votre CPF pour le permis de conduire :</p>
<ul><li>Le permis doit être lié à une activité professionnelle</li><li>La formation doit être dispensée par un organisme certifié</li><li>Vous devez justifier d'un besoin professionnel</li></ul>
<h2>Les permis éligibles</h2>
<p>Certains permis sont plus facilement éligibles :</p>
<ul><li>Permis B (voiture) : souvent accepté avec justification professionnelle</li><li>Permis poids lourd : très éligible pour les métiers du transport</li><li>Permis moto : éligible selon les situations</li></ul>
<h2>Comment faire la demande ?</h2>
<h3>1. Vérifiez votre solde CPF</h3>
<p>Connectez-vous sur le site officiel <a href="https://www.moncompteformation.gouv.fr" target="_blank" rel="noopener noreferrer">moncompteformation.gouv.fr</a> pour connaître vos droits.</p>
<h3>2. Trouvez une auto-école éligible</h3>
<p>Toutes les <a href="/tarifs">auto-école</a>s n'acceptent pas le CPF. Renseignez-vous auprès de celles qui sont certifiées.</p>
<h3>3. Constituez votre dossier</h3>
<p>Préparez les documents :</p>
<ul><li>Justificatif d'identité</li><li>Attestation CPF</li><li>Devis de la formation</li><li>Justificatif de besoin professionnel</li></ul>
<h3>4. Déposez votre demande</h3>
<p>Faites la demande en ligne via le site CPF. L'instruction peut prendre plusieurs semaines.</p>
<h2>Montant pris en charge</h2>
<p>Le CPF peut couvrir :</p>
<ul><li>Jusqu'à 100% du coût de la formation</li><li>Dans la limite de vos droits CPF</li><li>Selon l'éligibilité de votre projet</li></ul>
<h2>Conclusion</h2>
<p>Le CPF est une excellente opportunité pour financer votre permis. Renseignez-vous dès maintenant sur vos droits et les démarches à suivre.</p>`,
    featured_image: '/blog5.jpeg',
    author_name: 'Julien Moreau',
    category: 'Conseils',
    tags: ['CPF', 'financement', 'permis', 'formation'],
    published_at: '2026-06-10',
    views_count: 0
  },
  {
    id: '6',
    title: 'Conduite de Nuit : Les Règles et Précautions à Connaître',
    slug: 'conduite-nuit-regles-precautions',
    excerpt: "La conduite de nuit présente des défis spécifiques. Découvrez les règles de sécurité et les précautions à prendre pour rouler en toute sécurité.",
    content: `<p>La conduite nocturne demande une vigilance accrue. Voici les règles essentielles et les précautions à adopter.</p>
<h2>Les défis de la conduite de nuit</h2>
<h3>Visibilité réduite</h3>
<p>La nuit, votre champ de vision est réduit. Vous ne voyez que ce que vos phares éclairement, soit environ 100 mètres.</p>
<h3>Fatigue accrue</h3>
<p>Le corps est naturellement programmé pour dormir la nuit. La fatigue arrive plus rapidement.</p>
<h3>Éblouissement</h3>
<p>Les phares des autres véhicules peuvent éblouir et gêner votre vision.</p>
<h2>Règles de sécurité</h2>
<h3>1. Adaptez votre vitesse</h3>
<p>Roulez moins vite que le jour. Vous devez être capable de vous arrêter dans la zone éclairée par vos phares.</p>
<h3>2. Utilisez correctement vos feux</h3>
<ul><li>Feux de croisement en agglomération</li><li>Feux de route hors agglomération si personne en face</li><li>Feux antibrouillard uniquement en cas de besoin</li></ul>
<h3>3. Surveillez les piétons</h3>
<p>Les piétons sont moins visibles la nuit. Soyez particulièrement vigilant aux passages piétons.</p>
<h3>4. Reposez-vous régulièrement</h3>
<p>Faites des pauses toutes les 2 heures. La fatigue est dangereuse, surtout la nuit.</p>
<h2>Précautions avant de partir</h2>
<h3>Vérifiez l'éclairage</h3>
<ul><li>Phares propres et bien réglés</li><li>Feux arrière fonctionnels</li><li>Phares antibrouillard opérationnels</li></ul>
<h3>Préparez votre véhicule</h3>
<ul><li>Essuie-glaces en bon état</li><li>Lave-glace rempli</li><li>Pare-brise propre</li></ul>
<h3>Planifiez votre trajet</h3>
<ul><li>Choisissez des routes bien éclairées</li><li>Évitez les routes inconnues</li><li>Prévoyez des arrêts</li></ul>
<h2>En cas d'éblouissement</h2>
<p>Si vous êtes ébloui par un véhicule en face :</p>
<ul><li>Regardez à droite de la route</li><li>Ralentissez sans freiner brusquement</li><li>Ne clignez pas des yeux en retour</li></ul>
<h2>Conclusion</h2>
<p>La conduite de nuit demande plus de vigilance et d'anticipation. En suivant ces règles, vous roulez en toute sécurité.</p>`,
    featured_image: null,
    author_name: 'Julien Moreau',
    category: 'Sécurité',
    tags: ['conduite de nuit', 'sécurité', 'phares', 'précautions'],
    published_at: '2026-06-09',
    views_count: 0
  },
  {
    id: '7',
    title: 'Première Voiture : Comment Choisir le Modèle Adapté',
    slug: 'premiere-voiture-choisir-modele-adapte',
    excerpt: "Après l'obtention du permis, le choix de la première voiture est crucial. Découvrez les critères pour trouver le véhicule idéal.",
    content: `<p>Félicitations pour votre permis ! Voici maintenant choisir votre première voiture. Nos conseils pour faire le bon choix.</p>
<h2>Budget : le premier critère</h2>
<h3>Prix d'achat</h3>
<p>Définissez votre budget maximum. N'oubliez pas d'inclure :</p>
<ul><li>Le prix du véhicule</li><li>Les frais d'immatriculation</li><li>L'<a href="/blog/assurance-auto-types-contrats-expliques">assurance</a></li></ul>
<h3>Coûts d'entretien</h3>
<p>Renseignez-vous sur :</p>
<ul><li>La consommation de carburant</li><li>Le coût des pièces</li><li>La fréquence des révisions</li><li>Le prix de l'assurance</li></ul>
<h2>Taille et puissance</h2>
<h3>Taille adaptée</h3>
<p>Pour une première voiture, privilégiez :</p>
<ul><li>Une citadine ou une compacte</li><li>Un véhicule facile à garer</li><li>Une bonne visibilité</li></ul>
<h3>Puissance raisonnable</h3>
<p>Évitez les véhicules trop puissants :</p>
<ul><li>60 à 90 chevaux suffisent</li><li>Meilleure consommation</li><li>Assurance moins chère</li><li>Plus facile à maîtriser</li></ul>
<h2>Sécurité avant tout</h2>
<h3>Équipements de sécurité</h3>
<p>Vérifiez la présence de :</p>
<ul><li>ABS</li><li>ESP</li><li>Airbags (frontaux et latéraux)</li><li>Aide au freinage d'urgence</li></ul>
<h3>Note de sécurité</h3>
<p>Consultez les tests Euro NCAP. Visez au minimum 4 étoiles.</p>
<h2>Fiabilité et entretien</h2>
<h3>Marques réputées</h3>
<p>Certaines marques sont réputées pour leur fiabilité :</p>
<ul><li>Toyota</li><li>Honda</li><li>Mazda</li><li>Volkswagen</li></ul>
<h3>Kilométrage</h3>
<p>Pour un véhicule d'occasion :</p>
<ul><li>Privilégiez moins de 100 000 km</li><li>Vérifiez le carnet d'entretien</li><li>Faites une contre-expertise</li></ul>
<h2>Neuf ou occasion ?</h2>
<h3>Avantages du neuf</h3>
<ul><li>Garantie constructeur</li><li>Dernières technologies</li><li>Personnalisation possible</li></ul>
<h3>Avantages de l'occasion</h3>
<ul><li>Prix plus bas</li><li>Moins de décote</li><li>Plus de choix</li></ul>
<h2>Conclusion</h2>
<p>Prenez votre temps pour choisir. Essayez plusieurs modèles, comparez les offres et n'hésitez pas à demander conseil. Votre première voiture doit vous apporter sécurité et plaisir de conduire.</p>`,
    featured_image: null,
    author_name: 'Julien Moreau',
    category: 'Conseils',
    tags: ['première voiture', 'achat', 'choix', 'critères'],
    published_at: '2026-06-06',
    views_count: 0
  },
  {
    id: '8',
    title: 'Code de la Route : Les Règles à Connaître en 2026',
    slug: 'code-route-nouvelles-regles-2026',
    excerpt: "Le code de la route évolue régulièrement. Découvrez les règles en vigueur à connaître en 2026 et leurs implications pour les conducteurs.",
    content: `<p>Le <a href="/blog/5-astuces-reussir-code-route-premier-coup">code de la route</a> est mis à jour régulièrement. Voici les principales règles et évolutions à connaître en 2026.</p>
<h2>Nouvelles limitations de vitesse</h2>
<h3>En agglomération</h3>
<p>Certaines villes ont abaissé la vitesse à 30 km/h sur l'ensemble de leur territoire. Vérifiez la signalisation locale.</p>
<h3>Zones à faibles émissions</h3>
<p>De nouvelles zones restreignent l'accès aux véhicules polluants. Informez-vous sur les vignettes Crit'Air requises.</p>
<h2>Sécurité routière renforcée</h2>
<h3>Alcoolémie</h3>
<p>Les sanctions pour conduite sous l'emprise de l'alcool sont durcies :</p>
<ul><li>Suspension de permis plus longue</li><li>Amendes majorées</li><li>Stage obligatoire systématique</li></ul>
<h3>Téléphone au volant</h3>
<p>L'utilisation du téléphone tenu en main est plus sévèrement sanctionnée. Seuls les systèmes mains-libres sont autorisés.</p>
<h2>Équipements obligatoires</h2>
<h3>Nouveaux équipements</h3>
<p>Certains véhicules doivent désormais être équipés de :</p>
<ul><li>Alcooltest obligatoire (certaines catégories)</li><li>Gilets de haute visibilité</li><li>Triangle de signalisation</li></ul>
<h3>Véhicules électriques</h3>
<p>Des règles spécifiques s'appliquent aux bornes de recharge et au stationnement des véhicules électriques.</p>
<h2>Partage de la route</h2>
<h3>Pistes cyclables</h3>
<p>Les règles de partage de la route avec les cyclistes sont précisées :</p>
<ul><li>Distance de dépassement minimale</li><li>Priorité aux cyclables dans certaines situations</li><li>Sanctions renforcées en cas d'infraction</li></ul>
<h3>Trottinettes électriques</h3>
<p>Une réglementation spécifique encadre désormais l'utilisation des trottinettes électriques sur la voie publique.</p>
<h2>Permis de conduire</h2>
<h3>Nouvelles catégories</h3>
<p>Des catégories de permis sont créées ou modifiées pour s'adapter aux nouveaux types de véhicules.</p>
<h3>Formation continue</h3>
<p>Certaines catégories de conducteurs doivent suivre une formation continue pour maintenir leurs droits.</p>
<h2>Conclusion</h2>
<p>Restez informé des évolutions du code de la route. Consultez régulièrement les <a href="https://www.securite-routiere.gouv.fr" target="_blank" rel="noopener noreferrer">sources officielles de la Sécurité routière</a> et adaptez votre conduite en conséquence.</p>`,
    featured_image: null,
    author_name: 'Julien Moreau',
    category: 'Actualités',
    tags: ['code de la route', 'nouvelles règles', '2026', 'sécurité'],
    published_at: '2026-06-05',
    views_count: 0
  },
  {
    id: '9',
    title: 'Assurance Auto : Les Différents Types de Contrats Expliqués',
    slug: 'assurance-auto-types-contrats-expliques',
    excerpt: "L'assurance auto est obligatoire mais il existe plusieurs types de contrats. Découvrez les différences pour choisir celui qui vous convient.",
    content: `<p>L'assurance automobile est obligatoire en France. Voici les différents types de contrats pour vous aider à choisir.</p>
<h2>L'assurance au tiers : le minimum légal</h2>
<h3>Ce que couvre</h3>
<ul><li>Responsabilité civile (dégâts causés aux autres)</li><li>Dommages corporels aux tiers</li><li>Dommages matériels aux tiers</li></ul>
<h3>Ce que ne couvre PAS</h3>
<ul><li>Dégâts sur votre véhicule</li><li>Vol</li><li>Incendie</li><li>Bris de glace</li></ul>
<h3>Pour qui ?</h3>
<ul><li>Conducteurs avec véhicule ancien</li><li>Véhicules de faible valeur</li><li>Budget limité</li></ul>
<h2>L'assurance au tiers étendu</h2>
<h3>Ce que couvre</h3>
<ul><li>Tout ce que l'assurance au tiers couvre</li><li>Vol</li><li>Incendie</li><li>Bris de glace</li></ul>
<h3>Avantages</h3>
<ul><li>Protection supplémentaire</li><li>Coût modéré</li><li>Bon compromis</li></ul>
<h3>Pour qui ?</h3>
<ul><li>Véhicules de valeur moyenne</li><li>Conducteurs prudents</li><li>Zones à risque modéré</li></ul>
<h2>L'assurance tous risques</h2>
<h3>Ce que couvre</h3>
<ul><li>Tous les dommages à votre véhicule</li><li>Responsabilité civile</li><li>Vol, incendie, bris de glace</li><li>Dommages même si vous êtes responsable</li></ul>
<h3>Avantages</h3>
<ul><li>Protection maximale</li><li>Tranquillité d'esprit</li><li>Indemnisation rapide</li></ul>
<h3>Pour qui ?</h3>
<ul><li>Véhicules neufs ou récents</li><li><a href="/blog/financement-cpf-compte-permis">Financement</a> à crédit</li><li>Zones à risque élevé</li></ul>
<h2>Facteurs influençant le prix</h2>
<h3>Le véhicule</h3>
<ul><li>Marque et modèle</li><li>Valeur du véhicule</li><li>Puissance</li><li>Âge</li></ul>
<h3>Le conducteur</h3>
<ul><li>Âge et expérience</li><li>Historique d'assurance</li><li>Bonus-malus</li><li>Kilométrage annuel</li></ul>
<h3>La localisation</h3>
<ul><li>Zone géographique</li><li>Lieu de stationnement</li><li>Risque de vol</li></ul>
<h2>Conseils pour choisir</h2>
<h3>Comparez les offres</h3>
<p>Utilisez les comparateurs en ligne et demandez plusieurs devis.</p>
<h3>Vérifiez les garanties</h3>
<p>Lisez attentivement les conditions générales et les exclusions.</p>
<h3>Adaptez à vos besoins</h3>
<p>Choisissez selon la valeur de votre véhicule et votre utilisation.</p>
<h2>Conclusion</h2>
<p>L'assurance auto est un investissement important. Prenez le temps de comparer et de choisir le contrat adapté à votre situation.</p>`,
    featured_image: '/blog4.jpeg',
    author_name: 'Julien Moreau',
    category: 'Assurance',
    tags: ['assurance', 'contrats', 'tiers', 'tous risques'],
    published_at: '2026-06-03',
    views_count: 0
  },
  {
    id: '10',
    title: 'Conduite sur Autoroute : Les Règles de Base à Maîtriser',
    slug: 'conduite-autoroute-regles-base-maitriser',
    excerpt: "L'autoroute demande des compétences spécifiques. Découvrez les règles de base pour conduire en toute sécurité sur les voies rapides.",
    content: `<p>La conduite sur autoroute présente des particularités qu'il faut maîtriser. Voici les règles essentielles.</p>
<h2>Avant de s'engager</h2>
<h3>Vérifications</h3>
<ul><li>Niveau d'huile et de carburant</li><li>Pression des pneus</li><li>État des essuie-glaces</li><li>Fonctionnement des feux</li></ul>
<h3>Documentation</h3>
<ul><li>Carte grise</li><li>Permis de conduire</li><li><a href="/blog/assurance-auto-types-contrats-expliques">Assurance</a> à jour</li></ul>
<h2>Règles de circulation</h2>
<h3>Voies de circulation</h3>
<ul><li>Voie de droite : circulation normale</li><li>Voies du centre : dépassement</li><li>Voie de gauche : dépassement uniquement</li></ul>
<h3>Vitesse</h3>
<ul><li>Respectez les limitations (130 km/h, 110 km/h par temps de pluie)</li><li>Adaptez aux conditions météo</li><li>Respectez les distances de sécurité</li></ul>
<h3>Dépassement</h3>
<ul><li>Signalez avec le clignotant</li><li>Vérifiez vos rétroviseurs</li><li>Accélérez pour dépasser</li><li>Rabattez-vous après le dépassement</li></ul>
<h2>Entrée et sortie d'autoroute</h2>
<h3>À l'entrée</h3>
<ul><li>Accélérez sur la bretelle d'accès</li><li>Insérez-vous en fluide</li><li>Signalez votre intention</li></ul>
<h3>À la sortie</h3>
<ul><li>Repérez la sortie à l'avance</li><li>Positionnez-vous à droite</li><li>Ralentissez progressivement</li></ul>
<h2>Distance de sécurité</h2>
<h3>La règle des 2 secondes</h3>
<ul><li>Choisissez un repère fixe</li><li>Comptez 2 secondes après le passage du véhicule devant</li><li>Vous devez atteindre le repère après ces 2 secondes</li></ul>
<h3>Par temps de pluie</h3>
<p>Doublez cette distance (4 secondes minimum).</p>
<h2>En cas de panne ou d'accident</h2>
<h3>Panne</h3>
<ul><li>Allumez les feux de détresse</li><li>Garez-vous sur la bande d'arrêt d'urgence</li><li>Mettez votre gilet haute visibilité</li><li>Appelez le secours depuis derrière la glissière</li></ul>
<h3>Accident</h3>
<ul><li>Sécurisez les lieux</li><li>Appelez les secours (112)</li><li>Ne bougez pas les blessés sauf danger imminent</li><li>Remplissez le constat amiable</li></ul>
<h2>Comportement à éviter</h2>
<h3>La conduite agressive</h3>
<ul><li>Ne taillez pas</li><li>Ne freinez pas brusquement sans raison</li><li>Respectez la priorité à droite</li></ul>
<h3>La distraction</h3>
<ul><li>Pas d'utilisation du téléphone</li><li>Concentrez-vous sur la route</li><li>Anticipez les situations</li></ul>
<h2>Conclusion</h2>
<p>La conduite sur autoroute demande vigilance et anticipation. En respectant ces règles, vous contribuez à la sécurité de tous.</p>`,
    featured_image: '/blog5.jpeg',
    author_name: 'Julien Moreau',
    category: 'Conduite',
    tags: ['autoroute', 'sécurité', 'règles', 'circulation'],
    published_at: '2026-06-02',
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
