import './globals.css'

import { Inter } from 'next/font/google'
import type { Metadata } from 'next'
import React from 'react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'
  ),
  title: 'Nur Muhamad Soleh',
  description:
    'Web Developer, Frontend Developer, Reactjs Developer, Mobile Developer, Fullstack Developer',
  keywords: [
    'Nur Muhamad Soleh',
    'Frontend Developer',
    'ReactJS Developer',
    'Next.js Developer',
    'Web Developer Jakarta',
    'Fullstack Developer',
    'TypeScript Developer',
    'Portfolio ReactJS',
  ],
  authors: [
    {
      name: 'Nur Muhamad Soleh',
    },
  ],
  creator: 'Nur Muhamad Soleh',
  publisher: 'Nur Muhamad Soleh',
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
