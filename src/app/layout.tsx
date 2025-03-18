import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Art of Paint and Floors | Professional Painting & Flooring Services in Winter Garden, FL',
  description: 'Expert residential painting and flooring services in Winter Garden, FL. Quality workmanship, competitive pricing, and exceptional customer service.',
  keywords: 'painting services, flooring services, Winter Garden FL, residential painting, professional painters, flooring installation',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans`}>
        <Navigation />
        <main className="min-h-screen pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
} 