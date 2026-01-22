import { FaReact, FaPython } from 'react-icons/fa';
import { FaRobot } from 'react-icons/fa6';
import { SiTypescript, SiJavascript, SiNextdotjs, SiSanity } from 'react-icons/si';

const About = () => {
  return (
    <section id="about" className="px-8 py-20 max-w-7xl mx-auto">
      <div className="max-w-3xl mx-auto text-center">
        <div className="space-y-8 w-full">
          <h2 className="text-4xl font-bold text-white">About Me</h2>
          <p className="text-gray-400 leading-relaxed">
            Passionate web developer skilled in TypeScript, Next.js, and Python, with hands-on experience in building dynamic and user-focused projects. I have a strong foundation in HTML, CSS, and Tailwind CSS, and I’m currently exploring Agentic AI, aiming to create innovative solutions that benefit people and society.
          </p>
          
          <div className="space-y-6 text-left">
            <SkillBar 
              name="React" 
              percentage={90} 
              icon={<FaReact className="text-[#61DAFB] text-2xl" />} 
            />
            <SkillBar 
              name="TypeScript / JavaScript" 
              percentage={90} 
              icon={
                <div className="flex gap-2">
                  <SiTypescript className="text-[#3178C6] text-2xl" />
                  <SiJavascript className="text-[#F7DF1E] text-2xl" />
                </div>
              }
            />
            <SkillBar 
              name="Next.js" 
              percentage={90} 
              icon={<SiNextdotjs className="text-white text-2xl" />}
            />
            <SkillBar 
              name="Python" 
              percentage={90} 
              icon={<FaPython className="text-[#3776AB] text-2xl" />}
            />
            <SkillBar 
              name="Sanity-CMS" 
              percentage={90} 
              icon={<SiSanity className="text-[#F03E2F] text-2xl" />}
            />
            <SkillBar 
              name="Agentic AI" 
              percentage={90

                
              } 
              icon={<FaRobot className="text-primary text-2xl" />}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const SkillBar = ({ name, percentage, icon }: { name: string; percentage: number; icon: React.ReactNode }) => {
  return (
    <div className="space-y-2">
      <div className="flex items-center gap-3 font-semibold text-white">
        {icon}
        <span>{name}</span>
      </div>
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
