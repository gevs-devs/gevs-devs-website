// gevs-site/app/page.tsx
// Root redirect: sends visitors to /it (primary locale).
// Required because output: 'export' + [locale] routing generates /it/ and /en/
// but not /. This page stays as the redirect handler for the root route.
// Production Nginx also redirects / → /it; this file handles `next dev`.
export default function RootPage() {
  return (
    <html>
      <head>
        <meta httpEquiv="refresh" content="0; url=/it" />
      </head>
      <body>
        <p>
          Redirecting to <a href="/it">/it</a>…
        </p>
      </body>
    </html>
  )
}
