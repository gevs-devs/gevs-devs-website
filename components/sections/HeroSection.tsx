// gevs-site/components/sections/HeroSection.tsx
// Server Component — NO 'use client'
import { heroContent } from '@/lib/content/hero'
import TerminalAnimation from '@/components/ui/TerminalAnimation'

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="scroll-mt-16 py-24 px-6 bg-gradient-to-br from-white via-indigo-100/60 to-violet-50/40 relative overflow-hidden"
    >
      {/* Decorative gradient orbs */}
      <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-indigo-300/40 blur-3xl pointer-events-none" aria-hidden="true" />
      <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-violet-300/35 blur-3xl pointer-events-none" aria-hidden="true" />

      <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center gap-12 relative">
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
            className="inline-block px-8 py-3 rounded-md bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-semibold text-base hover:opacity-90 transition-opacity"
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
