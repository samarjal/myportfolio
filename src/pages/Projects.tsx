import { Github, ExternalLink } from 'lucide-react';
import './Home.css';
const projects = [
  {
    title: 'Project One',
    description: 'A modern web application built with React and TypeScript',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97',
    github: '#',
    live: '#',
    tags: ['React', 'TypeScript', 'Tailwind'],
  },
  {
    title: 'Project Two',
    description: 'Full-stack e-commerce platform with real-time features',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f',
    github: '#',
    live: '#',
    tags: ['Node.js', 'MongoDB', 'WebSocket'],
  },
];

export default function Projects() {
  return (
    <div className="min-h-screen custom-bg py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-12 text-center">my projects</h1>
        {
        <p className="text-gray-100 mb-6 text-center text-6xl px-12 py-32"> 
          [work in progress...] 
        </p>
        
        /* <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-800/50 overflow-hidden backdrop-blur-sm">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-sm bg-purple-600/20 text-purple-400 "
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    className="flex items-center gap-2 text-gray-300 hover:text-purple-400 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                  <a
                    href={project.live}
                    className="flex items-center gap-2 text-gray-300 hover:text-purple-400 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div> */}
      </div>
    </div>
  );
}