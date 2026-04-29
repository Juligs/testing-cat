import type { Route } from '@repo/shared/interfaces';

export function getRoutes(locale: string): Route[] {
    return [
        {
            title: 'Overview',
            path: `/${locale}`,
            children: [
                { title: 'Context', path: `/${locale}#context` },
                { title: 'Local Signals', path: `/${locale}#local-signals` },
            ],
        },
        {
            title: 'Pilots',
            path: `/${locale}#pilots`,
        },
        {
            title: 'Crowdin',
            path: `/${locale}#crowdin`,
        },
    ];
}
