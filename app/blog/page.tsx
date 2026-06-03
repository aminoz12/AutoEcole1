import BlogList from '@/components/blog/BlogList'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { blogPosts, blogCategories } from '@/lib/blog-data'

export const metadata = {
  title: 'Blog - AutoEcole Pro | Conseils et Actualités',
  description: 'Découvrez nos articles sur le code de la route, le permis de conduire, la sécurité routière et l\'assurance automobile.',
}

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


