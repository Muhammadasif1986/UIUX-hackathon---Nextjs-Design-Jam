import React from "react";

export default function ShopPage() {
  const products = [
    {
      name: "Fresh Lime",
      price: "$38.00",
      oldPrice: "$45.00",
      img: "/fresh-lime.jpg",
      category: "Drink",
    },
    {
      name: "Chocolate Muffin",
      price: "$28.00",
      img: "/chocolate-muffin.jpg",
      category: "Dessert",
      isSale: true,
    },
    {
      name: "Burger",
      price: "$21.00",
      oldPrice: "$45.00",
      img: "/burger.jpg",
      category: "Burger",
    },
    {
      name: "Country Burger",
      price: "$46.00",
      img: "/country-burger.jpg",
      category: "Burger",
    },
    {
      name: "Drink",
      price: "$23.00",
      oldPrice: "$45.00",
      img: "/drink.jpg",
      category: "Drink",
    },
    {
      name: "Pizza",
      price: "$43.00",
      img: "/pizza.jpg",
      category: "Pizza",
    },
    {
      name: "Cheese Butter",
      price: "$10.00",
      img: "/cheese-butter.jpg",
      category: "Snack",
    },
    {
      name: "Sandwiches",
      price: "$25.00",
      img: "/sandwiches.jpg",
      category: "Sandwich",
    },
    {
      name: "Chicken Chup",
      price: "$12.00",
      img: "/chicken-chup.jpg",
      category: "Chicken",
      isSale: true,
    },
  ];

  return (
    <div className="grid grid-cols-12 gap-6 px-6 py-8 lg:px-24">
      <div className="col-span-12 lg:col-span-9">
        <div className="flex justify-between items-center mb-6">
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
              <option>12</option>
              <option>24</option>
            </select>
          </div>
        </div>
            

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="border rounded-md overflow-hidden bg-white shadow-sm hover:shadow-lg"
            >
              <div className="relative">
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                {product.isSale && (
                  <span className="absolute top-2 left-2 bg-orange-500 text-white text-xs px-2 py-1 rounded-md">
                    Sale
                  </span>
                )}
              </div>
              <div className="p-4">
                <h3 className="text-md font-semibold mb-2">{product.name}</h3>
                <div className="flex items-center justify-between">
                  <span className="text-orange-500 font-bold">
                    {product.price}
                  </span>
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

        {/* Pagination */}
        <div className="flex justify-center items-center mt-8">
          <button className="px-4 py-2 border rounded-md mx-1">1</button>
          <button className="px-4 py-2 border rounded-md mx-1 bg-orange-500 text-white">
            2
          </button>
          <button className="px-4 py-2 border rounded-md mx-1">3</button>
        </div>
        {/* Sidebar */}
      <div className="col-span-12 lg:col-span-3">
        <div className="border p-4 rounded-md bg-gray-50">
          <h2 className="text-lg font-semibold mb-4">Search Product</h2>
          <input
            type="text"
            placeholder="Search..."
            className="w-full border p-2 rounded-md mb-6"
          />

          <h2 className="text-lg font-semibold mb-4">Category</h2>
          <ul className="space-y-2">
            {["Sandwiches", "Burger", "Chicken Chup", "Drink", "Pizza"].map(
              (category, index) => (
                <li key={index}>
                  <input type="checkbox" className="mr-2" />
                  {category}
                </li>
              )
            )}
          </ul>

          <h2 className="text-lg font-semibold mt-6 mb-4">Filter By Price</h2>
          <div>
            <input type="range" className="w-full" />
            <p className="text-sm text-gray-600 mt-2">$0 - $100</p>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

