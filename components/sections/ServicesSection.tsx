// gevs-site/components/sections/ServicesSection.tsx
// Server Component — NO 'use client'
import { servicesContent } from '@/lib/content/services'
import ServiceCard from '@/components/ui/ServiceCard'

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="scroll-mt-16 py-20 px-6 bg-gradient-to-b from-slate-50 to-white"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-ink tracking-tight">
            {servicesContent.sectionTitle}
          </h2>
          <p className="text-lg text-muted mt-3 max-w-2xl mx-auto">
            {servicesContent.sectionSubtitle}
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-6">
          {servicesContent.services.map((service) => (
            <div key={service.id} className="w-full md:w-[calc(50%-12px)] xl:w-[calc(33.333%-16px)]">
              <ServiceCard
                title={service.title}
                description={service.description}
                outcomes={service.outcomes}
                tools={service.tools}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
