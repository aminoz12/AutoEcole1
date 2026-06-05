import { redirect } from 'next/navigation'
import { createPageMetadata } from '@/lib/seo/metadata'

export const metadata = createPageMetadata({
  title: 'Espace élève',
  description: 'Tableau de bord élève Auto Ecole Des Paquerettes.',
  path: '/dashboard',
  noIndex: true,
})

export default async function DashboardPage() {
  redirect('/')
}

