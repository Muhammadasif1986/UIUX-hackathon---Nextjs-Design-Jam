import { RxCross1 } from "react-icons/rx";
import Image from "next/image";
export default function ShoppingCart() {
  return (
    <div className="container mx-auto p-4 md:p-6 lg:w-8/12 py-8">
      <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center">
        Shopping Cart
      </h1>

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
            {[...Array(5)].map((_, index) => (
              <tr key={index} className="border-b">
              
                <td className="p-2 md:p-4 flex items-center gap-2 md:gap-4">
                  <Image
                    src="/dish1.png"
                    alt="Product"
                    width={100}
                    height={100}
                    className="w-12 h-12 md:w-16 md:h-16 rounded object-cover"
                  />
                  <span className="font-medium hidden md:block text-xs md:text-base">
                    Product Name
                  </span>
                </td>

                
                <td className="p-2 text-sm md:text-base">$25.00</td>

              
                <td className="p-2">
                  <div className="flex items-center gap-1 md:gap-2">
                    <button className="border px-1 py-1 md:px-2 rounded text-xs md:text-sm">
                      -
                    </button>
                    <span className="text-sm md:text-base">1</span>
                    <button className="border px-1 py-1 md:px-2 rounded text-xs md:text-sm">
                      +
                    </button>
                  </div>
                </td>

                {/* Total */}
                <td className="p-2 text-sm md:text-base">$50.00</td>

                {/* Remove Button */}
                <td className="p-2 text-center">
                  <button className="text-xl md:text-2xl text-gray-600 hover:text-red-600">
                    <RxCross1 />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
