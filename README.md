# PrizePayout

Prize payout and winner-management platform — a marketing portal that walks winners from ticket verification through a secure prize claim, with animated landing pages, payout statistics, and a searchable winners wall.

![Stars](https://img.shields.io/github/stars/5h4d0wn1k/prizepayout)
![Last commit](https://img.shields.io/github/last-commit/5h4d0wn1k/prizepayout)
![Issues](https://img.shields.io/github/issues/5h4d0wn1k/prizepayout)

PrizePayout is a **React + TypeScript + Vite** single-page application (Tailwind CSS design system) that presents the complete winner journey: a hero landing page, step-by-step claim instructions, payout statistics, testimonials, a filterable winners wall, legal pages, and a claim form UI — all statically shareable and deployable anywhere.

## Why PrizePayout

Prize programs live and die on trust. PrizePayout turns the claim experience into a clear, confidence-building funnel: prove legitimate payouts with public stats and a winners wall, explain the verification documents up front, and route claimants to a dedicated, secure claim page. The stack is intentionally lightweight (SPA + Vite) so the site can be hosted almost anywhere or exported for a CMS-driven flow.

## Features

- **Animated landing page** — `Hero`, `QuickStats`, `WinnerShowcase`, and `Testimonials` sections with `framer-motion` scroll effects
- **Winners Wall** (`/winners`) — searchable, filterable winner cards (region, prize range, timeframe) built on a `swiper` carousel
- **Payout statistics** (`/stats`) — monthly payout line/bar charts powered by `chart.js` + `react-chartjs-2`
- **Claim flow** (`/claim`) — dedicated secure claim form page with trust badges
- **How it works** (`/how-it-works`) — four-step ticket-verification process and an FAQ accordion
- **Supporting pages** — About, Contact, Media, and Legal routed with `react-router-dom` v6
- **Design system** — Tailwind CSS with a custom brand palette, `framer-motion` micro-interactions, and Montserrat / Open Sans fonts
- **TypeScript everywhere** — strict `tsc` build as part of `npm run build`

## Quickstart

Prerequisites: Node.js 18+ and npm.

```bash
npm install
npm run dev          # start the Vite dev server
npm run build        # type-check (tsc) + production build to dist/
npm run lint         # ESLint over src (max 0 warnings)
npm run preview      # preview the production build locally
```

## Project structure

```
src/
├── components/      # Hero, QuickStats, WinnerCards, Testimonials, ProcessSteps, FAQ, Navbar, Footer ...
├── pages/           # Home, WinnersWall, PayoutStats, HowItWorks, ClaimPrize, About, Contact, Media, Legal
└── router.tsx       # createBrowserRouter route table
public/winners/      # winner asset placeholders
public/proof/        # payout-proof asset placeholders
```

## Contributing

Contributions are welcome. Open an issue or pull request for new sections, better accessibility, or localization support.

## License

[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

