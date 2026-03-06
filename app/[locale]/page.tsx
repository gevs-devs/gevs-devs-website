// Server Component — NO 'use client'
import type { Metadata } from 'next'
import { siteContent, type Locale } from '@/lib/content/i18n'
import Navbar from '@/components/layout/Navbar'
import HeroSection from '@/components/sections/HeroSection'
import ServicesSection from '@/components/sections/ServicesSection'
import AboutSection from '@/components/sections/AboutSection'
import TechStackSection from '@/components/sections/TechStackSection'
import ContactSection from '@/components/sections/ContactSection'

export function generateStaticParams() {
  return [{ locale: 'it' }, { locale: 'en' }]
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const content = siteContent[locale as Locale]
  return {
    title: content.meta.title,
    description: content.meta.description,
    openGraph: {
      title: content.meta.title,
      description: content.meta.description,
      url: `https://gevs.it/${locale}`,
      siteName: 'GEVS',
      locale: locale === 'it' ? 'it_IT' : 'en_US',
      type: 'website',
    },
    alternates: {
      canonical: `https://gevs.it/${locale}`,
      languages: {
        it: 'https://gevs.it/it',
        en: 'https://gevs.it/en',
        'x-default': 'https://gevs.it/it',
      },
    },
  }
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
    </>
  )
}
