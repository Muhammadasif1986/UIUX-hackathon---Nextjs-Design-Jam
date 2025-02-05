import React from 'react'
import MenuNav from '../components/Menu/MenuNav'
import Header from '../components/Header'
import Hero1 from '../components/AboutPage/Hero1'
import Hero2 from '../components/AboutPage/Hero2'
import Testimonials from '../components/Testimonials'
import Hero3 from '../components/AboutPage/Hero3'
import Hero4 from '../components/AboutPage/Hero4'

export default function About() {
  const about = "About"
  const route = "/about"
  return (
    
    <div>
      <MenuNav />
      <Header 
      name={about}
      route={route}
      />
      <Hero1 />
      <Hero2 />
      <Hero3 />
      <Hero4 />
     
    </div>
  )
}
