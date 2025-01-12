import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Starknet DevX Magic',
  description: 'One-line installer for Starknet development environment setup across multiple platforms.',
  keywords: ['Starknet', 'DevX', 'development', 'installer', 'cross-platform'],
  authors: [{ name: 'Starknet Community' }],
  creator: 'Starknet Community',
  publisher: 'Starknet Community',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Starknet DevX Magic',
    description: 'Simplify your Starknet development setup with one command.',
    url: 'https://starknet-devx-magic.com',
    siteName: 'Starknet DevX Magic',
    images: [
      {
        url: 'https://starknet-devx-magic.com/og-image.png', // You'll need to create this image
        width: 1200,
        height: 630,
        alt: 'Starknet DevX Magic',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Starknet DevX Magic',
    description: 'Simplify your Starknet development setup with one command.',
    creator: '@StarknetDevX',
    images: ['https://starknet-devx-magic.com/twitter-image.png'], // You'll need to create this image
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

