import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Terminal, Search, Database, GitBranch, Share2, Workflow } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

// Project 1: RAG Search System
const RAGSearchVisualization = () => {
  return (
    <div className="relative h-64 bg-ink rounded-2xl border border-graphite/20 p-6 flex flex-col justify-between overflow-hidden">
      <div className="flex justify-center text-graphite font-technical text-xs mb-2">QUERY</div>
      <div className="flex justify-between items-center relative">
        {/* Paths */}
        <div className="rag-path absolute top-1/2 left-1/4 right-1/2 h-px bg-orange/50 -translate-y-4"></div>
        <div className="rag-path absolute top-1/2 left-1/4 right-1/2 h-px bg-orange/50 translate-y-4"></div>
        
        <div className="z-10 bg-graphite/10 px-4 py-2 rounded-full font-technical text-xs text-paper border border-graphite/30">Vector Search</div>
        <div className="z-10 bg-orange/20 px-4 py-3 rounded-xl font-technical text-sm text-orange border border-orange flex items-center justify-center">RRF</div>
        <div className="z-10 bg-graphite/10 px-4 py-2 rounded-full font-technical text-xs text-paper border border-graphite/30">BM25 Search</div>
      </div>
      <div className="flex justify-center text-graphite font-technical text-xs mt-2">LLM ➔ STREAMING ANSWER</div>
    </div>
  );
};

// Project 2: TripMate AI
const TripMateVisualization = () => {
  return (
    <div className="relative h-full min-h-[200px] bg-white rounded-2xl border border-graphite/10 p-6 flex flex-col justify-center overflow-hidden">
      <div className="absolute top-4 right-4 bg-orange/10 text-orange px-2 py-1 rounded text-[10px] font-technical uppercase font-bold tracking-wider">Work in Progress</div>
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-full bg-ink flex items-center justify-center text-paper font-technical text-xs">Req</div>
        <div className="flex-1 h-px bg-graphite/30 relative">
          <div className="absolute -top-1 left-1/4 w-2 h-2 rounded-full bg-orange"></div>
          <div className="absolute -top-1 left-1/2 w-2 h-2 rounded-full bg-graphite/50"></div>
          <div className="absolute -top-1 left-3/4 w-2 h-2 rounded-full bg-graphite/50"></div>
        </div>
        <div className="w-10 h-10 rounded-full bg-orange flex items-center justify-center text-ink font-technical text-xs">Plan</div>
      </div>
      <div className="flex justify-between text-ink/50 font-technical text-[10px] mt-4 uppercase px-2">
        <span>Flight Agent</span>
        <span>Hotel Agent</span>
        <span>Itinerary Agent</span>
      </div>
      <div className="mt-8 pt-4 border-t border-graphite/10 flex items-center gap-2 text-ink/70 font-technical text-xs">
        <Database size={14} /> PostgreSQL Thread Memory Checkpoint
      </div>
    </div>
  );
};

// Project 3: Multi-Agent Research Assistant
const ResearchVisualization = () => {
  return (
    <div className="relative h-64 bg-ink rounded-2xl border border-graphite/20 p-6 flex items-center justify-center overflow-hidden">
      <div className="flex gap-4 items-center">
        <div className="bg-graphite/10 p-3 rounded font-technical text-xs text-paper border border-graphite/30 text-center">Clarity</div>
        <ArrowRight size={16} className="text-graphite" />
        <div className="bg-graphite/10 p-3 rounded font-technical text-xs text-paper border border-graphite/30 text-center">Research</div>
        <div className="relative">
          <ArrowRight size={16} className="text-graphite mx-4" />
          <div className="absolute -top-8 left-0 right-0 flex justify-center text-orange text-[10px] font-technical">Retry Loop</div>
          <div className="absolute -top-4 left-4 right-4 h-4 border-t border-l border-r border-orange/50 rounded-t-xl"></div>
        </div>
        <div className="bg-orange/20 p-3 rounded font-technical text-xs text-orange border border-orange text-center">Validator</div>
        <ArrowRight size={16} className="text-graphite" />
        <div className="bg-graphite/10 p-3 rounded font-technical text-xs text-paper border border-graphite/30 text-center">Synthesis</div>
      </div>
    </div>
  );
};

