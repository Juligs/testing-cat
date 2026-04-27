# Comms Web Hub

Monorepo powering the IOTA web presence — built with [Next.js](https://nextjs.org/), [Turborepo](https://turbo.build/), and [pnpm](https://pnpm.io/).

## Apps

| App                    | Package name      | Description             |
| ---------------------- | ----------------- | ----------------------- |
| `apps/iotalabs`        | `iotalabs`        | IOTA Labs website       |
| `apps/iota-network`    | `iota-network`    | IOTA Network website    |
| `apps/iota-foundation` | `iota-foundation` | IOTA Foundation website |

## Packages & Shared Libraries

| Package                       | Name                       | Description                                                   |
| ----------------------------- | -------------------------- | ------------------------------------------------------------- |
| `ui-kit/react`                | `react-ui-kit`             | Shared React component library with Tailwind and theming      |
| `icons`                       | `@repo/icons`              | SVG icon library auto-generated from Figma                    |
| `shared`                      | `@repo/shared`             | Shared components, sections, hooks, and utilities across apps |
| `packages/eslint-config`      | `@repo/eslint-config`      | Shared ESLint configuration                                   |
| `packages/typescript-config`  | `@repo/typescript-config`  | Shared `tsconfig.json` presets                                |
| `packages/lint-staged-config` | `@repo/lint-staged-config` | Shared lint-staged configuration                              |

## Requirements

- **Node** >= 18
- **pnpm** 9.10.0 — install with `npm i -g pnpm@9.10.0`

## Getting Started

```bash
pnpm install
```

## Scripts

### Development

```bash
# Run all apps in development mode
pnpm dev

# Run a specific app only
pnpm iotalabs -- dev
pnpm iota-network -- dev
pnpm iota-foundation -- dev

# Run the UI Kit Storybook
pnpm ui-kit-react -- storybook
```

### Build

```bash
# Build everything
pnpm build

# Build a specific app
pnpm iotalabs -- build
pnpm iota-network -- build
pnpm iota-foundation -- build

# Package the UI Kit (required before building apps)
pnpm ui-kit-react -- package
```

### Linting & Formatting

```bash
# Lint all packages (includes format check)
pnpm lint

# Auto-fix lint issues
pnpm lint:fix

# Format all files with Prettier
pnpm format

# Check formatting without writing
pnpm format:check
```

### Type Checking

```bash
pnpm typecheck
```

## Environment Variables

Each app has its own `.env.local` file. Copy `.env.example` if present.
Global env vars consumed by Turbo are listed in `turbo.json` under `globalEnv`.
