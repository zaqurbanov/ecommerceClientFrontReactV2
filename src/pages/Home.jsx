import React from 'react'
import Hero from '../layout/Hero'
import BestSellerProducts from '../components/BestSellerProducts'
import BestProGamingCategories from '../components/BestProGamingCategories'
import Subscribe from '../components/Subscribe'
import HowWeDo from '../components/HowWeDo'
import AboutOurShop from '../components/AboutOurShop'
import BestPrograminProducts from '../components/BestPrograminProducts'
import Testimonials from '../components/Testimonials'

const Home = () => {
  return (
    <div>
      <Hero />
      <BestSellerProducts/>
      <BestProGamingCategories/>
      <Subscribe/>
      <HowWeDo/>
      <AboutOurShop/>
      <BestPrograminProducts/>
      <Testimonials/>
    </div>
  )
}

export default Home
