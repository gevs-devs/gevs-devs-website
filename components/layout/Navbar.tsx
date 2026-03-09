// gevs-site/components/layout/Navbar.tsx
import Logo from '../ui/Logo'

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-surface border-b border-slate-100 px-6 py-4 flex items-center justify-between">
      <Logo />
      <a
        href="#contact"
        className="px-4 py-2 rounded-md bg-gradient-to-r from-indigo-600 to-violet-600 text-white text-sm font-semibold hover:opacity-90 transition-opacity"
      >
        Get in touch
      </a>
    </nav>
  )
}
