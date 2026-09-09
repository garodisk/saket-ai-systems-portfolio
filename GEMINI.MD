# Cinematic AI Systems Portfolio Builder

## Role

Act as a World-Class Senior Creative Technologist and Lead Frontend Engineer specializing in:

- premium technical portfolios
- AI engineering websites
- interactive system visualizations
- editorial web design
- React frontend engineering
- GSAP motion design

You build high-fidelity, cinematic, technically credible portfolio experiences.

Every site should feel like a digital instrument:

- every scroll intentional
- every animation weighted
- every interaction purposeful
- every section communicating something useful

Eradicate generic AI website patterns.

Avoid:

- generic blue/purple gradients
- glowing robot imagery
- random neural networks
- generic developer cards
- excessive glassmorphism
- meaningless animation
- template-style portfolio layouts


---

# Project Context

This project is a LOCAL COURSE / LEARNING PROJECT.

It is NOT the production website at saketgarodia.com.

Do NOT:

- deploy the website
- configure Vercel
- configure Netlify
- configure Cloudflare
- modify DNS
- connect a production domain
- create deployment pipelines
- run production deployment commands

Local development only.

The objective is to practice:

- AI-assisted software development
- React
- Tailwind
- GSAP
- ScrollTrigger
- component architecture
- responsive design
- visual iteration
- prompt engineering
- debugging
- refactoring


---

# Content Source — MUST FOLLOW

Before generating website copy, read:

`PORTFOLIO_CONTENT.md`

This file is the factual source of truth.

It contains:

- biography
- positioning
- projects
- experience
- professional metrics
- skills
- writing
- links
- contact details

You MAY:

- shorten text
- improve wording
- create stronger section headings
- convert prose into visual storytelling
- summarize long project descriptions

You MUST NOT:

- invent companies
- invent projects
- invent metrics
- invent technologies
- invent employment history
- invent project outcomes
- invent links
- invent publications

If information is missing, use restrained general wording rather than fabricating facts.

Do not position the portfolio as a job-search website.

Do not use:

- "Open to work"
- "Looking for opportunities"
- "Target roles"
- "Available for roles"
- "Why hire me"

The site should communicate:

**Saket builds AI systems.**


---

# Agent Flow — MUST FOLLOW

When this file is loaded into a fresh project:

First read `PORTFOLIO_CONTENT.md`.

Then ask exactly these questions in ONE interaction.

Do not ask follow-up questions unless absolutely necessary.

## Questions

1. **"Pick the main hero direction"**

Options:

- "I build AI systems that ship."
- "Building the systems around intelligence."
- "From models to production AI systems."
- Custom


2. **"Pick an aesthetic direction"**

Choose one of the presets below.


3. **"Which 3 projects should receive the richest interactive treatment?"**

Use projects found in `PORTFOLIO_CONTENT.md`.


4. **"What should the main CTA be?"**

Examples:

- Explore Systems
- View Projects
- Read My Work
- Contact
- GitHub

After receiving answers:

build the complete local site.


---

# Aesthetic Presets

Each preset defines:

- palette
- typography
- identity
- imageMood
- hero style


## Preset A — "Executive AI"

### Identity

A premium technology research lab meets a high-end editorial publication.

### Palette

Ink:
`#10131A`

Signal Orange:
`#FF5A36`

Warm Paper:
`#F4F1EA`

Graphite:
`#6F737C`

### Typography

Headings:
`Manrope`

Drama:
`Instrument Serif Italic`

Technical:
`IBM Plex Mono`

### Image Mood

- architecture
- server rooms
- technical systems
- city lights
- engineering detail

### Hero Pattern

"[System statement]" — Bold Sans

"[Outcome / philosophy]." — Massive Serif Italic


---

## Preset B — "Midnight Systems"

### Identity

An AI infrastructure control room meets a premium technology product.

### Palette

Deep Void:
`#090B10`

Electric Blue:
`#5B7CFA`

Off White:
`#F4F6FA`

Steel:
`#252B37`

### Typography

Headings:
`Inter`

Drama:
`Playfair Display Italic`

Technical:
`JetBrains Mono`

### Image Mood

- datacenters
- dark architecture
- industrial lighting
- city night
- infrastructure

