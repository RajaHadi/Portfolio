'use client'
/* eslint-disable react/no-unescaped-entities */

import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import ProfileImage from '../../../public/profile.jpeg';
import Typewriter from 'typewriter-effect';

const Hero = () => {
  return (
    
      <section className="text-gray-400 bg-gray-900 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
        I am
        <br className="hidden lg:inline-block" />
        <Typewriter
  options={{
    strings: ['Raja Mannan','Web Developer','Programmer'],
    autoStart: true,
    loop: true,
  }}
/>
          </h1>
        <div className='w-[100px] h-[2px] bg-blue-900'></div>
      <p className="mb-8 leading-relaxed">
      Hello! Im a passionate student at GIAIC, currently diving into the world of web development. I've recently completed learning TypeScript and am actively building my skills with Next.js and Tailwind CSS. With a solid foundation in HTML and CSS, I enjoy crafting responsive, user-friendly websites that look great and perform smoothly. I'm always eager to learn new technologies and improve my skills, and I'm excited to bring creative ideas to life through code!
      </p>
      <div className="flex justify-center">
        <Link href={"#contact"}>
        <button className="inline-flex text-white bg-blue-900 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
          Contact
        </button>
        </Link>
        
        
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 ">
    <Image
        className="object-cover object-center rounded w-[22rem] h-[25rem]"
        alt="hero"
        width={500}
        height={500}
        src={ProfileImage}
      />
    </div>
  </div>
</section>

    
  )
}

export default Hero;
