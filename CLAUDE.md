# BDNHOST Website & Design System

## Brand Identity

**BDNHOST Group** — Israeli tech company providing AI-powered business solutions.
The split-color wordmark is the brand's single most recognizable asset:
**BDN** always renders in blue (`#0B4EA2`) and **HOST** always renders in orange (`#F5A623`) — never a single color, never swapped.

### Products
1. **EduManage** — AI-powered LMS / learning platform
2. **CompanyRadar** — Business intelligence dashboard
3. **CRM4BIZ** — Customer relationship management
4. **Israel Estates** — Real estate platform

### Contact
- Website: bdnhost.net
- Email: info@bdnhost.net
- LinkedIn: linkedin.com/in/bdnhost

## Tech Stack
- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS 4
- **Language**: TypeScript
- **Direction**: RTL-first
- **Font**: Heebo (variable, local file in `src/assets/fonts/`)
- **Icons**: Lucide (stroke, 1.75–2px, 24px default)

## Content Rules

### Language
- **Hebrew-first.** All UI copy defaults to Hebrew. English reserved for product names (BDNHOST, EduManage, CRM4BIZ, CompanyRadar), acronyms (CRM, LMS, BI, AI), and code terms.
- **RTL everywhere.** Every layout, every component.

### Tone
- Professional SaaS, direct, confident. Not cutesy, not folksy.
- **You-voice** (second person). Short verbs: `התחל`, `נסה`, `גלה`.
- **No emoji.** Use Lucide stroke icons instead.

### Wordmark
- Always two tokens, two colors: `BDN` + `HOST`. Writing `Bdnhost` or `bdnhost` is wrong.
- Product names: exact casing — `EduManage`, `CompanyRadar`, `CRM4BIZ`, `Israel Estates`.

## Visual Foundations

### Colors (MANDATORY)
| Token | Hex | Usage |
|---|---|---|
| `--bdn-blue` | `#0B4EA2` | Trust, chrome, secondary buttons, links, focus |
| `--host-orange` | `#F5A623` | Primary CTAs only — never large backgrounds |
| `--bg-light` | `#F8FAFC` | Page background |
| `--bg-dark` | `#0F172A` | Header, dark hero bands |
| `--surface` | `#FFFFFF` | Cards, inputs |
| `--border` | `#E2E8F0` | Card/input borders |
| `--fg-1` | `#1E293B` | Primary text |
| `--fg-2` | `#64748B` | Secondary text |
| `--success` | `#10B981` | |
| `--error` | `#EF4444` | |

**No gradients. No glassmorphism. No textures. Flat fills + subtle shadow.**

### Typography
- **One typeface: Heebo.** Weights: 400 / 500 / 700 / 800.
- **800** = wordmark, H1, hero display
- **700** = H2–H4
- **500** = buttons, interactive labels
- **400** = body, long-form
- Line-height: `1.5` normal, `1.75` relaxed for body (Hebrew reads tighter).

### Spacing
4px base grid. Component interiors: 16–24px. Section vertical: 64px desktop. Max-width: 1280px.

### Corner Radii
- `8px` — cards (canonical brand radius)
- `6px` — buttons, inputs
- `4px` — chips, tags
- `12px` — modals
- `9999px` — avatars, pills

### Shadows
| Token | Use |
|---|---|
| `--shadow-sm` | Resting input |
| `--shadow-md` | Default card |
| `--shadow-lg` | Card hover, popover |
| `--shadow-xl` | Modal, dropdown |
| `--shadow-focus` | 3px blue-25% ring |

No inner shadows. No glows. No colored shadows.

### Hover / Press / Focus
- **Brand buttons**: darker shade — `#093D82` (blue), `#D4891A` (orange). 150ms ease.
- **Ghost button**: `#EFF6FF` fill on hover.
- **Cards**: lift shadow `md → xl` over 250ms. No translate, no scale.
- **Nav links**: `gray-300 → white`.
- **Focus**: 3px blue-25% ring. Always visible for keyboard.
- **Press**: No shrink/scale — fights "solid, reliable" feel.

### Motion
Three durations: `150ms`, `250ms`, `350ms` — all `ease`. Color & shadow only. No bouncy springs, no parallax.

### Layout
- RTL default on every root.
- Sticky dark header, 72px tall.
- Max content width 1280px centered.
- 64px section padding vertical (desktop).
- Cards: 2–4 column grids at desktop, stack to 1 under 768px.

### Card Pattern
White fill · 1px `#E2E8F0` border · 8px radius · `shadow-md` · 24px padding. Variations only differ in content, never in chrome.

## File Structure
```
src/
├── app/
│   ├── layout.tsx        — RTL root, Heebo font, global styles
│   └── page.tsx          — Homepage (Header→Hero→Features→Products→CTA→Footer)
├── assets/
│   ├── fonts/            — Heebo-VariableFont_wght.ttf
│   ├── logos/            — SVG wordmarks (split-color, mono, stacked)
│   └── icons/            — (empty — use Lucide from CDN)
├─�� components/
│   ├── BrandLogo.tsx     — Split-color BDN+HOST wordmark
│   ├── Button.tsx        — Primary/secondary/ghost variants
│   ├── Card.tsx          — Canonical card chrome
│   ├── Header.tsx        — Sticky dark 72px header
│   ├── Hero.tsx          — Hebrew H1 + dashboard mockup
│   ├── FeatureRow.tsx    — 4-up feature highlights
│   ├── ProductsGrid.tsx  — 4 product cards with selection
│   ├── CTASection.tsx    — Blue band + orange CTA
│   └── Footer.tsx        — Dark footer with nav columns
└── styles/
    ���── colors_and_type.css — Full design tokens (from Claude Design)
    ├── design-tokens.css   — CSS custom properties
    └── globals.css         — Tailwind imports + base styles
```

## Design Assets
- `design-extract/` — Original Claude Design export (prototypes, previews, chat)
- SVG logos in `src/assets/logos/`: split-color, mono, stacked
- Variable font in `src/assets/fonts/Heebo-VariableFont_wght.ttf`
