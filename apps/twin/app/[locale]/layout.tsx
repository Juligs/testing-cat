import { Footer } from '@components';
import { getRoutes } from '@lib/constants';
import { Navigation } from '@repo/shared/components';
import { isValidLocale } from '@/i18n/config';
import { notFound } from 'next/navigation';

interface LocaleLayoutProps {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
    const { locale } = await params;

    if (!isValidLocale(locale)) {
        notFound();
    }

    const navbarItems = getRoutes(locale).filter((route) => !route.hideFromNavbar);

    return (
        <>
            <Navigation items={navbarItems} />
            {children}
            <Footer locale={locale} />
        </>
    );
}
