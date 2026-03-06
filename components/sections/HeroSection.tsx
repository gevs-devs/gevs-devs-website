// gevs-site/components/sections/HeroSection.tsx
// Server Component — NO 'use client'
import { heroContent } from '@/lib/content/hero'
import TerminalAnimation from '@/components/ui/TerminalAnimation'

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="scroll-mt-16 py-24 px-6 bg-surface"
    >
      <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Text */}
        <div className="flex flex-col items-center lg:items-start gap-6 lg:flex-1 text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold text-ink tracking-tight leading-tight whitespace-pre-line">
            {heroContent.headline}
          </h1>
          <p className="text-lg md:text-xl text-muted max-w-xl leading-relaxed">
            {heroContent.subheadline}
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-3 rounded-md bg-brand text-white font-semibold text-base hover:bg-brand-dark transition-colors"
          >
            {heroContent.cta}
          </a>
        </div>

        {/* Terminal */}
        <div className="lg:flex-1 w-full flex justify-center">
          <TerminalAnimation />
        </div>
      </div>
    </section>
  )
}
