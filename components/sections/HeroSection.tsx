// gevs-site/components/sections/HeroSection.tsx
// Server Component — NO 'use client'
import { heroContent } from '@/lib/content/hero'

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="scroll-mt-16 py-24 px-6 text-center bg-surface"
    >
      <div className="max-w-3xl mx-auto flex flex-col items-center gap-6">
        <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold text-ink tracking-tight leading-tight">
          {heroContent.headline}
        </h1>
        <p className="text-lg md:text-xl text-muted max-w-2xl leading-relaxed">
          {heroContent.subheadline}
        </p>
        <a
          href="#contact"
          className="inline-block px-8 py-3 rounded-md bg-brand text-white font-semibold text-base hover:bg-brand-dark transition-colors"
        >
          {heroContent.cta}
        </a>
      </div>
    </section>
  )
}
