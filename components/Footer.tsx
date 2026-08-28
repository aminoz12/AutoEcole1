'use client'

import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'
import Image from 'next/image'
import { siteConfig } from '@/lib/seo/site-config'
import { cities, cityPath } from '@/lib/content/cities-data'

type IconProps = { className?: string }

// Brand glyphs lucide-react doesn't ship — drawn to match its 24x24 viewBox.
function TikTokIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M16.5 5.4a4.9 4.9 0 0 1-3-2.9h-2.8v11.8a2.7 2.7 0 1 1-1.9-2.6V8.8a5.6 5.6 0 1 0 4.7 5.5V9.1a7.7 7.7 0 0 0 3 .9V7.2a4.9 4.9 0 0 1-0-1.8z" />
    </svg>
  )
}

function SnapchatIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M12 2.2c2.4 0 4.1 1.9 4.2 4.3 0 .5 0 1.2-.1 1.9.3.1.6.1.9 0 .4-.1.9.1 1 .5.1.5-.3.8-.8 1-.5.2-1.2.3-1.3.8 0 .4.8 1.4 1.8 2 .6.4 1.3.6 1.9.8.4.1.5.5.4.8-.2.7-1.6.9-2.2 1-.1.2-.1.6-.3.8-.1.1-.3.1-.6.1-.4 0-.9-.1-1.5-.1-.4 0-.7 0-1 .1-.6.2-1.1.9-2.3.9s-1.7-.7-2.3-.9c-.3-.1-.6-.1-1-.1-.6 0-1.1.1-1.5.1-.3 0-.5 0-.6-.1-.2-.2-.2-.6-.3-.8-.6-.1-2-.3-2.2-1-.1-.3 0-.7.4-.8.6-.2 1.3-.4 1.9-.8 1-.6 1.8-1.6 1.8-2 0-.5-.8-.6-1.3-.8-.5-.2-.9-.5-.8-1 .1-.4.6-.6 1-.5.3.1.6.1.9 0-.1-.7-.1-1.4-.1-1.9C7.9 4.1 9.6 2.2 12 2.2z" />
    </svg>
  )
}

function GoogleIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M12 11v2.8h4c-.2 1-1.3 3-4 3a4.4 4.4 0 0 1 0-8.8c1.3 0 2.1.5 2.6 1l1.9-1.8A7.2 7.2 0 0 0 12 4.5a7.5 7.5 0 1 0 0 15c4.3 0 7.2-3 7.2-7.3 0-.5 0-.9-.1-1.2H12z" />
    </svg>
  )
}

const socialLabels: Record<string, string> = {
  google: 'Google Business',
  tiktok: 'TikTok',
  snapchat: 'Snapchat',
  instagram: 'Instagram',
}

