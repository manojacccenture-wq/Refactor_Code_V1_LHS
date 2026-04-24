# TOKENS.md

> Complete design token reference for the LHS project. All values live in `app/styles/tokens/` and `app/styles/semantic/`.

---

## 1. TOKEN PHILOSOPHY

- **Single source of truth**: every design value is a CSS variable
- **No hardcoding**: hex values, raw pixel sizes, and named Tailwind colors are forbidden in component files
- **Layered system**: raw tokens → semantic aliases → utility classes

### Import Order (`app/styles/index.css`)

```
@import "tailwindcss";

tokens/    ← raw values (colors, type scale, radius, shadows, border)
base/      ← @layer base resets and global typography
semantic/  ← alias variables + tokenized utility classes
components/ ← scoped component styles
```

---

## 2. COLOR TOKENS

### Raw Palette — `app/styles/tokens/colors.css`

#### Primary

| Token | Value |
|---|---|
| `--color-primary-1` | `#00C2A8` |
| `--color-primary-2` | `#70D2FF` |
| `--color-primary-3` | `#4CBFFF` |

#### Secondary

| Token | Value |
|---|---|
| `--color-secondary-1` | `#D9DBE9` |

#### Neutral

| Token | Value |
|---|---|
| `--color-neutral-800` | `#170F49` |
| `--color-neutral-700` | `#514F6E` |
| `--color-neutral-600` | `#6F6C90` |
| `--color-neutral-500` | `#A0A3BD` |
| `--color-neutral-400` | `#D9DBE9` |
| `--color-neutral-300` | `#EFF0F6` |
| `--color-neutral-200` | `#F7F7FB` |
| `--color-neutral-100` / `--color-white` | `#FFFFFF` |
| `--color-black` | `#000000` |

#### Accent / Gradient

| Token | Value |
|---|---|
| `--color-green-400` | `#2dd4bf` |
| `--color-green-500` | `#22c55e` |
| `--color-blue-500` | `#0F62FE` |
| `--color-blue-100` | `#D9D9D9` |
| `--color-yellow-500` | `#F5B82E` |
| `--color-purple-500` | `#6C5CE7` |
| `--color-purple-100` | `#EDE9FE` |

#### RGB (for `rgb()` / `rgba()` usage)

| Token | Value |
|---|---|
| `--color-neutral-800-rgb` | `23, 15, 73` |
| `--color-neutral-300-rgb` | `239 240 246` |
| `--color-primary-rgb` | `0 194 168` |

---

### Semantic Aliases — `app/styles/semantic/semantic.css`

Use these in all UI components. Do not reference raw palette tokens directly in components.

| Token | Resolves To | Use For |
|---|---|---|
| `--color-text-title` | `--color-neutral-800` | Headings |
| `--color-text-body` | `--color-neutral-600` | Paragraphs, body copy |
| `--color-bg-page` | `--color-neutral-200` | Page background |
| `--color-bg-card` | `--color-white` | Card / panel background |
| `--color-border` | `--color-neutral-300` | Borders, dividers |
| `--color-brand` | `--color-primary-1` | Brand accent, highlights |

#### Button Tokens

| Token | Use For |
|---|---|
| `--btn-primary-bg` | Primary button background |
| `--btn-primary-text` | Primary button text |
| `--btn-secondary-bg` | Secondary button background |
| `--btn-secondary-text` | Secondary button text |
| `--btn-outline-border` | Outline button border |
| `--btn-outline-text` | Outline button text |
| `--btn-ghost-text` | Ghost button text |
| `--btn-hover-opacity` | Hover opacity (`0.9`) |
| `--btn-disabled-opacity` | Disabled opacity (`0.6`) |

#### Header / Nav Tokens

| Token | Use For |
|---|---|
| `--header-bg` | Header background |
| `--header-border` | Header bottom border |
| `--nav-link-text` | Nav link default color |
| `--nav-link-hover` | Nav link hover color |
| `--nav-link-active` | Active nav link color |

---

### Tokenized Color Utility Classes

Defined in `app/styles/semantic/semantic.css` and `app/styles/tokens/border.css`:

```
.text-primary          → color: var(--color-brand)
.text-neutral-800      → color: var(--color-neutral-800)
.text-neutral-500      → color: var(--color-neutral-500)
.border-neutral-300    → border-color: var(--color-neutral-300)
.bg-neutral-200        → background-color: var(--color-neutral-200)
.bg-neutral-300        → background-color: var(--color-neutral-300)
.bg-primary-gradient   → linear-gradient(to right, --color-primary-1, #005c50)
.bg-primary-soft       → radial-gradient glow using --color-primary-rgb
```

---

## 3. TYPOGRAPHY TOKENS

### Raw Scale — `app/styles/tokens/typography.css`

#### Font Families

| Token | Value |
|---|---|
| `--font-afacad` | `"Afacad", sans-serif` (primary body font) |
| `--font-outfit` | via `--font-outfit` CSS variable (display) |

#### Font Weights

| Token | Value |
|---|---|
| `--font-regular` | `400` |
| `--font-medium` | `500` |
| `--font-semi-bold` | `600` |
| `--font-bold` | `700` |

#### Heading Sizes (fluid / `clamp`)

