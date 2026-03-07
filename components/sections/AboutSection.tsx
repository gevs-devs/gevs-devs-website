// gevs-site/components/sections/AboutSection.tsx
// Server Component — NO 'use client'
import { aboutContent } from '@/lib/content/about'

export default function AboutSection() {
  return (
    <section
      id="about"
      className="scroll-mt-16 py-20 px-6 bg-gradient-to-b from-white to-indigo-50/40"
    >
      <div className="max-w-4xl mx-auto">
        {/* Mission */}
        <div className="mb-16">
          <p className="text-sm font-semibold text-brand uppercase tracking-widest mb-3">About GEVS</p>
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {aboutContent.team.map((member) => (
              <div key={member.id} className="rounded-xl border border-slate-200 bg-white overflow-hidden flex flex-col gap-4">
                <div className="h-1 bg-gradient-to-r from-indigo-500 to-violet-500" aria-hidden="true" />
                <div className="px-6 pb-6 flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <div
                    className="w-12 h-12 rounded-full bg-brand text-white flex items-center justify-center text-sm font-bold flex-shrink-0"
                    aria-hidden="true"
                  >
                    {member.initials}
                  </div>
                  <div>
                    <p className="font-semibold text-ink">{member.name}</p>
                    <p className="text-sm text-brand font-medium">{member.role}</p>
                  </div>
                </div>
                <p className="text-sm text-muted leading-relaxed">{member.bio}</p>
                <ul className="flex flex-wrap gap-1.5" aria-label="Skills">
                  {member.skills.map((skill) => (
                    <li
                      key={skill}
                      className="text-xs px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 font-medium"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
