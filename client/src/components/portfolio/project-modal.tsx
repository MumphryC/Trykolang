import { useState } from "react";
import { motion } from "framer-motion";
import { X, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Project } from "@/lib/portfolio-data";

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={handleBackdropClick}
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        className="bg-slate-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-slate-700"
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-700">
          <h3 className="text-2xl font-bold text-white">{project.title}</h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors duration-200"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 space-y-8">
          {/* Project Images Carousel */}
          <div className="relative">
            <div className="aspect-video rounded-xl overflow-hidden bg-slate-700 relative group">
              <img 
                src={project.images[currentImageIndex]} 
                alt={`${project.title} screenshot ${currentImageIndex + 1}`} 
                className="w-full h-full object-cover transition-transform duration-300"
              />
              
              {/* Navigation arrows for multiple images */}
              {project.images.length > 1 && (
                <>
                  <button
                    onClick={() => setCurrentImageIndex(currentImageIndex > 0 ? currentImageIndex - 1 : project.images.length - 1)}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/60 hover:bg-black/80 backdrop-blur-sm rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                  >
                    ←
                  </button>
                  <button
                    onClick={() => setCurrentImageIndex(currentImageIndex < project.images.length - 1 ? currentImageIndex + 1 : 0)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/60 hover:bg-black/80 backdrop-blur-sm rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                  >
                    →
                  </button>
                </>
              )}

              {/* Image counter */}
              <div className="absolute top-4 right-4 px-3 py-1 bg-black/60 backdrop-blur-sm rounded-full text-white text-sm">
                {currentImageIndex + 1} / {project.images.length}
              </div>
            </div>

            {/* Thumbnail navigation */}
            {project.images.length > 1 && (
              <div className="flex justify-center gap-2 mt-4 overflow-x-auto pb-2">
                {project.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`flex-shrink-0 w-16 h-10 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                      index === currentImageIndex 
                        ? 'border-blue-500 scale-110' 
                        : 'border-transparent hover:border-gray-400'
                    }`}
                  >
                    <img 
                      src={image} 
                      alt={`${project.title} thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Project Info */}
          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-semibold text-white mb-2">{project.tagline}</h4>
              <p className="text-gray-300 leading-relaxed">{project.summary}</p>
            </div>

            {/* Features */}
            <div>
              <h5 className="text-white font-semibold mb-3">Key Features</h5>
              <div className="grid md:grid-cols-2 gap-2">
                {project.features.map((feature, index) => (
                  <div key={index} className="text-gray-300 text-sm">{feature}</div>
                ))}
              </div>
            </div>

            {/* Tech Stack */}
            <div>
              <h5 className="text-white font-semibold mb-3">Technology Stack</h5>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="text-blue-400 text-sm font-medium mb-2">Frontend</p>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.frontend.map((tech, index) => (
                      <span 
                        key={index} 
                        className="px-2 py-1 text-xs bg-blue-500/20 text-blue-400 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-green-400 text-sm font-medium mb-2">Backend</p>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.backend.map((tech, index) => (
                      <span 
                        key={index} 
                        className="px-2 py-1 text-xs bg-green-500/20 text-green-400 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-purple-400 text-sm font-medium mb-2">Database</p>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.database.map((tech, index) => (
                      <span 
                        key={index} 
                        className="px-2 py-1 text-xs bg-purple-500/20 text-purple-400 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-yellow-400 text-sm font-medium mb-2">Tools</p>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.tools.map((tech, index) => (
                      <span 
                        key={index} 
                        className="px-2 py-1 text-xs bg-yellow-500/20 text-yellow-400 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Learning */}
            <div>
              <h5 className="text-white font-semibold mb-3">What I Learned</h5>
              <p className="text-gray-300 leading-relaxed">{project.learned}</p>
            </div>

            {/* Actions */}
            <div className="flex gap-4 justify-center">
              <Button
                variant="gradient"
                className="px-8 py-3"
                onClick={() => window.open(project.githubUrl, '_blank')}
              >
                <Github className="w-5 h-5 mr-2" />
                View Source Code
              </Button>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
