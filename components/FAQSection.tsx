'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, MapPin, Navigation } from 'lucide-react'
import { useState } from 'react'
import { homepageFaqs } from '@/lib/content/faq-data'
import { siteConfig } from '@/lib/seo/site-config'

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const [selectedLocation, setSelectedLocation] = useState<'nanterre'>('nanterre')

  const locations = {
    nanterre: {
      address: "375 Av. de la République, 92000 Nanterre, France",
      coordinates: {
        lat: 48.9107144,
        lng: 2.219769
      },
      googleMapsLink: 'https://www.google.com/maps/dir//375+Av.+de+la+R%C3%A9publique,+92000+Nanterre,+France/@48.9106857,2.1373678,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x47e664449db77411:0xe51488f1707793cd!2m2!1d2.219769!2d48.9107144?entry=ttu&g_ep=EgoyMDI1MTAwNy4wIKXMDSoASAFQAw%3D%3D',
      embedSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2622.123456789!2d2.219769!3d48.9107144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e664449db77411%3A0xe51488f1707793cd!2s375%20Av.%20de%20la%20R%C3%A9publique%2C%2092000%20Nanterre%2C%20France!5e0!3m2!1sen!2sfr!4v1234567890123!5m2!1sen!2sfr",
      title: "Localisation Auto Ecole Des Paquerettes — 375 Av. de la République, Nanterre",
    }
  }

  const location = locations[selectedLocation]


  const faqs = homepageFaqs

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Column - Location Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="order-2 lg:order-2"
          >
            <div className="mb-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                Venez nous <span className="text-primary">rencontrer</span>
              </h2>

            </div>

            {/* Map Card */}
            <motion.div
              key={selectedLocation}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <div className="bg-gray-100 rounded-2xl p-4 sm:p-6 shadow-lg">
              {/* Live Google Maps */}
              <div className="aspect-video rounded-xl mb-4 overflow-hidden">
                <iframe
                  src={location.embedSrc}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={location.title}
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
                onClick={() => window.open(location.googleMapsLink, '_blank')}
                className="w-full bg-primary hover:bg-primary/90 text-white px-4 sm:px-6 py-3 sm:py-4 rounded-lg font-semibold flex items-center justify-center space-x-2 sm:space-x-3 transition-colors duration-300 text-sm sm:text-base"
              >
                <Navigation className="h-4 w-4 sm:h-5 sm:w-5" />
                <span>Itinéraire Google Maps</span>
              </motion.button>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - FAQ */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="order-1 lg:order-1"
          >
            {/* FAQ Header */}
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Questions <span className="text-primary">fréquentes</span>
              </h2>
            </div>

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

        {/* Contact CTA - No Background */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          id="contact"
          className="mt-16 text-center"
        >
          <div className="p-8">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">
              Une question ? Parlons-en.
            </h3>
            <p className="text-lg mb-6 text-gray-600">
              Notre équipe pédagogique répond à toutes vos questions sur les formules,
              le CPF et les démarches d'inscription.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.a
                href={`tel:${siteConfig.phoneTel}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block bg-primary text-white px-8 py-4 rounded-xl font-semibold hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Appeler le {siteConfig.phone}
              </motion.a>
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block border-2 border-primary text-primary px-8 py-4 rounded-xl font-semibold hover:bg-primary hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Contactez-nous&nbsp;?
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

