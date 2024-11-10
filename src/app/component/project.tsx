'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Project = () => {
  return (
    <div id='project'>
      <section className="text-gray-400 bg-gray-900 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
       My Projects
      </h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
        Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
        gentrify, subway tile poke farm-to-table. Franzen you probably haven't
        heard of them man bun deep jianbing selfies heirloom.
      </p>
    </div>
    <div className="flex flex-wrap -m-4">
      <div className="lg:w-1/3 sm:w-1/2 p-4 hover:cursor-pointer">
        <div className="flex relative">
          <Image
          
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={require("../../../public/projects/Raja.png")}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-blue-900 mb-1">
              GOVERNOR'S WEBSITE
            </h2>
            <h1 className="title-font text-lg font-medium text-white mb-3">
              Governor's Website
            </h1>
            <p className="leading-relaxed">
              This is Governor's IT Initiative Website I Cloned.
            </p>
           
            <p className='text-blue-900 hover:underline font-medium mt-1'>It Isn't Deployed</p>
           
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4 hover:cursor-pointer">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={require("../../../public/projects/resumeProject.png")}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-blue-900 mb-1">
              DYNAMIC RESUME BUILDER
            </h2>
            <h1 className="title-font text-lg font-medium text-white mb-3">
             Dynamic Resume Builder
            </h1>
            <p className="leading-relaxed">
            It is an Dynamic Resume Builder where you can easily create your Resume.</p>
            <Link href={"https://dynamic-resume-builder-x299.vercel.app/"} target="_blank">
            <p className='text-blue-900 hover:underline font-extrabold mt-1'>Click To View</p>
            </Link>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4 hover:cursor-pointer">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={require("../../../public/projects/static Resume.png")}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-blue-900 mb-1">
             STATIC RESUME
            </h2>
            <h1 className="title-font text-lg font-medium text-white mb-3">
              Static Resume
            </h1>
            <p className="leading-relaxed">
             It is an Simple Static Resume. I created To achieve the Milestone.
            </p>
            <Link href={"https://static-interactive-resume-vert.vercel.app/"} target="_blank">
            <p className='text-blue-900 hover:underline font-medium mt-1'>Click To View</p>
            </Link>
          </div>
        </div>
      </div>
    
    </div>
  </div>
</section>

    </div>
  )
}

export default Project;