export default function Footer() {
  const footerLinks = {
    navigation: [
      { name: 'Accueil', href: '/' },
      { name: 'Tarifs', href: '/tarifs' },
      { name: 'Permis moto', href: '/permis-moto' },
      { name: 'Pack Web', href: '/prestations-a-l-unite' },
      { name: 'Blog', href: '/blog' },
      { name: 'À propos', href: '/a-propos' },
      { name: 'S’inscrire', href: '/s-inscrire' },
    ],
    support: [
      { name: 'FAQ', href: '/#faq' },
      { name: 'Contact', href: '/contact' },
      { name: 'Mentions légales', href: '/mentions-legales' },
      { name: 'CGV', href: '/cgv' },
    ],
  }

  const horairesData = {
    bureau: {
      schedule: [
        { day: 'Lundi à Jeudi', time: '10h à 14h - 15h30 à 19h' },
        { day: 'Vendredi', time: '10h à 13h - 15h30 à 19h' },
        { day: 'Samedi', time: '10h à 14h' },
      ],
    },
    conduite: {
      schedule: [
        { day: 'Lundi à Vendredi', time: '10h à 20h' },
        { day: 'Samedi', time: '9h à 15h' },
      ],
    },
  }

  // Derived from siteConfig.social — only renders real profile links (no dead "#" icons)
  const socialIcons: Record<string, React.ComponentType<IconProps>> = {
    facebook: Facebook,
    twitter: Twitter,
    instagram: Instagram,
    linkedin: Linkedin,
    tiktok: TikTokIcon,
    snapchat: SnapchatIcon,
    google: GoogleIcon,
  }
  const socialLinks = Object.entries(siteConfig.social)
    .filter(([, href]) => href && href !== '#')
    .map(([key, href]) => ({
      icon: socialIcons[key] ?? Facebook,
      href,
      label: socialLabels[key] ?? key.charAt(0).toUpperCase() + key.slice(1),
    }))

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <div className="mb-6">
                <Image
                  src="/logoautoecol.png"
                  alt={`${siteConfig.name} — logo`}
                  width={120}
                  height={40}
                  className="h-10 w-auto object-contain"
                />
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Votre auto-école de confiance à Nanterre. Une équipe pédagogique
                experte, des moniteurs diplômés d'État et 451 permis délivrés.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-start space-x-3 text-gray-400">
                  <Phone className="h-5 w-5 shrink-0 mt-0.5 text-primary" />
                  <a href={`tel:${siteConfig.phoneTel}`} className="hover:text-white transition-colors">
                    {siteConfig.phone}
                  </a>
                </div>
                <div className="flex items-start space-x-3 text-gray-400">
                  <Mail className="h-5 w-5 shrink-0 mt-0.5 text-primary" />
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="break-all hover:text-white transition-colors"
                  >
                    {siteConfig.email}
                  </a>
                </div>
                <div className="flex items-start space-x-3 text-gray-400">
                  <MapPin className="h-5 w-5 shrink-0 mt-0.5 text-primary" />
                  <span>{siteConfig.address.full}</span>
                </div>
                <div className="text-sm text-gray-500 pl-8">
                  Agrément E 2209200030
                </div>
              </div>

              <a
                href="/CQP.pdf"
                download="Certificat-Qualiopi.pdf"
                className="mt-6 inline-flex items-center gap-3 rounded-lg border border-gray-200 bg-white px-4 py-3 text-gray-900 shadow-sm hover:border-primary hover:shadow-md transition-all duration-300"
              >
                <Image
                  src="/qualiopi-logo-png.png"
                  alt="Logo Qualiopi"
                  width={48}
                  height={48}
                  className="h-10 w-auto object-contain"
                />
                <span className="font-poppins text-sm font-semibold leading-snug tracking-tight">
                  Télécharger Certificat Qualiopi
                </span>
              </a>
            </motion.div>

            {/* Navigation */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-bold mb-5">Navigation</h3>
              <ul className="space-y-3">
                {footerLinks.navigation.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-primary transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Nos horaires */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-bold mb-5">Nos horaires</h3>
              <div className="space-y-6">
                <div>
                  <div className="text-sm font-semibold uppercase tracking-wider text-primary mb-3">
                    Bureau
                  </div>
                  <ul className="space-y-2">
                    {horairesData.bureau.schedule.map((item) => (
                      <li key={item.day} className="text-gray-400">
                        <div className="font-semibold text-gray-300">{item.day}</div>
                        <div className="text-sm">{item.time}</div>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <div className="text-sm font-semibold uppercase tracking-wider text-primary mb-3">
                    Conduite
                  </div>
                  <ul className="space-y-2">
                    {horairesData.conduite.schedule.map((item) => (
                      <li key={item.day} className="text-gray-400">
                        <div className="font-semibold text-gray-300">{item.day}</div>
                        <div className="text-sm">{item.time}</div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Support */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-bold mb-5">Support</h3>
              <ul className="space-y-3">
                {footerLinks.support.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-primary transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Zones desservies — sitewide internal links to the local-SEO city pages */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="py-8 border-t border-gray-800"
        >
          <h3 className="text-lg font-bold mb-2">Zones desservies</h3>
          <p className="text-gray-400 text-sm mb-5">
            Notre auto-école de Nanterre accueille aussi les élèves des villes voisines :
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-2.5">
            {cities.map((city) => (
              <li key={city.slug}>
                <a
                  href={cityPath(city)}
                  className="inline-flex items-center gap-2 text-gray-400 text-sm hover:text-primary transition-colors duration-300"
                >
                  <MapPin className="h-3.5 w-3.5 shrink-0 text-primary/70" />
                  Auto-école près de {city.name}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="py-8 border-t border-gray-800"
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold mb-2">Restez informé(e)</h3>
              <p className="text-gray-400">
                Recevez nos conseils permis, offres exclusives et actualités par e-mail
              </p>
            </div>
            <div className="flex w-full lg:w-auto">
              <input
                type="email"
                placeholder="Votre email"
                className="flex-1 lg:w-80 px-4 py-3 bg-gray-800 border border-gray-700 rounded-l-xl focus:outline-none focus:border-primary text-white placeholder-gray-400"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary text-white px-6 py-3 rounded-r-xl font-semibold hover:bg-orange-600 transition-colors duration-300"
              >
                S'abonner
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Footer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="py-6 border-t border-gray-800"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-gray-400 text-sm">
              © {new Date().getFullYear()} {siteConfig.name}. Tous droits réservés.
            </div>
            
            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.2, y: -2 }}
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-primary hover:bg-gray-700 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

