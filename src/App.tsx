/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { FuturisticBackground } from './components/FuturisticBackground';
import { ReadingProgressBar } from './components/ReadingProgressBar';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Education } from './components/Education';
import { Skills } from './components/Skills';
import { Services } from './components/Services';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('home');

  useEffect(() => {
    const sections = ['home', 'about', 'education', 'skills', 'services', 'experience', 'contact'];
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-30% 0px -60% 0px',
        threshold: 0,
      }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[#080D1C] text-[#F8FAFC] selection:bg-blue-600 selection:text-white relative">
      {/* Interactive Futuristic Ambient Particle & Grid Canvas */}
      <FuturisticBackground />

      {/* Slim Animated Reading Progress Bar */}
      <ReadingProgressBar />

      {/* Main Content Layout */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar activeSection={activeSection} />

        <main className="flex-1">
          <Hero />
          <About />
          <Education />
          <Skills />
          <Services />
          <Experience />
          <Contact />
        </main>

        <Footer />
      </div>
    </div>
  );
}
