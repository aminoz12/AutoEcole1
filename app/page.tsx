import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import PricingWrapper from '@/components/PricingWrapper'
import StudentReviewsSection from '@/components/StudentReviewsSection'
import WebPackSection from '@/components/WebPackSection'
import BlogPreview from '@/components/BlogPreview'
import TestimonialsSection from '@/components/TestimonialsSection'
import FAQSection from '@/components/FAQSection'
import CTASection from '@/components/CTASection'
import Footer from '@/components/Footer'
import CPFPopup from '@/components/CPFPopup'
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
      <HeroSection />
      <PricingWrapper />
      <StudentReviewsSection />
      <WebPackSection />
      <TestimonialsSection testimonials={[]} />
      <FAQSection />
      <CTASection />
      <BlogPreview posts={featuredPosts} />
      <Footer />
      <CPFPopup />
    </main>
  )
}
