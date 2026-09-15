---
name: website-plan-landing
description: Use this skill for planning/writing a single landing page, not a full site. Delegates specialized sub-tasks to dedicated skill modules.
---

<context-preservation>

## State Management & Model Handoff Protocol
Because different models execute different phases of this build, you MUST maintain a state-tracking file at `docs/brief.md`.
- **If `docs/brief.md` exists:** Read it completely before doing anything else. It is your ultimate source of truth for project state.
- **Before ending any session/phase:** You must update or generate a fresh `docs/brief.md` using the strict template below. Do not consider a phase complete until this file is written.

```md
# Landing Page Brief & State Transfer: [Client Name / Campaign Name]
## 1. Current Status
| Metric | Value |
| --- | --- |
| **Last Completed Phase** | [e.g., Phase 2 — Copywriting] |
| **Current Project Mode** | [Strategy / Design / Build] |
| **Last Active Model** | [e.g., Claude Sonnet Latest] |

---

## 2. Immutable Decisions Made
*(List definitive choices that the incoming model must NOT change or re-ask)*
- **Traffic Source:** [e.g., Facebook ad, LinkedIn ad, email campaign]
- **Target Audience:** [Details]
- **Most-Wanted-Action (MWA):** [The one action — email capture / form submit / booking]
- **Offer:** [What's promised — free audit, discount, lead magnet]
- **Core Visual Style:** [Details]

---

## 3. Current File Registry & Manifest
*(Tracks what has actually been written to disk so far)*
- [ ] `docs/plan.md` — [Status: Approved / Pending / Missing]
- [ ] `docs/copy-landing.md` — [Status: Approved / Pending / Missing]
- [ ] `docs/design.md` — [Status: Approved / Pending / Missing]
- [ ] landing page component/file — [Status: Built / Missing]

---

## 4. Immediate Next Steps for the Incoming Model
1. [Clear tactical step 1]
2. [Clear tactical step 2]
```

</context-preservation>

---

## Phase 1 — Landing Page Strategy

### 1.1 Gather Project Context

Before anything else, confirm:

| Question | Why It Matters |
|---|---|
| Where does traffic come from? (FB ad, LinkedIn ad, Google Ads, email, organic post) | Headline must match what that ad/post already promised |
| Who is the specific audience for this campaign? | One audience, not "everyone" — write to one person |
| What is the Most-Wanted-Action (MWA)? (email capture / form submit / booking / purchase) | The page has exactly one job — this defines it |
| What is the offer? (free audit, discount, lead magnet, consultation) | Drives headline, form, and CTA copy |
| Is the product/commitment cheap+simple or expensive+complex? | Determines copy length (see 1.3) |

**Landing page ≠ homepage.** No nav map, no page list, no site tree. This is one page, one goal. If the request turns out to need multiple pages with different goals, stop and switch to the `website-plan` skill instead.

---

### 1.2 Define the Structure

Landing pages follow a proven anatomy — not a sitemap. Confirm which blocks apply:

**Include:**
- Headline — benefit-oriented, must echo the ad/post copy word-for-word where possible
- Subheadline — concrete supporting detail
- Logo — brand consistency with main site
- Above-the-fold explainer — visible without scrolling
- Below-the-fold explainer — only if offer is complex
- Product/offer image — relevant, not decorative
- Form — 1–3 fields max (name + email; drop name if you can)
- One CTA — matches the single MWA, repeated at bottom if page scrolls
- Privacy policy link — open in modal or new tab, don't route visitor away
- Social proof — testimonial, review count, trust badge

**Exclude:**
- Nav menu (or minimal/none — no escape routes)
- Links to "About," "Portfolio," other site sections
- Off-topic images
- Extra form fields ("title," "fax," anything non-essential)
- Vague link text ("click here to read more")

### 1.3 Copy Length Decision

| Offer type | Copy length |
|---|---|
| Free / cheap / low-commitment | Short — get out of the way |
| Expensive / high-commitment / needs justification | Long — more proof, more explanation to overcome hesitation |

Rule: cost & anxiety go up → copy length goes up.

### 1.4 Define Page Requirements

Single page, single record:

- **MWA** (the one action — restate from 1.1)
- **Must-have blocks** (from 1.2 checklist — which ones apply here)
- **Headline/ad copy match** (exact phrase that must appear in both ad and headline)

One page, one job. No competing CTAs, no secondary goals.

### Phase Handoff Requirement (MANDATORY)
Write structure and page requirements to `docs/plan.md`.

---

## Phase 2 — Copywriting & Content Strategy

Delegate execution entirely to the specialized skill below. Do not write copy natively in this orchestrator.

### 2.1 Landing Page Copy & Offer Positioning

> **Skill Delegation:** For headline/subheadline pairing, above-the-fold copy, offer framing, urgency/trust copy, and CTA microcopy, invoke and use: `.agents/skills/website-copy-specialist`

### 2.2 Pricing/Offer Clarity (if applicable)

> **Skill Delegation:** For offer pricing, discount framing, or tiered lead-magnet options, invoke and use: `.agents/skills/pricing-strategist`

### Phase Handoff Requirement (MANDATORY)
Write landing page copy to `docs/copy-landing.md`.

---

## Phase 3 — Design System

### Visual Enhancements
Recommend enhancements to be implemented later. Landing pages favor restraint — every added element is a potential distraction from the one CTA.

**Levels of enhancement**
- Level 0: Bootstrap defaults
- Level 1: CSS-only enhancements
- Level 2: Enhancements with JavaScript
- Level 3: Motion/GSAP animation library
- Level 4: Three.js library

Default recommendation for landing pages: **Level 0–1**. Higher levels only if they reinforce the offer (e.g. product demo animation) — never purely decorative, since decoration competes with the single CTA for attention.

Ask the user for one path to follow:

### PATH A — use of design template
Examine designs at `design-templates/` and recommend one matching brand + campaign mood.

### PATH B — custom design system
Confirm before producing visual output:

| Token Area | Question |
|---|---|
| Brand colors | Existing primary color? Colors to avoid? |
| Mood | Two words: modern, warm, trustworthy, minimal, bold, playful, luxurious |
| Typography | Fonts already in use, or need a pairing recommendation? (check fontastic.space) |
| Existing assets | Logo format, photography style, style guide? |
| Competitor/inspiration reference | 2–3 landing pages they admire, 1–2 they dislike |

Keep visual style consistent with the main site brand — a landing page that looks unrelated to the parent brand erodes trust (CXL: "maintain your brand").

### Phase Handoff Requirement (MANDATORY)
Write the design system to `docs/design.md`.

---

## Phase Handoff Requirement (MANDATORY)
1. Compile state progress into `docs/brief.md` using the State Management Template.
2. Confirm to Panagiotis once saved.
