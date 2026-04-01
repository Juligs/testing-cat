# react-ui-kit

Shared React component library for the IOTA web presence. Built with Vite, Tailwind CSS, and Storybook.

## Installation

The package is consumed as a workspace dependency — no separate install needed within the monorepo.

```json
{
    "dependencies": {
        "react-ui-kit": "workspace:*"
    }
}
```

## Setup

### 1. Import the stylesheet

In your app's root layout, import the UI Kit styles:

```ts
import 'react-ui-kit/style.css';
```

### 2. Wrap your app with `ThemeProvider`

The `ThemeProvider` sets the active brand theme on `document.documentElement` as a CSS class, which drives all themed styles.

```tsx
import { ThemeProvider, Theme } from 'react-ui-kit';

export default function RootLayout({ children }) {
    return (
        <html>
            <body>
                <ThemeProvider initialTheme={Theme.Labs}>{children}</ThemeProvider>
            </body>
        </html>
    );
}
```

Available themes:

| `Theme` enum       | CSS class applied | Used by         |
| ------------------ | ----------------- | --------------- |
| `Theme.Labs`       | `.labs`           | iotalabs        |
| `Theme.Network`    | `.network`        | iota-network    |
| `Theme.Foundation` | `.foundation`     | iota-foundation |

Switch themes at runtime using the `useTheme` hook:

```tsx
'use client';
import { useTheme, Theme } from 'react-ui-kit';

function ThemeSwitcher() {
    const { theme, setTheme } = useTheme();
    return <button onClick={() => setTheme(Theme.Network)}>Switch theme</button>;
}
```

---

## Tailwind Configuration

The UI Kit ships a base Tailwind preset (`BASE_CONFIG`) that all apps extend.

### Using the preset in an app

```ts
// tailwind.config.js
import { BASE_CONFIG } from '../../../ui-kit/react/src/lib/tailwind/base.preset';

export default {
    presets: [BASE_CONFIG],
    content: [
        './app/**/*.{ts,tsx}',
        '../../ui-kit/react/src/**/*.{ts,tsx}',
        '../../shared/**/*.{ts,tsx}',
    ],
};
```

### Breakpoints

| Token | Value  |
| ----- | ------ |
| `xs`  | 712px  |
| `sm`  | 1080px |
| `md`  | 1200px |
| `lg`  | 1440px |
| `xl`  | 1920px |

### Theme Variants

Tailwind variants scoped to the active brand theme. Apply styles conditionally based on which theme is active:

```html
<div class="text-white labs:text-black network:text-blue-900">...</div>
```

Available variants: `labs:`, `network:`, `foundation:`

### Themed Color Tokens

These resolve via CSS custom properties based on the active theme class on `<html>`:

| Tailwind class        | CSS variable               |
| --------------------- | -------------------------- |
| `bg-darkest`          | `--color-darkest`          |
| `bg-darkest-inverted` | `--color-darkest-inverted` |
| `bg-dark`             | `--color-dark`             |
| `bg-dark-inverted`    | `--color-dark-inverted`    |
| `bg-medium`           | `--color-medium`           |
| `bg-medium-inverted`  | `--color-medium-inverted`  |
| `bg-light`            | `--color-light`            |
| `bg-light-inverted`   | `--color-light-inverted`   |

### Typography Classes

Custom text utilities added as Tailwind components:

| Class                    | Description                   |
| ------------------------ | ----------------------------- |
| `text-label-sm/md/lg`    | Labels / UI text (500 weight) |
| `text-body-sm/md/lg`     | Body copy                     |
| `text-title-sm/md/lg`    | Section titles (500 weight)   |
| `text-headline-sm/md/lg` | Large headings                |
| `text-display-sm/md/lg`  | Hero / display text           |

Sizes are responsive — `md` and `lg` variants scale up at the `md` breakpoint.

### Font Families

| Token                  | Font                     |
| ---------------------- | ------------------------ |
| `font-inter`           | Inter Variable           |
| `font-alliance-no2`    | AllianceNo2              |
| `font-red-hat-display` | Red Hat Display Variable |

### Spacing Scale

Custom 4px-based spacing scale. Available values (in px): `0, 2, 4, 6, 8, 10, 12, 16, 24, 32, 40, 48, 56, 64, 72, 80, 120, 240, 320`

### Border Radius

`none`, `sm`, `DEFAULT`, `md`, `lg`, `xl`, `2xl`, `3xl`, `4xl`, `full`

---

## Components

Split into server and client entrypoints.

### Server components (default import)

```tsx
import { Button, TextLink, Chip, Badge } from 'react-ui-kit';
```

| Component         | Description                         |
| ----------------- | ----------------------------------- |
| `Button`          | Primary / secondary / ghost button  |
| `TextLink`        | Styled anchor                       |
| `AnchorLink`      | In-page anchor navigation link      |
| `NavbarItem`      | Top navigation item                 |
| `Chip`            | Tag / filter chip                   |
| `Badge`           | Status badge                        |
| `Skeleton`        | Loading placeholder                 |
| `ImageCard`       | Card with image                     |
| `ExploreCard`     | Explore / discovery card            |
| `BlogPostCard`    | Blog post preview card              |
| `TestimonialCard` | Testimonial / quote card            |
| `HighlightCard`   | Featured highlight card             |
| `DisplayStats`    | Animated stat display               |
| `HeroLayout`      | Full-width hero section layout      |
| `IconContent`     | Icon + text block                   |
| `StackContainer`  | Vertical / horizontal stack wrapper |
| `Navbar`          | Top navigation bar                  |

### Client components

```tsx
import { TextInput, Animation } from 'react-ui-kit/client';
```

| Component   | Description             |
| ----------- | ----------------------- |
| `TextInput` | Controlled text input   |
| `Animation` | Lottie animation player |

---

## Development

```bash
# Start Storybook
pnpm storybook   # or: pnpm dev

# Package the library for consumption by apps
pnpm package

# Lint
pnpm lint

# Type check
pnpm typecheck
```

Storybook runs on [http://localhost:6006](http://localhost:6006).
