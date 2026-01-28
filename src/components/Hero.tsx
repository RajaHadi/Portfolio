import Image from 'next/image';
import Link from 'next/link';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between px-8 py-12 md:py-24 max-w-7xl mx-auto gap-12">
      <div className="flex-1 space-y-6 text-center md:text-left">
        <h2 className="text-xl font-semibold text-white">Hi I am</h2>
        <h1 className="text-4xl md:text-5xl font-bold text-primary">Raja Mannan Khan</h1>
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          <TypeAnimation
            sequence={[
              'Full Stack Developer',
              2000,
              'AI Agents Developer',
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </h2>
        <p className="text-gray-400 max-w-lg mx-auto md:mx-0 leading-relaxed">
          👋 Hello! I’m a passionate developer with expertise in Next.js and Tailwind CSS, now diving into the world of Agentic AI using the OpenAI Agents SDK. I love building responsive, user-friendly web applications and expanding into AI-powered solutions 🚀.
        </p>
        <Link href="#contact">
          <button className="bg-primary text-white px-8 py-3 rounded-md font-medium hover:opacity-90 transition-opacity inline-block cursor-pointer">
            Hire Me
          </button>
        </Link>
      </div>
      <div className="flex-1 flex justify-center relative">
        <div className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px] bg-neutral-800 rounded-full overflow-hidden border-4 border-primary/30 flex items-center justify-center">
             <Image 
               src="/og.png" 
               alt="Raja Mannan Khan" 
               fill 
               className="object-cover" 
             />
        </div>
      </div>
    </section>
  );
};

export default Hero;
