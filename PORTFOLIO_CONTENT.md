# Saket Garodia — Portfolio Content

## Content Rules

This file is the factual content source for the portfolio website.

The website builder MAY:
- shorten copy
- improve hierarchy
- rewrite wording for clarity
- turn prose into visual storytelling
- summarize long technical descriptions

The website builder MUST NOT:
- invent companies
- invent projects
- invent metrics
- invent technologies
- invent project outcomes
- invent employment dates
- invent publications
- invent GitHub links
- imply a project is production-grade if it is documented as a learning or work-in-progress project

Do not position this website as a job-search site.

Do not use:
- "Open to work"
- "Looking for opportunities"
- "Target roles"
- "Available for roles"
- "Why hire me"
- recruiter-oriented copy

The public positioning is simple:

**Saket builds AI systems.**

The site should communicate technical depth, systems thinking, hands-on building, enterprise experience, business impact, writing, and curiosity.

---

# Identity

## Name

Saket Garodia

## Primary Positioning

AI / ML engineer building production AI systems across agentic AI, RAG, machine learning, optimization, MLOps, and enterprise AI infrastructure.

## Short Positioning

I build AI systems that ship.

## Alternative Hero Lines

- Building the systems around intelligence.
- From models to production AI systems.
- AI is more than a model. I build the system around it.
- From ambiguous problems to working AI systems.

## Supporting Hero Copy

I work across agentic AI, retrieval systems, production ML, optimization, MLOps, and the engineering layers that turn models into usable systems.

## Short Bio

I am an AI / ML engineer and Senior Data Scientist with a software engineering foundation and 8+ years across machine learning, MLOps, optimization, NLP, and production AI systems.

My work spans enterprise pricing and promotion systems, large-scale targeting models, forecasting, agentic AI, RAG, model deployment, monitoring, evaluation, and full-stack AI applications.

I enjoy understanding AI systems end to end — not only the model, but also the data, tools, state, APIs, retrieval, evaluation, observability, security, deployment, and user workflow around it.

---

# Impact Signals

Use these values exactly as written.

## Annualized Business Impact

Value: **$40M+**

Label: Annualized Business Impact

## Households Modeled

Value: **35M+**

Label: Households Modeled

## Production Reliability

Value: **90%+**

Label: Production SLA / Reliability

## Experience

Value: **8+**

Label: Years Across ML + AI

---

# Operating Principles

## Principle 1

Ship models into durable workflows, not isolated notebooks.

## Principle 2

Connect model quality to business outcomes, adoption, and reliability.

## Principle 3

Design AI products with evaluation, guardrails, observability, and clear user workflows.

## Broader Systems Philosophy

AI engineering is not only about choosing a model.

Useful production AI depends on the system around the model:

- data
- context
- retrieval
- tools
- state
- APIs
- evaluation
- security
- observability
- deployment
- reliability
- business workflow

---

# Featured Systems / Projects

The website does not need to give every project equal visual weight.

For a cinematic portfolio, the strongest candidates for rich interactive treatment are:

1. Coder Buddy
2. Multi-Agent Research Assistant
3. Saket's Data Agent
4. Temporal Knowledge-Graph Memory Assistant
5. TripMate AI
6. RAG Search System

The remaining projects can appear in a compact project archive.

---

## 1. Coder Buddy

### Type

Open-source agentic coding assistant

### One-Line Summary

A LangGraph-orchestrated coding assistant that moves a user's request through specialized Clarifier, Planner, Architect, and Coder agents while keeping tool execution constrained.

### Problem

Developers need a code-building assistant that can clarify intent, plan architecture, and modify projects while keeping human approval and safer tool usage in the loop.

### Architecture

```text
User Request
    ↓
Clarifier Agent
    ↓
Planner Agent
    ↓
Architect Agent
    ↓
Coder Agent
    ↓
Sandboxed Tools
    ├── File Operations
    ├── Glob Search
    ├── Regex Search
    └── Shell
```

### Engineering

