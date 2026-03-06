export type Locale = 'en'

export const siteContent: Record<Locale, {
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
  en: {
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
      directEmail: 'info@gevs.dev',
      linkedinLabel: 'LinkedIn',
    },
  },
} as const
