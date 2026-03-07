// Server Component — NO 'use client'
import { techContent, techTools } from '@/lib/content/tech'

export default function TechStackSection() {
  const tools = [...techTools]

  return (
    <section
      id="tech"
      className="scroll-mt-16 py-20 bg-slate-50 overflow-hidden"
    >
      <div className="text-center mb-12 px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-ink tracking-tight">
          {techContent.sectionTitle}
        </h2>
        <p className="text-lg text-muted mt-3">
          {techContent.sectionSubtitle}
        </p>
      </div>

      {/* Marquee track — items duplicated to create seamless loop */}
      <div className="relative">
        {/* Fade edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 z-10 bg-gradient-to-r from-slate-50 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 z-10 bg-gradient-to-l from-slate-50 to-transparent" />

        <div className="flex animate-marquee w-max">
          {[...tools, ...tools].map((tool, i) => (
            <div
              key={`${tool.slug}-${i}`}
              className="flex flex-col items-center gap-2 px-8"
            >
              <img
                src={`/tech-logos/${tool.slug}.svg`}
                alt={tool.name}
                width={48}
                height={48}
                className="w-10 h-10 md:w-12 md:h-12 opacity-60 hover:opacity-100 grayscale hover:grayscale-0 transition-all"
              />
              <span className="text-xs text-muted text-center leading-tight whitespace-nowrap">
                {tool.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