- LangGraph multi-agent orchestration
- specialized agent responsibilities
- file and search tools
- shell tooling
- dangerous-command blocking
- multi-provider LLM support
- packaged and published to PyPI

### Technologies

- LangGraph
- Python
- OpenAI
- Claude
- Gemini
- Groq
- OpenRouter
- PyPI

### Result

Published to PyPI as `coder-buddy` with multi-provider support.

### Links

GitHub: https://github.com/garodisk/CodeBuddy

PyPI: https://pypi.org/project/coder-buddy/

### Visualization Idea

Animate a request traveling through the four agents. Highlight the active agent and show tool calls branching from the Coder node.

---

## 2. Multi-Agent Research Assistant

### Type

Stateful multi-agent research system

### One-Line Summary

A four-agent LangGraph research workflow with human-in-the-loop clarification, live web research, validation loops, multi-turn state, and a full-stack chat interface.

### Problem

Research queries are often ambiguous, incomplete, or difficult to answer reliably in one pass. A stronger system should clarify vague requests, gather live evidence, validate whether findings are sufficient, retry when necessary, and synthesize a final answer.

### Architecture

```text
User Query
    ↓
Clarity Agent
    │
    ├── unclear → Human Clarification / Interrupt
    │
    └── clear
          ↓
Research Agent
    │
    ├── Tavily Live Search
    ├── Context-Aware Query Rewrite
    └── Confidence Score
          ↓
      ┌───────────────┐
      │ confidence ≥ 6│
      └───────┬───────┘
              │
              ▼
       Synthesis Agent

Low confidence:
Research
   ↓
Validator
   │
   ├── insufficient → Research retry
   │                  (up to 3 attempts)
   └── sufficient
          ↓
     Synthesis Agent
```

### State / Memory

The graph maintains:

- conversation messages
- current query
- clarity status
- research findings
- confidence score
- validation result
- research attempt count

Conversation state is isolated by `thread_id`.

### Engineering

- human-in-the-loop `interrupt()` for unclear queries
- multi-turn conversation memory
- recency-aware query understanding
- live Tavily research
- validator feedback loop
- capped retry logic
- FastAPI backend
- Next.js chat frontend
- OpenRouter model abstraction
- LangSmith tracing
- graceful fallback when optional integrations are unavailable
- deployed frontend and backend

### Technologies

- LangGraph
- LangChain
- FastAPI
- Next.js
- TypeScript
- Tavily
- OpenRouter
- LangSmith
- Vercel
- Render

### Result

Built a working four-agent research system with conditional routing, human clarification, validator retries, thread-isolated multi-turn memory, and a deployed web interface.

### Links

GitHub: https://github.com/garodisk/multi-agent-research-agent

Live Demo: https://multi-agent-research-agent-zh13-kappa.vercel.app

### Visualization Idea

Show the Clarity → Research → Validator → Synthesis graph. Animate a low-confidence result looping back from Validator to Research before finally reaching Synthesis.

---

## 3. Saket's Data Agent

### Type

Multi-agent SQL + ETL system

### One-Line Summary

A LangGraph data agent that routes natural-language requests to specialized SQL and ETL agents for database analysis, data extraction, transformation, and controlled execution.

### Problem

Natural-language data requests can mean very different things. Some require querying structured databases; others require extracting or transforming data. A single agent should not blindly execute both.

### Architecture

```text
Natural-Language Request
          ↓
     Data Agent Router
       /           \
      /             \
     ▼               ▼
SQL Analyst       ETL Analyst
     │               │
     │               ├── Extract from API
     │               ├── Transform with Pandas
     │               └── Load CSV / JSON / Parquet
     │
     ├── Curate Question
     ├── Gather Schema
     ├── Generate SQL
     ├── Safety Check
     ├── Execute Query
     └── Generate Answer
```

### SQL Agent Workflow

```text
Question
  ↓
Query Curation
  ↓
Schema Context
  ↓
SQL Generation
  ↓
Safety Validation
  ↓
Query Execution
  ↓
Answer Generation
```

### ETL Agent Workflow

