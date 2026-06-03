import { notFound } from 'next/navigation'
import BlogPost from '@/components/blog/BlogPost'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { blogPosts } from '@/lib/blog-data'

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = blogPosts.find(p => p.slug === params.slug)

  if (!post) {
    return {
      title: 'Article non trouvé',
    }
  }

  return {
    title: `${post.title} | AutoEcole Pro`,
    description: post.excerpt,
  }
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  // Find the blog post by slug
  const post = blogPosts.find(p => p.slug === params.slug)

  if (!post) {
    notFound()
  }

  // Find related posts (same category, exclude current)
  const relatedPosts = blogPosts
    .filter(p => p.category === post.category && p.id !== post.id)
    .slice(0, 3)

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      <div className="pt-32">
        <BlogPost post={post} relatedPosts={relatedPosts} />
      </div>
      <Footer />
    </main>
  )
}