// Project 4: Coder Buddy
const CoderBuddyVisualization = () => {
  return (
    <div className="relative bg-ink rounded-2xl border border-graphite/20 p-8 flex flex-col justify-center overflow-hidden">
      <div className="flex justify-between items-center">
        <div className="w-8 h-8 rounded bg-graphite/20 flex items-center justify-center text-paper font-technical text-xs">C</div>
        <div className="flex-1 h-px bg-graphite/30"></div>
        <div className="w-8 h-8 rounded bg-graphite/20 flex items-center justify-center text-paper font-technical text-xs">P</div>
        <div className="flex-1 h-px bg-graphite/30"></div>
        <div className="w-8 h-8 rounded bg-graphite/20 flex items-center justify-center text-paper font-technical text-xs">A</div>
        <div className="flex-1 h-px bg-orange/50"></div>
        <div className="w-8 h-8 rounded bg-orange flex items-center justify-center text-ink font-technical text-xs font-bold shadow-[0_0_15px_rgba(255,90,54,0.5)]">C</div>
        <div className="flex-1 h-px border-t border-dashed border-graphite/50"></div>
        <div className="w-12 h-12 rounded-full border border-graphite/30 flex items-center justify-center text-graphite"><Terminal size={16}/></div>
      </div>
      <div className="flex justify-between mt-4 font-technical text-[10px] text-graphite uppercase">
        <span>Clarifier</span>
        <span>Planner</span>
        <span>Architect</span>
        <span className="text-orange">Coder (Active)</span>
        <span>Tools</span>
      </div>
    </div>
  );
};

// Project 5: Temporal Knowledge Graph
const TemporalGraphVisualization = () => {
  return (
    <div className="relative h-64 bg-ink rounded-2xl border border-graphite/20 p-6 flex flex-col items-center justify-center overflow-hidden">
      <div className="flex items-center gap-12 relative">
        <div className="w-16 h-16 rounded-full border-2 border-orange flex items-center justify-center text-paper font-technical text-xs shadow-[0_0_20px_rgba(255,90,54,0.2)] z-10 bg-ink">Node A</div>
        
        {/* Active Edge */}
        <div className="absolute top-1/2 left-12 right-12 h-0.5 bg-orange -translate-y-4 -z-0">
          <div className="absolute -top-5 left-1/2 -translate-x-1/2 text-orange font-technical text-[10px] bg-ink px-2">valid_at: NOW</div>
        </div>
        
        {/* Historical Edge */}
        <div className="absolute top-1/2 left-12 right-12 h-px border-t border-dashed border-graphite/50 translate-y-4 -z-0">
          <div className="absolute top-2 left-1/2 -translate-x-1/2 text-graphite font-technical text-[10px] bg-ink px-2">invalid_at: PAST</div>
        </div>

        <div className="w-16 h-16 rounded-full border-2 border-graphite/50 flex items-center justify-center text-paper font-technical text-xs z-10 bg-ink">Node B</div>
      </div>
    </div>
  );
};

// Project 6: Saket's Data Agent
const DataAgentVisualization = () => {
  return (
    <div className="relative h-full min-h-[250px] bg-white rounded-2xl border border-graphite/10 p-6 flex flex-col overflow-hidden">
      <div className="flex justify-center mb-6">
        <div className="bg-ink text-paper px-4 py-2 rounded-full font-technical text-xs">Natural Language Request</div>
      </div>
      <div className="flex justify-center mb-6 relative">
        <div className="w-px h-6 bg-graphite/30 absolute -top-6"></div>
        <div className="bg-graphite/5 text-ink px-4 py-2 rounded font-technical text-xs border border-graphite/20 flex items-center gap-2">
          <Workflow size={14}/> Router
        </div>
      </div>
      <div className="flex justify-between relative mt-4">
        {/* Routing branches */}
        <div className="absolute -top-10 left-1/4 right-1/2 h-10 border-l border-t border-graphite/30 rounded-tl-xl"></div>
        <div className="absolute -top-10 left-1/2 right-1/4 h-10 border-r border-t border-graphite/30 rounded-tr-xl"></div>
        
        <div className="flex flex-col items-center w-1/2 px-2">
          <div className="font-heading font-bold text-sm mb-4">SQL Agent</div>
          <div className="w-full bg-graphite/5 p-2 rounded text-[10px] font-technical text-ink/70 flex flex-col gap-2">
            <div>→ Schema</div>
            <div>→ Generation</div>
            <div className="bg-green-100 text-green-700 px-2 py-1 rounded font-bold border border-green-200">✓ Safety Validation</div>
            <div>→ Execution</div>
          </div>
        </div>
        <div className="flex flex-col items-center w-1/2 px-2">
          <div className="font-heading font-bold text-sm mb-4 text-graphite/50">ETL Agent</div>
          <div className="w-full bg-graphite/5 p-2 rounded text-[10px] font-technical text-ink/40 flex flex-col gap-2 opacity-50">
            <div>→ Tool Selection</div>
            <div>→ Pandas Trans.</div>
            <div>→ Output</div>
          </div>
        </div>
      </div>
    </div>
  );
};


