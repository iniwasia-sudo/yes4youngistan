# Design System & Brand Identity

**Project:** YES — Youngistan (*Young Elite Success*)  
**Version:** 1.0.0 (Production Coming Soon Portal)  
**Live URL:** [https://yes4youngistan.iniw-asia.workers.dev](https://yes4youngistan.iniw-asia.workers.dev)  
**Repository:** [https://github.com/iniwasia-sudo/yes4youngistan.git](https://github.com/iniwasia-sudo/yes4youngistan.git)

---

## 1. Executive Summary & Brand Atmosphere

The **Youngistan (YES)** design system combines the literary, thoughtful warmth of high-end editorial interfaces with the patriotic dynamism of the Indian tricolor emblem. 

The aesthetic foundation departs completely from cold, generic SaaS grays and blues:
- **Canvas (`#faf8fc`):** A soft pearl ivory floor carrying a very subtle violet/lilac undertone.
- **Royal Logo Purple (`#841396`):** The signature brand voltage sampled directly from the "YES" wordmark. Used on primary buttons, highlighted text spans, and ambient glow effects.
- **Tricolor Saffron Accent (`#f28518`):** Sourced from the ascending top wing of the brand emblem. Used for launching badges, subtitles, and highlight moments.
- **Tricolor Green Accent (`#34b22b`):** Sourced from the flourishing lower leaves of the emblem. Used for live system status indicators and active connections.
- **Midnight Plum (`#140d1a`):** A deep, luxurious dark-violet surface used for the footer and elevated contrast moments.

---

## 2. Color System & Design Tokens

### 2.1 Brand & Accent Palette
| Token | Hex Value | Role & Usage |
|---|---|---|
| `--color-primary` | `#841396` | Signature YES Royal Purple; primary CTA backgrounds, title accents |
| `--color-primary-active` | `#6c0e7c` | Darkened press/hover state for purple buttons |
| `--color-primary-light` | `#f5e8f8` | Soft lavender surface tint for card accents |
| `--color-saffron` | `#f28518` | Emblem Saffron/Orange; "LAUNCHING SOON" badge, brand subtitle |
| `--color-saffron-active` | `#d66f0d` | Darkened hover variant for saffron components |
| `--color-saffron-light` | `#fff2e5` | Soft ivory-saffron container tint |
| `--color-green` | `#34b22b` | Emblem Green; "LAUNCHING SOON" live status pulse, success states |
| `--color-green-active` | `#2a9423` | Darkened green hover variant |
| `--color-green-light` | `#ebf8ea` | Soft mint-green container tint |

### 2.2 Surface Scale
| Token | Hex Value | Role & Usage |
|---|---|---|
| `--color-canvas` | `#faf8fc` | Default body floor; pearl ivory with faint lilac tint |
| `--color-surface-soft` | `#f4edf9` | Band dividers and soft section backgrounds |
| `--color-surface-card` | `#eee4f5` | Feature card backgrounds (one step darker than canvas) |
| `--color-surface-dark` | `#140d1a` | Midnight Plum dark surface (footer, dark mockups) |
| `--color-surface-dark-elevated` | `#20162a` | Elevated panels inside dark surfaces |
| `--color-surface-dark-soft` | `#1a1122` | Inner code/terminal background blocks |
| `--color-hairline` | `#e4d8ec` | 1px border tone on pearl surfaces |
| `--color-hairline-soft` | `#ede4f4` | Subtle interior card divider |

### 2.3 Text Tokens
| Token | Hex Value | Role & Usage |
|---|---|---|
| `--color-ink` | `#160f1e` | All primary display headlines and brand text |
| `--color-body-strong` | `#2c2136` | Emphasized body text, lead paragraphs |
| `--color-body` | `#42364c` | Default running body text |
| `--color-muted` | `#6f627a` | Subtitles, helper text, and inquiry labels |
| `--color-muted-soft` | `#9385a0` | Fine print, captions, and copyright lines |
| `--color-on-primary` | `#ffffff` | Pure white text over purple/saffron surfaces |
| `--color-on-dark` | `#faf8fc` | Pearl white text over Midnight Plum surfaces |
| `--color-on-dark-soft` | `#aba0b6` | Footer secondary text and contact links |

---

## 3. Typography System

### 3.1 Font Stacks
- **Display Serif:** `"Copernicus", "Tiempos Headline", "Cormorant Garamond", "EB Garamond", Garamond, serif`
  - High-contrast, editorial serif voice. Always rendered at weight 400 with negative tracking (`-0.3px` to `-1.5px`) to feel publication-grade rather than generic corporate.
- **Body & UI Sans:** `"StyreneB", "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`
  - Humanist sans-serif for UI labels, buttons, navigation, and body copy.
- **Monospace:** `"JetBrains Mono", "SF Mono", Menlo, Consolas, monospace`
  - Used for system status pills and technical metadata.

### 3.2 Type Scale Hierarchy
| Level | Font Family | Size | Weight | Line Height | Letter Spacing |
|---|---|---|---|---|---|
| `display-xl` | Display Serif | 64px | 400 | 1.05 | -1.5px |
| `display-lg` | Display Serif | 48px | 400 | 1.10 | -1.0px |
| `display-md` | Display Serif | 36px | 400 | 1.15 | -0.5px |
| `display-sm` | Display Serif | 28px | 400 | 1.20 | -0.3px |
| `title-lg` | Body Sans | 22px | 500 | 1.30 | 0.0px |
| `title-md` | Body Sans | 18px | 500 | 1.40 | 0.0px |
| `body-lead` | Body Sans | 19px | 400 | 1.55 | 0.0px |
| `body-md` | Body Sans | 16px | 400 | 1.55 | 0.0px |
| `body-sm` | Body Sans | 14px | 400 | 1.55 | 0.0px |
| `caption` | Body Sans | 13px | 500 | 1.40 | 0.0px |
| `caption-uppercase` | Body Sans | 12px | 600 | 1.40 | +1.5px |

---

## 4. Spacing, Shapes & Radii

### 4.1 Spacing Scale (4px Base)
- `--spacing-xxs`: 4px
- `--spacing-xs`: 8px
- `--spacing-sm`: 12px
- `--spacing-md`: 16px
- `--spacing-lg`: 24px
- `--spacing-xl`: 32px
- `--spacing-xxl`: 48px
- `--spacing-section`: 96px

### 4.2 Border Radii Scale
- `--rounded-xs`: 4px *(tiny tags)*
- `--rounded-sm`: 6px *(logo badge container, dropdown items)*
- `--rounded-md`: 8px *(buttons, input fields)*
- `--rounded-lg`: 12px *(cards, callout containers)*
- `--rounded-xl`: 16px *(hero cards)*
- `--rounded-pill`: 9999px *(badge tags, status indicators)*
- `--rounded-full`: 50% *(avatar circles)*

---

## 5. Component Inventory

### 5.1 Top Navigation (`top-nav`)
- **Height:** 74px pinned to the viewport top with `backdrop-filter: blur(12px)`.
- **Background:** `rgba(250, 248, 252, 0.94)` with a 1px `--color-hairline` border.
- **Brand Cluster:**
  - Logo icon: 44×44px white rounded tile rendering `Youngistanlogo.jpg`.
  - Wordmark: "YES" in Display Serif 27px (Purple `#841396`) with inline uppercase subtitle "Youngistan" (Saffron `#f28518`).
- **Right Cluster:**
  - Primary button: "Contact Us" leading directly to `mailto:iniw.asia@gmail.com`.

### 5.2 Launch Badge (`badge-saffron`)
- **Format:** Pill container with 5px × 14px padding.
- **Colors:** Saffron background (`#f28518`) with white bold text and subtle shadow.
- **Icon:** 4-point radial star glyph.
- **Copy:** `LAUNCHING SOON`.

### 5.3 Hero Headline (`display-xl`)
- Centered 64px display serif headline with `-1.5px` negative letter tracking:
  - *"Empowering the Next Generation of Achievers."*
  - The keyword *"Achievers"* is emphasized using `.highlight-purple` (`#841396`).

### 5.4 Primary Contact Action (`btn-contact-hero`)
- **Format:** Height 52px, horizontal padding 28px, 15px font size, weight 600.
- **Colors:** Royal Logo Purple (`#841396`) with white text and `box-shadow: 0 4px 16px rgba(132, 19, 150, 0.28)`.
- **Icon:** 18px mail envelope icon.
- **Hover:** Lifts by `-2px` with expanded purple elevation shadow (`0 6px 20px rgba(132, 19, 150, 0.35)`).
- **Action:** Triggers native email client to `iniw.asia@gmail.com`.

### 5.5 Minimal Footer (`site-footer-minimal`)
- **Background:** Midnight Plum (`#140d1a`) with a 1px border.
- **Components:**
  1. Brand logo tile (32×32px) + "YES — Youngistan" wordmark.
  2. Live status indicator: Glowing green dot (`#34b22b`) + `LAUNCHING SOON`.
  3. Direct mailto link: `iniw.asia@gmail.com` with mail icon.
  4. Copyright line: `© 2026 YES (Young Elite Success) — Youngistan. All rights reserved.`

---

## 6. Layout Architecture

- **Viewport Fill:** `body.landing-single-screen` uses flexbox (`min-height: 100vh; flex-direction: column;`).
- **Main Area:** `main` expands with `flex: 1` so the hero vertically centers across laptop, desktop, and tablet displays.
- **Content Max-Width:** 1200px container (`.container`) with 24px inline padding.
- **Hero Center Constraint:** `.hero-content-centered` caps at 820px max-width to preserve ideal reading line lengths.

---

## 7. Responsive Behavior

| Breakpoint | Window Width | Key Rules Applied |
|---|---|---|
| **Desktop** | `> 1024px` | Full 64px Display XL headline; 52px CTA height; single-line footer layout |
| **Tablet** | `768px – 1024px` | Scaled 48px Display LG; generous vertical breathing room |
| **Mobile** | `< 768px` | Headline drops to 38-40px; button spans comfortable touch target; footer flex-wraps vertically |

---

## 8. Brand Assets & Contact Specifications

- **Logo Asset:** `Youngistanlogo.jpg` (RGB master logo with saffron, white, green wings & purple "YES" typography).
- **Favicon:** Configured to `Youngistanlogo.jpg` (`<link rel="icon" type="image/jpeg" href="/Youngistanlogo.jpg">`).
- **Official Inquiries Email:** `iniw.asia@gmail.com`