```text
Request
  ↓
Tool Selection
  ↓
Code Generation
  ↓
Controlled Execution
  ↓
CSV / JSON / Parquet Output
```

### Engineering

- intent-based routing between SQL and ETL
- structured output for router decisions
- PostgreSQL schema context
- SQL generation and safety validation
- blocking of destructive SQL operations
- automatic query limiting
- API extraction
- Pandas-based transformations
- CSV, JSON, and Parquet output
- safe code execution patterns
- Pydantic state schemas
- dynamic model selection by task complexity

### Technologies

- LangGraph
- LangChain
- Python
- PostgreSQL
- Pandas
- Pydantic
- Anthropic / Claude
- OpenAI

### Result

Built a hierarchical data-agent architecture that separates database reasoning from ETL execution and adds explicit safety checks before SQL execution.

### Link

GitHub: https://github.com/garodisk/Saket-s-data-agent

### Visualization Idea

Animate the router examining a request and sending it down either the SQL branch or ETL branch. Show a green safety checkpoint before SQL execution.

---

## 4. Temporal Knowledge-Graph Memory Assistant

### Repository

`temporal_graphrag`

### Type

Temporal knowledge-graph memory system

### One-Line Summary

A personal AI assistant that stores evolving facts in a temporal knowledge graph using Graphiti and Neo4j, allowing old facts to be superseded without deleting history.

### Problem

Simple chat history and vector memory do not naturally represent changing relationships over time. A personal assistant should understand that facts can become outdated while preserving when they were previously true.

### Core Loop

```text
User Message
     ↓
RECALL
Graphiti Hybrid Search
semantic + keyword + graph
     ↓
Relevant Facts
     ↓
GENERATE
facts injected into LLM context
     ↓
Assistant Reply
     ↓
REMEMBER
entity + relationship extraction
     ↓
reconcile with existing graph
     ↓
timestamp relationships
     ↓
Neo4j Temporal Knowledge Graph
```

### Temporal Model

Relationships carry:

- `valid_at`
- `invalid_at`

When a fact changes:

```text
Old Fact
valid_at = earlier time
invalid_at = time it was superseded

New Fact
valid_at = new time
invalid_at = null
```

The historical fact is preserved rather than deleted.

### Graph Concepts

- Episodic nodes for ingested exchanges
- Entity nodes for people, places, and things
- `MENTIONS` relationships for provenance
- `RELATES_TO` relationships for extracted facts
- user namespaces via `group_id`

### Engineering

- Graphiti memory layer
- Neo4j graph storage
- temporal fact handling
- provenance from episodes to entities
- entity / relationship reconciliation
- hybrid semantic + keyword + graph recall
- explicit recall → generate → remember loop
- Docker Compose for Neo4j
- deliberately minimal architecture without an agent framework

### Technologies

- Graphiti
- Neo4j
- OpenAI
- Python
- Docker
- Docker Compose

### Result

Built a working temporal-memory assistant where updated facts supersede prior relationships while retaining historical validity windows in the graph.

### Link

GitHub: https://github.com/garodisk/temporal_graphrag

### Visualization Idea

Show a knowledge graph forming over time. When a fact changes, fade the previous edge into a historical state with an `invalid_at` timestamp while a new active edge appears.

---

## 5. TripMate AI

### Type

Stateful multi-agent travel planner

### Status

Work in progress

### One-Line Summary

A LangGraph travel planner that combines live flight information, hotel web search, LLM itinerary generation, and PostgreSQL-backed conversation checkpoints behind a FastAPI interface.

### Problem

Travel planning requires combining different kinds of information — flight status data, hotel discovery, itinerary reasoning, and multi-turn user context — into one coherent workflow.

### Architecture

```text
Natural-Language Trip Request
          ↓
     Flight Agent
          │
          └── AviationStack live flight data
          ↓
      Hotel Agent
          │
          └── Tavily hotel search
          ↓
    Itinerary Agent
          │
          └── OpenRouter LLM
          ↓
      Final Agent
          │
          └── formatted trip plan
```

### State

`TravelState` tracks:

