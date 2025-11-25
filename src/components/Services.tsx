const Services = () => {
  const services = [
    { title: "Web Development", description: "Building responsive, user-friendly web applications using Next.js and React." },
    { title: "UI Engineering", description: "Crafting beautiful interfaces with Tailwind CSS and modern design principles." },
    { title: "AI Integration", description: "Exploring Agentic AI and building intelligent solutions using OpenAI Agents SDK." },
    { title: "Python Programming", description: "Developing robust backend logic and automation scripts with Python." },
  ];

  return (
    <section id="services" className="px-8 py-20 max-w-7xl mx-auto">
      <div className="text-center mb-12 space-y-4">
        <h2 className="text-4xl font-bold text-white">Services</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          I offer a range of services from building complex web applications to integrating cutting-edge AI solutions.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <div key={index} className="bg-[#2a2a2a] p-8 rounded-2xl space-y-4 hover:bg-primary transition-colors group cursor-pointer border border-white/5">
             <div className="w-14 h-14 bg-primary/20 rounded-lg mb-4 group-hover:bg-white/20 transition-colors flex items-center justify-center">
                {/* Icon placeholder */}
                <div className="w-6 h-6 bg-primary group-hover:bg-white rounded-sm"></div>
             </div>
             <h3 className="text-2xl font-bold text-white group-hover:text-white">{service.title}</h3>
             <p className="text-gray-400 group-hover:text-white/90 text-sm leading-relaxed">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
