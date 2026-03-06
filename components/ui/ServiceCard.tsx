// gevs-site/components/ui/ServiceCard.tsx
// Server Component — NO 'use client'

export interface ServiceCardProps {
  title: string
  description: string
  outcomes: readonly string[]
  tools: readonly string[]
}

export default function ServiceCard({ title, description, outcomes, tools }: ServiceCardProps) {
  return (
    <article className="rounded-xl border border-slate-200 bg-white p-6 flex flex-col gap-3 h-full">
      <h3 className="text-lg font-semibold text-ink leading-snug">{title}</h3>
      <p className="text-sm text-muted leading-relaxed">{description}</p>
      <ul className="flex flex-col gap-1.5 flex-1">
        {outcomes.map((outcome) => (
          <li key={outcome} className="text-sm text-ink flex items-start gap-2">
            <span className="text-brand mt-0.5 flex-shrink-0">✓</span>
            {outcome}
          </li>
        ))}
      </ul>
      <ul className="flex flex-wrap gap-1.5 mt-auto pt-2" aria-label="Tools">
        {tools.map((tool) => (
          <li
            key={tool}
            className="text-xs px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 font-medium"
          >
            {tool}
          </li>
        ))}
      </ul>
    </article>
  )
}