- messages
- user query
- flight results
- hotel results
- itinerary
- LLM call count

### Memory / Persistence

LangGraph conversation state is checkpointed in PostgreSQL.

A `thread_id` allows later requests to resume the same conversation.

The browser stores the thread identifier in local storage.

### Application Layer

```text
Browser UI
   ↓
POST /api/travel
   ↓
FastAPI
   ↓
LangGraph Travel Workflow
   ↓
PostgreSQL Checkpointer
```

### Engineering

- sequential multi-agent orchestration
- live external flight API
- hotel web search
- LLM itinerary generation
- stateful multi-turn conversations
- PostgreSQL LangGraph checkpointing
- FastAPI JSON API
- Jinja frontend
- Docker containerization

### Technologies

- LangGraph
- FastAPI
- PostgreSQL
- OpenRouter
- AviationStack
- Tavily
- Jinja2
- Docker
- Python

### Important Accuracy Note

AviationStack provides live / status flight information, not ticket fares. Do not describe this project as a flight-pricing engine.

### Link

GitHub: https://github.com/garodisk/sakets_travel_agent

### Visualization Idea

Animate a travel request moving through Flights → Hotels → Itinerary → Final Plan, while a side panel shows the same `thread_id` being checkpointed into PostgreSQL.

---

## 6. RAG Search System

### Type

Hybrid search + streaming AI Q&A

### One-Line Summary

A full-stack RAG application combining semantic retrieval and lexical search over a large Medium article corpus.

### Problem

Users need both semantic recall and keyword precision when searching a large technical article corpus.

### Architecture

```text
Medium Articles / RSS
        ↓
Continuous Ingestion
        ↓
Chunk / Embed
        ↓
Qdrant

User Query
   ↓
┌──────────────┬─────────────┐
│ Vector Search│ BM25 Search │
└──────┬───────┴──────┬──────┘
       └───────┬──────┘
               ↓
      Reciprocal Rank Fusion
               ↓
          Ranked Context
               ↓
              LLM
               ↓
        Streaming Answer
```

### Engineering

- BGE-base embeddings
- BM25 lexical retrieval
- reciprocal-rank fusion
- Qdrant vector database
- FastAPI backend
- Next.js frontend
- continuous RSS ingestion
- Prefect orchestration
- FastEmbed incremental embedding
- streaming AI Q&A

### Technologies

- Next.js
- FastAPI
- Qdrant
- BGE
- BM25
- RRF
- Prefect
- FastEmbed
- GCP Cloud Run

### Result

Supports streaming AI Q&A over 50K+ Medium articles with automated continuous ingestion and incremental embedding updates.

### Links

GitHub: https://github.com/garodisk/medium-ai-blog-search

Live Demo: https://medium-ai-blog-search.vercel.app

### Visualization Idea

Split the query into Vector Search and BM25 lanes, then visually merge both ranked lists through RRF before sending context to the LLM.

---

# Additional Project Archive

## AI Consultation Assistant

### Type

Production-style GenAI SaaS

### Problem

Consultation notes are often unstructured and slow to convert into reliable client-ready follow-ups.

### Solution

Built a full-stack GenAI SaaS that converts notes into structured summaries, action items, and email drafts using real-time SSE streaming, structured LLM outputs, Clerk authentication, and subscription-gated access.

### Engineering / Result

Containerized with Docker and deployed to AWS App Runner via ECR with CI/CD, environment management, logging, and a Next.js / FastAPI architecture.

### Technologies

- Next.js
- FastAPI
- OpenAI
- Clerk
- Docker
- AWS App Runner
- ECR

---

## IT Ticket Classifier

### Type

BERT fine-tuning + model compression

### Problem

IT tickets need accurate classification while keeping deployment footprint practical.

### Solution

Fine-tuned BERT-base on 47.8K IT tickets, then compressed the model through knowledge distillation into DistilBERT and FP16 / INT4 NF4 quantization.

### Result

- 88.2% accuracy
- 87.9% macro-F1
- memory reduced 74%, from 255 MB to 66 MB
- less than 0.1% accuracy loss

