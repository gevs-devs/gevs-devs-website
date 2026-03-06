// gevs-site/components/sections/TechStackSection.tsx
// Server Component — NO 'use client'
import { techContent, techTools } from '@/lib/content/tech'

export default function TechStackSection() {
  return (
    <section
      id="tech"
      className="scroll-mt-16 py-20 px-6 bg-slate-50"
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-ink tracking-tight">
            {techContent.sectionTitle}
          </h2>
          <p className="text-lg text-muted mt-3">
            {techContent.sectionSubtitle}
          </p>
        </div>
        <div className="grid grid-cols-3 sm:grid-cols-5 xl:grid-cols-10 gap-6 items-center">
          {techTools.map((tool) => (
            <div
              key={tool.slug}
              className="flex flex-col items-center gap-2"
            >
              <img
                src={`/tech-logos/${tool.slug}.svg`}
                alt={tool.name}
                width={48}
                height={48}
                className="w-10 h-10 md:w-12 md:h-12 opacity-75 hover:opacity-100 transition-opacity"
              />
              <span className="text-xs text-muted text-center leading-tight">
                {tool.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
