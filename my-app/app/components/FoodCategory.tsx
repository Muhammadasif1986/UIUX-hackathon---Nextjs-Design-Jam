'use client'
import Image from "next/image";
import { Great_Vibes } from "next/font/google";
import { client } from "@/sanity/lib/client";
import { useEffect , useState } from "react";
const Vibes = Great_Vibes({
      subsets: ["latin"],
      weight: "400",
    });

    interface foodImage {
      imageUrl: string;
    }

    const getData = async (): Promise<foodImage[]> => {
 
      const data = await client.fetch(
           `*[_type == "food"]{
          
          "imageUrl": image.asset->url
        }`
       );
     return data;
   };

export default function Cart() {
  const [FoodImage, setFoodImage] = useState<foodImage[]>([]);

  useEffect(() => {
    // Fetch the product data on component mount
    const fetchFoodImages = async () => {
      const data = await getData();
      setFoodImage(data);
    };
    fetchFoodImages();
  }, []);
  return (
    <main className="bg-black flex w-full justify-center items-center py-12 h-auto">
      <div className="flex flex-col justify-center items-center">
            <div className={Vibes.className}><p className="text-[#ff9f0d] text-2xl mb-4">Food Category</p></div>
            <div className="text-[#ff9f0d] text-2xl mb-8 flex">Ch<p className="text-white">oose Your Food Items </p></div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 justify-between gap-4 items-center h-auto lg:h-[200px]">
               {FoodImage.map((food, index) => (
                  <div key={index}>
                    <Image src={food.imageUrl} alt="food" width={200} height={200} />
                  </div>
               ))}
            </div>
      </div>
    </main>
  )
}
