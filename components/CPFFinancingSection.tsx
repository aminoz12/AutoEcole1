'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function CPFFinancingSection() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          {/* CPF Card */}
          <div className="bg-neutral rounded-2xl p-8 text-center">
            {/* CPF Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <Image
                src="/cpf.svg"
                alt="Mon Compte Formation"
                width={124}
                height={86}
                className="mx-auto"
              />
            </motion.div>

            {/* Main Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight"
            >
              Financez votre permis avec votre CPF dès <span className="text-primary">100 €</span>.
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-lg text-gray-700 mb-6 leading-relaxed max-w-3xl mx-auto"
            >
              Apprenti ? Salarié ? Indépendant ou en recherche d'emploi ? Grâce à Mon Compte Formation, financez votre permis de conduire pour seulement 100€⁵.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              {/* Primary Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="block mx-auto border-2 border-gray-900 bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-900 hover:text-white transition-all duration-300"
              >
                En savoir plus sur le CPF
              </motion.button>

              {/* Secondary Link */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="block mx-auto text-gray-900 underline font-medium text-lg hover:text-primary transition-colors duration-300"
              >
                M'inscrire et faire une demande
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
