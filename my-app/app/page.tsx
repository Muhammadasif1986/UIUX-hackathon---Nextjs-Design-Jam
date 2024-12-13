
import React from 'react';
import Hero from '../app/components/Hero';
import Hero2 from '../app/components/Hero2';
import Cart from './components/FoodCategory';
import Cart2 from './components/ChooseUs';
import Clients from './components/clients';
import Menu from '../app/components/Menu';
import OurChef from './components/ourChef';
import Testimonials from './components/Testimonials';
import Properties from './components/properties';
import Blog from './components/Blogs';


export default function Home() {
  return (
   <div>
      <Hero />
      <Hero2 />
      <Cart />
      <Cart2 />
      <Clients />
      <Menu />
      <OurChef />
      <Testimonials />
      <Properties />
      <Blog />
   </div>
  );
}
