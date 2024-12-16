import Image from "next/image";
import { Miniver } from "next/font/google";
import { FiCoffee } from "react-icons/fi";
import { SiCodechef } from "react-icons/si";
import { TbWoman } from "react-icons/tb";
const MiniVer = Miniver({
  subsets: ["latin"],
  weight: "400",
});

export default function Hero1() {
  return (
    <main className="flex flex-col justify-center items-center container mx-auto p-6">
    
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center w-8/12 mt-10">
        
        <div className="grid grid-cols-2 grid-rows-3 gap-4">
            <div className="row-span-3">
          <Image
            src="/starter.png"
            alt="Food Image 1"
            width={300}
            height={300}
            className="rounded-lg object-cover"
          />
          </div>
          <div>
          <Image
            src="/pizza.png"
            alt="Food Image 2"
            width={200}
            height={100}
            className="rounded-lg object-cover mt-8 "
          /></div>
          <div className="row-span-2">
            <Image
              src="/drink.png"
              alt="Food Image 3"
              width={200}
              height={200}
              className="rounded-lg object-cover"
            />
          </div>
        </div>

        <div>

          <div className={MiniVer.className}><h4 className="text-[#ff9f0d] text-xl mb-2">About us</h4></div>
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">
            Food is an important part Of a balanced Diet
          </h1>
          <p className="text-gray-600 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam
            pellentesque bibendum non dui volutpat fringilla bibendum. Lorem, elit
            augue urna, vitae feugiat pretium donec id enim. Ultrices mattis
            vitae mus risus.
          </p>
          <div className="flex gap-4">
            <button className="bg-[#ff9f0d] text-white px-6 py-1 rounded">
              Show more
            </button>
            <button className="flex items-center font-semibold space-x-2">
            <Image src="/Play.png" alt="Image" width={40} height={40} />
            Watch video </button>
          </div>
        </div>
      </section>

     
      <section className="mt-5 text-center">
        <h2 className="text-3xl font-bold mb-4">Why Choose us</h2>
        <p className="text-gray-600 mb-8 max-w-lg mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam
          pellentesque bibendum non dui volutpat fringilla bibendum.
        </p>
        <Image
          src="/LargfoodImage.png"
          alt="Large food image"
          width={800}
          height={200}
          className="rounded-lg mx-auto object-cover"
        />

       
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 px-16">
        <div className="flex flex-col justify-center items-center">
        <p className="text-4xl"><SiCodechef /></p>
            <h3 className="text-lg font-semibold mb-2 lg:px-14">Best Chef</h3>
            <p className="text-gray-600 lg:px-14">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <p className="text-4xl"><FiCoffee /></p>
            <h3 className="text-lg font-semibold mb-2 lg:px-14">120 Item food</h3>
            <p className="text-gray-600 lg:px-14">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <p className="text-4xl"><TbWoman /></p>
            <h3 className="text-lg font-semibold mb-2">Clean Environment</h3>
            <p className="text-gray-600 lg:px-14">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
