import Image from "next/image"

// Sample project data - replace with your own projects
const projects = [
  {
    id: 1,
    title: "General Store",
    description: "An e-commerce solution with payment integration and user authentication.",
    image: "",
    technologies: ["React", "Firebase"],
    demoLink: "https://tinyurl.com/45zb9n9p",
    codeLink: "https://github.com/wintvue/React-Commerce"
  },
  {
    id: 2,
    title: "Pong",
    description: "Multiplayer games similar to ping pong played by 2 players.",
    image: "",
    technologies: ["Node.js", "Firebase", "Tailwind CSS"],
    demoLink: "https://client-hazel-one.vercel.app",
    codeLink: "https://github.com/wintvue/Socket_Pong"
  },
  {
    id: 3,
    title: "Portfolio Website",
    description: "A modern, responsive portfolio website built with Next.js and Tailwind CSS.",
    image: "",
    technologies: ["Next.js", "Tailwind CSS"],
    demoLink: "",
    codeLink: ""
  }
]

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="animate-fade-in">
        <h2 className="text-3xl font-bold mb-12 text-center">
          My <span className="text-dark-accent">Projects</span>
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-dark-secondary rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative h-48">
                {/* <Image 
                  src={project.image} 
                  alt={project.title}
                  fill
                  className="object-cover"
                /> */}
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-dark-accent">{project.title}</h3>
                <p className="text-dark-text/80 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="bg-dark-primary px-3 py-1 rounded-full text-xs font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <a 
                    href={project.demoLink} 
                    className="bg-dark-accent text-dark-primary px-4 py-2 rounded font-medium text-sm hover:bg-dark-accent/90 transition-colors"
                  >
                    Live Demo
                  </a>
                  <a 
                    href={project.codeLink} 
                    className="border border-dark-accent text-dark-accent px-4 py-2 rounded font-medium text-sm hover:bg-dark-accent/10 transition-colors"
                  >
                    View Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 