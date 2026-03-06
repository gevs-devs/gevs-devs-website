// gevs-site/components/ui/ServiceCard.tsx
// Server Component — NO 'use client'

export interface ServiceCardProps {
  title: string
  description: string
  tools: readonly string[]
}

export default function ServiceCard({ title, description, tools }: ServiceCardProps) {
  return (
    <article className="rounded-xl border border-slate-200 bg-white p-6 flex flex-col gap-3 h-full">
      <h3 className="text-lg font-semibold text-ink leading-snug">{title}</h3>
      <p className="text-sm text-muted leading-relaxed flex-1">{description}</p>
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
