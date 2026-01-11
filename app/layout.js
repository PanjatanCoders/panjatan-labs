import './globals.css'
import { Providers } from './providers'

export const metadata = {
  metadataBase: new URL('https://panjatanlabs.com'),
  title: {
    default: 'Panjatan Labs | QA Tools, Test Management & Automation Reporting',
    template: '%s | Panjatan Labs'
  },
  description: 'Professional QA tools for modern testing teams. Get QA templates, test management software, and automation reporting tools. Save 40% on QA Office-Ready Toolkit - ₹299 only!',
  keywords: [
    'QA tools',
    'test management',
    'automation reporting',
    'QA templates',
    'test plan templates',
    'bug report templates',
    'quality assurance',
    'software testing',
    'QA toolkit',
    'test case management',
    'automation testing',
    'QA process',
    'testing tools',
    'pramana manager',
    'pramana reporter',
    'test reporting',
    'QA documentation'
  ],
  authors: [{ name: 'Panjatan Labs' }],
  creator: 'Panjatan Labs',
  publisher: 'Panjatan Labs',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://panjatanlabs.com',
    title: 'Panjatan Labs | QA Tools, Test Management & Automation Reporting',
    description: 'Professional QA tools for modern testing teams. Get QA templates, test management software, and automation reporting tools. Save 40% on QA Office-Ready Toolkit - ₹299 only!',
    siteName: 'Panjatan Labs',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Panjatan Labs - Professional QA Tools',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Panjatan Labs | QA Tools, Test Management & Automation Reporting',
    description: 'Professional QA tools for modern testing teams. Save 40% on QA Office-Ready Toolkit - ₹299 only!',
    images: ['/og-image.png'],
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
    // Add your verification codes when available
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
    // bing: 'your-bing-verification-code',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://panjatanlabs.com" />
        <meta name="theme-color" content="#0891b2" />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}