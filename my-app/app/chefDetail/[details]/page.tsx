'use client'

import Image from "next/image";
import {client} from '@/sanity/lib/client';
import { useEffect, useState } from 'react';
import Link from "next/link";
interface chefData {
  name: string;
  position: string;
  imageUrl: string;
  slug:string
}

const getData = async (): Promise<chefData[]> => {

  const data = await client.fetch(
       `*[_type == "chef"]{
      name,
      position,
      "imageUrl": image.asset->url,
      "slug":slug.current
    }`
   );
 return data;
};

export default function OurChefDetails() {

   const [ChefData, setChefData] = useState<chefData[]>([]);
      
        useEffect(() => {
          const fetchChefData = async () => {
            const data = await getData();
            setChefData(data);
          };
          fetchChefData();
        }, []);
 
  return (
    <div className="max-w-screen-xl mx-auto p-4 lg:w-8/12 py-10 ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {ChefData.map((member, index) => (
          <div key={index}>
            <Link href={`/chefDetail/${member.slug}`}>
            <Image
              src={member.imageUrl}
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
    </div>
  );
}

