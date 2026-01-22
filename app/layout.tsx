import React from "react"
import type { Metadata } from 'next'
import { Space_Grotesk, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: '--font-heading' });
const _inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Portfolio | Bryan Hansel',
  description: 'Profissional pleno de Marketing, Design e Branding. Construo sistemas de marca de ponta a ponta.',
  generator: 'v0.app',
  icons: {
    icon: '/icon.png', 
    apple: '/apple-icon.png', 
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br" className={`${_spaceGrotesk.variable}`}>
      <body className={`${_inter.className} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}