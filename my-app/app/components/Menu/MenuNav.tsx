"use client";
import { useUser, SignInButton, UserButton } from "@clerk/nextjs";
import React from "react";
import { FiSearch } from "react-icons/fi";
import Link from "next/link";
import { PiHandbagSimple } from "react-icons/pi";
import { FaRegUser } from "react-icons/fa";
import PagesNav from "../PagesNav";
import { LuChevronDown } from "react-icons/lu";
import { useCart } from "@/context/CartContext";
import { useWishlist } from '@/context/WishlistContext'
import { AiOutlineHeart } from 'react-icons/ai';

export default function MenuNav() {
  const { cart } = useCart(); // Get cart from context
  const cartItemCount = cart.length; // Count total items
  const { wishlist } = useWishlist();
  const wishlistCount = wishlist.length;
  const { isSignedIn, user } = useUser();

  return (
    <main className="flex justify-center bg-[#0d0d0d] to-95% fixed top-0 left-0 w-full shadow-md z-50 p-4">
      <div className="flex flex-col justify-center items-center w-8/12 h-auto pt-2 bg-[#0d0d0d] to-95% font-[Poppins]">
        {/* Top Menu */}
        <div className="flex flex-col lg:flex-row justify-between items-center w-full pb-2 text-sm mt-2">
          {/* Brand Logo */}
          <div className="flex justify-center w-1/12 h-auto text-xl">
            <p className="text-orange-500">Food</p>
            <p className="text-white">tuck</p>
          </div>

          {/* Navigation Links */}
          <ul className="flex justify-center gap-4 text-xs lg:justify-between items-center lg:text-sm w-full lg:w-4/12 h-auto mt-2 lg:mt-0">
            <li className="text-orange-500">
              <Link href="/">Home</Link>
            </li>
            <li className="text-white">
              <Link href="/menu">Menu</Link>
            </li>
            <li className="text-white">
              <Link href="./blog">Blog</Link>
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

          {/* Search, User, and Cart Icons */}
          <div className="flex justify-center lg:justify-end items-center w-full lg:w-4/12 mr-3">
            <p className="text-white text-2xl ml-3 mt-5 lg:mt-0">
              <FiSearch />
            </p>
            <Link href="/signup">
              <p className="text-white text-2xl ml-3 mt-5 lg:mt-0">
                <FaRegUser />
              </p>
            </Link>
            <div className="relative ml-3 mt-5 lg:mt-0">
              <Link href="/cart">
                <PiHandbagSimple className="text-white text-2xl cursor-pointer" />
              </Link>
              {/* Cart Item Count Badge */}
              {cartItemCount > 0 && (
          <span className="absolute -top-2 -right-2 bg-[#ff9f0d] text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
            {cartItemCount}
          </span>
        )}
            </div>
            <div className="relative ml-3 mt-5 lg:mt-0">
            <Link href="/wishlist" className="relative">
        <AiOutlineHeart className="text-white text-2xl cursor-pointer "/> {/* React icon */}
        {wishlistCount > 0 && (
          <span className="absolute top-0 right-0 bg-red-600 text-white text-xs font-semibold px-2 rounded-full">
            {wishlistCount}
          </span>
        )}
      </Link>
      </div>
      <div className="ml-10 mt-3 lg:mt-0">
        {isSignedIn ? (
          // Show User Avatar with Sign Out Option
          <UserButton afterSignOutUrl="/" />
        ) : (
          // Show Sign In Button
          <SignInButton>
            <button className="bg-[#ff9f0d] hover:bg-[#ff9f3d] text-white px-4 py-2 rounded">
              Sign In
            </button>
          </SignInButton>
        )}
      </div>
          </div>
        </div>
      </div>
    </main>
  );
}
