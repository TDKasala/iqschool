
import Navigation from '@/components/navigation'
import HeroSection from '@/components/hero-section'
import AboutSection from '@/components/about-section'
import POSPSection from '@/components/posp-section'
import UbankSection from '@/components/ubank-section'
import ParentPortalSection from '@/components/parent-portal-section'
import TechAdvantagesSection from '@/components/tech-advantages-section'
import TestimonialsSection from '@/components/testimonials-section'
import ContactForm from '@/components/contact-form'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <POSPSection />
      <UbankSection />
      <ParentPortalSection />
      <TechAdvantagesSection />
      <TestimonialsSection />
      <ContactForm />
      <Footer />
    </main>
  )
}
