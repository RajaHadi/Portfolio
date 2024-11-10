'use client'
import Link from 'next/link';
import React from 'react'
import Image from 'next/image';
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa"
import { FaGithub } from "react-icons/fa";


const Footer = () => {
  return (
    <div className='bg-blue-900'>
      <footer className="text-gray-600 body-font">
  <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
    <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
    <Image src={require("../../../public/rhlogo.png")} width={100} height={100} alt='sorry' className='w-[54px]'/>
      <span className="ml-3 text-xl">Raja Mannan Khan</span>
    </a>
    <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
      © 2024 Raja Mannan Khan 
      
    </p>
    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
      <Link href={"https://www.facebook.com/shabana.jawed.7528"} target="_blank" className="text-gray-500 ">
      <FaFacebook className='text-2xl hover:text-[#4267B2]'/>
      </Link >
      
      <Link href={"https://www.instagram.com/hadi__rajpoot_360?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="} className="ml-3  text-gray-500" target="_blank">
      <FaInstagram className='text-2xl hover:text-[#c13584]' />
      </Link >
      <Link href={"https://github.com/RajaHadi"} target="_blank" className="ml-3  text-gray-500">
      <FaGithub className='text-2xl hover:text-[#171515]' />
      </Link >
    </span>
  </div>
</footer>

    </div>
  )
}

export default Footer;
