import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Brain, Video, Monitor } from 'lucide-react';

const Skills = () => {
  const skills = [
    { name: 'HTML/CSS', icon: <Code2 className="w-6 h-6" />, category: 'Frontend' },
    { name: 'JavaScript', icon: <Code2 className="w-6 h-6" />, category: 'Frontend' },
    { name: 'React.js', icon: <Monitor className="w-6 h-6" />, category: 'Frontend' },
    { name: 'Node.js', icon: <Database className="w-6 h-6" />, category: 'Backend' },
    { name: 'Locomotive JS', icon: <Code2 className="w-6 h-6" />, category: 'Frontend' },
    { name: 'C++', icon: <Code2 className="w-6 h-6" />, category: 'Programming' },
    { name: 'Python', icon: <Code2 className="w-6 h-6" />, category: 'Programming' },
    { name: 'C', icon: <Code2 className="w-6 h-6" />, category: 'Programming' },
    { name: 'Problem Solving', icon: <Brain className="w-6 h-6" />, category: 'Soft Skills' },
    { name: 'Video Editing', icon: <Video className="w-6 h-6" />, category: 'Media' },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="skills" className="py-20">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl font-bold text-center mb-12"
      >
        Skills & Expertise
      </motion.h2>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto px-4"
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            variants={item}
            whileHover={{ scale: 1.07 }}
            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="flex flex-col items-center text-center space-y-4 cursor-pointer">
              <div className="p-3 bg-blue-50 rounded-full text-blue-600">
                {skill.icon}
              </div>
              <h3 className="font-semibold">{skill.name}</h3>
              <p className="text-sm text-gray-500">{skill.category}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;