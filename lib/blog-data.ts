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
    id: '27',
    title: 'Où passer le code de la route ? Centres, prix et délais',
    slug: 'ou-passer-code-route-centres-prix-delais',
    excerpt: "30 € dans n'importe quel centre agréé, une place souvent disponible sous 48 heures : voici comment et où passer l'épreuve du code, et ce qui change d'un opérateur à l'autre.",
    content: `<p>Depuis la réforme de 2016, l'examen du code de la route n'est plus organisé par l'État mais par des opérateurs privés agréés. Conséquence directe pour vous&nbsp;: le tarif est fixe, les délais se comptent en jours, et vous choisissez librement votre centre. Voici ce qu'il faut savoir avant de réserver.</p>
<h2>Combien ça coûte&nbsp;: 30 €, partout</h2>
<p>Le tarif de l'épreuve théorique est <strong>réglementé à 30 €</strong>. Ce prix est identique quel que soit l'opérateur&nbsp;: aucun centre ne peut facturer davantage pour l'examen lui-même. Si on vous annonce un montant supérieur, c'est qu'il inclut autre chose — un pack de révision, par exemple.</p>
<p>En cas d'échec, chaque nouvelle présentation coûte à nouveau 30 €. C'est la raison pour laquelle il vaut mieux se présenter réellement prêt&nbsp;: nos <a href="/blog/5-astuces-reussir-code-route-premier-coup">5 astuces pour réussir du premier coup</a> détaillent la méthode.</p>
<h2>Qui organise l'examen&nbsp;?</h2>
<p>Plusieurs opérateurs sont agréés sur le territoire, parmi lesquels&nbsp;:</p>
<ul><li><strong>La Poste</strong> — le réseau le plus dense, avec des sessions dans de nombreux bureaux.</li><li><strong>SGS</strong>, sous la marque Objectif Code.</li><li><strong>Dekra</strong>, <strong>Code'nGo</strong> et <strong>Bureau Veritas</strong>, selon les départements.</li></ul>
<p>Le contenu de l'épreuve est rigoureusement identique chez tous&nbsp;: même banque de questions officielle, même barème. Ce qui change, ce sont les créneaux disponibles, la localisation des salles et l'ergonomie de la réservation. Choisissez donc le centre le plus pratique pour vous, pas celui réputé « plus facile » — cette réputation n'a aucun fondement.</p>
<h2>Le déroulé de l'épreuve</h2>
<ul><li><strong>40 questions</strong> à choix multiple, sur tablette individuelle.</li><li><strong>35 bonnes réponses minimum</strong> pour être reçu — vous n'avez donc droit qu'à 5 erreurs.</li><li>Environ <strong>30 minutes</strong>, avec un temps de réflexion limité par question.</li><li>Une pièce d'identité en cours de validité et votre convocation sont exigées à l'entrée. Sans pièce d'identité valide, l'accès est refusé et la somme n'est pas remboursée.</li></ul>
<h2>Comment réserver</h2>
<p>La réservation se fait directement sur le site de l'opérateur choisi, avec votre <strong>numéro NEPH</strong>. C'est le seul prérequis&nbsp;: sans NEPH, aucune inscription n'est possible. Si vous passez par nous, ce numéro vous est communiqué dès l'ouverture de votre dossier — voir notre <a href="/blog/papiers-inscription-permis-conduire-liste">liste des pièces à fournir</a>.</p>
<p>Les délais sont l'un des grands acquis de la réforme&nbsp;: là où il fallait patienter des mois avant 2016, une place se trouve aujourd'hui souvent <strong>sous 48 heures</strong> en Île-de-France, grâce à la densité de centres du secteur.</p>
<h2>Les résultats</h2>
<p>Le résultat n'est pas communiqué immédiatement en salle. Il vous parvient généralement <strong>sous 48 heures</strong>, par courriel ou depuis votre espace personnel sur le site de la Sécurité routière, selon l'opérateur.</p>
<h2>Une fois le code obtenu</h2>
<p>Votre code reste valable <strong>5 ans</strong> et couvre jusqu'à <strong>5 présentations</strong> à l'épreuve pratique. Vous n'avez donc rien à repasser tant que vous restez dans ces limites, y compris après un échec à la conduite — un point que beaucoup de candidats ignorent, comme nous l'expliquons dans notre article sur <a href="/blog/echec-permis-que-faire-apres">l'échec au permis</a>.</p>
<h2>Et pour la moto</h2>
<p>Attention&nbsp;: le code voiture ne vaut pas pour les deux-roues. Depuis mars 2020, une épreuve théorique moto distincte (l'ETM) est exigée pour les permis A1 et A2. Le détail figure sur notre page <a href="/permis-moto">permis moto à Nanterre</a>.</p>
<h2>Réviser avant de réserver</h2>
<p>Ne réservez pas votre place tant que vous n'obtenez pas régulièrement 37 ou 38 sur 40 en test blanc. Notre <a href="/prestations-a-l-unite">Pack Web</a> donne accès aux séries et aux cours en ligne, en complément des séances en salle — et nos formules <a href="/tarifs">code + conduite</a> intègrent la préparation complète.</p>`,
    featured_image: '/code.png',
    author_name: 'Julien Moreau',
    category: 'Code',
    tags: ['code de la route', 'examen code', 'prix code', 'La Poste', 'Objectif Code'],
    published_at: '2026-08-18',
    views_count: 0
  },
  {
    id: '26',
    title: 'Notation du permis : les 31 points et les fautes éliminatoires',
    slug: 'notation-permis-31-points-fautes-eliminatoires',
    excerpt: "20 points sur 31 pour être reçu, mais une seule faute éliminatoire suffit à tout arrêter. Voici comment l'inspecteur vous note réellement pendant les 32 minutes de l'épreuve.",
    content: `<p>Beaucoup de candidats abordent l'épreuve pratique sans savoir précisément sur quoi ils sont évalués. C'est dommage&nbsp;: la grille de notation est publique, et la comprendre change la façon de conduire le jour J. Décryptage.</p>
<h2>Le principe&nbsp;: 20 points sur 31</h2>
<p>L'inspecteur remplit une grille d'évaluation comportant plusieurs compétences, chacune notée de <strong>0 à 3 points</strong>. Le total maximum est de <strong>31 points</strong>, et il faut en obtenir <strong>20 au minimum</strong> pour être reçu.</p>
<p>Autrement dit&nbsp;: vous pouvez perdre 11 points et décrocher tout de même votre permis. L'examen ne cherche pas la perfection, mais un conducteur autonome et sûr.</p>
<h2>Ce qui est évalué</h2>
<p>Les compétences notées se regroupent en grandes familles&nbsp;:</p>
<ul><li><strong>Connaître et maîtriser son véhicule</strong> — installation au poste de conduite, utilisation des commandes, vérifications.</li><li><strong>Appréhender la route et circuler</strong> — allure adaptée, positionnement sur la chaussée, franchissement des intersections, dépassements.</li><li><strong>Partager la route avec les autres usagers</strong> — piétons, cyclistes, deux-roues, transports en commun.</li><li><strong>Automatiser les contrôles</strong> — rétroviseurs, angles morts, clignotants.</li><li><strong>Faire preuve d'autonomie</strong> — savoir décider seul, y compris pendant la phase de conduite libre.</li><li><strong>Courtoisie au volant</strong> — un point souvent sous-estimé, qui se joue sur des détails.</li></ul>
<p>Un <strong>point bonus</strong> peut être accordé pour une conduite économique et respectueuse de l'environnement&nbsp;: anticipation, souplesse, utilisation raisonnée des rapports.</p>
<h2>Les fautes éliminatoires</h2>
<p>C'est l'autre versant de la notation, et le plus impitoyable&nbsp;: <strong>une seule faute éliminatoire entraîne l'échec</strong>, quel que soit votre total de points. Vous pouvez avoir 28 points et échouer.</p>
<p>Entrent notamment dans cette catégorie&nbsp;:</p>
<ul><li>toute <strong>intervention de l'examinateur</strong> sur les commandes — pédale ou volant&nbsp;;</li><li>le <strong>non-respect d'un feu rouge, d'un stop ou d'une priorité</strong>&nbsp;;</li><li>le <strong>franchissement d'une ligne continue</strong>&nbsp;;</li><li>la <strong>circulation à contresens</strong>&nbsp;;</li><li>toute manœuvre <strong>mettant en danger</strong> un autre usager.</li></ul>
<p>À l'inverse, caler, hésiter ou rater un créneau ne sont pas éliminatoires&nbsp;: ce sont des points en moins, rien de plus. C'est une source d'angoisse inutile pour beaucoup de candidats.</p>
<h2>Les erreurs qui coûtent le plus de points</h2>
<p>D'expérience, ce ne sont presque jamais des fautes spectaculaires&nbsp;:</p>
<ul><li><strong>Une allure trop timide</strong> — rouler à 40 là où la limite est à 50 est sanctionné au même titre qu'un excès. Une conduite trop lente gêne la circulation et traduit un manque d'assurance.</li><li><strong>Des contrôles non visibles</strong> — l'inspecteur doit voir votre regard bouger. Un contrôle fait « du coin de l'œil » ne compte pas.</li><li><strong>Le manque d'autonomie</strong> — attendre une instruction au lieu de décider soi-même, surtout pendant la conduite libre.</li></ul>
<p>Notre article sur les <a href="/blog/erreurs-eviter-jour-examen-conduite">erreurs à éviter le jour de l'examen</a> détaille chacun de ces points.</p>
<h2>Le déroulé et le résultat</h2>
<p>L'épreuve dure environ <strong>32 minutes</strong> et comprend une phase de conduite autonome, une manœuvre, et des questions de vérification intérieure ou extérieure ainsi qu'une question de premiers secours.</p>
<p>Le résultat n'est jamais communiqué sur place. Il est consultable <strong>sous 48 heures</strong> sur le site de la Sécurité routière, accompagné du bilan de compétences détaillé — le document à lire absolument, comme nous l'expliquons dans notre guide sur <a href="/blog/echec-permis-que-faire-apres">l'échec au permis</a>.</p>
<h2>Se préparer sur les bons parcours</h2>
<p>Connaître la grille ne suffit pas&nbsp;: encore faut-il s'entraîner là où l'on sera évalué. Nos leçons se déroulent sur les axes de Nanterre et des Hauts-de-Seine empruntés par les parcours d'examen du secteur — le détail est dans notre article sur <a href="/blog/examen-permis-hauts-de-seine-deroulement">l'examen du permis dans les Hauts-de-Seine</a>.</p>`,
    featured_image: '/permis.png',
    author_name: 'Julien Moreau',
    category: 'Permis',
    tags: ['notation permis', 'faute éliminatoire', 'examen pratique', '31 points', 'grille évaluation'],
    published_at: '2026-08-17',
    views_count: 0
  },
  {
    id: '25',
    title: 'Conduite supervisée : le guide complet',
    slug: 'conduite-supervisee-guide-complet',
    excerpt: "Accessible dès 18 ans, sans durée ni kilométrage imposés, et particulièrement efficace après un échec à l'examen : la conduite supervisée reste la formule la plus méconnue du permis.",
    content: `<p>Entre la formation classique et la conduite accompagnée, il existe une troisième voie que peu de candidats connaissent&nbsp;: la <strong>conduite supervisée</strong>. Elle permet de conduire avec un proche, sans les contraintes de l'AAC, et se révèle redoutablement efficace dans deux situations précises.</p>
<h2>De quoi s'agit-il&nbsp;?</h2>
<p>La conduite supervisée autorise un candidat majeur à conduire accompagné d'un titulaire du permis B, en dehors des leçons avec un moniteur. Le principe est celui de la conduite accompagnée — accumuler de l'expérience réelle — mais le cadre est nettement plus souple.</p>
<h2>Les deux portes d'entrée</h2>
<p><strong>1. Après la formation initiale.</strong> Une fois le code obtenu et les 20 heures de conduite réglementaires validées, si vous ne vous sentez pas prêt ou si les délais d'examen s'allongent, vous pouvez passer en conduite supervisée plutôt que d'attendre sans conduire.</p>
<p><strong>2. Après un échec à l'épreuve pratique.</strong> C'est l'usage le plus pertinent, et le plus sous-employé. Plutôt que de racheter un forfait complet, vous accumulez des kilomètres à coût quasi nul en attendant votre nouvelle présentation, en complément de quelques heures ciblées avec un moniteur. Notre article sur <a href="/blog/echec-permis-que-faire-apres">l'échec au permis</a> replace cette option dans une stratégie de reprise complète.</p>
<h2>Ce qui la distingue de la conduite accompagnée</h2>
<p>La différence tient en quatre points&nbsp;:</p>
<ul><li><strong>Âge</strong> — 15 ans pour l'AAC, <strong>18 ans</strong> pour la supervisée.</li><li><strong>Durée minimale</strong> — un an pour l'AAC, <strong>aucune</strong> pour la supervisée.</li><li><strong>Kilométrage</strong> — 3 000 km pour l'AAC, <strong>aucun minimum</strong> pour la supervisée.</li><li><strong>Période probatoire</strong> — réduite à 2 ans avec l'AAC, mais <strong>maintenue à 3 ans</strong> avec la supervisée.</li></ul>
<p>C'est le point à retenir&nbsp;: la conduite supervisée <strong>ne réduit pas la période probatoire</strong>. Si vous avez le choix et l'âge pour l'AAC, celle-ci reste plus avantageuse — voir notre <a href="/blog/conduite-accompagnee-aac-guide-complet">guide de la conduite accompagnée</a>. La supervisée, elle, répond à un besoin différent&nbsp;: gagner de l'expérience vite, sans contrainte de calendrier.</p>
<h2>Les conditions à respecter</h2>
<ul><li>Avoir <strong>obtenu le code</strong> et validé la formation initiale en auto-école.</li><li>Participer à un <strong>rendez-vous préalable</strong> avec l'enseignant, l'élève et le ou les accompagnateurs.</li><li>L'accompagnateur doit détenir le <strong>permis B depuis au moins 5 ans sans interruption</strong>.</li><li>Obtenir l'<strong>accord de l'assureur</strong> du véhicule — démarche gratuite chez la quasi-totalité des compagnies.</li><li>Apposer le <strong>disque « conduite supervisée »</strong> à l'arrière du véhicule et respecter les vitesses réduites applicables.</li></ul>
<h2>Bien l'utiliser</h2>
<p>La conduite supervisée n'a d'intérêt que si elle vous confronte à ce que vous maîtrisez mal. Reproduire chaque semaine le même trajet domicile-travail n'apporte presque rien. Ciblez au contraire&nbsp;:</p>
<ul><li>les <strong>situations pointées dans votre bilan de compétences</strong> si vous venez d'échouer&nbsp;;</li><li>les <strong>giratoires et insertions sur voie rapide</strong>, qui concentrent les points perdus&nbsp;;</li><li>la <strong>conduite de nuit et sous la pluie</strong> — voir nos <a href="/blog/conduite-nuit-regles-precautions">règles de conduite de nuit</a>&nbsp;;</li><li>les <strong>manœuvres de stationnement</strong>, rarement travaillées en volume suffisant pendant les leçons.</li></ul>
<h2>Et le rôle de l'accompagnateur&nbsp;?</h2>
<p>Le même que pour l'AAC&nbsp;: observer, laisser conduire, et débriefer à l'arrêt plutôt que de corriger en continu. Un accompagnateur qui commente chaque geste empêche le conducteur d'installer ses propres automatismes.</p>
<h2>Se lancer à Nanterre</h2>
<p>Nous accompagnons régulièrement des élèves en conduite supervisée, notamment après un premier échec. La démarche démarre par une évaluation et un rendez-vous préalable&nbsp;: <a href="/contact">contactez-nous</a> ou consultez nos <a href="/tarifs">formules</a>.</p>`,
    featured_image: '/blog2.jpeg',
    author_name: 'Julien Moreau',
    category: 'Permis',
    tags: ['conduite supervisée', 'après échec permis', 'permis B', 'accompagnateur'],
    published_at: '2026-08-16',
    views_count: 0
  },
  {
    id: '24',
    title: 'Financer son permis en 2026 : toutes les aides possibles',
    slug: 'aides-financement-permis-conduire-2026',
    excerpt: "CPF, permis à 1 € par jour, France Travail, aides locales : le tour complet des dispositifs qui existent encore en 2026, et de ceux qui ont changé.",
    content: `<p>Le permis représente un budget conséquent, et les dispositifs d'aide sont nombreux — mais ils changent vite, et beaucoup d'informations qui circulent sont périmées. Voici l'état des lieux, avec les évolutions récentes.</p>
<h2>Le CPF&nbsp;: des règles nettement plus strictes en 2026</h2>
<p>C'est le changement majeur de l'année. La mobilisation du CPF pour les permis du groupe léger est désormais réservée aux <strong>demandeurs d'emploi inscrits à France Travail</strong> et aux <strong>salariés bénéficiant d'un cofinancement par un tiers</strong> (employeur, Opco, région). Un salarié ne peut plus, seul, financer son permis avec son CPF.</p>
<p>Le montant mobilisable est par ailleurs <strong>plafonné à 900 €</strong>, et une participation forfaitaire reste à votre charge selon votre situation. Le détail complet, avec les pièces à réunir, est dans notre article dédié&nbsp;: <a href="/blog/financement-cpf-compte-permis">CPF permis 2026</a>.</p>
<h2>Le permis à 1 € par jour</h2>
<p>Souvent mal compris&nbsp;: ce n'est pas une subvention mais un <strong>prêt à taux zéro</strong>. L'État prend en charge les intérêts, vous remboursez le capital à raison de 30 € par mois.</p>
<ul><li>Réservé aux <strong>15-25 ans</strong>.</li><li>L'auto-école doit être <strong>conventionnée</strong> pour le dispositif.</li><li>Le prêt est accordé par un établissement bancaire partenaire, sous conditions de solvabilité — souvent avec la caution d'un parent.</li></ul>
<p>L'avantage réel est la trésorerie&nbsp;: vous étalez le coût sans payer d'intérêts. Mais vous remboursez bien l'intégralité de la formation.</p>
<h2>Les aides de France Travail</h2>
<p>Si vous êtes inscrit et que l'absence de permis constitue un frein documenté à l'embauche, une aide peut être mobilisée. Elle n'est pas automatique&nbsp;: elle se négocie avec votre conseiller, dans le cadre d'un projet professionnel précis. Le réflexe à avoir&nbsp;: en parler <strong>avant</strong> de vous inscrire, pas après.</p>
<h2>Les aides locales, les plus oubliées</h2>
<p>Ce sont souvent les plus accessibles, et personne ne pense à les demander&nbsp;:</p>
<ul><li>votre <strong>commune</strong> — certaines villes proposent une aide en contrepartie de quelques heures de bénévolat&nbsp;;</li><li>votre <strong>département</strong> ou votre <strong>région</strong>&nbsp;;</li><li>la <strong>mission locale</strong>, si vous avez entre 16 et 25 ans&nbsp;;</li><li>votre <strong>caisse d'allocations familiales</strong> ou votre comité d'entreprise&nbsp;;</li><li>certaines <strong>mutuelles et assurances</strong> proposent un coup de pouce à leurs adhérents.</li></ul>
<p>Un appel à votre mairie et à la mission locale de Nanterre coûte quelques minutes et peut représenter plusieurs centaines d'euros.</p>
<h2>Apprentis et alternants</h2>
<p>Le dispositif d'aide destiné aux apprentis a <strong>évolué en 2026</strong>. Les conditions changent régulièrement&nbsp;: renseignez-vous directement auprès de votre CFA ou de votre région plutôt que de vous fier à un article — y compris celui-ci — sur les montants en vigueur.</p>
<h2>Ce qui reste le plus efficace&nbsp;: ne pas dépasser le forfait</h2>
<p>Aucune aide ne compense un forfait mal choisi. Un forfait d'appel très bas assorti d'heures supplémentaires chères revient plus cher qu'un forfait complet à prix affiché. C'est le premier des <a href="/blog/comment-choisir-auto-ecole-criteres-essentiels">6 critères pour choisir son auto-école</a>, et le détail du calcul est dans notre article sur <a href="/blog/prix-permis-conduire-nanterre">le prix du permis à Nanterre</a>.</p>
<h2>Nos modalités</h2>
<p>Nos prix sont affichés sans devis surprise, et payables <strong>en 2 fois sans frais</strong>. Le forfait 20 heures en boîte manuelle démarre à 899 €, la boîte automatique 13 heures à 799 € — grille complète sur notre <a href="/tarifs">page tarifs</a>. Pour étudier votre situation et les dispositifs auxquels vous pouvez prétendre, <a href="/contact">appelez-nous</a>&nbsp;: c'est souvent réglé en quelques minutes.</p>`,
    featured_image: '/cpf.svg',
    author_name: 'Julien Moreau',
    category: 'Conseils',
    tags: ['financement permis', 'CPF', 'permis à 1 euro', 'France Travail', 'aides'],
    published_at: '2026-08-15',
    views_count: 0
  },
  {
    id: '23',
    title: 'Boîte automatique ou boîte manuelle : quel permis choisir en 2026 ?',
    slug: 'permis-boite-automatique-ou-manuelle-choisir',
    excerpt: "13 heures au lieu de 20, un forfait moins cher, mais une mention restrictive sur le permis : le match entre boîte auto et boîte manuelle a changé. Voici comment trancher selon votre situation.",
    content: `<p>C'est la question qui revient à chaque inscription. Longtemps, le permis boîte automatique était vu comme un choix par défaut, réservé à ceux qui n'arrivaient pas à gérer l'embrayage. Ce n'est plus du tout le cas : entre l'électrification du parc automobile et l'assouplissement des règles de passerelle, le calcul a changé. Faisons le point.</p>
<h2>La différence de formation : 13 heures contre 20</h2>
<p>C'est l'écart le plus concret. Le permis B classique impose un minimum légal de <strong>20 heures</strong> de conduite. Le permis boîte automatique (BEA) n'en exige que <strong>13</strong>. Sept heures d'écart, ce n'est pas rien : c'est un délai de formation plus court, et un budget réduit.</p>
<p>La raison est simple : en supprimant l'embrayage et le passage des rapports, on retire une part importante de la charge mentale du débutant. L'élève se concentre plus tôt sur ce qui est réellement noté à l'examen — le regard, l'anticipation, le partage de la route.</p>
<h2>La différence de prix</h2>
<p>Chez nous, à Nanterre, l'écart se lit directement sur la grille :</p>
<ul><li><strong>Permis BEA 13h : 799 €</strong></li><li><strong>Permis B 20h (manuelle) : 899 €</strong></li></ul>
<p>Mais l'écart réel est souvent plus large que ces 100 €, car les élèves en boîte manuelle dépassent plus fréquemment le forfait initial. Le détail complet est sur notre <a href="/tarifs">page tarifs</a>, et notre article sur <a href="/blog/prix-permis-conduire-nanterre">le prix du permis à Nanterre</a> explique comment lire une grille tarifaire.</p>
<h2>Le seul vrai inconvénient : la mention B78</h2>
<p>Un permis obtenu en boîte automatique porte le <strong>code restrictif 78</strong> : vous ne pouvez conduire que des véhicules à transmission automatique. C'est le point qui fait hésiter, et il mérite d'être relativisé.</p>
<h2>La passerelle de 7 heures : ce qui a changé</h2>
<p>Si vous souhaitez lever cette restriction, il existe une <strong>formation passerelle de 7 heures</strong> en auto-école, sur véhicule à boîte manuelle. À l'issue, une attestation permet de faire retirer la mention 78 — <strong>sans examen théorique ni épreuve pratique</strong>.</p>
<p>Le changement majeur : <strong>depuis mars 2024, le délai d'attente de trois mois a été supprimé</strong>. Vous pouvez donc engager la passerelle sans condition d'ancienneté. C'est ce qui rend aujourd'hui le parcours « BEA puis passerelle » beaucoup plus attractif qu'auparavant.</p>
<h2>Alors, lequel choisir ?</h2>
<p><strong>La boîte automatique est probablement le bon choix si :</strong></p>
<ul><li>votre usage sera surtout urbain ou périurbain — en Île-de-France, l'embrayage sert essentiellement dans les embouteillages ;</li><li>vous visez un véhicule électrique ou hybride, qui sont tous à transmission automatique ;</li><li>vous voulez obtenir le permis rapidement, pour un stage, une alternance ou un emploi ;</li><li>la coordination embrayage/vitesses vous met en difficulté et vous fait consommer des heures.</li></ul>
<p><strong>La boîte manuelle reste préférable si :</strong></p>
<ul><li>vous devrez conduire un véhicule professionnel ou utilitaire à boîte manuelle ;</li><li>vous prévoyez d'acheter d'occasion sur un budget serré — l'offre en manuelle y est encore plus large ;</li><li>vous conduirez à l'étranger des véhicules de location d'entrée de gamme ;</li><li>vous voulez simplement ne jamais avoir à y repenser.</li></ul>
<h2>Un point souvent oublié : le sens du marché</h2>
<p>La part des véhicules neufs à boîte automatique augmente chaque année, portée par l'électrique et l'hybride. Un jeune conducteur qui passera son permis aujourd'hui conduira, statistiquement, de plus en plus de véhicules automatiques au cours de sa vie. La restriction 78 pèse donc moins lourd qu'il y a dix ans.</p>
<h2>Et à l'examen ?</h2>
<p>L'épreuve est la même dans les deux cas : environ 32 minutes, notation sur 31 points, 20 points minimum. Aucune indulgence ni sévérité particulière n'est appliquée aux candidats en boîte automatique. Le déroulé complet est détaillé dans notre article sur <a href="/blog/examen-permis-hauts-de-seine-deroulement">l'examen du permis dans les Hauts-de-Seine</a>.</p>
<h2>Notre conseil</h2>
<p>Ne tranchez pas avant l'évaluation de départ. Une heure suffit pour voir comment vous réagissez à la coordination des commandes — et pour estimer le nombre d'heures réaliste dans chaque configuration. C'est cette estimation, pas le prix affiché, qui détermine le coût final. <a href="/contact">Appelez-nous</a> ou <a href="/s-inscrire">inscrivez-vous en ligne</a> pour la programmer.</p>`,
    featured_image: '/blog1.jpeg',
    author_name: 'Julien Moreau',
    category: 'Permis',
    tags: ['boîte automatique', 'permis BEA', 'passerelle 7h', 'permis B', 'choisir son permis'],
    published_at: '2026-08-09',
    views_count: 0
  },
  {
    id: '22',
    title: 'Conduite accompagnée (AAC) : le guide complet 2026',
    slug: 'conduite-accompagnee-aac-guide-complet',
    excerpt: "Démarrer dès 15 ans, conduire seul à 17 ans, une période probatoire réduite à 2 ans et une assurance moins chère : tout ce que parents et futurs conducteurs doivent savoir sur l'apprentissage anticipé de la conduite.",
    content: `<p>L'apprentissage anticipé de la conduite — la « conduite accompagnée » — reste la voie qui affiche les meilleurs résultats à l'examen. Elle demande en revanche de l'organisation, et implique toute la famille. Voici le parcours complet, étape par étape.</p>
<h2>À partir de quel âge ?</h2>
<p>La formation en auto-école peut démarrer <strong>dès 15 ans</strong>. Depuis la réforme entrée en vigueur en 2024, <strong>l'épreuve pratique du permis B est accessible dès 17 ans</strong> — et le permis obtenu à 17 ans permet de conduire seul immédiatement, sans attendre la majorité. C'est un changement majeur : un adolescent qui commence l'AAC à 15 ans peut être autonome au volant deux ans plus tard.</p>
<h2>Étape 1 : la formation initiale en auto-école</h2>
<p>Elle comprend :</p>
<ul><li>la préparation et l'obtention du <strong>code de la route</strong> ;</li><li>un minimum de <strong>20 heures de conduite</strong> avec un enseignant diplômé d'État ;</li><li>la validation des compétences de base par l'école, qui délivre une attestation de fin de formation initiale.</li></ul>
<p>C'est seulement à ce moment que la phase accompagnée peut commencer.</p>
<h2>Étape 2 : le rendez-vous préalable</h2>
<p>Un rendez-vous pédagogique réunit l'élève, le ou les accompagnateurs et l'enseignant. Il sert à cadrer la suite : ce qu'il faut travailler, comment intervenir, ce qu'il ne faut surtout pas faire. C'est un moment à ne pas expédier — la qualité de la phase accompagnée en dépend largement.</p>
<h2>Étape 3 : la phase de conduite accompagnée</h2>
<p>Les règles à respecter :</p>
<ul><li><strong>3 000 km minimum</strong>, parcourus sur <strong>au moins un an</strong> ;</li><li>des trajets variés : ville, campagne, voie rapide, nuit, pluie — c'est la variété qui fait la valeur de la formule ;</li><li>le disque « conduite accompagnée » apposé à l'arrière du véhicule ;</li><li>des <strong>vitesses limitées</strong> pour l'élève, inférieures aux limitations habituelles ;</li><li>un ou deux <strong>rendez-vous pédagogiques</strong> intermédiaires en auto-école pour faire le point.</li></ul>
<h2>Qui peut être accompagnateur ?</h2>
<p>L'accompagnateur — souvent un parent, mais pas obligatoirement — doit :</p>
<ul><li>être titulaire du <strong>permis B depuis au moins 5 ans sans interruption</strong> ;</li><li>obtenir l'<strong>accord de l'assureur</strong> du véhicule (démarche gratuite chez la quasi-totalité des assureurs) ;</li><li>être <strong>mentionné dans le contrat</strong> signé avec l'auto-école ;</li><li>n'avoir jamais fait l'objet d'une annulation ou d'une invalidation du permis sur la période.</li></ul>
<p>Plusieurs accompagnateurs peuvent être déclarés — c'est même recommandé : chacun a ses habitudes, et la diversité des styles profite à l'élève.</p>
<h2>Les erreurs classiques de l'accompagnateur</h2>
<ul><li><strong>Commenter en continu</strong> — le conducteur a besoin de silence pour observer.</li><li><strong>Toujours faire les mêmes trajets</strong> — 3 000 km sur le même parcours n'apprennent presque rien.</li><li><strong>Éviter les situations difficiles</strong> — les giratoires, l'insertion sur voie rapide et la conduite de nuit sont précisément ce qu'il faut travailler. Notre article sur <a href="/blog/conduite-nuit-regles-precautions">la conduite de nuit</a> peut servir de support.</li><li><strong>Corriger sur le vif plutôt qu'après</strong> — mieux vaut noter et débriefer à l'arrêt.</li></ul>
<h2>Les vrais avantages de l'AAC</h2>
<ul><li><strong>Un meilleur taux de réussite à l'examen</strong> — c'est la voie la mieux notée nationalement, grâce au volume de kilomètres accumulés.</li><li><strong>Une période probatoire réduite à 2 ans</strong> au lieu de 3 : le capital de 12 points est reconstitué plus vite.</li><li><strong>Une assurance jeune conducteur moins chère</strong> — la surprime appliquée aux conducteurs novices est généralement réduite pour les titulaires issus de l'AAC. Voir notre <a href="/blog/assurance-auto-types-contrats-expliques">guide des contrats d'assurance</a>.</li><li><strong>Un apprentissage moins stressant</strong> — l'élève arrive à l'examen avec des milliers de kilomètres derrière lui.</li></ul>
<h2>Et le coût ?</h2>
<p>L'AAC n'est pas plus chère qu'une formation classique : la formation initiale est la même, et les rendez-vous pédagogiques s'ajoutent au forfait. En revanche, elle demande un véhicule disponible et un accompagnateur motivé sur au moins un an. Nos formules et le détail des frais sont sur la <a href="/tarifs">page tarifs</a>.</p>
<h2>La conduite supervisée : la variante pour les majeurs</h2>
<p>Si vous avez 18 ans ou plus, la <strong>conduite supervisée</strong> reprend le même principe sans la contrainte de durée ni de kilométrage. Elle est particulièrement utile après un échec à l'examen, pour reprendre confiance à moindre coût.</p>
<h2>Se lancer à Nanterre</h2>
<p>Nous accompagnons chaque année de nombreuses familles de Nanterre et des Hauts-de-Seine en AAC, avec des rendez-vous pédagogiques programmés en fonction de vos disponibilités. <a href="/s-inscrire">Inscrivez-vous en ligne</a> ou <a href="/contact">contactez-nous</a> pour en discuter.</p>`,
    featured_image: '/blog2.jpeg',
    author_name: 'Julien Moreau',
    category: 'Permis',
    tags: ['conduite accompagnée', 'AAC', 'permis 17 ans', 'jeune conducteur', 'permis B'],
    published_at: '2026-08-08',
    views_count: 0
  },
  {
    id: '21',
    title: 'Échec au permis de conduire : que faire après ?',
    slug: 'echec-permis-que-faire-apres',
    excerpt: "Un échec à l'examen pratique n'est pas un verdict sur votre capacité à conduire. Voici comment lire votre bilan de compétences, dans quels délais se représenter, et comment repartir sans repayer une formation complète.",
    content: `<p>Recevoir un résultat défavorable est décourageant — surtout après des mois de préparation et un budget conséquent. Mais un échec à l'épreuve pratique est un incident de parcours banal, pas une remise en cause de votre aptitude à conduire. Voici la marche à suivre, dans l'ordre.</p>
<h2>1. Lire le bilan de compétences, vraiment</h2>
<p>C'est l'étape que la plupart des candidats sautent, et c'est la plus utile. Votre résultat s'accompagne d'une grille détaillée qui indique précisément où les points ont été perdus, compétence par compétence. Deux cas très différents s'y cachent :</p>
<ul><li><strong>Une faute éliminatoire</strong> — priorité non respectée, intervention de l'examinateur, mise en danger. Le reste de la prestation peut avoir été bon : c'est un point technique isolé à corriger.</li><li><strong>Un total insuffisant sans faute grave</strong> — les points se sont érodés partout un peu. Cela traduit généralement un manque d'aisance globale, qui se règle par du volume de conduite.</li></ul>
<p>Le plan de travail n'est pas du tout le même selon le cas. Apportez ce bilan à votre moniteur : c'est votre feuille de route.</p>
<h2>2. Comprendre ce qui s'est vraiment passé</h2>
<p>Dans une majorité d'échecs, le niveau technique n'était pas en cause. Les causes réelles les plus fréquentes :</p>
<ul><li><strong>Le stress</strong>, qui fait oublier des contrôles pourtant automatiques à l'entraînement. Nos conseils pour <a href="/blog/comment-gerer-son-stress-pour-reussir-l-examen-de-conduite">gérer votre stress le jour J</a> traitent ce point spécifiquement.</li><li><strong>Une allure trop prudente</strong> — rouler nettement en dessous de la limite est pénalisé, au même titre qu'un excès.</li><li><strong>Un manque d'autonomie</strong> — attendre l'instruction de l'examinateur au lieu de décider soi-même.</li><li><strong>Une coupure dans la formation</strong> — plusieurs semaines sans conduire avant l'examen.</li></ul>
<h2>3. Bonne nouvelle : le code reste acquis</h2>
<p>Votre code de la route reste valable <strong>5 ans</strong> et couvre jusqu'à <strong>5 présentations</strong> à l'épreuve pratique. Vous n'avez donc rien à repasser de ce côté, tant que vous restez dans ces limites. C'est une source d'inquiétude fréquente, et infondée dans la grande majorité des cas.</p>
<h2>4. Ne repayez pas une formation complète</h2>
<p>C'est l'erreur budgétaire classique. Après un échec, vous n'avez pas besoin d'un nouveau forfait de 20 heures : vous avez besoin de <strong>quelques heures ciblées</strong> sur les points identifiés dans le bilan.</p>
<p>Nous proposons pour cela des heures à l'unité — <strong>à partir de 60 € la leçon</strong>, ou <strong>600 € les 10 leçons</strong> — sans repartir sur un forfait complet. La grille est sur notre <a href="/tarifs">page tarifs</a>, et le plan d'heures se décide après une évaluation. Pour beaucoup de candidats, quatre à six heures bien orientées suffisent — travailler les giratoires, refaire des insertions sur voie rapide, ou simplement remettre de la régularité avant la nouvelle présentation.</p>
<h2>5. Se représenter : les délais</h2>
<p>Il n'existe pas de délai d'attente réglementaire imposé après un échec : vous pouvez être représenté dès qu'une place est disponible et que votre auto-école estime le niveau suffisant. En pratique, le délai dépend des places d'examen attribuées à l'établissement. C'est un point à aborder franchement avec votre école — nous indiquons toujours à nos élèves une échéance réaliste plutôt qu'une promesse vague.</p>
<h2>6. Utiliser la conduite supervisée</h2>
<p>Option peu connue et souvent excellente après un échec : la <strong>conduite supervisée</strong> permet, une fois la formation initiale validée, de conduire avec un proche titulaire du permis depuis au moins 5 ans. Vous accumulez des kilomètres et de la confiance à coût quasi nul, en complément de quelques heures avec un moniteur. Le principe est détaillé dans notre <a href="/blog/conduite-accompagnee-aac-guide-complet">guide de la conduite accompagnée</a>.</p>
<h2>7. Remettre les choses à leur place</h2>
<p>Une large part des candidats qui échouent une première fois obtiennent leur permis à la présentation suivante. L'examen évalue une prestation de trente minutes, un jour donné, dans des conditions données — pas votre valeur de futur conducteur. Le seul vrai risque, c'est l'abandon : les dossiers qui traînent des mois sont ceux qui finissent par coûter le plus cher.</p>
<h2>Reprendre avec nous à Nanterre</h2>
<p>Nous accueillons régulièrement des candidats formés ailleurs, après un ou plusieurs échecs. La démarche est toujours la même : une heure d'évaluation, la lecture du bilan de compétences, puis un plan d'heures ciblé — jamais un forfait complet vendu par réflexe. <a href="/contact">Contactez-nous</a> pour en parler, ou consultez nos <a href="/blog/erreurs-eviter-jour-examen-conduite">erreurs à éviter le jour de l'examen</a>.</p>`,
    featured_image: '/blog3.jpeg',
    author_name: 'Julien Moreau',
    category: 'Conseils',
    tags: ['échec permis', 'repasser le permis', 'examen conduite', 'heures de conduite', 'Nanterre'],
    published_at: '2026-08-07',
    views_count: 0
  },
  {
    id: '20',
    title: "Quels papiers pour s'inscrire au permis de conduire ? La liste complète",
    slug: 'papiers-inscription-permis-conduire-liste',
    excerpt: "Pièce d'identité, e-photo, ASSR, JDC, justificatif de domicile : la liste exacte des documents à réunir pour ouvrir votre dossier de permis, avec les cas particuliers qui bloquent le plus souvent.",
    content: `<p>Un dossier incomplet, c'est plusieurs semaines perdues avant même la première leçon. Pourtant, la liste des pièces n'a rien de compliqué dès lors qu'on l'a sous les yeux. La voici, avec les cas particuliers qui posent le plus de problèmes.</p>
<h2>Le point de départ : le numéro NEPH</h2>
<p>Avant toute chose, il faut un <strong>numéro NEPH</strong> — le numéro d'enregistrement préparatoire à l'examen, délivré après une demande sur le site de l'ANTS. C'est lui qui vous rattache administrativement au parcours du permis.</p>
<p>Bonne nouvelle : <strong>votre auto-école peut effectuer cette démarche pour vous</strong>, et c'est ce que nous faisons systématiquement. Vous n'avez qu'à fournir les pièces ci-dessous.</p>
<h2>Les pièces demandées à tout le monde</h2>
<ul><li><strong>Une pièce d'identité en cours de validité</strong> — carte nationale d'identité, passeport ou titre de séjour, recto et verso.</li><li><strong>Un justificatif de domicile de moins de 6 mois</strong> — facture d'électricité, de gaz, d'eau, d'internet, avis d'imposition ou quittance de loyer.</li><li><strong>Une photo d'identité numérique conforme</strong> — obtenue en cabine agréée ou chez un photographe agréé, qui vous remet un <strong>code e-photo</strong>. Une photo prise avec un téléphone n'est pas acceptée.</li><li><strong>Une signature numérisée</strong>, généralement recueillie en même temps que l'e-photo.</li></ul>
<h2>Les pièces liées à l'âge</h2>
<ul><li><strong>L'ASSR 2 ou l'ASR</strong> — l'attestation scolaire de sécurité routière de second niveau, obtenue au collège en classe de troisième. Elle est exigée pour toute personne née après le 1er janvier 1988. Si vous l'avez égarée, demandez un duplicata à votre ancien établissement scolaire ou au rectorat.</li><li><strong>L'attestation de recensement</strong> — pour les candidats de 16 à 17 ans.</li><li><strong>Le certificat de participation à la Journée Défense et Citoyenneté (JDC)</strong> — pour les candidats de 17 à 24 ans qui l'ont effectuée. Au-delà de 25 ans, aucune de ces deux pièces n'est demandée.</li></ul>
<h2>Les cas particuliers qui bloquent</h2>
<p><strong>Vous êtes hébergé chez un tiers (parents, ami, famille) :</strong> il faut alors trois documents — une attestation d'hébergement signée par l'hébergeant, une copie de sa pièce d'identité, et un justificatif de domicile à son nom de moins de 6 mois. C'est le cas le plus fréquent chez les étudiants, notamment autour du campus de <a href="/blog/permis-etudiant-paris-nanterre-universite">Nanterre-Université</a>.</p>
<p><strong>Vous êtes mineur :</strong> une autorisation parentale signée est nécessaire, accompagnée de la pièce d'identité du représentant légal.</p>
<p><strong>Vous êtes de nationalité étrangère :</strong> un titre de séjour en cours de validité est demandé. Selon votre situation, une justification de résidence en France peut également être requise.</p>
<p><strong>Vous avez déjà un dossier ouvert ailleurs :</strong> si vous avez commencé dans une autre auto-école, il faut récupérer votre <strong>dossier et votre numéro NEPH</strong> auprès d'elle. Vous en êtes propriétaire : sa restitution ne peut pas vous être refusée, même en cas de litige sur le solde. Nous accompagnons régulièrement des élèves dans ce transfert.</p>
<p><strong>Vous repassez après une annulation ou une invalidation :</strong> le parcours est différent, avec avis médical et éventuellement tests psychotechniques. Contactez-nous directement, ce cas se traite au cas par cas.</p>
<h2>Pour la conduite accompagnée</h2>
<p>En AAC, deux pièces s'ajoutent : l'<strong>accord écrit de l'assureur</strong> du véhicule qui servira à la phase accompagnée, et les informations relatives à chaque <strong>accompagnateur</strong> (permis B depuis au moins 5 ans). Le détail figure dans notre <a href="/blog/conduite-accompagnee-aac-guide-complet">guide de la conduite accompagnée</a>.</p>
<h2>Nos conseils pour ne pas perdre de temps</h2>
<ol><li><strong>Faites l'e-photo en premier</strong> — c'est la pièce qui manque le plus souvent, et elle nécessite un déplacement en cabine agréée.</li><li><strong>Vérifiez la date de votre justificatif de domicile</strong> — « moins de 6 mois » est appliqué strictement.</li><li><strong>Anticipez l'ASSR</strong> — le duplicata auprès d'un établissement scolaire peut prendre plusieurs semaines.</li><li><strong>Scannez tout en amont</strong> — des copies nettes, recto et verso, accélèrent nettement le traitement.</li></ol>
<h2>La liste à emporter</h2>
<p>Nous mettons à disposition la liste complète en PDF, à télécharger et cocher avant de venir : <a href="/Pieces_a_fournir.pdf">liste détaillée des pièces à fournir</a> (une <a href="/Pieces_a_fournir_simple.pdf">version simplifiée</a> est également disponible).</p>
<p>Une fois votre dossier réuni, l'<a href="/s-inscrire">inscription en ligne</a> prend quelques minutes, et nous nous chargeons de l'enregistrement auprès de l'administration. Pour toute question sur une situation particulière, <a href="/contact">appelez-nous</a> : c'est souvent réglé en deux minutes au téléphone.</p>`,
    featured_image: '/blog4.jpeg',
    author_name: 'Julien Moreau',
    category: 'Permis',
    tags: ['inscription permis', 'pièces à fournir', 'NEPH', 'ANTS', 'dossier permis'],
    published_at: '2026-08-06',
    views_count: 0
  },
  {
    id: '19',
    title: 'Apprendre à conduire à Nanterre : les 6 situations qui font vraiment progresser',
    slug: 'apprendre-conduire-nanterre-situations-cles',
    excerpt: "Giratoires, insertion sur l'A86, zones 30, partage de la voirie avec le tram : Nanterre concentre en quelques kilomètres presque toutes les situations évaluées à l'examen. Voici celles sur lesquelles nos moniteurs insistent le plus.",
    content: `<p>Toutes les villes ne se valent pas pour apprendre à conduire. Certaines n'offrent que des lignes droites, d'autres uniquement des embouteillages. Nanterre, elle, a une particularité rare : en une quinzaine de minutes de voiture, on y traverse presque tous les types de voirie qu'un examinateur des Hauts-de-Seine peut vous demander d'aborder. Voici les six situations que nous travaillons systématiquement avec nos élèves.</p>
<h2>1. Les giratoires, la bête noire de l'examen</h2>
<p>C'est, de loin, le premier motif d'échec en Île-de-France. Le secteur de Nanterre en compte de toutes tailles : petits anneaux résidentiels où le clignotant doit être anticipé, et grands carrefours giratoires à plusieurs voies où il faut choisir sa file <em>avant</em> d'entrer. La règle que nous répétons : on regarde à gauche, on décide tôt, et on annonce sa sortie. Un giratoire mal négocié coûte rarement un point isolé — il enchaîne souvent une hésitation, un défaut d'allure et un oubli de rétroviseur.</p>
<h2>2. L'insertion sur voie rapide</h2>
<p>L'A86 borde la commune, et les bretelles d'accès du secteur sont d'excellents terrains d'entraînement. L'insertion est une compétence explicitement évaluée : il faut accélérer franchement sur la voie d'accélération, contrôler l'angle mort, et s'intégrer sans forcer les autres véhicules à freiner. Beaucoup de candidats abordent cette manœuvre trop timidement — c'est un réflexe qui se travaille en quelques leçons seulement.</p>
<h2>3. Les zones 30 et la circulation apaisée</h2>
<p>Le Petit-Nanterre, le Chemin-de-l'Île, les abords des groupes scolaires : les zones à vitesse réduite se sont multipliées, avec leur lot de coussins berlinois, de chicanes et de priorités à droite. Ces quartiers apprennent une chose essentielle : adapter son allure sans se laisser distraire, et anticiper le piéton qui traverse hors passage. L'examinateur y observe surtout votre regard, pas votre vitesse.</p>
<h2>4. Le partage de la voirie</h2>
<p>Tram, bus en site propre, pistes cyclables, livraisons en double file : la voirie du secteur est partagée en permanence. Savoir dépasser un cycliste avec le bon écartement, franchir une plateforme de tramway, ou renoncer à un dépassement inutile fait partie des compétences « comportement » qui pèsent lourd dans la notation finale.</p>
<h2>5. Les grands axes structurants</h2>
<p>L'avenue de la République — où se trouve notre agence, au 375 — et l'avenue Georges-Clemenceau offrent des doubles sens larges, des feux successifs et des tourne-à-gauche exigeants. C'est là qu'on apprend à tenir une allure régulière, à lire la signalisation en amont et à ne pas se faire surprendre par un changement de file tardif.</p>
<h2>6. Le stationnement en conditions réelles</h2>
<p>Créneau, bataille, épi : les manœuvres sont demandées à l'examen, mais elles ne s'apprennent pas correctement sur un parking vide. Nous les travaillons dans la rue, entre deux véhicules, avec de la circulation derrière — parce que c'est exactement le contexte du jour J.</p>
<h2>Pourquoi ça compte pour votre réussite</h2>
<p>Les parcours d'examen des Hauts-de-Seine empruntent ce même tissu routier. Un élève formé à Nanterre ne découvre donc rien le jour de l'épreuve : il retrouve des giratoires, des insertions et des zones 30 qu'il a déjà pratiqués des dizaines de fois. C'est la raison pour laquelle nous programmons un <strong>examen blanc en conditions réelles</strong> avant chaque présentation.</p>
<p>Vous voulez commencer ? Consultez nos <a href="/tarifs">formules et tarifs</a>, ou <a href="/s-inscrire">inscrivez-vous en ligne</a> en quelques minutes. Pour comprendre le déroulé complet de l'épreuve, lisez aussi notre article sur <a href="/blog/examen-permis-hauts-de-seine-deroulement">l'examen du permis dans les Hauts-de-Seine</a>.</p>`,
    featured_image: '/blog1.jpeg',
    author_name: 'Julien Moreau',
    category: 'Local',
    tags: ['conduite Nanterre', 'auto-école Nanterre', 'examen permis', 'Hauts-de-Seine', 'giratoire'],
    published_at: '2026-08-04',
    views_count: 0
  },
  {
    id: '18',
    title: 'Étudiant à Paris Nanterre : décrocher son permis pendant ses études',
    slug: 'permis-etudiant-paris-nanterre-universite',
    excerpt: "Emploi du temps morcelé, budget serré, examens à réviser : passer le permis quand on est étudiant à Nanterre semble compliqué. C'est en réalité le meilleur moment — à condition de s'y prendre correctement.",
    content: `<p>Le campus de l'université Paris Nanterre accueille des dizaines de milliers d'étudiants, dont une large majorité n'a pas encore le permis. Pourtant, les années d'études sont objectivement la meilleure fenêtre pour le passer : les emplois du temps comportent des trous, les vacances universitaires sont longues, et un permis en poche change radicalement les possibilités de stage et de premier emploi. Voici comment s'organiser concrètement.</p>
<h2>Une auto-école à deux pas du campus</h2>
<p>Notre agence est au 375 avenue de la République, à Nanterre. Depuis la gare de <strong>Nanterre-Université</strong>, desservie par le RER A et la ligne L, vous y êtes en quelques minutes. Concrètement, une leçon de conduite peut se caser entre deux TD sans y consacrer une demi-journée de transport — ce qui est rarement le cas quand on choisit une auto-école près de chez ses parents.</p>
<h2>Caler la conduite dans un emploi du temps universitaire</h2>
<p>Trois leviers rendent la chose réaliste :</p>
<ul><li><strong>Des créneaux larges</strong> : nos moniteurs conduisent de 10h à 20h en semaine et le samedi de 9h à 15h. Le créneau de 18h30 après les cours, ou celui du samedi matin, sont les plus demandés par les étudiants.</li><li><strong>Les trous de l'emploi du temps</strong> : une heure de conduite en milieu de journée entre deux cours vaut mieux qu'une heure repoussée à jamais.</li><li><strong>La régularité plutôt que l'intensité</strong> : une à deux leçons par semaine, sans interruption, coûtent moins cher qu'un rythme irrégulier — chaque coupure de trois semaines se paie en heures de remise à niveau.</li></ul>
<h2>Le code : à réviser dans le RER</h2>
<p>C'est la partie la plus facile à intégrer à une vie étudiante. Notre <strong>pack web</strong> donne accès aux séries d'entraînement en ligne : vingt minutes dans le RER A le matin, dix minutes entre deux cours, et le code se prépare sans bloquer une seule soirée. Les sessions en salle restent disponibles pour ceux qui préfèrent un cadre encadré. Nos <a href="/blog/5-astuces-reussir-code-route-premier-coup">cinq astuces pour réussir le code du premier coup</a> détaillent la méthode.</p>
<h2>Profiter des vacances universitaires : la formule accélérée</h2>
<p>Entre deux semestres, en janvier ou l'été, la <strong>formation accélérée</strong> permet de concentrer code et conduite sur quelques semaines. C'est souvent le choix des étudiants qui veulent avoir le permis avant un stage ou une alternance. Nous détaillons ce format dans <a href="/blog/permis-conduire-10-jours-possible">notre article sur le permis en 10 jours</a>.</p>
<h2>Financer son permis quand on est étudiant</h2>
<p>C'est le vrai frein, et il existe plusieurs réponses :</p>
<ul><li><strong>Le paiement échelonné</strong> : nos formules sont payables en plusieurs fois sans frais, ce qui étale la dépense sur plusieurs mois de budget étudiant.</li><li><strong>Le CPF</strong> : il dépend de votre situation et des conditions d'éligibilité en vigueur. Consultez notre <a href="/blog/financement-cpf-compte-permis">guide du financement CPF</a> avant toute inscription.</li><li><strong>Le permis à 1 euro par jour</strong> : ce dispositif d'État s'adresse aux 15-25 ans sous la forme d'un prêt à taux zéro. Contactez-nous pour vérifier l'éligibilité de votre formule.</li><li><strong>Les aides locales</strong> : mairies, missions locales et certains dispositifs régionaux proposent des coups de pouce. Un passage au CROUS ou au service vie étudiante vaut souvent le détour.</li></ul>
<h2>Boîte automatique : l'option qui va plus vite</h2>
<p>Le permis boîte automatique exige <strong>13 heures</strong> de conduite minimum contre 20 en boîte manuelle. Pour un étudiant pressé, dont l'usage futur sera surtout urbain ou en autopartage, c'est un calcul souvent gagnant : moins d'heures, formation plus courte, budget réduit.</p>
<h2>Par où commencer</h2>
<p>Réunissez vos pièces, créez votre dossier, et prenez un premier rendez-vous d'évaluation : nous déterminons ensemble le nombre d'heures réaliste dans votre cas. Tout est détaillé sur notre <a href="/tarifs">page tarifs</a>, et l'<a href="/s-inscrire">inscription en ligne</a> prend quelques minutes.</p>`,
    featured_image: '/blog2.jpeg',
    author_name: 'Julien Moreau',
    category: 'Local',
    tags: ['permis étudiant', 'Nanterre Université', 'auto-école Nanterre', 'CPF', 'permis pas cher'],
    published_at: '2026-08-03',
    views_count: 0
  },
  {
    id: '17',
    title: "L'examen du permis dans les Hauts-de-Seine : déroulé, notation et préparation",
    slug: 'examen-permis-hauts-de-seine-deroulement',
    excerpt: "Combien de temps dure l'épreuve ? Combien de points faut-il ? Que regarde vraiment l'examinateur ? Le guide complet de l'examen pratique tel qu'il se déroule dans le 92, et la façon dont nous y préparons nos élèves à Nanterre.",
    content: `<p>Beaucoup de candidats arrivent à l'examen pratique sans savoir précisément comment ils vont être notés. C'est une source de stress inutile — et parfois d'échec. Voici, étape par étape, ce qui vous attend le jour J dans les Hauts-de-Seine.</p>
<h2>Avant l'épreuve : convocation et pièces</h2>
<p>C'est votre auto-école qui vous présente à l'examen et vous communique la date, l'heure et le lieu de rendez-vous. Présentez-vous avec une <strong>pièce d'identité en cours de validité</strong> — sans elle, l'examen ne peut pas avoir lieu, sans exception. Arrivez en avance : le stress de dernière minute commence presque toujours par un retard.</p>
<h2>Le déroulé de l'épreuve</h2>
<p>L'examen pratique dure environ <strong>32 minutes</strong>, dont une majorité de conduite effective. Il se décompose ainsi :</p>
<ul><li>Une phase de mise en route et de réglages du poste de conduite.</li><li>Un parcours de conduite en circulation, suivant les indications de l'examinateur ou une portion en autonomie.</li><li>Une ou deux <strong>manœuvres</strong> (créneau, rangement en bataille ou en épi, demi-tour, freinage de précision).</li><li>Deux <strong>questions</strong> : une question de vérification intérieure ou extérieure du véhicule, et une question portant sur la sécurité routière ou les premiers secours.</li><li>Une courte séquence de courtoisie au volant.</li></ul>
<h2>La notation : 31 points, 20 pour réussir</h2>
<p>Vous êtes évalué sur un total de <strong>31 points</strong>, et il en faut <strong>20 minimum</strong> pour obtenir le permis — à condition de ne commettre aucune faute éliminatoire (mise en danger, non-respect d'une priorité, intervention de l'examinateur sur les commandes). Les compétences évaluées couvrent quatre grands blocs : maîtriser le véhicule, appréhender la route, circuler dans des conditions normales, et partager la route avec les autres usagers.</p>
<p>Un point souvent ignoré : l'examinateur valorise aussi <strong>l'autonomie et la conscience du risque</strong>. Un candidat qui commet une petite erreur mais la corrige lui-même est mieux noté qu'un candidat passif qui n'a rien vu.</p>
<h2>Les pièges propres au secteur</h2>
<p>Les parcours des Hauts-de-Seine ont leurs classiques, et ils reviennent presque à chaque session :</p>
<ul><li><strong>Les giratoires</strong> — choix de file, clignotant de sortie, allure. Premier motif de points perdus.</li><li><strong>L'insertion sur voie rapide</strong> — l'A86 n'est jamais loin. Une insertion trop timide est pénalisée comme une insertion trop brutale.</li><li><strong>Les zones 30 et priorités à droite</strong> — nombreuses dans les quartiers résidentiels de Nanterre et des communes voisines.</li><li><strong>Le partage avec le tram, les bus et les cyclistes</strong> — un dépassement de cycliste sans écartement suffisant coûte cher.</li><li><strong>Le stationnement en rue</strong> — pas sur un parking vide, mais entre deux véhicules avec de la circulation.</li></ul>
<p>Nous détaillons ces situations dans notre article sur <a href="/blog/apprendre-conduire-nanterre-situations-cles">les six situations qui font progresser à Nanterre</a>.</p>
<h2>Après l'épreuve : les résultats</h2>
<p>L'examinateur ne vous communique pas le résultat sur place. Il est consultable en ligne sur le site officiel, généralement sous <strong>48 heures ouvrées</strong>. En cas de réussite, vous recevez un certificat d'examen du permis de conduire (CEPC) qui vous autorise à conduire en France pendant quatre mois, le temps que le permis définitif soit fabriqué.</p>
<p>En cas d'échec, le bilan de compétences détaille les points à retravailler. Ce n'est pas un verdict : la grande majorité des candidats qui échouent une première fois obtiennent le permis à la présentation suivante, avec quelques heures ciblées.</p>
<h2>Comment nous préparons nos élèves</h2>
<p>Trois principes, appliqués systématiquement :</p>
<ul><li><strong>Former sur les vraies routes</strong> : nos leçons se déroulent à Nanterre et dans les communes voisines, sur le même tissu routier que les parcours d'examen.</li><li><strong>L'examen blanc</strong> : avant chaque présentation, une session en conditions réelles, chronométrée et notée comme le jour J.</li><li><strong>Présenter au bon moment</strong> : nous ne présentons pas un élève tant que le niveau n'est pas là. C'est plus honnête, et c'est aussi moins coûteux pour lui.</li></ul>
<p>Vous préparez votre examen ? Consultez nos <a href="/blog/erreurs-eviter-jour-examen-conduite">erreurs à éviter le jour de l'examen</a> et nos conseils pour <a href="/blog/comment-gerer-son-stress-pour-reussir-l-examen-de-conduite">gérer votre stress</a>. Pour toute question sur votre dossier, <a href="/contact">contactez-nous</a>.</p>`,
    featured_image: '/blog3.jpeg',
    author_name: 'Julien Moreau',
    category: 'Local',
    tags: ['examen permis', 'Hauts-de-Seine', 'permis B', 'Nanterre', 'notation permis'],
    published_at: '2026-08-02',
    views_count: 0
  },
  {
    id: '16',
    title: 'Combien coûte le permis de conduire à Nanterre en 2026 ?',
    slug: 'prix-permis-conduire-nanterre',
    excerpt: "Prix des forfaits, frais annexes que personne ne mentionne, écart avec Paris, aides mobilisables : le point complet et chiffré sur le budget réel d'un permis B à Nanterre.",
    content: `<p>« Combien ça coûte ? » est la première question posée au téléphone, et c'est légitime : le permis représente un budget important. Le problème, c'est que les prix affichés recouvrent rarement les mêmes prestations d'une école à l'autre. Voici comment lire une grille tarifaire, et ce que cela donne concrètement à Nanterre.</p>
<h2>Ce que contient — ou non — un forfait</h2>
<p>Un forfait sérieux doit préciser au minimum :</p>
<ul><li>le <strong>nombre d'heures de conduite</strong> incluses ;</li><li>si l'<strong>accès au code</strong> (en ligne et/ou en salle) est compris ;</li><li>les <strong>frais de dossier</strong> et l'enregistrement de votre demande de permis ;</li><li>la <strong>présentation à l'examen</strong> pratique — et si une seconde présentation est facturée ;</li><li>le <strong>prix de l'heure supplémentaire</strong>, car c'est là que les budgets dérapent.</li></ul>
<p>Un forfait très bas assorti d'heures supplémentaires chères revient souvent plus cher qu'un forfait complet. C'est le calcul à faire avant de comparer deux devis.</p>
<h2>Nos tarifs à Nanterre</h2>
<p>Nos prix sont affichés publiquement, sans devis surprise :</p>
<ul><li><strong>Permis B 20h (boîte manuelle) : 899 €</strong> — le forfait le plus demandé, correspondant au minimum légal de 20 heures.</li><li><strong>Permis BEA 13h (boîte automatique) : 799 €</strong> — le minimum légal en automatique est de 13 heures.</li><li><strong>Permis B 30h : 1 399 €</strong> et <strong>Permis B 40h : 1 699 €</strong> — pour les profils qui savent d'emblée qu'ils auront besoin de plus d'heures.</li><li><strong>Formule accélérée 20h : 1 499 €</strong> — code et conduite concentrés sur quelques semaines.</li><li><strong>Leçon à l'unité : à partir de 60 €</strong>, ou <strong>600 € les 10 leçons</strong> pour un perfectionnement ou une reprise après échec.</li><li><strong>Pack web code : 29 €</strong> en accès illimité.</li></ul>
<p>La grille complète, catégorie par catégorie, est sur notre <a href="/tarifs">page tarifs à Nanterre</a>, et le <a href="/prestations-a-l-unite">Pack Web pour réviser le code de la route en ligne</a> a sa page dédiée.</p>
<h2>Combien d'heures faut-il vraiment ?</h2>
<p>C'est la variable décisive. Les 20 heures légales sont un plancher, pas une moyenne : en Île-de-France, un candidat débutant en boîte manuelle dépasse souvent ce seuil, en raison de la densité de circulation. D'où l'importance de <strong>l'évaluation de départ</strong> : une heure passée à mesurer votre niveau réel évite d'acheter un forfait inadapté. Nous préférons annoncer un volume honnête plutôt que de vendre un forfait bas complété par dix heures supplémentaires.</p>
<h2>Nanterre ou Paris : l'écart</h2>
<p>À prestation équivalente, l'écart entre une auto-école parisienne et une auto-école des Hauts-de-Seine se compte fréquemment en <strong>plusieurs centaines d'euros</strong> sur un forfait complet. C'est ce qui pousse de nombreux Parisiens de l'Ouest à franchir le périphérique — nous en avons fait <a href="/blog/passer-permis-banlieue-paris-ouest-8-16-17">un article dédié</a>. Le raisonnement vaut aussi pour le secteur de <a href="/blog/permis-pres-la-defense-courbevoie-neuilly-rueil">La Défense</a>.</p>
<h2>Les aides et facilités mobilisables</h2>
<ul><li><strong>Le CPF</strong> — il peut être mobilisé pour le permis B selon votre situation et les conditions d'éligibilité en vigueur. Vérifiez votre situation sur Mon Compte Formation et consultez <a href="/blog/financement-cpf-compte-permis">notre guide CPF</a>.</li><li><strong>Le permis à 1 euro par jour</strong> — un prêt à taux zéro destiné aux 15-25 ans, sous conditions. Demandez-nous si votre formule y est éligible.</li><li><strong>Le paiement en plusieurs fois sans frais</strong> — pour étaler la dépense sans surcoût.</li><li><strong>Les aides locales</strong> — certaines communes, missions locales et dispositifs pour apprentis ou demandeurs d'emploi proposent une participation. Cela se cumule parfois avec le reste.</li></ul>
<h2>Les trois économies les plus efficaces</h2>
<p>Elles ne tiennent pas au prix affiché :</p>
<ol><li><strong>Réussir le code du premier coup</strong> — chaque échec ajoute des semaines et des frais.</li><li><strong>Conduire régulièrement</strong> — une leçon par semaine sans interruption coûte moins cher qu'un rythme haché, où chaque reprise se paie en heures perdues.</li><li><strong>Choisir la boîte automatique si votre usage s'y prête</strong> — 13 heures minimum au lieu de 20, soit un forfait plus court.</li></ol>
<h2>En résumé</h2>
<p>À Nanterre, un permis B complet démarre à <strong>899 €</strong> en boîte manuelle et <strong>799 €</strong> en boîte automatique, hors heures supplémentaires. Le meilleur moyen d'avoir un chiffre fiable pour votre situation reste l'évaluation de départ. <a href="/s-inscrire">Inscrivez-vous en ligne</a> ou <a href="/contact">appelez-nous</a> pour la programmer.</p>`,
    featured_image: '/blog4.jpeg',
    author_name: 'Julien Moreau',
    category: 'Local',
    tags: ['prix permis Nanterre', 'tarifs auto-école', 'CPF', 'permis pas cher', 'Hauts-de-Seine'],
    published_at: '2026-08-01',
    views_count: 0
  },
  {
    id: '15',
    title: 'Passer son permis à Nanterre : le guide complet 2026',
    slug: 'passer-permis-nanterre-guide-complet',
    excerpt: "Démarches, choix de la formule, code, conduite, examen, délais et budget : tout ce qu'il faut savoir pour obtenir son permis B à Nanterre, réuni dans un seul guide.",
    content: `<p>Vous habitez Nanterre ou une commune voisine des Hauts-de-Seine et vous voulez passer votre permis B ? Ce guide reprend l'ensemble du parcours, dans l'ordre, des premières démarches administratives jusqu'au jour où vous récupérez votre permis.</p>
<h2>1. Les démarches préalables</h2>
<p>Avant la première leçon, il faut un <strong>numéro NEPH</strong> (numéro d'enregistrement préparatoire à l'examen), obtenu via une demande en ligne sur le site de l'ANTS. En pratique, votre auto-école s'en charge pour vous — c'est ce que nous faisons systématiquement. Les pièces habituellement demandées :</p>
<ul><li>une pièce d'identité en cours de validité ;</li><li>un justificatif de domicile de moins de 6 mois ;</li><li>une photo d'identité numérique conforme (code e-photo) ;</li><li>pour les moins de 25 ans : l'attestation de recensement et l'ASSR 2 ou l'attestation de sécurité routière ;</li><li>une attestation de participation à la Journée Défense et Citoyenneté le cas échéant.</li></ul>
<p>La liste détaillée et à jour vous est remise à l'inscription.</p>
<h2>2. Choisir sa formule</h2>
<p>C'est la décision qui structure tout le reste :</p>
<ul><li><strong>Boîte manuelle (permis B)</strong> — 20 heures de conduite minimum. Le permis le plus polyvalent : il autorise la conduite de tous les véhicules de la catégorie.</li><li><strong>Boîte automatique (BEA)</strong> — 13 heures minimum. Formation plus courte et moins chère ; une passerelle de 7 heures permet ensuite de lever la restriction, sans délai d'attente depuis mars 2024.</li><li><strong>Formule accélérée</strong> — code et conduite concentrés sur quelques semaines, pour les candidats disponibles et pressés.</li><li><strong>Conduite accompagnée (AAC)</strong> — dès 15 ans, avec une formation initiale puis une phase de conduite avec un accompagnateur. C'est la voie qui affiche les meilleurs taux de réussite, et elle réduit la période probatoire à 2 ans au lieu de 3.</li><li><strong>Conduite supervisée</strong> — la variante pour les majeurs, après la formation initiale.</li></ul>
<h2>3. Le code de la route</h2>
<p>L'examen théorique comporte <strong>40 questions</strong> ; il faut au moins <strong>35 bonnes réponses</strong> pour être reçu. Une fois obtenu, le code reste valable <strong>5 ans</strong> et couvre jusqu'à 5 présentations à l'épreuve pratique.</p>
<p>Nous proposons la préparation en salle comme en ligne, avec un pack web à accès illimité. Le rythme qui fonctionne le mieux : des séries courtes et quotidiennes plutôt qu'un bachotage de dernière minute. Nos <a href="/blog/5-astuces-reussir-code-route-premier-coup">cinq astuces pour réussir du premier coup</a> détaillent la méthode.</p>
<h2>4. La conduite</h2>
<p>Tout commence par une <strong>évaluation de départ</strong> qui détermine le volume d'heures réaliste dans votre cas. La formation suit ensuite les quatre compétences officielles : maîtriser le véhicule, appréhender la route, circuler dans des conditions normales, partager la route avec les autres usagers.</p>
<p>Nos leçons se déroulent à Nanterre et dans les communes voisines — le même tissu routier que les parcours d'examen du secteur. Un point qui compte plus qu'on ne le croit : giratoires, insertion sur voie rapide, zones 30 et partage de la voirie sont exactement ce qui est évalué le jour J. Nous en avons fait <a href="/blog/apprendre-conduire-nanterre-situations-cles">un article détaillé</a>.</p>
<h2>5. L'examen pratique</h2>
<p>Environ 32 minutes, une notation sur <strong>31 points</strong> avec <strong>20 points minimum</strong> requis, une ou deux manœuvres et deux questions. Le résultat est consultable en ligne, généralement sous 48 heures ouvrées. Le déroulé complet est expliqué dans notre article sur <a href="/blog/examen-permis-hauts-de-seine-deroulement">l'examen du permis dans les Hauts-de-Seine</a>.</p>
<h2>6. Combien de temps ça prend ?</h2>
<p>Cela dépend de trois facteurs : votre régularité, le délai d'obtention du code et le délai de présentation à l'examen pratique. En rythme classique — une à deux leçons par semaine — comptez quelques mois. En formule accélérée, l'objectif est de quelques semaines. Le facteur le plus déterminant reste la <strong>régularité</strong> : les interruptions longues coûtent des heures de remise à niveau.</p>
<h2>7. Combien ça coûte ?</h2>
<p>Chez nous, à partir de <strong>899 €</strong> pour le forfait 20h en boîte manuelle et <strong>799 €</strong> pour le forfait 13h en boîte automatique. Paiement en plusieurs fois sans frais ; le CPF dépend des conditions d'éligibilité en vigueur. Le détail complet, y compris les frais annexes à surveiller, est dans notre article <a href="/blog/prix-permis-conduire-nanterre">combien coûte le permis à Nanterre</a>, et la grille est sur la <a href="/tarifs">page tarifs</a>.</p>
<h2>8. Après le permis</h2>
<p>Vous entrez en <strong>période probatoire</strong> : 6 points au départ, 3 ans (ou 2 ans si vous êtes passé par la conduite accompagnée), avec des limitations de vitesse réduites et un disque « A » à l'arrière. C'est aussi le moment de comparer les assurances jeune conducteur — nous avons publié <a href="/blog/assurance-auto-types-contrats-expliques">un comparatif des types de contrats</a>.</p>
<h2>Où s'inscrire à Nanterre</h2>
<p>Notre agence est au <strong>375 avenue de la République, 92000 Nanterre</strong>, accessible depuis les trois gares RER A de la commune et desservie par les lignes de bus locales. Nous accueillons également les élèves de Rueil-Malmaison, Courbevoie, Colombes, La Garenne-Colombes, Bezons, Neuilly-sur-Seine et de l'Ouest parisien.</p>
<p>Pour démarrer : <a href="/s-inscrire">inscription en ligne</a>, ou passez nous voir aux horaires indiqués sur la <a href="/contact">page contact</a>. Pour en savoir plus sur notre équipe et nos agréments, direction la page <a href="/a-propos">à propos</a>.</p>`,
    featured_image: '/blog5.jpeg',
    author_name: 'Julien Moreau',
    category: 'Local',
    tags: ['permis Nanterre', 'guide permis', 'auto-école Nanterre', 'permis B', 'Hauts-de-Seine'],
    published_at: '2026-07-31',
    views_count: 0
  },
  {
    id: '14',
    title: 'Habiter Paris 8ᵉ, 16ᵉ ou 17ᵉ et passer son permis en banlieue : bonne idée ?',
    slug: 'passer-permis-banlieue-paris-ouest-8-16-17',
    excerpt: "Tarifs élevés, délais longs, conduite en accordéon : passer son permis dans l'Ouest parisien décourage plus d'un candidat. Voici pourquoi de plus en plus de Parisiens franchissent le périphérique pour se former à Nanterre.",
    content: `<p>Dans les 8ᵉ, 16ᵉ et 17ᵉ arrondissements, le permis de conduire coûte cher : les forfaits y figurent parmi les plus élevés de France, et les délais pour obtenir une place d'examen s'allongent. Résultat : de plus en plus de Parisiens de l'Ouest choisissent une auto-école en proche banlieue. Bonne ou mauvaise idée ? Éléments de réponse.</p>
<h2>L'argument budget : des écarts qui se chiffrent en centaines d'euros</h2>
<p>À prestation équivalente (forfait 20 heures, accompagnement à l'examen), l'écart entre une auto-école parisienne et une auto-école des Hauts-de-Seine atteint fréquemment plusieurs centaines d'euros. Nos <a href="/tarifs">formules à Nanterre</a> sont affichées en toute transparence et payables en 2 fois sans frais. Le CPF peut être mobilisé selon les conditions d'éligibilité en vigueur.</p>
<h2>L'argument pédagogique : apprendre là où l'on est évalué</h2>
<p>C'est le point que beaucoup de candidats découvrent trop tard : les examens pratiques se déroulent en grande partie sur des parcours de banlieue — giratoires, voies rapides, zones 30, insertions. S'entraîner boulevard Haussmann ou avenue de la Grande-Armée, dans une circulation en accordéon, prépare mal à ces situations. En vous formant à Nanterre, vous conduisez dès la première heure sur le type de routes que vous retrouverez le jour J.</p>
<h2>Et le trajet, alors ?</h2>
<p>C'est l'objection classique — et elle tombe vite :</p>
<ul><li>Depuis <strong>Charles de Gaulle-Étoile</strong> (accessible des trois arrondissements), le RER A rejoint Nanterre en une dizaine de minutes.</li><li>Depuis <strong>Saint-Lazare</strong>, la ligne L dessert la gare de Nanterre-Université sans changement.</li><li>Nos moniteurs conduisent jusqu'à 20h en semaine et le samedi : une leçon après les cours ou le bureau est tout à fait réaliste.</li></ul>
<h2>Pour quel profil est-ce le bon choix ?</h2>
<p>Étudiants, jeunes actifs, salariés en horaires de bureau : si votre priorité est d'obtenir le permis vite et à coût maîtrisé, la banlieue proche est objectivement avantageuse. Nous avons détaillé l'accès et les réponses aux questions fréquentes pour chaque arrondissement : <a href="/auto-ecole-paris-8">auto-école près du 8ᵉ</a>, <a href="/auto-ecole-paris-16">auto-école près du 16ᵉ</a> et <a href="/auto-ecole-paris-17">auto-école près du 17ᵉ</a>.</p>
<h2>Conclusion</h2>
<p>Franchir le périphérique pour passer son permis, c'est payer moins cher, s'entraîner sur les vrais parcours d'examen et profiter de créneaux plus souples. À une dizaine de minutes de RER de l'Étoile, notre équipe accompagne chaque année de nombreux élèves parisiens jusqu'à la réussite.</p>`,
    featured_image: '/blog5.jpeg',
    author_name: 'Julien Moreau',
    category: 'Local',
    tags: ['permis Paris', 'auto-école banlieue', 'Paris 16', 'Paris 17', 'Paris 8'],
    published_at: '2026-08-05',
    views_count: 0
  },
  {
    id: '13',
    title: 'Passer son permis près de La Défense : le guide Courbevoie, Neuilly, Rueil',
    slug: 'permis-pres-la-defense-courbevoie-neuilly-rueil',
    excerpt: "Vous vivez ou travaillez autour de La Défense ? Voici comment organiser votre permis de conduire depuis Courbevoie, Neuilly-sur-Seine ou Rueil-Malmaison — sans y laisser votre budget ni vos soirées.",
    content: `<p>Le quartier d'affaires de La Défense concentre des dizaines de milliers d'actifs venus de Courbevoie, Neuilly-sur-Seine, Rueil-Malmaison et au-delà. Pour eux, passer le permis pose deux problèmes très concrets : des tarifs locaux élevés et des emplois du temps chargés. Voici comment les contourner.</p>
<h2>Le réflexe à avoir : regarder à une station de là</h2>
<p>À quelques minutes de train du parvis, les tarifs changent sensiblement. Notre auto-école, au 375 avenue de la République à Nanterre, est reliée directement au secteur : ligne L depuis la <a href="/auto-ecole-courbevoie">gare de Courbevoie</a>, RER A depuis <a href="/auto-ecole-rueil-malmaison">Rueil-Malmaison</a>, métro 1 + RER A depuis <a href="/auto-ecole-neuilly-sur-seine">Neuilly-sur-Seine</a>.</p>
<h2>Caser ses leçons dans une semaine de bureau</h2>
<p>C'est souvent le vrai blocage. Trois leviers rendent la chose réaliste :</p>
<ul><li><strong>Des créneaux étendus</strong> : nos moniteurs conduisent de 10h à 20h en semaine et le samedi de 9h à 15h — la leçon de 18h30 après la journée de travail est un grand classique chez nos élèves de La Défense.</li><li><strong>Le code en ligne</strong> : révisez dans le train ou à la pause déjeuner, les sessions en salle restent disponibles en complément.</li><li><strong>La formule accélérée</strong> : pour les plus pressés, code et conduite se concentrent sur quelques semaines.</li></ul>
<h2>Boîte automatique : l'option qui accélère tout</h2>
<p>Le permis boîte automatique se passe dès 13 heures de conduite (contre 20 heures minimum en manuelle). Dans un usage francilien — embouteillages, parkings, trajets courts — c'est un choix de plus en plus rationnel, et les véhicules de fonction ou d'autopartage sont massivement automatiques.</p>
<h2>Un financement souvent oublié : le CPF</h2>
<p>Le CPF peut être mobilisé pour préparer le permis selon votre situation et les conditions en vigueur. Consultez notre <a href="/blog/financement-cpf-compte-permis">guide du Compte Personnel de Formation</a> avant toute inscription.</p>
<h2>Conclusion</h2>
<p>Habiter ou travailler autour de La Défense n'oblige ni à payer le permis au prix fort, ni à sacrifier ses soirées. À quelques minutes de Courbevoie, Neuilly et Rueil, notre équipe adapte le planning à votre rythme — détails et accès sur nos pages dédiées à chaque ville.</p>`,
    featured_image: '/blog4.jpeg',
    author_name: 'Julien Moreau',
    category: 'Local',
    tags: ['La Défense', 'Courbevoie', 'Neuilly-sur-Seine', 'Rueil-Malmaison', 'permis B'],
    published_at: '2026-07-30',
    views_count: 0
  },
  {
    id: '12',
    title: 'Permis à Bezons, Colombes ou La Garenne-Colombes : pourquoi traverser la Seine',
    slug: 'permis-conduire-bezons-colombes-la-garenne-colombes',
    excerpt: "Peu d'auto-écoles, des délais qui s'allongent : dans la boucle nord des Hauts-de-Seine, trouver une place pour passer son permis n'est pas simple. La solution est souvent juste de l'autre côté du pont.",
    content: `<p>Entre Bezons, Colombes et La Garenne-Colombes, des dizaines de milliers d'habitants se partagent une offre d'auto-écoles limitée. Conséquence : des listes d'attente pour commencer la conduite et des délais de présentation à l'examen qui s'étirent. Pourtant, à quelques minutes de là, la situation est bien différente.</p>
<h2>Nanterre, la voisine directe</h2>
<p>Notre agence est installée au 375 avenue de la République à Nanterre — l'axe même qui file vers Colombes. Concrètement :</p>
<ul><li>Depuis <a href="/auto-ecole-bezons">Bezons</a> : environ 7 minutes en voiture une fois le pont de Bezons franchi, ou le tram T2 depuis le terminus.</li><li>Depuis <a href="/auto-ecole-colombes">Colombes</a> : moins de 10 minutes depuis le Petit-Colombes, T2 aux stations Parc Pierre Lagravère et Victor Basch.</li><li>Depuis <a href="/auto-ecole-la-garenne-colombes">La Garenne-Colombes</a> : 2 à 3 arrêts de ligne L jusqu'à Nanterre-Université.</li></ul>
<h2>Ce que change une école avec de la disponibilité</h2>
<p>Commencer la conduite rapidement, enchaîner les leçons sans trous de trois semaines, être présenté à l'examen dès que le niveau est là : la régularité est le premier facteur de réussite (et d'économies — chaque mois d'attente se paie en heures de « remise à niveau »). Avec des créneaux de 10h à 20h en semaine et le samedi matin, nos élèves de la boucle nord gardent un rythme d'une à deux leçons par semaine.</p>
<h2>S'entraîner sur les routes de l'examen</h2>
<p>Les leçons couvrent Nanterre, Colombes et les communes voisines : giratoires, avenues à double sens, zones 30, insertion sur voies rapides — exactement le tissu routier des parcours d'examen des Hauts-de-Seine. Le jour J, vous conduisez en terrain connu.</p>
<h2>Et pour les lycéens : la conduite accompagnée</h2>
<p>Dès 15 ans, la <strong>conduite accompagnée (AAC)</strong> permet de se former progressivement et d'aborder l'examen avec des centaines de kilomètres d'expérience — avec, à la clé, un taux de réussite supérieur et une assurance jeune conducteur moins chère. Une formule très demandée par les familles de Colombes et Bezons.</p>
<h2>Conclusion</h2>
<p>Si vous habitez la boucle nord, ne laissez pas les délais locaux retarder votre permis : l'auto-école la plus disponible est peut-être juste de l'autre côté de la Seine. Toutes nos formules — permis B manuel ou automatique, accéléré, code et financement CPF selon éligibilité — sont détaillées sur notre <a href="/tarifs">page tarifs</a>.</p>`,
    featured_image: '/blog3.jpeg',
    author_name: 'Julien Moreau',
    category: 'Local',
    tags: ['Bezons', 'Colombes', 'La Garenne-Colombes', 'auto-école', 'permis B'],
    published_at: '2026-07-23',
    views_count: 0
  },
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
<h2>Que faire si le stress monte pendant l'épreuve ?</h2>
<p>Même bien préparé, il arrive que la tension monte en cours de route. La première règle est de ne pas chercher à « rattraper » une erreur en accélérant le rythme : ralentissez légèrement, reprenez votre respiration et concentrez-vous sur la prochaine action. L'examinateur évalue votre conduite globale, pas un instant isolé.</p>
<p>Quelques réflexes utiles le jour J :</p>
<ul><li>Verbalisez intérieurement vos actions (« je contrôle, je clignote, je tourne ») pour rester dans le concret.</li><li>Gardez les yeux loin devant : regarder le bout de la rue calme naturellement la conduite.</li><li>Si vous ne comprenez pas une consigne, demandez-la à répéter — c'est autorisé et bien vu.</li></ul>
<h2>Préparer son mental les jours précédents</h2>
<p>La gestion du stress se travaille en amont. Dans la semaine qui précède, visualisez le déroulement de l'examen : le trajet, les manœuvres, l'arrivée au centre. Cette « répétition mentale » réduit l'effet de surprise. Évitez aussi de réviser intensément la veille au soir : une séance légère puis une bonne nuit de sommeil valent mieux qu'un bachotage anxiogène.</p>
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
    title: 'Réussir le code du premier coup : 5 astuces',
    slug: '5-astuces-reussir-code-route-premier-coup',
    excerpt: "35 bonnes réponses sur 40 pour être reçu. Voici les 5 méthodes qui séparent ceux qui décrochent le code du premier coup de ceux qui doivent le repasser.",
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
<h2>Les erreurs de révision les plus fréquentes</h2>
<p>Beaucoup de candidats échouent non par manque de travail, mais à cause d'une méthode inadaptée. La plus courante : enchaîner les séries de tests sans jamais analyser ses fautes. Or chaque erreur corrigée vaut plus que dix bonnes réponses. Prenez l'habitude de lire l'explication de chaque question ratée et de noter les thèmes qui reviennent.</p>
<p>Autre piège : négliger les thématiques moins « visibles » comme les premiers secours, l'éco-conduite, la mécanique ou le partage de la route avec les autres usagers. Elles représentent pourtant une part croissante de l'examen.</p>
<h2>Planifier ses révisions sur 3 à 4 semaines</h2>
<ul><li>Semaines 1-2 : parcourir l'ensemble des thèmes, à raison de 30 minutes par jour.</li><li>Semaine 3 : enchaîner des séries complètes en conditions d'examen (40 questions).</li><li>Semaine 4 : revoir uniquement vos points faibles jusqu'à dépasser régulièrement 35/40.</li></ul>
<p>Le seuil de réussite officiel est de 35 bonnes réponses sur 40 : visez 37 à 38 en entraînement pour aborder l'examen avec une marge confortable.</p>
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
    title: 'Comment choisir son auto-école : 6 critères',
    slug: 'comment-choisir-auto-ecole-criteres-essentiels',
    excerpt: "Forfait affiché, prix des heures supplémentaires, taux de réussite, disponibilité des moniteurs : les 6 critères à vérifier avant de signer — et le piège du forfait trop bas.",
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
<h2>Les questions à poser avant de signer</h2>
<p>Avant de vous engager, demandez systématiquement le contrat de formation détaillé. Quelques questions permettent d'y voir clair :</p>
<ul><li>Le prix affiché inclut-il les frais de présentation à l'examen et le véhicule le jour J ?</li><li>Que se passe-t-il en cas d'échec : les heures supplémentaires sont-elles à tarif normal ?</li><li>Quel est le délai moyen pour obtenir une place d'examen pratique ?</li><li>Votre situation et la formule visée sont-elles éligibles au CPF au regard des règles actuelles ?</li></ul>
<h2>Les signaux qui doivent alerter</h2>
<p>Méfiez-vous des forfaits « tout compris » anormalement bas : ils cachent souvent des frais annexes facturés en cours de route. Un taux de réussite jamais communiqué, l'absence de contrat écrit ou la pression à payer la totalité d'avance sont autant de signaux d'alerte. Une auto-école sérieuse affiche ses tarifs clairement et propose un paiement échelonné, comme le paiement en 2 fois sans frais.</p>
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
<h2>À qui s'adresse vraiment la formation accélérée ?</h2>
<p>Le format intensif donne d'excellents résultats… à condition d'avoir le bon profil. Il convient particulièrement aux candidats disponibles à temps plein sur la période, à l'aise avec un rythme soutenu, et idéalement déjà titulaires du code de la route — car la formation accélérée porte surtout sur la conduite. À l'inverse, si vous avez besoin de temps pour ancrer les automatismes, une formule classique étalée sur quelques mois sera plus rassurante.</p>
<h2>Code, examen et délais : ce qu'il faut anticiper</h2>
<p>Obtenir le permis en 10 jours suppose d'avoir validé le code en amont, ou de le passer juste avant le stage. Il faut aussi une place d'examen pratique disponible à la fin de la formation : c'est souvent ce point, et non la formation elle-même, qui conditionne le délai réel. Renseignez-vous sur les disponibilités d'examen avant de réserver un stage intensif.</p>
<p>Gardez enfin en tête que la réussite n'est jamais garantie par le format : c'est la régularité de la pratique pendant le stage et la qualité du suivi qui font la différence.</p>
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
<h2>Comprendre la grille d'évaluation</h2>
<p>L'examen pratique est noté sur 31 points : il faut en obtenir au moins 20, sans commettre de faute éliminatoire, pour réussir. L'inspecteur évalue notamment votre installation au poste de conduite, le respect des règles, la prise d'information, le partage de la route et votre autonomie. Comprendre cette grille aide à savoir où porter son attention.</p>
<h2>Une faute éliminatoire n'arrive jamais par hasard</h2>
<p>Les fautes éliminatoires les plus fréquentes sont le franchissement d'une ligne continue, le non-respect d'un feu ou d'un stop, et la mise en danger nécessitant l'intervention de l'inspecteur. La bonne nouvelle : elles découlent presque toujours d'un défaut d'anticipation. En regardant loin et en contrôlant régulièrement vos rétroviseurs, vous neutralisez la majorité de ces risques. Et si vous calez, pas de panique : un simple calage n'est pas éliminatoire, redémarrez calmement.</p>
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
    title: 'CPF permis 2026 : conditions, montant et pièces à fournir',
    slug: 'financement-cpf-compte-permis',
    excerpt: "Plafond à 900 €, salariés désormais soumis à un cofinancement : les règles CPF ont changé en 2026. Conditions, montant mobilisable et pièces justificatives à réunir.",
    content: `<p>Le Compte Personnel de Formation (CPF) peut financer une préparation au permis de conduire, mais les conditions ont évolué en 2026. Vérifiez toujours votre situation dans votre espace personnel avant de vous inscrire : l'éligibilité dépend du permis préparé et de votre situation professionnelle.</p>
<h2>Qui peut utiliser son CPF pour le permis B ?</h2>
<p>Depuis le 20 février 2026, la mobilisation du CPF pour les permis du groupe léger, dont le permis B, est réservée aux <strong>demandeurs d'emploi inscrits à France Travail</strong> et aux <strong>salariés bénéficiant d'un financement d'un tiers</strong> (par exemple un abondement de l'employeur, d'un Opco, d'une région ou du FIPHFP).</p>
<p>Un projet professionnel reste nécessaire. La plateforme Mon Compte Formation vérifie également les informations liées au permis avant la validation de la demande.</p>
<h2>Quel montant peut être mobilisé ?</h2>
<p>Pour un permis du groupe léger, les droits CPF mobilisables sont plafonnés à <strong>900 €</strong>. Le reste éventuel peut être complété selon les modalités affichées sur la plateforme et celles convenues avec l'auto-école.</p>
<h2>Formations qui ne sont pas éligibles</h2>
<p>Le CPF ne finance notamment pas les heures complémentaires d'une formation qui n'a pas été achetée initialement via Mon Compte Formation, les stages de récupération de points, les remises à niveau ni la passerelle boîte automatique vers boîte manuelle.</p>
<h2>Comment faire la demande ?</h2>
<h3>1. Vérifiez votre éligibilité</h3>
<p>Connectez-vous sur le site officiel <a href="https://www.moncompteformation.gouv.fr/espace-public/tout-savoir-sur-le-permis-de-conduire" target="_blank" rel="noopener noreferrer">Mon Compte Formation</a>. Consultez les conditions applicables à votre situation avant de choisir une offre.</p>
<h3>2. Consultez l'offre de formation</h3>
<p>Vérifiez que l'offre correspond au permis souhaité, que l'organisme est bien référencé et que le contenu, le prix et les dates vous conviennent. Nos <a href="/tarifs">formules et tarifs</a> permettent de préparer votre échange avec l'auto-école.</p>
<h3>3. Finalisez la demande sur la plateforme</h3>
<p>La demande CPF se réalise dans votre espace personnel. Ne communiquez jamais vos identifiants à un tiers et lisez les informations affichées par la plateforme avant validation.</p>
<h2>Quelles pièces justificatives faut-il fournir ?</h2>
<p>C'est la question qui bloque le plus de dossiers. La demande se fait intégralement en ligne, mais plusieurs éléments doivent être prêts avant de commencer :</p>
<ul><li><strong>Votre identité vérifiée</strong> — la connexion à Mon Compte Formation passe par FranceConnect+. Prévoyez votre pièce d'identité et votre téléphone : c'est l'étape qui prend le plus de temps si vous ne l'avez jamais faite.</li><li><strong>Votre numéro NEPH</strong> — le numéro d'enregistrement préparatoire à l'examen. Si vous n'en avez pas encore, nous nous en chargeons : voir notre <a href="/blog/papiers-inscription-permis-conduire-liste">liste des pièces d'inscription au permis</a>.</li><li><strong>Une déclaration liée à votre projet professionnel</strong> — le permis doit s'inscrire dans un parcours professionnel, et la plateforme vous le fait déclarer.</li><li><strong>Le justificatif de votre situation</strong> — attestation d'inscription à France Travail pour un demandeur d'emploi, ou accord écrit du financeur tiers pour un salarié.</li><li><strong>Un permis ni suspendu ni annulé</strong> — le financement est exclu dans ces situations.</li></ul>
<p>Aucune pièce ne se transmet à l'auto-école : tout passe par votre espace personnel. Méfiez-vous de tout interlocuteur qui vous demanderait vos identifiants ou vos justificatifs par téléphone — c'est le mode opératoire classique de la fraude au CPF.</p>
<h2>Et si le CPF ne couvre pas la formation ?</h2>
<p>Selon votre éligibilité et le montant disponible, un reste à charge peut subsister. Parlez-en avec nous avant votre inscription : nous vous expliquerons les prix de nos formations et les modalités de paiement disponibles, sans promettre de prise en charge.</p>
<h2>À retenir</h2>
<p>Les règles CPF peuvent évoluer. Les conditions publiées par Mon Compte Formation prévalent toujours sur les informations générales de cet article.</p>`,
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
<h2>Pourquoi la nuit concentre autant de risques</h2>
<p>Si le trafic est plus faible la nuit, une part importante des accidents mortels s'y produit. En cause : la fatigue, la baisse de vigilance liée au rythme biologique, et une perception des distances et des vitesses faussée par l'obscurité. La consommation d'alcool, plus fréquente en soirée, aggrave encore ces facteurs. Adapter sa conduite n'est donc pas une précaution accessoire, mais une nécessité.</p>
<h2>Hiver et intempéries : la vigilance renforcée</h2>
<p>En hiver, la nuit tombe tôt et s'ajoute souvent à la pluie, au brouillard ou au verglas. Augmentez vos distances de sécurité, nettoyez régulièrement vos optiques et votre pare-brise, et n'utilisez les feux de brouillard arrière que lorsque la visibilité est réellement réduite, pour ne pas éblouir les véhicules qui vous suivent.</p>
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
<h3>Comment juger la fiabilité d'un modèle</h3>
<p>Plutôt que de vous fier à la réputation d'une marque, vérifiez le modèle précis qui vous intéresse :</p>
<ul><li>Consultez les enquêtes de fiabilité publiées par les associations de consommateurs et la presse spécialisée.</li><li>Renseignez-vous sur le coût des pièces et la disponibilité des garages pour ce modèle.</li><li>Recherchez les pannes récurrentes signalées sur les forums de propriétaires.</li><li>Privilégiez une motorisation éprouvée plutôt qu'une technologie de première génération.</li></ul>
<h3>Kilométrage</h3>
<p>Pour un véhicule d'occasion :</p>
<ul><li>Privilégiez moins de 100 000 km</li><li>Vérifiez le carnet d'entretien</li><li>Faites une contre-expertise</li></ul>
<h2>Neuf ou occasion ?</h2>
<h3>Avantages du neuf</h3>
<ul><li>Garantie constructeur</li><li>Dernières technologies</li><li>Personnalisation possible</li></ul>
<h3>Avantages de l'occasion</h3>
<ul><li>Prix plus bas</li><li>Moins de décote</li><li>Plus de choix</li></ul>
<h2>Le vrai budget d'une première voiture</h2>
<p>Le prix d'achat n'est que la partie visible. Pour un budget réaliste, additionnez l'assurance (souvent élevée pour un jeune conducteur), le carburant, l'entretien, le contrôle technique, les pneus et la décote. Une citadine sobre et fiable coûte ainsi bien moins cher à l'usage qu'une berline puissante achetée d'occasion au même prix.</p>
<h2>Acheter d'occasion sans se tromper</h2>
<ul><li>Vérifiez la cohérence du carnet d'entretien et des factures.</li><li>Contrôlez l'historique administratif du véhicule (rapport Histovec, gratuit et officiel).</li><li>Essayez la voiture à froid, sur route et sur voie rapide.</li><li>En cas de doute, faites réaliser une contre-visite par un professionnel.</li></ul>
<p>Côté assurance, commencer sur un véhicule modeste permet de constituer un bonus qui réduira vos cotisations années après année.</p>
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
<h2>Zones à faibles émissions : ce qui change concrètement</h2>
<p>Les zones à faibles émissions mobilité (ZFE-m) se généralisent dans les grandes agglomérations, dont l'Île-de-France. L'accès y est conditionné à la vignette Crit'Air apposée sur le pare-brise, et les véhicules les plus polluants y sont progressivement interdits. Avant de circuler dans une métropole que vous connaissez mal, vérifiez la réglementation locale et la classe Crit'Air de votre véhicule pour éviter une amende.</p>
<h2>Jeunes conducteurs : un cadre spécifique</h2>
<p>Pendant la période probatoire (3 ans, ou 2 ans après une conduite accompagnée), le permis ne compte d'abord que 6 points, crédités progressivement. Les seuils d'alcoolémie sont abaissés à 0,2 g/L de sang, soit une tolérance quasi nulle. Connaître ces règles fait partie intégrante d'une conduite responsable une fois le permis en poche.</p>
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
<h2>Comprendre le bonus-malus</h2>
<p>Le coefficient de réduction-majoration, ou bonus-malus, récompense les conducteurs sans sinistre responsable. Chaque année sans accident responsable réduit votre coefficient de 5 %, jusqu'à un bonus maximal ; à l'inverse, un sinistre responsable l'augmente. Pour un jeune conducteur, c'est le levier le plus puissant : quelques années de conduite prudente suffisent à faire baisser nettement la cotisation.</p>
<h2>Jeune conducteur : comment limiter la surprime</h2>
<ul><li>Choisir un véhicule peu puissant et peu coûteux à réparer.</li><li>Opter, si possible, pour la conduite accompagnée, qui réduit la surprime initiale.</li><li>Comparer plusieurs devis et ajuster les garanties à la valeur réelle du véhicule.</li><li>Envisager une formule au kilomètre si vous roulez peu.</li></ul>
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
<h2>Fatigue : le danger numéro un sur autoroute</h2>
<p>La monotonie des longs trajets favorise l'« hypovigilance », un état de somnolence qui allonge dangereusement le temps de réaction. La règle est simple : une pause d'au moins 15 à 20 minutes toutes les deux heures, même sans sentir la fatigue. Au moindre signe (bâillements, paupières lourdes, regard qui se fixe), arrêtez-vous sur une aire — quelques minutes de repos valent tous les remèdes de fortune.</p>
<h2>Bien gérer les aires, péages et insertions</h2>
<p>Anticipez vos arrêts en repérant les aires à l'avance plutôt que de décider au dernier moment. Aux péages, ralentissez progressivement et choisissez votre voie tôt (télépéage, carte ou espèces). Lors d'une insertion ou d'une sortie, utilisez toute la longueur de la voie d'accélération ou de décélération : c'est elle qui vous permet d'entrer et de sortir en sécurité, sans gêner le flux.</p>
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
  { id: '8', name: 'Local', slug: 'local' },
]