### Technologies

- PyTorch
- Hugging Face
- BERT
- DistilBERT
- Quantization
- Knowledge Distillation

---

## LLM Alignment Pipeline

### Type

Fine-tuning + preference optimization

### Problem

Large open-source models need practical alignment workflows that can run efficiently without full-model training.

### Solution

Applied QLoRA-based supervised fine-tuning to Llama-2-7B, then aligned Mistral-7B with DPO on 12.8K preference pairs without a reward model.

### Result

- perplexity reduced by 71%
- 40M trainable parameters out of 6.8B
- DPO final loss: 0.040

### Technologies

- QLoRA
- SFT
- DPO
- Llama-2-7B
- Mistral-7B
- PEFT

---

## Build & Learn: GPT from Scratch

### Type

Educational transformer implementation

### Problem

Understanding LLMs deeply requires implementing core transformer components rather than only calling APIs.

### Solution

Implemented a character-level GPT in PyTorch with multi-head self-attention, LayerNorm, residual connections, and a complete training loop.

### Result

Published as a companion GitHub repository and four-part Medium learning series.

### Technologies

- PyTorch
- Transformers
- Self-Attention
- Language Modeling

### Links

GitHub: https://github.com/garodisk/GPT-from-scratch

Medium: https://medium.com/@saketgarodia

---

# Professional Systems / Experience

## 84.51 / Kroger

### Role

Senior Data Scientist — Machine Learning / MLOps

### Period

Jan 2022 - Present

### Location

Chicago, IL

### Selected Work

- Built and scaled production pricing and promotion optimization systems generating millions of item-location recommendations across enterprise retail workflows, contributing **$40M+ in annual incremental profit**.
- Led pickup, delivery, and eCommerce lookalike / lookahead models with **0.84 AUC**, scoring **35M+ households** and supporting **$20M+ in potential value** through Databricks, MLflow, drift monitoring, CI/CD, production testing, and A/B measurement.
- Re-architected digital engagement segmentation across **28M+ households**, replacing a legacy rules-based pillar system used for personalized digital coupon campaigns.
- Built RPO-Upkeep, a repricing engine translating cost changes, competitor prices, size parity, brand spread, cost constraints, and competitive reactions into production logic with **$5M+ potential annual value**.
- Won a 2025 Innovation Days hackathon with **Forecast API Copilot**, a multi-agent GenAI system using OpenAI Agents SDK, GPT-4o, RAG over ChromaDB, Pydantic validation, internal forecasting APIs, and Gradio.
- Sustained **90%+ SLA** across millions of monthly optimization runs while partnering with product, business, engineering, and executive stakeholders.

### Technologies

- Databricks
- MLflow
- PySpark
- SQL
- Pyomo
- Azure
- GitHub Actions
- OpenAI Agents SDK

---

## Asurion

### Role

Data Scientist — Machine Learning / NLP

### Period

Oct 2020 - Dec 2021

### Location

Remote

### Selected Work

- Reduced Home+ product churn by **20%+** with a churn-risk model using 100+ customer, engagement, and POS features, deployed on AWS SageMaker.
- Improved call-center messaging sales per 100 contacts by **15%** by fine-tuning and deploying a BERT-based sentiment model on call transcripts for real-time agent recommendations.
- Built NLP capabilities across sentiment, keyword detection, topic mining, call routing, and live-agent reply suggestions.

### Technologies

- AWS SageMaker
- BERT
- NLP
- Python
- Model Deployment

---

## Edelweiss Financial Services

### Role

Associate — Machine Learning / Data Science

### Period

Apr 2018 - Aug 2019

### Location

Mumbai, India

### Selected Work

- Reduced loan defaults by **30%+** with credit-risk models using demographic, loan-purpose, and geospatial features.
- Developed customer profiling and segmentation with PCA, K-Means, and DBSCAN and delivered Tableau dashboards to senior stakeholders.

### Technologies

- Gradient Boosting
- Random Forest
- PCA
- K-Means
- DBSCAN
- Tableau

---

## Oracle

