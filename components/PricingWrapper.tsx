'use client'

import { useState } from 'react'
import PricingSection from './PricingSection'
import PricingWithoutCodeSection from './PricingWithoutCodeSection'

export default function PricingWrapper() {
  const [transmissionType, setTransmissionType] = useState<'manuelle' | 'auto'>('manuelle')

  return (
    <div>
      {/* Pricing Sections */}
      <PricingSection transmissionType={transmissionType} setTransmissionType={setTransmissionType} />
      <PricingWithoutCodeSection transmissionType={transmissionType} setTransmissionType={setTransmissionType} />
    </div>
  )
}

