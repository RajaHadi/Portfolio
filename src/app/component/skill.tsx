'use client'
import React from 'react'
import { FaHtml5 } from "react-icons/fa6";
import { FaCss3 } from "react-icons/fa6";
import { BiLogoTypescript } from "react-icons/bi";
import { RiNextjsFill } from "react-icons/ri";
import { RiTailwindCssLine } from "react-icons/ri";

const Skill = () => {
  return (
    <div id='skill'>
      <section className="text-gray-400 bg-gray-900 body-font">
  <div className="container px-5 py-24 mx-auto flex flex-wrap">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="text-xl text-blue-900 tracking-widest font-medium title-font mb-1">
     SKILLS
      </h1>
      <h1 className="sm:text-3xl text-2xl font-medium title-font text-white">
        My Skills
      </h1>
    </div>
    <div className="flex justify-between w-full flex-wrap -m-2 -mt-[4rem]">
      <div className="p-4 w-[100%] md:w-1/3">
        <div className="flex rounded-lg h-full bg-gray-800 bg-opacity-60 p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full text-white flex-shrink-0">
            <FaHtml5 className='h-5 text-[#E34C26]'/>
            </div>
            <h2 className="text-white text-lg title-font font-medium">
              HTML
            </h2>
          </div>
          <div className="flex-grow">
            <div className='relative h-1 w-full bg-gray-500 rounded-xl'>
                <div className='absolute h-1 bg-blue-900 rounded-xl w-[100%]'></div>
                
            </div>
            <p className='text-blue-900 font-bold mt-3 text-2xl text-right'>100%</p>
            
          </div>
        </div>
      </div>
      <div className="p-4 w-[100%] md:w-1/3">
        <div className="flex rounded-lg h-full bg-gray-800 bg-opacity-60 p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full text-white flex-shrink-0">
            <FaCss3 className='h-5 text-[#ff8a27]'/>
            </div>
            <h2 className="text-white text-lg title-font font-medium">
              CSS
            </h2>
          </div>
          <div className="flex-grow">
          <div className='relative h-1 w-full bg-gray-500 rounded-xl'>
                <div className='absolute h-1 bg-blue-900 rounded-xl w-[70%]'></div>
                
            </div>
            <p className='text-blue-900 font-bold mt-3 text-2xl text-right'>70%</p>
           
          </div>
        </div>
      </div>
      <div className="p-4 w-[100%] md:w-1/3">
        <div className="flex rounded-lg h-full bg-gray-800 bg-opacity-60 p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full  text-white flex-shrink-0">
            <BiLogoTypescript className=' text-2xl text-[#007acc]'/>
            </div>
            <h2 className="text-white text-lg title-font font-medium">
             TypeScript/JavaScript
            </h2>
          </div>
          <div className="flex-grow">
              <div className='relative h-1 w-full bg-gray-500 rounded-xl'>
                <div className='absolute h-1 bg-blue-900 rounded-xl w-[80%]'></div>
                
            </div>
            <p className='text-blue-900 font-bold mt-3 text-2xl text-right'>80%</p>
           
          </div>
        </div>
      </div>
      <div className="p-4 w-[100%] md:w-1/3">
        <div className="flex rounded-lg h-full bg-gray-800 bg-opacity-60 p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full  text-white flex-shrink-0">
            <RiNextjsFill className='text-2xl '/>
            </div>
            <h2 className="text-white text-lg title-font font-medium">
             Next Js
            </h2>
          </div>
          <div className="flex-grow">
              <div className='relative h-1 w-full bg-gray-500 rounded-xl'>
                <div className='absolute h-1 bg-blue-900 rounded-xl w-[40%]'></div>
                
            </div>
            <p className='text-blue-900 font-bold mt-3 text-2xl text-right'>40%</p>
           
          </div>
        </div>
      </div>
      <div className="p-4 w-[100%] md:w-1/3">
        <div className="flex rounded-lg h-full bg-gray-800 bg-opacity-60 p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full  text-white flex-shrink-0">
            <RiTailwindCssLine className='text-2xl text-[#06b6d4]'/>
            </div>
            <h2 className="text-white text-lg title-font font-medium">
             Tailwind CSS
            </h2>
          </div>
          <div className="flex-grow">
              <div className='relative h-1 w-full bg-gray-500 rounded-xl'>
                <div className='absolute h-1 bg-blue-900 rounded-xl w-[65%]'></div>
                
            </div>
            <p className='text-blue-900 font-bold mt-3 text-2xl text-right'>65%</p>
           
          </div>
        </div>
      </div>
       <div className="p-4 w-[100%] md:w-1/3">
        <div className="flex rounded-lg h-full bg-gray-800 bg-opacity-60 p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full  text-white flex-shrink-0">
            <RiNextjsFill className='text-2xl '/>
            </div>
            <h2 className="text-white text-lg title-font font-medium">
             Python Programming
            </h2>
          </div>
          <div className="flex-grow">
              <div className='relative h-1 w-full bg-gray-500 rounded-xl'>
                <div className='absolute h-1 bg-blue-900 rounded-xl w-[70%]'></div>
                
            </div>
            <p className='text-blue-900 font-bold mt-3 text-2xl text-right'>70%</p>
           
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default Skill;