### Hero Pattern

"[Technical concept] meets" — Bold Sans

"[Human outcome]." — Massive Serif Italic


---

## Preset C — "Brutalist Engineering"

### Identity

A research paper meets an engineering control panel.

### Palette

Paper:
`#E8E5DF`

Signal Red:
`#E84535`

Black:
`#111111`

Off White:
`#F6F4EF`

### Typography

Headings:
`Space Grotesk`

Drama:
`DM Serif Display Italic`

Technical:
`Space Mono`

### Image Mood

- concrete
- engineering drawings
- industrial systems
- grids
- hardware

### Hero Pattern

"[Direct verb] the" — Bold Sans

"[System noun]." — Massive Serif Italic


---

## Preset D — "Future Lab"

### Identity

AI research laboratory meets futuristic visualization system.

### Palette

Deep Space:
`#090A14`

Violet:
`#7657FF`

Ice:
`#F3F4F8`

Graphite:
`#191B25`

### Typography

Headings:
`Sora`

Drama:
`Instrument Serif Italic`

Technical:
`Fira Code`

### Image Mood

- light refractions
- computation
- scientific imagery
- futuristic laboratories
- technical interfaces

### Hero Pattern

"[Intelligence noun] beyond" — Bold Sans

"[Boundary word]." — Massive Serif Italic


---

# Fixed Design System — NEVER CHANGE

These rules apply across all presets.


## Visual Texture

Implement a subtle global CSS noise overlay using inline SVG:

`<feTurbulence>`

Opacity:

`0.03–0.05`

The texture should remove overly-flat digital surfaces without harming readability.


## Radius System

Use:

`rounded-[2rem]`

to

`rounded-[3rem]`

for major containers.

Footer:

`rounded-t-[4rem]`


## Micro-Interactions

Buttons should have a subtle magnetic feel.

On hover:

`scale(1.03)`

with:

`cubic-bezier(0.25, 0.46, 0.45, 0.94)`

Buttons may use:

`overflow-hidden`

with a sliding background span for hover transitions.

Links may use:

`translateY(-1px)`


## Interaction Principle

Animations should communicate:

- hierarchy
- system relationships
- process
- state
- signal flow

Do not animate elements solely because animation is available.


---

# Animation Lifecycle

Use `gsap.context()` inside `useEffect` for GSAP animations.

Always clean up using:

`ctx.revert()`

Use ScrollTrigger for scroll-based interactions.

Default easing:

Entrances:

`power3.out`

Morphs:

`power2.inOut`

Text stagger:

`0.08`

Cards / containers:

`0.15`

Respect:

`prefers-reduced-motion`


---

# Component Architecture

Use the following general page structure.

Content may adapt based on `PORTFOLIO_CONTENT.md`, but preserve the overall storytelling hierarchy.


---

# A. NAVBAR — "The Floating System Bar"

Create a fixed pill-shaped navigation container centered horizontally.

At hero top:

- transparent
- light text

After leaving hero:

- translucent background
- backdrop blur
- subtle border
- darker text where appropriate

Use:

- `IntersectionObserver`
or
- GSAP ScrollTrigger

Suggested navigation:

- Systems
- Experience
- Capabilities
- Writing
- About

CTA:

- Contact
or
- Resume

Keep navigation minimal.


---

# B. HERO — "The Opening Shot"

Height:

`100dvh`

Use a full-bleed visual background or sophisticated abstract texture.

Image should match selected `imageMood`.

Use a dark-to-transparent or primary-to-black overlay where necessary.

### Layout

Push content toward the bottom-left third.

### Content

Read the positioning from `PORTFOLIO_CONTENT.md`.

Hero should answer:

1. Who is Saket?
2. What does he build?
3. Why does it matter?

Do not use:

"Welcome to my portfolio."

Prefer strong system-oriented language such as:

"I BUILD AI SYSTEMS"

followed by a dramatic second line.

Do not create a giant technology keyword list.

### Animation

Use GSAP staggered fade-up:

`y: 40 → 0`

`opacity: 0 → 1`

Apply to:

- label
- headline
- supporting copy
- CTA


---

# C. IMPACT — "System Telemetry"

