'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export default function CPFFinancingSection() {
  return (
    <section id="cpf" className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="bg-neutral rounded-2xl p-8 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <Image
                src="/cpf.svg"
                alt="Logo Mon Compte Formation — financement CPF"
                width={124}
                height={86}
                className="mx-auto"
              />
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight"
            >
              Financez votre permis avec le CPF à partir de{' '}
              <span className="text-primary">100 €</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-lg text-gray-700 mb-6 leading-relaxed max-w-3xl mx-auto"
            >
              Salarié, indépendant, demandeur d'emploi ou apprenti : utilisez vos droits
              CPF sur Mon Compte Formation pour financer tout ou partie de votre permis de
              conduire. Nous vous accompagnons dans chaque étape de la demande.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <motion.a
                href="https://www.moncompteformation.gouv.fr/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="block mx-auto border-2 border-gray-900 bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-900 hover:text-white transition-all duration-300 w-fit"
              >
                En savoir plus sur le CPF
              </motion.a>

              <Link
                href="/s-inscrire"
                className="block mx-auto text-gray-900 underline font-medium text-lg hover:text-primary transition-colors duration-300 w-fit"
              >
                M'inscrire et lancer ma demande CPF
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
