"use client";

import TiltCard from "@/components/ui/TiltCard";

export default function ProjectsSection() {
  const projects = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800",
      title: "E-Commerce Platform",
      description: "Full-stack online shopping experience with real-time inventory",
      link: "#"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1555421689-d68471e189f2?w=800",
      title: "AI Chatbot System",
      description: "Intelligent customer support with natural language processing",
      link: "#"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800",
      title: "Portfolio Website",
      description: "3D animated portfolio with multimedia integration",
      link: "#"
    }
  ];

  return (
    <section className="min-h-screen bg-black py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Projects</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Explore my latest work showcasing cutting-edge web technologies
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <TiltCard
              key={project.id}
              image={project.image}
              title={project.title}
              description={project.description}
              link={project.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
