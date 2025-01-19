

import Image from "next/image";
import { client } from "@/sanity/lib/client";

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

export default async function FoodDetailsPage({
  params: { details },
}: {
  params: { details: string };
}) {
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

  return (
    <main>
      <section className="flex justify-center items-center bg-slate-300">
        <div className="flex flex-col justify-center items-center w-full lg:w-8/12 lg:p-20">
          <h1 className="text-3xl font-semibold underline underline-offset-2 pb-10">
            {food.name} - Category: {food.category}
          </h1>
          <div className="w-auto px-6">
            <Image
              src={food.imageUrl}
              alt={`Image of ${food.name}`}
              width={600}
              height={400}
              className="rounded-xl"
            />
          </div>
          <div className="text-lg mt-6 text-center">
            <p>
              <strong>Tags:</strong> {food.tags.join(", ")}
            </p>
            <p>
              <strong>Price:</strong> ${food.price.toFixed(2)}
            </p>
            <p>
              <strong>Original Price:</strong>{" "}
              <span className="line-through">${food.originalPrice.toFixed(2)}</span>
            </p>
            <p>
              <strong>Description:</strong> {food.description}
            </p>
            <p
              className={`mt-4 font-bold ${
                food.available ? "text-green-600" : "text-red-600"
              }`}
            >
              {food.available ? "Available Now" : "Out of Stock"}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
