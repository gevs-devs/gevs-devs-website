// gevs-site/components/sections/ServicesSection.tsx
// Server Component — NO 'use client'
import { servicesContent } from '@/lib/content/services'
import ServiceCard from '@/components/ui/ServiceCard'

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="scroll-mt-16 py-20 px-6 bg-slate-50"
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
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {servicesContent.services.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              tools={service.tools}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
