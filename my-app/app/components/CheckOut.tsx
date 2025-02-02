"use client";
import Image from "next/image";
import { useCart } from "@/context/CartContext";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { route } from "sanity/router";

export default function CheckOut() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  console.log(errors);

  
  const router = useRouter();
  const CustomSubmit = (data: any) => {
    console.log("Form Submitted:", data);
    router.push("/shipping");
  };
  const { cart, clearCart } = useCart();
 

  const subTotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const discount = subTotal * 0.25;
  const tax = 54.76;
  const totalPrice = subTotal - discount + tax;

  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <div className="max-w-7xl mx-auto p-4 grid grid-cols-1 md:grid-cols-3 gap-8 lg:w-8/12">

        {/* Shipping Address Section */}
        <div className="md:col-span-2 bg-white p-8 shadow rounded-lg">
          <h2 className="text-2xl font-bold mb-6">Shipping Address</h2>
          <form onSubmit={handleSubmit(CustomSubmit)} className="grid grid-cols-2 gap-6">
            {/* First Name */}
            <div>
              <label className="block mb-2 text-sm font-medium">First Name</label>
              <input
                {...register("firstName", { required: "First Name is required" })}
                type="text"
                className="w-full border border-gray-300 p-2 rounded"
              />
              {errors.firstName && <p className="text-red-600 font-bold">{errors.firstName.message?.toString()}</p>}
            </div>

            {/* Last Name */}
            <div>
              <label className="block mb-2 text-sm font-medium">Last Name</label>
              <input
                {...register("lastName", { required: "Last Name is required" })}
                type="text"
                className="w-full border border-gray-300 p-2 rounded"
              />
              {errors.lastName && <p className="text-red-600 font-bold">{errors.lastName.message?.toString()}</p>}
            </div>

            {/* Email */}
            <div>
              <label className="block mb-2 text-sm font-medium">Email address</label>
              <input
                {...register("email", { 
                  required: "Email is required", 
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                    message: "Invalid email address"
                  }
                })}
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block mb-2 text-sm font-medium">Phone Number</label>
              <input
                {...register("phone", { 
                  required: "Phone Number is required",
                  pattern: {
                    value: /^[0-9]{10,12}$/,
                    message: "Invalid phone number"
                  }
                })}
                
              />
              
            </div>

            {/* Company */}
            <div>
              <label className="block mb-2 text-sm font-medium">Company</label>
              <input
                {...register("company", { required: "Company Name is required" })}
                type="text"
                className="w-full border border-gray-300 p-2 rounded"
              />
              {errors.company && <p className="text-red-600 font-bold">{errors.company.message?.toString()}</p>}
            </div>

            {/* Country */}
            <div>
              <label className="block mb-2 text-sm font-medium">Country</label>
              <select
                {...register("country", { required: "Country selection is required" })}
                className="w-full border border-gray-300 p-2 rounded"
              >
                <option value="">Choose country</option>
                <option value="USA">USA</option>
                <option value="UK">UK</option>
                <option value="IND">IND</option>
                <option value="PAK">UAE</option>
                <option value="PAK">SIR</option>
                <option value="PAK">BAN</option>
                <option value="PAK">AFG</option>
              </select>
              {errors.country && <p className="text-red-600 font-bold">{errors.country.message?.toString()}</p>}
            </div>

            {/* City */}
            <div>
              <label className="block mb-2 text-sm font-medium">City</label>
              <input
                {...register("city", { required: "City Name is required" })}
                type="text"
                className="w-full border border-gray-300 p-2 rounded"
              />
              {errors.city && <p className="text-red-600 font-bold">{errors.city.message?.toString()}</p>}
            </div>

            {/* Zip Code */}
            <div>
              <label className="block mb-2 text-sm font-medium">Zip Code</label>
              <input
                {...register("zipCode", { required: "Zip Code is required" })}
                type="text"
                className="w-full border border-gray-300 p-2 rounded"
              />
              {errors.zipCode && <p className="text-red-600 font-bold">{errors.zipCode.message?.toString()}</p>}
            </div>

            {/* Billing Address Checkbox */}
            <div className="mt-6 col-span-2">
              <h1 className="text-xl font-semibold">Billing Address</h1>
              <label className="flex items-center">
                <input
                  {...register("sameAsShipping")}
                  type="checkbox"
                  className="w-4 h-4 mr-2"
                />
                <span className="text-sm font-medium">Same as shipping address</span>
              </label>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8 col-span-2">
              <button
                className="border border-gray-300 px-8 py-2 rounded-lg text-gray-700 hover:bg-gray-200"
                onClick={() => router.push("/cart")}
              >
                &larr; Back to Cart
              </button>
              <button
                type="submit"
                className="bg-[#ff9f0d] text-white px-8 py-2 rounded-lg hover:bg-orange-500"
              >
                Proceed to Shipping &rarr;
              </button>
            </div>
          </form>
        </div>

        {/* Order Summary Section */}
        <div className="bg-white p-8 shadow rounded-lg">
          <h2 className="text-2xl font-bold mb-6">Order Summary</h2>
          <div className="space-y-4">

     
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
                clearCart();  
                router.push("signup");
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
