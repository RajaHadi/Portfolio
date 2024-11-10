'use client'
import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import ProfileImage from '../../../public/profile.jpeg';


const About = () => {
  return (
    <div id="about">
      <section className="text-gray-600 body-font ">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
    <Image
  width={300}
  height={300}
  className="object-cover object-center rounded mx-auto"
  alt="hero"
  src={ProfileImage}
/>

    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
        About Me
      </h1>
      <p className="mb-5 leading-relaxed text-black">
      I Completed My Matriculation From Citizen Public Secondary School. Currently I am doing Intermediate From S.M Govt Science College.
      </p>
      <p className=' text-black mb-5 leading-relaxed'>I am also enrolled In Governor Initiative Of Arificial Intelligence and Cloud Computing. Currently Learning Web Development and Soon We Will Learn Agentic AI Development.</p>
      <div className="flex justify-center">
        <Link href={"/cv/HadiResume.pdf"}>
        <button className="inline-flex text-white bg-blue-900 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
         View Resume
        </button>
        </Link>
       
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default About;
