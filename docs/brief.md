# Landing Page Brief & State Transfer: Parturi-Kampaamo (Testi / Use-Case)

## 1. Current Status
| Metric | Value |
| --- | --- |
| **Last Completed Phase** | Phase 3 — Design System (Tokens Translated & Prompt Generated) |
| **Current Project Mode** | Build / Prototyping (Mockup Prompt Delivery) |
| **Last Active Model** | Gemini 3.8 Flash |

---

## 2. Immutable Decisions Made
*(List definitive choices that the incoming model must NOT change or re-ask)*
- **Brand Name:** Parturi-Kampaamo
- **Location:** Puutarhakatu 19, 20100 Turku (linkitetty Google Mapsiin)
- **Staff:** 2 tekijää (Laura & Sanna)
- **Services:** 3 tiivistettyä pääkategoriaa (Parturi-kampaamoleikkaus, Värjäys ja raidat, Lapset ja eläkeläiset)
- **Language:** Selkeä ja helppolukuinen suomi (simplified Finnish / selkokielinen periaate).
- **Most-Wanted-Action (MWA):** Ajanvaraus verkossa (suora linkki / painike sähköiseen ajanvaraukseen) + puhelinnumero nopeaan soittoon.
- **No Form:** Yhteydenottolomaketta ei käytetä (korvattu suoralla varauksella ja puhelinpalvelulla).
- **Privacy Policy:** Tietosuojaseloste avautuu saavutettavassa modaali-ikkunassa (HTML `<dialog>` / Bootstrap modal) ilman poistumista sivulta.
- **Visual Design System:** **Luxury / Editorial** (`06-luxury.md`). Arkkitehtonisen suorat 0px linjat, kallis lämmin alabasteripohja (`#F9F8F6`), syvä hiili (`#1A1A1A`), kultainen tehoste (`#D4AF37`), Playfair Display -serif-otsikot ja Inter-leipäteksti.

---

## 3. Current File Registry & Manifest
*(Tracks what has actually been written to disk so far)*
- [x] `docs/plan.md` — Status: Approved & Updated
- [x] `docs/copy-landing.md` — Status: Approved & Updated
- [x] `docs/design.md` — Status: Rewritten to Bootstrap
- [ ] `src/styles/_variables.scss` — Status: Pending SCSS derivation
- [ ] `src/pages/index.astro` — Status: Pending build

---

## 4. Immediate Next Steps for the Incoming Model
1. Present Mockup Prompt to Panagiotis for review.
2. Derive initial SCSS partials into `src/styles/` (`_variables.scss`, `_base.scss`, `_buttons.scss`, `_animations.scss`).
3. Build the responsive landing page in `src/pages/index.astro`.
