import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Hero = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from('.hero-elem', {
        y: 40,
        opacity: 0,
        duration: 1.2,
        stagger: 0.08,
        ease: 'power3.out',
        delay: 0.2
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef} 
      className="relative min-h-[100dvh] flex items-end pb-24 px-8 md:px-20 lg:px-32 bg-ink overflow-hidden"
    >
      {/* Abstract Background Texture/Gradient */}
      <div className="absolute inset-0 z-0 opacity-20" style={{
        background: 'radial-gradient(circle at 70% 30%, rgba(255, 90, 54, 0.15), transparent 50%), radial-gradient(circle at 30% 70%, rgba(111, 115, 124, 0.1), transparent 50%)'
      }} />

      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-end justify-between gap-12">
        <div className="max-w-3xl">
          <p className="hero-elem font-technical text-orange mb-6 text-sm md:text-base tracking-widest uppercase">
            AI / ML Engineer
          </p>
          
          <h1 className="hero-elem font-heading font-extrabold text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.05] tracking-tight mb-4 text-paper">
            I BUILD AI SYSTEMS
          </h1>
          
          <p className="hero-elem font-drama text-4xl md:text-6xl lg:text-7xl text-graphite mb-10 leading-tight">
            that ship.
          </p>
          
          <p className="hero-elem font-body text-lg md:text-xl text-paper/80 max-w-xl mb-12 leading-relaxed">
            I build end-to-end AI products—from agentic workflows and retrieval systems to the MLOps, security, and governance layers required to actually ship them to production.
          </p>
        
        <div className="hero-elem">
          <a href="#systems" className="inline-flex items-center gap-3 magnetic-btn bg-paper text-ink font-heading font-bold px-8 py-4 rounded-full">
            Explore Systems
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </div>
        </div>
        
        <div className="hero-elem hidden lg:block w-72 h-96 relative shrink-0">
          <div className="absolute inset-0 bg-orange rounded-[3rem] -rotate-3 scale-[1.02] opacity-50 blur-sm"></div>
          <img 
            src="/images/saket-dp.jpg" 
            alt="Saket Garodia" 
            className="absolute inset-0 w-full h-full object-cover rounded-[3rem] border-2 border-graphite/20 grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
