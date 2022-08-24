import React from 'react'
import ScrollToTop from './components/ScrollToTop'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Recommend from './components/Recommend'
import Footer from './components/Footer'
import Testimonial from './components/Testimonial'
import Services from './components/Services'

export default function App() {
  return (
    <div>
      <ScrollToTop />
      <Navbar />
      <Hero />
      <Services />
      <Recommend />
      <Testimonial />
      <Footer />
    </div>
  )
}
