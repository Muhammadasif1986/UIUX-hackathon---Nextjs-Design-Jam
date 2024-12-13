import React from 'react'
import Image from 'next/image';
import { LuCoffee } from "react-icons/lu";
import Clients from '../clients';
export default function MenuPage() {
      const starters = [
            {
              name: "Alder Grilled Chinook Salmon",
              description: "Toasted French bread topped with romano, cheddar",
              price: "32$",
              calories: "560 CAL",
            },
            {
              name: "Berries and Creme Tart",
              description: "Gorgonzola, ricotta, mozzarella, taleggio",
              price: "43$",
              calories: "700 CAL",
            },
            {
              name: "Tormentoso Bush Pizza Pintoage",
              description: "Ground cumin, avocados, peeled and cubed",
              price: "14$",
              calories: "1000 CAL",
            },
            {
              name: "Spicy Vegan Potato Curry",
              description: "Spreadable cream cheese, crumbled blue cheese",
              price: "35$",
              calories: "560 CAL",
            },
          ];
          const mainCourse = [
            {
              name: "Optic Big Breakfast Combo Menu",
              description: "Toasted French bread topped with romano, cheddar",
              price: "32$",
              calories: "560 CAL",
            },
            {
              name: "Cashew Chicken With Stir-Fry",
              description: "Gorgonzola, ricotta, mozzarella, taleggio",
              price: "43$",
              calories: "700 CAL",
            },
            {
              name: "Vegetables & Green Salad",
              description: "Ground cumin, avocados, peeled and cubed",
              price: "14$",
              calories: "1000 CAL",
            },
            {
              name: "Spicy Vegan Potato Curry",
              description: "Spreadable cream cheese, crumbled blue cheese",
              price: "35$",
              calories: "560 CAL",
            },
          ];
          const desserts = [
            {
              name: "Fig and lemon cake",
              description: "Toasted French bread topped with romano, cheddar",
              price: "32$",
              calories: "560 CAL",
            },
            {
              name: "Creamy mascarpone cake",
              description: "Gorgonzola, ricotta, mozzarella, taleggio",
              price: "43$",
              calories: "700 CAL",
            },
            {
              name: "Pastry, blueberries, lemon juice",
              description: "Ground cumin, avocados, peeled and cubed",
              price: "14$",
              calories: "1000 CAL",
            },
            {
              name: "Pain au chocolat",
              description: "Spreadable cream cheese, crumbled blue cheese",
              price: "35$",
              calories: "560 CAL",
            },
          ];
        
          const drinks = [
            {
              name: "Caffè macchiato",
              description: "Toasted French bread topped with romano, cheddar",
              price: "32$",
              calories: "560 CAL",
            },
            {
              name: "Aperol Spritz Capacianno",
              description: "Gorgonzola, ricotta, mozzarella, taleggio",
              price: "43$",
              calories: "700 CAL",
            },
            {
              name: "Caffe Latte Campuri",
              description: "Ground cumin, avocados, peeled and cubed",
              price: "14$",
              calories: "1000 CAL",
            },
            {
              name: "Tormentoso BushTea Pintoage",
              description: "Spreadable cream cheese, crumbled blue cheese",
              price: "35$",
              calories: "560 CAL",
            },
          ];
        
          return (
            <section className="flex flex-col justify-center items-center py-14 mt-8">
             
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12 w-10/12 lg:w-8/12">
                <div className="flex justify-center">
                  <Image
                    src="/starter.png"
                    alt="Starter"
                    width={400}
                    height={300}
                    className="rounded-md object-cover"
                  />
                </div>
                <div className="lg:col-span-2 lg:ml-10">
                  <span className='text-[#ff9f0d] text-lg'><LuCoffee /></span>
                  <h2 className="text-2xl font-bold text-black mb-6 mt-2">Starter Menu</h2>
                  {starters.map((item, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-start border-b border-gray-200 pb-4 mb-4"
                    >
                      <div>
                        <h3 className="text-lg {.starters[1][0] text-[#ff9f0d]} font-semibold text-black">
                          {item.name}
                        </h3>
                        <p className="text-sm text-gray-500mt-2">{item.description}</p>
                        <p className="text-xs text-gray-400 mt-2">{item.calories}</p>
                      </div>
                      <div className="text-[#ff9f0d] text-lg font-bold">
                        {item.price}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
        
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-10/12 lg:w-8/12 pb-14">
              <div className="lg:col-span-2 lg:ml-10">
                  <span className='text-[#ff9f0d] text-lg'><LuCoffee /></span>
                  <h2 className="text-2xl font-bold text-black mb-6 mt-2">Starter Menu</h2>
                  {mainCourse.map((item, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-start border-b border-gray-200 pb-4 mb-4"
                    >
                      <div>
                        <h3 className="text-lg {.starters[1][0] text-[#ff9f0d]} font-semibold text-black">
                          {item.name}
                        </h3>
                        <p className="text-sm text-gray-500mt-2">{item.description}</p>
                        <p className="text-xs text-gray-400 mt-2">{item.calories}</p>
                      </div>
                      <div className="text-[#ff9f0d] text-lg font-bold">
                        {item.price}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex justify-center">
                  <Image
                    src="/mainMenu.png"
                    alt="Main Course"
                    width={400}
                    height={300}
                    className="rounded-md object-cover"
                  />
                </div>
              </div>
              <Clients />

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12 w-10/12 lg:w-8/12 pt-14">
                <div className="flex justify-center">
                  <Image
                    src="/desert.png"
                    alt="Starter"
                    width={400}
                    height={300}
                    className="rounded-md object-cover"
                  />
                </div>
                <div className="lg:col-span-2 lg:ml-10">
                  <span className='text-[#ff9f0d] text-lg'><LuCoffee /></span>
                  <h2 className="text-2xl font-bold text-black mb-6 mt-2">Starter Menu</h2>
                  {desserts.map((item, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-start border-b border-gray-200 pb-4 mb-4"
                    >
                      <div>
                        <h3 className="text-lg {.starters[1][0] text-[#ff9f0d]} font-semibold text-black">
                          {item.name}
                        </h3>
                        <p className="text-sm text-gray-500mt-2">{item.description}</p>
                        <p className="text-xs text-gray-400 mt-2">{item.calories}</p>
                      </div>
                      <div className="text-[#ff9f0d] text-lg font-bold">
                        {item.price}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-10/12 lg:w-8/12">
              <div className="lg:col-span-2 lg:ml-10">
                  <span className='text-[#ff9f0d] text-lg'><LuCoffee /></span>
                  <h2 className="text-2xl font-bold text-black mb-6 mt-2">Starter Menu</h2>
                  {drinks.map((item, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-start border-b border-gray-200 pb-4 mb-4"
                    >
                      <div>
                        <h3 className="text-lg {.starters[1][0] text-[#ff9f0d]} font-semibold text-black">
                          {item.name}
                        </h3>
                        <p className="text-sm text-gray-500mt-2">{item.description}</p>
                        <p className="text-xs text-gray-400 mt-2">{item.calories}</p>
                      </div>
                      <div className="text-[#ff9f0d] text-lg font-bold">
                        {item.price}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex justify-center">
                  <Image
                    src="/drink.png"
                    alt="Main Course"
                    width={400}
                    height={300}
                    className="rounded-md object-cover"
                  />
                </div>
              </div>
            </section>
          );
        }
