import Header from '@/components/Header'
import PromoBanner from '@/components/PromoBanner'
import HeroSection from '@/components/HeroSection'
import PricingWrapper from '@/components/PricingWrapper'
import CPFFinancingSection from '@/components/CPFFinancingSection'
import BlogPreview from '@/components/BlogPreview'
import TestimonialsSection from '@/components/TestimonialsSection'
import FAQSection from '@/components/FAQSection'
import CTASection from '@/components/CTASection'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import { blogPosts } from '@/lib/blog-data'

export default function Home() {
  // Get first 5 blog posts for preview
  const featuredPosts = blogPosts.slice(0, 5)

  return (
    <main className="min-h-screen">
      {/* Header - Sticky navigation */}
      <Header />
      
      {/* Promo Banner - Limited time offer */}
      <PromoBanner />
      
      {/* Hero Section - Main landing area */}
      <HeroSection />
      
      {/* Pricing Sections - Nos leçons de conduite avec/sans code */}
      <PricingWrapper />
      
      {/* CPF Financing Section - CPF financing promotion */}
      <CPFFinancingSection />
      
      {/* Testimonials Section - Customer reviews */}
      <TestimonialsSection testimonials={[]} />
      
      {/* FAQ Section - Common questions */}
      <FAQSection />
      
      {/* CTA Section - Final call to action */}
      <CTASection />
      
      {/* Blog Preview - Latest articles */}
      <BlogPreview posts={featuredPosts} />
      
      {/* Footer - Links and contact info */}
      <Footer />
      
      {/* WhatsApp Floating Button */}
      <WhatsAppButton />
    </main>
  )
}

