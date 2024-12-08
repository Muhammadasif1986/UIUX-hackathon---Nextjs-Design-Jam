import Image from "next/image";
import { Great_Vibes } from "next/font/google";
const Vibes = Great_Vibes({
      subsets: ["latin"],
      weight: "400",
    });

export default function Cart() {
  return (
    <main className="bg-black flex w-full h-auto justify-center items-center py-12">
      <div className="flex flex-col justify-center items-center">
            <div className={Vibes.className}><p className="text-[#ff9f0d] text-2xl mb-4">Food Category</p></div>
            <div className="text-[#ff9f0d] text-2xl mb-8 flex">Ch<p className="text-white">oose Your Food Items </p></div>
            <div className="flex flex-col lg:flex-row justify-between gap-6 items-center h-auto lg:h-[200px]">
                  <div><Image src="/unsplash7.png" alt="Image" width={200} height={200} /></div>
                  <div><Image src="/unsplash8.png" alt="Image" width={200} height={200} /></div>
                  <div><Image src="/unsplash9.png" alt="Image" width={200} height={200} /></div>
                  <div><Image src="/unsplash10.png" alt="Image" width={200} height={200} /></div>
            </div>
      </div>
    </main>
  )
}
