# Project Brief & State Transfer: Parturi-Kampaamo

## 1. Current Status
| Metric | Value |
| --- | --- |
| **Last Completed Phase** | GitHub Pages migration (site + base, base-aware assets, .nojekyll, deploy workflow, netlify.toml removed — verified in dist) |
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
- [x] `src/styles/_variables.scss` — Status: Tokens Mapped & Active (`$warning: #8d6d05`, `$light: #FFFFFF`, `$gold-bright: #D4AF37` for dark-bg text)
- [x] `src/styles/_base.scss` — Status: Luxury styles + 44px tap-target rules + reduced-motion-gated smooth scroll/view-transition + dark-overline gold + FAQ 80ch
- [x] `src/styles/_buttons.scss` — Status: Luxury Buttons + 44px guards (incl. `.btn-close`), gold hover → `$primary` (was 2.85:1)
- [x] `src/styles/_animations.scss` — Status: Scroll animations gated behind `prefers-reduced-motion: no-preference`
- [x] `src/styles/index.scss` — Status: Active (Bootstrap import + partials)
- [x] `src/data/site.ts` — Status: Salon Data & Metadata, SITE_DESCRIPTION 159 chars (150–160 target)
- [x] `astro.config.mjs` — Status: GitHub Pages (site panugr.github.io, base /parturi-kampaamo, sitemap customPages)
- [x] `.github/workflows/deploy.yml` — Status: Build + deploy to Pages on push to main
- [x] `public/.nojekyll` — Status: Present (Pages serves `_astro/` instead of Jekyll-ignoring it)
- [x] `public/robots.txt` + `public/.well-known/api-catalog` — Status: URLs point to github.io (no double slashes)
- [x] `src/components/head.astro` — Status: Base-aware favicon/sitemap hrefs via BASE_URL (trailing-slash-safe), GH JSON-LD url
- [x] `src/components/Navbar.astro` — Status: Built (brand link fixed to `href="/"`)
- [x] `src/components/Footer.astro` — Status: Built (privacy + accessibility links)
- [x] `src/components/MobileStickyBar.astro` — Status: Built (no `py-2` shrink, 44px via SCSS)
- [x] `src/components/PrivacyModal.astro` — Status: Built
- [x] `src/components/AccessibilityModal.astro` — Status: Built (short statement, same modal pattern)
- [x] `public/auth.md` — Status: Written (public resources need no auth; no authenticated endpoints; external booking + contact)
- [x] `src/layouts/Layout.astro` — Status: Built (skip-link, WebMCP `get_salon_info`)
- [x] `src/pages/index.astro` — Status: Built (figure/figcaption/cite testimonials, star aria, 4-image gallery, keyword-rich H1 + location H2, hero fetchpriority=high; FAQPage JSON-LD lives in head.astro)
- [ ] `src/pages/404.astro` — Status: Missing (skipped per user decision in Phase 2)
- [x] `docs/brief.md` — Status: Updated (Phase 2 audit recorded)

---

## 4. Immediate Next Steps for the Incoming Model
1. AWAIT CONFIRMATION: apply Phase 4 HIGH fixes (gold hover contrast, dark overline contrast, reduced-motion guards) + optionally MEDIUM/LOW (btn-close hit area, FAQ 80ch, silent-service lang) — user picks scope.
2. After fixes: human validation required (tab order, 200%/320px reflow, screen reader, voice control) + REPORT.md per A11Y §7 before any delivery claim.
