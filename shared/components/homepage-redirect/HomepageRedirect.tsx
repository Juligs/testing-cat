'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

export function HomepageRedirect(): null {
    const pathname = usePathname();

    useEffect(() => {
        if (pathname !== '/') {
            window.history.replaceState(null, '', '/');
        }
    }, []);

    return null;
}
