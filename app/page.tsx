// Server Component — NO 'use client'
import Navbar from '@/components/layout/Navbar'
import HeroSection from '@/components/sections/HeroSection'
import ServicesSection from '@/components/sections/ServicesSection'
import AboutSection from '@/components/sections/AboutSection'
import TechStackSection from '@/components/sections/TechStackSection'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <TechStackSection />
        {/* Phase 3 will replace this placeholder with the real ContactSection */}
        <section
          id="contact"
          className="scroll-mt-16 py-20 px-6 bg-surface"
          aria-label="Contact section placeholder"
        />
      </main>
    </>
  )
}
