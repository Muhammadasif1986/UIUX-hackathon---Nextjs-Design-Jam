import React from 'react'
import Rectangle from "../../public/Rectangle.png"
import Image from 'next/image'

export default function Clients() {
      const cards =[
            {image:"/Group3.png", Category:"Professional Chefs", rates:"420" },
            {image:"/Group2.png", Category:"Items of Food", rates:"320" },
            {image:"/Group1.png", Category:"Years Of Experience", rates:"30+" },
            {image:"/Group.png", Category:"Happy Customers", rates:"220" }
      ]
  return (
    <div className=" flex justify-center items-center h-auto lg:py-20 w-full bg-opacity-5 bg-cover" style={{ backgroundImage: "url('/header.png')" }}>
      <div className='flex flex-col lg:flex-row justify-between items-center w-10/12 lg:w-8/12 h-auto'>
      {cards.map((card, index) => (
            <div key={index} className='flex flex-col justify-center items-center gap-3 my-8 lg:mt-0'>
                  <Image src={card.image} alt='Image' width={80} height={80} />
                  <p className='text-white text-xs'>{card.Category}</p>
                  <p className='text-white font-semibold text-lg'>{card.rates}</p>
            </div>
      ))}
      </div>
    </div>
  )
}
