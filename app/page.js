import DiscountBanner from '@/components/DiscountBanner'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Products from '@/components/Products'
import Philosophy from '@/components/Philosophy'
import Footer from '@/components/Footer'
import SmoothScroll from '@/components/SmoothScroll'

export default function Home() {
  return (
    <>
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