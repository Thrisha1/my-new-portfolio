import React from 'react'
import Navbar from '../common/Navbar'
import HeroSection from '../common/HeroSection'
import SkillDivider from '../common/SkillDivider'
import About from '../common/About'

function HomePage() {
  return (
    <div className='h-full relative overflow-x-hidden'>
      
      {/* <div className="absolute rounded-xl w-1/2 h-1/2 -rotate-45 -right-32 top-32 bg-[#FFEDD5]"></div> */}
      <Navbar/>
      <HeroSection/>
      <SkillDivider/>
      <About/>
    </div>
  )
}

export default HomePage