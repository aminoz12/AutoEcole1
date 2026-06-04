import { notFound } from 'next/navigation'
import BlogPost from '@/components/blog/BlogPost'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { BlogPostingJsonLd } from '@/components/seo/JsonLd'
import { blogPosts } from '@/lib/blog-data'
import { createPageMetadata } from '@/lib/seo/metadata'

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug)

  if (!post) {
    return createPageMetadata({
      title: 'Article introuvable',
      description: 'Cet article n\'existe pas ou a été déplacé.',
      path: '/blog',
      noIndex: true,
    })
  }

  return createPageMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
    keywords: post.tags,
    ogType: 'article',
    publishedTime: post.published_at,
    authors: [post.author_name],
    tags: post.tags,
  })
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug)

  if (!post) {
    notFound()
  }

  const relatedPosts = blogPosts
    .filter((p) => p.category === post.category && p.id !== post.id)
    .slice(0, 3)

  return (
    <main className="min-h-screen bg-gray-50">
      <BlogPostingJsonLd
        title={post.title}
        description={post.excerpt}
        slug={post.slug}
        publishedAt={post.published_at}
        authorName={post.author_name}
        image={post.featured_image}
      />
      <Header />
      <div className="pt-32">
        <BlogPost post={post} relatedPosts={relatedPosts} />
      </div>
      <Footer />
    </main>
  )
}
