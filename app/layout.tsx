import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import React from 'react'
import './globals.css'

export const metadata: Metadata = {
  title: 'SeeznTV - Tez orada | Online Kinoteatr',
  description: 'SeeznTV - O\'zbekiston eng yaxshi online kinoteatri. Tez orada sizlar bilan!',
  keywords: ['SeeznTV', 'online kinoteatr', 'filmlar', 'seriallar', 'O\'zbekiston', 'coming soon'],
  authors: [{ name: 'SeeznTV Team' }],
  creator: 'SeeznTV',
  publisher: 'SeeznTV',
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
  openGraph: {
    type: 'website',
    locale: 'uz_UZ',
    url: 'https://seezntv.uz',
    title: 'SeeznTV - Tez orada | Online Kinoteatr',
    description: 'O\'zbekiston eng yaxshi online kinoteatri. Tez orada sizlar bilan!',
    siteName: 'SeeznTV',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'SeeznTV - Online Kinoteatr',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SeeznTV - Tez orada | Online Kinoteatr',
    description: 'O\'zbekiston eng yaxshi online kinoteatri. Tez orada sizlar bilan!',
    images: ['/og-image.jpg'],
  },
  verification: {
    google: 'verification_token_here', // Replace with actual Google verification token
  },
  metadataBase: new URL('https://seezntv.uz'),
  manifest: '/manifest.json',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32' },
      { url: '/logo.png', sizes: '96x96', type: 'image/png' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="uz" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-N4MJNW8T');`,
          }}
        />

        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#8b5cf6" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="msapplication-TileImage" content="/icon-192.png" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="SeeznTV" />
        
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* DNS prefetch for performance */}
        <link rel="dns-prefetch" href="//seezntv.uz" />
        
        {/* Additional favicon formats */}
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="96x96" href="/logo.png" />
      </head>
      <body className="font-sans antialiased">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-N4MJNW8T"
            height="0" 
            width="0" 
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        
        {children}
      </body>
    </html>
  )
}
