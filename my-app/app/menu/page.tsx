import React from 'react'
import MenuNav from '../components/Menu/MenuNav'
import Header from '../components/Header'
import StarterMenu from '../components/Menu/MenuPage'
import Clients from '../components/clients'
import MenuPage from '../components/Menu/MenuPage'

export default function Menu() {
  const pageName = "Menu"
  return (
    <div>
      <MenuNav />
      <Header 
      name={pageName}
      />
      <MenuPage />
    </div>
  )
}
