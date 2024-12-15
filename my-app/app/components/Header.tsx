import React from 'react'
import Link from 'next/link'
import { FaAngleRight } from "react-icons/fa6";
export default function Header(props:any) {
  return (
    <div className=' w-full h-[350px] bg-cover' style={{backgroundImage:"url('/header.png')"}}>
        <div className='flex flex-col justify-center items-center h-full'>
            <h1 className='text-4xl font-semibold text-white'>Our {props.name}</h1>
            <p className='text-white flex justify-center items-center mt-10'>
              <Link href="/" className='flex justify-center items-center'>Home<FaAngleRight /></Link>
             <Link href="#" className='text-[#ff9f0d] ml-2'>{props.name}</Link></p>
        </div>
      
    </div>
  )
}
