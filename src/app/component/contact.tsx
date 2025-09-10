'use client'

import React from 'react'
import { motion } from 'framer-motion'

const Contact = () => {
  return (
    <div id="contact">
      <section className="text-gray-400 bg-gray-950 body-font relative">
        <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
          
          {/* Left side: Map + Address */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-2xl overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative shadow-lg"
          >
            <iframe
              width="100%"
              height="100%"
              title="map"
              className="absolute inset-0 rounded-2xl"
              frameBorder={0}
              marginHeight={0}
              marginWidth={0}
              scrolling="no"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.701488522803!2d67.00955987410403!3d24.83988014608315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33de4bff0d5d3%3A0xc173f5e238538806!2sNew%20Haji%20Camp%2C%20Road%2C%20Sultanabad%2C%20Karachi%2C%20Karachi%20City%2C%20Sindh%2074200%2C%20Pakistan!5e0!3m2!1sen!2s!4v1731095077747!5m2!1sen!2s"
              style={{ filter: "contrast(1.1) opacity(0.6)" }}
            />
            <div className="bg-gray-900 relative flex flex-wrap py-6 rounded-2xl shadow-md z-10">
              <div className="lg:w-1/2 px-6">
                <h2 className="font-semibold text-white tracking-widest text-xs">ADDRESS</h2>
                <p className="mt-1">New Haji Camp Road, Sultanabad, Karachi.</p>
              </div>
              <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                <h2 className="font-semibold text-white tracking-widest text-xs">EMAIL</h2>
                <a href="mailto:rajahr0323@gmail.com" className="text-blue-400 leading-relaxed hover:underline">rajahr0323@gmail.com</a>
                <h2 className="font-semibold text-white tracking-widest text-xs mt-4">PHONE</h2>
                <a href="tel:+923323560265" className="leading-relaxed text-blue-400 hover:underline">0332-3560265</a>
              </div>
            </div>
          </motion.div>

          {/* Right side: Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0"
          >
            <h2 className="text-3xl sm:text-4xl mb-4 font-bold text-white tracking-wide">Contact Me</h2>
            <p className="leading-relaxed mb-6 text-gray-300">Feel free to reach out for collaborations or just a friendly hello 👋</p>

            <div className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full bg-gray-800 rounded-lg border border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-900 text-base outline-none text-gray-100 py-3 px-4 transition"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full bg-gray-800 rounded-lg border border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-900 text-base outline-none text-gray-100 py-3 px-4 transition"
              />
              <textarea
                placeholder="Your Message"
                className="w-full bg-gray-800 rounded-lg border border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-900 h-32 text-base outline-none text-gray-100 py-3 px-4 resize-none transition"
              />
            </div>

            <button className="mt-6 w-full text-white bg-blue-900 hover:bg-blue-600 font-semibold py-3 px-6 rounded-lg shadow-md transition-all duration-300">
              Send Message
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Contact
