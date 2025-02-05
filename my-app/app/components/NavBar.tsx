"use client";
import React, { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import Link from "next/link";
import { PiHandbagSimple } from "react-icons/pi";
import { LuChevronDown } from "react-icons/lu";
import PagesNav from "./PagesNav";
import { useUser, SignInButton, UserButton } from "@clerk/nextjs";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const { isSignedIn } = useUser();
  const [isClient, setIsClient] = useState(false);
  const pathname = usePathname(); // Get current route

  useEffect(() => {
    setIsClient(true); // Prevent hydration mismatch
  }, []);

  // Show Navbar only on Home Page ("/"), otherwise return null
  if (pathname !== "/") return null;

  return (
    <main className="flex justify-center bg-[#0d0d0d] fixed top-0 left-0 w-full shadow-md z-50 p-4">
      <div className="flex flex-col justify-center items-center w-8/12 h-auto pt-2 bg-[#0d0d0d] font-[Poppins]">
        <div className="flex justify-center w-1/12 h-auto">
          <p className="text-orange-500">Food</p>
          <p className="text-white">tuck</p>
        </div>
        <div className="flex flex-col lg:flex-row justify-between items-center w-full pb-2 text-sm mt-2">
          <ul className="flex justify-center gap-2 lg:gap-6 lg:justify-between items-center lg:text-sm text-xs w-full lg:w-4/12 h-auto mt-2 lg:mt-0">
            <li className="text-orange-500">
              <Link href="/">Home</Link>
            </li>
            <li className="text-white">
              <Link href="/menu">Menu</Link>
            </li>
            <li className="text-white">
              <Link href="/blog">Blog</Link>
            </li>
            <li className="text-white flex items-center">
              <PagesNav />
              <LuChevronDown />
            </li>
            <li className="text-white">
              <Link href="/about">About</Link>
            </li>
            <li className="text-white">
              <Link href="/shop">Shop</Link>
            </li>
            <li className="text-white">
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
          <div className="flex justify-center lg:justify-end items-center w-full lg:w-4/12 mr-3">
            {/* Improved Search Bar */}
            <div className="flex justify-between items-center w-8/12 mt-5 lg:mt-0 lg:ml-3 lg:w-[388px] h-12 bg-transparent border-[1px] border-[#ff9f0d] text-white rounded-[27px] px-4">
              <input
                type="text"
                placeholder="Search..."
                className="bg-transparent outline-none text-white w-full placeholder-gray-400"
              />
              <FiSearch className="text-white text-2xl" />
            </div>
            <Link href="/error404">
              <PiHandbagSimple className="text-white text-2xl ml-3 mt-5 lg:mt-0" />
            </Link>
          </div>
          <div>
            {isClient && ( // Avoid hydration mismatch
              isSignedIn ? (
                <UserButton 
                  afterSignOutUrl="/" 
                />
              ) : (
                <SignInButton>
                  <button className="bg-[#ff9f0d] hover:bg-[#ff9f3D] text-white px-4 py-2 rounded">
                    Sign In
                  </button>
                </SignInButton>
              )
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
