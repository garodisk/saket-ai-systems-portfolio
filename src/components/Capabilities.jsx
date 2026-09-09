import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const layers = [
  {
    name: 'AGENTIC AI / LLM SYSTEMS',
    skills: ['LangGraph', 'LangChain', 'OpenAI Agents SDK', 'Multi-Agent Systems', 'MCP', 'Function Calling', 'Structured Outputs', 'OpenRouter', 'Claude', 'Gemini', 'Groq']
  },
  {
    name: 'RETRIEVAL / MEMORY',
    skills: ['RAG', 'Embeddings', 'Qdrant', 'ChromaDB', 'BM25', 'Reciprocal Rank Fusion', 'Graphiti', 'Neo4j', 'Temporal Knowledge Graphs', 'Hybrid Search']
  },
  {
    name: 'MLOPS / PRODUCTION AI',
    skills: ['Databricks', 'MLflow', 'Model Serving', 'Batch Inference', 'Real-Time Inference', 'Drift Monitoring', 'CI/CD', 'GitHub Actions', 'Docker', 'Terraform']
  },
  {
    name: 'AI / MACHINE LEARNING',
    skills: ['PyTorch', 'TensorFlow', 'Scikit-learn', 'XGBoost', 'LightGBM', 'BERT / DistilBERT', 'NLP', 'Forecasting', 'A/B Testing', 'Causal Inference']
  },
  {
    name: 'OPTIMIZATION',
    skills: ['Pyomo', 'Mathematical Optimization', 'Pricing Systems', 'Promotion Optimization', 'Forecasting', 'Business Constraints']
  },
  {
    name: 'DATA ENGINEERING',
    skills: ['SQL', 'PostgreSQL', 'PySpark', 'Delta Lake', 'ETL Pipelines', 'Pandas', 'Data Validation', 'Prefect', 'Large-Scale Pipelines']
  },
  {
    name: 'BACKEND / FULL STACK',
    skills: ['Python', 'FastAPI', 'REST APIs', 'Next.js', 'TypeScript', 'React', 'SSE Streaming', 'Jinja2', 'Clerk', 'Gradio']
  },
  {
    name: 'CLOUD / DEPLOYMENT',
    skills: ['AWS SageMaker', 'AWS App Runner', 'ECR', 'Azure', 'GCP Cloud Run', 'Vercel', 'Render']
  }
];

const Capabilities = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo('.layer-card', 
        { y: 40, opacity: 0 },
        {
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 70%',
          },
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out'
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} id="capabilities" className="py-32 px-4 md:px-8 lg:px-16 bg-ink text-paper relative z-20 border-t border-graphite/20">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 text-center">
          <h2 className="font-technical text-orange text-sm tracking-widest uppercase mb-4">[ SYSTEM CAPABILITIES ]</h2>
          <h3 className="font-heading font-extrabold text-4xl md:text-5xl lg:text-6xl tracking-tight mb-6">
            Technical Layers.
          </h3>
          <p className="font-body text-graphite text-lg md:text-xl max-w-2xl mx-auto">
            The building blocks required to move a model from an isolated notebook into a durable production workflow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {layers.map((layer, i) => (
            <div key={i} className="layer-card bg-paper/5 border border-paper/10 rounded-3xl p-8 hover:border-orange/50 hover:bg-paper/10 transition-colors duration-500 flex flex-col h-full">
              <h4 className="font-technical text-xs text-orange font-bold uppercase tracking-widest mb-6">
                {layer.name}
              </h4>
              <div className="flex flex-wrap gap-2 mt-auto">
                {layer.skills.map((skill, j) => (
                  <span key={j} className="px-3 py-1.5 bg-ink/50 text-paper/80 border border-graphite/20 rounded font-body text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Capabilities;
