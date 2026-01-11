import DiscountBanner from '@/components/DiscountBanner'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Products from '@/components/Products'
import Philosophy from '@/components/Philosophy'
import Footer from '@/components/Footer'
import SmoothScroll from '@/components/SmoothScroll'

export default function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': 'https://panjatanlabs.com/#organization',
        name: 'Panjatan Labs',
        url: 'https://panjatanlabs.com',
        logo: {
          '@type': 'ImageObject',
          url: 'https://panjatanlabs.com/logo.png',
        },
        sameAs: [
          // Add your social media URLs when available
        ],
      },
      {
        '@type': 'WebSite',
        '@id': 'https://panjatanlabs.com/#website',
        url: 'https://panjatanlabs.com',
        name: 'Panjatan Labs',
        description: 'Professional QA tools for modern testing teams',
        publisher: {
          '@id': 'https://panjatanlabs.com/#organization',
        },
      },
      {
        '@type': 'WebPage',
        '@id': 'https://panjatanlabs.com/#webpage',
        url: 'https://panjatanlabs.com',
        name: 'Panjatan Labs | QA Tools, Test Management & Automation Reporting',
        isPartOf: {
          '@id': 'https://panjatanlabs.com/#website',
        },
        about: {
          '@id': 'https://panjatanlabs.com/#organization',
        },
        description: 'Professional QA tools for modern testing teams. Get QA templates, test management software, and automation reporting tools.',
      },
      {
        '@type': 'Product',
        name: 'QA Office-Ready Toolkit',
        description: 'A curated set of professional QA documents used in real projects — designed to help testers work confidently from Day 1.',
        brand: {
          '@type': 'Brand',
          name: 'Panjatan Labs',
        },
        offers: {
          '@type': 'Offer',
          url: 'https://panjatantech.gumroad.com/l/qa-toolkit',
          priceCurrency: 'INR',
          price: '299',
          priceValidUntil: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
          availability: 'https://schema.org/InStock',
          itemCondition: 'https://schema.org/NewCondition',
        },
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '5',
          reviewCount: '1',
        },
      },
      {
        '@type': 'SoftwareApplication',
        name: 'Pramana Manager',
        applicationCategory: 'BusinessApplication',
        offers: {
          '@type': 'Offer',
          price: '19999',
          priceCurrency: 'INR',
        },
        description: 'A lightweight alternative to traditional test management tools, focused on clarity, speed, and real QA workflows.',
      },
      {
        '@type': 'SoftwareApplication',
        name: 'Pramana Reporter',
        applicationCategory: 'DeveloperApplication',
        offers: {
          '@type': 'Offer',
          price: '9999',
          priceCurrency: 'INR',
        },
        description: 'A reporting tool designed for modern automation frameworks — instant feedback, actionable insights, no waiting for full suite execution.',
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SmoothScroll />
      <DiscountBanner />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Products />
        <Philosophy />
      </main>
      <Footer />
    </>
  )
}