'use client';

import { useEffect, useState } from "react";
import { useParams } from "next/navigation"; 
import { client } from '@/sanity/lib/client';
import Image from "next/image";
import MenuNav from '../../../app/components/Menu/MenuNav'
import Header from '../../../app/components/Header'

interface ChefDetail {
  name: string;
  position: string;
  imageUrl: string;
  bio: string;
}

export default function ChefDetailPage() {
  const params = useParams();  
  const slug = params?.slug as string;  

  const [chef, setChef] = useState<ChefDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!slug) return;

    const fetchChefDetail = async () => {
      setLoading(true);
      try {
        const data = await client.fetch(
          `*[_type == "chef" && slug.current == $slug][0]{
            name,
            position,
            "imageUrl": image.asset->url,
            bio
          }`,
          { slug }
        );
        if (!data) {
          setError("Chef not found!");
        } else {
          setChef(data);
        }
      } catch (err) {
        console.error("Error fetching chef details:", err);
        setError("Failed to load chef details.");
      } finally {
        setLoading(false);
      }
    };

    fetchChefDetail();
  }, [slug]); // ✅ Proper dependency added

  if (!slug) return <p className="text-red-500 text-center">Invalid URL</p>;
  if (loading) return <p className="text-center text-gray-500">Loading...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;
  const pageName = "Chef Details";

  return (
    <>
    <MenuNav />
      <Header name={pageName} />
    <div className="max-w-3xl mx-auto p-6">
      <Image
        src={chef!.imageUrl}
        alt={chef!.name}
        width={400}
        height={400}
        className="rounded-lg mx-auto"
      />
      <h1 className="text-3xl font-bold text-center mt-4">{chef!.name}</h1>
      <p className="text-gray-500 text-center">{chef!.position}</p>
      <p className="mt-6 text-lg text-gray-700">{chef!.bio}</p>
    </div></>
  );
}
