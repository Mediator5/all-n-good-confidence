# All N' Good Confidence

Marketing site for All N' Good Confidence — a branding, marketing, and website design firm. Built with Next.js (App Router) and Tailwind CSS.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Deploying to Vercel

Push this repo to GitHub (or GitLab/Bitbucket) and import it at https://vercel.com/new. Vercel auto-detects Next.js — no extra config needed. Click Deploy.

## What to customize

- **Logo**: `components/Header.tsx` currently renders a text wordmark. Swap in your logo image (drop a file in `public/` and use `next/image`).
- **Hero image**: `components/Hero.tsx` has a dashed placeholder box — replace with your hero illustration or photo.
- **Work section**: `components/Work.tsx` has 5 placeholder project cards — swap in real project screenshots/links.
- **Contact form**: `components/Contact.tsx` submits nowhere yet (`handleSubmit` just shows a thank-you message). Wire it up to an API route, or a service like Formspree/Resend, to actually receive submissions.
- **Colors**: palette (blue / dark brown / light brown / cream) lives in `tailwind.config.ts`.
- **Copy**: all section text is plain JSX strings in each component — edit directly.

## Structure

```
app/            Root layout + homepage
components/     One component per section (Header, Hero, About, Work, Values, Services, Contact, GoodSpots, Careers, Footer)
```
