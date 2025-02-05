import React from 'react'
import MenuNav from '../components/Menu/MenuNav'
import Header from '../components/Header'
import OurChefDetails from '../components/OurChef/OurChefDetails'

export default function OurChef() {
      const Name = "Chef"
  return (
    <div>
      <MenuNav />
      <Header
      name={Name}
      />
      <OurChefDetails />
    </div>
  )
}
