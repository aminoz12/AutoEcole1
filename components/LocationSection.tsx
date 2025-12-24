'use client'

import { motion } from 'framer-motion'
import { MapPin, Navigation, ExternalLink } from 'lucide-react'
import { useState } from 'react'

export default function LocationSection() {
  const [selectedLocation, setSelectedLocation] = useState<'nanterre' | 'sartrouville'>('nanterre')

  const locations = {
    nanterre: {
      name: 'Nanterre',
      address: "375 Av. de la République, 92000 Nanterre, France",
      coordinates: {
        lat: 48.9107144,
        lng: 2.219769
      },
      googleMapsLink: 'https://www.google.com/maps/place//data=!4m2!3m1!1s0x47e661370fd882cb:0xee6780cbac63daf9?sa=X&ved=1t:8290&ictx=111',
      embedSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2622.123456789!2d2.219769!3d48.9107144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e664449db77411%3A0xe51488f1707793cd!2s375%20Av.%20de%20la%20R%C3%A9publique%2C%2092000%20Nanterre%2C%20France!5e0!3m2!1sen!2sfr!4v1234567890123!5m2!1sen!2sfr",
      title: "Localisation AutoEcole Pro - 375 Av. de la République, Nanterre",
      description: "Trouvez-nous facilement à Nanterre. Choisissez votre application de navigation préférée pour obtenir l'itinéraire le plus optimal."
    },
    sartrouville: {
      name: 'Sartrouville',
      address: "133 Av. du Général de Gaulle, 78500 Sartrouville, France",
      coordinates: {
        lat: 48.9431,
        lng: 2.1875
      },
      googleMapsLink: 'https://www.google.com/maps?client=opera-gx&oe=UTF-8&um=1&ie=UTF-8&fb=1&gl=ma&sa=X&geocode=KcuC2A83YeZHMfnaY6zLgGfu&daddr=133+Av.+du+G%C3%A9n%C3%A9ral+de+Gaulle,+78500+Sartrouville,+France',
      embedSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2623.456789012!2d2.1875!3d48.9431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e6681234567890%3A0x1234567890abcdef!2s133%20Av.%20du%20G%C3%A9n%C3%A9ral%20de%20Gaulle%2C%2078500%20Sartrouville%2C%20France!5e0!3m2!1sen!2sfr!4v1234567890123!5m2!1sen!2sfr",
      title: "Localisation AutoEcole Pro - 133 Av. du Général de Gaulle, Sartrouville",
      description: "Trouvez-nous facilement à Sartrouville. Choisissez votre application de navigation préférée pour obtenir l'itinéraire le plus optimal."
    }
  }

  const currentLocation = locations[selectedLocation]

  const handleGoogleMaps = () => {
    window.open(currentLocation.googleMapsLink, '_blank')
  }

  const handleWaze = () => {
    window.open(`https://waze.com/ul?ll=${currentLocation.coordinates.lat},${currentLocation.coordinates.lng}&navigate=yes`, '_blank')
  }

  const handleAppleMaps = () => {
    window.open(`https://maps.apple.com/?daddr=${currentLocation.coordinates.lat},${currentLocation.coordinates.lng}`, '_blank')
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
              key={selectedLocation}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              {/* Location Toggle Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="flex justify-center gap-4 mb-4"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedLocation('nanterre')}
                  className={`px-6 py-3 rounded-xl font-semibold text-base transition-all duration-300 whitespace-nowrap ${
                    selectedLocation === 'nanterre'
                      ? 'bg-primary text-white shadow-lg'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  Nanterre
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedLocation('sartrouville')}
                  className={`px-6 py-3 rounded-xl font-semibold text-base transition-all duration-300 whitespace-nowrap ${
                    selectedLocation === 'sartrouville'
                      ? 'bg-primary text-white shadow-lg'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  Sartrouville
                </motion.button>
              </motion.div>

              <div className="bg-gray-100 rounded-2xl p-4 sm:p-6 shadow-lg">
                {/* Live Google Maps */}
                <div className="aspect-video rounded-xl mb-4 overflow-hidden">
                  <iframe
                    src={currentLocation.embedSrc}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={currentLocation.title}
                  ></iframe>
                </div>
                
                {/* Address */}
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-900 font-semibold">Notre Adresse</p>
                    <p className="text-gray-600">{currentLocation.address}</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Location Info & Buttons */}
            <motion.div
              key={`info-${selectedLocation}`}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Nous Localiser
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {currentLocation.description}
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
