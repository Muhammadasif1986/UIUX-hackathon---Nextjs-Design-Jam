'use client';

import Image from "next/image";
import { client } from "@/sanity/lib/client";



interface ChefDetails {
  name: string;
  position: string;
  imageUrl: string;
  slug: string;
  specialty: string;
  experience: string;
  description: string;
  available: boolean;
}

// Fetch a single chef by slug



export default async function ChefDetailsPage({
  params: { details },
}: {
  params: { details: string };
}) {
      const query = `*[_type == "chef" && slug.current == $details][0]{
            name,
            position,
            "imageUrl": image.asset->url,
            "slug": slug.current,
            specialty,
            experience,
            description,
            available
          }`;
        
          
            const chef = await client.fetch(query, {details} );
         
      
  
  if (!chef) {
    return (
      <main>
        <section className="flex justify-center items-center bg-gray-200 min-h-screen">
          <div className="text-center">
            <h1 className="text-xl font-semibold text-red-600">
              Chef details not found. Please check the URL or try again.
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
            {chef.name} - Specialty: {chef.specialty}
          </h1>
          <div className="w-auto px-6">
            <Image
              src={chef.imageUrl}
              alt={`Image of ${chef.name}`}
              width={600}
              height={400}
              className="rounded-xl"
            />
          </div>
          <div className="text-lg mt-6 text-center">
            <p>
              <strong>Position:</strong> {chef.position}
            </p>
            <p>
              <strong>Experience:</strong> {chef.experience} years
            </p>
            <p>
              <strong>Description:</strong> {chef.description}
            </p>
            <p
              className={`mt-4 font-bold ${
                chef.available ? "text-green-600" : "text-red-600"
              }`}
            >
              {chef.available ? "Available for Work" : "Currently Unavailable"}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
