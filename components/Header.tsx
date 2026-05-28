'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone, User, ChevronDown } from 'lucide-react'
import { createClient } from '@/lib/supabase/client'
import AuthModal from './auth/AuthModal'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false)
  const [user, setUser] = useState<any>(null)
  const [isAgencesOpen, setIsAgencesOpen] = useState(false)
  const supabase = createClient()

  useEffect(() => {
    supabase.auth.getUser().then(({ data: { user } }) => {
      setUser(user)
    })

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null)
    })

    return () => {
      if (subscription) {
        subscription.unsubscribe()
      }
    }
  }, [])

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
    { name: "S'inscrire", href: '#contact' },
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
            className="flex flex-col leading-none"
          >
            <span className="text-white font-bold text-xl tracking-tight">AutoEcole</span>
            <span className="text-gray-400 text-[10px] uppercase tracking-widest">Pro</span>
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
                  className={`transition-colors duration-300 font-medium text-sm flex items-center gap-1 ${
                    item.name === "S'inscrire"
                      ? 'text-sky-400 hover:text-sky-300'
                      : 'text-gray-300 hover:text-white'
                  }`}
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

          {/* Right Side - Phone CTA + User */}
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

            {user ? (
              <motion.a
                href="/dashboard"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 rounded-full flex items-center justify-center ring-2 ring-white/20 hover:ring-white/40 transition-all"
                style={{ background: 'linear-gradient(135deg, #ec4899 0%, #a855f7 100%)' }}
              >
                <User className="h-4 w-4 text-white" />
              </motion.a>
            ) : (
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsAuthModalOpen(true)}
                className="w-10 h-10 rounded-full flex items-center justify-center ring-2 ring-white/20 hover:ring-white/40 transition-all"
                style={{ background: 'linear-gradient(135deg, #ec4899 0%, #a855f7 100%)' }}
              >
                <User className="h-4 w-4 text-white" />
              </motion.button>
            )}
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
              {user ? (
                <a
                  href="/dashboard"
                  className="block w-full text-center bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-full font-semibold text-sm hover:opacity-90 transition-opacity"
                >
                  Mon Espace
                </a>
              ) : (
                <button
                  onClick={() => {
                    setIsAuthModalOpen(true)
                    setIsMobileMenuOpen(false)
                  }}
                  className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-full font-semibold text-sm hover:opacity-90 transition-opacity"
                >
                  Réserver un Rendez-Vous
                </button>
              )}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Auth Modal */}
      <AuthModal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} />
    </motion.header>
  )
}
