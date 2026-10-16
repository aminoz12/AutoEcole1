import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import PricingWrapper from '@/components/PricingWrapper'
import StudentReviewsSection from '@/components/StudentReviewsSection'
import WebPackSection from '@/components/WebPackSection'
import BlogPreview from '@/components/BlogPreview'
import FAQSection from '@/components/FAQSection'
import CTASection from '@/components/CTASection'
import Footer from '@/components/Footer'
import CPFPopup from '@/components/CPFPopup'
import CallbackForm from '@/components/CallbackForm'
import { FAQPageJsonLd } from '@/components/seo/JsonLd'
import { blogPosts } from '@/lib/blog-data'
import { homepageFaqs } from '@/lib/content/faq-data'

export default function Home() {
  const featuredPosts = blogPosts.slice(0, 5)

  return (
    <main className="min-h-screen">
      <FAQPageJsonLd faqs={homepageFaqs} />

      <Header />
      <HeroSection />
      <PricingWrapper />

      {/* Capture au moment où l'intention est la plus forte : juste après les prix */}
      <section className="bg-[#0B0F19] px-4 pb-4 pt-2">
        <div className="container mx-auto max-w-3xl">
          <CallbackForm
            source="home:after-pricing"
            title="Une question sur nos formules ? On vous rappelle"
            subtitle="Laissez votre numéro — un conseiller vous rappelle sous 24 h ouvrées pour vous aider à choisir, sans engagement."
          />
        </div>
      </section>

      <StudentReviewsSection />
      <WebPackSection />
      <FAQSection />
      <CTASection />
      <BlogPreview posts={featuredPosts} />
      <Footer />
      <CPFPopup />
    </main>
  )
}
