// gevs-site/app/[locale]/layout.tsx
// Owns <html lang> so each locale's static HTML gets the correct language attribute.
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://example.com'),
  title: 'GEVS — Quality Assurance & Test Automation',
  description: 'Modern QA partner combining deep automation expertise with AI-driven quality improvement.',
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  return (
    <html lang={locale} className={`${inter.variable} scroll-smooth`}>
      <body className="antialiased bg-surface text-ink font-sans">
        {children}
      </body>
    </html>
  )
}
