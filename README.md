# Saket Garodia — AI Systems Portfolio

Personal portfolio and interactive showcase of the AI systems I build across agentic AI, retrieval, production machine learning, optimization, and MLOps.

The site is designed as an interactive technical portfolio rather than a traditional resume page — using architecture visualizations, system telemetry, and scroll-based storytelling to explain how AI systems move from an idea to production.

## Live Site

**Coming soon:** [saketgarodia.com](https://saketgarodia.com)

## Featured Systems

The portfolio highlights projects across several areas of modern AI engineering:

### Agentic AI

- **Coder Buddy** — LangGraph-based multi-agent coding assistant
- **Multi-Agent Research Assistant** — clarification, research, validation, and synthesis workflow
- **Saket's Data Agent** — natural-language router for specialized SQL and ETL agents
- **TripMate AI** — stateful multi-agent travel planning system

### Retrieval & Memory

- **Hybrid RAG Search System** — semantic + BM25 retrieval with reciprocal-rank fusion
- **Temporal Knowledge-Graph Memory** — Graphiti + Neo4j memory with evolving temporal relationships

### Production AI / ML

The portfolio also showcases work across:

- production machine learning
- pricing and optimization
- MLOps
- model monitoring
- LLM evaluation
- AI governance
- deployment and reliability

## Design Philosophy

The portfolio is built around a simple idea:

> AI is more than the model. Production AI depends on the system around it.

The visual narrative follows three recurring stages:

**BUILD → MEASURE → HARDEN**

- **Build** — turn an ambiguous problem into a working AI system
- **Measure** — evaluate quality, latency, reliability, and business outcomes
- **Harden** — add security, guardrails, governance, observability, and production controls

## Tech Stack

- React 19
- Vite
- Tailwind CSS
- GSAP
- GSAP ScrollTrigger
- Lucide React

## Project Structure

```text
.
├── public/
│   └── images/
├── src/
│   ├── components/
│   │   ├── Hero.jsx
│   │   ├── Impact.jsx
│   │   ├── SelectedSystems.jsx
│   │   ├── Philosophy.jsx
│   │   ├── SystemProcess.jsx
│   │   ├── Experience.jsx
│   │   ├── Capabilities.jsx
│   │   ├── Writing.jsx
│   │   └── AboutContact.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── package.json
├── tailwind.config.js
└── vite.config.js