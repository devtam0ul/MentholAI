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
    <html lang="en" className="h-full">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#000000" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="format-detection" content="telephone=no" />
      </head>
      <body className={`${inter.className} bg-black h-full safe-top safe-bottom`}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}
