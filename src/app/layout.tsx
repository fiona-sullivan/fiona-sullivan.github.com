import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Fiona Sullivan - Humanitarian Project Management',
  description: 'Humanitarian project management professional focused on international development, crisis response, and community-driven solutions.',
  keywords: ['humanitarian', 'project management', 'international development', 'crisis response', 'community engagement'],
  authors: [{ name: 'Fiona Sullivan' }],
  openGraph: {
    title: 'Fiona Sullivan - Humanitarian Project Management',
    description: 'Humanitarian project management focused on community-driven solutions',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
