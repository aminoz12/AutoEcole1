'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, HelpCircle, MapPin, Navigation, ExternalLink } from 'lucide-react'
import { useState } from 'react'

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const location = {
    address: "375 Av. de la République, 92000 Nanterre, France",
    coordinates: {
      lat: 48.9107144,
      lng: 2.219769
    }
  }

  const handleGoogleMaps = () => {
    window.open('https://www.google.com/maps/dir//375+Av.+de+la+R%C3%A9publique,+92000+Nanterre,+France/@48.9106857,2.1373678,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x47e664449db77411:0xe51488f1707793cd!2m2!1d2.219769!2d48.9107144?entry=ttu&g_ep=EgoyMDI1MTAwNy4wIKXMDSoASAFQAw%3D%3D', '_blank')
  }

  const handleWaze = () => {
    window.open(`https://waze.com/ul?ll=${location.coordinates.lat},${location.coordinates.lng}&navigate=yes`, '_blank')
  }

  const handleAppleMaps = () => {
    window.open(`https://maps.apple.com/?daddr=${location.coordinates.lat},${location.coordinates.lng}`, '_blank')
  }

  const faqs = [
    {
      question: 'Combien coûte une leçon de conduite ?',
      answer: 'Nos tarifs varient selon la formule choisie. Une leçon à l\'unité coûte 45€, mais nous proposons des packs plus avantageux : 10 leçons pour 420€ (soit 42€/leçon) et une formation complète jusqu\'au permis pour 1,200€. Tous nos tarifs incluent l\'assurance et l\'essence.',
    },
    {
      question: 'Quels sont les horaires de cours ?',
      answer: 'Nous proposons des cours 7 jours sur 7, de 7h à 22h, pour s\'adapter à votre emploi du temps. Vous pouvez réserver vos leçons en ligne ou par téléphone selon vos disponibilités.',
    },
    {
      question: 'Quels documents faut-il pour s\'inscrire ?',
      answer: 'Pour commencer votre formation, vous devez fournir : une pièce d\'identité, une photo d\'identité récente, un justificatif de domicile de moins de 3 mois, et votre numéro NEPH (Numéro d\'Enregistrement Préfectoral Harmonisé) si vous avez déjà passé le code.',
    },
    {
      question: 'Combien de temps faut-il pour obtenir le permis ?',
      answer: 'La durée varie selon votre rythme d\'apprentissage et votre disponibilité. En moyenne, nos élèves obtiennent leur permis en 3-6 mois avec 2-3 leçons par semaine. Nous vous accompagnons jusqu\'à l\'obtention du permis avec notre formation complète.',
    },
    {
      question: 'Proposez-vous des cours de code de la route ?',
      answer: 'Oui, nous proposons des cours de code de la route en salle avec nos moniteurs, ainsi qu\'un accès à notre plateforme en ligne pour réviser à votre rythme. Le code est inclus dans nos packs de formation.',
    },
    {
      question: 'Que se passe-t-il si je rate mon examen ?',
      answer: 'Si vous échouez à l\'examen pratique, nous continuons à vous accompagner avec des leçons supplémentaires. Avec notre formation complète, vous bénéficiez d\'une garantie de réussite et nous vous préparons jusqu\'à l\'obtention du permis.',
    },
    {
      question: 'Puis-je changer de moniteur ?',
      answer: 'Absolument ! Si vous souhaitez changer de moniteur pour des raisons de compatibilité ou d\'emploi du temps, nous ferons notre maximum pour vous proposer un autre instructeur qui vous convient mieux.',
    },
    {
      question: 'Vos véhicules sont-ils assurés ?',
      answer: 'Oui, tous nos véhicules sont parfaitement assurés pour la formation à la conduite. Vous conduisez en toute sécurité et n\'avez aucune responsabilité en cas d\'accident pendant vos leçons.',
    },
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center space-x-3 mb-6">
            <HelpCircle className="h-8 w-8 text-primary" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
              Questions <span className="text-primary">fréquentes</span>
            </h2>
          </div>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Trouvez les réponses aux questions les plus courantes sur notre formation à la conduite.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Column - Map Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <div className="bg-gray-100 rounded-2xl p-4 sm:p-6 shadow-lg">
              {/* Live Google Maps */}
              <div className="aspect-video rounded-xl mb-4 overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2622.123456789!2d2.219769!3d48.9107144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e664449db77411%3A0xe51488f1707793cd!2s375%20Av.%20de%20la%20R%C3%A9publique%2C%2092000%20Nanterre%2C%20France!5e0!3m2!1sen!2sfr!4v1234567890123!5m2!1sen!2sfr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localisation AutoEcole Pro - 375 Av. de la République, Nanterre"
                ></iframe>
              </div>
              
              {/* Address */}
              <div className="flex items-start space-x-3 mb-4 sm:mb-6">
                <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-900 font-semibold text-sm sm:text-base">Notre Adresse</p>
                  <p className="text-gray-600 text-xs sm:text-sm">{location.address}</p>
                </div>
              </div>

              {/* Nous Localiser Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleGoogleMaps}
                className="w-full bg-primary hover:bg-primary/90 text-white px-4 sm:px-6 py-3 sm:py-4 rounded-lg font-semibold flex items-center justify-center space-x-2 sm:space-x-3 transition-colors duration-300 text-sm sm:text-base"
              >
                <Navigation className="h-4 w-4 sm:h-5 sm:w-5" />
                <span>Nous Localiser</span>
              </motion.button>
            </div>
          </motion.div>

          {/* Right Column - FAQ */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-neutral rounded-xl overflow-hidden"
                >
                  <motion.button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-4 sm:px-6 py-4 sm:py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-300"
                    whileHover={{ backgroundColor: 'rgba(0,0,0,0.02)' }}
                  >
                  <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                    <motion.div
                      animate={{ rotate: openIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex-shrink-0"
                    >
                      <ChevronDown className="h-5 w-5 text-gray-600" />
                    </motion.div>
                  </motion.button>

                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <div className="px-4 sm:px-6 pb-4 sm:pb-6">
                          <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-primary to-orange-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Vous avez d'autres questions ?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Notre équipe est là pour vous accompagner et répondre à toutes vos interrogations.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-primary px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Nous contacter
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

