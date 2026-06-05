import { redirect } from 'next/navigation'
import BookingContent from '@/components/booking/BookingContent'
import { createPageMetadata } from '@/lib/seo/metadata'

export const metadata = createPageMetadata({
  title: 'Réserver une leçon',
  description: 'Réservation de leçons de conduite Auto Ecole Des Paquerettes.',
  path: '/reserver',
  noIndex: true,
})

export default async function ReserverPage() {
  redirect('/')
}

