'use client';
import { useEffect, useState } from "react";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { useCart } from "@/context/CartContext";
import MenuNav from "@/app/components/Menu/MenuNav";
import Header from "@/app/components/Header";

interface FoodDetails {
  id: number;
  name: string;
  category: string;
  price: number;
  originalPrice: number;
  tags: string[];
  imageUrl: string;
  slug: { current: string };
  description: string;
  available: boolean;
}

async function fetchFoodDetails(details: string) {
  const query = `*[_type == "food" && slug.current == $details][0]{
    _id,
    name,
    category,
    "imageUrl": image.asset->url,
    "slug": { "current": slug.current },
    tags,
    price,
    originalPrice,
    description,
    available
  }`;
  
  return await client.fetch(query, { details });
}

export default function FoodDetailsPage({ params }: { params: { details: string } }) {
  const [food, setFood] = useState<FoodDetails | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadFood() {
      try {
        const data = await fetchFoodDetails(params.details);
        if (data) {
          setFood({ ...data, id: parseInt(data._id, 10) || Date.now() });
        }
      } catch (error) {
        console.error("Error fetching food details:", error);
      } finally {
        setLoading(false);
      }
    }

    loadFood();
  }, [params.details]);

  if (loading) {
    return (
      <main>
        <section className="flex justify-center items-center bg-gray-200 min-h-screen">
          <div className="text-center">
            <h1 className="text-xl font-semibold text-blue-600">Loading food details...</h1>
          </div>
        </section>
      </main>
    );
  }

  if (!food) {
    return (
      <main>
        <section className="flex justify-center items-center bg-gray-200 min-h-screen">
          <div className="text-center">
            <h1 className="text-xl font-semibold text-red-600">
              Food details not found. Please check the URL or try again.
            </h1>
          </div>
        </section>
      </main>
    );
  }

  return <FoodDetailsContent food={food} />;
}

function FoodDetailsContent({ food }: { food: FoodDetails }) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({
      id: food.id,
      name: food.name,
      price: food.price,
      quantity: 1,
      img: food.imageUrl,
      category: food.category,
      available: food.available,
      slug: food.slug,
    });
  };

  return (
    <>
      <MenuNav />
      <Header name="Shop Detail" />
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

              <button
                onClick={handleAddToCart}
                className="mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
