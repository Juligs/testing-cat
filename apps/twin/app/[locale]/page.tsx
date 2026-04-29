import { getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { isValidLocale, locales } from '@/i18n/config';
import { defaultRegion, getRegionProfile, isValidRegion, regionCodes } from '@/lib/regions';
import { TwinCrowdin, TwinHero, TwinPilots, TwinSignals } from '@sections';

interface TwinPageProps {
    params: Promise<{ locale: string }>;
    searchParams: Promise<{ region?: string }>;
}

export function generateStaticParams() {
    return locales.map((locale) => ({ locale }));
}

export default async function TwinPage({ params, searchParams }: TwinPageProps) {
    const { locale } = await params;

    if (!isValidLocale(locale)) {
        notFound();
    }

    const { region } = await searchParams;
    const selectedRegion = region && isValidRegion(region) ? region : defaultRegion;
    const profile = getRegionProfile(selectedRegion);
    const t = await getTranslations({ locale, namespace: 'TwinPage' });
    const languageLinks = locales.map((option) => ({
        href: `/${option}?region=${selectedRegion}`,
        label: t(`languages.${option}`),
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
