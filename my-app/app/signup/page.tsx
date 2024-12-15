import React from 'react'
import MenuNav from '../components/Menu/MenuNav'
import Header from '../components/Header'
import SignUp from '../components/SignUp'

export default function SignUpPage() {
      const Name = "Sign Up"
  return (
    <div>
      <MenuNav />
      <Header 
      name={Name}
      />
      <SignUp />

    </div>
  )
}
