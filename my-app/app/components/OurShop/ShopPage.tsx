'use client';

import React, { useState, useEffect } from 'react';
import { FiSearch } from 'react-icons/fi';
import Image from 'next/image';
import { client } from '@/sanity/lib/client';
import Link from 'next/link';
import { useCart } from '@/context/CartContext'; // Import Cart Context
import { useWishlist } from '@/context/WishlistContext';

interface Product {
  id: number;  // Add ID
  name: string;
  price: number;
  oldPrice?: number;
  img: string;
  category: string;
  available: boolean;
  slug: { current: string };
  quantity?: number; // Make quantity optional
}

export default function ShopPage() {
  const { addToCart } = useCart(); // Get addToCart function from context
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [priceRange, setPriceRange] = useState<number[]>([0, 100]);
  const [sortOrder, setSortOrder] = useState<string>('Newest');
  const [cart, setCart] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const productsPerPage = 6;
  const { addToWishlist } = useWishlist();
  const [added, setAdded] = useState(false);

  const handleAddToWishlist = (item:any) => {
    addToWishlist(item);
    setAdded(true);
  };

  const item = {
    id: 1, // Example item ID
    name: 'Sample Food Item',
    price: 10.99,
    imageUrl: '/path/to/image.jpg',
  };


  useEffect(() => {
    async function fetchData() {
      try {
        // Fetch products from the CMS
        const productData = await client.fetch(
          `*[_type == "food"]{
            name,
            price,
            "oldPrice": originalPrice,
            "img": image.asset->url,
            category,
            available,
            slug
          }`
        );
        console.log('Product Data:', productData);

        // Fetch unique categories
        const categoryData = await client.fetch(
          `*[_type == "food"].category | order(category asc)`
        );
        const uniqueCategories: any[] = [...new Set(categoryData)];

        setProducts([...productData,...productData,...productData]);
        setCategories(uniqueCategories);

        // Set dynamic price range based on product prices
        const maxPrice = Math.max(...productData.map((p: Product) => p.price));
        setPriceRange([0, maxPrice]);
      } catch (error) {
        console.error('Error fetching data from CMS:', error);
        // Display error message to the user
      }
    }

    fetchData();
  }, []);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };  

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category === selectedCategory ? '' : category);
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOrder(e.target.value);
  };

  const addToCartBlock = (product: Product) => {
    // Use the functional form of setCart to ensure correct state updates
    setCart((prevCart) => {
      const updatedCart = [...prevCart, product];
      console.log('Cart Updated:', updatedCart); // Log the updated cart for debugging
      return updatedCart;
    });
  };

  const filteredProducts = products.filter((product) => {
    const matchesSearchTerm = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory ? product.category === selectedCategory : true;
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];

    return matchesSearchTerm && matchesCategory && matchesPrice;
  });

  const sortedProducts = filteredProducts.sort((a, b) => {
    if (sortOrder === 'Newest') {
      return b.name.localeCompare(a.name);
    } else if (sortOrder === 'Price: Low to High') {
      return a.price - b.price;
    } else if (sortOrder === 'Price: High to Low') {
      return b.price - a.price;
    }
    return 0;
  });

  const totalPages = Math.ceil(sortedProducts.length / productsPerPage);
  const paginatedProducts = sortedProducts.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

  return (
    <main className="flex justify-center py-14">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 w-10/12 lg:w-8/12">
        <div className="col-span-3">
          <div className="flex flex-col lg:flex-row items-center gap-4 mb-12">
            <div>
              <label className="mr-2">Sort By:</label>
              <select
                className="border p-2 rounded-md"
                value={sortOrder}
                onChange={handleSortChange}
              >
                <option value="Newest">Newest</option>
                <option value="Price: Low to High">Price: Low to High</option>
                <option value="Price: High to Low">Price: High to Low</option>
              </select>
            </div>
          </div>

          {paginatedProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {paginatedProducts.map((product, index) => (
                <div key={index}>
                  <Link href={`/shop/${product.slug.current}`}>
                    <div className="border rounded-md bg-white shadow-sm hover:shadow-lg">
                      <div className="relative">
                        <Image
                          src={product.img}
                          alt={product.name}
                          width={300}
                          height={200}
                          className="w-full h-48 object-cover"
                          priority // Optimize loading for above-the-fold images
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="text-md font-semibold mb-2">{product.name}</h3>
                        <div className="flex items-center gap-4">
                          <span className="text-[#ff9f0d] font-bold">${product.price}</span>
                          {product.oldPrice && (
                            <span className="text-gray-400 line-through text-sm">
                              ${product.oldPrice}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </Link>
                  <button
                    onClick={() => {
                        const cartProduct = { ...product, id: product.slug.current.length, quantity: 1};
                      addToCartBlock(product);
                       addToCart(cartProduct)
                      alert(`Product Add Your Cart`)
                      }}
                    className="bg-[#ff9f0d] text-white w-full py-2 rounded-md mt-2"
                  >
                    Add to Cart
                  </button>
                  <button
          onClick={() => {handleAddToWishlist(item)
            alert(`Product Add Your Wish List`)
          }}
          className={`mt-4 px-4 py-2 w-full ${added ? 'bg-indigo-900' :'bg-indigo-800 '} text-white rounded-md`}
        >
          {added ? 'Added to Wishlist' : 'Add to Wishlist'}
        </button>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500">No products found.</p>
          )}

          <div className="flex justify-center mt-6">
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`px-4 py-2 mx-1 ${
                  currentPage === i + 1 ? 'bg-[#ff9f0d] text-white' : 'bg-gray-200'
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </div>

        <div className="col-span-1 lg:mt-40">
          <div className="border p-4 rounded-md bg-white">
            <div className="flex items-center mb-6">
              <input
                type="text"
                placeholder="Search product"
                className="w-full border py-1 px-2 rounded-md"
                value={searchTerm}
                onChange={handleSearch}
              />
              <div className="bg-[#ff9f0d] text-white p-2 rounded-r-md">
                <FiSearch />
              </div>
            </div>

            <h2 className="text-lg font-semibold mb-4">Category</h2>
            <ul className="space-y-3">
              {categories.map((category, index) => (
                <li key={index} className="flex items-center">
                  <input
                    type="checkbox"
                    checked={selectedCategory === category}
                    onChange={() => handleCategoryChange(category)}
                    className="mr-2"
                  />
                  <span>{category}</span>
                </li>
              ))}
            </ul>

            <h2 className="text-lg font-semibold mb-4 mt-8">Filter by Price</h2>
            <input
              type="range"
              min={0}
              max={priceRange[1]}
              step={1}
              value={priceRange[0]}
              onChange={(e) => setPriceRange([+e.target.value, priceRange[1]])}
              className="w-full"
            />
            <div className="flex justify-between mt-2">
              <span>${priceRange[0]}</span>
              <span>${priceRange[1]}</span>
            </div>
          </div>
          {/* Display Cart Items for Debugging */}
 <div className=" lg:mt-10 border p-4 rounded-md bg-white">
        <h2 className="text-lg font-medium text-white mb-4 px-4 rounded-md bg-[#ff9f0d]">Cart Items</h2>
        <ul>
          {cart.map((item, index) => (
            <li key={index} className='list-decimal px-2 ml-2'>{item.name} - ${item.price}</li>
          ))}
        </ul>
      </div>
        </div>
 </div>

     
    </main>
  ); 
}