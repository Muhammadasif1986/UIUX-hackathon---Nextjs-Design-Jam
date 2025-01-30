"use client";
import Image from "next/image";
import { useCart } from "@/context/CartContext";
import { useRouter } from "next/navigation";

export default function CheckOut() {
  const { cart, clearCart } = useCart();
  const router = useRouter();

  // ✅ Calculate Total Price
  const subTotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);
  const discount = subTotal * 0.25; // 25% discount
  const tax = 54.76;
  const totalPrice = subTotal - discount + tax;

  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <div className="max-w-7xl mx-auto p-4 grid grid-cols-1 md:grid-cols-3 gap-8 lg:w-8/12">

        {/* Shipping Address Section */}
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

          {/* Billing Address Checkbox */}
          <div className="mt-6">
            <h1 className="text-xl font-semibold">Billing Address</h1>
            <label className="flex items-center">
              <input type="checkbox" className="w-4 h-4 mr-2" />
              <span className="text-sm font-medium">Same as shipping address</span>
            </label>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8">
            <button 
              className="border border-gray-300 px-8 py-2 rounded-lg text-gray-700 hover:bg-gray-200"
              onClick={() => router.push("/cart")}  // ✅ Back to Cart
            >
              &larr; Back to Cart
            </button>
            <button 
              className="bg-[#ff9f0d] text-white px-8 py-2 rounded-lg hover:bg-orange-500"
              onClick={() => router.push("/shipping")}  // ✅ Proceed to Shipping
            >
              Proceed to Shipping &rarr;
            </button>
          </div>
        </div>

        {/* Order Summary Section */}
        <div className="bg-white p-8 shadow rounded-lg">
          <h2 className="text-2xl font-bold mb-6">Order Summary</h2>
          <div className="space-y-4">

            {/* ✅ Loop through cart items */}
            {cart.length > 0 ? cart.map((item) => (
              <div key={item.id} className="flex items-center space-x-4 border-b pb-4">
                <Image src={item.img} alt={item.name} width={64} height={64} className="rounded" />
                <div>
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-sm text-gray-500">{item.quantity} x ${item.price.toFixed(2)}</p>
                  <p className="text-sm font-bold">${(item.price * item.quantity).toFixed(2)}</p>
                </div>
              </div>
            )) : <p className="text-center text-gray-500">Your cart is empty!</p>}
          </div>

          {/* Order Price Summary */}
          <div className="mt-6 space-y-2">
            <div className="flex justify-between text-sm">
              <span>Sub-total</span>
              <span>${subTotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Shipping</span>
              <span>Free</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Discount</span>
              <span>- ${discount.toFixed(2)} (25%)</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Tax</span>
              <span>${tax.toFixed(2)}</span>
            </div>
            <div className="flex justify-between font-bold text-lg">
              <span>Total</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>
          </div>

          {/* Place Order Button */}
          {cart.length > 0 && (
            <button
              className="w-full bg-[#ff9f0d] text-white py-3 mt-6 rounded-lg hover:bg-orange-500"
              onClick={() => {
                alert("Order placed successfully!");
                clearCart();  // ✅ Clear cart after placing order
                router.push("/");
              }}
            >
              Place Order &rarr;
            </button>
          )}
        </div>

      </div>
    </div>
  );
}
