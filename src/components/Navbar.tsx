import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const sections = ['Home', 'Skills', 'Projects'];

  return (
    <nav className="sticky top-0 bg-gray-400 backdrop-blur-lg shadow-sm z-50 w-[85%] mx-auto mt-4 rounded-3xl bg-opacity-30  ">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          >
            Kunal Vats
          </motion.h1>

          <div className="hidden md:flex space-x-8">
            {sections.map((section) => (
              <motion.a
                key={section}
                href={`#${section.toLowerCase()}`}
                className="text-gray-700 hover:text-blue-600 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {section}
              </motion.a>
            ))}
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden pb-4"
          >
            {sections.map((section) => (
              <a
                key={section}
                href={`#${section.toLowerCase()}`}
                className="block py-2 text-gray-700 hover:text-blue-600 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {section}
              </a>
            ))}
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;