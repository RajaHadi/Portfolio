'use client'
import Link from 'next/link';
import React from 'react'
import Image from 'next/image';
import SecondaryLogo from '../../../public/Secondary Logo.png';

import { FaCloudDownloadAlt } from "react-icons/fa";


const Navbar = () => {
  return (
    <div className='bg-blue-900 z-50 sticky top-0'>
      <header className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
    <Image 
  src={SecondaryLogo} 
  width={100} 
  height={100} 
  alt="sorry" 
  className="w-[54px] bg-blue-900" 
/>

      <span className="ml-3 text-xl text-white">Raja Mannan Khan</span>
    </a>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center font-semibold">
      <Link href={"/"} className="mr-5 hover:text-blue-600 text-white">Home</Link>
      <Link href={"#about"} className="mr-5 hover:text-blue-600 text-white">About</Link>
      <Link href={"#skill"} className="mr-5 hover:text-blue-600 text-white">Skills</Link>
      <Link href={"#project"} className="mr-5 hover:text-blue-600 text-white">Projects</Link>
      <Link href={"#contact"} className="mr-5 hover:text-blue-600 text-white">Contacts</Link>
    </nav>
    <a href="/cv/HadiResume.pdf">
    <button className="hover:font-bold inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none  rounded text-base mt-4 md:mt-0 font-medium"> 
     Download CV
      
    <FaCloudDownloadAlt className='text-xl ml-1' />
    </button>
    </a>
  </div>
</header>
    </div>
  )
}

export default Navbar;
