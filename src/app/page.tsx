import Header from '@/components/Header'
import Hero from '@/components/Hero'
import TrustBar from '@/components/TrustBar'
import Intro from '@/components/Intro'
import Capabilities from '@/components/Capabilities'
import Portfolio from '@/components/Portfolio'
import Why from '@/components/Why'
import Testimonials from '@/components/Testimonials'
import Process from '@/components/Process'
import FAQSection from '@/components/FAQSection'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'
import MobileCTABar from '@/components/MobileCTABar'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <Intro />
        <Capabilities />
        <Portfolio />
        <Why />
        <Testimonials />
        <Process />
        <FAQSection />
        <CTA />
      </main>
      <Footer />
      <MobileCTABar />
    </>
  )
}
