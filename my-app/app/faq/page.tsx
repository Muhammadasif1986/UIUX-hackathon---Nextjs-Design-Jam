import React from 'react'
import MenuNav from '../components/Menu/MenuNav'
import Header from '../components/Header'
import FAQ from '../components/FAQ/FAQ'

export default function FaqPage() {
      const Name = "FAQ Page"
  return (
    <div>
      <MenuNav />
      <Header 
      name = {Name}
      />
      <FAQ />
    </div>
  )
}
