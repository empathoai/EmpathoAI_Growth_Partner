## Overview

EmpathoAI's Industrial Dark System is built on a single, almost violently simple idea: engineering rigor speaks, the chrome doesn't. Every page reads as an architectural blueprint — towering uppercase Futura display lockups (`var(--font-display)`) burned into graphite-filtered campaign imagery, with everything else (nav, buttons, cards, footer) reduced to a neutral grayscale palette on `{colors.canvas}` and `{colors.surface-deep}`. There is no decorative gradient, no soft shadow nostalgia — the system saves all chromatic energy for the singular action token: **Electric Orange** (`{colors.accent}`).

The result is a layout that feels industrial — campaign hero, component grid, technical tile, footer — stacked like a precise technical manual. Density is high but never crowded, because the system relies on three relentless devices: containers and actions with **Zero Radius** geometry, high-contrast Graphite/Electric Orange palette that enforces institutional authority, and a refined "hollow" hover state for all interactions.

Across all interfaces, the signature is maximum mechanical restraint.

**Key Characteristics:**
- **Graphite Foundation:** The UI is built on a high-contrast dark palette (`#0A0A0B` to `#2D2D2F`).
- **Industrial Sharp Doctrine:** Everything is strictly `0px` (Sharp). No rounded corners on containers or actions.
- **Electric Orange Accent:** `#FF4402` is the only allowed color accent, reserved for conversion and authority.
- **Industrial Typography:** Massively scaled display headlines (96px) paired with clinical Helvetica/Inter UI text.
- **Zero Elevation:** No shadows or depth effects. 1px hairlines are the only structural dividers.

## Colors

> **Source of Truth:** EmpathoAI Industrial System (v2.1).

### Graphite Palette (Foundations)
- **Canvas** (`{colors.canvas}` — `#0A0A0B`): The base layer of the entire system.
- **Surface Deep** (`{colors.surface-deep}` — `#1A1A1C`): Secondary layer for cards and sections.
- **Surface Mid** (`{colors.surface-mid}` — `#2D2D2F`): Interactive background for secondary elements.
- **Border** (`{colors.border}` — `#3F3F41`): Standard border for elements.
- **Hairline** (`{colors.hairline}` — `#2D2D2F`): 1px dividers for spatial organization.

### Semantic Operation (Accents)
- **Electric Orange** (`{colors.accent}` — `#FF4402`): The authority token. Used for primary CTAs, active states, and critical highlights.
- **On-Accent** (`{colors.on-accent}` — `#0A0A0B`): Contrast partner for text/icons sitting on top of Electric Orange.

### Typography Neutrals
- **Primary Text** (`{colors.text-primary}` — `#F5F5F5`): High-contrast off-white for maximum readability.
- **Secondary Text** (`{colors.text-secondary}` — `#8E8E93`): Muted gray for body and descriptions.
- **Muted Text** (`{colors.text-muted}` — `#4B4B4D`): Low-emphasis metadata and utility labels.

## Typography

### Font Family
- **EmpathoAI Futura ND** (display campaign only) — proprietary geometric sans for the towering uppercase headlines burned into campaign hero photography. Falls back to Helvetica Now Text Medium → Helvetica → Arial.
- **Helvetica Now Display Medium** (headings 16–32px) — modern Helvetica cut tuned for display sizes; carries every section title, PDP product name, and dialog headline.
- **Helvetica Now Text Medium** (UI 12–16px) — buttons, captions, swatch labels, badge text. The system's UI workhorse.
- **Helvetica Now Text** (body and links) — long-form body and underlined inline links.
- **Helvetica Neue 9px** — legal-fine-print utility row only (`{typography.utility-xs}`).

