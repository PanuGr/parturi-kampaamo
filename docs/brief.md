# Project Brief & State Transfer: Parturi-Kampaamo

## 1. Current Status
| Metric | Value |
| --- | --- |
| **Last Completed Phase** | Phase 4 — Build (Astro Components, SCSS & Landing Page Built) |
| **Current Project Mode** | Complete / Review |
| **Last Active Model** | Gemini 3.8 Flash |

---

## 2. Immutable Decisions Made
*(List definitive choices that the incoming model must NOT change or re-ask)*
- **Brand Name:** Parturi-Kampaamo
- **Location:** Puutarhakatu 19, 20100 Turku (linkitetty Google Mapsiin)
- **Staff:** 2 tekijää (Laura & Sanna)
- **Services:** 3 tiivistettyä pääkategoriaa (Parturi-kampaamoleikkaus 38–48 €, Värjäys ja raidat alk. 115 €, Lapset ja eläkeläiset 25–32 €)
- **Language:** Selkeä ja helppolukuinen suomi (simplified Finnish / selkokielinen periaate).
- **Most-Wanted-Action (MWA):** Ajanvaraus verkossa (suora linkki / painike sähköiseen ajanvaraukseen) + puhelinnumero nopeaan soittoon.
- **No Form:** Yhteydenottolomaketta ei käytetä (korvattu suoralla varauksella ja puhelinpalvelulla).
- **Privacy Policy:** Tietosuojaseloste avautuu saavutettavassa modaali-ikkunassa (`src/components/PrivacyModal.astro`).
- **Visual Design System:** **Luxury / Editorial** (`06-luxury.md`). Arkkitehtonisen suorat 0px linjat, kallis lämmin alabasteripohja (`#F9F8F6`), syvä hiili (`#1A1A1A`), kultainen tehoste (`#D4AF37`), Playfair Display -serif-otsikot ja Inter-leipäteksti.

---

## 3. Current File Registry & Manifest
*(Tracks what has actually been written to disk so far)*
- [x] `docs/plan.md` — Status: Approved & Updated
- [x] `docs/copy-landing.md` — Status: Approved & Updated
- [x] `docs/design.md` — Status: Rewritten to Bootstrap
- [x] `docs/prototype.html` — Status: Reference Prototype
- [x] `src/styles/_variables.scss` — Status: Tokens Mapped & Active
- [x] `src/styles/_base.scss` — Status: Updated with Luxury Styles
- [x] `src/styles/_buttons.scss` — Status: Updated with Luxury Buttons
- [x] `src/styles/_navbar.scss` — Status: Updated with Header & Mobile Sticky Bar
- [x] `src/data/site.ts` — Status: Updated with Salon Data & Metadata
- [x] `src/components/head.astro` — Status: Updated with Fonts & HairSalon Schema
- [x] `src/components/Navbar.astro` — Status: Built
- [x] `src/components/Footer.astro` — Status: Built
- [x] `src/components/MobileStickyBar.astro` — Status: Built
- [x] `src/components/PrivacyModal.astro` — Status: Built
- [x] `src/layouts/Layout.astro` — Status: Built
- [x] `src/pages/index.astro` — Status: Built

---

## 4. Immediate Next Steps for the Incoming Model
1. Test and verify in browser (`npm start` / `npm run preview`).
2. Deploy or refine content as needed.
