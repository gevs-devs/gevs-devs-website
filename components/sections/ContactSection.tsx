// Server Component — NO 'use client'
import { siteContent } from '@/lib/content/i18n'
import ContactForm from '@/components/ui/ContactForm'

export default function ContactSection() {
  const content = siteContent['en'].contact

  return (
    <section
      id="contact"
      className="scroll-mt-16 py-20 px-6 bg-gradient-to-b from-slate-50 to-white"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section header — consistent with rest of page */}
        <div className="text-center mb-12">
          <h2
            id="contact-heading"
            className="text-3xl md:text-4xl font-bold text-ink tracking-tight"
          >
            {content.heading}
          </h2>
          <p className="text-lg text-muted mt-3 max-w-xl mx-auto">
            {content.subheading}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact form */}
          <ContactForm labels={content} />

          {/* Contact info card */}
          <div className="rounded-xl border border-slate-200 bg-white overflow-hidden flex flex-col h-fit">
            <div className="h-1 bg-gradient-to-r from-indigo-500 to-violet-500" aria-hidden="true" />
            <div className="p-8 flex flex-col gap-6">
              <h3 className="text-lg font-semibold text-ink">Or reach us directly</h3>

              <div className="flex flex-col gap-5">
                <div className="flex items-start gap-3">
                  <span className="text-xl mt-0.5">✉️</span>
                  <div>
                    <p className="text-sm font-medium text-ink mb-0.5">Email</p>
                    <a
                      href={`mailto:${content.directEmail}`}
                      className="text-indigo-600 hover:text-indigo-500 transition-colors text-sm"
                    >
                      {content.directEmail}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-xl mt-0.5">⚡</span>
                  <div>
                    <p className="text-sm font-medium text-ink mb-0.5">Response time</p>
                    <p className="text-sm text-muted">We typically reply within 24 hours.</p>
                  </div>
                </div>
              </div>

              <div className="mt-2 rounded-lg bg-indigo-50 border border-indigo-100 px-4 py-3">
                <p className="text-sm text-indigo-800 leading-relaxed">
                  Whether you need a full QA strategy or just want to discuss your testing setup — we&apos;re happy to talk.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
