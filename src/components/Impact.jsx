import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const metrics = [
  { value: '$40M+', label: 'Annualized Business Impact' },
  { value: '35M+', label: 'Households Modeled' },
  { value: '90%+', label: 'Production SLA / Reliability' },
  { value: '8+', label: 'Years Across ML + AI' }
];

const Impact = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from('.metric-item', {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
        },
        y: 30,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: 'power3.out'
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} id="experience" className="py-24 px-8 md:px-20 lg:px-32 bg-ink border-t border-graphite/20">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="font-technical text-orange text-sm tracking-widest uppercase mb-4">[ SYSTEM TELEMETRY ]</h2>
          <p className="font-heading text-3xl md:text-4xl text-paper font-light max-w-2xl">
            Signals of scale and reliability across production environments.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, i) => (
            <div key={i} className="metric-item flex flex-col p-8 rounded-3xl bg-graphite/5 border border-graphite/10 relative overflow-hidden group">
              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-orange/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 m-6" />
              
              <div className="font-drama text-5xl md:text-6xl text-paper mb-4 relative z-10">
                {metric.value}
              </div>
              <div className="font-technical text-sm text-graphite uppercase tracking-wide mt-auto relative z-10">
                {metric.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Impact;
