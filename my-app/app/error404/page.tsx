import React from 'react'
import MenuNav from '../components/Menu/MenuNav'
import Header from '../components/Header'
import Error404 from '../components/Error404'

export default function Error() {
  const Name = "Error 404"
  return (
    <div>
    <MenuNav />
    <Header 
    name={Name}
    />  
    <Error404 />
    </div>
  )
}
