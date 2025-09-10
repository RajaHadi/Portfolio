'use client'
import Link from 'next/link';
import React from 'react'
import Image from 'next/image';
import RhLogo from '../../../public/new web logo.png';
import { FaFacebook, FaInstagram, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-gray-300 body-font">
      <div className="container px-5 py-6 mx-auto flex flex-col sm:flex-row items-center justify-between">
        
        {/* Logo & Name */}
        <div className="flex items-center justify-center sm:justify-start mb-4 sm:mb-0">
          <Image
            src={RhLogo}
            width={50}
            height={50}
            alt="logo"
            className="w-[50px] h-auto"
          />
          <span className="ml-3 text-lg font-semibold text-white">
            Raja Mannan Khan
          </span>
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-200 text-center sm:text-left">
          © {new Date().getFullYear()} Raja Mannan Khan — All Rights Reserved
        </p>

        {/* Social Icons */}
        <div className="flex justify-center sm:justify-end mt-4 sm:mt-0 space-x-4">
          <Link href="https://www.facebook.com/shabana.jawed.7528" target="_blank">
            <FaFacebook className="text-2xl hover:text-[#4267B2] transition-colors duration-200" />
          </Link>
          <Link href="https://www.instagram.com/hadi__rajpoot_360?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank">
            <FaInstagram className="text-2xl hover:text-[#c13584] transition-colors duration-200" />
          </Link>
          <Link href="https://github.com/RajaHadi" target="_blank">
            <FaGithub className="text-2xl hover:text-gray-900 transition-colors duration-200" />
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
