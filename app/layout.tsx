// gevs-site/app/layout.tsx
// Minimal root layout — <html> and <body> are owned by [locale]/layout.tsx
// so each locale's static HTML gets the correct lang attribute.
// app/page.tsx (the / → /it redirect) renders its own <html> tags inline.
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
