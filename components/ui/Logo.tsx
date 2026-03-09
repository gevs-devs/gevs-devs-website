'use client'

import { useEffect, useState, useRef } from 'react'

const TEXT = 'GEVS'
const DOMAIN = '.dev'
const TYPING_SPEED = 90
const BLINK_SPEED = 530
const INITIAL_DELAY = 300

export default function Logo({ variant = 'light' }: { variant?: 'light' | 'dark' }) {
  const isDark = variant === 'dark'
  const [displayed, setDisplayed] = useState('')
  const [showCursor, setShowCursor] = useState(true)
  const [doneTyping, setDoneTyping] = useState(false)
  const [phase, setPhase] = useState<'waiting' | 'typing' | 'done'>('waiting')
  const containerRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const timeout = setTimeout(() => setPhase('typing'), INITIAL_DELAY)
    return () => clearTimeout(timeout)
  }, [])

  useEffect(() => {
    if (phase !== 'typing') return
    let i = 0
    const full = TEXT + DOMAIN
    const interval = setInterval(() => {
      i++
      if (i <= full.length) {
        setDisplayed(full.slice(0, i))
      } else {
        clearInterval(interval)
        setDoneTyping(true)
        setPhase('done')
      }
    }, TYPING_SPEED)
    return () => clearInterval(interval)
  }, [phase])

  useEffect(() => {
    if (!doneTyping) return
    const interval = setInterval(() => {
      setShowCursor((v) => !v)
    }, BLINK_SPEED)
    return () => clearInterval(interval)
  }, [doneTyping])

  const gevsChars = displayed.slice(0, TEXT.length)
  const domainChars = displayed.slice(TEXT.length)

  return (
    <span
      ref={containerRef}
      className="group inline-flex items-center gap-0 font-mono select-none cursor-default"
      aria-label="GEVS.dev"
    >
      {/* Terminal window pill */}
      <span className={`inline-flex items-center gap-2 rounded-lg border px-3 py-1.5 transition-shadow duration-300 group-hover:shadow-md ${
        isDark
          ? 'border-slate-700 bg-slate-800/80 backdrop-blur-sm shadow-sm shadow-indigo-500/10'
          : 'border-slate-200 bg-white/80 backdrop-blur-sm shadow-sm'
      }`}>
        {/* Prompt symbol */}
        <span className="text-indigo-400 text-sm font-semibold">$</span>

        {/* Typed text */}
        <span className="text-[1.05rem] tracking-tight font-bold">
          <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
            {gevsChars}
          </span>
          <span className={`font-medium ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
            {domainChars}
          </span>
        </span>

        {/* Cursor */}
        <span
          className={`inline-block w-[7px] h-[1.15rem] rounded-[1px] bg-gradient-to-b from-indigo-500 to-violet-500 translate-y-[1px] transition-opacity duration-75 ${
            doneTyping && !showCursor ? 'opacity-0' : 'opacity-100'
          }`}
        />
      </span>
    </span>
  )
}
