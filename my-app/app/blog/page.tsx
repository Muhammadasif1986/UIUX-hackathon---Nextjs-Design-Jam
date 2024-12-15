import React from 'react'
import Header from '../components/Header'
import BlogList from '../components/Blogs/BlogList'
import MenuNav from '../components/Menu/MenuNav'

export default function Blog() {
  const Name = "Blog List"
  return (
    <div>
     <MenuNav />
      <Header 
      name={Name}
      />
      <BlogList />
    </div>
  )
}
