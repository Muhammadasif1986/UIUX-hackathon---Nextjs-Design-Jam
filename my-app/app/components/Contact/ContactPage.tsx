import Image from "next/image";
export default function ContactPage() {
      return (
        <div className="bg-gray-100 min-h-screen py-10">
          <div className="max-w-7xl mx-auto p-4 grid grid-cols-1 md:grid-cols-3 gap-8 lg:w-8/12">
    
            <div className="md:col-span-2 bg-white p-8 shadow rounded-lg">
              <h2 className="text-2xl font-bold mb-6">Shipping Address</h2>
              <form className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block mb-2 text-sm font-medium">First name</label>
                  <input type="text" className="w-full border border-gray-300 p-2 rounded" />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium">Last name</label>
                  <input type="text" className="w-full border border-gray-300 p-2 rounded" />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium">Email address</label>
                  <input type="email" className="w-full border border-gray-300 p-2 rounded" />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium">Phone number</label>
                  <input type="text" className="w-full border border-gray-300 p-2 rounded" />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium">Company</label>
                  <input type="text" className="w-full border border-gray-300 p-2 rounded" />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium">Country</label>
                  <select className="w-full border border-gray-300 p-2 rounded">
                    <option>Choose country</option>
                    <option>USA</option>
                    <option>UK</option>
                  </select>
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium">City</label>
                  <input type="text" className="w-full border border-gray-300 p-2 rounded" />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium">Zip code</label>
                  <input type="text" className="w-full border border-gray-300 p-2 rounded" />
                </div>
              </form>
    
              <div className="mt-6">
              <h1 className="text-xl font-semibold">Build Adress</h1>
                <label className="flex items-center">
                  <input type="checkbox" className="w-4 h-4 mr-2" />
                  <span className="text-sm font-medium">Same as shipping address</span>
                </label>
              </div>
    
        
              <div className="flex justify-between mt-8">
                <button className="border border-gray-300 px-8 py-2 rounded-lg text-gray-700 hover:bg-gray-200">
                  &larr; Back to cart
                </button>
                <button className="bg-[#ff9f0d] text-white px-8 py-2 rounded-lg hover:bg-orange-500">
                  Proceed to shipping &rarr;
                </button>
              </div>
            </div>
    
            <div className="bg-white p-8 shadow rounded-lg">
              <h2 className="text-2xl font-bold mb-6">Order Summary</h2>
              <div className="space-y-4">
                {Array(3).fill(0).map((_, idx) => (
                  <div key={idx} className="flex items-center space-x-4 border-b pb-4">
                    <Image src="/unsplash10.png" alt="Product" width={64} height={64} className="rounded" />
                    <div>
                      <h3 className="font-semibold">Chicken Tikka Kabab</h3>
                      <p className="text-sm text-gray-500">150 gm net</p>
                      <p className="text-sm font-bold">$50</p>
                    </div>
                  </div>
                ))}
              </div>
             
              <div className="mt-6 space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Sub-total</span>
                  <span>$130</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Shipping</span>
                  <span>Free</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Discount</span>
                  <span>25%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Tax</span>
                  <span>$54.76</span>
                </div>
                <div className="flex justify-between font-bold text-lg">
                  <span>Total</span>
                  <span>$432.65</span>
                </div>
              </div>
              
              <button className="w-full bg-[#ff9f0d] text-white py-3 mt-6 rounded-lg hover:bg-orange-500">
                Place an order &rarr;
              </button>
            </div>
          </div>
        </div>
      );
    }
    