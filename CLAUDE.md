# Personal Landing Page — Otto Bonilla

## Project Overview
Client-facing freelance/consulting landing page focused on AI consulting + MVP development. Serves both English and Spanish audiences with auto browser language detection.

## Stack
- **Framework:** Next.js 16 + TypeScript
- **Styling:** Tailwind CSS v4 + shadcn/ui (New York style, neutral color)
- **i18n:** next-intl with `[locale]` dynamic segment (`en`, `es`)
- **Animations:** Framer Motion (fade-in on scroll, hover effects)
- **Dark mode:** Class-based toggling, dark is the default

## Project Structure
```
├── messages/
│   ├── en.json                    # English translations
│   └── es.json                    # Spanish translations
├── public/
│   └── otto.jpg                   # Profile photo
├── src/
│   ├── i18n/
│   │   ├── routing.ts             # Locale config (en, es)
│   │   ├── request.ts             # Server-side message loading
│   │   └── navigation.ts          # Typed navigation helpers
│   ├── middleware.ts               # Browser language detection + redirect
│   ├── components/
│   │   ├── theme-provider.tsx      # Dark mode context (default: dark)
│   │   ├── navigation.tsx          # Sticky nav + mobile sheet + lang/theme toggles
│   │   ├── hero-section.tsx        # Headline + CTA → WhatsApp
│   │   ├── services-section.tsx    # 3 cards: MVP, AI, Consulting
│   │   ├── projects-section.tsx    # 5 project cards with badges
│   │   ├── about-section.tsx       # Photo, bio, clients with locations, tech stack
│   │   ├── contact-section.tsx     # WhatsApp, Email, LinkedIn, X buttons
│   │   ├── footer.tsx              # Copyright
│   │   └── ui/                     # shadcn components
│   ├── lib/
│   │   └── utils.ts                # cn() utility
│   └── app/
│       ├── globals.css             # Tailwind + shadcn CSS variables
│       └── [locale]/
│           ├── layout.tsx          # Per-locale metadata, hreflang, static params
│           └── page.tsx            # Assembles all sections
└── next.config.ts                  # next-intl plugin
```

## Key Decisions
- Dark mode is the default (set in both ThemeProvider initial state and `<html class="dark">`)
- All UI text lives in `messages/en.json` and `messages/es.json` — never hardcode strings in components
- shadcn components are used for all UI elements (buttons, cards, badges, nav, sheet)
- Mobile-first responsive design using Tailwind breakpoints

## Contact Details
- **WhatsApp:** https://wa.me/353830894852
- **Email:** mr.bonilla51@gmail.com
- **LinkedIn:** https://www.linkedin.com/in/otto-bonilla-93a786119/
- **X:** https://x.com/ottobonilla95

## Clients/Companies
Diageo, CarTrawler, Justerinis, Claro, ME+EM, SOAFEE, IOPEX, Agnitu, DEPT, Daedalus Design Labs

## Git & GitHub
- **Repo:** https://github.com/ottobonilla95/personal-landing-page
- **Account:** ottobonilla95 (personal) — switch with `gh auth switch -u ottobonilla95` before push
- **Work account:** otto-daedalusdesignlabs — always switch back after push
- **Local git user:** configured per-repo as ottobonilla95

## Commands
- `npm run dev` — local dev server at http://localhost:3000
- `npm run build` — production build
- `npm run lint` — ESLint
