import React from 'react'
import ShoppingCart from '../components/OurShop/ShoppingCart'
import MenuNav from '../components/Menu/MenuNav'
import Header from '../components/Header'

export default function ShoppingList() {
      const Name = "Shopping Cart";
  return (
    <div>
      <MenuNav />
      <Header
name={Name}
      />

      <ShoppingCart />
    </div>
  )
}
