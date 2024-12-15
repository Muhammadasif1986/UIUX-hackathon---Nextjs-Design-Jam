import Image from "next/image";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";
import { CiInstagram } from "react-icons/ci";
import { IoLogoYoutube } from "react-icons/io";
import Link from "next/link"

const Footer = () => {
      const PicAdress =[
            "/unsplash1.png","/unsplash2.png","/unsplash3.png"
      ]
      return (
        <footer className="bg-black text-white py-10">
         
          <div className="container mx-auto px-6 lg:px-20 flex flex-wrap justify-between items-center border-b border-gray-700 pb-8">
            <h2 className="text-2xl font-bold text-orange-400">
              Still You Need Our Support?
            </h2>
            <p className="text-gray-400 text-sm w-fit">
              Don&apos;t wait; make a smart & logical quote here. It&apos;s pretty easy.
            </p>
            <div className="flex mt-4 lg:mt-0">
              <input
                type="email"
                placeholder="Enter Your Email"
                className="px-1 lg:px-4 py-2 rounded-l-md text-black outline-none"
              />
              <button className="bg-orange-400 text-white px-1 lg:px-6 py-2 rounded-r-md hover:bg-orange-500">
                Subscribe Now
              </button>
            </div>
          </div>
    
         
          <div className="container mx-auto px-6 lg:px-20 mt-8 flex flex-wrap justify-between">
           
            <div className="w-full lg:w-1/4 mb-6">
              <h3 className="text-lg font-bold">About Us</h3>
              <p className="text-gray-300 text-sm mt-2">
                Corporate clients and leisure travelers have been relying on
                Groundlink for dependable, safe, and professional chauffeured car
                service in major cities across the world.
              </p>
              <div className="flex justify-start items-center ">
                  <div  className=" flex justify-center items-center bg-orange-400 rounded-md mr-1 h-20 w-20 mt-3">
                        <Image src="/Clock.png" alt="Clock" width={38} height={38} />
                  </div>
              <div className="mt-4 text-gray-300 gap-2">
                <p className="text-xl">Opening Hours:</p>
                <p className="text-base">Sunday - Closed</p>
                <p className="text-base">Mon - Sat (8:00 - 6:00)</p>
              </div>
              </div>
            </div>
    
           
            <div className="w-full lg:w-1/5 mb-6">
              <h3 className="text-lg font-bold text-yellow-400">Useful Links</h3>
              <ul className="text-gray-300 mt-4 space-y-2">
                <li>About</li>
                <li>News</li>
                <li>Partners</li>
                <li>Team</li>
                <li>Menu</li>
                <li>Contacts</li>
              </ul>
            </div>
    
          
            <div className="w-full lg:w-1/5 mb-6">
              <h3 className="text-lg font-bold">Help?</h3>
              <ul className="text-gray-300 mt-4 space-y-2">
                <Link href="/faq"><li>FAQ</li></Link>
                <li>Terms & Conditions</li>
                <li>Reporting</li>
                <li>Documentation</li>
                <li>Support Policy</li>
                <li>Privacy</li>
              </ul>
            </div>
    
          
            <div className="w-full lg:w-1/4">
              <h3 className="text-lg font-bold">Recent Post</h3>
              <ul className="mt-4 space-y-4">
                {PicAdress.map( (index) => (
                  <li key={index} className="flex items-center text-sm text-gray-300">
                    <Image
                      src={index}
                      alt="Recent Post"
                      width={48}
                      height={48}
                      className="object-cover"
                    />
                    <div>
                      <p>20 Feb 2022</p>
                      <p>Keep Your Business</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
    
     
          <div className="flex justify-between items-center px-8 bg-gray-800 py-6 mt-6 text-sm">
            <p className="text-gray-300">
              Copyright © 2022 by Ayeman. All Rights Reserved.
            </p>

            <div className="flex justify-center mt-4 space-x-4 lg:mr-32 text-black text-xl">
             
              <span className="w-8 h-8 bg-white flex items-center justify-center rounded-md">
                <i><FaFacebookF /></i>
              </span>
              <span className="w-8 h-8 bg-white flex items-center justify-center rounded-md">
                <i><IoLogoTwitter /></i>
              </span>
              <span className="w-8 h-8 bg-white flex items-center justify-center rounded-md">
                <i><CiInstagram /></i>
              </span>
              <span className="w-8 h-8 bg-white flex items-center justify-center rounded-md text-[#ff9f0d]">
                <i><IoLogoYoutube /></i>
              </span>
              
            </div>
          </div>
        </footer>
      );
    };
  
    export default Footer;
    
