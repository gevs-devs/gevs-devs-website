// Server Component — NO 'use client'
export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <>
      {/* Gradient divider */}
      <div className="h-px bg-gradient-to-r from-indigo-500 to-violet-500" aria-hidden="true" />

      <footer className="bg-gradient-to-br from-slate-900 to-indigo-950 text-slate-400 px-6 py-12">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Brand */}
          <div className="flex flex-col gap-1.5">
            <span className="text-white font-bold text-lg tracking-tight">GEVS</span>
            <span className="text-sm text-slate-400 italic">We test so your users don&apos;t have to.</span>
            <a
              href="mailto:info@gevs.dev"
              className="text-sm text-indigo-400 hover:text-indigo-300 transition-colors mt-1"
            >
              info@gevs.dev
            </a>
          </div>

          {/* Nav links */}
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap gap-6 text-sm">
              <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#tech" className="hover:text-white transition-colors">Tools</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </nav>

          {/* Location, back to top & copyright */}
          <div className="flex flex-col gap-2 text-sm">
            <span>📍 Milan · Genova · Catania</span>
            <span>🇨🇭 Switzerland</span>
            <span>© {year} GEVS. All rights reserved.</span>
            <a href="#hero" className="text-indigo-400 hover:text-indigo-300 transition-colors mt-1">
              ↑ Back to top
            </a>
          </div>
        </div>
      </footer>
    </>
  )
}
