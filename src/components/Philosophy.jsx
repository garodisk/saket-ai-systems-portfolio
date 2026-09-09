import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Philosophy = () => {
  const containerRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Split text logic simulated with spans for GSAP stagger
      gsap.from('.phil-word', {
        scrollTrigger: {
          trigger: textRef.current,
          start: 'top 80%',
        },
        opacity: 0,
        y: 20,
        duration: 0.8,
        stagger: 0.05,
        ease: 'power3.out'
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} id="capabilities" className="py-32 px-8 md:px-20 lg:px-32 bg-ink text-paper border-t border-graphite/20">
      <div className="max-w-5xl mx-auto text-center" ref={textRef}>
        <h2 className="font-technical text-orange text-sm tracking-widest uppercase mb-12">[ THE SYSTEM AROUND THE MODEL ]</h2>
        
        <p className="font-heading font-light text-3xl md:text-5xl lg:text-6xl leading-[1.2] tracking-tight text-graphite">
          <span className="phil-word inline-block mr-3">Most</span>
          <span className="phil-word inline-block mr-3">AI</span>
          <span className="phil-word inline-block mr-3">demos</span>
          <span className="phil-word inline-block mr-3">focus</span>
          <span className="phil-word inline-block mr-3">on</span>
          <span className="phil-word inline-block mr-3 text-paper font-bold">THE</span>
          <span className="phil-word inline-block mr-3 text-paper font-bold">MODEL.</span>
          <br className="hidden md:block my-4"/>
          <span className="phil-word inline-block mr-3 mt-4 md:mt-0">Production</span>
          <span className="phil-word inline-block mr-3">AI</span>
          <span className="phil-word inline-block mr-3">depends</span>
          <span className="phil-word inline-block mr-3">on</span>
          <span className="phil-word inline-block mr-3 text-orange font-drama italic">the</span>
          <span className="phil-word inline-block mr-3 text-orange font-drama italic">system</span>
          <span className="phil-word inline-block mr-3 text-orange font-drama italic">around</span>
          <span className="phil-word inline-block mr-3 text-orange font-drama italic">it.</span>
        </p>

        <div className="mt-20 flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
          {['data', 'context', 'retrieval', 'tools', 'state', 'APIs', 'evaluation', 'security', 'observability', 'deployment', 'reliability', 'business workflow'].map((item, i) => (
            <span key={i} className="phil-word px-4 py-2 border border-graphite/30 rounded-full font-technical text-sm text-paper/70 hover:text-orange hover:border-orange transition-colors">
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