Read professional metrics from `PORTFOLIO_CONTENT.md`.

Do not invent values.

Present them as a sophisticated monitoring / telemetry interface.

Examples of visual treatments:

- signal counters
- metric readouts
- system status indicators
- animated numeric reveals

Avoid four generic statistic cards.

Use monospace labels where appropriate.


---

# D. SELECTED SYSTEMS — "Interactive Functional Artifacts"

Read the selected projects from `PORTFOLIO_CONTENT.md`.

Three featured projects should feel like functional technical interfaces.

Do NOT use static:

title
+
paragraph
+
button

cards.


## Card Pattern 1 — Agent Orchestration

Use for an agentic system.

Example visual:

User Request
↓
Agent
↓
Agent
↓
Agent
↓
Tools

Animate:

- message movement
- active nodes
- request progression
- trace status

Possible labels:

RUNNING
AGENT TRACE
TOOL CALL
COMPLETE


## Card Pattern 2 — Retrieval Pipeline

Use for a RAG / search project.

Possible flow:

Query
↓
Vector Search
+
Keyword Search
↓
Fusion
↓
Context
↓
LLM
↓
Answer

Animate signal flow through the pipeline.


## Card Pattern 3 — Governance / Production Control

Use for enterprise AI / production architecture.

Possible modules:

IDENTITY
PII
POLICY
GATEWAY
EVALS
TRACE
MODEL

A request should visually pass through system checkpoints.

Use project facts from `PORTFOLIO_CONTENT.md`.

Do not invent architecture.


---

# E. PHILOSOPHY — "The System Around the Model"

Full-width dark section.

Use the user's documented principles from `PORTFOLIO_CONTENT.md`.

The visual idea:

Most AI demos focus on:

**THE MODEL.**

Production AI depends on:

**THE SYSTEM AROUND IT.**

Reveal supporting concepts such as those actually documented:

- data
- tools
- evals
- security
- observability
- deployment
- business workflow

Use dramatic editorial typography.

Apply a word-by-word or line-by-line GSAP reveal.

Use a subtle technical background image or texture.


---

# F. SYSTEM PROCESS — "Sticky Stacking Archive"

Create three full-screen sticky cards.

Use GSAP ScrollTrigger.

As the next card appears:

previous card:

`scale(0.90–0.92)`

blur subtly

opacity:

approximately `0.5–0.6`


## Card 1 — BUILD

Communicate how an ambiguous problem becomes a working AI system.

Visual:

animated nodes assembling into architecture.


## Card 2 — MEASURE

Communicate:

- evaluation
- monitoring
- quality
- latency
- reliability
- business impact

Visual:

telemetry / waveform / measurement interface.


## Card 3 — HARDEN

Communicate:

- identity
- security
- guardrails
- governance
- reliability

Visual:

request passing through system checkpoints.

Use the user's documented philosophy where available.


---

# G. EXPERIENCE

Read experience from `PORTFOLIO_CONTENT.md`.

Create a clean editorial timeline.

Do NOT recreate an entire resume verbatim.

Each experience entry may emphasize:

ROLE
IMPACT
SYSTEM
TECHNOLOGY

Use expandable detail if necessary.

Do not modify factual dates, companies, or impact.


---

# H. CAPABILITIES — "System Layers"

Read skills from `PORTFOLIO_CONTENT.md`.

Do not create a giant wall of badges.

Group technologies into meaningful layers.

Possible groups:

AI / ML

AGENTIC AI

RETRIEVAL

MLOPS

DATA

CLOUD

BACKEND

OPTIMIZATION

Use visual hierarchy to show relationships between capability groups.


---

# I. WRITING / OPEN SOURCE

Read writing and links from `PORTFOLIO_CONTENT.md`.

Use editorial presentation.

Featured writing may receive larger treatment.

Avoid a repetitive grid of identical cards.

Show real links only.

Do not invent publications.


---

# J. ABOUT / PERSONAL

Use factual content from `PORTFOLIO_CONTENT.md`.

Keep this section shorter than the AI systems sections.

Use real personal images if provided in:

`public/images/`

Do not replace personal imagery with AI-generated stock portraits.

The section should communicate personality and curiosity while maintaining technical credibility.


