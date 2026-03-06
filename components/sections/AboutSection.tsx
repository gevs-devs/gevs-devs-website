// gevs-site/components/sections/AboutSection.tsx
// Server Component — NO 'use client'
import { aboutContent } from '@/lib/content/about'

export default function AboutSection() {
  return (
    <section
      id="about"
      className="scroll-mt-16 py-20 px-6 bg-surface"
    >
      <div className="max-w-4xl mx-auto">
        {/* Mission */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-ink tracking-tight mb-6">
            {aboutContent.mission.headline}
          </h2>
          <p className="text-lg text-muted leading-relaxed max-w-3xl">
            {aboutContent.mission.body}
          </p>
        </div>

        {/* Team */}
        <div>
          <h3 className="text-xl font-semibold text-ink mb-8">The team</h3>
          <div className="flex flex-wrap gap-8">
            {aboutContent.team.map((member) => (
              <div key={member.id} className="flex items-center gap-4">
                <div
                  className="w-14 h-14 rounded-full bg-brand text-white flex items-center justify-center text-lg font-bold flex-shrink-0"
                  aria-hidden="true"
                >
                  {member.initials}
                </div>
                <div>
                  <p className="font-semibold text-ink">{member.name}</p>
                  <p className="text-sm text-muted">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
