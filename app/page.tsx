import Header from '@/components/Header'
import PromoBanner from '@/components/PromoBanner'
import HeroSection from '@/components/HeroSection'
import FeaturesSection from '@/components/FeaturesSection'
import MissionSection from '@/components/MissionSection'
import MediaSection from '@/components/MediaSection'
import CodeTrainingSection from '@/components/CodeTrainingSection'
import DrivingSchoolSection from '@/components/DrivingSchoolSection'
import InsuranceSection from '@/components/InsuranceSection'
import PointsRecoverySection from '@/components/PointsRecoverySection'
import PricingSection from '@/components/PricingSection'
import CPFFinancingSection from '@/components/CPFFinancingSection'
import TrustSection from '@/components/TrustSection'
import InstructorsPreview from '@/components/InstructorsPreview'
import FAQSection from '@/components/FAQSection'
import CTASection from '@/components/CTASection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Header - Sticky navigation */}
      <Header />
      
      {/* Promo Banner - Limited time offer */}
      <PromoBanner />
      
      {/* Hero Section - Main landing area */}
      <HeroSection />
      
      {/* Features Section - Why choose us */}
      <FeaturesSection />
      
      {/* Mission Section - Our mission and values */}
      <MissionSection />
      
      {/* Media Section - Media logos */}
      <MediaSection />
      
      {/* Code Training Section - Code training app */}
      <CodeTrainingSection />
      
      {/* Driving School Section - Driving school services */}
      <DrivingSchoolSection />
      
      {/* Insurance Section - Car insurance */}
      <InsuranceSection />
      
      {/* Points Recovery Section - Points recovery training */}
      <PointsRecoverySection />
      
      {/* Pricing Section - Transparent pricing */}
      <PricingSection />
      
      {/* CPF Financing Section - CPF financing promotion */}
      <CPFFinancingSection />
      
      {/* Trust Section - Reviews and testimonials */}
      <TrustSection />
      
      {/* Instructors Preview - Meet our team */}
      <InstructorsPreview />
      
      {/* FAQ Section - Common questions */}
      <FAQSection />
      
      {/* CTA Section - Final call to action */}
      <CTASection />
      
      {/* Footer - Links and contact info */}
      <Footer />
    </main>
  )
}

