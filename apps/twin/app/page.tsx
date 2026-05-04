import { cookies, headers } from 'next/headers';
import { redirect } from 'next/navigation';
import { defaultLocale, getLocales } from '@/i18n/config';
import { localeCookieName, resolveLocale } from '@/i18n/resolveLocale';
import { resolveRegion } from '@/lib/regions';

export default async function HomePage() {
    const cookieStore = await cookies();
    const headerStore = await headers();
    const detectedCountry =
        headerStore.get('x-vercel-ip-country') ??
        headerStore.get('cf-ipcountry') ??
        headerStore.get('x-country-code');
    const region = resolveRegion(
        undefined,
        cookieStore.get('twin-region')?.value,
        detectedCountry,
    );
    const locale = resolveLocale(
        headerStore.get('accept-language'),
        cookieStore.get(localeCookieName)?.value,
        getLocales(),
        defaultLocale,
    );

    redirect(`/${locale}?region=${region}`);
}
