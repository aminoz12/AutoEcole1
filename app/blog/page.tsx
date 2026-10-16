import BlogList from '@/components/blog/BlogList'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { blogPosts, blogCategories } from '@/lib/blog-data'
import { createPageMetadata } from '@/lib/seo/metadata'

export const metadata = createPageMetadata({
  title: 'Blog permis de conduire — guides 2026',
  description:
    'Nos guides pour réussir le code et le permis : prix 2026, permis accéléré, boîte auto ou manuelle, aides au financement et conseils d’examen. Par des moniteurs.',
  path: '/blog',
  keywords: ['conseils permis de conduire', 'réussir le code de la route', 'guide permis Nanterre', 'examen permis 92'],
})

export default function BlogPage() {
  // Trié par date, pas par ordre du tableau : ajouter un article en tête de
  // lib/blog-data.ts ne peut plus casser la chronologie affichée.
  const sortedPosts = [...blogPosts].sort(
    (a, b) => new Date(b.published_at).getTime() - new Date(a.published_at).getTime(),
  )

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      <div className="pt-32">
        <BlogList posts={sortedPosts} categories={blogCategories} />
      </div>
      <Footer />
    </main>
  )
}
