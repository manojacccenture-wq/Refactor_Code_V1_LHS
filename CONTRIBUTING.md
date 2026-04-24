# CONTRIBUTING.md

> Guidelines for all contributors (human and AI) working on the LHS codebase.

---

## 1. DEVELOPMENT PRINCIPLES

| Principle | Meaning |
|---|---|
| Consistency over creativity | Follow existing patterns — don't introduce new conventions |
| Reuse over duplication | Check existing components before creating new ones |
| Tokens over hardcoding | Every color, size, and radius comes from a CSS variable |
| Structure over shortcuts | Correct folder placement always, even for small additions |

---

## 2. PROJECT STRUCTURE RULES

```
app/(marketing)/<page>/page.tsx   ← composition only
app/components/sections/<page>/   ← all UI for that page
app/components/layout/            ← Header, Footer (do not modify without explicit requirement)
app/components/ui/                ← primitive components
app/components/shared/            ← cross-page reusable components
lib/api/                          ← all fetch logic
lib/validations/                  ← all zod schemas
app/styles/tokens/                ← raw CSS variable values
app/styles/semantic/              ← alias variables and tokenized utilities
```

### Rules

- `page.tsx` must contain only imports and JSX composition — no `useState`, `useEffect`, or inline UI
- Section components belong in `sections/<page>/` — never import them from another page's folder
- A new primitive (button, input, card) goes in `components/ui/`, not inside a section
- Cross-page components (e.g. a shared badge or tag) go in `components/shared/`

---

## 3. COMPONENT RULES

- One component per file
- File name matches the component name (PascalCase): `HeroSection.tsx`
- Folder name matches the component name when the component has sub-files: `Hero/Hero.tsx`
- No UI logic in `page.tsx`
- No business logic inside UI primitives
- Client components (`"use client"`) only when interactivity is strictly required

### Forbidden

- Duplicating an existing component
- Creating a component that wraps a single HTML element with no additional logic
- Importing across section page boundaries (e.g., importing a `home/` component in `about/`)

---

## 4. DESIGN RULES

### Typography

- Use semantic HTML tags: `<h1>`–`<h6>`, `<p>` — styles are applied globally via `@layer base`
- Do not add `className` for font size or weight on headings unless overriding with a tokenized class
- Allowed override classes: `text-heading-xl`, `text-heading-lg`, `text-heading-md`, `text-heading-sm`, `text-body-lg`, `text-body-md`, `text-body-sm`

### Colors

- All colors via CSS variables: `var(--color-*)` — see `TOKENS.md`
- Prefer semantic aliases over raw palette tokens in components:
  - `var(--color-text-title)` not `var(--color-neutral-800)`
  - `var(--color-brand)` not `var(--color-primary-1)`
- Never use Tailwind color utilities (`text-teal-500`, `bg-gray-100`, etc.)
- Never use hex values directly in JSX or CSS

### Spacing

- Use Tailwind spacing utilities (`p-4`, `gap-6`, `mt-8`)
- Never hardcode pixel values in `className` or inline styles

### Responsiveness

- Mobile-first: base styles for mobile, `md:` / `lg:` for larger screens
- Match Figma breakpoints exactly — do not invent responsive behavior

---

## 5. API USAGE RULES

- All fetch logic lives in `lib/api/` — no `fetch()` calls inside components
- Always read `NEXT_PUBLIC_API_BASE` from `process.env`; validate it is defined before use
- Validation schemas for form data live in `lib/validations/` using zod
- Never hardcode API URLs or base paths

```ts
// ✅ Correct
const BASE_URL = process.env.NEXT_PUBLIC_API_BASE;
if (!BASE_URL) throw new Error("API base URL is not defined");
const res = await fetch(`${BASE_URL}/endpoint`, { ... });
```

---

## 6. GIT WORKFLOW

### Branch Naming

```
feature/<short-description>     → new functionality
fix/<short-description>         → bug fixes
chore/<short-description>       → non-functional changes (deps, configs)
refactor/<short-description>    → code restructuring without behavior change
```

### Commit Message Format

Follow conventional commits:

```
feat: add CareerOpenings section
fix: correct nav active state on mobile
chore: update zod to v4
refactor: extract shared badge component
```

- Use present tense, imperative mood ("add" not "added")
- Keep subject line under 72 characters
- Reference a ticket or issue number when applicable: `feat: add hero animation (#42)`

### Branch Lifecycle

1. Branch off `main` (or the designated base branch)
2. Open a PR when the feature is complete and passes the checklist below
3. Squash commits on merge to keep history clean
4. Delete the branch after merge

---

## 7. PRE-MERGE CHECKLIST

Before opening a PR, verify all of the following:

**Code**
- [ ] No hardcoded hex colors, pixel values, or raw font sizes
- [ ] No Tailwind default color or typography classes (`text-gray-*`, `text-xl`, etc.)
- [ ] No duplicated component or logic that already exists
- [ ] No cross-page section imports
- [ ] No fetch logic inside a component file
- [ ] `page.tsx` contains only imports and composition

**Design**
- [ ] Component matches Figma design (spacing, color, typography)
- [ ] Mobile and desktop layouts verified
- [ ] All colors reference CSS token variables

**Quality**
- [ ] No TypeScript errors (`next build` passes)
- [ ] No ESLint warnings in modified files
- [ ] No unused imports or variables
- [ ] Component is accessible (semantic HTML, meaningful alt text, keyboard navigable where relevant)
