import { NextResponse, type NextRequest } from 'next/server';
import { localeCookieName } from '@/i18n/resolveLocale';
import { isValidRegion, regionCookieMaxAge, regionCookieName } from '@/lib/regions';

const LOCALE_COOKIE_MAX_AGE = 60 * 60 * 24 * 365;

// Edge-safe: only basic sanity check here. resolveLocale() in page.tsx validates against real locales.
function looksLikeLocale(segment: string): boolean {
    return /^[a-z]{2}(-[a-zA-Z]{2,4})?$/.test(segment);
}

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;
    const region = request.nextUrl.searchParams.get('region');
    const response = NextResponse.next();

    if (region && isValidRegion(region)) {
        response.cookies.set(regionCookieName, region, {
            path: '/',
            maxAge: regionCookieMaxAge,
            sameSite: 'lax',
        });
    }

    const localeSegment = pathname.split('/')[1];

    if (localeSegment && looksLikeLocale(localeSegment)) {
        response.cookies.set(localeCookieName, localeSegment, {
            path: '/',
            maxAge: LOCALE_COOKIE_MAX_AGE,
            sameSite: 'lax',
        });
    }

    return response;
}

export const config = {
    matcher: ['/((?!_next|favicon.ico).*)'],
};
