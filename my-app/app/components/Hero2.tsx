import Image from 'next/image';
import { IoMdCheckmark } from "react-icons/io";
import { Great_Vibes } from "next/font/google";
import unsplash4 from "../../public/unsplash4.png"
import unsplash5 from "../../public/unsplash5.png"
import unsplash6 from "../../public/unsplash6.png"
const Vibes = Great_Vibes({
      subsets: ["latin"],
      weight: "400",
    });

const Hero2 = () => {
  return (
    <section className="bg-black text-white px-6 py-8 lg:py-36 ">
      <div className="container w-10/12 mx-auto h-auto lg:h-[300px] flex flex-wrap lg:flex-nowrap items-center gap-6">
       
        <div className="lg:w-full">
        <div className={Vibes.className}><p className="text-orange-400 text-2xl">About us</p></div>
          
          <h2 className="text-4xl font-bold mt-4">
            <span className="text-orange-400">We</span> Create the best <br />
            foody product
          </h2>
          <p className="text-gray-400 text-sm mt-6 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            diam pellentesque bibendum non dui volutpat fringilla bibendum.
            Una, elit augue urna, vitae feugiat pretium donec id elementum.
            Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit
            eu velit in consequat.
          </p>

          <ul className="mt-6 space-y-4">
            <li className="flex items-center">
              <span className="text-green-400 mr-4"><IoMdCheckmark /></span>
              <span>
                Lacus nisi, et ac dapibus sit eu velit in consequat.
              </span>
            </li>
            <li className="flex items-center">
              <span className="text-green-400 mr-4"><IoMdCheckmark /></span>
              <span>
                Quisque diam pellentesque bibendum non dui volutpat fringilla.
              </span>
            </li>
            <li className="flex items-center">
              <span className="text-green-400 mr-4"><IoMdCheckmark /></span>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </span>
            </li>
          </ul>

          <button className="bg-[#ff9f0d] text-black mt-8 px-6 py-3 rounded-2xl font-bold hover:bg-orange-500">
            M-Fahad <span className="text-white">Read More</span>
          </button>
        </div>

    
        <div className="flex flex-col gap-6 w-full h-auto lg:h-[500px]  bg-center rounded-lg bg-cover border-2 border-white">
          
          <div className=' h-auto lg:h-[300px] w-full'>
            <Image
              src={unsplash6}
              alt="Image"
            />
            </div >
            <div className='flex justify-center gap-6 h-auto lg:h-[300px] w-full '>
                  <div className='w-1/2'>
            <Image
              src={unsplash5}
              alt="Image"
            /></div>
          <div className='w-1/2'>
            <Image 
              src={unsplash4}
              alt="Image"
            /></div>
            </div>
        </div>
      </div>

      {/* Profile Icon Section */}
      <div className="absolute top-20 right-10 flex items-center space-x-2 bg-gray-700 px-4 py-2 rounded-full">
        <Image
          src="/user1.jpg" // Replace with profile image
          alt="User Profile"
          width={30}
          height={30}
          className="rounded-full"
        />
        <Image
          src="/user2.jpg" // Replace with profile image
          alt="User Profile"
          width={30}
          height={30}
          className="rounded-full"
        />
        <span className="text-white">4</span>
      </div>
    </section>
  );
};

export default Hero2;
