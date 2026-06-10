'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone, ChevronDown } from 'lucide-react'
import Image from 'next/image'
import { siteConfig } from '@/lib/seo/site-config'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)


  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  type NavItem = {
    name: string
    href: string
    submenu?: { name: string; href: string }[]
  }

  const navItems: NavItem[] = [
    { name: 'Prestations à l’unité', href: '/prestations-a-l-unite' },
    { name: 'Formations', href: '#formations' },
    {
      name: 'Tarifs',
      href: '/tarifs',
      submenu: [
        { name: 'Boîte Manuelle - SANS CODE', href: '/tarifs#manuelle' },
        { name: 'Boîte Auto - SANS CODE', href: '/tarifs#auto' },
        { name: 'Boîte Manuelle + CODE', href: '/tarifs#manuelle-code' },
        { name: 'Boîte Auto + CODE', href: '/tarifs#auto-code' },
        { name: 'Prestations à l’unité', href: '/tarifs#pack-web' },
        { name: 'Permis Accompagné', href: '/tarifs#permis-accompagne' },
      ],
    },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0B0F19]/95 backdrop-blur-md shadow-lg shadow-black/20'
          : 'bg-[#0B0F19]/95 backdrop-blur-sm'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.a
            href="/"
            whileHover={{ scale: 1.05 }}
            className="flex flex-col leading-none"
          >
            <Image 
              src="/logoautoecol.png" 
              alt={`${siteConfig.name} — logo`}
              width={150}
              height={50}
              priority
            />
          </motion.a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.3 }}
                className="relative group"
              >
                <a
                  href={item.href}
                  className="inline-flex items-center gap-1 transition-colors duration-300 font-medium text-sm text-gray-300 hover:text-white"
                >
                  {item.name}
                  {item.submenu && (
                    <ChevronDown className="h-3.5 w-3.5 transition-transform duration-300 group-hover:rotate-180" />
                  )}
                </a>

                {item.submenu && (
                  <div className="absolute left-1/2 top-full hidden -translate-x-1/2 pt-3 group-hover:block">
                    <div className="min-w-[260px] rounded-xl border border-white/10 bg-[#0B0F19] p-2 shadow-xl shadow-black/40">
                      {item.submenu.map((sub) => (
                        <a
                          key={sub.name}
                          href={sub.href}
                          className="block rounded-lg px-3 py-2 text-sm text-gray-300 transition-colors hover:bg-white/5 hover:text-white"
                        >
                          {sub.name}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
            {/* S'inscrire Button */}
            <motion.a
              href="/s-inscrire"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navItems.length * 0.1 + 0.3 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:opacity-90 transition-all duration-300 shadow-lg shadow-pink-500/25"
            >
              Je m'inscris
            </motion.a>
          </nav>

          {/* Right Side - Phone CTA */}
          <div className="hidden lg:flex items-center space-x-3">
            <motion.a
              href={`tel:${siteConfig.phoneTel}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-pink-500 text-white px-4 py-2.5 rounded-full text-sm font-semibold shadow-lg shadow-pink-500/25"
            >
              <Phone className="h-4 w-4" />
              <span>{siteConfig.phone}</span>
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 text-white" />
            ) : (
              <Menu className="h-6 w-6 text-white" />
            )}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={{
            height: isMobileMenuOpen ? 'auto' : 0,
            opacity: isMobileMenuOpen ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden bg-[#0B0F19] border-t border-white/10"
        >
          <div className="py-4 space-y-2">
            {navItems.map((item) => (
              <div key={item.name}>
                <a
                  href={item.href}
                  className="block px-4 py-2.5 text-gray-300 hover:text-white hover:bg-white/5 transition-colors rounded-lg text-sm"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
                {item.submenu && (
                  <div className="ml-4 mt-1 space-y-1 border-l border-white/10 pl-3">
                    {item.submenu.map((sub) => (
                      <a
                        key={sub.name}
                        href={sub.href}
                        className="block rounded-lg px-3 py-2 text-xs text-gray-400 transition-colors hover:bg-white/5 hover:text-white"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {sub.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="px-4 pt-4 border-t border-white/10 space-y-3">
              <a
                href="/s-inscrire"
                className="block w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-2.5 rounded-full font-semibold text-sm text-center hover:opacity-90 transition-all duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Je m'inscris
              </a>
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <Phone className="h-4 w-4" />
                <span>{siteConfig.phone}</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

    </header>
  )
}