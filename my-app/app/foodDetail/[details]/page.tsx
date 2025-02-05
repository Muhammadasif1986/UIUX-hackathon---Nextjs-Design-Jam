import Image from "next/image";
import { client } from "@/sanity/lib/client";
import MenuNav from "@/app/components/Menu/MenuNav";
import Header from "@/app/components/Header";

interface FoodDetails {
  name: string;
  category: string;
  price: number;
  originalPrice: number;
  tags: string[];
  imageUrl: string;
  slug: string;
  description: string;
  available: boolean;
}

interface FoodDetailPageProps {
  params: {
    details: string
  }
}


export default async function FoodDetailPage({ params }: FoodDetailPageProps) {
  const { details } = params;
  
  const query = `*[_type == "food" && slug.current == $details][0]{
    name,
    category,
    "imageUrl": image.asset->url,
    "slug": slug.current,
    tags,
    price,
    originalPrice,
    description,
    available
  }`;

  const food: FoodDetails | null = await client.fetch(query, { details });

  if (!food) {
    return (
      <main className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-500">Food details not found</h1>
          <p className="mt-2 text-gray-600">Please check the URL or try again later.</p>
        </div>
      </main>
    );
  }
  const pageName = "Shop Detail";
  return (
    <>
     <MenuNav />
          <Header 
          name={pageName}
          />
    <main className="h-auto bg-gray-50 p-6 my-16">
      <section className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-1/2">
            <Image
              src={food.imageUrl}
              alt={`Image of ${food.name}`}
              width={600}
              height={400}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="p-6 lg:w-1/2">
            <h1 className="text-3xl font-bold text-gray-800">{food.name}</h1>
            <p className="text-sm text-gray-500 mt-1">Category: {food.category}</p>

            <div className="mt-4">
              <p className="text-lg font-semibold text-gray-800">
                Price: <span className="text-green-600">${food.price.toFixed(2)}</span>
              </p>
              <p className="text-sm text-gray-500 line-through">
                Original Price: ${food.originalPrice.toFixed(2)}
              </p>
            </div>

            <p className="mt-4 text-gray-700">{food.description}</p>

            <div className="mt-6">
              <p className={`font-bold ${food.available ? "text-green-600" : "text-red-600"}`}>
                {food.available ? "Available Now" : "Out of Stock"}
              </p>
            </div>

            <div className="mt-6">
              <strong className="block mb-2 text-gray-800">Tags:</strong>
              <div className="flex flex-wrap gap-2">
                {food.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-sm text-white bg-blue-600 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
    </>
  );
}