### Role

Application Engineer — Full Stack

### Period

Jul 2014 - Aug 2015

### Location

Bangalore, India

### Selected Work

Built features for Oracle CRM Cloud across data-model design, frontend development, service-layer integrations, and Jira-driven product enhancements.

### Technologies

- Full-stack Engineering
- CRM Cloud
- Service Integrations
- Jira

---

# Technical Capabilities

Avoid presenting these as one giant badge wall. Group them into system layers.

## Agentic AI / LLM Systems

- LangGraph
- LangChain
- OpenAI Agents SDK
- Multi-Agent Systems
- MCP
- Function Calling
- Structured Outputs
- OpenRouter
- Claude
- Gemini
- Groq

## Retrieval / Memory

- RAG
- Embeddings
- Qdrant
- ChromaDB
- BM25
- Reciprocal Rank Fusion
- Graphiti
- Neo4j
- Temporal Knowledge Graphs
- Hybrid Search

## AI / Machine Learning

- PyTorch
- TensorFlow
- Scikit-learn
- XGBoost
- LightGBM
- BERT / DistilBERT
- NLP
- Forecasting
- A/B Testing
- Causal Inference

## MLOps / Production AI

- Databricks
- MLflow
- Model Serving
- Batch Inference
- Real-Time Inference
- Drift Monitoring
- CI/CD
- GitHub Actions
- Docker
- Terraform

## Data Engineering

- SQL
- PostgreSQL
- PySpark
- Delta Lake
- ETL Pipelines
- Pandas
- Data Validation
- Prefect
- Large-Scale Pipelines

## Optimization

- Pyomo
- Mathematical Optimization
- Pricing Systems
- Promotion Optimization
- Forecasting
- Business Constraints

## Cloud / Deployment

- AWS SageMaker
- AWS App Runner
- ECR
- Azure
- GCP Cloud Run
- Vercel
- Render

## Backend / Full Stack

- Python
- FastAPI
- REST APIs
- Next.js
- TypeScript
- React
- SSE Streaming
- Jinja2
- Clerk
- Gradio

## Evaluation / Observability Concepts

Use only when relevant to documented work:

- MLflow
- LangSmith
- tracing
- production monitoring
- model evaluation
- guardrails
- observability

---

# Writing

## Build and Learn GPT From Scratch

### Type

Featured four-part series

### Description

A four-part PyTorch series explaining transformer fundamentals by implementing a character-level GPT with attention, LayerNorm, residual connections, and a full training loop.

### Topics

- LLMs
- Transformers
- PyTorch
- Deep Learning

### Links

Part 1:
https://saketgarodia.medium.com/build-and-learn-gpt-from-scratch-part-1-87f63c7be55d

Part 2:
https://saketgarodia.medium.com/build-and-learn-gpt-from-scratch-part-2-cc6eaa98ce38

Part 3:
https://saketgarodia.medium.com/build-and-learn-gpt-from-scratch-part-3-aa572e103e1d

Part 4:
https://saketgarodia.medium.com/build-and-learn-gpt-from-scratch-part-4-a9f4845c6b36

---

## From Zero to API: The Data Scientist's Guide to FastAPI

### Type

Model serving / backend engineering

### Description

A practical guide for turning data-science work into API-backed applications with FastAPI.

### Link

https://saketgarodia.medium.com/from-zero-to-api-the-data-scientists-guide-to-fastapi-9ae3bb662f5a

---

## Market Basket Analysis on 3 Million Orders from Instacart

### Type

Large-scale analytics

### Description

Market basket analysis using Spark on the Instacart orders dataset.

### Topics

- Spark
- Analytics
- Retail
- Data Engineering

### Link

https://medium.com/@saketgarodia

---

## Image Classification using CNN and Transfer Learning

### Type

Deep learning

### Description

Applied deep-learning article covering convolutional neural networks and transfer-learning approaches.

### Topics

- Deep Learning
- CNNs
- Transfer Learning
- Computer Vision

### Link

https://medium.com/@saketgarodia

---

# Open Source

## GitHub

