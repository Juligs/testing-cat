'use client';

import {
    CookieManager,
    useUpdatePathGA,
    type SKCMConfiguration,
} from '@boxfish-studio/react-cookie-manager';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import './CookieDisclaimer.scss';

export function CookieDisclaimer(): React.JSX.Element {
    const pathname = usePathname();
    const updatePathGA = useUpdatePathGA();

    const configuration: SKCMConfiguration = {
        disclaimer: {
            title: undefined,
            body: 'By using the IOTA Foundation site, you agree with our use of cookies.',
            policyText: 'Read our Cookie Policy',
            policyUrl: '/cookie-policy',
        },
        services: {
            googleAnalytics4Id: process.env.NEXT_PUBLIC_IOTAFOUNDATION_GOOGLE_ANALYTICS_ID,
        },
    };

    useEffect(() => {
        updatePathGA(pathname);
    }, [pathname]);

    return <CookieManager configuration={configuration} />;
}
