import React from 'react'
import Hero from '../components/sections/Hero'
import Features from '../components/sections/Features'
import About from '../components/sections/About'
import Testimonials from '../components/sections/Testimonials'
import Products from '../components/sections/Products'
import Socials from '../components/sections/Socials'
import Contact from '../components/sections/Contact'
import FinalCta from '../components/sections/FinalCta'

const HomePage = () => {
  return (
    <>
      <Hero />
      <Features />
      <About />
      <Testimonials />
      <Products />
      <Socials />
      <Contact />
      <FinalCta />
    </>
  )
}

export default HomePage