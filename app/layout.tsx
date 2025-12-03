import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Big Christmas Tree - Luxury Holiday Experience',
  description: 'An elegant luxury Christmas experience',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
