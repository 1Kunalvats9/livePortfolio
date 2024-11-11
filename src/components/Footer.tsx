import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t">
      <div className="container mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p className="text-gray-600 mb-2">Get in touch</p>
            <a href="mailto:contact@kunalvats.com" className="text-blue-600 hover:text-blue-700 transition-colors">
              1kvats9@gmail.com
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-center"
          >
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <div className="flex justify-center space-x-6">
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-center md:text-right"
          >
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-600 hover:text-blue-600 transition-colors">Home</a>
              </li>
              <li>
                <a href="#skills" className="text-gray-600 hover:text-blue-600 transition-colors">Skills</a>
              </li>
              <li>
                <a href="#projects" className="text-gray-600 hover:text-blue-600 transition-colors">Projects</a>
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-12 pt-8 border-t"
        >
          <p className="text-gray-600 flex items-center justify-center">
            Made with <Heart className="w-4 h-4 mx-2 text-red-500" /> by Kunal Vats
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;