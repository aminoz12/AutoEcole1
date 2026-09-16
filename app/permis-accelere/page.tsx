import type { Metadata } from 'next'
import Image from 'next/image'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CallbackForm from '@/components/CallbackForm'
import { JsonLd, BreadcrumbJsonLd, FAQPageJsonLd } from '@/components/seo/JsonLd'
import { createPageMetadata } from '@/lib/seo/metadata'
import { siteConfig, absoluteUrl } from '@/lib/seo/site-config'
import { accelereSharedFaqs } from '@/lib/content/permis-accelere-data'
import {
  AccelereOffersGrid,
  AccelereSteps,
  AccelereFaqList,
  AccelereCta,
  AccelereCityLinks,
} from '@/components/accelere/AccelereSections'

// Page pilier « permis accéléré » — cible les requêtes permis rapide /
// permis en accéléré / stage intensif, et sert de lien annexe Google Ads.
export const metadata: Metadata = createPageMetadata({
  title: 'Permis accéléré à Nanterre — permis rapide dès 1 199 €',
  description:
    'Passez votre permis en accéléré à Nanterre : stage intensif code + conduite, boîte auto dès 1 199 €, manuelle 1 559 €, date d’examen prioritaire. Paiement 2×.',
  path: '/permis-accelere',
  keywords: [
    'permis accéléré',
    'permis rapide',
    'permis en accéléré',
    'stage permis intensif',
    'permis accéléré Nanterre',
    'permis accéléré 92',
  ],
})

const mainFaqs = [
  ...accelereSharedFaqs,
  {
    question: 'Qu’est-ce que la Représentation Rapide ?',
    answer:
      'Une formule dédiée aux candidats ayant récemment échoué à l’examen : un stage court (1 à 3 jours, 4h de formation) avec une nouvelle date d’examen garantie sous 3 à 10 jours après le stage. À partir de 749 €.',
  },
  {
    question: 'Puis-je payer mon permis accéléré en plusieurs fois ?',
    answer:
      'Oui — toutes nos formules, accélérées comprises, sont payables en 2 fois sans frais, directement auprès de l’auto-école. Le CPF peut aussi financer la formation selon votre éligibilité.',
  },
]

