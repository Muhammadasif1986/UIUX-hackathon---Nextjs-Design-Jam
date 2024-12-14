import React from "react";
import { FaQuoteLeft } from "react-icons/fa";
import { IoIosStarOutline } from "react-icons/io";
import { IoIosStar } from "react-icons/io";
import Image from "next/image";
import { Great_Vibes } from "next/font/google";
const Vibes = Great_Vibes({
      subsets: ["latin"],
      weight: "400",
    });

export default function Hero3() {
  return (
    <div className="py-10 flex justify-center items-center">
      <div className="text-center w-10/12 md:w-8/12 lg:w-6/12">
        <div className={Vibes.className}><p className="text-[#ff9f0d] text-2xl mb-4 text-left">Testimonials</p></div>
        <h2 className="text-2xl md:text-4xl font-bold mb-20 text-left">
          What our client are saying
        </h2>

        <div className="relative bg-white shadow-xl rounded-lg px-8 py-6 text-gray-800">
         
          <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
            <Image
              src="/customer.png"alt="Client" width={80} height={80} className="rounded-full"
            />
          </div>

        
          <div className="mt-10 text-[#ff9f0d] text-xl">
          <FaQuoteLeft size={30} className="inline-block" />
          </div>


          <p className="mt-4 text-gray-600 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            diam pellentesque bibendum non dui volutpat fringilla bibendum.
            Urna, elit augue urna, vitae feugiat pretium donec id elementum.
          </p>

         
          <div className="mt-4 flex justify-center items-center gap-1 text-[#ff9f0d]">
          <IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar />
          <IoIosStarOutline className="text-gray-400" />
      
          </div>

          
          <p className="mt-4 font-bold text-gray-800">Alamin Hasan</p>
          <p className="text-sm text-gray-500">Food Specialist</p>

        </div>

        
        <div className="mt-6 flex justify-center items-center gap-2">
          <span className="w-3 h-3 bg-[#ff9f0d] rounded-full"></span>
          <span className="w-3 h-3 bg-gray-400 rounded-full"></span>
          <span className="w-3 h-3 bg-gray-400 rounded-full"></span>
        </div>
      </div>
    </div>
  );
}
