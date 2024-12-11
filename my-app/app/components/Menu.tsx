import Image from "next/image";
import Link from "next/link";
import { Great_Vibes } from "next/font/google";
const Vibes = Great_Vibes({
      subsets: ["latin"],
      weight: "400",
    });

export default function Menu() {
      const cards1 =[
            {image:"/dish1.png", itemsName:"Lettuce Leaf", Category:"Lacus nisi, et ac dapibus velit in consequat.", rates:"12.5$", },
            {image:"/dish2.png", itemsName:"Fresh Breakfast", Category:"Lacus nisi, et ac dapibus velit in consequat.", rates:"14.5$", },
            {image:"/dish3.png", itemsName:"Mild Butter", Category:"Lacus nisi, et ac dapibus velit in consequat.", rates:"12.5$", },
            {image:"/dish4.png", itemsName:"Fresh Bread", Category:"Lacus nisi, et ac dapibus velit in consequat.", rates:"12.5$", },   
      ]
      const cards2 =[
            {image:"/dish5.png", itemsName:"Glow Cheese", Category:"Lacus nisi, et ac dapibus velit in consequat.", rates:"12.5$", },
            {image:"/dish6.png", itemsName:"Italian Pizza", Category:"Lacus nisi, et ac dapibus velit in consequat.", rates:"14.5$", },
            {image:"/dish7.png", itemsName:"Sllice Beef", Category:"Lacus nisi, et ac dapibus velit in consequat.", rates:"12.5$", },
            {image:"/dish8.png", itemsName:"Mushaom Pizza", Category:"Lacus nisi, et ac dapibus velit in consequat.", rates:"12.5$", },   
      ]
  return (
    <main className="bg-[#0d0d0d] flex w-full h-auto justify-center items-center py-6">
      <div className="flex flex-col justify-center items-center w-10/12 lg:w-8/12">
            <div className={Vibes.className}><p className="text-[#ff9f0d] text-2xl mb-4">Choose & pick</p></div>
            <div className="text-[#ff9f0d] text-2xl flex">Fr<p className="text-white">om Our Menu </p></div>

            <div className="flex w-full justify-center lg:justify-start h-auto py-3 my-10">
                  <ul className="flex flex-col lg:flex-row  text-white font-[Poppins] gap-12 font-thin">
                        <Link href="/"><li className="text-[#ff9f0d]">Breakfast</li></Link>
                        <Link href="/"><li>Lunch</li></Link>
                        <Link href="/"><li>Dinner</li></Link>
                        <Link href="/"><li>Dessert</li></Link>
                        <Link href="/"><li>Drink</li></Link>
                        <Link href="/"><li>Snack</li></Link>
                        <Link href="/"><li>Suops</li></Link>
                       
                  </ul>
            </div>

            <div className="flex justify-between items-center flex-col lg:flex-row w-full h-auto">

            <div className="flex justify-center items-center h-auto w-full mr-6">
                  <div><Image src="/salts.png" alt="Image" width={500} height={500} /></div>
            </div>
 
            <div className="flex flex-col justify-center gap-4 items-center h-auto lg:h-auto w-full mt-10 lg:mt-0">
                  {cards1.map((card, index) => (
                        <div key={index} className="flex gap-3 justify-center items-center">
                              <Image src={card.image} alt="Image" width={60} height={60} />
                              <div>
                              <p className="text-white text-xg">{card.itemsName}</p>
                              <p className="text-white text-xs">{card.Category}</p>
                              <p className="text-[#ff9f0d] text-xl">{card.rates}</p>
                              </div>
                        </div>
                  ))}
                  </div>
                  <div className="flex flex-col justify-center gap-4 items-center h-auto lg:h-auto w-full">
                  {cards2.map((cards, index) => (
                        <div key={index} className="flex gap-3 justify-center items-center">
                              <Image src={cards.image} alt="Image" width={60} height={60} />
                              <div>
                              <p className="text-white text-lg">{cards.itemsName}</p>
                              <p className="text-white text-xs">{cards.Category}</p>
                              <p className="text-[#ff9f0d] text-xl">{cards.rates}</p>
                              </div>
                        </div>
                  ))}
                  </div>




            </div>
      </div>
    </main>
  )
}
