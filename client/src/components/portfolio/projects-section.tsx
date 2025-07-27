import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Globe, Smartphone, Database } from "lucide-react";
import { Button } from "@/components/ui/button";
import { projects, Project } from "@/lib/portfolio-data";

interface ProjectsSectionProps {
  onProjectClick: (project: Project) => void;
}

const projectIcons = {
  1: Globe,
  2: Smartphone,
  3: Database,
};

export default function ProjectsSection({ onProjectClick }: ProjectsSectionProps) {
  const [showAllProjects, setShowAllProjects] = useState(false);

  const displayedProjects = showAllProjects ? projects : projects.slice(0, 3);

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A showcase of my best work and innovative solutions
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {displayedProjects.map((project, index) => {
            const IconComponent = projectIcons[project.id as keyof typeof projectIcons];
            
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -10 }}
                onClick={() => onProjectClick(project)}
                className="group bg-slate-800/50 rounded-2xl overflow-hidden border border-slate-700/50 backdrop-blur-sm hover:border-blue-500/50 transition-all duration-300 cursor-pointer hover:shadow-2xl hover:shadow-blue-500/20"
              >
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={project.images[0]} 
                    alt={`${project.title} interface`} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
                  
                  {/* Project Icon */}
                  <div className="absolute top-4 right-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${project.color} rounded-xl flex items-center justify-center shadow-lg`}>
                      {IconComponent && <IconComponent className="w-6 h-6 text-white" />}
                    </div>
                  </div>

                  {/* Image Count Indicator */}
                  <div className="absolute bottom-4 left-4">
                    <div className="flex items-center gap-2 px-3 py-1 bg-black/60 backdrop-blur-sm rounded-full">
                      <div className="w-2 h-2 bg-white/80 rounded-full" />
                      <span className="text-white/80 text-xs font-medium">{project.images.length} images</span>
                    </div>
                  </div>

                  {/* Click to view indicator */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20">
                    <div className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-lg text-white text-sm font-medium">
                      Click to view details
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors duration-200">
                      {project.title}
                    </h3>
                    <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-400 group-hover:translate-x-1 transition-all duration-200" />
                  </div>
                  
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">{project.tagline}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {[...project.techStack.frontend.slice(0, 2), ...project.techStack.backend.slice(0, 1), ...project.techStack.database.slice(0, 1)].map((tech, techIndex) => (
                      <span 
                        key={techIndex} 
                        className="px-3 py-1 text-xs bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 rounded-full border border-blue-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="text-xs text-gray-500">
                    Click to explore features & implementation
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* View All Projects Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button
            onClick={() => setShowAllProjects(!showAllProjects)}
            variant="gradient"
            size="lg"
            className="px-8 py-3"
          >
            <span>{showAllProjects ? "View Less Projects" : "View All Projects"}</span>
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
