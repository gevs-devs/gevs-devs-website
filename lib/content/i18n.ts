// i18n string map for Phase 3 SEO metadata and contact form labels.
// Pattern: same as lib/content/hero.ts — as const, no hardcoded strings in JSX.

export type Locale = 'it' | 'en'

export const siteContent: Record<Locale, {
  meta: {
    title: string
    description: string
  }
  contact: {
    heading: string
    subheading: string
    name: string
    email: string
    message: string
    submit: string
    sending: string
    successMessage: string
    errorMessage: string
    directEmail: string
    linkedinLabel: string
  }
}> = {
  it: {
    meta: {
      title: 'GEVS — Quality Assurance & Test Automation',
      description: "Partner QA moderno che combina competenza nell'automazione dei test con il miglioramento della qualità guidato dall'AI.",
    },
    contact: {
      heading: 'Contattaci',
      subheading: 'Scrivici per discutere il tuo progetto o richiedere un preventivo.',
      name: 'Nome',
      email: 'Email',
      message: 'Messaggio',
      submit: 'Invia messaggio',
      sending: 'Invio in corso…',
      successMessage: 'Messaggio inviato! Ti risponderemo al più presto.',
      errorMessage: "Errore nell'invio. Riprova più tardi.",
      directEmail: 'info@gevs.it',
      linkedinLabel: 'LinkedIn',
    },
  },
  en: {
    meta: {
      title: 'GEVS — Quality Assurance & Test Automation',
      description: 'Modern QA partner combining deep automation expertise with AI-driven quality improvement.',
    },
    contact: {
      heading: 'Get in touch',
      subheading: 'Write to us to discuss your project or request a quote.',
      name: 'Name',
      email: 'Email',
      message: 'Message',
      submit: 'Send message',
      sending: 'Sending…',
      successMessage: "Message sent! We'll get back to you soon.",
      errorMessage: 'Failed to send. Please try again.',
      directEmail: 'info@gevs.it',
      linkedinLabel: 'LinkedIn',
    },
  },
} as const
