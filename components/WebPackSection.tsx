'use client'

import { motion } from 'framer-motion'
import { Globe3D, GlobeMarker } from '@/components/ui/3d-globe'

export default function WebPackSection() {
  const markers: GlobeMarker[] = [
    {
      lat: 48.8566,
      lng: 2.3522,
      src: "https://assets.aceternity.com/avatars/1.webp",
      label: "France",
    },
    {
      lat: 51.5074,
      lng: -0.1278,
      src: "https://assets.aceternity.com/avatars/2.webp",
      label: "Londres",
    },
    {
      lat: 40.7128,
      lng: -74.006,
      src: "https://assets.aceternity.com/avatars/3.webp",
      label: "New York",
    },
    {
      lat: 45.764,
      lng: 4.8357,
      src: "https://assets.aceternity.com/avatars/4.webp",
      label: "Lyon",
    },
    {
      lat: 43.2965,
      lng: 5.3698,
      src: "https://assets.aceternity.com/avatars/5.webp",
      label: "Marseille",
    },
    {
      lat: 40.4168,
      lng: -3.7038,
      src: "https://assets.aceternity.com/avatars/6.webp",
      label: "Madrid",
    },
    {
      lat: 52.52,
      lng: 13.405,
      src: "https://assets.aceternity.com/avatars/7.webp",
      label: "Berlin",
    },
    {
      lat: 41.9028,
      lng: 12.4964,
      src: "https://assets.aceternity.com/avatars/8.webp",
      label: "Rome",
    },
    {
      lat: 50.8503,
      lng: 4.3517,
      src: "https://assets.aceternity.com/avatars/9.webp",
      label: "Bruxelles",
    },
    {
      lat: 45.5017,
      lng: -73.5673,
      src: "https://assets.aceternity.com/avatars/10.webp",
      label: "Montréal",
    },
  ]
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
                Grâce à notre <span className="text-primary">pack web</span>,
                révisez le code de la route où vous voulez et n&apos;importe quand !
              </h2>

              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Accessible via votre smartphone, tablette et ordinateur.
                Entraînez-vous facilement. Vos résultats sont directement reliés
                à notre auto-école afin de suivre au plus près votre évolution.
              </p>

              {/* CTA Button */}
              <motion.a
                href="/packweb"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block bg-primary text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-primary/90 transition-all duration-300"
              >
                Découvrir le pack web
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
                  autoRotateSpeed: 0.6,
                  showAtmosphere: false,
                }}
                onMarkerClick={(marker) => {
                  console.log("Clicked marker:", marker.label);
                }}
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}