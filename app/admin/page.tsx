import { redirect } from 'next/navigation'
import AdminDashboard from '@/components/admin/AdminDashboard'
import { createPageMetadata } from '@/lib/seo/metadata'

export const metadata = createPageMetadata({
  title: 'Administration',
  description: 'Espace administration Auto Ecole Des Paquerettes.',
  path: '/admin',
  noIndex: true,
})

export default async function AdminPage() {
  redirect('/admin/login')
}

