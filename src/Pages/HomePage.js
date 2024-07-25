import React from 'react'
import Navbar from '../Components/Navbar'
import HeroSection from '../Components/HeroSection'
import Preferred from '../Components/Preferred'
import TryOur from '../Components/TryOur'
import AboutUs from '../Components/AboutUs'
import HowWorks from '../Components/HowWorks'
import OurPartner from '../Components/OurPartner'
import FeaturedOn from '../Components/FeaturedOn'
import Fotter from '../Components/Fotter'

function HomePage() {
  return (
   <>
        <Navbar/>
        <HeroSection/>
        <Preferred/>
        <TryOur/>
        <AboutUs/>
        <HowWorks/>
        <OurPartner/>
        <FeaturedOn/>
        <Fotter/>
   </>
  )
}

export default HomePage