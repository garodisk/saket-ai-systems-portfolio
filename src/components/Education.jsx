import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const education = [
  {
    degree: 'M.S. Business Analytics',
    school: 'University of Cincinnati',
    period: 'Aug 2019 - Aug 2020',
    details: 'GPA 4.0/4.0, Graduate Merit Scholarship. Focused on applied analytics, machine learning, and data-driven decision systems.'
  },
  {
    degree: 'MBA, International Business',
    school: 'Indian Institute of Foreign Trade (IIFT), New Delhi',
    period: 'Jul 2016 - Mar 2018',
    details: 'Business and strategy foundation for applied analytics and product impact.'
  },
  {
    degree: 'B.Tech, Computer Science & Engineering',
    school: 'National Institute of Technology (NIT), Calicut',
    period: 'Jul 2010 - Jun 2014',
    details: 'Computer science foundation across software engineering and systems.'
  }
];

const certifications = [
  'AI Engineer Agentic Track: The Complete Agent & MCP course',
  'LLM Engineering: Master AI, Large Language Models & Agents',
  'AI Coder / Claude Code (Developer-agent patterns)',
  'LLMOps in Production (Evaluating and operating LLM systems)',
  'Neural Networks and Deep Learning (DeepLearning.AI)',
  'Stanford University Machine Learning'
];

const Education = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo('.edu-item', 
        { y: 30, opacity: 0 },
        {
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 75%',
          },
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out'
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} id="education" className="py-32 px-4 md:px-8 lg:px-16 bg-ink text-paper relative z-20 border-t border-graphite/20">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <h2 className="font-technical text-orange text-sm tracking-widest uppercase mb-4">[ ACADEMIA & CERTIFICATIONS ]</h2>
          <h3 className="font-heading font-extrabold text-4xl md:text-5xl lg:text-6xl tracking-tight mb-6">
            Education.
          </h3>
          <p className="font-body text-graphite text-lg md:text-xl max-w-2xl">
            Computer Science, Machine Learning, and continuous self-learning across the AI ecosystem.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          
          <div className="lg:col-span-7 flex flex-col gap-12">
            {education.map((edu, i) => (
              <div key={i} className="edu-item border-l-2 border-paper/10 pl-6 relative">
                <div className="absolute top-0 -left-[2px] w-[2px] h-8 bg-orange"></div>
                <h4 className="font-heading font-bold text-2xl md:text-3xl mb-2">{edu.degree}</h4>
                <div className="font-technical text-sm text-orange uppercase tracking-wider mb-2">{edu.school}</div>
                <div className="font-technical text-xs text-graphite mb-4">{edu.period}</div>
                <p className="font-body text-paper/70 leading-relaxed">
                  {edu.details}
                </p>
              </div>
            ))}
          </div>

          <div className="lg:col-span-5">
            <div className="bg-paper/5 rounded-3xl p-8 md:p-10 border border-paper/10">
              <h4 className="font-technical text-orange text-sm uppercase tracking-widest font-bold mb-8">Selected Certifications</h4>
              <ul className="flex flex-col gap-6">
                {certifications.map((cert, i) => (
                  <li key={i} className="edu-item font-body text-paper/80 flex items-start gap-4">
                    <span className="text-orange mt-1">▹</span>
                    <span>{cert}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Education;
