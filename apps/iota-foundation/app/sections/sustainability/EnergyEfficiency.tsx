import { TwoColumnsImageTemplate } from '@repo/shared/components';
import { BaseSectionProps } from '@repo/shared/interfaces';
import { VerticalTitle } from 'react-ui-kit';
import { ENERGY_EFFICIENCY_TITLE_CONTENT } from './constants';
import { EnergyEfficiencyStats } from './subsections/EnergyEfficiencyStats';
import { EnergyConsumptionStats } from './subsections/EnergyConsumptionStats';
import { Suspense } from 'react';
import { ArrayDisplayStatsSkeleton } from '@repo/shared/sections';

export async function EnergyEfficiency({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section className="w-full" id={id} data-navbar-color-scheme={navbarColorScheme}>
            <div className="container flex flex-col justify-center items-center py-14 xs:py-20 lg:py-30 gap-14 xs:gap-20 lg:gap-30">
                <TwoColumnsImageTemplate image="/sustainability/energy_efficiency.png">
                    <div className="sm:pr-[92px] lg:pr-[102px] text-center">
                        <VerticalTitle {...ENERGY_EFFICIENCY_TITLE_CONTENT} />
                    </div>
                </TwoColumnsImageTemplate>
                <Suspense fallback={<ArrayDisplayStatsSkeleton count={3} />}>
                    <EnergyEfficiencyStats />
                </Suspense>
                <Suspense fallback={<ArrayDisplayStatsSkeleton count={3} />}>
                    <EnergyConsumptionStats />
                </Suspense>
            </div>
        </section>
    );
}
