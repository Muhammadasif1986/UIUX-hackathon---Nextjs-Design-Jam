'use client'
import Image from "next/image";
import { useState } from "react";
import { IoCalendarNumberOutline } from "react-icons/io5";
import { TiMessages } from "react-icons/ti";
import { GrUserAdmin } from "react-icons/gr";
import { SiIndigo } from "react-icons/si";
import { FiSearch } from "react-icons/fi";
import { IoIosStarOutline } from "react-icons/io";
import { IoIosStar } from "react-icons/io";

export default function BlogList() {
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedArticle, setExpandedArticle] = useState<number | null>(null);

  type Article = {
    id: number;
    title: string;
    image: string;
    content: string;
  };

  const articles:Article[] = [
    {
      id: 1,
      title: "10 Reasons To Do A Digital Detox Challenge",
      image: "/pizza.png",
      content:
        "At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat."
    },
    {
      id: 2,
      title: "Traditional Soft Pretzels with Sweet Beer Cheese",
      image: "/desert.png",
      content:
        "Pretzels with beer cheese make a perfect snack. The rich, cheesy dip complements the soft, salty pretzels in an irresistible way."
    },
    {
      id: 3,
      title: "The Ultimate Hangover Burger: Egg in a Hole",
      image: "/desert.png",
      content:
        "At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat."
    },
    {
      id: 4,
      title: "My Favorite Easy Black Pizza Toast Recipe",
      image: "/burger.png",
      content:
        "Pretzels with beer cheese make a perfect snack. The rich, cheesy dip complements the soft, salty pretzels in an irresistible way."
    },
  ];
  const articles2 = [
    {
      id: 1,
      title: "10 Reasons To Do A Digital Detox Challenge",
      image: "/unsplash7.png",
    },
    {
      id: 2,
      title: "Traditional Soft Pretzels with Sweet Beer Cheese",
      image: "/unsplash8.png",
    },
    {
      id: 3,
      title: "The Ultimate Hangover Burger: Egg in a Hole",
      image: "/unsplash9.png",
    },
    {
      id: 4,
      title: "My Favorite Easy Black Pizza Toast Recipe",
      image: "/unsplash10.png",
    },
  ];
  const articles3 = [
    {
      id: 1,
      title: "chicken Fry",
      image: "/unsplash7.png",
      price: "56",
    },
    {
      id: 2,
      title: "Traditional",
      image: "/unsplash8.png",
      price: "26",
    },
    {
      id: 3,
      title: "Hangover Burger",
      image: "/unsplash9.png",
      price: "36",
    },
    {
      id: 4,
      title: "Pizza Toast",
      image: "/unsplash10.png",
      price: "16",
    },
    {
      id: 5,
      title: "Pizza Toast",
      image: "/unsplash10.png",
      price: "46",
    },
  ];
  const tags = [
    "Sandwich",
    "Tikka",
    "Bbq",
    "Restaurant",
    "Chicken Sharma",
    "Health",
    "Fastfood",
    "Food",
    "Pizza",
    "Burger",
    "Chicken",
  ];

  const galleryImages = [
    "/pizza.png",
    "/burger.png",
    "/mainMenu.png",
    "/starter.png",
    "/pizza.png",
    "/burger.png",
  ];

  const socialIcons = [
    { src: "/twitter.png", alt: "Twitter", link: "#" },
    { src: "/youtube.png", alt: "YouTube", link: "#" },
    { src: "/P.png", alt: "Pinterest", link: "#" },
    { src: "/insta.png", alt: "Instagram", link: "#" },
    { src: "/facebook.png", alt: "Facebook", link: "#" },
  ];

  const filteredArticles = articles.filter((article) =>
    article.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-screen-lg mx-auto p-4 grid grid-cols-1 md:grid-cols-3 gap-8 py-14">
      <div className="md:col-span-2">
        {filteredArticles.map((article) => (
          <div key={article.id} className="mb-8">
            <div className="relative h-[300px] w-full">
              <Image
                src={article.image}
                alt={article.title}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <div className="flex items-center space-x-3 mt-5">
              <span className="text-[#ff9f0d]"><IoCalendarNumberOutline /></span>
              <p>Feb 14, 2022 /</p>
              <span className="text-[#ff9f0d]"><TiMessages /></span>
              <p>3 /</p>
              <span className="text-[#ff9f0d]"><GrUserAdmin /></span>
              <p>Admin</p>
            </div>
            <h2 className="text-2xl font-bold mt-4">{article.title}</h2>
            <hr className="border-[1px] border-gray-300 my-8" />
            <p className="mt-2 text-gray-700">
            {expandedArticle === article.id ? article.content : article.content.slice(0, 100) + "..."}</p>
          <button className="flex items-center mt-4 px-4 py-2 text-lg border-[1px] border-[#ff9f0d] text-[#ff9f0d] rounded" onClick={() => setExpandedArticle(expandedArticle === article.id ? null : article.id)} >
            {expandedArticle === article.id ? "Show Less" : "Read More"}
          </button>
          </div>
        ))}
      </div>

      <div>
        <div className="flex items-center mb-4">
          <input
            type="text"
            placeholder="Search blog"
            className="w-full border p-4 rounded-md"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className="bg-[#ff9f0d] text-white p-[21px] rounded-r-md">
            <FiSearch />
          </div>
        </div>
        <div className="p-4 border rounded-lg shadow-md">
          <div className="relative h-[150px] w-[150px] mx-auto">
            <Image
              src="/prince.png"
              alt="Profile Picture"
              layout="fill"
              objectFit="cover"
              className="rounded-full"
            />
          </div>
          <div className="flex flex-col justify-center items-center mt-8">
            <p className="font-semibold">Prince Miyako</p>
            <p className="text-sm text-center mt-4 text-gray-700">
              Blogger/Photographer
            </p>
            <div className="flex text-[#ff9f0d] mt-2">
              <IoIosStar />
              <IoIosStar />
              <IoIosStarOutline />
              <p className="ml-2 text-sm text-center text-gray-700">
                (1 Review)
              </p>
            </div>
            <p className="text-sm text-center mt-4 text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.Veritatis
              distinctio, odio eligendi suscipit reprehenderit atque
            </p>
            <Image
              src="/socialicon.png"
              alt="Image"
              width={100}
              height={100}
              className="mt-5"
            />
          </div>
        </div>

        <div className="mt-8 p-4 border rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-8">Recent Posts</h3>
          <ul className="space-y-2">
            {articles2.map((post) => (
              <div key={post.id}> 
                <div className="flex items-center">
                  <div className="h-[100px] w-[150px] flex flex-col justify-center items-center">
                    <Image
                      src={post.image}
                      alt={post.title}
                      height={100}
                      width={100}
                      objectFit="cover"
                      className="rounded-xl"
                    />
                  </div>
                  <div className="ml-2">
                    <p className="text-gray-600 mb-2">Feb 14, 2022 /</p>
                    <li className="text-sm">{post.title}</li>
                  </div>
                </div>
                <hr className="border-[1px] border-gray-300 my-5" />
              </div>
            ))}
          </ul>
        </div>

        <div className="mt-8 p-4 border rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-8">Recent Posts</h3>
          <ul className="space-y-4">
            {articles3.map((post) => (
              <div
                key={post.id}
                className="flex items-center px-5 justify-between"
              >
                <div className="h-[70px] w-[200px] flex items-center">
                  <Image
                    src={post.image}
                    alt={post.title}
                    height={70}
                    width={70}
                    objectFit="cover"
                    className="rounded-xl"
                  />

                  <li className="text-sm ml-2">{post.title}</li>
                </div>
                <p> {post.price}</p>
              </div>
            ))}
          </ul>
        </div>

        <div className="mb-8 mt-10">
        <h3 className="text-xl font-bold mb-4">Populer Tags</h3>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 border border-gray-300 rounded-lg text-gray-600 text-sm cursor-pointer hover:bg-gray-200"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>


      <div className="mb-8">
        <h3 className="text-xl font-bold mb-4">Photo Gallery</h3>
        <div className="grid grid-cols-3 gap-2">
          {galleryImages.map((img, index) => (
            <div key={index} className="relative w-full h-[100px]">
              <Image
                src={img}
                alt={`Gallery Image ${index + 1}`}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Follow Us */}
      <div>
        <h3 className="text-xl font-bold mb-4">Follow Us</h3>
        <div className="flex items-center gap-4">
          {socialIcons.map((icon, index) => (
            <a key={index} href={icon.link} target="_blank" rel="noreferrer">
              <div className="relative w-[40px] h-[40px] bg-gray-100 rounded-lg flex items-center justify-center hover:bg-[#ff9f0d] to-80%">
                <Image
                  src={icon.src}
                  alt={icon.alt}
                  width={15}
                  height={15}
                  className="object-contain"
                />
              </div>
            </a>
          ))}
        </div>
      </div>

      </div>
    </div>
  );
}
