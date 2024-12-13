import React from 'react'
import Image from 'next/image';
import { Great_Vibes } from "next/font/google";
const Vibes = Great_Vibes({
      subsets: ["latin"],
      weight: "400",
    });
export default function Properties() {
  return (
    <div className=' h-full py-20 flex justify-end text-left bg-cover bg-center 'style={{ backgroundImage: "url('/property.png')" }}>
      <div className='w-10/12 md:w-8/12 lg:w-4/12 lg:text-justify  pr-14 lg:mr-52 py-9'>
      <div className={Vibes.className}><p className="text-[#ff9f0d] text-2xl mb-4 text-right">Restaurant Active Process</p></div>
      <div className="text-[#ff9f0d] text-3xl mb-7 flex items-start  justify-center ">We<p className="text-white text-right ">
      Document Every Food
      Bean Process untile it is saved</p></div>
      <p className='text-gray-300 text-right'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam aperiam, maiores sequi 
            quia omnis corrupti totam laboriosam ex, </p>
            <div className='flex justify-end items-center mt-6'>
            <button className='rounded-3xl border-[1px] border-[#ff9f0d] text-white text-sm py-2 px-3 mr-3'>Read More</button>
            <Image src="/play.png" alt="Image" width={40} height={40} />
             <p className='text-white text-sm ml-1' >Play Vedeo</p>
            </div>
</div>
    </div>
  )
}
