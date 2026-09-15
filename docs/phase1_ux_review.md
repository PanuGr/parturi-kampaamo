# Phase 1 — UX/UI Review: Parturi-Kampaamo

## Checklist Results

### Layout & Visual Hierarchy

- [x] ✅ **5-second test** — Clear: overline "PALVELEVA PARTURI-KAMPAAMO", hero H1, and two CTAs communicate the purpose immediately.
- [x] ✅ **Most important content visually dominant** — H1 is `display-4`, CTAs are large and prominent.
- [x] ✅ **Clear visual path top-to-bottom** — Overline → H1 → lead text → CTA → trust badges → services → benefits → team → reviews → location → FAQ → bottom CTA.

### Navigation

- [x] ✅ **Primary CTA visible without scrolling** — "Varaa aika" button in sticky navbar on desktop; sticky bottom bar on mobile.
- [x] ✅ **Navigation labels clear** — Minimal and self-explanatory ("Varaa aika", "Puh.", "Soita").
- [x] ✅ **Return to homepage** — Brand title links to `#` (top of single-page).

### Calls to Action

- [x] ✅ **One primary CTA per page** — "Varaa aika verkossa" is dominant everywhere.
- [x] ✅ **CTA is specific** — "Varaa aika verkossa", "Varaa hiustenleikkaus", "Varaa väripalvelu" are contextual and specific.
- [x] ✅ **CTA repeated at logical points** — Hero, each service card (×3), and bottom CTA section. 4 anchor links + 1 real external booking URL.

### Readability

- [x] ✅ **Paragraphs short** — All paragraphs are 2–4 lines on desktop.
- [x] ✅ **Font size ≥16px** — Body computed font-size is `16px`.
- [ ] ⚠️ **Contrast** — See blocking issues below.

### Mobile Usability

- [ ] ⚠️ **Tap targets 44×44px** — Several elements fail the 44×44px minimum. See important issues.
- [x] ✅ **No horizontal overflow** — `scrollWidth <= viewportWidth` at 375px. No content cut off.
- [x] ✅ **No forms** — No forms on the page (booking is external).

### Accessibility

- [ ] ❌ **Contrast: gold overline text on light background** — Ratio `1.98:1` (needs 4.5:1 for WCAG AA small text). Affects all `.overline` labels.
- [ ] ❌ **Contrast: white text on gold button** — `btn-luxury-gold` has white text on `#D4AF37`: ratio `2.10:1`. Fails WCAG AA for both normal and large text.
- [x] ✅ **Body text on body bg** — `#1A1A1A` on `#F9F8F6` = `16.40:1`. Excellent.
- [x] ✅ **Secondary text on body bg** — `#6C6863` on `#F9F8F6` = `5.21:1`. Passes AA.
- [x] ✅ **Gold on dark section** — `#D4AF37` on `#141414` = `8.76:1`. Passes AAA.

### Semantic HTML

- [x] ✅ **One H1, logical nesting** — 1× `<h1>`, 7× `<h2>`, 18× `<h3>`. No heading-level skips detected.
- [x] ✅ **All images have meaningful alt text** — 3 images, all with descriptive Finnish `alt` values.
- [x] ✅ **iframe has descriptive title** — `"Parturi-Kampaamo sijainti Turun Puutarhakadulla"`.
- [ ] ⚠️ **Skip link** — Present and correct (`<a href="#main-content" class="visually-hidden-focusable">`), but has **transparent background** (`rgba(0,0,0,0)`) so when focused on a light background, white text on light bg is invisible. Needs a solid `background-color`.
- [ ] ⚠️ **Blockquote semantics** — `<blockquote>` elements in testimonials are not wrapped in `<figure>` and attribution is not in `<figcaption>` / `<cite>`. Minor semantic issue.
- [x] ✅ **ARIA used sparingly** — Only `aria-label` on the mobile sticky bar and skip link. No ARIA overuse.

---

## Issues by Severity

### ❌ Blocking — Must fix before launch

| # | Issue | Why it matters | Fix |
|---|-------|----------------|-----|
| 1 | **Gold overline text fails WCAG AA** | `.overline` uses `$warning` (#D4AF37) on `$body-bg` (#F9F8F6) → contrast ratio **1.98:1** (needs ≥4.5:1). All section overline labels are unreadable for low-vision users. | Change `.overline` color to `$secondary` (#6C6863, ratio 5.21:1) or a darker gold like `#8B7A2B` (≈5.1:1). The gold accent can remain for borders/decorations. |
| 2 | **`btn-luxury-gold` text contrast fails WCAG AA** | White (#FFF) on gold (#D4AF37) → contrast **2.10:1**. The bottom CTA "Varaa aika verkossa (24/7)" button is the single most important booking button on the page. | Switch text to dark: `color: $body-color` (#1A1A1A) on gold = **8.28:1**. Update hover state `#B89528` similarly. |

### ⚠️ Important — Should fix before launch

| # | Issue | Why it matters | Fix |
|---|-------|----------------|-----|
| 3 | **Multiple tap targets below 44×44px on mobile** | Navbar "Varaa aika" button is 130×39px. Brand title is 238×26px. Footer links are ~116×21px. Mobile sticky bar buttons are ~210×36px. Below the 44px minimum. | Add `min-height: 44px` to `.btn`, `.brand-title`, and footer links. Adjust `padding-y` on mobile sticky bar buttons. |
| 4 | **Skip link invisible when focused** | Background is transparent. White text (`color: white`) on the light `$body-bg` (#F9F8F6) is unreadable when the link receives focus. | Add `background-color: $primary` (or `$dark`) to `.visually-hidden-focusable` in [_base.scss](file:///c:/Users/ppana/Downloads/code/parturi-kampaamo/src/styles/_base.scss#L58-L66). |
| 5 | **Hero image served from Unsplash CDN** | External dependency — if Unsplash is slow or blocked, the hero and team images won't load. Also no `width`/`height` attributes on the hero image, causing CLS. | Add explicit `width` and `height` attributes to all `<img>` tags for CLS prevention. Consider self-hosting critical hero image. |
| 6 | **Team member name mismatch** | [index.astro L299](file:///c:/Users/ppana/Downloads/code/parturi-kampaamo/src/pages/index.astro#L299) says "Lauri" but the `alt` text says "Laura". Inconsistent naming. | Align the `<h3>` name with the `alt` text — pick one spelling. |

### 💡 Nice to have — Improve in next iteration

| # | Issue | Why it matters | Fix |
|---|-------|----------------|-----|
| 7 | **Testimonial `<blockquote>` semantics** | Attribution uses `<footer>` outside `<figure>`, not `<cite>`. Screen readers don't associate quote with author. | Wrap each testimonial in `<figure>` with `<figcaption>` containing `<cite>`. |
| 8 | **`_hero.scss` is empty** | Imports `variables` but contains no rules. Dead file in the bundle. | Delete `_hero.scss` and remove from `index.scss`. |
| 9 | **Star rating (★★★★★) uses unicode characters** | Not accessible to screen readers. No `aria-label` indicating the rating value. | Add `aria-label="Arvosana 4.9 / 5"` and `role="img"` to the star container `<div>`, or use visually hidden text. |
