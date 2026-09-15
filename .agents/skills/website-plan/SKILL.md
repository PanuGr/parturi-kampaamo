---
name: website-plan
description: Use this skill for any task that involves website planning/writing. Delegates specialized sub-tasks to dedicated skill modules.
---

<context-preservation>

## State Management & Model Handoff Protocol
Because different models execute different phases of this build, you MUST maintain a state-tracking file at `docs/brief.md`. 
- **If `docs/brief.md` exists:** Read it completely before doing anything else. It is your ultimate source of truth for project state.
- **Before ending any session/phase:** You must update or generate a fresh `docs/brief.md` using the strict template below. Do not consider a phase complete until this file is written.

```md
# Project Brief & State Transfer: [Client Name]
## 1. Current Status
| Metric | Value |
| --- | --- |
| **Last Completed Phase** | [e.g., Phase 2.5 — Prototyping] |
| **Current Project Mode** | [Strategy / Design / Build] |
| **Last Active Model** | [e.g., Claude Sonnet Latest] |

---

## 2. Immutable Decisions Made
*(List definitive choices that the incoming model must NOT change or re-ask)*
- **Target Audience:** [Details]
- **Primary Goal:** [Details]
- **Core Visual Style:** [Details]

---

## 3. Current File Registry & Manifest
*(Tracks what has actually been written to disk so far)*
- [ ] `style.md` — [Status: Approved / Pending / Missing]
- [ ] `src/styles/_variables.scss` — [Status: Tokens Mapped / Missing]
- [ ] `src/components/Navbar.astro` — [Status: Extracted from Stitch / Missing]

---

## 4. Immediate Next Steps for the Incoming Model
1. [Clear tactical step 1]
2. [Clear tactical step 2]
```

</context-preservation>

---

## Phase 1 — Site Strategy

### 1.1 Gather Project Context

Before mapping structure, confirm the following:

| Question | Why It Matters |
|---|---|
| What type of business is this? | Shapes every page and call to action |
| Who is the primary audience? | Determines language, trust signals, and depth |
| What is the single primary goal? (leads / sales / bookings / portfolio) | Defines the conversion path |
| What is the tone? (modern / minimal / warm / trustworthy / playful) | Drives design and copy decisions |

---

### 1.2 Map the Site Structure

Once context is confirmed, produce:

1. **Page list** — every page the site needs, with a one-sentence purpose for each
2. **Navigation hierarchy** — primary nav, secondary nav (footer), and any utility links
3. **Site structure diagram** — a simple text tree showing parent and child pages

**Lean Web principle:** Default to fewer pages with stronger content. A 3-page site
that converts beats a 10-page site that confuses.

---

### 1.3 Design the User Journey

Map the path from first visit to final action:

```
Entry point (search / referral / social)
    → Hero section: problem + promise
    → Trust signal: proof or social proof
    → Service/offer clarity
    → Objection handled
    → CTA
    → Thank you / next step
```

Label where each page sits on this journey. Every page should either move the visitor
forward or answer a question that was blocking them.

---

### 1.4 Define Page Requirements

For each page, list:

- **Primary goal** (what the visitor should do or feel after reading)
- **Must-have sections** (what content blocks are required to achieve the goal)
- **CTA** (the single action this page asks for)

Avoid giving pages multiple goals. One page, one job.

### Phase Handoff Requirement (MANDATORY)
Write full site structure, user journey, and page requirements to `docs/plan.md`.

---

## Phase 2 — Copywriting & Content Strategy

For all website narrative copywriting, delegate execution entirely to the specialized skill below.
Do not write copy natively in this orchestrator.

### 2.1 Core Website Copy & Brand Positioning

> **Skill Delegation:** For outcome-focused services copy, landing page hooks, high-converting value propositions, brand stories, founder profiles, core missions, and differentiators, invoke and use: `.agents/skills/website-copy-specialist`

### 2.2 Service/Offering/Pricing Pages

> **Skill Delegation:** For specific service/offering pages, package descriptions, tiered service options, and SaaS feature copy, invoke and use: `.agents/skills/pricing-strategist`

### Phase Handoff Requirement (MANDATORY)
Write each webpages copy to `docs/copy-[page's name].md`.

---

## Phase 3 - Design System

### Visual Enhancements
Provide visual enchancements recommendations based on the project. They will be implemented at a later phase.

**Levels of enchantments**
- Level 0: Bootstrap defaults
- Level 1: CSS-only enhancements
- Level 2: Enhancements with Javascript
- Level 3: Use of Motion/GSAP animation library
- Level 4: Use of Three.js library

**Types of visual enchacements**
- Surfaces: Advanced gradients and glassmorphism throughout
- Interactions: Micro-animations on button/card hover
- Parallax scrolling
- Morphing shapes
- 3D elements
- Animations/transitions 
- High-quality animations: space transition, 3D gallery, portal animation, 3D product animation, particles transformation

Ask the user for one path to follow:

### PATH A — use of design template
Examine the designs at `design-templates/` and recommend a suitable design. 
If needed, ask design questions to narrow down the list of designs.
**Questions**
- Light, Dark theme or both
- Brand colors
- Mood
- Typography

### PATH B — custom design system
Ask or confirm the following before producing any visual output:

1. Styles

| Token Area | Question |
|---|---|
| Brand colors | Do they have an existing primary brand color? Any colors to avoid? |
| Mood | Ask them to pick two words: modern, warm, trustworthy, minimal, bold, playful, luxurious |
| Typography | Any fonts already in use? Or should you recommend a pairing? Remind me to check the "fontastic.space" |
| Existing assets | Logo format, photography style, any existing style guide? |
| Competitor reference | 2–3 sites they admire and 1–2 they dislike — these reveal more than any brief |

2. Visuals
Recommend a visual enchacements (level & types) from the previous step above.

## Phase Handoff Requirement (MANDATORY)
Write the client's design system to `docs/design.md`

---

## Phase Handoff Requirement (MANDATORY)
1. Compile state progress into `docs/brief.md` using State Management Template. 
2. Confirm to Panagiotis once saved.
