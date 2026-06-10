'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export default function WhatsAppButton() {
  const phoneNumber = '33780950041'
  const message = encodeURIComponent(
    'Bonjour, je souhaite parler à un agent concernant vos formations permis.'
  )

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank')
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.2 }}
        className="relative bg-white text-gray-900 px-4 py-2.5 rounded-xl shadow-lg text-sm font-semibold whitespace-nowrap border border-gray-200"
      >
        Parlez à un agent ?
      </motion.div>

      <motion.button
        onClick={handleWhatsAppClick}
        aria-label="Contacter un agent sur WhatsApp"
        className="relative bg-[#25D366] p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <Image
          src="/whatsapp.png"
          alt="WhatsApp"
          width={40}
          height={40}
          className="w-10 h-10 object-contain"
        />
      </motion.button>
    </div>
  )
}
