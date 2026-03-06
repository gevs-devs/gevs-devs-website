export default function Home() {
  return (
    <div className="min-h-screen bg-surface flex flex-col">
      <nav className="px-6 py-4 flex items-center border-b border-slate-100">
        <img
          src="/logo.svg"
          alt="GEVS"
          width={120}
          height={30}
          className="h-8 w-auto"
        />
      </nav>
      <main className="flex-1 flex flex-col items-center justify-center px-6 text-center">
        <h1 className="text-4xl font-bold font-sans text-ink tracking-tight mb-4">
          GEVS
        </h1>
        <p className="text-lg text-muted mb-8 max-w-md">
          Quality Assurance &amp; Test Automation — Modern QA partner. Coming soon.
        </p>
        <a
          href="mailto:info@gevs.it"
          className="inline-block px-6 py-3 rounded-md bg-brand text-white font-sans font-semibold hover:bg-brand-dark transition-colors"
        >
          Get in touch
        </a>
      </main>
    </div>
  )
}
