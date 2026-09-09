import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    company: '84.51 / Kroger',
    role: 'Senior Data Scientist — Machine Learning / MLOps',
    period: 'Jan 2022 - Present',
    impact: 'Built and scaled production pricing and promotion optimization systems generating millions of recommendations, contributing $40M+ in annual incremental profit.',
    systems: 'Led pickup/delivery lookalike models (0.84 AUC) scoring 35M+ households ($20M+ potential value). Built RPO-Upkeep repricing engine.',
    tech: ['Databricks', 'MLflow', 'PySpark', 'Pyomo', 'OpenAI Agents SDK']
  },
  {
    company: 'Asurion',
    role: 'Data Scientist — Machine Learning / NLP',
    period: 'Oct 2020 - Dec 2021',
    impact: 'Reduced Home+ product churn by 20%+ with a churn-risk model. Improved call-center messaging sales by 15% via BERT sentiment models.',
    systems: 'Deployed AWS SageMaker pipelines. Built NLP capabilities for sentiment, keyword detection, and live-agent reply suggestions.',
    tech: ['AWS SageMaker', 'BERT', 'NLP', 'Python']
  },
  {
    company: 'Edelweiss Financial Services',
    role: 'Associate — Machine Learning / Data Science',
    period: 'Apr 2018 - Aug 2019',
    impact: 'Reduced loan defaults by 30%+ with credit-risk models using demographic and geospatial features.',
    systems: 'Developed customer profiling and segmentation pipelines to deliver real-time dashboards to senior stakeholders.',
    tech: ['Gradient Boosting', 'PCA', 'K-Means', 'Tableau']
  },
  {
    company: 'Oracle',
    role: 'Application Engineer — Full Stack',
    period: 'Jul 2014 - Aug 2015',
    impact: 'Built core features for Oracle CRM Cloud, delivering critical product enhancements.',
    systems: 'Designed data models, frontend components, and service-layer integrations.',
    tech: ['Full-stack', 'CRM Cloud', 'Service Integrations']
  }
];

const Experience = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo('.exp-item', 
        { y: 40, opacity: 0 },
        {
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 75%',
          },
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          ease: 'power3.out'
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} id="experience-section" className="py-32 px-4 md:px-8 lg:px-16 bg-paper text-ink relative z-20 border-t border-ink/5">
      <div className="max-w-5xl mx-auto">
        <div className="mb-20 px-4">
          <h2 className="font-technical text-orange text-sm tracking-widest uppercase mb-4">[ PROFESSIONAL TIMELINE ]</h2>
          <h3 className="font-heading font-extrabold text-4xl md:text-5xl lg:text-6xl tracking-tight mb-6">
            Experience.
          </h3>
        </div>

        <div className="flex flex-col relative pl-4 md:pl-12 border-l border-ink/10 ml-4 md:ml-0">
          {experiences.map((exp, i) => (
            <div key={i} className="exp-item relative mb-20 last:mb-0">
              {/* Timeline dot */}
              <div className="absolute -left-[21px] md:-left-[53px] top-2 w-4 h-4 rounded-full bg-orange border-4 border-paper shadow-[0_0_10px_rgba(255,90,54,0.3)]"></div>
              
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12">
                <div className="md:col-span-4">
                  <h4 className="font-heading font-extrabold text-2xl md:text-3xl mb-2">{exp.company}</h4>
                  <div className="font-technical text-sm text-orange font-bold uppercase mb-2">{exp.role}</div>
                  <div className="font-technical text-xs text-graphite">{exp.period}</div>
                </div>
                
                <div className="md:col-span-8">
                  <div className="mb-6">
                    <span className="font-technical text-xs uppercase text-graphite tracking-widest block mb-2">IMPACT</span>
                    <p className="font-body text-ink/80 text-lg leading-relaxed">{exp.impact}</p>
                  </div>
                  
                  <div className="mb-8">
                    <span className="font-technical text-xs uppercase text-graphite tracking-widest block mb-2">SYSTEMS</span>
                    <p className="font-body text-ink/70 leading-relaxed">{exp.systems}</p>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((t, j) => (
                      <span key={j} className="px-3 py-1 bg-ink/5 text-ink/80 rounded-full font-technical text-xs">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
