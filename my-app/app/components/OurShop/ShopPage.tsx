import React from "react";
import { FiSearch } from "react-icons/fi";
import Image from "next/image";
import { IoIosStarOutline } from "react-icons/io";
import { IoIosStar } from "react-icons/io";

export default function ShopPage() {
  const PicAdress = [
    { img: "/unsplash1.png", name: "Burger" },
    { img: "/unsplash2.png", name: "Pizza" },
    { img: "/unsplash3.png", name: "CupChake" },
    { img: "/unsplash7.png", name: "Cookies" },
  ];

  const products = [
    { name: "Fresh Lime", price: "$38.00", oldPrice: "$45.00", img: "/unsplash4.png" },
    { name: "Chocolate Muffin", price: "$28.00", img: "/unsplash5.png", isSale: true },
    { name: "Burger", price: "$21.00", oldPrice: "$45.00", img: "/burger.png" },
    { name: "Country Burger", price: "$46.00", img: "/unsplash6.png" },
    { name: "Drink", price: "$23.00", oldPrice: "$45.00", img: "/unsplash7.png" },
    { name: "Pizza", price: "$43.00", img: "/pizza.png" },
    { name: "Cheese Butter", price: "$10.00", img: "/unsplash8.png" },
    { name: "Sandwiches", price: "$25.00", img: "/unsplash9.png" },
    { name: "Chicken Chup", price: "$12.00", img: "/unsplash10.png", isSale: true },
    { name: "Country Burger", price: "$46.00", img: "/unsplash6.png" },
    { name: "Drink", price: "$23.00", oldPrice: "$45.00", img: "/unsplash7.png" },
    { name: "Pizza", price: "$43.00", img: "/pizza.png" },
    { name: "Cheese Butter", price: "$10.00", img: "/unsplash8.png" },
    { name: "Sandwiches", price: "$25.00", img: "/unsplash9.png" },
    { name: "Chicken Chup", price: "$12.00", img: "/unsplash10.png", isSale: true },
  ];

  return (
    <main className="flex justify-center py-14">
     
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 w-10/12 lg:w-8/12">
       
        <div className="col-span-3">
         
          <div className="flex flex-col lg:flex-row items-center gap-4 mb-12">
            <div>
              <label className="mr-2">Sort By:</label>
              <select className="border p-2 rounded-md">
                <option>Newest</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
              </select>
            </div>
            <div>
              <label className="mr-2">Show:</label>
              <select className="border p-2 rounded-md">
                <option>Default</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
              </select>
            </div>
          </div>

          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, index) => (
              <div
                key={index}
                className="border rounded-md bg-white shadow-sm hover:shadow-lg"
              >
                <div className="relative">
                  <Image
                    src={product.img}
                    alt={product.name}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-md font-semibold mb-2">{product.name}</h3>
                  <div className="flex items-center gap-4">
                    <span className="text-[#ff9f0d] font-bold">{product.price}</span>
                    {product.oldPrice && (
                      <span className="text-gray-400 line-through text-sm">
                        {product.oldPrice}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
            <div className="flex justify-center items-center mt-8 text-[#ff9f0d] hover:text-white">
            <button className="px-4 py-2 border rounded-md mx-1 hover:bg-[#ff9f0d]">1</button>
            <button className="px-4 py-2 border rounded-md mx-1 hover:bg-[#ff9f0d]">2</button>
            <button className="px-4 py-2 border rounded-md mx-1 hover:bg-[#ff9f0d]">3</button>
          </div>
            </div>
           

        
        <div className="col-span-1 lg:mt-40">
          <div className="border p-4 rounded-md bg-white">
            
            <div className="flex items-center mb-6">
              <input
                type="text"
                placeholder="Search product"
                className="w-full border py-1 px-2 rounded-md"
              />
              <div className="bg-[#ff9f0d] text-white p-2 rounded-r-md">
                <FiSearch />
              </div>
            </div>

         
            <h2 className="text-lg font-semibold mb-4">Category</h2>
            <ul className="space-y-3">
              {[ "Sandwiches",
                "Burger",
                "Chicken Chup",
                "Drink",
                "Pizza",
                "Thi",
                "Non Veg",
                "Uncategorized",].map(
                (category, index) => (
                  <li key={index} className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    {category}
                  </li>
                )
              )}
            </ul>
            <Image
              src="/Banner.png"
              alt="Ad Banner"
              width={300}
              height={200}
              className="mt-6 rounded-md"
            />
             <h2 className="text-lg font-semibold mt-6 mb-2">Filter By Price</h2>
            <div className="w-full text-[#ff9f0d]">
              <div className="w-full text-xs bg-[#ff9f0d] h-1"></div>
              <p className="text-sm text-gray-600 mt-1">$0 - $100</p>
              </div>
            
            <h2 className="text-lg font-semibold mt-6">Latest Products</h2>
            <ul className="mt-4 space-y-4">
              {PicAdress.map((product, index) => (
                <li key={index} className="flex items-center">
                  <Image
                    src={product.img}
                    alt={product.name}
                    width={70}
                    height={70}
                    className="object-cover rounded-md"
                  />
                  <div className="ml-4">
                    <p className="font-semibold">{product.name}</p>
                    <div className="flex text-[#ff9f0d]">
                      <IoIosStar />
                      <IoIosStar />
                      <IoIosStarOutline />
                    </div>
                    <p className="text-sm">$35.00</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-10">
              <h2 className="text-2xl font-semibold">Product Tag</h2>
              <div className="grid grid-cols-3 grid-rows-3">
                {[
                  "Burger",
                  "Pizza",
                  "CupChake",
                  "Cookies",
                  "Drink",
                  "Snack",
                  "Sandwich",
                  "Chicken",
                  "Rolls",
                ].map((tag, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center mt-2"
                  >
                    <span className="text-xs">{tag}</span>
                  </div>
                ))}
              </div>
              </div>
          </div>
        </div>
      </div>
    </main>
  );
}
