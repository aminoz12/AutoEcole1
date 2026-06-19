import type { Metadata } from 'next'
import Link from 'next/link'
import { Award, ShieldCheck, MapPin, Users, Star, Clock } from 'lucide-react'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { JsonLd, BreadcrumbJsonLd } from '@/components/seo/JsonLd'
import { createPageMetadata } from '@/lib/seo/metadata'
import { siteConfig, absoluteUrl } from '@/lib/seo/site-config'

export const metadata: Metadata = createPageMetadata({
  title: 'À propos — Notre auto-école à Nanterre',
  description:
    'Auto Ecole Des Paquerettes : plus de 15 ans d’expérience à Nanterre, agrément préfectoral E 2209200030, certification Qualiopi et plus de 2 500 permis délivrés. Découvrez notre école et notre approche.',
  path: '/a-propos',
  keywords: ['auto-école Nanterre', 'à propos auto-école', 'agrément Qualiopi', 'moniteurs diplômés Nanterre'],
})

const stats = [
  { icon: Clock, value: '15+ ans', label: 'd’expérience à Nanterre' },
  { icon: Users, value: '2 500+', label: 'permis délivrés' },
  { icon: Star, value: '4.9/5', label: 'sur plus de 300 avis vérifiés' },
  { icon: ShieldCheck, value: 'Qualiopi', label: 'organisme certifié' },
]

export default function AProposPage() {
  return (
    <main className="min-h-screen bg-[#0B0F19] pt-20">
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'AboutPage',
          '@id': `${siteConfig.url}/a-propos#aboutpage`,
          url: absoluteUrl('/a-propos'),
          name: `À propos — ${siteConfig.name}`,
          description:
            'Présentation de Auto Ecole Des Paquerettes, auto-école à Nanterre : expérience, agrément préfectoral, certification Qualiopi et approche pédagogique.',
          inLanguage: 'fr-FR',
          isPartOf: { '@id': `${siteConfig.url}/#website` },
          about: { '@id': `${siteConfig.url}/#organization` },
        }}
      />
      <BreadcrumbJsonLd
        items={[
          { name: 'Accueil', path: '/' },
          { name: 'À propos', path: '/a-propos' },
        ]}
      />
      <Header />

      {/* Hero */}
      <section className="bg-[#0B0F19] pt-10 lg:pt-14">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-poppins text-3xl font-extrabold text-white sm:text-4xl">
              Votre auto-école de confiance à <span className="text-primary">Nanterre</span>
            </h1>
            <p className="mx-auto mt-4 text-gray-400">
              Depuis plus de 15 ans, Auto Ecole Des Paquerettes accompagne les habitants de Nanterre
              et des Hauts-de-Seine vers la réussite de leur permis de conduire — avec une pédagogie
              patiente, des formules transparentes et un suivi jusqu’au jour de l’examen.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto grid max-w-4xl grid-cols-2 gap-4 lg:grid-cols-4">
            {stats.map((s) => {
              const Icon = s.icon
              return (
                <div
                  key={s.label}
                  className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center"
                >
                  <Icon className="mx-auto mb-3 h-7 w-7 text-primary" />
                  <div className="font-poppins text-2xl font-bold text-white">{s.value}</div>
                  <div className="mt-1 text-sm text-gray-400">{s.label}</div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-8 lg:py-12">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl space-y-6 text-gray-300">
            <h2 className="font-poppins text-2xl font-bold text-white sm:text-3xl">Notre histoire</h2>
            <p>
              Implantée au <strong>375 Avenue de la République à Nanterre</strong>, notre auto-école
              est un acteur local reconnu de la formation à la conduite. Au fil des années, nous avons
              accompagné plus de 1 000 élèves et délivré plus de 2 500 permis, en restant fidèles à une
              conviction simple : chaque élève progresse à son rythme, avec un moniteur qui le connaît.
            </p>
            <p>
              Nous formons aussi bien en <strong>boîte manuelle</strong> qu’en{' '}
              <strong>boîte automatique</strong>, proposons la <strong>conduite accompagnée (AAC)</strong>{' '}
              dès 15 ans, et préparons au code de la route en salle comme en ligne. Nos formules sont
              affichées clairement et payables en 2 fois sans frais.
            </p>

            <h2 className="pt-4 font-poppins text-2xl font-bold text-white sm:text-3xl">
              Nos agréments et certifications
            </h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Award className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <span>
                  <strong>Agrément préfectoral E 2209200030</strong> — établissement autorisé à
                  enseigner la conduite et la sécurité routière.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <span>
                  <strong>Certification Qualiopi</strong> — gage de qualité reconnu par l’État,
                  ouvrant droit au financement CPF des formations éligibles.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <span>
                  Une école <strong>ancrée à Nanterre</strong>, au service de Rueil-Malmaison,
                  Courbevoie, Colombes, Puteaux, Suresnes et des communes voisines.
                </span>
              </li>
            </ul>

            <h2 className="pt-4 font-poppins text-2xl font-bold text-white sm:text-3xl">
              Notre équipe pédagogique
            </h2>
            <p>
              Nos enseignants sont <strong>diplômés d’État</strong> (titre professionnel ECSR /
              BEPECASER) et formés à une pédagogie bienveillante. Patients et à l’écoute, ils adaptent
              chaque leçon à votre niveau et vous préparent sereinement, jusqu’à l’examen blanc en
              conditions réelles sur les parcours officiels.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl rounded-2xl border border-white/10 bg-white/5 p-8 text-center">
            <h2 className="font-poppins text-2xl font-bold text-white">Prêt à démarrer&nbsp;?</h2>
            <p className="mx-auto mt-3 max-w-xl text-gray-400">
              Rejoignez les élèves qui nous ont fait confiance pour décrocher leur permis à Nanterre.
            </p>
            <div className="mt-6 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/s-inscrire"
                className="rounded-full bg-gradient-to-r from-purple-600 to-purple-400 px-8 py-3 text-center font-poppins font-semibold text-white shadow-lg shadow-purple-500/25 transition hover:opacity-90"
              >
                S’inscrire en ligne
              </Link>
              <Link
                href="/tarifs"
                className="rounded-full border border-white/20 bg-white/5 px-8 py-3 text-center font-poppins font-semibold text-white transition hover:border-primary hover:bg-white/10"
              >
                Voir nos tarifs
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
