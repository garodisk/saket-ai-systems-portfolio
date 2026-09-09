import React from 'react';
import { Mail, Globe2, Sparkles } from 'lucide-react';

const GithubIcon = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.24c3-.34 6-1.5 6-6.76 0-1.4-.5-2.6-1.3-3.5.1-.3.6-1.7-.1-3.5 0 0-1-.3-3.3 1.2a11.5 11.5 0 0 0-6 0C7 3.3 6 3.6 6 3.6c-.7 1.8-.2 3.2-.1 3.5-.8.9-1.3 2.1-1.3 3.5 0 5.2 3 6.4 6 6.76A4.8 4.8 0 0 0 8 18v4"></path>
  </svg>
);

const LinkedinIcon = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const AboutContact = () => {
  return (
    <section id="about" className="py-32 px-4 md:px-8 lg:px-16 bg-ink text-paper relative z-20 border-t border-graphite/20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
        
        {/* About Section */}
        <div>
          <h2 className="font-technical text-orange text-sm tracking-widest uppercase mb-8">[ ABOUT ]</h2>
          <h3 className="font-heading font-bold text-3xl md:text-4xl mb-6">
            Curious builder, traveler, and lifelong AI learner.
          </h3>
          <p className="font-body text-paper/70 leading-relaxed text-lg mb-10">
            I have studied across three continents, visited 25+ countries, and attend AI conferences and builder events globally. I stay close to the fast-moving AI ecosystem through hands-on projects, talks, papers, courses, and technical communities.
          </p>
          
          <div className="flex flex-col gap-4 font-technical text-sm text-graphite mb-12">
            <div className="flex items-center gap-3">
              <Globe2 size={16} className="text-orange" />
              <span>Studied across three continents • 25+ countries visited</span>
            </div>
            <div className="flex items-center gap-3">
              <Sparkles size={16} className="text-orange" />
              <span>Continuous learning across Deep Learning & Agentic AI</span>
            </div>
          </div>

          {/* Photo Collage */}
          <div className="grid grid-cols-3 gap-3 md:gap-4 relative pr-4">
            <img src="/images/picture1.png" alt="Saket Traveling" className="w-full h-24 md:h-32 object-cover rounded-2xl rotate-2 hover:rotate-0 hover:scale-105 transition-all duration-300 shadow-xl border border-paper/10" />
            <img src="/images/picture2.png" alt="Saket Traveling" className="w-full h-32 md:h-40 object-cover rounded-2xl -translate-y-4 -rotate-3 hover:rotate-0 hover:scale-105 transition-all duration-300 shadow-xl border border-paper/10" />
            <img src="/images/picture3.png" alt="Saket Traveling" className="w-full h-24 md:h-32 object-cover rounded-2xl rotate-1 translate-y-2 hover:rotate-0 hover:scale-105 transition-all duration-300 shadow-xl border border-paper/10" />
            <img src="/images/picture4.png" alt="Saket Traveling" className="w-full h-24 md:h-32 object-cover rounded-2xl -rotate-2 hover:rotate-0 hover:scale-105 transition-all duration-300 col-span-2 shadow-xl border border-paper/10" />
            <img src="/images/picture5.png" alt="Saket Traveling" className="w-full h-24 md:h-32 object-cover rounded-2xl rotate-3 hover:rotate-0 hover:scale-105 transition-all duration-300 shadow-xl border border-paper/10" />
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-paper/5 p-10 md:p-14 rounded-[3rem] border border-paper/10 flex flex-col justify-center">
          <h2 className="font-drama italic text-4xl md:text-5xl lg:text-6xl text-orange mb-6">
            Building something difficult with AI?
          </h2>
          <p className="font-heading font-bold text-2xl mb-4">Let's talk.</p>
          <p className="font-technical text-sm text-paper/70 mb-12">
            Open to AI/ML Engineer, Applied AI Engineer, Senior Data Scientist, GenAI Engineer, and MLOps roles across SF Bay Area, Seattle, NYC, Chicago, Austin, and Remote.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="mailto:saketgarodia1@gmail.com" 
              className="flex-1 flex items-center justify-center gap-3 bg-orange text-ink font-heading font-bold py-4 px-6 rounded-full hover:scale-[1.02] transition-transform duration-300"
            >
              <Mail size={18} /> Email
            </a>
            <a 
              href="https://www.linkedin.com/in/saket-garodia" 
              target="_blank" 
              rel="noreferrer"
              className="flex-1 flex items-center justify-center gap-3 bg-paper/10 text-paper border border-paper/20 font-heading font-bold py-4 px-6 rounded-full hover:bg-paper/20 transition-colors duration-300"
            >
              <LinkedinIcon size={18} /> LinkedIn
            </a>
            <a 
              href="https://github.com/garodisk" 
              target="_blank" 
              rel="noreferrer"
              className="flex-1 flex items-center justify-center gap-3 bg-paper/10 text-paper border border-paper/20 font-heading font-bold py-4 px-6 rounded-full hover:bg-paper/20 transition-colors duration-300"
            >
              <GithubIcon size={18} /> GitHub
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutContact;
