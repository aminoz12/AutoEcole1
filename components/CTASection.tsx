'use client'

import { motion } from 'framer-motion'
import { Phone, Calendar, Car } from 'lucide-react'
import { siteConfig } from '@/lib/seo/site-config'

export default function CTASection() {
  const handleReservationClick = () => {
    window.location.href = '/s-inscrire'
  }

  return (
    <section className="section-padding bg-gradient-to-br from-primary to-orange-600 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center text-white"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-6xl font-bold mb-6"
          >
            Prêt à obtenir votre{' '}
            <span className="text-yellow-300">permis</span> ?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="text-xl lg:text-2xl mb-12 max-w-3xl mx-auto opacity-90"
          >
            Rejoignez les 2 500+ élèves qui nous ont fait confiance. Réservez votre
            première leçon d'essai gratuite et démarrez votre formation dès aujourd'hui.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleReservationClick}
              className="flex items-center gap-2 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg"
              style={{ background: 'linear-gradient(90deg, #3b82f6 0%, #ec4899 100%)', boxShadow: '0 10px 25px rgba(236, 72, 153, 0.5)' }}
            >
              <span>Réserver mon inscription</span>
            </motion.button>

            <motion.a
              href={`tel:${siteConfig.phoneTel}`}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-primary transition-all duration-300 flex items-center space-x-3"
            >
              <Phone className="h-6 w-6" />
              <span>{siteConfig.phone}</span>
            </motion.a>
          </motion.div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Car className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Leçon d'essai offerte</h3>
              <p className="opacity-90">Testez notre pédagogie sans engagement</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Réservation 24h/24</h3>
              <p className="opacity-90">Planifiez vos leçons en ligne, quand vous voulez</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Accompagnement dédié</h3>
              <p className="opacity-90">Une équipe disponible à chaque étape de votre parcours</p>
            </motion.div>
          </motion.div>

          {/* Urgency Message */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, type: 'spring', stiffness: 200 }}
            viewport={{ once: true }}
            className="mt-12 bg-white/10 rounded-2xl p-6 max-w-2xl mx-auto"
          >
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-center"
            >
              <h4 className="text-lg font-bold mb-2">
                Offre de lancement : -20 % sur votre première leçon
              </h4>
              <p className="opacity-90">
                Mentionnez le code <span className="font-bold">AUTO2026</span> lors de votre inscription
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
