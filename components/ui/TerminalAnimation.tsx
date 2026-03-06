'use client'

import { useState, useEffect } from 'react'

type LineType = 'command' | 'info' | 'pass' | 'summary' | 'empty'

const lines: { text: string; type: LineType }[] = [
  { text: '$ npx playwright test', type: 'command' },
  { text: '', type: 'empty' },
  { text: 'Running 12 tests using 3 workers', type: 'info' },
  { text: '', type: 'empty' },
  { text: '  ✓  login › user can log in (1.2s)', type: 'pass' },
  { text: '  ✓  checkout › cart updates correctly (0.8s)', type: 'pass' },
  { text: '  ✓  api › POST /orders returns 201 (0.4s)', type: 'pass' },
  { text: '  ✓  nav › all links resolve (0.6s)', type: 'pass' },
  { text: '  ✓  forms › contact form submits (1.1s)', type: 'pass' },
  { text: '  ✓  mobile › layout renders on 375px (0.9s)', type: 'pass' },
  { text: '', type: 'empty' },
  { text: '  12 passed (4.1s)', type: 'summary' },
]

const delays: Record<LineType, number> = {
  command: 600,
  info: 300,
  pass: 180,
  summary: 400,
  empty: 80,
}

export default function TerminalAnimation() {
  const [visibleCount, setVisibleCount] = useState(0)

  useEffect(() => {
    if (visibleCount >= lines.length) return
    const timer = setTimeout(
      () => setVisibleCount((n) => n + 1),
      delays[lines[visibleCount].type]
    )
    return () => clearTimeout(timer)
  }, [visibleCount])

  useEffect(() => {
    if (visibleCount < lines.length) return
    const timer = setTimeout(() => setVisibleCount(0), 3500)
    return () => clearTimeout(timer)
  }, [visibleCount])

  return (
    <div className="w-full max-w-md rounded-xl bg-zinc-900 shadow-2xl overflow-hidden">
      {/* Traffic lights */}
      <div className="flex gap-1.5 px-4 py-3 bg-zinc-800">
        <span className="w-3 h-3 rounded-full bg-red-500" />
        <span className="w-3 h-3 rounded-full bg-yellow-400" />
        <span className="w-3 h-3 rounded-full bg-green-500" />
      </div>

      {/* Terminal body */}
      <div className="px-5 py-4 font-mono text-sm h-[260px] overflow-hidden">
        {lines.slice(0, visibleCount).map((line, i) => (
          <div
            key={i}
            className={
              line.type === 'command'
                ? 'text-white'
                : line.type === 'pass'
                  ? 'text-green-400'
                  : line.type === 'summary'
                    ? 'text-green-300 font-semibold mt-1'
                    : line.type === 'info'
                      ? 'text-zinc-400'
                      : 'leading-3'
            }
          >
            {line.text || '\u00A0'}
          </div>
        ))}
        {visibleCount < lines.length && (
          <span className="inline-block w-2 h-[1.1em] bg-zinc-300 animate-pulse align-middle" />
        )}
      </div>
    </div>
  )
}
