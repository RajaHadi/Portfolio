"use client";
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { motion } from "framer-motion";
import { FaHtml5, FaCss3, FaPython } from "react-icons/fa6";
import { BiLogoTypescript } from "react-icons/bi";
import { RiNextjsFill, RiTailwindCssLine } from "react-icons/ri";

const skills = [
  { name: "HTML", level: 100, icon: <FaHtml5 className="text-3xl text-[#E34C26]" /> },
  { name: "CSS", level: 70, icon: <FaCss3 className="text-3xl text-[#264de4]" /> },
  { name: "TypeScript / JavaScript", level: 80, icon: <BiLogoTypescript className="text-3xl text-[#007acc]" /> },
  { name: "Next.js", level: 70, icon: <RiNextjsFill className="text-3xl text-white" /> },
  { name: "Tailwind CSS", level: 70, icon: <RiTailwindCssLine className="text-3xl text-[#06b6d4]" /> },
  { name: "Python Programming", level: 70, icon: <FaPython className="text-3xl text-[#FFD43B]" /> },
];

const Skill = () => {
  return (
    <div id="skill">
      <section className="text-gray-400 bg-gray-900 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          
          {/* Heading */}
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="text-xl text-blue-900 tracking-widest font-semibold mb-1">
              SKILLS
            </h1>
            <h1 className="sm:text-3xl text-2xl font-bold text-white">
              My Skills
            </h1>
          </div>

          {/* Skills Grid */}
          <div className="flex justify-between w-full flex-wrap -m-2 -mt-[4rem]">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="p-4 w-[100%] md:w-1/3"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex rounded-lg h-full bg-gradient-to-br from-gray-800/90 to-gray-700/70 backdrop-blur-md p-8 flex-col shadow-lg hover:shadow-xl transition">
                  
                  {/* Icon + Title */}
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 mr-3 inline-flex items-center justify-center rounded-full bg-gray-700 text-white flex-shrink-0">
                      {skill.icon}
                    </div>
                    <h2 className="text-white text-lg title-font font-medium">
                      {skill.name}
                    </h2>
                  </div>

                  {/* Progress Bar */}
                  <div className="flex-grow">
                    <div className="relative h-2 w-full bg-gray-600 rounded-xl overflow-hidden">
                      <motion.div
                        className="absolute h-2 bg-blue-900 rounded-xl"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        viewport={{ once: true }}
                      />
                    </div>
                    <p className="text-blue-900 font-bold mt-3 text-xl text-right">
                      {skill.level}%
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skill;
