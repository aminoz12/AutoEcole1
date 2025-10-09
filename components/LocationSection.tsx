'use client'

import { motion } from 'framer-motion'
import { MapPin, Navigation, ExternalLink } from 'lucide-react'

export default function LocationSection() {
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

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
            Venez Nous <span className="text-primary">Chercher</span>
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Map Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gray-100 rounded-2xl p-6 shadow-lg">
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
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-900 font-semibold">Notre Adresse</p>
                    <p className="text-gray-600">{location.address}</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Location Info & Buttons */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Nous Localiser
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Trouvez-nous facilement à Nanterre. Choisissez votre application de navigation préférée pour obtenir l'itinéraire le plus optimal.
                </p>
              </div>

              {/* Navigation Buttons */}
              <div className="space-y-3">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleGoogleMaps}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-4 rounded-lg font-semibold flex items-center justify-center space-x-3 transition-colors duration-300"
                >
                  <ExternalLink className="h-5 w-5" />
                  <span>Ouvrir avec Google Maps</span>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleWaze}
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white px-6 py-4 rounded-lg font-semibold flex items-center justify-center space-x-3 transition-colors duration-300"
                >
                  <Navigation className="h-5 w-5" />
                  <span>Ouvrir avec Waze</span>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleAppleMaps}
                  className="w-full bg-gray-800 hover:bg-gray-900 text-white px-6 py-4 rounded-lg font-semibold flex items-center justify-center space-x-3 transition-colors duration-300"
                >
                  <MapPin className="h-5 w-5" />
                  <span>Ouvrir avec Apple Maps</span>
                </motion.button>
              </div>

              {/* Additional Info */}
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Informations Pratiques</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Parking disponible sur place</li>
                  <li>• Accessible en transport en commun</li>
                  <li>• Ouvert du lundi au samedi</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