When substituting on systems without proprietary EmpathoAI fonts: pair **Inter** (Display 700 for body chrome, Display 500 for buttons) with **Bebas Neue** or **Anton** at 96px/0.9 line-height for the campaign headline tier. Tighten letter-spacing slightly (-0.5%) on the substitute to approximate Futura ND's optical weight.

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.display-campaign}` | 96px | 500 | 0.9 | 0 | Editorial campaign headline burned into hero photography (uppercase) |
| `{typography.heading-xl}` | 32px | 500 | 1.2 | 0 | Section headers — "GROWTH ARCHITECTURE", "SYSTEMS DIAGNOSIS" |
| `{typography.heading-lg}` | 24px | 500 | 1.2 | 0 | Subsection titles, large CTA labels |
| `{typography.heading-md}` | 16px | 500 | 1.75 | 0 | Card titles, FAQ row labels |
| `{typography.body-md}` | 16px | 400 | 1.5 | 0 | Body copy, product descriptions |
| `{typography.body-strong}` | 16px | 500 | 1.5 | 0 | Sub-headings, primary nav links |
| `{typography.button-md}` | 16px | 500 | 1.5 | 0 | Standard pill CTAs across the system |
| `{typography.caption-md}` | 14px | 500 | 1.5 | 0 | Sub-labels, footer links |
| `{typography.caption-sm}` | 12px | 500 | 1.5 | 0 | Low-emphasis labels, badge text |
| `{typography.utility-xs}` | 9px | 500 | 1.75 | 0 | Legal copyright / fine-print row at the very bottom |

### Principles
The system runs on extreme typographic contrast: a single 96px uppercase display tier reserved for editorial campaign moments, and a quiet 12–16px Helvetica Now Text/Medium tier carrying everything else. There is almost no middle ground — the jump from `{typography.heading-xl}` (32px) directly to `{typography.body-strong}` (16px) is intentional and creates the "billboard above, catalog below" effect across every page.

## Layout

### Spacing System
- **Base unit:** 8px
- **Tokens (front matter):** `{spacing.xxs}` (2px) · `{spacing.xs}` (4px) · `{spacing.sm}` (8px) · `{spacing.md}` (16px) · `{spacing.lg}` (24px) · `{spacing.xl}` (32px) · `{spacing.section}` (64px)
- **Universal rhythm:** every page uses `{spacing.section}` (64px) as the vertical gap between major content blocks.

### Grid & Container
- **Max width:** ~1440px content area.
- **Column patterns:** Product grids use 3-up to 5-up layouts depending on content density.

### Whitespace Philosophy
Whitespace is a tool for separation, not for breath. Sections butt directly against each other vertically with `{spacing.section}` rhythm.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 — Flat | No shadow, no border | Default for cards, buttons, sections — the dominant treatment |
| 1 — Hairline divider | 1px solid `{colors.hairline}` | Section separators, footer column borders |

The system has no drop-shadow elevation. Cards do not lift. The only depth cue is the contrast between full-bleed photography and the Graphite foundations.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.none}` | 0px | Universal geometry — cards, campaign tiles, navigation, buttons, footer |

## Components

### Buttons

**`button-primary`** — the universal EmpathoAI CTA
- Background `{colors.accent}`, text `{colors.on-accent}`, type `{typography.button-md}`, padding `16px 32px`, rounded `{radius.none}`, elegant "hollow" hover state.
- Used on every primary action: "REQUEST DIAGNOSIS", "START DIAGNOSIS".

**`button-secondary`** — soft alternative on dark surfaces
- Background transparent, text `{colors.accent}`, type `{typography.button-md}`, padding `16px 32px`, rounded `{radius.none}`, border 1px `{colors.accent}`.

**`button-outline-on-image`** — overlay CTA on photography
- Background `{colors.accent}`, text `{colors.on-accent}`, type `{typography.button-md}`, padding `12px 24px`, rounded `{radius.none}`, elegant "hollow" hover.

### Inputs & Forms

**`form-input`**
- Background `{colors.surface-deep}`, text `{colors.text-primary}`, rounded `{radius.none}`, padding `12px 16px`, focus ring `{colors.accent}`.

### Cards & Containers

**`product-card`**
- Container: background `{colors.surface-deep}`, rounded `{radius.none}`, padding 0, no shadow.
- Metadata: sits below image with 1px hairline divider.

## Do's and Don'ts

### Do
- Use `{colors.accent}` (Electric Orange) exclusively for conversion and critical authority.
- Keep all CTAs pill-shaped at `{radius.pill}`.
- Enforce `{radius.none}` on all layout containers.
- Use 1px hairlines for structural separation.

### Don't
- Don't introduce drop shadows or gradients.
- Don't use light-mode backgrounds (e.g., Soft Cloud) for the core editorial experience.
- Don't use technical telemetry (brackets, coordinates) on the main editorial site.
- Don't deviate from the Graphite/Orange authority palette.

## SaaS vs Editorial Distinction

- **Editorial Website (Current)**: Strictly follows the EmpathoAI Industrial System. No telemetry, no monospaced technical metadata, no decorative tech overlays. Focus is on photography and massive typography.
- **SaaS Applications (Future)**: Telemetry and monospaced "Engineering" metadata (e.g., coordinates, timestamps, versioning) are reserved exclusively for functional application interfaces where technical transparency adds utility. These elements should never bleed into the main editorial site.
