import React from 'react'
import Image from 'next/image';
import { Great_Vibes } from "next/font/google";
const Vibes = Great_Vibes({
      subsets: ["latin"],
      weight: "400",
    });
export default function Properties() {
  return (
    <div className=' h-[400px] flex justify-end items-center bg-cover bg-center 'style={{ backgroundImage: "url('/property.png')" }}>
      <div className='w-8/12 lg:w-4/12 flex flex-col justify-end items-end mr-56'>
      <div className={Vibes.className}><p className="text-[#ff9f0d] text-2xl mb-4">Restaurant Active Process</p></div>
      <h2 className="text-[#ff9f0d] text-2xl mb-8 flex justify-end">We<p className="text-white text-left ml-2">
      Document Every Food
      Bean Process untile it is saved</p></h2>
      <p className='text-gray-300 text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam aperiam, maiores sequi 
            quia omnis corrupti totam laboriosam ex, </p>
            <div className='flex justify-end items-center mt-6'>
            <button className='rounded-3xl border-[1px] border-[#ff9f0d] text-white text-sm py-2 px-3 mr-3'>Read More</button>
            <Image src="/play.png" alt="Image" width={50} height={50} />
             <p className='text-white text-sm ml-1' >Play Vedeo</p>
            </div>
</div>
    </div>
  )
}
