import About from "./component/about";
import Contact from "./component/contact";
import Hero from "./component/hero";
import Project from "./component/project";
import Skill from "./component/skill";


export default function Home() {
  return (
   <>
   <Hero/>
   <About/>
   <Skill/>
   <Project/>
   <Contact/>
   </>
  );
}
