// Per-locale layout — passthrough.
// The html lang attribute is controlled by the root layout (static export constraint).
// Server Component — NO 'use client'
export default async function LocaleLayout({
  children,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  return <>{children}</>
}
