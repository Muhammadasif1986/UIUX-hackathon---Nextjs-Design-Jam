import React from 'react'
import MenuNav from '../components/Menu/MenuNav'
import Header from '../components/Header'
import ContactPage from '../components/Contact/ContactPage'

export default function Contact() {
  const Name = "Check Out"
  return (
    <div>
     <MenuNav />
     <Header
     name={Name}
     />
     <ContactPage />
    </div>
  )
}