Profile:
https://github.com/garodisk

The portfolio should emphasize the quality and variety of systems rather than a raw repository count.

## Coder Buddy

Published Python package.

GitHub:
https://github.com/garodisk/CodeBuddy

PyPI:
https://pypi.org/project/coder-buddy/

## Multi-Agent Research Assistant

GitHub:
https://github.com/garodisk/multi-agent-research-agent

## Saket's Data Agent

GitHub:
https://github.com/garodisk/Saket-s-data-agent

## TripMate AI

GitHub:
https://github.com/garodisk/sakets_travel_agent

## Temporal Knowledge-Graph Memory Assistant

GitHub:
https://github.com/garodisk/temporal_graphrag

## RAG Search System

GitHub:
https://github.com/garodisk/medium-ai-blog-search

---

# Education

## University of Cincinnati

Credential:
M.S. Business Analytics

Period:
Aug 2019 - Aug 2020

Details:
GPA 4.0 / 4.0, Graduate Merit Scholarship. Focused on applied analytics, machine learning, and data-driven decision systems.

---

## Indian Institute of Foreign Trade (IIFT), New Delhi

Credential:
MBA, International Business

Period:
Jul 2016 - Mar 2018

Details:
Business and strategy foundation for applied analytics and product impact.

---

## National Institute of Technology (NIT), Calicut

Credential:
B.Tech, Computer Science & Engineering

Period:
Jul 2010 - Jun 2014

Details:
Computer science foundation across software engineering and systems.

---

# Continuous Learning

Keep this concise on the website. It should signal curiosity rather than become a long certificate list.

## Learning Focus

- Computer Science
- Artificial Intelligence
- Machine Learning
- Deep Learning
- MLOps
- AI / LLM Systems
- Agentic AI

## Learning Philosophy

I stay current through structured AI courses, hands-on projects, conferences, papers, technical communities, and self-directed learning.

## Selected Coursework / Certifications

- AI Engineer Agentic Track: The Complete Agent & MCP Course — Udemy
- LLM Engineering: Master AI, Large Language Models & Agents — Udemy
- AI coding / Claude Code coursework
- LLMOps in Production coursework
- Neural Networks and Deep Learning — DeepLearning.AI
- Improving Deep Neural Networks — DeepLearning.AI
- Stanford University Machine Learning
- Generative AI fundamentals

Do not make certifications a dominant part of the homepage.

---

# Personal

## Short Title

Curious builder, traveler, and lifelong AI learner.

## Description

I am a curious builder who loves to travel, meet people, and keep learning. I have studied across three continents, visited 25+ countries, attend AI conferences and builder events, and stay close to the fast-moving AI ecosystem through projects, talks, papers, courses, and technical communities.

## Highlights

- Studied across three continents
- Visited 25+ countries
- Attend AI conferences and builder events
- Passionate about AI, LLM systems, and continuous self-learning

## Image Guidance

If the course project includes personal images, place them under:

`public/images/`

Use real personal photos rather than AI-generated portraits.

---

# Public Links

GitHub:
https://github.com/garodisk

LinkedIn:
https://www.linkedin.com/in/saket-garodia

Medium:
https://medium.com/@saketgarodia

PyPI — Coder Buddy:
https://pypi.org/project/coder-buddy/

---

# Contact

Primary contact methods:

- Email
- LinkedIn
- GitHub

Email:
saketgarodia1@gmail.com

The website should invite conversation without sounding like a job-search funnel.

Preferred CTA language:

- Let's Talk
- Start a Conversation
- Explore My Systems
- Ask About a Project
- Connect

Avoid:

- Hire Me
- Recruit Me
- Open to Roles
- Looking for Opportunities

---

# Website Content Priority

If the page becomes too long, prioritize content in this order:

1. Hero / positioning
2. Impact signals
3. Featured systems
4. AI systems philosophy
5. Professional experience
6. Technical capabilities
7. Writing / open source
8. About / personal
9. Education / continuous learning
10. Contact

The portfolio should feel like an AI systems portfolio first and a resume second.
