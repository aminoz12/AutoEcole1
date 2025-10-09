'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Clock, Gift } from 'lucide-react'

export default function PromoBanner() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    // Set end time to 7 days from now
    const endTime = new Date().getTime() + 7 * 24 * 60 * 60 * 1000

    const timer = setInterval(() => {
      const now = new Date().getTime()
      const difference = endTime - now

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        })
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <motion.section
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="bg-gradient-to-r from-primary to-orange-600 text-white py-4 relative overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center space-x-8">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.4, type: 'spring', stiffness: 200 }}
            className="flex items-center space-x-2"
          >
            <Gift className="h-5 w-5" />
            <span className="font-semibold">CODE PROMO</span>
          </motion.div>

          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex items-center space-x-2"
          >
            <span className="text-2xl font-bold">AUTO2024</span>
            <span className="text-sm opacity-90">-20% sur votre première leçon</span>
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="hidden md:flex items-center space-x-4"
          >
            <Clock className="h-4 w-4" />
            <div className="flex items-center space-x-2 text-sm">
              <span>Expire dans:</span>
              <div className="flex items-center space-x-1">
                <span className="bg-white/20 px-2 py-1 rounded font-mono">
                  {timeLeft.days.toString().padStart(2, '0')}
                </span>
                <span>j</span>
                <span className="bg-white/20 px-2 py-1 rounded font-mono">
                  {timeLeft.hours.toString().padStart(2, '0')}
                </span>
                <span>h</span>
                <span className="bg-white/20 px-2 py-1 rounded font-mono">
                  {timeLeft.minutes.toString().padStart(2, '0')}
                </span>
                <span>m</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Animated background elements */}
      <motion.div
        animate={{
          x: ['-100%', '100%'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent"
      />
    </motion.section>
  )
}

