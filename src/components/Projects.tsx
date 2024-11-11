import React from 'react';
import { motion } from 'framer-motion';
import { Target, Building2, GraduationCap, Bot, Scan } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Gunshot Fire Direction Detection',
      description: 'System that accurately determines the direction of gunfire using advanced audio processing.',
      icon: <Target className="w-6 h-6" />,
      tags: ['Python', 'Signal Processing', 'Hardware']
    },
    {
      title: 'Simulators',
      description: 'Interactive website showcasing 3D models of cities with immersive visualization.',
      icon: <Building2 className="w-6 h-6" />,
      tags: ['Web Dev', 'React', 'WebGL']
    },
    {
      title: 'Newtonix',
      description: 'Full-stack educational platform with authentication, course management, and lecture delivery.',
      icon: <GraduationCap className="w-6 h-6" />,
      tags: ['Node.js', 'React', 'MongoDB']
    },
    {
      title: 'Jarvis',
      description: 'Python-based virtual assistant capable of performing various tasks and API integrations.',
      icon: <Bot className="w-6 h-6" />,
      tags: ['Python', 'APIs', 'Automation']
    },
    {
      title: 'Facial Recognition App',
      description: 'Application that detects and recognizes faces using computer vision technology.',
      icon: <Scan className="w-6 h-6" />,
      tags: ['Python', 'OpenCV', 'Machine Learning']
    }
  ];

  return (
    <section id="projects" className="py-20">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl font-bold text-center mb-12"
      >
        Featured Projects
      </motion.h2>

      <div className="max-w-6xl mx-auto px-4 grid gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.07 }}
            className="bg-white rounded-xl shadow-lg overflow-hidden"
          >
            <div className="p-6 md:p-8">
              <div className="flex items-center space-x-4 mb-4">
                <div className="p-3 bg-blue-50 rounded-full text-blue-600">
                  {project.icon}
                </div>
                <h3 className="text-xl font-semibold">{project.title}</h3>
              </div>
              
              <p className="text-gray-600 mb-4">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;