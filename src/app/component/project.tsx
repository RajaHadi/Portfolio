'use client'
/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import ResumeImage from '../../../public/projects/static Resume.png';
import RajaImage from '../../../public/projects/Raja.png';
import Blog from '../../../public/projects/Blog App.png';
import Food from '../../../public/projects/Food.png';
import Ecommerce from '../../../public/projects/Ecommerce.png';

const projects = [
  {
    title: "Governor's Website",
    subtitle: "GOVERNOR'S WEBSITE",
    desc: "This is Governor's IT Initiative Website I Cloned.",
    img: RajaImage,
    link: "",
  },
  {
    title: "Blog Website",
    subtitle: "BLOG APP",
    desc: "A simple blog website with basic functionality.",
    img: Blog,
    link: "https://blog-website-flax-eight.vercel.app/",
  },
  {
    title: "Ecommerce Website",
    subtitle: "ECOMMERCE",
    desc: "A simple Ecommerce Website with cart functionality.",
    img: Ecommerce,
    link: "https://ecommerce-silk-five-67.vercel.app/",
  },
  {
    title: "Restaurant Website",
    subtitle: "FOOD RESTAURANT",
    desc: "A Food Restaurant Website I developed For My UI Hackathon.",
    img: Food,
    link: "https://my-hackathon-flame.vercel.app/",
  },
  {
    title: "Static Resume",
    subtitle: "STATIC RESUME",
    desc: "A simple static resume created to achieve a milestone.",
    img: ResumeImage,
    link: "https://static-interactive-resume-vert.vercel.app/",
  },
];

const Project = () => {
  return (
    <section id="project" className="text-gray-400 bg-gray-950 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="sm:text-4xl text-3xl font-bold title-font mb-4 text-white tracking-wide"
          >
            My Projects
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="lg:w-2/3 mx-auto leading-relaxed text-lg text-gray-300"
          >
            A collection of projects I’ve built with <span className="text-blue-400 font-medium">Next.js</span>, <span className="text-teal-400 font-medium">Tailwind</span>, and modern web technologies.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((proj, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="relative group rounded-2xl overflow-hidden shadow-lg border border-gray-800"
            >
              <Image 
                src={proj.img}
                alt={proj.title}
                className="object-cover w-full h-64 transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col justify-end p-6">
                <h2 className="text-blue-400 text-sm font-semibold tracking-wide">{proj.subtitle}</h2>
                <h1 className="text-white text-xl font-bold">{proj.title}</h1>
                <p className="text-gray-300 text-sm mt-2">{proj.desc}</p>
                {proj.link ? (
                  <Link href={proj.link} target="_blank" className="mt-3 inline-block text-blue-400 hover:underline font-semibold">
                    Click To View →
                  </Link>
                ) : (
                  <p className="mt-3 text-red-400 font-medium">Not Deployed</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
