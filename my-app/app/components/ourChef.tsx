import React from 'react'
import Image from 'next/image'
import { Great_Vibes } from "next/font/google";
const Vibes = Great_Vibes({
      subsets: ["latin"],
      weight: "400",
    });
export default function OurChef() {
  return (
    <main className="bg-black flex w-full h-auto justify-center items-center py-12">
    <div className="flex flex-col items-center">
          <div className={Vibes.className}><p className="text-[#ff9f0d] text-2xl mb-4">Chefs</p></div>
          <div className="text-[#ff9f0d] text-2xl mb-8 flex">Me<p className="text-white">et Our Chef </p></div>
          <div className="flex flex-col lg:flex-row gap-4 items-center h-auto lg:h-[200px] mt-0 lg:mt-8">
          <div className='relative lg:-ml-96 -mb-44 lg:-mb-0 rotate-6'><Image src="/bg.png" alt="Image" width={300} height={300} /></div>
                <div><Image src="/chef.png" alt="Image" width={200} height={200} /></div>
                <div><Image src="/chef1.png" alt="Image" width={200} height={200} /></div>
                <div><Image src="/chef2.png" alt="Image" width={200} height={200} /></div>
                <div><Image src="/chef3.png" alt="Image" width={200} height={200} /></div>
          </div>
          <button className='rounded-3xl border-[1px] border-[#ff9f0d] text-[#ff9f0d] text-sm mt-12 py-2 px-3'>See More</button>
    </div>
  </main>
  )
}
