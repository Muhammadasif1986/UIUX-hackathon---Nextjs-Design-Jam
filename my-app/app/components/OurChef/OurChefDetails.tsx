'use client'

import Image from "next/image";
import {client} from '@/s anity/lib/client';
import { useEffect, useState } from 'react';
import Link from "next/link"
import { Check } from "lucide-react";

interface chefData {
  name: string;
  position: string;
  imageUrl: string;
}

const getData = async (): Promise<chefData[]> => {

  const data = await client.fetch(
       `*[_type == "chef"]{
      name,
      position,
      "imageUrl": image.asset->url
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
        <Link href={`${ChefData.name}`}></Linkk>
        {ChefData.map((member, index) => (
          <div key={index} className="text-center shadow-lg rounded-lg pb-4">
            <Image
              src={member.imageUrl}
              alt={member.name}
              width={300}
              height={300}
              className="rounded-lg object-cover"
            />
            <h2 className="font-semibold mt-4 text-center">{member.name}</h2>
            <p className="text-gray-600 text-center">{member.position}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

