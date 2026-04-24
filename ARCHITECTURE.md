# ARCHITECTURE.md

> System design, component layering, and data flow for the LHS marketing site.

---

## 1. HIGH-LEVEL ARCHITECTURE

```
Browser
  └── Next.js App Router (SSR / RSC)
        └── app/layout.tsx              ← root HTML shell, font injection
              └── (marketing)/layout.tsx ← Header + main + Footer
                    └── <page>/page.tsx  ← section composition
                          └── sections/<page>/<Section>
                                └── components/ui/   ← primitives
                                └── components/shared/ ← cross-page
```

- All marketing pages share a single layout shell (`Header` → `main` → `Footer`)
- Pages are React Server Components by default; sections opt in to `"use client"` only when required
- No global state management library — local state via `useState`, form state via `react-hook-form`

---

## 2. FOLDER STRUCTURE

```
app/
  layout.tsx                  ← root: font variables, <html>, <body>
  globals.css                 ← imports app/styles/index.css
  (marketing)/
    layout.tsx                ← Header + Footer wrapper for all marketing routes
    page.tsx                  ← home page
    about/page.tsx
    career/page.tsx
      [slug]/page.tsx         ← dynamic job listing page
    contact/page.tsx
    delivery-framework/page.tsx
    industries/page.tsx
    products/page.tsx
    resources/
      page.tsx
      blogs/page.tsx
        [slug]/               ← dynamic blog post
      case-studies/page.tsx
        [slug]/               ← dynamic case study
      videos/page.tsx
    services/page.tsx
    technology/page.tsx
  components/
    layout/
      Header.tsx              ← site-wide nav, dropdown, mobile menu
      Footer.tsx              ← site-wide footer
    sections/
      home/                   ← Hero, Trusted, Services, WhyChoose, Insights,
      │                          CTA, TechStack, Testimonial, Contact, GalleryModal
      about/                  ← AboutHero, WhatSetsUsApart, WhyChooseUs, Leadership, AboutGallery
      services/
      products/
      industries/
      resources/
      career/                 ← CareerHero, CareerOpenings, CareerProcess, CareerTestimonials, ApplyForm
      contact/                ← ContactHero, ContactLayout
      delivery-framework/     ← DeliveryHero, DeliveryTimeline
    shared/                   ← cross-page reusable components and assets
    ui/
      Button.tsx
      Input.tsx
      FeatureCard.tsx
      ImageCard.tsx
      AccordionItem.tsx
  styles/
    index.css                 ← ordered imports: base → tokens → semantic → components
    base/
      body.css                ← box-sizing reset, body font
      font.css                ← @layer base: h1–h6, p global styles
      index.css
    tokens/
      colors.css              ← raw color palette
      typography.css          ← font sizes, weights, line heights
      radius.css              ← border radius scale
      shadows.css             ← box shadow scale
      border.css              ← border utility classes and gradient utilities
      index.css
    semantic/
      colors.css              ← simple semantic aliases (--color-text-title, etc.)
      semantic.css            ← full semantic system: text, bg, border, button, nav, header tokens
      typography.css          ← --font-heading-* aliases + .text-heading-* utility classes
      index.css
    components/
      button.css
      card.css
      header.css
      footer.css
      dropdown.css
      gallery.css
      hero-bg.css
      ImageCard.css
      index.css
lib/
  api/
    contact.ts                ← submitContact()
    apply.ts                  ← submitApplication()
  validations/
    contact.ts                ← zod schema for contact form
    apply.ts                  ← zod schema for apply form
public/
  logo.svg
  (static assets)
```

---

## 3. COMPONENT LAYERS

### Layer 1 — Layout (`components/layout/`)

Global shell components rendered once per page.

- `Header.tsx` — navigation, dropdowns, mobile menu, active link state
- `Footer.tsx` — site links, legal, social icons

**Rules**: Never modified as a side effect of section work. Changes require an explicit requirement.

---

### Layer 2 — Sections (`components/sections/<page>/`)

Page-specific UI blocks. Each section is a self-contained folder.

```
sections/home/Hero/
  Hero.tsx          ← section root component
  HeroContent.tsx   ← sub-components as needed
  assets/           ← images or SVGs scoped to this section
```

