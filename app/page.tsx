import Header from '@/components/Header'
import PromoBanner from '@/components/PromoBanner'
import HeroSection from '@/components/HeroSection'
import PricingWrapper from '@/components/PricingWrapper'
import CPFFinancingSection from '@/components/CPFFinancingSection'
import WebPackSection from '@/components/WebPackSection'
import BlogPreview from '@/components/BlogPreview'
import TestimonialsSection from '@/components/TestimonialsSection'
import FAQSection from '@/components/FAQSection'
import CTASection from '@/components/CTASection'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import { OrganizationJsonLd, WebSiteJsonLd, FAQPageJsonLd } from '@/components/seo/JsonLd'
import { blogPosts } from '@/lib/blog-data'
import { homepageFaqs } from '@/lib/content/faq-data'

export default function Home() {
  const featuredPosts = blogPosts.slice(0, 5)

  return (
    <main className="min-h-screen">
      <OrganizationJsonLd />
      <WebSiteJsonLd />
      <FAQPageJsonLd faqs={homepageFaqs} />

      <Header />
      <PromoBanner />
      <HeroSection />
      <PricingWrapper />
      <CPFFinancingSection />
      <WebPackSection />
      <TestimonialsSection testimonials={[]} />
      <FAQSection />
      <CTASection />
      <BlogPreview posts={featuredPosts} />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
