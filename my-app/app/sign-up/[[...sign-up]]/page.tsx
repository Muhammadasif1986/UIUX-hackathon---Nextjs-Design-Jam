import React from 'react'
import MenuNav from '../../../app/components/Menu/MenuNav'
import Header from '../../../app/components/Header'
import { SignUp } from '@clerk/nextjs';

export default function SignUpPage() {
      const Name = "Sign Up"
  return (
    <div>
      <MenuNav />
      <Header 
      name={Name}
      />
      <div className='flex justify-center items-center py-20'>
      <SignUp />
</div>
    </div>
  )
}