import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import MyPortfolio from '@/components/MyPortfolio'
import Navbar from '@/components/Navbar'
import Services from '@/components/Services'
import TechStackMarquee from '@/components/TechStackMarquee'
import React from 'react'

const page = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <TechStackMarquee />
      <MyPortfolio />
      <Footer />
      
    </div>
  )
}

export default page
