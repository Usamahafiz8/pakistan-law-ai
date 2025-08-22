import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'LawPak - Acts & Laws of Pakistan',
  description: 'Pakistan\'s Complete Legal Database. Access all Acts and Laws of Pakistan with AI-powered assistance. Get instant answers, understand complex legal language, and navigate Pakistan\'s legal framework with confidence.',
  keywords: 'Pakistan, law, legal, acts, constitution, criminal law, civil law, legal database, AI legal assistant',
  authors: [{ name: 'LawPak - Government of Pakistan' }],
  creator: 'LawPak',
  publisher: 'Government of Pakistan',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://lawpak.gov.pk'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'LawPak - Acts & Laws of Pakistan',
    description: 'Pakistan\'s Complete Legal Database with AI-powered assistance',
    url: 'https://lawpak.gov.pk',
    siteName: 'LawPak',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'LawPak - Pakistan Legal Database',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LawPak - Acts & Laws of Pakistan',
    description: 'Pakistan\'s Complete Legal Database with AI-powered assistance',
    images: ['/twitter-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#059669" />
        <meta name="msapplication-TileColor" content="#059669" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
