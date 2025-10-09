'use client'

import { motion } from 'framer-motion'
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react'
import { useState } from 'react'

export default function TrustSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      name: 'Marie Dubois',
      role: 'Étudiante',
      content: 'Excellente auto-école ! Mon moniteur était très patient et professionnel. J\'ai obtenu mon permis du premier coup grâce à leur méthode d\'apprentissage.',
      rating: 5,
      image: '/woman.png',
    },
    {
      name: 'Thomas Martin',
      role: 'Employé',
      content: 'Service impeccable et tarifs très compétitifs. Les véhicules sont modernes et bien entretenus. Je recommande vivement AutoEcole Pro !',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
    },
    {
      name: 'Sophie Leroy',
      role: 'Mère de famille',
      content: 'Parfait pour reprendre la conduite après plusieurs années. L\'équipe est à l\'écoute et s\'adapte parfaitement aux besoins de chacun.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
    },
  ]

  const logos = [
    'https://via.placeholder.com/120x60/0055FF/FFFFFF?text=Partner1',
    'https://via.placeholder.com/120x60/FF6B00/FFFFFF?text=Partner2',
    'https://via.placeholder.com/120x60/0055FF/FFFFFF?text=Partner3',
    'https://via.placeholder.com/120x60/FF6B00/FFFFFF?text=Partner4',
    'https://via.placeholder.com/120x60/0055FF/FFFFFF?text=Partner5',
    'https://via.placeholder.com/120x60/FF6B00/FFFFFF?text=Partner6',
  ]

  const stats = [
    { number: '2,500+', label: 'Élèves formés' },
    { number: '4.9/5', label: 'Note moyenne' },
    { number: '95%', label: 'Taux de réussite' },
    { number: '15+', label: 'Années d\'expérience' },
  ]

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto px-4">


        {/* Partner Logos */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8">
            Nos partenaires de confiance
          </h3>
          <div className="relative overflow-hidden">
            <motion.div
              animate={{
                x: ['0%', '-100%'],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: 'linear',
              }}
              className="flex space-x-8 items-center"
            >
              {[...logos, ...logos].map((logo, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 opacity-60 hover:opacity-100 transition-opacity duration-300"
                >
                  <img
                    src={logo}
                    alt={`Partner ${index + 1}`}
                    className="h-12 w-auto object-contain"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

