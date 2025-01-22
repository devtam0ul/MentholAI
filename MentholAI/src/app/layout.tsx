import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import { ClientLayout } from './client-layout'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const poppins = Poppins({
  weight: ['900'],  // Extra Bold weight
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Menthol.AI | Revolutionary Art Creation Suite',
  description: 'Menthol integrates machine learning with decentralized networks, empowering creators with powerful tools for artistic expression and global collaboration.',
  keywords: 'AI, NFT, blockchain, art creation, digital art, menthol, web3',
  openGraph: {
    title: 'Menthol.AI',
    description: 'Revolutionary Art Creation Suite',
    images: ['/og-image.jpg'],
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
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body className={`${inter.className} bg-black`}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}
