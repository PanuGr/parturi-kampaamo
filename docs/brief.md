# Project Brief & State Transfer: Parturi-Kampaamo

## 1. Current Status
| Metric | Value |
| --- | --- |
| **Last Completed Phase** | Phase 5 — UX Review fixes (44px tap targets, testimonial figure/figcaption/cite, star-rating aria) |
| **Current Project Mode** | Complete / Review |
| **Last Active Model** | Muse Spark (OpenCode) |

---

## 2. Immutable Decisions Made
*(List definitive choices that the incoming model must NOT change or re-ask)*
- **Brand Name:** Parturi-Kampaamo
- **Location:** Puutarhakatu 19, 20100 Turku (linkitetty Google Mapsiin)
- **Staff:** 2 tekijää (Lauri & Sanna)
- **Services:** 3 tiivistettyä pääkategoriaa (Parturi-kampaamoleikkaus 38–48 €, Värjäys ja raidat alk. 115 €, Lapset ja eläkeläiset 25–32 €)
- **Language:** Selkeä ja helppolukuinen suomi (simplified Finnish / selkokielinen periaate).
- **Most-Wanted-Action (MWA):** Ajanvaraus verkossa (suora linkki / painike sähköiseen ajanvaraukseen) + puhelinnumero nopeaan soittoon.
- **No Form:** Yhteydenottolomaketta ei käytetä (korvattu suoralla varauksella ja puhelinpalvelulla).
- **Privacy Policy:** Tietosuojaseloste avautuu saavutettavassa modaali-ikkunassa (`src/components/PrivacyModal.astro`).
- **Visual Design System:** **Luxury / Editorial** (`docs/design.md`). Arkkitehtonisen suorat 0px linjat, kallis lämmin alabasteripohja (`#F9F8F6`), syvä hiili (`#1A1A1A`), kultainen tehoste käytössä tummuuskorjattuna (`$warning: #8d6d05`, johdettu `#D4AF37`:stä AA-kontrastin vuoksi), Playfair Display -serif-otsikot ja Inter-leipäteksti.

---

## 3. Current File Registry & Manifest
*(Tracks what has actually been written to disk so far)*
- [x] `docs/plan.md` — Status: Approved & Updated
- [x] `docs/copy-landing.md` — Status: Approved & Updated
- [x] `docs/design.md` — Status: Rewritten to Bootstrap
- [x] `docs/prototype.html` — Status: Reference Prototype
- [x] `src/styles/_variables.scss` — Status: Tokens Mapped & Active (`$warning: #8d6d05`, `$light: #FFFFFF`)
- [x] `src/styles/_base.scss` — Status: Updated with Luxury Styles + `footer a` 44px tap-target rule
- [x] `src/styles/_buttons.scss` — Status: Updated with Luxury Buttons + `.btn` 44px min-height guard
- [x] `src/styles/_navbar.scss` — Status: Updated with Header & Mobile Sticky Bar + `.brand-title` 44px rule
- [x] `src/styles/_animations.scss` — Status: Active (scroll-animate / fade-in-up)
- [x] `src/styles/index.scss` — Status: Active (Bootstrap import + partials)
- [x] `src/data/site.ts` — Status: Updated with Salon Data & Metadata
- [x] `src/components/head.astro` — Status: Updated with Fonts & HairSalon Schema
- [x] `src/components/Navbar.astro` — Status: Built (no `py-2` shrink on CTA, 44px via SCSS)
- [x] `src/components/Footer.astro` — Status: Built
- [x] `src/components/MobileStickyBar.astro` — Status: Built (no `py-2` shrink, 44px via SCSS)
- [x] `src/components/PrivacyModal.astro` — Status: Built
- [x] `src/layouts/Layout.astro` — Status: Built (skip-link, WebMCP `get_salon_info`)
- [x] `src/pages/index.astro` — Status: Built (testimonials as `figure`/`figcaption`/`cite`, star ratings with `role="img"` + `aria-label`)
- [x] `docs/phase1_ux_review.md` — Status: Resolved & removed (all 3 issues fixed: tap targets, blockquote semantics, star-rating aria)

---

## 4. Immediate Next Steps for the Incoming Model
1. Continue review
