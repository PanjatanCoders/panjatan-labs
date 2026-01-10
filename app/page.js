import Hero from '@/components/Hero'
import About from '@/components/About'
import Products from '@/components/Products'
import Philosophy from '@/components/Philosophy'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Products />
      <Philosophy />
      <Footer />
    </main>
  )
}