export default function PermisAccelerePage() {
  return (
    <main className="min-h-screen bg-[#0B0F19] pt-20">
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          '@id': `${absoluteUrl('/permis-accelere')}#service`,
          serviceType: 'Formation accélérée au permis de conduire',
          name: `Permis accéléré à Nanterre — ${siteConfig.name}`,
          description:
            'Stage intensif code + conduite pour obtenir le permis B en quelques semaines : boîte manuelle ou automatique, date d’examen prioritaire.',
          url: absoluteUrl('/permis-accelere'),
          provider: { '@id': `${siteConfig.url}/#organization` },
          areaServed: { '@type': 'City', name: siteConfig.address.city },
          availableChannel: {
            '@type': 'ServiceChannel',
            serviceUrl: absoluteUrl('/s-inscrire'),
            servicePhone: `+33${siteConfig.phoneTel.replace(/^0/, '')}`,
          },
        }}
      />
      <BreadcrumbJsonLd
        items={[
          { name: 'Accueil', path: '/' },
          { name: 'Permis accéléré', path: '/permis-accelere' },
        ]}
      />
      <FAQPageJsonLd faqs={mainFaqs} />
      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden bg-[#0B0F19] pt-12 lg:pt-16">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="container relative z-10 mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 font-poppins text-sm font-semibold uppercase tracking-wider text-primary">
              Stage intensif — Nanterre (92)
            </p>
            <h1 className="font-poppins text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
              Permis accéléré&nbsp;:{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-500 to-pink-500">
                votre permis rapide
              </span>
              , en quelques semaines
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-gray-400">
              Besoin du permis pour un emploi, une mutation, une rentrée&nbsp;? Notre formation en
              accéléré concentre code intensif et conduite rapprochée sur quelques semaines — dès
              1&nbsp;199&nbsp;€ en boîte automatique, avec une date d’examen réservée dès que vous
              êtes prêt(e).
            </p>
            <div className="mt-7">
              <AccelereCta />
            </div>

            {/* Preuves */}
            <div className="mx-auto mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-gray-400">
              <span>✓ 451 permis obtenus</span>
              <span className="inline-flex items-center gap-1.5">
                <Image src="/star.png" alt="" width={18} height={18} className="h-[18px] w-[18px] object-contain" />
                4,9/5 — plus de 300 avis Google
              </span>
              <span>✓ Paiement en 2 fois sans frais</span>
            </div>
          </div>

          <div className="mx-auto mt-12 max-w-xl overflow-hidden rounded-2xl border border-white/10">
            <Image
              src="/permisaccimages/POSTEREFEF.png"
              alt="Permis accéléré à Nanterre — service rapide de l'Auto École Des Pâquerettes"
              width={1240}
              height={1240}
              className="h-auto w-full object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Forfaits */}
      <section id="forfaits" className="scroll-mt-28 py-14">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-3 text-center font-poppins text-2xl font-bold text-white sm:text-3xl">
              Nos forfaits permis accéléré
            </h2>
            <p className="mb-8 text-center text-sm text-gray-400 md:text-base">
              Code intensif inclus — choisissez votre boîte et votre volume d’heures
            </p>
            <AccelereOffersGrid />
          </div>
        </div>
      </section>

      {/* Déroulé */}
      <section className="py-14">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl">
            <h2 className="mb-3 text-center font-poppins text-2xl font-bold text-white sm:text-3xl">
              Le permis en accéléré, comment ça marche&nbsp;?
            </h2>
            <p className="mb-8 text-center text-sm text-gray-400 md:text-base">
              Un cadre clair du premier jour à l’examen — vous connaissez le calendrier dès le départ
            </p>
            <AccelereSteps />
          </div>
        </div>
      </section>

      {/* Guide complet — profondeur éditoriale pour les requêtes informationnelles */}
      <section className="py-14">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl space-y-10 text-gray-300">
            <div>
              <h2 className="mb-4 font-poppins text-2xl font-bold text-white sm:text-3xl">
                Le permis accéléré, dans le détail
              </h2>
              <p>
                Avant de vous lancer, voici tout ce qu&apos;il faut savoir sur la formation
                accélérée&nbsp;: en quoi elle diffère d&apos;une formation classique, quelle boîte
                choisir pour aller vite, les conditions d&apos;inscription, les délais réels et les
                solutions de financement.
              </p>
            </div>

            <div>
              <h3 className="mb-3 font-poppins text-xl font-bold text-white">
                Permis accéléré ou formation classique&nbsp;: quelle différence&nbsp;?
              </h3>
              <p className="mb-4">
                Le programme est exactement le même&nbsp;: mêmes compétences du référentiel
                officiel (REMC), mêmes moniteurs diplômés d&apos;État, même examen. Ce qui change,
                c&apos;est la densité. En formation classique, une à deux leçons par semaine étalent
                l&apos;apprentissage sur plusieurs mois — et chaque longue pause coûte des heures de
                remise à niveau. En accéléré, les séances rapprochées entretiennent les
                automatismes&nbsp;: on oublie moins entre deux leçons, donc on progresse plus vite
                à volume d&apos;heures égal.
              </p>
              <p>
                Le format intensif convient aux candidats disponibles plusieurs créneaux par
                semaine, avec une échéance claire&nbsp;: embauche, alternance, mutation, rentrée.
                Si vous préférez ancrer les acquis sur la durée, une formule classique reste un bon
                choix — nous détaillons les deux approches dans notre article{' '}
                <a href="/blog/permis-conduire-10-jours-possible" className="text-primary underline-offset-4 hover:underline">
                  «&nbsp;Permis accéléré&nbsp;: avoir son permis rapidement&nbsp;»
                </a>
                .
              </p>
            </div>

            <div className="overflow-hidden rounded-2xl border border-white/10">
              <Image
                src="/permisaccimages/PERMISACC1.jpeg"
                alt="Jeune conductrice montrant son permis de conduire obtenu après une formation accélérée"
                width={1500}
                height={1000}
                className="h-auto w-full object-cover"
              />
            </div>

            <div>
              <h3 className="mb-3 font-poppins text-xl font-bold text-white">
                Boîte automatique ou manuelle pour un permis rapide&nbsp;?
              </h3>
              <p className="mb-4">
                Si la vitesse est votre priorité, la boîte automatique est la voie la plus
                courte&nbsp;: le minimum légal est de <strong className="text-white">13 heures</strong> de
                conduite contre 20 en manuelle, et l&apos;apprentissage est plus simple — pas
                d&apos;embrayage, pas de calage, toute l&apos;attention va à la route. C&apos;est
                notre forfait accéléré le plus rapide et le plus accessible, à 1&nbsp;199&nbsp;€.
              </p>
              <p>
                Depuis mars 2024, la passerelle de 7&nbsp;heures vers la boîte manuelle est
                accessible <strong className="text-white">sans délai d&apos;attente</strong> après
                l&apos;obtention — le choix de l&apos;automatique n&apos;est donc plus un
                enfermement. Gardez la manuelle d&apos;emblée si votre futur métier impose des
                véhicules à boîte mécanique. Notre comparatif complet&nbsp;:{' '}
                <a href="/blog/permis-boite-automatique-ou-manuelle-choisir" className="text-primary underline-offset-4 hover:underline">
                  boîte automatique ou manuelle, que choisir&nbsp;?
                </a>
              </p>
            </div>

            <div>
              <h3 className="mb-3 font-poppins text-xl font-bold text-white">
                Les conditions pour s&apos;inscrire en accéléré
              </h3>
              <p className="mb-4">
                Les conditions sont celles du permis B classique&nbsp;: l&apos;examen pratique se
                passe dès 17&nbsp;ans, et l&apos;inscription nécessite une pièce d&apos;identité,
                une photo-signature numérique, un justificatif de domicile et, si vous avez déjà un
                dossier, votre numéro NEPH — la liste complète est dans notre article sur{' '}
                <a href="/blog/papiers-inscription-permis-conduire-liste" className="text-primary underline-offset-4 hover:underline">
                  les papiers d&apos;inscription au permis
                </a>
                . Nous ouvrons et suivons votre dossier sur{' '}
                <a href="https://ants.gouv.fr" target="_blank" rel="noopener noreferrer" className="text-primary underline-offset-4 hover:underline">
                  ANTS
                </a>{' '}
                pour vous — c&apos;est compris dans les frais de constitution de dossier.
              </p>
              <p>
                Bon à savoir&nbsp;: un code de la route obtenu il y a moins de 5&nbsp;ans reste
                valable (jusqu&apos;à 5 présentations à la pratique). Dans ce cas, le stage se
                concentre uniquement sur la conduite et va d&apos;autant plus vite. Les règles
                officielles du permis sont détaillées sur{' '}
                <a href="https://www.service-public.fr/particuliers/vosdroits/N530" target="_blank" rel="noopener noreferrer" className="text-primary underline-offset-4 hover:underline">
                  service-public.fr
                </a>
                .
              </p>
            </div>

            <div>
              <h3 className="mb-3 font-poppins text-xl font-bold text-white">
                Combien de temps faut-il vraiment&nbsp;?
              </h3>
              <p className="mb-4">
                Soyons précis, car c&apos;est la question qui décide tout. La formation elle-même se
                compresse bien&nbsp;: séances de code intensif sur deux à quatre semaines si vous
                partez de zéro (l&apos;examen théorique se passe en centre agréé, souvent sous
                quelques jours —{' '}
                <a href="/blog/ou-passer-code-route-centres-prix-delais" className="text-primary underline-offset-4 hover:underline">
                  où passer le code, prix et délais
                </a>
                ), puis 13 à 20&nbsp;heures de conduite concentrées sur deux à quatre semaines
                également.
              </p>
              <p>
                Ce qui ne se compresse pas, c&apos;est l&apos;administratif et la place
                d&apos;examen — d&apos;où l&apos;intérêt de notre organisation&nbsp;: la date se
                réserve dès que votre niveau est validé à l&apos;examen blanc. Au total, un
                candidat disponible qui part de zéro obtient généralement son permis en{' '}
                <strong className="text-white">4 à 8 semaines</strong>&nbsp;; avec un code déjà en
                poche, quelques semaines suffisent.
              </p>
            </div>

            <div>
              <h3 className="mb-3 font-poppins text-xl font-bold text-white">
                Financer son permis accéléré
              </h3>
              <p>
                Toutes nos formules accélérées sont payables en{' '}
                <strong className="text-white">2 fois sans frais</strong>, directement auprès de
                l&apos;auto-école. Selon votre situation, le CPF peut financer tout ou partie de la
                formation — vérifiez votre solde sur{' '}
                <a href="https://www.moncompteformation.gouv.fr" target="_blank" rel="noopener noreferrer" className="text-primary underline-offset-4 hover:underline">
                  moncompteformation.gouv.fr
                </a>
                &nbsp;; et d&apos;autres aides existent (France Travail, aides régionales, permis à
                1&nbsp;€ selon l&apos;âge), recensées dans notre guide{' '}
                <a href="/blog/aides-financement-permis-conduire-2026" className="text-primary underline-offset-4 hover:underline">
                  des aides au financement du permis
                </a>
                .
              </p>
            </div>

            <div>
              <h3 className="mb-3 font-poppins text-xl font-bold text-white">
                Déjà échoué à l&apos;examen&nbsp;? La Représentation Rapide
              </h3>
              <p>
                Si vous avez récemment échoué à l&apos;épreuve pratique, inutile de repayer une
                formation complète&nbsp;: notre formule{' '}
                <a href="#forfaits" className="text-primary underline-offset-4 hover:underline">
                  Représentation Rapide
                </a>{' '}
                (dès 749&nbsp;€) concentre un stage de 1 à 3&nbsp;jours — 4&nbsp;heures de
                formation ciblées sur votre bilan de compétences — et garantit une nouvelle date
                d&apos;examen sous 3 à 10&nbsp;jours après le stage. Nos conseils pour transformer
                un échec en réussite&nbsp;:{' '}
                <a href="/blog/echec-permis-que-faire-apres" className="text-primary underline-offset-4 hover:underline">
                  que faire après un échec au permis
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Capture de lead */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <CallbackForm
              source="accelere:main"
              title="Votre permis presse ? On vous rappelle"
              subtitle="Laissez votre numéro — un conseiller vous rappelle sous 24 h ouvrées pour construire votre planning intensif et bloquer vos dates."
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-6 text-center font-poppins text-2xl font-bold text-white sm:text-3xl">
              Questions fréquentes sur le <span className="text-primary">permis accéléré</span>
            </h2>
            <AccelereFaqList faqs={mainFaqs} />
          </div>
        </div>
      </section>

      {/* Maillage interne vers les déclinaisons locales */}
      <section className="py-10 pb-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <AccelereCityLinks />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
