"use client";
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import ProfileImage from "../../../public/Raja_new.jpeg";

const About = () => {
  return (
    <div id="about" className="bg-gray-50 py-20">
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 md:flex-row flex-col items-center">
          
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0"
          >
            <Image
              width={320}
              height={320}
              className="object-cover object-center rounded-2xl shadow-lg mx-auto border-4 border-blue-900"
              alt="Profile Image"
              src={ProfileImage}
            />
          </motion.div>

          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center"
          >
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-gray-900 relative">
              About Me
              <span className="absolute left-0 bottom-[-8px] w-20 h-1 bg-blue-900 rounded"></span>
            </h1>

            <p className="mb-5 leading-relaxed font-sans text-gray-700 text-lg">
              👋 Hello! I’m a passionate developer with a strong foundation in
              TypeScript, HTML, and CSS. I’ve completed Next.js and Tailwind
              CSS, and recently started exploring Agentic AI development using
              the OpenAI Agents SDK.
            </p>

            <p className="mb-5 leading-relaxed font-sans text-gray-700 text-lg">
              🎓 Academically, I completed my Matriculation from{" "}
              <span className="font-semibold">Citizen Public Secondary School</span> and my
              Intermediate from{" "}
              <span className="font-semibold">S.M. Govt. Science College</span>.
              I’m also enrolled in the{" "}
              <span className="font-semibold">
                Governor’s Initiative of Artificial Intelligence and Cloud
                Computing (GIAIC)
              </span>
              , where I’m currently learning Web Development and soon moving
              into Agentic AI.
            </p>

            <p className="mb-8 leading-relaxed font-sans text-gray-700 text-lg">
              💡 I enjoy crafting responsive, user-friendly applications and
              expanding my skills into AI-powered solutions. Always eager to
              learn, I aim to bring creative and intelligent ideas to life
              through code.
            </p>

            {/* Resume Button */}
            <div className="flex justify-center">
              <Link href={"/cv/HadiResume.pdf"}>
                <button className="inline-flex text-white bg-blue-900 border-0 py-3 px-8 focus:outline-none hover:bg-blue-700 transition rounded-lg text-lg font-medium shadow-md">
                  View Resume
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
