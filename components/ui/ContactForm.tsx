'use client'

import { useState } from 'react'

interface ContactLabels {
  name: string
  email: string
  message: string
  submit: string
  sending: string
  successMessage: string
  errorMessage: string
}

type FormStatus = 'idle' | 'loading' | 'success' | 'error'

export default function ContactForm({ labels }: { labels: ContactLabels }) {
  const [status, setStatus] = useState<FormStatus>('idle')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('loading')

    const formData = new FormData(e.currentTarget)
    const payload = {
      access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
      subject: 'New contact from GEVS website',
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      message: formData.get('message') as string,
    }

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload),
      })
      const data = await res.json()
      setStatus(data.success ? 'success' : 'error')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <p
        role="alert"
        className="rounded-lg bg-green-50 border border-green-200 text-green-800 px-4 py-3 text-sm"
      >
        {labels.successMessage}
      </p>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <label htmlFor="name" className="text-sm font-medium text-ink">
          {labels.name}
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
          className="rounded-lg border border-ink/20 bg-white px-3 py-2 text-sm text-ink placeholder:text-ink/40 focus:outline-none focus:ring-2 focus:ring-brand"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="email" className="text-sm font-medium text-ink">
          {labels.email}
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className="rounded-lg border border-ink/20 bg-white px-3 py-2 text-sm text-ink placeholder:text-ink/40 focus:outline-none focus:ring-2 focus:ring-brand"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="message" className="text-sm font-medium text-ink">
          {labels.message}
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="rounded-lg border border-ink/20 bg-white px-3 py-2 text-sm text-ink placeholder:text-ink/40 focus:outline-none focus:ring-2 focus:ring-brand resize-none"
        />
      </div>

      {status === 'error' && (
        <p
          role="alert"
          className="rounded-lg bg-red-50 border border-red-200 text-red-800 px-4 py-3 text-sm"
        >
          {labels.errorMessage}
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="self-start rounded-lg bg-gradient-to-r from-indigo-600 to-violet-600 px-6 py-2.5 text-sm font-semibold text-white hover:opacity-90 transition-opacity disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === 'loading' ? labels.sending : labels.submit}
      </button>
    </form>
  )
}
