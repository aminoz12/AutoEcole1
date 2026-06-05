'use client'

import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'
import Image from 'next/image'
import { siteConfig } from '@/lib/seo/site-config'

export default function Footer() {
  const footerLinks = {
    support: [
      { name: 'FAQ', href: '#faq' },
      { name: 'Contact', href: '/contact' },
      { name: 'Mentions légales', href: '/mentions-legales' },
      { name: 'CGV', href: '/cgv' },
    ],
  }

  const horairesData = {
    bureau: {
      title: 'Nos horaires - Bureau',
      schedule: [
        { day: 'Lundi à Jeudi', time: '10h à 14h - 15h30 à 19h' },
        { day: 'Vendredi', time: '10h à 13h - 15h30 à 19h' },
        { day: 'Samedi', time: '10h à 14h' },
      ],
    },
    conduite: {
      title: 'Nos horaires - Conduite',
      schedule: [
        { day: 'Lundi à Vendredi', time: '10h à 20h' },
        { day: 'Samedi', time: '9h à 15h' },
      ],
    },
  }

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ]

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
                Votre auto-école de confiance à Nanterre. Plus de 15 ans
                d'expérience et plus de 2 500 permis délivrés avec un taux de réussite
                parmi les meilleurs du secteur.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-400">
                  <Phone className="h-5 w-5 text-primary" />
                  <a href={`tel:${siteConfig.phoneTel}`} className="hover:text-white transition-colors">
                    {siteConfig.phone}
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-gray-400">
                  <Mail className="h-5 w-5 text-primary" />
                  <span>contact@autoecolepro.fr</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-400">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>{siteConfig.address.full}</span>
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

            {/* Nos horaires - Bureau */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-6">{horairesData.bureau.title}</h3>
              <ul className="space-y-3">
                {horairesData.bureau.schedule.map((item, index) => (
                  <motion.li
                    key={item.day}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-gray-400"
                  >
                    <div className="font-semibold text-gray-300">{item.day}</div>
                    <div className="text-sm">{item.time}</div>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Nos horaires - Conduite */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-6">{horairesData.conduite.title}</h3>
              <ul className="space-y-3">
                {horairesData.conduite.schedule.map((item, index) => (
                  <motion.li
                    key={item.day}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-gray-400"
                  >
                    <div className="font-semibold text-gray-300">{item.day}</div>
                    <div className="text-sm">{item.time}</div>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Support */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-6">Support</h3>
              <ul className="space-y-3">
                {footerLinks.support.map((link, index) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-primary transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

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

