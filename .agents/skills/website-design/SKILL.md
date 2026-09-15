---
name: website-design
description: Use this skill whenever translating a Tailwind-based design.md into this project's Bootstrap system, generating the mockup prompt, or deriving initial SCSS partials. Replaces website-design entirely — this is the design phase.
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
- [ ] `design.md` — [Status: Rewritten to Bootstrap / Still Tailwind / Missing]
- [ ] `src/styles/_variables.scss` — [Status: Tokens Mapped / Missing]
- [ ] `src/components/Navbar.astro` — [Status: Extracted from Stitch / Missing]

---

## 4. Immediate Next Steps for the Incoming Model
1. [Clear tactical step 1]
2. [Clear tactical step 2]
```

</context-preservation>

---

## Phase 1 — Rewrite design.md into Bootstrap

### Input
`docs/design.md` — the Tailwind-based design template recommended/picked during `website-plan` Phase 3.

### Output
`docs/design.md` — **overwritten in place.** Same file, same path, now expressed in Bootstrap terms. This becomes the project's permanent design system: guides the initial SCSS, and any future styling work (new pages, new components) traces back to it directly. No separate style.md — one file, one source of truth.

Ignore any Visual Enhancement Level (0-4) notes in the original — implementation-phase concern, not a token, handled later by whichever skill builds JS/animation behavior.

### Core translation rule

**No 1:1 token forcing.** Do not translate every Tailwind modifier (`primary-deep`, `-hover`, arbitrary shades) into a distinct token if Bootstrap has no equivalent variable to eventually hold it. For each Tailwind token, resolve it to one of:
- an existing Bootstrap variable name (`$primary`, `$body-bg`, `$border-radius`, etc.) — write the Bootstrap name into `design.md`, not the Tailwind name
- a plain descriptive rule with no variable (goes to `_base.scss` later, not `_variables.scss`)

Never invent fabricated `$custom-variable` names to mirror Tailwind naming 1:1. Bootstrap's variable list is the ceiling for what becomes a variable.

### Spacing

Never carry over Tailwind's spacing scale (`p-4`, `gap-6`, `space-y-2`) as tokens. Rewritten `design.md` does not define a custom spacer scale. Note instead: *"Spacing: Bootstrap native utilities only."*

### Rewritten design.md structure

```md
# Design System: [Client Name]

## Colors
| Token | Bootstrap variable | Value |
|---|---|---|
| ... | $primary | #... |

## Typography
| Role | Bootstrap variable | Value |
|---|---|---|
| Body | $font-family-base | ... |
| Headings | $headings-font-family | ... |

## Radii / Shadows / Borders
(Bootstrap variable → value, same pattern)

## Component notes
(hover/focus states, button variants — prose, maps to _buttons.scss later)

## Spacing
Bootstrap native utilities only. No custom spacer scale.

## Preserved (do not override)
@view-transition, interpolate-size, default font stack, external link handling.
```

## Phase 2 — Prompt Generation

Read `docs/plan.md` for user journey and layout instructions.
Extract each page's text from `docs/copy-[page's name].md`.
Extract tokens from the rewritten `docs/design.md` (Phase 1 output).
Combine into a single comprehensive text prompt per planned webpage, written for a Bootstrap-based mockup (not Tailwind).

Present explicitly to Panagiotis:
> Here is your ready-to-use prompt. You can copy this and use it to generate the mockup.

Mockup is built straight in Bootstrap using this prompt + rewritten `design.md`.

## Phase 3 — Derive initial SCSS from design.md

Once the Bootstrap mockup is approved, derive the initial SCSS partials from the rewritten `docs/design.md`. These are the project's starting files — `website-build` and any future work read from here directly, not re-derive translation rules.

### Bootstrap vs. custom SCSS — decision order

For every token/rule in `design.md`, walk in this order, stop at first match:

1. **Varies per instance in markup?** → Bootstrap utility class in the HTML (`.d-flex`, `.mt-4`). Don't centralize it.
2. **Identical on every instance of an element, no Bootstrap utility for it?** → single selector in `_base.scss` (e.g. `h1, h2, h3 { font-weight: 600; }`), not repeated classes in markup.
3. **Bootstrap already covers this via a `$variable`?** → set the variable in `_variables.scss`.
4. **Component-scoped, stateful (hover/focus/animation)?** → `_buttons.scss` or `_animations.scss`.

Rule of thumb: same utility class on every instance with zero variation → SCSS, not markup.

### Output files
Check each for existing content/conflicts before writing. Confirm before overwriting anything non-empty. Only add rules `design.md` actually requires.

1. `_variables.scss` — Bootstrap variable overrides only
2. `_base.scss` — global element selectors
3. `_animations.scss` — transitions/animation rules
4. `_buttons.scss` — button rules, hover/focus states
5. `_index.scss` — partial imports + other class/attribute/id selectors

### Preserve on every pass
Never remove or override in `_base.scss`: `@view-transition`, `interpolate-size`, default font stack, external link handling.

## Phase Handoff Requirement (MANDATORY)
Compile progress (design.md rewrite status, prompt delivered, SCSS files written) into `docs/brief.md` using the State Management Template. Confirm to Panagiotis once saved.