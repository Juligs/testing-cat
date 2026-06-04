'use client';

import { CookieManager, type SKCMConfiguration } from '@boxfish-studio/react-cookie-manager';
import { regionCookieMaxAge, regionCookieName } from '@/lib/regions';

const regionCookieLifetimeDays = Math.round(regionCookieMaxAge / (60 * 60 * 24));

export function CookieDisclaimer(): React.JSX.Element {
    const configuration: SKCMConfiguration = {
        disclaimer: {
            title: undefined,
            body: 'By using Twin, you agree with our use of cookies.',
            policyText: 'Read our Cookie Policy',
            policyUrl: '#',
        },
        services: {
            customNecessaryCookies: [
                {
                    name: regionCookieName,
                    provider: 'Twin',
                    providerUrl: 'https://twin.iota.org',
                    purpose: 'Stores the user selected region for localized content.',
                    expiry: `${regionCookieLifetimeDays} days`,
                    type: 'HTTP',
                    showDisclaimerIfMissing: false,
                },
            ],
        },
    };

    return <CookieManager configuration={configuration} />;
}
