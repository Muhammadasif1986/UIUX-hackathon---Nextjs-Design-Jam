import React from 'react'
import NavBar from '../components/NavBar'
import Header from '../components/Header'
import OurChefDetails from '../components/OurChef/OurChefDetails'

export default function OurChef() {
      const Name = "Chef"
  return (
    <div>
      <NavBar />
      <Header
      name={Name}
      />
      <OurChefDetails />
    </div>
  )
}
