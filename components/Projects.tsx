import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Tag } from 'lucide-react';
import { Translation, Project } from '../types';

interface ProjectsProps {
  t: Translation['projects'];
  projects: Project[];
}

const Projects: React.FC<ProjectsProps> = ({ t, projects }) => {
  return (
    <section id="solutions" className="py-24 bg-gray-50 relative overflow-hidden">
        {/* Background Grid Pattern */}
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#00A651" strokeWidth="1" opacity="0.1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            {t.title}
          </h2>
          <div className="w-24 h-1 bg-brand-green mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-brand-green/30 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-64 md:h-72 overflow-hidden">
                <div className="absolute inset-0 bg-gray-900/10 group-hover:bg-transparent transition-all z-10" />
                <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" 
                />
                <div className="absolute bottom-4 left-4 z-20 flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                        <span key={tag} className="px-3 py-1 bg-white/90 backdrop-blur-sm text-brand-green text-xs font-mono rounded-full border border-brand-green/30 flex items-center gap-1 shadow-sm">
                            <Tag size={10} /> {tag}
                        </span>
                    ))}
                </div>
              </div>

              <div className="p-6">
                <div className="mb-4">
                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-brand-green transition-colors">
                    {project.title}
                    </h3>
                </div>
                
                <p className="text-gray-600 mb-6 line-clamp-3">
                  {project.description}
                </p>

                {project.url ? (
                  <a 
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-700 font-medium hover:text-brand-green transition-colors group/btn"
                  >
                    {t.viewDetails}
                    <ExternalLink size={16} className="transform group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                ) : (
                  <button className="flex items-center gap-2 text-gray-700 font-medium hover:text-brand-green transition-colors group/btn">
                    {t.viewDetails}
                    <ExternalLink size={16} className="transform group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
