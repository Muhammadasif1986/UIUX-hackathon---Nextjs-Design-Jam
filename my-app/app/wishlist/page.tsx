"use client";
import React from "react";
import { useWishlist } from "@/context/WishlistContext";  // Make sure you have a WishlistContext similar to CartContext
import { RxCross1 } from "react-icons/rx";
import Image from "next/image";
import MenuNav from "../components/Menu/MenuNav";
import Header from "../components/Header";
import { useRouter } from "next/navigation";  // For navigation to the cart or product detail page

export default function WishlistPage() {
  const { wishlist, removeFromWishlist } = useWishlist();  // Assuming you have a similar hook for Wishlist
  const pageName = "Wishlist";
  const router = useRouter();  // For navigation when clicking on a product

  if (wishlist.length === 0) {
    return (
      <>
        <MenuNav />
        <Header name={pageName} />
        <h1 className="text-center text-2xl font-bold mt-6">Your wishlist is empty!</h1>
      </>
    );
  }

  return (
    <>
      <MenuNav />
      <Header name={pageName} />
      <div className="container mx-auto p-4 md:p-6 lg:w-8/12 py-8">
        <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center">Your Wishlist</h1>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-gray-700">
            <thead>
              <tr className="border-b bg-gray-100 text-xs md:text-sm">
                <th className="p-2 md:p-4 text-left">Product</th>
                <th className="p-2 text-left">Price</th>
                <th className="p-2 text-left">Remove</th>
              </tr>
            </thead>

            <tbody>
              {wishlist.map((item) => (
                <tr key={item.id} className="border-b">
                  <td className="p-2 md:p-4 flex items-center gap-2 md:gap-4">
                    <Image src={item.img} alt={item.name} width={60} height={60} className="rounded-md" />
                    <span className="font-medium hidden md:block text-xs md:text-base">
                      {item.name}
                    </span>
                  </td>

                  <td className="p-2 text-sm md:text-base">${item.price.toFixed(2)}</td>

                  <td className="p-2 text-center">
                    <button
                      aria-label="Remove item from wishlist"
                      onClick={() => removeFromWishlist(item.id)}
                    >
                      <RxCross1 />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