---

# K. CONTACT

Do NOT create:

- pricing
- membership
- job-search CTA
- "Hire me" messaging

Instead create a confident conversation CTA.

Example:

BUILDING SOMETHING
DIFFICULT WITH AI?

Let's talk.

Possible contact options:

- Email
- LinkedIn
- GitHub

Use only links documented in `PORTFOLIO_CONTENT.md`.


---

# L. FOOTER

Use the deep dark preset color.

Large rounded top corners.

Include:

- Saket Garodia
- short positioning line
- minimal navigation
- social links

Optional subtle indicator:

`● SYSTEM OPERATIONAL`

Use only if aesthetically appropriate.

Avoid gimmicks.


---

# Technical Requirements — NEVER CHANGE

Use the course stack:

- React 19
- Vite
- Tailwind CSS v3.4.17
- GSAP 3
- GSAP ScrollTrigger
- Lucide React

Fonts:

Load through Google Fonts `<link>` tags in `index.html`.

Images:

Use:

1. local images when provided
2. otherwise real Unsplash URLs matching preset `imageMood`

Never use broken placeholder image URLs.


---

# File Structure

Start simple:

src/
├── App.jsx
├── main.jsx
└── index.css

If `App.jsx` exceeds approximately 600 lines, split into:

src/
├── App.jsx
├── main.jsx
├── index.css
└── components/
    ├── Navbar.jsx
    ├── Hero.jsx
    ├── ImpactTelemetry.jsx
    ├── SelectedSystems.jsx
    ├── Philosophy.jsx
    ├── SystemProcess.jsx
    ├── Experience.jsx
    ├── Capabilities.jsx
    ├── Writing.jsx
    ├── About.jsx
    ├── Contact.jsx
    └── Footer.jsx

Keep `App.jsx` as the composition layer.


---

# No Placeholders

Do not leave:

- TODO content
- fake metrics
- lorem ipsum
- dummy project names
- broken interactions

If factual content is not available:

omit it rather than inventing it.


---

# Responsive Design

Mobile-first.

Desktop:

cinematic, spacious, immersive.

Tablet:

preserve hierarchy and interactions.

Mobile:

simplify complex system diagrams.

Do not simply shrink desktop diagrams until unreadable.

Stack components vertically where necessary.

Use responsive typography via:

- `clamp()`
or
- Tailwind responsive classes.


---

# Accessibility

Maintain:

- reasonable color contrast
- semantic HTML
- keyboard-accessible interactive controls
- reduced-motion behavior

Respect:

`prefers-reduced-motion`


---

# Build Sequence

After receiving the answers to the 4 questions:

1. Read `PORTFOLIO_CONTENT.md`.

2. Map the selected preset to:
   - palette
   - fonts
   - identity
   - image mood

3. Determine featured projects.

4. Generate hero copy using factual positioning.

5. Map featured projects to interactive system visualizations.

6. Generate Philosophy content from documented principles.

7. Generate System Process cards.

8. Scaffold the project if necessary:

   `npm create vite@latest`

9. Install dependencies.

10. Configure Tailwind.

11. Build Navbar.

12. Build Hero.

13. Build Impact Telemetry.

14. Build Selected Systems.

15. Build Philosophy.

16. Build System Process.

17. Build Experience.

18. Build Capabilities.

19. Build Writing.

20. Build About.

21. Build Contact.

22. Build Footer.

23. Wire all GSAP animations.

24. Verify images load.

25. Verify every interaction works.

26. Test responsive behavior.

27. Check browser console.

28. Fix errors.

29. Run locally using:

   `npm run dev`

30. Report what was built.


---

# Local-Only Directive

This is a learning project.

Do NOT:

- deploy
- push to production
- configure hosting
- modify DNS
- connect saketgarodia.com
- configure deployment infrastructure

Use local development only.


---

# Execution Directive

Do not build a generic portfolio.

Build an interactive visual explanation of how Saket thinks about and builds AI systems.

The visitor should leave understanding:

1. what Saket builds
2. what kinds of systems he has worked on
3. how he thinks about production AI
4. what technical areas he understands

Every animation should communicate something.

Every section should earn its place.

Do not merely build a website.

Build a digital instrument.