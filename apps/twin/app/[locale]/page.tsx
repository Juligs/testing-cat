import { cookies, headers } from 'next/headers';
import { getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';
import enMessages from '@/messages/en.json';
import { getLocales, isValidLocale } from '@/i18n/config';
import { getLocaleLabel } from '@/i18n/getLocaleLabel';
import { getRegionProfile, regionCodes, resolveRegion } from '@/lib/regions';
import { TwinCrowdin, TwinHero, TwinPilots, TwinSignals } from '@sections';

interface TwinPageProps {
    params: Promise<{ locale: string }>;
    searchParams: Promise<{ region?: string }>;
}

export function generateStaticParams() {
    const locales = getLocales();
    return locales.map((locale) => ({ locale }));
}

export default async function TwinPage({ params, searchParams }: TwinPageProps) {
    const { locale } = await params;

    if (!isValidLocale(locale)) {
        notFound();
    }

    const { region } = await searchParams;
    const cookieStore = await cookies();
    const headerStore = await headers();
    const detectedCountry =
        headerStore.get('x-vercel-ip-country') ??
        headerStore.get('cf-ipcountry') ??
        headerStore.get('x-country-code');
    const selectedRegion = resolveRegion(
        region,
        cookieStore.get('twin-region')?.value,
        detectedCountry,
    );
    const locales = getLocales();
    const profile = getRegionProfile(selectedRegion);
    const t = await getTranslations({ locale, namespace: 'TwinPage' });
    const englishLanguageLabels = enMessages.TwinPage.languages as Record<string, string>;
    const languageLinks = locales.map((option) => ({
        href: `/${option}?region=${selectedRegion}`,
        label: getLocaleLabel(option, englishLanguageLabels),
        active: option === locale,
    }));
    const regionLinks = regionCodes.map((option) => ({
        href: `/${locale}?region=${option}`,
        label: t(`regions.${option}.name`),
        active: option === selectedRegion,
    }));
    const signalCards = profile.localSignals.map((signal) => ({
        title: t(`regions.${selectedRegion}.name`),
        body: t(`signals.${signal}`),
    }));
    const pilots = profile.pilots.map((pilot) => ({
        title: t(`pilots.items.${pilot}.title`),
        description: t(`pilots.items.${pilot}.description`),
    }));
    const crowdinPoints = [t('crowdin.pointOne'), t('crowdin.pointTwo'), t('crowdin.pointThree')];

    return (
        <main className="pt-[96px]">
            <TwinHero
                id="hero"
                eyebrow={t('eyebrow')}
                title={t('title')}
                subtitle={t('subtitle')}
                languageLabel={t('selectors.language')}
                regionLabel={t('selectors.region')}
                languageLinks={languageLinks}
                regionLinks={regionLinks}
            />
            <TwinSignals
                id="local-signals"
                overline={t('cards.localSignals')}
                title={t(`regions.${selectedRegion}.headline`)}
                subtitle={t(`regions.${selectedRegion}.summary`)}
                cards={signalCards}
            />
            <TwinPilots
                id="pilots"
                overline={t('cards.pilots')}
                title={t('pilots.title')}
                subtitle={t('adaptation.description')}
                pilots={pilots}
            />
            <TwinCrowdin
                id="crowdin"
                overline={t('cards.crowdin')}
                title={t('crowdin.title')}
                subtitle={t('spotlight.description')}
                points={crowdinPoints}
            />
        </main>
    );
}
