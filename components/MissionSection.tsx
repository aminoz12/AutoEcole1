'use client'

import { motion } from 'framer-motion'
import { DollarSign, MapPin, Heart, Eye } from 'lucide-react'

export default function MissionSection() {
  const features = [
    {
      icon: DollarSign,
      title: 'Plus d\'économies, plus de liberté.',
      description: 'Jusqu\'à 30% moins cher que les auto-écoles traditionnelles¹, 430€ d\'économies sur l\'assurance auto⁴, et une assurance habitation à partir de 2,17€/mois.',
    },
    {
      icon: MapPin,
      title: 'On vous accompagne sur la route comme dans la vie',
      description: 'Code, permis, assurance auto et habitation : des offres exclusives conçues pour vous accompagner, vous et votre famille, à chaque moment clé de votre parcours.',
    },
    {
      icon: Heart,
      title: 'La meilleure pédagogie, les meilleurs experts.',
      description: 'Plus de 1800 moniteurs certifiés et des partenaires de confiance comme Allianz et Mondial Assistance pour vous offrir la meilleure pédagogie et les meilleures garanties.',
    },
    {
      icon: Eye,
      title: 'Simple, digital et transparent.',
      description: 'Une expérience 100% en ligne, des outils clairs et intuitifs pour un parcours rapide, accessible et sans contraintes.',
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Green Label */}
            <div className="inline-block bg-green-500 text-white px-4 py-2 text-sm font-bold uppercase tracking-wide">
              NOTRE MISSION
            </div>

            {/* Main Heading */}
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Vous <span className="text-primary">accompagner</span> dans les nouvelles <span className="text-primary">étapes</span> de votre <span className="text-primary">vie</span>
            </h2>

            {/* Description */}
            <p className="text-lg text-gray-700 leading-relaxed">
              Avec AutoEcole Pro, tout devient plus simple. Du code à l'assurance, en passant par le permis ou votre premier logement, nous sommes à vos côtés pour faciliter vos démarches et vous aider à gagner en autonomie.
            </p>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-0"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className={`py-6 ${index < features.length - 1 ? 'border-b border-gray-200' : ''}`}
              >
                <div className="flex items-start space-x-4">
                  {/* Icon */}
                  <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center">
                    <feature.icon className="h-6 w-6 text-gray-700" />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
