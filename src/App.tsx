import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';
import ParticleBackground from './components/ParticleBackground';
import { motion, AnimatePresence } from 'framer-motion';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
      <ParticleBackground />
      <Navbar />
      <main className="container mx-auto px-4 py-8 relative">
        <AnimatePresence>
          <Hero />
          <Skills />
          <Projects />
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}

export default App;