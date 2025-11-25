"use client";
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Projects = () => {
  const categories = ["All", "Web Development", "E-commerce"];
  const [activeCategory, setActiveCategory] = useState("All");

  const projects = [
    {
      title: "Governor's Website",
      category: "Web Development",
      image: "/projects/Raja.png",
      description: "This is Governor's IT Initiative Website I Cloned.",
      link: "https://github.com/RajaMannan/governor-website-clone"
    },
    {
      title: "Blog Website",
      category: "Web Development",
      image: "/projects/Blog_App.png",
      description: "A simple blog website with basic functionality.",
      link: "https://blog-website-flax-eight.vercel.app/"
    },
    {
      title: "Gentleman Clothing",
      category: "E-commerce",
      image: "/projects/Gentleman.png",
      description: "Modern e-commerce clothing store for men built with Next.js 15.",
      link: "https://gentleman-shop.vercel.app/"
    },
    {
      title: "Restaurant Website",
      category: "Web Development",
      image: "/projects/Food.png",
      description: "A Food Restaurant Website I developed For My UI Hackathon.",
      link: "https://my-hackathon-flame.vercel.app/"
    },
    {
      title: "Raja's Burger Point",
      category: "Web Development",
      image: "/projects/Raja_Burger.png",
      description: "A simple and attractive front-end created for Raja's Burgers.",
      link: "https://landing-page-fawn-xi-14.vercel.app/"
    },
    {
      title: "Luxe Bags",
      category: "E-commerce",
      image: "/projects/LuxeBags.png",
      description: "A attractive and resposive woman bags and purses store.",
      link: "https://v0-handbag-website-design-black.vercel.app/"
    },
  ];

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="px-8 py-20 max-w-7xl mx-auto">
      <div className="text-center mb-12 space-y-4">
        <h2 className="text-4xl font-bold text-white">My Projects</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          A collection of projects I’ve built with Next.js, Tailwind, and modern web technologies.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-6 py-2 rounded-full border text-sm font-medium transition-all cursor-pointer ${
              activeCategory === cat
                ? "bg-primary border-primary text-white"
                : "bg-[#2a2a2a] border-[#2a2a2a] text-gray-300 hover:border-primary"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((item, index) => (
          <div key={index} className="group relative overflow-hidden rounded-2xl aspect-[4/3] bg-[#2a2a2a]">
            <div className="absolute inset-0 bg-[#2a2a2a] flex items-center justify-center text-gray-600 group-hover:scale-105 transition-transform duration-500">
                <Image 
                  src={item.image} 
                  alt={item.title}
                  fill
                  className="object-cover"
                />
            </div>
            <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-end pb-8 gap-2 p-6 text-center">
                <h3 className="text-md font-bold text-primary">{item.category}</h3>
                <p className="text-white font-bold text-xl">{item.title}</p>
                <Link href={item.link} target="_blank">
                    <button className="bg-primary text-white px-6 py-2 rounded-full mt-2 text-sm cursor-pointer">View Project</button>
                </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
