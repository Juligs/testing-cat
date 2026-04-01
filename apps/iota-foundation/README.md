# IOTA Foundation

Website for [IOTA Foundation](https://foundation.iota.org) — built with [Next.js](https://nextjs.org/).

## Getting Started

```bash
# From the monorepo root
pnpm --filter iota-foundation dev
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

| Variable                                         | Description                               |
| ------------------------------------------------ | ----------------------------------------- |
| `NEXT_PUBLIC_IOTAFOUNDATION_GOOGLE_ANALYTICS_ID` | Google Analytics measurement ID           |
| `GOOGLE_WEBSITES_SERVICE_ACCOUNT_JSON`           | Google service account credentials (JSON) |
| `MICA_API_URL`                                   | MiCA regulation data API URL              |
| `IOTA_NETWORK_BLOG_KEY`                          | Blog API key                              |
| `IOTA_NETWORK_BLOG_URL`                          | Blog API URL                              |
| `IOTALABS_AIRTABLE_KEY`                          | Airtable API key                          |
