import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, BookOpen } from 'lucide-react';

const GithubIcon = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.24c3-.34 6-1.5 6-6.76 0-1.4-.5-2.6-1.3-3.5.1-.3.6-1.7-.1-3.5 0 0-1-.3-3.3 1.2a11.5 11.5 0 0 0-6 0C7 3.3 6 3.6 6 3.6c-.7 1.8-.2 3.2-.1 3.5-.8.9-1.3 2.1-1.3 3.5 0 5.2 3 6.4 6 6.76A4.8 4.8 0 0 0 8 18v4"></path>
  </svg>
);

gsap.registerPlugin(ScrollTrigger);

const articles = [
  {
    title: 'Build and Learn GPT From Scratch',
    type: 'Featured four-part series',
    description: 'A four-part PyTorch series explaining transformer fundamentals by implementing a character-level GPT with attention, LayerNorm, residual connections, and a full training loop.',
    topics: ['LLMs', 'Transformers', 'PyTorch', 'Deep Learning'],
    link: 'https://saketgarodia.medium.com/build-and-learn-gpt-from-scratch-part-1-87f63c7be55d'
  },
  {
    title: "From Zero to API: The Data Scientist's Guide to FastAPI",
    type: 'Model serving / backend engineering',
    description: 'A practical guide for turning data-science work into API-backed applications with FastAPI.',
    topics: ['FastAPI', 'Backend', 'Python', 'APIs'],
    link: 'https://saketgarodia.medium.com/from-zero-to-api-the-data-scientists-guide-to-fastapi-9ae3bb662f5a'
  },
  {
    title: 'Market Basket Analysis on 3 Million Orders from Instacart',
    type: 'Large-scale analytics',
    description: 'Market basket analysis using Spark on the Instacart orders dataset.',
    topics: ['Spark', 'Analytics', 'Retail', 'Data Engineering'],
    link: 'https://medium.com/@saketgarodia'
  },
  {
    title: 'Image Classification using CNN and Transfer Learning',
    type: 'Deep learning',
    description: 'Applied deep-learning article covering convolutional neural networks and transfer-learning approaches.',
    topics: ['Deep Learning', 'CNNs', 'Transfer Learning', 'Computer Vision'],
    link: 'https://medium.com/@saketgarodia'
  }
];

const openSource = [
  { name: 'Coder Buddy', link: 'https://github.com/garodisk/CodeBuddy' },
  { name: 'Multi-Agent Research Assistant', link: 'https://github.com/garodisk/multi-agent-research-agent' },
  { name: "Saket's Data Agent", link: 'https://github.com/garodisk/Saket-s-data-agent' },
  { name: 'TripMate AI', link: 'https://github.com/garodisk/sakets_travel_agent' },
  { name: 'Temporal Knowledge-Graph', link: 'https://github.com/garodisk/temporal_graphrag' },
  { name: 'RAG Search System', link: 'https://github.com/garodisk/medium-ai-blog-search' }
];

const Writing = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo('.article-card', 
        { y: 30, opacity: 0 },
        {
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 70%',
          },
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out'
        }
      );
      gsap.fromTo('.os-link', 
        { y: 20, opacity: 0 },
        {
          scrollTrigger: {
            trigger: '.os-section',
            start: 'top 85%',
          },
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.05,
          ease: 'power2.out'
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} id="writing" className="py-32 px-4 md:px-8 lg:px-16 bg-paper text-ink relative z-20 rounded-t-[4rem] -mt-10 border-t border-ink/5">
      <div className="max-w-7xl mx-auto">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div>
            <h2 className="font-technical text-orange text-sm tracking-widest uppercase mb-4">[ EDITORIAL ]</h2>
            <h3 className="font-heading font-extrabold text-4xl md:text-5xl lg:text-6xl tracking-tight">
              Writing & <br/>Open Source.
            </h3>
          </div>
          <a href="https://medium.com/@saketgarodia" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 font-technical text-sm font-bold text-ink hover:text-orange transition-colors">
            READ ALL ON MEDIUM <ArrowRight size={16} />
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-16 mb-32">
          {articles.map((article, i) => (
            <div key={i} className="article-card group border-t-2 border-ink/10 pt-8 flex flex-col">
              <div className="flex justify-between items-start mb-6">
                <div className="font-technical text-xs text-graphite uppercase tracking-wider">
                  {article.type}
                </div>
                <BookOpen size={20} className="text-ink/30 group-hover:text-orange transition-colors" />
              </div>
              
              <h4 className="font-drama italic text-3xl md:text-4xl mb-4 group-hover:text-orange transition-colors">
                <a href={article.link} target="_blank" rel="noreferrer">{article.title}</a>
              </h4>
              
              <p className="font-body text-ink/70 leading-relaxed mb-8 flex-grow">
                {article.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {article.topics.map((t, j) => (
                  <span key={j} className="px-2 py-1 bg-ink/5 text-ink/60 rounded font-technical text-[10px] uppercase">
                    {t}
                  </span>
                ))}
              </div>
              
              <a href={article.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 font-technical text-xs font-bold text-orange hover:text-ink transition-colors mt-auto w-max">
                READ ARTICLE <ArrowRight size={14} />
              </a>
            </div>
          ))}
        </div>

        <div className="os-section border-t border-ink/10 pt-20">
          <div className="flex items-center gap-3 mb-10">
            <GithubIcon size={24} className="text-orange" />
            <h4 className="font-heading font-bold text-2xl">Selected Repositories</h4>
          </div>
          <div className="flex flex-wrap gap-4">
            {openSource.map((os, i) => (
              <a 
                key={i} 
                href={os.link} 
                target="_blank" 
                rel="noreferrer"
                className="os-link inline-flex items-center gap-2 px-5 py-3 rounded-full border border-ink/10 bg-white hover:border-orange hover:shadow-lg transition-all text-sm font-heading font-bold"
              >
                {os.name} <ArrowRight size={14} className="text-graphite -rotate-45" />
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Writing;
