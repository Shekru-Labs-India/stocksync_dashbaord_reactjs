import React from 'react'
import LandingHeader from './LandingHeader'
import LandingHero from './LandingHero'
import LandingSubHero from './LandingSubHero'
import LandingMain from './LandingMain'
import LandingFooter from './LandingFooter'
import PricingPlan from './PricingPlan'
import ServicesOffered from './ServicesOffered'
import Reviews from './Reviews'
import Features from './Features'
const LandingHomeScreen = () => {
  return (
    <div>
              <div data-bs-spy="scroll" class="scrollspy-example">
      <LandingHeader></LandingHeader>
      <LandingHero></LandingHero>
      {/* <LandingSubHero/> */}
      <LandingMain/>
<Features></Features>
      <Reviews></Reviews>
      <ServicesOffered></ServicesOffered>
      <PricingPlan></PricingPlan>
      <LandingFooter></LandingFooter>
      </div>
    </div>
  )
}

export default LandingHomeScreen
