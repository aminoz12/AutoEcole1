'use client'

import { motion } from 'framer-motion'
import { Star, MapPin, Clock, Car } from 'lucide-react'

export default function InstructorsPreview() {
  const instructors = [
    {
      name: 'Jean-Pierre Martin',
      experience: '12 ans d\'expérience',
      location: 'Paris 15ème',
      rating: 4.9,
      reviews: 156,
      specialties: ['Conduite accompagnée', 'Perfectionnement'],
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      available: true,
    },
    {
      name: 'Marie Dubois',
      experience: '8 ans d\'expérience',
      location: 'Boulogne-Billancourt',
      rating: 4.8,
      reviews: 98,
      specialties: ['Première conduite', 'Code de la route'],
      image: '/woman.png',
      available: true,
    },
    {
      name: 'Thomas Leroy',
      experience: '15 ans d\'expérience',
      location: 'Issy-les-Moulineaux',
      rating: 5.0,
      reviews: 203,
      specialties: ['Conduite défensive', 'Formation professionnelle'],
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      available: false,
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  }

  return (
    <section id="moniteurs" className="section-padding bg-neutral">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Nos <span className="text-primary">moniteurs</span> experts
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Rencontrez nos instructeurs diplômés et expérimentés, 
            sélectionnés pour leur pédagogie et leur professionnalisme.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 mb-12"
        >
          {instructors.map((instructor, index) => (
            <motion.div
              key={instructor.name}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="card group cursor-pointer relative"
            >
              {!instructor.available && (
                <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold z-10">
                  Complet
                </div>
              )}

              <div className="text-center mb-6">
                <div className="relative inline-block mb-4">
                  <img
                    src={instructor.image}
                    alt={instructor.name}
                    className="w-24 h-24 rounded-full object-cover mx-auto border-4 border-white shadow-lg"
                  />
                  <div className={`absolute -bottom-2 -right-2 w-6 h-6 rounded-full border-2 border-white ${
                    instructor.available ? 'bg-green-500' : 'bg-red-500'
                  }`} />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  {instructor.name}
                </h3>
                <p className="text-gray-600 mb-2">{instructor.experience}</p>
                
                <div className="flex items-center justify-center space-x-1 mb-3">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span className="font-semibold text-gray-900">{instructor.rating}</span>
                  <span className="text-gray-600">({instructor.reviews} avis)</span>
                </div>

                <div className="flex items-center justify-center space-x-1 text-sm text-gray-600 mb-4">
                  <MapPin className="h-4 w-4" />
                  <span>{instructor.location}</span>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold text-gray-900">Spécialités :</h4>
                <div className="flex flex-wrap gap-2">
                  {instructor.specialties.map((specialty, specialtyIndex) => (
                    <span
                      key={specialtyIndex}
                      className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                disabled={!instructor.available}
                className={`w-full mt-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  instructor.available
                    ? 'bg-primary text-white hover:bg-orange-600'
                    : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                }`}
              >
                {instructor.available ? 'Réserver une leçon' : 'Indisponible'}
              </motion.button>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Vous ne trouvez pas votre moniteur idéal ?
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              Nous avons plus de 50 moniteurs qualifiés dans toute la région parisienne. 
              Découvrez tous nos instructeurs et trouvez celui qui vous correspond le mieux.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary flex items-center justify-center space-x-2"
              >
                <Car className="h-5 w-5" />
                <span>Voir tous les moniteurs</span>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary flex items-center justify-center space-x-2"
              >
                <Clock className="h-5 w-5" />
                <span>Prendre rendez-vous</span>
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

