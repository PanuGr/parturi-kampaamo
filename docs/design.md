# Design System: Parturi-Kampaamo (Luxury / Editorial)

## Colors
| Token | Bootstrap variable | Value | Description |
|---|---|---|---|
| Background | `$body-bg` | `#F9F8F6` | Lämmin alabasteri / kallis paperi (Warm Alabaster) |
| Foreground / Text | `$body-color` | `#1A1A1A` | Syvä pehmeä hiili (Rich Charcoal) |
| Headings | `$headings-color` | `#1A1A1A` | Syvä hiili (Rich Charcoal) |
| Primary Accent | `$primary` | `#1A1A1A` | Ensisijainen toimintoväri, kontrastikas hiili |
| Luxury Gold Accent | `$warning` | `#D4AF37` | Hillitty metallinen kulta tehosteisiin, hover-tiloihin ja merkkeihin |
| Muted Background | `$light` | `#EBE5DE` | Vaalea taupe / pellavan sävyinen korostuspinta |
| Muted Text | `$text-muted` | `#6C6863` | Lämmin harmaa toissijaisiin teksteihin ja kuvauksiin |
| Dark Section Bg | `$dark` | `#141414` | Syvä ylellinen tumma tausta erikoiselementeille |
| Border Color | `$border-color` | `rgba(26, 26, 26, 0.12)` | Hienovarainen ja tarkka 1px viivarajaus |

## Typography
| Role | Bootstrap variable | Value | Description |
|---|---|---|---|
| Body | `$font-family-base` | `'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif` | Puhdas, erittäin luettava humanistinen grotesk |
| Headings | `$headings-font-family` | `'Playfair Display', Georgia, serif` | Arvokas, korkeakontrastinen ja toimituksellinen serif |
| Headings Weight | `$headings-font-weight` | `400` | Kevyt ja ilmava arvokkuus (ei raskasta lihavointia) |
| Hero Headline | Display class / CSS | `display-3` / `display-4` | Voimakas, huoliteltu pystysuuntainen rytmi |
| Overlines / Labels | CSS class `.text-uppercase` | `letter-spacing: 0.25em; font-size: 0.75rem;` | Arkkitehtoninen ja ylellinen kirjainvälistys |

## Radii, Shadows & Borders
| Token | Bootstrap variable | Value | Description |
|---|---|---|---|
| Border Radius | `$border-radius` | `0` | Tiukan arkkitehtoninen ja suorakulmainen (ei pyöristyksiä) |
| Border Radius Small | `$border-radius-sm` | `0` | Suorakulmainen |
| Border Radius Large | `$border-radius-lg` | `0` | Suorakulmainen |
| Pill Radius | `$border-radius-pill` | `0` | Myös painikkeet ja tunnisteet suorakulmaisia |
| Border Width | `$border-width` | `1px` | Erittäin ohut ja huoliteltu hiusviiva |
| Shadows | `$box-shadow-sm` | `0 2px 8px rgba(0, 0, 0, 0.04)` | Hienovarainen, pehmeä noste (ei kovia varjoja) |
| Shadows Medium | `$box-shadow` | `0 8px 24px rgba(0, 0, 0, 0.08)` | Pehmeä noste kuville ja korteille |

## Component notes
- **Painikkeet (Buttons):**
  - `$btn-border-radius: 0;` (0px kulmat, suorat linjat).
  - Pääpainike `.btn-primary`: Tumma hiilipohja (`#1A1A1A`), valkoinen teksti, kultainen tehoste hoverissa (`#D4AF37`), `letter-spacing: 0.15em`, `text-transform: uppercase`.
  - Toissijainen painike `.btn-outline-dark`: Läpinäkyvä pohja, ohut 1px hiilirajaus, hoverissa kääntö tummaan.
- **Kortit (Cards):**
  - Tausta valkoinen tai alabasteri, 1px ohut reunus (`rgba(26, 26, 26, 0.1)`), 0px säde, reilu sisennys (`p-4` tai `p-5`).
- **Valokuvat:**
  - Hienostunut toimituksellinen ilme, pehmeä varjo ja siisti 1px rajaus.
- **Tietosuojamodaali (Modal):**
  - HTML5 `<dialog>` tai Bootstrap `.modal`, minimalistinen ja suoralinjainen kehys, selkeä typografia ja helppo sulkeminen.

## Spacing
Bootstrap native utilities only (`.py-5`, `.my-4`, `.g-4`, `.gap-3`). No custom spacer scale.

## Preserved (do not override)
`@view-transition`, `interpolate-size`, default font stack, external link handling.
