import BlogList from '@/components/blog/BlogList'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { blogPosts, blogCategories } from '@/lib/blog-data'
import { createPageMetadata } from '@/lib/seo/metadata'

export const metadata = createPageMetadata({
  title: 'Blog — Conseils permis & code de la route',
  description:
    'Guides pratiques, astuces d\'experts et actualités pour réussir votre code, votre permis de conduire et rouler en toute sécurité.',
  path: '/blog',
  keywords: ['conseils permis de conduire', 'réviser code de la route', 'sécurité routière'],
})

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      <div className="pt-32">
        <BlogList posts={blogPosts} categories={blogCategories} />
      </div>
      <Footer />
    </main>
  )
}
