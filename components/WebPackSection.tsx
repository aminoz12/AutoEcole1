'use client'

import { motion } from 'framer-motion'
import { Globe3D, GlobeMarker } from '@/components/ui/3d-globe'

export default function WebPackSection() {
  // Spread people all around the globe (every continent)
  const cities: { lat: number; lng: number; label: string }[] = [
    { lat: 48.8566, lng: 2.3522, label: 'Paris' },
    { lat: 51.5074, lng: -0.1278, label: 'Londres' },
    { lat: 40.7128, lng: -74.006, label: 'New York' },
    { lat: 34.0522, lng: -118.2437, label: 'Los Angeles' },
    { lat: 19.4326, lng: -99.1332, label: 'Mexico' },
    { lat: -23.5505, lng: -46.6333, label: 'São Paulo' },
    { lat: -34.6037, lng: -58.3816, label: 'Buenos Aires' },
    { lat: -22.9068, lng: -43.1729, label: 'Rio de Janeiro' },
    { lat: 40.4168, lng: -3.7038, label: 'Madrid' },
    { lat: 52.52, lng: 13.405, label: 'Berlin' },
    { lat: 41.9028, lng: 12.4964, label: 'Rome' },
    { lat: 55.7558, lng: 37.6173, label: 'Moscou' },
    { lat: 6.5244, lng: 3.3792, label: 'Lagos' },
    { lat: -1.2921, lng: 36.8219, label: 'Nairobi' },
    { lat: -33.9249, lng: 18.4241, label: 'Le Cap' },
    { lat: 30.0444, lng: 31.2357, label: 'Le Caire' },
    { lat: 25.2048, lng: 55.2708, label: 'Dubaï' },
    { lat: 28.6139, lng: 77.209, label: 'New Delhi' },
    { lat: 31.2304, lng: 121.4737, label: 'Shanghai' },
    { lat: 35.6762, lng: 139.6503, label: 'Tokyo' },
    { lat: 37.5665, lng: 126.978, label: 'Séoul' },
    { lat: 1.3521, lng: 103.8198, label: 'Singapour' },
    { lat: -33.8688, lng: 151.2093, label: 'Sydney' },
    { lat: 43.6532, lng: -79.3832, label: 'Toronto' },
  ]

  const markers: GlobeMarker[] = cities.map((city, i) => ({
    ...city,
    src: `https://assets.aceternity.com/avatars/${(i % 13) + 1}.webp`,
  }))
  return (
    <section id="formations" className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                Grâce à nos <span className="text-primary">prestations à l&apos;unité</span>,
                révisez le code de la route où vous voulez et n&apos;importe quand !
              </h2>

              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Accessible via votre smartphone, tablette et ordinateur.
                Entraînez-vous facilement. Vos résultats sont directement reliés
                à notre auto-école afin de suivre au plus près votre évolution.
              </p>

              {/* CTA Button — desktop (under the text) */}
              <motion.a
                href="/prestations-a-l-unite"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="hidden lg:inline-block bg-primary text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-primary/90 transition-all duration-300"
              >
                Découvrir nos prestations à l&apos;unité
              </motion.a>
            </motion.div>

            {/* Right Content - 3D Earth */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="flex items-center justify-center h-full min-h-96"
            >
              <Globe3D
                markers={markers}
                config={{
                  bumpScale: 5,
                  autoRotateSpeed: 1.2,
                  showAtmosphere: false,
                }}
                onMarkerClick={(marker) => {
                  console.log("Clicked marker:", marker.label);
                }}
              />
            </motion.div>

            {/* CTA Button — mobile (under the 3D earth) */}
            <div className="flex justify-center lg:hidden">
              <a
                href="/prestations-a-l-unite"
                className="inline-block bg-primary text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-primary/90 transition-all duration-300"
              >
                Découvrir nos prestations à l&apos;unité
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}