| Token | Range |
|---|---|
| `--text-h1` | `clamp(36px, 4vw, 60px)` |
| `--text-h2` | `clamp(28px, 3.5vw, 36px)` |
| `--text-h3` | `clamp(20px, 2.5vw, 24px)` |
| `--text-h4` | `clamp(18px, 2vw, 22px)` |
| `--text-h5` | `clamp(16px, 1.8vw, 18px)` |
| `--text-h6` | `clamp(14px, 1.5vw, 16px)` |

#### Body Sizes

| Token | Range |
|---|---|
| `--text-body-lg` | `18px` |
| `--text-body-md` | `clamp(14px, 1.5vw, 16px)` |
| `--text-body-sm` | `clamp(13px, 1.2vw, 14px)` |

#### Line Heights

| Token | Value |
|---|---|
| `--leading-h1` | `1.15` |
| `--leading-h2` | `1.3` |
| `--leading-h3` – `--leading-h6` | `1.4` |
| `--leading-body-lg` | `1.5` |
| `--leading-body-md` / `--leading-body-sm` | `1.6` |

#### Special

| Token | Value |
|---|---|
| `--font-quote` | `clamp(18px, 2.5vw, 34px)` |

---

### Global Application — `app/styles/base/font.css`

All heading and `<p>` styles are applied globally via `@layer base`. **Do not re-declare these in component files.**

```css
@layer base {
  h1  { font-size: var(--text-h1);  line-height: var(--leading-h1);  font-weight: var(--font-bold); }
  h2  { font-size: var(--text-h2);  line-height: var(--leading-h2);  font-weight: var(--font-bold); }
  h3  { font-size: var(--text-h3);  line-height: var(--leading-h3);  font-weight: var(--font-medium); }
  h4  { font-size: var(--text-h4);  line-height: var(--leading-h4);  font-weight: var(--font-medium); }
  h5  { font-size: var(--text-h5);  line-height: var(--leading-h5);  font-weight: var(--font-medium); color: var(--color-brand-primary); }
  h6  { font-size: var(--text-h6);  line-height: var(--leading-h6);  font-weight: var(--font-medium); }
  p   { font-size: var(--text-body-md); line-height: var(--leading-body-md); color: var(--color-text-body); }
}
```

---

### Tokenized Typography Utility Classes — `app/styles/semantic/typography.css`

Use when you need to override global heading styles for a specific context:

```
.text-heading-xl   → h1 size + weight + line-height
.text-heading-lg   → h2 size + weight + line-height
.text-heading-md   → h3 size + weight + line-height
.text-heading-sm   → h4 size + weight + line-height
.text-body-lg      → body-lg size + line-height
.text-body-md      → body-md size + line-height
.text-body-sm      → body-sm size + line-height
```

---

## 4. SPACING

Spacing uses Tailwind's built-in scale. There are no custom spacing tokens; use standard utilities.

```
p-4   → 1rem
p-6   → 1.5rem
p-8   → 2rem
p-12  → 3rem
gap-4 / gap-6 / gap-8
mt-4 / mb-8 / mx-auto
```

Section vertical rhythm follows the existing pattern in each section folder — check before adding padding.

---

## 5. BORDER RADIUS — `app/styles/tokens/radius.css`

| Token | Value |
|---|---|
| `--radius-sm` | `8px` |
| `--radius-md` | `12px` |
| `--radius-lg` | `16px` |
| `--radius-xl` | `24px` |
| `--radius-full` | `999px` |

Usage:

```css
border-radius: var(--radius-md);
```

---

## 6. SHADOWS — `app/styles/tokens/shadows.css`

| Token | Use For |
|---|---|
| `--shadow-card` | Default card shadow |
| `--shadow-card-hover` | Card hover state |
| `--shadow-card-sm` | Small / subtle shadow |
| `--shadow-card-md` | Medium elevation |
| `--shadow-card-lg` | High elevation modal / overlay |

---

## 7. LAYOUT TOKEN

| Token | Value |
|---|---|
| `--hero-offset` | `clamp(80px, 10vh, 140px)` |
| `--timeline-line-color` | `var(--color-primary-1)` |

---

## 8. USAGE EXAMPLES

```tsx
// ✅ Correct — semantic HTML + token color
<h2>Our Services</h2>
<p style={{ color: "var(--color-text-body)" }}>...</p>

// ✅ Correct — tokenized utility class override
<h1 className="text-heading-xl text-primary">LHS</h1>

// ✅ Correct — CSS variable in Tailwind inline style
<div style={{ background: "var(--color-bg-card)", borderRadius: "var(--radius-md)" }}>

// ✅ Correct — tokenized utility for background
<div className="bg-neutral-200">
```

---

## 9. ANTI-PATTERNS

```tsx
// ❌ Hardcoded hex
<h2 style={{ color: "#170F49" }}>

// ❌ Tailwind color class
<p className="text-gray-600">

// ❌ Tailwind font size class
<h3 className="text-2xl font-bold">

// ❌ Raw pixel in className
<div className="rounded-[12px]">   // use var(--radius-md) instead

// ❌ Direct palette token in component (use semantic alias)
color: var(--color-neutral-600)    // use var(--color-text-body)
```
