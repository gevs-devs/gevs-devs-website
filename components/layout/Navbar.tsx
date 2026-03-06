// gevs-site/components/layout/Navbar.tsx
// Server Component — NO 'use client'
export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-surface border-b border-slate-100 px-6 py-4 flex items-center justify-between">
      <img
        src="/logo.svg"
        alt="GEVS"
        width={120}
        height={30}
        className="h-8 w-auto"
      />
      <a
        href="#contact"
        className="px-4 py-2 rounded-md bg-brand text-white text-sm font-semibold hover:bg-brand-dark transition-colors"
      >
        Get in touch
      </a>
    </nav>
  )
}
