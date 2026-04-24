# AGENTS.md

> Single source of truth for AI tools, agents, and Copilot working in this codebase.

---

## 1. PROJECT OVERVIEW

Scalable, section-based marketing site for LHS.

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Styling | Tailwind CSS v4 |
| Language | TypeScript |
| Forms | react-hook-form + zod |
| Design Tokens | CSS custom properties (`var(--*)`) |
| Figma Integration | MCP-based extraction |
| Fonts | Afacad (body), Outfit (display) |

---

## 2. ARCHITECTURE

### Page Pattern

```
app/(marketing)/<page>/page.tsx          ← composition only, no UI logic
app/components/sections/<page>/<Section>/  ← all UI lives here
```

### Layout Wrapper

Every marketing page is wrapped via `app/(marketing)/layout.tsx`:

```tsx
<Header />
<main>{children}</main>
<Footer />
```

### `page.tsx` Rules

- Import and compose section components only
- No `useState`, no `useEffect`, no inline JSX UI
- No styles applied at this layer

---

## 3. DESIGN SYSTEM RULES (CRITICAL)

### Typography

All heading and body styles are set globally via `@layer base` in `app/styles/base/font.css`.

**Use semantic HTML tags only:**

```tsx
<h1> <h2> <h3> <h4> <h5> <h6> <p>
```

**Never use Tailwind typography classes:**

```
❌ text-sm   text-lg   text-xl   text-2xl   font-bold   font-semibold
```

For utility overrides, use tokenized classes only:

```
✅ text-heading-xl   text-heading-lg   text-body-md   text-body-sm
```

---

### Colors

All colors are CSS variables defined in `app/styles/tokens/colors.css`.

```
✅ var(--color-primary-1)
✅ var(--color-neutral-800)
✅ var(--color-text-body)
✅ var(--color-brand)
```

```
❌ #00C2A8   ❌ text-teal-500   ❌ bg-gray-100
```

Semantic aliases (preferred for UI components):

```
--color-text-title       → heading color
--color-text-body        → paragraph color
--color-bg-page          → page background
--color-bg-card          → card background
--color-brand            → primary brand color
--color-border           → border color
```

---

### Spacing & Layout

- Use Tailwind spacing utilities (`p-4`, `gap-6`, `mt-8`)
- For consistent section padding, follow the pattern already used in the section being edited
- Never hardcode `px` values in `className`

---

## 4. FOLDER STRUCTURE

```
app/
  (marketing)/
    layout.tsx              ← Header + Footer wrapper
    page.tsx                ← home page composition
    about/page.tsx
    career/page.tsx
    contact/page.tsx
    delivery-framework/page.tsx
    industries/page.tsx
    products/page.tsx
    resources/page.tsx
    services/page.tsx
    technology/page.tsx
  components/
    layout/                 ← Header, Footer (shared, never duplicated)
    sections/               ← page-specific UI sections
      home/
      about/
      services/
      products/
      industries/
      resources/
      career/
      contact/
      delivery-framework/
    shared/                 ← cross-page reusable components
    ui/                     ← primitive UI components (Button, Input, etc.)
  styles/
    index.css               ← root import (tokens → base → semantic → components)
    tokens/                 ← raw design tokens
    base/                   ← global resets, @layer base typography
    semantic/               ← alias variables + utility classes
    components/             ← component-scoped styles
lib/
  api/                      ← all fetch logic
  validations/              ← zod schemas
```

### Strict Rules

- `sections/<page>/` contains ONLY that page's components
- Never import a section component from a different page's folder
- Shared components go in `components/shared/` or `components/ui/`

---

## 5. REUSABILITY

### Always reuse — never recreate:

| Component | Location |
|---|---|
| `Header` | `app/components/layout/Header.tsx` |
| `Footer` | `app/components/layout/Footer.tsx` |
| `Button` | `app/components/ui/Button.tsx` |
| `Input` | `app/components/ui/Input.tsx` |
| `FeatureCard` | `app/components/ui/FeatureCard.tsx` |
| `ImageCard` | `app/components/ui/ImageCard.tsx` |
| `AccordionItem` | `app/components/ui/AccordionItem.tsx` |

---

## 6. API

All API calls live in `lib/api/`. No fetch logic inside components.

```ts
// ✅ Correct
const BASE_URL = process.env.NEXT_PUBLIC_API_BASE;
const res = await fetch(`${BASE_URL}/endpoint`);
```

```ts
// ❌ Wrong
const res = await fetch("https://api.example.com/endpoint");
```

Form validation schemas are in `lib/validations/` using zod.

---

## 7. AI INSTRUCTIONS

### Before writing any code:

1. Read the existing section folder for the target page
2. Check `app/styles/tokens/` and `app/styles/semantic/` for available tokens
3. Check `app/components/ui/` before creating any new primitive
4. Fetch Figma design via MCP — do not assume spacing, color, or layout values

### Strictly forbidden:

- Modifying `Header`, `Footer`, or any unrelated section
- Hardcoding colors, font sizes, or spacing values
- Creating new files that duplicate existing components
- Applying Tailwind default color/typography classes
- Inventing responsive behavior not shown in Figma

### MCP Figma Rule:

- Fetch design ONCE per task
- Extract: layout, spacing, colors, typography, assets
- Map all extracted values to existing CSS tokens before writing code
- If a token does not exist for a design value, flag it — do not hardcode

---

## 8. RESPONSIVENESS

- Mobile-first: base styles target mobile, use `md:` / `lg:` for larger screens
- Match Figma breakpoints exactly
- Never invent layout behavior not in the design

---

## 9. HARD CONSTRAINTS

| Rule | Detail |
|---|---|
| No UI changes without requirement | Never alter existing UI unless explicitly asked |
| No hardcoded values | Use tokens for all colors, font sizes, radii, shadows |
| No design system violations | Typography and color rules are non-negotiable |
| No unnecessary files | Only create files that the task strictly requires |
| No cross-page section leakage | Sections stay in their own folder |
