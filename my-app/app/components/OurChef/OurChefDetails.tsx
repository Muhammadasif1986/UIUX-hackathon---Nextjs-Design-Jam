'use client';

import Image from "next/image";
import { client } from '@/sanity/lib/client';
import { useEffect, useState } from 'react';
import Link from "next/link";


interface ChefData {
  name: string;
  position: string;
  imageUrl: string;
  slug: string;
}

const getData = async (): Promise<ChefData[]> => {
  try {
    const data = await client.fetch(
      `*[_type == "chef"]{
        name,
        position,
        "imageUrl": image.asset->url,
        "slug": slug.current
      }`
    );
    return data;
  } catch (error) {
    console.error("Error fetching chef data:", error);
    return []; // Return an empty array in case of an error
  }
};

export default function OurChefDetails() {
  const [chefData, setChefData] = useState<ChefData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchChefData = async () => {
      try {
        const data = await getData();
        if (!data || data.length === 0) {
          setError("No data found!");
        } else {
          setChefData(data);
        }
      } catch (err) {
        setError("Failed to fetch data.");
      } finally {
        setLoading(false);
      }
    };

    fetchChefData();
  }, []);

  return (
    <div className="max-w-screen-xl mx-auto p-4 lg:w-8/12 py-10">
      {loading && <p className="text-center text-gray-500">Loading...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}

      {!loading && !error && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {chefData.map((member, index) => (
            <div key={index}>
              <Link href={`/chefDetail/${member.slug}`}>
                {/* Using <img> instead of <Image> for debugging */}
                <Image
                  src={encodeURI(member.imageUrl)}
                  alt={member.name}
                  width={300}
                  height={300}
                  className="rounded-lg object-cover"
                />
                <h2 className="font-semibold mt-4 text-center">{member.name}</h2>
                <p className="text-gray-600 text-center">{member.position}</p>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