**Rules**:
- One folder per logical section
- No imports across page folders
- Section components are the only layer that can contain layout decisions (padding, grid, flex)

---

### Layer 3 — UI Primitives (`components/ui/`)

Stateless, reusable building blocks with no page-specific logic.

| Component | Purpose |
|---|---|
| `Button` | All CTA and action buttons |
| `Input` | Form text inputs |
| `FeatureCard` | Icon + title + body card |
| `ImageCard` | Image + overlay card |
| `AccordionItem` | Expandable FAQ row |

**Rules**: Props-driven only. No direct API calls or page-specific imports.

---

### Layer 4 — Shared (`components/shared/`)

Components used by more than one page but not generic enough for `ui/`.

---

## 4. PAGE COMPOSITION FLOW

```
page.tsx
  ↓ imports sections
  <SectionA />
  <SectionB />
  <SectionC />
```

Each `page.tsx`:
- Is a React Server Component
- Composes sections in order — no layout logic of its own
- Does not pass data down; sections fetch or receive data independently

---

## 5. STYLE SYSTEM INTEGRATION

```
globals.css
  └── app/styles/index.css
        ├── @import "tailwindcss"
        ├── base/index.css        ← resets, global font styles via @layer base
        ├── tokens/index.css      ← :root CSS variable definitions
        ├── semantic/index.css    ← alias variables + utility classes
        └── components/index.css  ← component-scoped CSS
```

### How a color reaches a component

```
tokens/colors.css        → --color-primary-1: #00C2A8
semantic/semantic.css    → --color-brand: var(--color-primary-1)
Component JSX            → className="text-primary"  (→ color: var(--color-brand))
```

### How a heading is styled

```
tokens/typography.css    → --text-h2: clamp(28px, 3.5vw, 36px)
base/font.css            → h2 { font-size: var(--text-h2); ... }
Component JSX            → <h2>Section Title</h2>  ← no className needed
```

---

## 6. API FLOW

```
User action (form submit)
  ↓
react-hook-form + zod validation (lib/validations/)
  ↓
API function call (lib/api/)
  ↓
fetch(`${process.env.NEXT_PUBLIC_API_BASE}/endpoint`)
  ↓
External backend API
```

- Validation runs client-side before the fetch
- `lib/api/` functions handle the HTTP request and throw on failure
- Components handle loading/error state from the function's resolved/rejected promise
- `NEXT_PUBLIC_API_BASE` must be set in `.env.local`; the API function throws if it is missing

---

## 7. FIGMA + MCP INTEGRATION

Figma designs are the source of truth for all visual decisions.

**Workflow per task:**

1. Fetch the relevant Figma frame via MCP (one fetch per task)
2. Extract: layout grid, spacing values, color values, typography styles, asset references
3. Map each extracted value to an existing CSS token from `TOKENS.md`
4. If a value has no matching token, flag it — do not hardcode
5. Implement using the mapped tokens

MCP is used exclusively for design extraction. It does not affect runtime behavior.

---

## 8. ROUTING

| Pattern | Type | Example |
|---|---|---|
| `/` | Static | Home page |
| `/about` | Static | About page |
| `/career` | Static | Career listing |
| `/career/[slug]` | Dynamic | Individual job page |
| `/resources/blogs` | Static | Blog index |
| `/resources/blogs/[slug]` | Dynamic | Individual blog post |
| `/resources/case-studies/[slug]` | Dynamic | Individual case study |

Dynamic routes receive `params.slug` and are expected to fetch content from the API via `lib/api/`.

---

## 9. SCALABILITY STRATEGY

| Concern | Approach |
|---|---|
| New page | Add `app/(marketing)/<page>/page.tsx` + `components/sections/<page>/` |
| New section | Add folder inside the relevant `sections/<page>/` directory |
| New primitive | Add to `components/ui/` with props interface, no page-specific logic |
| New token | Add to the appropriate `tokens/*.css` file, add a semantic alias if needed |
| New API endpoint | Add a function in `lib/api/`, add a zod schema in `lib/validations/` if a form is involved |
| New font | Register in `app/layout.tsx` as a CSS variable, reference via token |

The architecture supports adding new pages and sections without modifying any shared infrastructure.
