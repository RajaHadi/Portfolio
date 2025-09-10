'use client'
/* eslint-disable react/no-unescaped-entities */

import Image from "next/image";
import Link from "next/link";
import React from "react";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion"

const Hero = () => {
  return (
    <section className="relative text-gray-300 bg-gradient-to-br from-gray-900 via-gray-800 to-black body-font overflow-hidden">
      {/* Background Blur / Glow Effect */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-blue-900/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-purple-800/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center"
        >
          <h1 className="title-font sm:text-5xl text-4xl mb-6 font-extrabold text-white leading-tight">
            I am{" "}
            <span className="block text-blue-500">
              <Typewriter
                options={{
                  strings: [
                    "Raja Mannan",
                    "Web Developer",
                    "Python Developer",
                    "Agentic AI Student",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
          </h1>
          <div className="w-24 h-1 bg-blue-600 rounded mb-6"></div>

          <p className="mb-10 leading-relaxed text-lg text-gray-300 max-w-lg">
            👋 Hello! I’m a passionate developer with expertise in{" "}
            <span className="text-blue-400 font-semibold">Next.js</span> and{" "}
            <span className="text-blue-400 font-semibold">Tailwind CSS</span>, 
            now diving into the world of{" "}
            <span className="text-purple-400 font-semibold">
              Agentic AI using the OpenAI Agents SDK
            </span>
            . I love building responsive, user-friendly web applications and
            expanding into AI-powered solutions 🚀.
          </p>

          <div className="flex justify-center gap-4">
            <Link href={"#contact"}>
              <button className="inline-flex items-center justify-center text-white bg-blue-700 hover:bg-blue-600 border-0 py-3 px-8 rounded-xl text-lg shadow-lg shadow-blue-900/40 transition-all duration-300">
                Contact Me
              </button>
            </Link>

            <Link href={"#project"}>
              <button className="inline-flex items-center justify-center text-blue-300 border border-blue-500 py-3 px-8 rounded-xl text-lg hover:bg-blue-900/40 transition-all duration-300">
                View Projects
              </button>
            </Link>
          </div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6"
        >
          <div className="relative group">
            <Image
              className="object-cover object-center rounded-2xl shadow-2xl group-hover:scale-105 transition-transform duration-500"
              alt="hero"
              width={500}
              height={500}
              src={"/Raja_new.jpeg"}
            />
            {/* Glow border */}
            <div className="absolute inset-0 rounded-2xl border-2 border-blue-600/40 group-hover:border-blue-500/70 transition-colors duration-500"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

