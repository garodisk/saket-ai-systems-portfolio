import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Impact from './components/Impact';
import SelectedSystems from './components/SelectedSystems';
import Philosophy from './components/Philosophy';
import SystemProcess from './components/SystemProcess';
import Experience from './components/Experience';
import Capabilities from './components/Capabilities';
import Writing from './components/Writing';
import Education from './components/Education';
import AboutContact from './components/AboutContact';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    // Refresh ScrollTrigger after all components have mounted and rendered
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);
  }, []);

  return (
    <div className="relative bg-ink min-h-screen font-body selection:bg-orange selection:text-ink">
      {/* Global CSS noise overlay */}
      <div className="noise-overlay" />
      
      <Navbar />
      
      <main>
        <Hero />
        <Impact />
        <SelectedSystems />
        <Philosophy />
        <SystemProcess />
        <Experience />
        <Capabilities />
        <Writing />
        <Education />
        <AboutContact />
      </main>

      <footer className="bg-paper text-ink py-16 px-8 rounded-t-[4rem] relative z-30 -mt-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
          
          <div className="flex flex-col gap-2">
            <div className="font-heading font-extrabold text-3xl mb-2">Saket Garodia.</div>
            <p className="font-technical text-sm text-graphite max-w-sm leading-relaxed mb-4">
              AI/ML Engineer building production GenAI, RAG, optimization, and MLOps systems.
            </p>
            <p className="font-technical text-xs text-graphite opacity-70">
              © {new Date().getFullYear()} Saket Garodia. Built with React, Tailwind CSS, and GSAP.
            </p>
          </div>

          <div className="flex flex-col md:items-end gap-6 font-technical text-sm text-graphite">
            <div className="flex flex-col md:items-end gap-2">
              <a href="mailto:saketgarodia1@gmail.com" className="hover:text-orange transition-colors">saketgarodia1@gmail.com</a>
              <span className="opacity-70">513-807-5167</span>
            </div>
            
            <div className="flex flex-wrap gap-4 md:gap-6 font-bold">
              <a href="/resume.pdf" target="_blank" rel="noreferrer" className="text-orange hover:text-ink transition-colors">Resume</a>
              <a href="https://github.com/garodisk" target="_blank" rel="noreferrer" className="hover:text-orange transition-colors">GitHub</a>
              <a href="https://www.linkedin.com/in/saket-garodia/" target="_blank" rel="noreferrer" className="hover:text-orange transition-colors">LinkedIn</a>
              <a href="https://medium.com/@saketgarodia" target="_blank" rel="noreferrer" className="hover:text-orange transition-colors">Medium</a>
            </div>
          </div>
          
        </div>
      </footer>
    </div>
  );
}

export default App;
