# Preferred Tech Stack & Implementation Rules

**Context:** EmpathoAI Ecosystem

When generating code or UI components for this brand, you **MUST** strictly adhere to the following technology choices.

## Core Stack
* **Framework:** React (Vite)
* **Language:** TypeScript
* **Styling Engine:** Tailwind CSS (Mandatory. Do not use plain CSS or styled-components unless explicitly asked.)
* **Component Library:** shadcn/ui (Use these primitives as the base for all new components.)
* **Animation:** Framer Motion (`framer-motion`)
* **Icons:** Lucide React (`lucide-react`)

## Implementation Guidelines

### 1. Tailwind Usage
* Use utility classes directly in JSX.
* Utilize the color tokens defined in `design-tokens.json` (e.g., `bg-void`, `text-institutional`, `border-noise`).
* **Dark Mode:** Support dark mode using Tailwind's `dark:` variant modifier (default brand is dark-first).

### 2. Component Patterns
* **Buttons:** Primary actions must use `institutional-btn` (1px white borders). Secondary actions should use the 'Ghost' or 'Outline' variants from shadcn/ui.
* **Headings:** Apply `brutal-heading` (transform: scaleX(0.94)) and `letter-spacing-brutal`.
* **Forms:** Labels must always be placed *above* input fields. Use standard Tailwind spacing (e.g., `gap-4` between form items).
* **Layout:** Use Flexbox and CSS Grid via Tailwind utilities for all layout structures.

### 3. Forbidden Patterns
* Do NOT use rounded corners (`rounded-*`) unless explicitly specified; the brand follows a sharp, brutalist aesthetic.
* Do NOT use jQuery or Bootstrap.
* Do NOT create new CSS files; keep styles located within component files via Tailwind.
