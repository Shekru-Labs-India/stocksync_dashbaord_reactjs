import React from 'react'
import LandingHeader from './LandingHeader'
import LandingHero from './LandingHero'
import LandingSubHero from './LandingSubHero'
import LandingMain from './LandingMain'
import LandingFooter from './LandingFooter'
const LandingHomeScreen = () => {
  return (
    <div>
              <div data-bs-spy="scroll" class="scrollspy-example">
      <LandingHeader></LandingHeader>
      <LandingHero></LandingHero>
      <LandingSubHero/>
      <LandingMain/>
      <LandingFooter></LandingFooter>
      </div>
    </div>
  )
}

export default LandingHomeScreen
