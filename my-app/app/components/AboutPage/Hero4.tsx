import Image from "next/image";
import React from "react";

export default function Hero4() {
  return (
    <section className="py-12 px-4">
     
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-gray-800">
          OurFood Menu
        </h2>
        <p className="text-gray-500 mt-2 max-w-md mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed
          pharetra dictum neque massa congue.
        </p>
      </div>

    
      <div className="flex justify-center space-x-8 border-b-2 pb-3 mb-6">
        {["Breakfast", "Lunch", "Dinner", "Dessert", "Drink", "Snack"].map(
          (tab, index) => (
            <button
              key={index}
              className={`text-gray-500 font-medium pb-2 ${
                tab === "Breakfast" ? "border-b-2 border-[#ff9f0d] text-[#ff9f0d]" : ""
              }`}
            >
              {tab}
            </button>
          )
        )}
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
        {Array(6)
          .fill(0)
          .map((_, index) => (
            <div
              key={index}
              className="flex justify-between items-start border-b py-4"
            >
              <div className="flex-1">
                <h3 className={`font-bold text-gray-800 mb-1`}>
                  Alder Grilled Chinook Salmon
                </h3>
                <p className="text-gray-500 text-sm">
                  Toasted French bread topped with romano, cheddar
                </p>
                <p className="text-gray-400 text-xs mt-1">560 CAL</p>
              </div>

            
              <div className="text-[#ff9f0d] font-bold text-lg">32$</div>
            </div>
          ))}
      </div>

     
      <div className="text-center mt-8">
        <button className="border border-[#ff9f0d] text-[#ff9f0d] px-6 py-2 rounded-md hover:bg-[#ff9f0d] hover:text-white transition">
          View Menu
        </button>
      </div>
    </section>
  );
}
