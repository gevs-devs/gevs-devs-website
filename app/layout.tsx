import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

// IMPORTANT: Use `variable` not `className` — variable exposes --font-inter CSS var globally.
// `className` would scope the font to one element's subtree and break the @theme bridge.
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'GEVS — Quality Assurance & Test Automation',
  description: 'Modern QA partner combining deep automation expertise with AI-driven quality improvement.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className="antialiased bg-surface text-ink font-sans">
        {children}
      </body>
    </html>
  )
}
