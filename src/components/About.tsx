import Image from 'next/image';

const About = () => {
  return (
    <section id="about" className="px-8 py-20 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row items-center gap-16">
        <div className="flex-1 relative w-full">
           <div className="w-full max-w-[500px] mx-auto aspect-square bg-neutral-800 rounded-2xl relative overflow-hidden border border-white/10 flex items-center justify-center">
             <Image 
               src="/Raja_new.jpeg" 
               alt="About Raja Mannan" 
               fill 
               className="object-cover" 
             />
           </div>
        </div>
        <div className="flex-1 space-y-8 w-full">
          <h2 className="text-4xl font-bold text-white">About Me</h2>
          <p className="text-gray-400 leading-relaxed">
            Passionate web developer skilled in TypeScript, Next.js, and Python, with hands-on experience in building dynamic and user-focused projects. I have a strong foundation in HTML, CSS, and Tailwind CSS, and I’m currently exploring Agentic AI, aiming to create innovative solutions that benefit people and society.
          </p>
          
          <div className="space-y-6">
            <SkillBar name="HTML" percentage={100} />
            <SkillBar name="TypeScript / JavaScript" percentage={80} />
            <SkillBar name="Next.js" percentage={70} />
            <SkillBar name="Python" percentage={70} />
          </div>
        </div>
      </div>
    </section>
  );
};

const SkillBar = ({ name, percentage }: { name: string; percentage: number }) => {
  return (
    <div className="space-y-2">
      <div className="font-semibold text-white">{name}</div>
      <div className="h-3 w-full bg-neutral-700 rounded-full overflow-hidden">
        <div 
          className="h-full bg-primary rounded-full relative" 
          style={{ width: `${percentage}%` }}
        >
            <div className="absolute right-1 top-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full opacity-50"></div>
        </div>
      </div>
    </div>
  );
};

export default About;
