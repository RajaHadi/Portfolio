import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-8 py-6 max-w-7xl mx-auto w-full">
      <div className="text-2xl font-bold">
        <span className="text-foreground">P</span>
        <span className="text-primary">ortfolio</span>
      </div>
      <div className="hidden md:flex items-center gap-8 text-sm font-medium">
        <Link href="/" className="hover:text-primary transition-colors">Home</Link>
        <Link href="#about" className="hover:text-primary transition-colors">About Me</Link>
        <Link href="#services" className="hover:text-primary transition-colors">Services</Link>
        <Link href="#projects" className="hover:text-primary transition-colors">Projects</Link>
        <Link href="#testimonials" className="hover:text-primary transition-colors">Testimonials</Link>
        <Link href="#contact" className="hover:text-primary transition-colors">Contact</Link>
      </div>
      <a href="/cv/HadiResume.pdf" download>
        <button className="bg-primary text-white px-6 py-2 rounded-md font-medium hover:opacity-90 transition-opacity cursor-pointer">
          Download CV
        </button>
      </a>
    </nav>
  );
};

export default Navbar;
