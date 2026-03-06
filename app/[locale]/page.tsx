// Server Component — NO 'use client'
import type { Metadata } from 'next'
import Navbar from '@/components/layout/Navbar'
import HeroSection from '@/components/sections/HeroSection'
import ServicesSection from '@/components/sections/ServicesSection'
import AboutSection from '@/components/sections/AboutSection'
import TechStackSection from '@/components/sections/TechStackSection'
import ContactSection from '@/components/sections/ContactSection'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'GEVS — Quality Assurance & Test Automation',
  description: 'Modern QA partner combining deep automation expertise with AI-driven quality improvement.',
}

export function generateStaticParams() {
  return [{ locale: 'en' }]
}

export default async function LocalePage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <TechStackSection />
        <ContactSection locale={locale} />
      </main>
      <Footer />
    </>
  )
}
