"use client";
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [state, handleSubmit] = useForm("mgvdaara");

  if (state.succeeded) {
    return (
      <section id="contact" className="px-8 py-20 max-w-7xl mx-auto">
        <div className="text-center bg-[#2a2a2a] rounded-2xl p-12 border border-white/5">
          <h2 className="text-3xl font-bold text-white mb-4">Thanks for your message! 🎉</h2>
          <p className="text-gray-400 text-lg">I'll get back to you as soon as possible.</p>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="px-8 py-20 max-w-7xl mx-auto">
      <div className="text-center mb-12 space-y-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-white"
        >
          Let's Work Together
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-gray-400 max-w-2xl mx-auto"
        >
          Feel free to reach out for collaborations or just a friendly hello 👋
          <br />
          Email: <a href="mailto:rajahr0323@gmail.com" className="text-primary hover:underline">rajahr0323@gmail.com</a>
        </motion.p>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto bg-[#2a2a2a] p-8 md:p-10 rounded-2xl border border-white/5 shadow-xl"
      >
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium text-gray-300">Name</label>
              <input
                id="name"
                type="text" 
                name="name"
                placeholder="Your Name"
                required
                className="w-full bg-neutral-800 border border-white/10 rounded-xl px-6 py-4 text-white outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" 
              />
              <ValidationError prefix="Name" field="name" errors={state.errors} className="text-red-400 text-sm" />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-gray-300">Email</label>
              <input
                id="email"
                type="email" 
                name="email"
                placeholder="Your Email"
                required
                className="w-full bg-neutral-800 border border-white/10 rounded-xl px-6 py-4 text-white outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" 
              />
              <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-400 text-sm" />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium text-gray-300">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Your Message"
              rows={6}
              required
              className="w-full bg-neutral-800 border border-white/10 rounded-xl px-6 py-4 text-white outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none" 
            />
            <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-400 text-sm" />
          </div>

          <button 
            type="submit" 
            disabled={state.submitting}
            className="w-full bg-primary text-white px-10 py-4 rounded-xl font-bold hover:opacity-90 transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-primary/20"
          >
             {state.submitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;