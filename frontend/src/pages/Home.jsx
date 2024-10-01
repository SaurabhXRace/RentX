import React from 'react'
import Hero from '../components/hero'
import LatestPartner from '../components/LatestPartner'
import OurPolicy from '../components/OurPolicy'
import NewsletterBox from '../components/NewsletterBox'
import Distance from '../components/Distance'

const Home = () => {
  return (
    <div>
      <Hero/>
      <Distance />
      <LatestPartner />
      <OurPolicy />
      <NewsletterBox/>
      
    </div>
  )
}

export default Home
