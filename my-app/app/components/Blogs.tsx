import React from "react";
import Image from "next/image";
import { AiOutlineLike } from "react-icons/ai";
import { RiMessage2Line } from "react-icons/ri";
import { GoShareAndroid } from "react-icons/go";
import { Great_Vibes } from "next/font/google";

const Vibes = Great_Vibes({
      subsets: ["latin"],
      weight: "400",
    });

export default function Blogs() {
  const blogs = [
    {
      image: "/burger.png",
      date: "10 February 2022",
      title: "Pellentesque Non Efficitur Mi Aliquam Convallis Mi Quis",
    },
    {
      image: "/pizza.png",
      date: "10 February 2022",
      title: "Morbi Sodales Tellus Elit, In Blandit Risus Suscipit A",
    },
    {
      image: "/tacos.png",
      date: "10 February 2022",
      title: "Curabitur rutrum velit ac congue malesuada",
    },
  ];

  return (
    <section className="bg-black py-12 flex flex-col justify-center items-center min-h-screen ">
     
      <div className="">
        <div className={Vibes.className}>
        <p className="text-[#ff9f0d] text-lg">Blog Post</p>
        </div>
        <h2 className="text-white text-3xl font-bold">
          <span className="text-[#ff9f0d]">L</span>atest News & Blog
        </h2>
      </div>

      
      <div className="flex flex-col justify-center lg:flex-row items-center lg:w-8/12 py-10 gap-10 lg:gap-5 lg:mb-0">
        {blogs.map((blog, index) => (
          <div key={index} className="w-full">
              <Image src={blog.image} alt="Blog Image" width={400} height={400}
               className="border-r-[1px] border-white bg-cover  w-[300px] xl:w-[400px] "/>
                     
            <div className="p-6 h-auto bg-black border-[1px] border-white w-[300px] xl:w-[400px]">
              <p className="text-[#ff9f0d] text-sm mb-2">{blog.date}</p>
              <h3 className="text-white text-lg font-semibold mb-4">
                {blog.title}
              </h3>
              <div className="flex items-center justify-between">
                <button className="text-white text-xs">Learn More</button>
                <div className="flex items-center space-x-3 text-white">
                  <i className=""><AiOutlineLike /></i>
                  <i className="text-[#ff9f0d]"><RiMessage2Line /></i>
                  <i className=""><GoShareAndroid /></i>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
