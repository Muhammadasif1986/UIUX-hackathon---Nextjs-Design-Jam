import React from 'react'
import MenuNav from '../components/Menu/MenuNav'
import Header from '../components/Header'
import CheckOut from '../components/CheckOut'

export default function Contact() {
  const Name = "Check Out"
  return (
    <div>
     <MenuNav />
     <Header
     name={Name}
     />
     <CheckOut />
    </div>
  )
}
