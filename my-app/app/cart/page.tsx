"use client";
import React from "react";
import { useCart } from "@/context/CartContext";
import { RxCross1 } from "react-icons/rx";
import Image from "next/image";
import MenuNav from "../components/Menu/MenuNav";
import Header from "../components/Header";
import { useRouter } from "next/navigation";  // ✅ For checkout navigation

export default function CartPage() {
  const { cart, removeFromCart, clearCart, updateQuantity } = useCart();
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);
  const pageName = "Cart";
  const router = useRouter();  // ✅ Use router for checkout button

  if (cart.length === 0) {
    return (
      <>
        <MenuNav />
        <Header name={pageName} />
        <h1 className="text-center text-2xl font-bold mt-6">Your cart is empty!</h1>
      </>
    );
  }

  return (
    <>
      <MenuNav />
      <Header name={pageName} />
      <div className="container mx-auto p-4 md:p-6 lg:w-8/12 py-8">
        <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center">Shopping Cart</h1>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-gray-700">
            <thead>
              <tr className="border-b bg-gray-100 text-xs md:text-sm">
                <th className="p-2 md:p-4 text-left">Product</th>
                <th className="p-2 text-left">Price</th>
                <th className="p-2 text-left">Quantity</th>
                <th className="p-2 text-left">Total</th>
                <th className="p-2 text-left">Remove</th>
              </tr>
            </thead>

            <tbody>
              {cart.map((item) => (
                <tr key={item.id} className="border-b">
                  <td className="p-2 md:p-4 flex items-center gap-2 md:gap-4">
                    <Image src={item.img} alt={item.name} width={60} height={60} className="rounded-md" />
                    <span className="font-medium hidden md:block text-xs md:text-base">
                      {item.name}
                    </span>
                  </td>

                  <td className="p-2 text-sm md:text-base">${item.price.toFixed(2)}</td>

                  <td className="p-2">
                    <div className="flex items-center gap-1 md:gap-2">
                    <button
                      aria-label="Decrease quantity"
                       onClick={() => item.quantity > 1 && updateQuantity(item.id, item.quantity - 1)}
                        >
                        -
                    </button>
                      <span className="text-sm md:text-base">{item.quantity}</span>
                      <button
                       aria-label="Increase quantity"
                       onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                         +
                        </button>
                    </div>
                  </td>

                  <td className="p-2 text-sm md:text-base">
                    ${(item.price * item.quantity).toFixed(2)}
                  </td>

                  <td className="p-2 text-center">
                  <button
                    aria-label="Remove item from cart"
                    onClick={() => removeFromCart(item.id)}
                  >
                    <RxCross1 />
                  </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-6 text-center">
          <p className="text-lg font-semibold">Total: ${totalPrice.toFixed(2)}</p>
        </div>

        {/* ✅ Proceed to Checkout Button */}
        <button
  onClick={() => router.push("/checkout")}
  disabled={cart.length === 0}
  className={`mt-6 w-full px-4 py-2 rounded-md text-lg font-semibold transition 
    ${cart.length === 0 ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 text-white hover:bg-blue-700"}`}
>
  Proceed to Checkout
</button>

        {/* Clear Cart Button */}
        <button
          onClick={clearCart}
          className="mt-4 w-full bg-red-600 text-white px-4 py-2 rounded-md text-lg font-semibold hover:bg-red-700 transition"
        >
          Clear Cart
        </button>
      </div>
    </>
  );
}
