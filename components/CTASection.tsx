'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { Phone } from 'lucide-react'
import { siteConfig } from '@/lib/seo/site-config'
import { trackEvent } from '@/lib/analytics'

// Bloc de conversion final : uniquement des preuves vérifiables (permis
// obtenus, avis Google, paiement 2×) — pas de promesses qu'on ne tient pas.
export default function CTASection() {
  const proofs = [
    {
      icon: '/permis.png',
      title: '451 permis obtenus',
      desc: 'Des centaines d’élèves formés et diplômés depuis 2021',
    },
    {
      icon: '/star.png',
      title: '4,9/5 — plus de 300 avis',
      desc: 'La note de nos élèves sur Google, vérifiable en un clic',
    },
    {
      icon: '/payment.png',
      title: 'Paiement en 2 fois sans frais',
      desc: 'Facilitez le financement de votre permis',
    },
  ]

  return (
    <section className="section-padding relative overflow-hidden bg-[#0B0F19]">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center text-white"
        >
          <h2 className="text-4xl lg:text-6xl font-extrabold mb-6">
            Prêt à obtenir votre{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-500 to-pink-500">
              permis
            </span>{' '}
            ?
          </h2>

          <p className="text-xl lg:text-2xl mb-12 max-w-3xl mx-auto text-gray-400">
            Inscrivez-vous en 30 secondes — un conseiller vous rappelle sous 24 h ouvrées.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/s-inscrire"
                onClick={() => trackEvent('cta_click', { location: 'cta_section', target: 's-inscrire' })}
                className="flex items-center gap-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg shadow-pink-500/25 hover:opacity-90 transition-opacity"
              >
                Je commence mon permis dès 799 €
              </Link>
            </motion.div>

            <motion.a
              href={`tel:${siteConfig.phoneTel}`}
              onClick={() => trackEvent('phone_click', { location: 'cta_section' })}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="border border-white/25 bg-white/5 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-all duration-300 flex items-center gap-3"
            >
              <Phone className="h-5 w-5" />
              <span>{siteConfig.phone}</span>
            </motion.a>
          </div>

          {/* Preuves vérifiées */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto"
          >
            {proofs.map((proof) => (
              <div
                key={proof.title}
                className="rounded-2xl border border-white/10 bg-[#151b2e]/80 p-6 text-center"
              >
                <Image
                  src={proof.icon}
                  alt=""
                  width={56}
                  height={56}
                  className="mx-auto mb-4 h-14 w-14 object-contain"
                />
                <h3 className="text-lg font-bold mb-1.5">{proof.title}</h3>
                <p className="text-sm text-gray-400">{proof.desc}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
