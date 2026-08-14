'use client'

import { motion } from 'framer-motion'
import { BadgeCheck, Calendar, Clock, ExternalLink, Tag, ArrowLeft, Share2, Facebook, Twitter, MessageCircle } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import toast from 'react-hot-toast'
import { articleReviewsBySlug, editorialAuthor, officialSourcesBySlug } from '@/lib/content/editorial-data'

interface BlogPost {
  id: string
  title: string
  slug: string
  content: string
  excerpt: string
  featured_image: string | null
  author_name: string
  category: string
  tags: string[]
  views_count: number
  published_at: string
}

interface BlogPostProps {
  post: BlogPost
  relatedPosts: BlogPost[]
}

export default function BlogPost({ post, relatedPosts }: BlogPostProps) {
  const review = articleReviewsBySlug[post.slug]
  const officialSources = officialSourcesBySlug[post.slug] || []

  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString('fr-FR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
  }

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      'Permis': 'bg-blue-100 text-blue-700',
      'Code': 'bg-purple-100 text-purple-700',
      'Conduite': 'bg-green-100 text-green-700',
      'Conseils': 'bg-amber-100 text-amber-700',
      'Actualités': 'bg-red-100 text-red-700',
      'Sécurité': 'bg-orange-100 text-orange-700',
      'Assurance': 'bg-cyan-100 text-cyan-700',
    }
    return colors[category] || 'bg-primary/10 text-primary'
  }

  const shareUrl = typeof window !== 'undefined' ? window.location.href : ''
  
  const shareOnWhatsApp = () => {
    const text = encodeURIComponent(`${post.title} - ${shareUrl}`)
    window.open(`https://wa.me/?text=${text}`, '_blank')
    toast.success('Partage sur WhatsApp !')
  }

  const shareOnFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`, '_blank')
    toast.success('Partage sur Facebook !')
  }

  const shareOnTwitter = () => {
    const text = encodeURIComponent(post.title)
    window.open(`https://twitter.com/intent/tweet?text=${text}&url=${encodeURIComponent(shareUrl)}`, '_blank')
    toast.success('Partage sur Twitter !')
  }

  const copyLink = () => {
    navigator.clipboard.writeText(shareUrl)
    toast.success('Lien copié dans le presse-papier !')
  }

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Back Button */}
      <Link
        href="/blog"
        className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8"
      >
        <ArrowLeft className="w-4 h-4" />
        Retour au blog
      </Link>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2">
          <article className="bg-white rounded-xl shadow-sm overflow-hidden">
            {/* Featured Image */}
            {post.featured_image && (
              <div className="relative h-96">
                <Image
                  src={post.featured_image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
            )}

            <div className="p-8">
              {/* Category */}
              <div className={`inline-block px-3 py-1 text-sm font-semibold rounded-full mb-4 ${getCategoryColor(post.category)}`}>
                {post.category}
              </div>

              {/* Title */}
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                {post.title}
              </h1>

              {/* Meta */}
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-6 pb-6 border-b border-gray-200">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary font-semibold">
                      {editorialAuthor.name.charAt(0)}
                    </span>
                  </div>
                  <span>{editorialAuthor.name}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>{formatDate(post.published_at)}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>5 min de lecture</span>
                </div>
                {review && (
                  <div className="flex items-center gap-1 text-emerald-700">
                    <BadgeCheck className="w-4 h-4" />
                    <span>Vérifié le {formatDate(review.reviewedAt)}</span>
                  </div>
                )}
              </div>

              {review && (
                <p className="-mt-2 mb-6 text-sm text-gray-600">
                  Révision pédagogique : {review.reviewer.name} — {review.reviewer.credential}.
                </p>
              )}

              {/* Content — demote any H1 in the article body so the page keeps a single H1 (the title) */}
              <div
                className="blog-content max-w-none"
                dangerouslySetInnerHTML={{
                  __html: post.content
                    .replace(/<h1(\s|>)/gi, '<h2$1')
                    .replace(/<\/h1>/gi, '</h2>'),
                }}
              />

              {officialSources.length > 0 && (
                <section className="mt-8 border-t border-gray-200 pt-8" aria-labelledby="sources-officielles">
                  <h2 id="sources-officielles" className="text-xl font-bold text-gray-900">
                    Sources officielles
                  </h2>
                  <ul className="mt-4 space-y-3">
                    {officialSources.map((source) => (
                      <li key={source.url}>
                        <a
                          href={source.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group flex items-start gap-3 rounded-lg border border-gray-200 p-4 transition hover:border-primary hover:bg-primary/5"
                        >
                          <ExternalLink className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                          <span>
                            <span className="block font-semibold text-gray-900 group-hover:text-primary">{source.label}</span>
                            <span className="mt-1 block text-sm text-gray-600">{source.description}</span>
                          </span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </section>
              )}

              {/* Social Sharing */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                    <Share2 className="w-5 h-5" />
                    Partager cet article
                  </h3>
                  <div className="flex items-center gap-3">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={shareOnWhatsApp}
                      className="flex items-center gap-2 px-4 py-2 bg-[#25D366] text-white rounded-lg hover:bg-[#25D366]/90 transition-colors"
                    >
                      <MessageCircle className="w-4 h-4" />
                      WhatsApp
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={shareOnFacebook}
                      className="flex items-center gap-2 px-4 py-2 bg-[#1877F2] text-white rounded-lg hover:bg-[#1877F2]/90 transition-colors"
                    >
                      <Facebook className="w-4 h-4" />
                      Facebook
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={shareOnTwitter}
                      className="flex items-center gap-2 px-4 py-2 bg-[#1DA1F2] text-white rounded-lg hover:bg-[#1DA1F2]/90 transition-colors"
                    >
                      <Twitter className="w-4 h-4" />
                      Twitter
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={copyLink}
                      className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                    >
                      <Share2 className="w-4 h-4" />
                      Copier le lien
                    </motion.button>
                  </div>
                </div>
              </div>

              {/* Tags */}
              {post.tags && post.tags.length > 0 && (
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center gap-1 px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                      >
                        <Tag className="w-3 h-3" />
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </article>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="sticky top-24 space-y-6">
            {/* Related Posts */}
            {relatedPosts.length > 0 && (
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Articles similaires
                </h3>
                <div className="space-y-4">
                  {relatedPosts.map((relatedPost) => (
                    <Link
                      key={relatedPost.id}
                      href={`/blog/${relatedPost.slug}`}
                      className="block group"
                    >
                      <h4 className="font-semibold text-gray-900 group-hover:text-primary transition-colors mb-1 line-clamp-2">
                        {relatedPost.title}
                      </h4>
                      <p className="text-sm text-gray-600 line-clamp-2">
                        {relatedPost.excerpt}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* CTA */}
            <div className="bg-gradient-to-br from-primary to-primary/80 rounded-xl shadow-sm p-6 text-white">
              <h3 className="text-xl font-bold mb-2">
                Prêt à commencer ?
              </h3>
              <p className="text-white/90 mb-4">
                Inscrivez-vous dès maintenant et commencez votre formation
              </p>
              <Link
                href="/s-inscrire"
                className="block w-full bg-white text-primary text-center font-semibold py-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                S'inscrire
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Related Articles Section at Bottom */}
      {relatedPosts.length > 0 && (
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Articles similaires
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedPosts.map((relatedPost) => (
              <Link
                key={relatedPost.id}
                href={`/blog/${relatedPost.slug}`}
                className="group"
              >
                <motion.article
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-xl shadow-sm overflow-hidden h-full transition-shadow hover:shadow-md"
                >
                  {relatedPost.featured_image && (
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={relatedPost.featured_image}
                        alt={relatedPost.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <div className={`inline-block px-3 py-1 text-xs font-semibold rounded-full mb-3 ${getCategoryColor(relatedPost.category)}`}>
                      {relatedPost.category}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors line-clamp-2">
                      {relatedPost.title}
                    </h3>
                    <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                      {relatedPost.excerpt}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{formatDate(relatedPost.published_at)}</span>
                      </div>
                    </div>
                  </div>
                </motion.article>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

