import type { Metadata } from 'next'
import Link from 'next/link'
import { Bike, ShieldCheck, MapPin, Clock, Phone } from 'lucide-react'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { JsonLd, BreadcrumbJsonLd, FAQPageJsonLd } from '@/components/seo/JsonLd'
import { createPageMetadata } from '@/lib/seo/metadata'
import { siteConfig, absoluteUrl } from '@/lib/seo/site-config'
import { motoLicences, motoFaqs } from '@/lib/content/moto-data'

export const metadata: Metadata = createPageMetadata({
  title: 'Permis moto à Nanterre — A1, A2 et BSR',
  description:
    'Moto-école à Nanterre (92) : permis A1, A2, passerelle A, BSR/permis AM et formation 125 pour les titulaires du permis B. Plateau et circulation dans les Hauts-de-Seine.',
  path: '/permis-moto',
  keywords: [
    'permis moto Nanterre',
    'moto école Nanterre',
    'BSR Nanterre',
    'permis A2 92',
    'permis 125 Nanterre',
  ],
})

export default function PermisMotoPage() {
  return (
    <main className="min-h-screen bg-[#0B0F19] pt-20">
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          '@id': `${absoluteUrl('/permis-moto')}#service`,
          serviceType: 'Formation au permis moto',
          name: `Permis moto à Nanterre — ${siteConfig.name}`,
          description:
            'Formation au permis moto à Nanterre : permis AM (BSR), A1, A2, passerelle A2 vers A et formation 125 cm³ pour les titulaires du permis B.',
          url: absoluteUrl('/permis-moto'),
          provider: { '@id': `${siteConfig.url}/#organization` },
          areaServed: { '@type': 'City', name: 'Nanterre' },
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
          { name: 'Permis moto', path: '/permis-moto' },
        ]}
      />
      <FAQPageJsonLd faqs={motoFaqs} />
      <Header />

      {/* Hero */}
      <section className="bg-[#0B0F19] pt-10 lg:pt-14">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 font-poppins text-sm font-semibold uppercase tracking-wider text-primary">
              Hauts-de-Seine (92)
            </p>
            <h1 className="font-poppins text-3xl font-extrabold text-white sm:text-4xl">
              Permis moto à <span className="text-primary">Nanterre</span>
            </h1>
            <p className="mx-auto mt-4 text-gray-400">
              Du BSR à 14 ans jusqu’à la passerelle vers le permis A, nous formons aux deux-roues
              à Nanterre et dans les Hauts-de-Seine — plateau sur aire sécurisée, circulation sur
              les axes où se déroulent réellement les examens du secteur.
            </p>
            <div className="mt-7 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/s-inscrire"
                className="rounded-full bg-gradient-to-r from-purple-600 to-purple-400 px-8 py-3 text-center font-poppins font-semibold text-white shadow-lg shadow-purple-500/25 transition hover:opacity-90"
              >
                S’inscrire en ligne
              </Link>
              <a
                href={`tel:${siteConfig.phoneTel}`}
                className="flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-3 text-center font-poppins font-semibold text-white transition hover:border-primary hover:bg-white/10"
              >
                <Phone className="h-4 w-4" />
                {siteConfig.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Les permis */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-center font-poppins text-2xl font-bold text-white sm:text-3xl">
              Quel permis moto pour vous&nbsp;?
            </h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {motoLicences.map((licence) => (
                <div
                  key={licence.code}
                  className="rounded-2xl border border-white/10 bg-white/5 p-6"
                >
                  <div className="mb-3 flex items-center gap-3">
                    <span className="rounded-full bg-primary/20 px-3 py-1 font-poppins text-xs font-bold text-primary">
                      {licence.code}
                    </span>
                    <span className="text-sm text-gray-400">{licence.age}</span>
                  </div>
                  <h3 className="font-poppins text-lg font-bold text-white">{licence.name}</h3>
                  <p className="mt-2 text-sm text-gray-300">{licence.scope}</p>
                  <p className="mt-3 flex items-start gap-2 text-sm text-gray-400">
                    <Clock className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    {licence.training}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Déroulé */}
      <section className="py-8 lg:py-12">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl space-y-6 text-gray-300">
            <h2 className="font-poppins text-2xl font-bold text-white sm:text-3xl">
              Comment se déroule la formation
            </h2>
            <p>
              Le parcours moto se décompose en trois temps. D’abord l’<strong>épreuve théorique
              moto (ETM)</strong> : depuis mars 2020, elle a remplacé le code commun et porte
              spécifiquement sur la conduite à deux-roues, l’équipement et la sécurité.
            </p>
            <p>
              Vient ensuite le <strong>plateau</strong>, sur aire fermée : maniabilité à allure
              lente puis rapide, freinage d’urgence, évitement et vérifications techniques. C’est
              la partie qui demande le plus de répétition, et celle où le nombre d’heures fait la
              différence.
            </p>
            <p>
              Enfin la <strong>circulation</strong>, sur route ouverte, en autonomie et en liaison
              radio avec l’inspecteur. Nos leçons se déroulent sur les axes de Nanterre et des
              communes voisines — giratoires, insertions, voies rapides — c’est-à-dire le terrain
              des parcours d’examen des Hauts-de-Seine.
            </p>

            <h2 className="pt-4 font-poppins text-2xl font-bold text-white sm:text-3xl">
              Vous avez déjà le permis B&nbsp;?
            </h2>
            <p>
              Si vous détenez le permis voiture depuis au moins deux ans, une{' '}
              <strong>formation de 7 heures</strong> suffit pour conduire une 125 cm³ ou un
              scooter à trois roues — sans examen ni épreuve théorique. C’est la formule la plus
              demandée par nos élèves déjà motorisés, et souvent la porte d’entrée vers un permis
              A2 par la suite.
            </p>

            <h2 className="pt-4 font-poppins text-2xl font-bold text-white sm:text-3xl">
              Nos engagements
            </h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <span>
                  <strong>Agrément préfectoral E 2209200030</strong> et certification Qualiopi —
                  les mêmes garanties que pour nos formations voiture.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Bike className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <span>
                  <strong>Plateau sur aire sécurisée</strong>, dédiée à la maniabilité, avant tout
                  passage en circulation.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <span>
                  Une école <strong>ancrée à Nanterre</strong>, au service de Puteaux, Suresnes,
                  Colombes, Rueil-Malmaison, Courbevoie et des communes voisines.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-8 lg:py-12">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-8 font-poppins text-2xl font-bold text-white sm:text-3xl">
              Questions fréquentes
            </h2>
            <div className="space-y-4">
              {motoFaqs.map((faq) => (
                <div
                  key={faq.question}
                  className="rounded-2xl border border-white/10 bg-white/5 p-6"
                >
                  <h3 className="font-poppins font-semibold text-white">{faq.question}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-400">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl rounded-2xl border border-white/10 bg-white/5 p-8 text-center">
            <h2 className="font-poppins text-2xl font-bold text-white">
              Prêt à démarrer votre formation moto&nbsp;?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-gray-400">
              Appelez-nous pour connaître les tarifs à jour et les disponibilités de plateau, ou
              lancez votre inscription en ligne.
            </p>
            <div className="mt-6 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/s-inscrire"
                className="rounded-full bg-gradient-to-r from-purple-600 to-purple-400 px-8 py-3 text-center font-poppins font-semibold text-white shadow-lg shadow-purple-500/25 transition hover:opacity-90"
              >
                S’inscrire en ligne
              </Link>
              <Link
                href="/contact"
                className="rounded-full border border-white/20 bg-white/5 px-8 py-3 text-center font-poppins font-semibold text-white transition hover:border-primary hover:bg-white/10"
              >
                Nous contacter
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
