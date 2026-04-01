# @repo/shared

Shared components, sections, hooks, constants, and utilities used across the IOTA web apps.

## Usage

Consumed as a workspace dependency in each app:

```json
{
    "dependencies": {
        "@repo/shared": "workspace:*"
    }
}
```

## Structure

```
shared/
├── components/   # Reusable React components shared across apps
├── sections/     # Page section compositions
├── hooks/        # Shared React hooks
├── interfaces/   # Shared TypeScript interfaces and types
├── constants/    # Shared constants
├── utils/        # Utility functions
└── public/       # Static assets referenced by multiple apps
```
