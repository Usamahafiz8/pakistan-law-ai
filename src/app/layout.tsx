import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Legal AI for Pakistan - Chat Interface',
  description: 'A ChatGPT-like interface for Legal AI for Pakistan - providing accurate legal information about Pakistani law',
  keywords: 'legal, pakistan, chat, ai, gpt, law, constitution, criminal-law, civil-law, family-law, tax-law, labor-law, cybercrime',
  authors: [{ name: 'Legal AI for Pakistan' }],
  robots: 'index, follow',
  openGraph: {
    title: 'Legal AI for Pakistan - Chat Interface',
    description: 'Get accurate legal information about Pakistani law with our AI assistant',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Legal AI for Pakistan - Chat Interface',
    description: 'Get accurate legal information about Pakistani law with our AI assistant',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
