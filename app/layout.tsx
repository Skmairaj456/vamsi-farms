import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Vamsi.Farms - Premium Organic Farm Products',
  description: 'Premium organic eggs and farm products with farm-to-table tracking, freshness-based delivery, and daily hygiene scores',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body>{children}</body>
    </html>
  )
}
