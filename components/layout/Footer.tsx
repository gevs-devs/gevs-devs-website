// gevs-site/components/layout/Footer.tsx
// Server Component — NO 'use client'
export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-slate-900 text-slate-400 px-6 py-12">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        {/* Brand */}
        <div className="flex flex-col gap-2">
          <span className="text-white font-bold text-lg tracking-tight">GEVS</span>
          <span className="text-sm">Quality Assurance & Test Automation</span>
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

        {/* Location & copyright */}
        <div className="flex flex-col gap-1 text-sm">
          <span>📍 Milan, Italy</span>
          <span>© {year} GEVS. All rights reserved.</span>
        </div>
      </div>
    </footer>
  )
}
