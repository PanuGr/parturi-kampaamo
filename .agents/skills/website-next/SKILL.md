---
name: website-next
description: Use this skill when planning or implementing future and/or futuristic ideas, such as visual enchancements and/or AI-integrations
---

<context-preservation>

## State Management & Model Handoff Protocol
Because different models execute different phases of this build, you MUST maintain a state-tracking file named `docs/brief.md` in the docs folder (`/docs/`). 
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

## Phase 1 - Visual Enchancements
Read and plan the Visual Enchancements styling rules/guides from `docs/style.md`. Implement only upon confirmation.

### Phase Handoff Requirement (MANDATORY)
Compile state progress into  `docs/brief.md` using State Management Template. 

## Phase 2 - Agent Readiness
Which of these AI-agentic solutions make sense for the given website? 
Flag them for future improvements.
Check with (cloudflare)[https://isitagentready.com/] for implementation.

### 1. Goal: Publish /robots.txt with clear crawl rules

### 2. Goal: Publish a sitemap and reference it from robots.txt

### 3. Goal: Include Link response headers for agent discovery (RFC 8288)

### 4. Goal: Publish DNS for AI Discovery (DNS-AID) records for DNS-based agent discovery

### 5. Goal: Return HTML responses as markdown when agents request it

### 6. Goal: Add User-agent rules for AI crawlers like GPTBot, Claude-Web, and others

### 7. Goal: Declare AI content usage preferences with Content Signals in robots.txt

### 8. Goal: Publish an API catalog for automated API discovery (RFC 9727)

### 9. Goal: Publish OAuth/OIDC discovery metadata so agents can authenticate with your APIs

### 10. Goal: Publish OAuth Protected Resource Metadata so agents can discover how to authenticate

### 11. Goal: Publish Auth.md metadata for agent registration

### 12. Goal: Publish an MCP Server Card for agent discovery

### 13. Goal: Publish an agent skills discovery index

### 14. Goal: Support WebMCP to expose site tools to AI agents via the browser

## Phase 3 - AI Integration
Provide an idea, how could an AI-model be integrated in this project? Available models:
- Gemini API (available models: Gemini Flash, Flash-light, Gemma)
- Mistral API (available model: Mistral-embed, ministral-3b/8b, codestral, voxtral-mini, voxtral-mini-transcribe-realtime, voxtral-small, mistral-moderation)
- Free models with OpenRouter API

## Phase Handoff Requirement (MANDATORY)
Compile state progress into  `docs/brief.md` using State Management Template. 
