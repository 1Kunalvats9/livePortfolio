import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import profilephoto from "../../dist/assets/photo.png";
const Hero = () => {
  return (
      <section id="home" className="py-20 bg-transparent">
        <div className="max-w-4xl mx-auto text-center bg-transparent">
          <motion.img
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            src={profilephoto}
            alt="Kunal Vats"
            className="w-40 h-44 rounded-full mx-auto mb-8 shadow-lg items-center"
          />
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          >
            Hi, I'm Kunal Vats
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-xl text-gray-600 mb-8"
          >
            Full Stack Developer & Problem Solver
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex justify-center space-x-6"
          >
            <a href="https://github.com/1Kunalvats9" target='_blank' className="text-gray-600 hover:text-blue-600 transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="www.linkedin.com/in/kunal-vats-b67aa2309" target='_blank' className="text-gray-600 hover:text-blue-600 transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:1kvats9@gmail.com" target='_blank' className="text-gray-600 hover:text-blue-600 transition-colors">
              <Mail className="w-6 h-6" />
            </a>
          </motion.div>
        </div>
      </section>
  );
};

export default Hero;