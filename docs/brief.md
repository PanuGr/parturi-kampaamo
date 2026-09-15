# Project Brief & State Transfer: Parturi-Kampaamo

## 1. Current Status
| Metric | Value |
| --- | --- |
| **Last Completed Phase** | Phase 3 — Code audition (4 audits done, fixes NOT applied — awaiting confirmation) |
| **Current Project Mode** | Review |
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
- **Gallery (new):** 4-kuvan Unsplash-galleria lisätty `src/pages/index.astro`:ään arvio- ja sijaintiosioiden väliin (plan.md kohta 5).

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
- [x] `src/data/site.ts` — Status: Salon Data & Metadata, SITE_DESCRIPTION 159 chars (150–160 target)
- [x] `src/components/head.astro` — Status: Fonts, HairSalon + FAQPage JSON-LD colocated, query-free canonical, Unsplash preconnect (FAVICON import removed — export was already gone from site.ts)
- [x] `src/components/Navbar.astro` — Status: Built (brand link fixed to `href="/"`)
- [x] `src/components/Footer.astro` — Status: Built
- [x] `src/components/MobileStickyBar.astro` — Status: Built (no `py-2` shrink, 44px via SCSS)
- [x] `src/components/PrivacyModal.astro` — Status: Built
- [x] `src/layouts/Layout.astro` — Status: Built (skip-link, WebMCP `get_salon_info`)
- [x] `src/pages/index.astro` — Status: Built (figure/figcaption/cite testimonials, star aria, 4-image gallery, keyword-rich H1 + location H2, hero fetchpriority=high; FAQPage JSON-LD lives in head.astro)
- [ ] `src/pages/404.astro` — Status: Missing (skipped per user decision in Phase 2)
- [x] `docs/brief.md` — Status: Updated (Phase 2 audit recorded)

---

## 4. Immediate Next Steps for the Incoming Model
1. AWAIT CONFIRMATION: apply Phase 3 Blocking + Important fixes (real booking URL + verify phone/address, `fallow` npm script, canonical without query params, Unsplash preconnect, image dimensions/CLS, author meta, FAVICON import) — user picks scope.
2. Then Phase 4 (Accessibility audit per A11Y.md).
