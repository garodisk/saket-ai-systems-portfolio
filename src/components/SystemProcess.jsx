import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const processSteps = [
  {
    id: 'build',
    title: 'BUILD',
    description: 'From ambiguous business problem to working AI system.',
    keywords: ['problem framing', 'architecture', 'agents', 'retrieval', 'APIs', 'tools'],
    bg: 'bg-paper',
    text: 'text-ink'
  },
  {
    id: 'measure',
    title: 'MEASURE',
    description: 'AI quality must be measurable across the entire pipeline.',
    keywords: ['evaluation', 'model quality', 'latency', 'reliability', 'monitoring', 'business outcomes'],
    bg: 'bg-orange',
    text: 'text-ink'
  },
  {
    id: 'harden',
    title: 'HARDEN',
    description: 'Production AI requires controls around the model.',
    keywords: ['identity', 'security', 'guardrails', 'governance', 'observability', 'reliability'],
    bg: 'bg-ink',
    text: 'text-paper',
    border: 'border border-graphite/30'
  }
];

const SystemProcess = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const cards = gsap.utils.toArray('.process-card');
      
      cards.forEach((card, i) => {
        if (i === 0) return; // Skip first card scaling down on its own entry
        
        ScrollTrigger.create({
          trigger: card,
          start: "top top+=100",
          end: "+=100%",
          scrub: true,
          animation: gsap.to(cards[i - 1], {
            scale: 0.92,
            opacity: 0.5,
            filter: "blur(4px)",
            ease: "none"
          })
        });
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="bg-ink pb-32">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="pt-32 pb-16 text-center">
          <h2 className="font-technical text-orange text-sm tracking-widest uppercase mb-4">[ SYSTEM PROCESS ]</h2>
          <h3 className="font-heading font-extrabold text-4xl md:text-5xl text-paper">From Ambiguity to Production.</h3>
        </div>

        <div className="relative">
          {processSteps.map((step, i) => (
            <div 
              key={step.id} 
              className={`process-card sticky top-[10vh] min-h-[60vh] flex flex-col justify-center p-10 md:p-16 rounded-[3rem] mb-12 shadow-2xl ${step.bg} ${step.text} ${step.border || ''}`}
              style={{ zIndex: i + 1 }}
            >
              <div className="font-technical text-xs tracking-widest uppercase mb-6 opacity-70">
                Phase 0{i + 1}
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h4 className="font-heading font-extrabold text-5xl md:text-7xl lg:text-[6rem] mb-6 tracking-tighter">
                    {step.title}.
                  </h4>
                  <p className="font-drama italic text-2xl md:text-3xl max-w-xl leading-relaxed opacity-90 mb-8">
                    {step.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-3 lg:justify-end content-center">
                  {step.keywords.map((kw, j) => (
                    <div 
                      key={j} 
                      className={`px-5 py-3 rounded-full font-technical text-sm font-medium
                        ${step.bg === 'bg-ink' ? 'bg-paper/10 text-paper border border-paper/20' : 'bg-ink/10 text-ink border border-ink/20'}
                      `}
                    >
                      {kw}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SystemProcess;