const SelectedSystems = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo('.system-panel', 
        { y: 60, opacity: 0 },
        {
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 70%',
          },
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.15,
          ease: 'power3.out'
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} id="systems" className="py-32 px-4 md:px-8 lg:px-16 bg-paper text-ink rounded-t-[4rem] -mt-10 relative z-20">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 px-4 md:px-8">
          <h2 className="font-technical text-orange text-sm tracking-widest uppercase mb-4">[ FUNCTIONAL ARTIFACTS ]</h2>
          <h3 className="font-heading font-extrabold text-4xl md:text-5xl lg:text-6xl tracking-tight mb-6">
            Selected Systems.
          </h3>
          <p className="font-drama text-3xl md:text-4xl text-graphite">
            Interactive system architecture in production.
          </p>
        </div>

        <div className="flex flex-col gap-12">
          {/* Project 1: RAG Search System (Full width interactive architecture) */}
          <div className="system-panel grid grid-cols-1 lg:grid-cols-12 gap-8 bg-white p-6 md:p-10 rounded-[3rem] border border-ink/5 hover:border-orange/30 hover:shadow-2xl transition-all duration-500">
            <div className="lg:col-span-5 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4">
                <Search size={20} className="text-orange" />
                <div className="font-technical text-xs text-graphite uppercase tracking-wider">Hybrid search + streaming AI Q&A</div>
              </div>
              <h4 className="font-heading font-bold text-3xl md:text-4xl mb-4">RAG Search System</h4>
              <p className="font-body text-ink/70 leading-relaxed mb-6">
                A full-stack RAG application combining semantic retrieval and lexical search over a large article corpus. The system splits queries into Vector and BM25 lanes, merging ranked lists via Reciprocal Rank Fusion (RRF) before streaming LLM context.
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {['Next.js', 'FastAPI', 'Qdrant', 'RRF', 'BGE Embeddings', 'Prefect'].map(t => (
                  <span key={t} className="px-3 py-1 bg-ink/5 text-ink/80 rounded-full font-technical text-xs">{t}</span>
                ))}
              </div>
              <a href="https://github.com/garodisk/medium-ai-blog-search" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 font-technical text-xs font-bold text-orange hover:text-ink transition-colors w-max">
                VIEW REPOSITORY <ArrowRight size={14} />
              </a>
            </div>
            <div className="lg:col-span-7 flex flex-col justify-center">
              <RAGSearchVisualization />
            </div>
          </div>

          {/* Project 2 & 3: TripMate AI and Coder Buddy (Split layout) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            <div className="system-panel flex flex-col bg-white p-6 md:p-10 rounded-[3rem] border border-ink/5 hover:border-orange/30 hover:shadow-xl transition-all duration-500">
              <div className="font-technical text-xs text-graphite uppercase tracking-wider mb-2">Stateful multi-agent travel planner</div>
              <h4 className="font-heading font-bold text-2xl mb-4">TripMate AI</h4>
              <p className="font-body text-sm text-ink/70 leading-relaxed mb-8 flex-grow">
                Combines live AviationStack flight data, Tavily hotel search, and LLM itinerary generation behind a FastAPI interface. Features PostgreSQL-backed thread checkpointing.
              </p>
              <div className="mb-8">
                <TripMateVisualization />
              </div>
              <a href="https://github.com/garodisk/sakets_travel_agent" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 font-technical text-xs font-bold text-orange hover:text-ink transition-colors w-max">
                VIEW REPOSITORY <ArrowRight size={14} />
              </a>
            </div>

            <div className="system-panel flex flex-col bg-ink text-paper p-6 md:p-10 rounded-[3rem] border border-graphite/20 hover:border-orange/50 hover:shadow-[0_0_30px_rgba(255,90,54,0.15)] transition-all duration-500">
              <div className="font-technical text-xs text-orange uppercase tracking-wider mb-2">Open-source agentic coding assistant</div>
              <h4 className="font-heading font-bold text-2xl mb-4">Coder Buddy</h4>
              <p className="font-body text-sm text-paper/70 leading-relaxed mb-8 flex-grow">
                LangGraph-orchestrated assistant moving requests through Clarifier, Planner, Architect, and Coder agents while keeping tool execution sandboxed.
              </p>
              <div className="mb-8">
                <CoderBuddyVisualization />
              </div>
              <div className="flex gap-4">
                <a href="https://github.com/garodisk/CodeBuddy" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 font-technical text-xs font-bold text-orange hover:text-paper transition-colors w-max">
                  GITHUB <ArrowRight size={14} />
                </a>
                <a href="https://pypi.org/project/coder-buddy/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 font-technical text-xs font-bold text-paper hover:text-orange transition-colors w-max">
                  PYPI <ArrowRight size={14} />
                </a>
              </div>
            </div>

          </div>

          {/* Project 4: Multi-Agent Research Assistant (Full width) */}
          <div className="system-panel grid grid-cols-1 lg:grid-cols-2 gap-8 bg-ink text-paper p-6 md:p-10 rounded-[3rem] border border-graphite/20 hover:border-orange/30 transition-all duration-500">
            <div className="flex flex-col justify-center order-2 lg:order-1">
              <ResearchVisualization />
            </div>
            <div className="flex flex-col justify-center order-1 lg:order-2 lg:pl-8">
              <div className="font-technical text-xs text-orange uppercase tracking-wider mb-2">Stateful multi-agent research system</div>
              <h4 className="font-heading font-bold text-3xl mb-4">Multi-Agent Research Assistant</h4>
              <p className="font-body text-paper/70 leading-relaxed mb-6">
                A four-agent LangGraph workflow with human-in-the-loop clarification, live web research, and a critical validator loop that retries queries if confidence is low before synthesis.
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {['LangGraph', 'Tavily', 'Next.js', 'FastAPI', 'LangSmith'].map(t => (
                  <span key={t} className="px-3 py-1 bg-paper/10 text-paper/90 rounded-full font-technical text-xs">{t}</span>
                ))}
              </div>
              <a href="https://github.com/garodisk/multi-agent-research-agent" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 font-technical text-xs font-bold text-orange hover:text-paper transition-colors w-max">
                VIEW REPOSITORY <ArrowRight size={14} />
              </a>
            </div>
          </div>

          {/* Project 5 & 6: Data Agent and Temporal Graph (Split layout) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            <div className="system-panel flex flex-col bg-white p-6 md:p-10 rounded-[3rem] border border-ink/5 hover:border-orange/30 hover:shadow-xl transition-all duration-500">
              <div className="font-technical text-xs text-graphite uppercase tracking-wider mb-2">Multi-agent SQL + ETL system</div>
              <h4 className="font-heading font-bold text-2xl mb-4">Saket's Data Agent</h4>
              <p className="font-body text-sm text-ink/70 leading-relaxed mb-8 flex-grow">
                Routes natural-language requests to specialized SQL and ETL agents. The SQL branch features a critical green safety validation checkpoint before execution.
              </p>
              <div className="mb-8">
                <DataAgentVisualization />
              </div>
              <a href="https://github.com/garodisk/Saket-s-data-agent" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 font-technical text-xs font-bold text-orange hover:text-ink transition-colors w-max">
                VIEW REPOSITORY <ArrowRight size={14} />
              </a>
            </div>

            <div className="system-panel flex flex-col bg-ink text-paper p-6 md:p-10 rounded-[3rem] border border-graphite/20 hover:border-orange/30 transition-all duration-500">
              <div className="font-technical text-xs text-orange uppercase tracking-wider mb-2">Temporal knowledge-graph memory</div>
              <h4 className="font-heading font-bold text-2xl mb-4">Temporal Graph Assistant</h4>
              <p className="font-body text-sm text-paper/70 leading-relaxed mb-8 flex-grow">
                Stores evolving facts using Graphiti and Neo4j. Old facts are superseded gracefully, shifting from active <code>valid_at</code> to historical <code>invalid_at</code> without deletion.
              </p>
              <div className="mb-8">
                <TemporalGraphVisualization />
              </div>
              <a href="https://github.com/garodisk/temporal_graphrag" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 font-technical text-xs font-bold text-orange hover:text-paper transition-colors w-max">
                VIEW REPOSITORY <ArrowRight size={14} />
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default SelectedSystems;
