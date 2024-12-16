import React from "react"
import { FiSearch } from "react-icons/fi";
import Link from "next/link"
import { PiHandbagSimple } from "react-icons/pi";
import { FaRegUser } from "react-icons/fa";
import Pages from "@/app/pages/page";
import PagesNav from "../PagesNav";
import { LuChevronDown } from "react-icons/lu";


export default function MenuNav() {
  return (
      <main className='flex justify-center bg-[#0d0d0d] to-95%'>
    <div className='flex flex-col justify-center items-center w-8/12 h-auto pt-2 bg-[#0d0d0d] to-95% font-[Poppins]'>

<div className='flex flex-col lg:flex-row justify-between items-center w-full pb-2 text-sm mt-2'>
<div className='flex justify-center w-1/12 h-auto text-xl'> 
<p className='text-orange-500'>Food</p>
<p className='text-white'>tuck</p>
</div>
<ul className='flex  justify-center gap-4 text-xs lg:justify-between items-center lg:text-sm w-full lg:w-4/12 h-auto mt-2 lg:mt-0'>
<li className= 'text-orange-500'><Link href="/">Home</Link></li>
<li className='text-white'><Link href="/menu">Menu</Link></li>
<li className='text-white'><Link href="./blog">Blog</Link></li>
<li className='text-white flex items-center'><PagesNav /><LuChevronDown /></li>
<li className='text-white'><Link href="/about">About</Link></li>
<li className='text-white'><Link href="/shop">Shop</Link></li>
<li className='text-white'><Link href="/contact">Contact</Link></li>
</ul>
<div className='flex justify-center lg:justify-end items-center w-full lg:w-4/12 mr-3'>
<p className='text-white text-2xl ml-3 mt-5 lg:mt-0'><FiSearch /></p>
<Link href="/signup"><p className='text-white text-2xl ml-3 mt-5 lg:mt-0'><FaRegUser /></p></Link>
<Link href="/error404"><PiHandbagSimple className='text-white text-2xl ml-3 mt-5 lg:mt-0' /></Link>

</div>

</div>
    </div>
    </main>
  )
}

