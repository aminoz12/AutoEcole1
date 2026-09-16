import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import AccelereCityPage from '@/components/accelere/AccelereCityPage'
import { createPageMetadata } from '@/lib/seo/metadata'
import {
  accelereCities,
  accelerePath,
  getAccelereCity,
} from '@/lib/content/permis-accelere-data'

export function generateStaticParams() {
  return accelereCities.map((city) => ({ ville: city.slug }))
}

export function generateMetadata({ params }: { params: { ville: string } }): Metadata {
  const city = getAccelereCity(params.ville)
  if (!city) return {}
  return createPageMetadata({
    title: city.title,
    description: city.metaDescription,
    path: accelerePath(city),
    keywords: [
      `permis accéléré ${city.name}`,
      `permis rapide ${city.name}`,
      `stage permis intensif ${city.name}`,
    ],
  })
}

export default function Page({ params }: { params: { ville: string } }) {
  const city = getAccelereCity(params.ville)
  if (!city) notFound()
  return <AccelereCityPage city={city} />
}
