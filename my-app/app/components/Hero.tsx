import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import Image from 'next/image';
import { Great_Vibes } from "next/font/google";
const Vibes = Great_Vibes({
      subsets: ["latin"],
      weight: "400",
    });
export default function Hero() {
  return (
    <main className='flex justify-center items-center w-full min-h-screen lg:h-[800px] bg-[#0d0d0d] -mt-48 pb-16'>
      <div className='flex flex-col lg:flex-row justify-center items-center w-full lg:w-10/12 lg:mt-24'>
      <div className='flex w-10/12 mt-[230px] lg:mt-0'>
            <div className='flex flex-col justify-center items-center h-[350px] lg:h-[350px] w-6 lg:mt-36 mr-5'>
            <span className="flex-grow h-10 border-[1px] "></span>
            <span className= "flex flex-col gap-5 text-white my-3">
                  <p className=''><FaFacebookF /></p>
                  <p className='text-orange-500'><FaTwitter /></p>
                  <Image src="/p.png" alt='image' width={12} height={12} />
            </span>
            <span className="flex-grow h-10 border-[1px]"></span>
            </div>

            <div className='flex flex-col gap-4 w-10/12 lg:w-full h-auto lg:h-[350px] lg:mt-48'>
            <div className={Vibes.className}>
            <p className='text-[#ff9f0d] text-[40px]'>Its Quick & Amusing!</p>
            </div>
            <div className='flex text-6xl text-[#ff9f0d] font-semibold'>
            <p>Th<span className='text-white'>
            e Art of speed
            food Quality
            </span></p>
            </div>
            <p className='text-white font-[Poppins]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, laudantium explicabo amet ullam maiores rem obcaecati.</p>
            <button className='bg-[#ff9f0d] h-16 w-4/12 text-white rounded-3xl py-3'>See Menu</button>
            </div>
            </div>

            <div className='relative h-full lg:h-[470px] w-10/12 lg:w-full mt-14 lg:mt-36' >
            <Image src="/three.png" alt='image' width={260} height={260} className='ml-80 hidden md:block'/>
            <Image src="/one.png" alt='image' width={400} height={400} className='ml-3 md:-mt-[360px] 3 hidden md:block' />
            <Image src="/two.png" alt='image' width={420} height={420} className='md:ml-9 md:-mt-[400px]' />
            <Image src="/four.png" alt='image' width={70} height={70} className='ml-8 -mt-[405px] 3 hidden md:block' />
            <Image src="/six.png" alt='image' width={50} height={50} className='mt-14 -ml-3 hidden md:block' />
            <Image src="/five.png" alt='image' width={45} height={45} className='mt-14 ml-1 3 hidden md:block' />
            <Image src="/three.png" alt='image' width={20} height={20} className='mt-10 ml-[66px] 3 hidden md:block' />
            

            </div>
      </div>
    </main>
  )
}
