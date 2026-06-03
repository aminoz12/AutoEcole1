'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone, ChevronDown } from 'lucide-react'
import Image from 'next/image'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isAgencesOpen, setIsAgencesOpen] = useState(false)


  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Formations', href: '#formations' },
    { name: 'Tarifs', href: '#tarifs' },
    { name: 'Financement CPF', href: '#cpf' },
    { name: 'Nos Agences', href: '#agences', hasDropdown: true },
    { name: 'Nos Conseils', href: '#blog' },
  ]

  const agencesItems = [
    { name: 'Nanterre', href: '#nanterre' },
    { name: 'Sartrouville', href: '#sartrouville' },
  ]

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-8 left-0 right-0 z-50 transition-all duration-300 ${
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
            className="flex flex-col leading-none mt-6"
          >
            <Image 
              src="/logoautoecol.png" 
              alt="AutoEcole Pro Logo"
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
                className="relative"
                onMouseEnter={() => item.hasDropdown && setIsAgencesOpen(true)}
                onMouseLeave={() => item.hasDropdown && setIsAgencesOpen(false)}
              >
                <motion.a
                  href={item.href}
                  className="transition-colors duration-300 font-medium text-sm flex items-center gap-1 text-gray-300 hover:text-white"
                  whileHover={{ y: -2 }}
                >
                  {item.name}
                  {item.hasDropdown && <ChevronDown className="h-3 w-3" />}
                </motion.a>

                {/* Dropdown */}
                <AnimatePresence>
                  {item.hasDropdown && isAgencesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-48 bg-[#151b2e] rounded-xl shadow-xl border border-white/10 overflow-hidden"
                    >
                      {agencesItems.map((sub) => (
                        <a
                          key={sub.name}
                          href={sub.href}
                          className="block px-4 py-3 text-sm text-gray-300 hover:text-white hover:bg-white/5 transition-colors"
                        >
                          {sub.name}
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </nav>

          {/* Right Side - Phone CTA */}
          <div className="hidden lg:flex items-center space-x-3">
            <motion.a
              href="tel:0180834996"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-pink-500 text-white px-4 py-2.5 rounded-full text-sm font-semibold shadow-lg shadow-pink-500/25"
            >
              <Phone className="h-4 w-4" />
              <span>01 80 83 49 96</span>
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
              <a
                key={item.name}
                href={item.href}
                className="block px-4 py-2.5 text-gray-300 hover:text-white hover:bg-white/5 transition-colors rounded-lg text-sm"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <div className="px-4 pt-4 border-t border-white/10 space-y-3">
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <Phone className="h-4 w-4" />
                <span>01 80 83 49 96</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

    </motion.header>
  )
}
