# IOTA Labs

Website for [IOTA Labs](https://iotalabs.io) — built with [Next.js](https://nextjs.org/).

## Getting Started

```bash
# From the monorepo root
pnpm --filter iotalabs dev
```

Or from this directory:

```bash
pnpm dev
```

The app runs on http://localhost:3000 by default, or another available port if 3000 is in use.

## Scripts

| Command          | Description                           |
| ---------------- | ------------------------------------- |
| `pnpm dev`       | Start local dev server with Turbopack |
| `pnpm build`     | Production build                      |
| `pnpm start`     | Start production server               |
| `pnpm lint`      | Lint the project                      |
| `pnpm typecheck` | Run TypeScript type checks            |

## Environment Variables

Copy `.env.defaults` to `.env.local` and fill in the required values.

| Variable                                   | Description                     |
| ------------------------------------------ | ------------------------------- |
| `NEXT_PUBLIC_IOTALABS_GOOGLE_ANALYTICS_ID` | Google Analytics measurement ID |
| `IOTALABS_AIRTABLE_KEY`                    | Airtable API key                |
| `IOTALABS_BLOG_KEY`                        | Blog API key                    |
| `IOTALABS_BLOG_URL`                        | Blog API URL                    |
