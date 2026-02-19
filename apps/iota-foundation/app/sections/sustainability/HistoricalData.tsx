import { BaseSectionProps } from '@repo/shared/interfaces';
import { CtaCard } from 'react-ui-kit';
import { MICA_INDICATORS_CARD } from './constants';
import { HistoricalDataChartsWrapper } from './subsections/HistoricalDataChartsWrapper';
import { Suspense } from 'react';
import { MicaAreaChartSkeleton } from './components/MicaAreaChartSkeleton';

export async function HistoricalData({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section className="w-full" id={id} data-navbar-color-scheme={navbarColorScheme}>
            <div className="container justify-center items-center flex flex-col gap-14 xs:gap-20 lg:gap-30 py-14 xs:py-20 lg:py-30">
                <Suspense fallback={<MicaAreaChartSkeleton />}>
                    <HistoricalDataChartsWrapper />
                </Suspense>

                <CtaCard {...MICA_INDICATORS_CARD} brand alignStart />
            </div>
        </section>
    );
}
