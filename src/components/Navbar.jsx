import React, { useEffect, useState } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
      <nav 
        className={`flex items-center gap-8 px-8 py-3 rounded-[3rem] transition-all duration-300 ${
          scrolled 
            ? 'bg-ink/60 backdrop-blur-md border border-graphite/30 shadow-lg' 
            : 'bg-transparent border-transparent'
        }`}
      >
        <div className="font-heading font-bold tracking-wide">SG.</div>
        
        <div className="hidden md:flex items-center gap-6 font-technical text-sm text-paper/80">
          <a href="#systems" className="hover:text-orange transition-colors hover:-translate-y-[1px]">Systems</a>
          <a href="#experience" className="hover:text-orange transition-colors hover:-translate-y-[1px]">Experience</a>
          <a href="#capabilities" className="hover:text-orange transition-colors hover:-translate-y-[1px]">Capabilities</a>
          <a href="#writing" className="hover:text-orange transition-colors hover:-translate-y-[1px]">Writing</a>
        </div>

        <a 
          href="#systems" 
          className="magnetic-btn bg-orange text-ink font-heading font-bold px-5 py-2 rounded-full text-sm"
        >
          Explore Systems
        </a>
      </nav>
    </div>
  );
};

export default Navbar;
