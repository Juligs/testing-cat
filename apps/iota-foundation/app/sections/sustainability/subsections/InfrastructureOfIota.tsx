import { CardSize, DisplayStats, TextSize } from 'react-ui-kit';
import type { StatsCards } from '@lib/utils/getEnergyStats';
import { Burnability, DataInsights, FeeBurning } from '@repo/icons';
import { ComponentProps } from 'react';
import { MicaDataCompliance, MicaDataInfra } from '@lib/utils/getMicaDataTypes';

interface EnergyStatsProps extends StatsCards {
    icon?: React.ReactNode;
    highlightFirst?: boolean;
    invertFirst?: boolean;
}

interface EnergyStatsWithStaticCardProps extends EnergyStatsProps {
    staticCard: ComponentProps<typeof DisplayStats>;
}
const INFRA_STATS_GRID = 'grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-6';

export function EnergyStats({ cards, icon, highlightFirst, invertFirst }: EnergyStatsProps) {
    if (!cards || cards.length === 0) return null;

    return (
        <>
            {cards.map((card, index) => (
                <DisplayStats
                    key={card.label ?? index}
                    label={card.label}
                    value={card.value}
                    supportingText={card.supportingText}
                    icon={icon && index >= cards.length - 2 ? icon : undefined}
                    size={CardSize.Small}
                    textSize={TextSize.Default}
                    highlighted={highlightFirst && index === 0}
                    inverted={invertFirst && index === 0}
                />
            ))}
        </>
    );
}

export function EnergyStatsWithStaticCard({
    staticCard,
    cards,
    ...energyStatsProps
}: EnergyStatsWithStaticCardProps) {
    if (!cards || cards.length === 0) return null;

    return (
        <div className="w-full grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-6">
            <DisplayStats {...staticCard} size={CardSize.Small} textSize={TextSize.Default} />

            <EnergyStats cards={cards} {...energyStatsProps} />
        </div>
    );
}

interface InfrastructureOfIotaProps {
    stats: MicaDataInfra;
}
export function InfrastructureOfIota({ stats }: InfrastructureOfIotaProps) {
    return (
        <section className="flex flex-col gap-6">
            <div className={INFRA_STATS_GRID}>
                <EnergyStats {...stats.energy} highlightFirst icon={<DataInsights />} />
            </div>
            <div className={INFRA_STATS_GRID}>
                <EnergyStats {...stats.emissions} icon={<FeeBurning />} invertFirst />
            </div>
        </section>
    );
}

interface EnergyConsumptionInfrastructureProps {
    stats: MicaDataCompliance;
}
export function EnergyConsumptionInfrastructure({ stats }: EnergyConsumptionInfrastructureProps) {
    return (
        <section className="flex flex-col gap-6">
            <EnergyStatsWithStaticCard
                staticCard={{
                    label: 'Type',
                    value: 'Energy',
                    highlighted: true,
                    icon: <DataInsights />,
                }}
                {...stats.energyCompliance}
            />

            <EnergyStatsWithStaticCard
                staticCard={{
                    label: 'Type',
                    value: 'GHG Emissions',
                    inverted: true,
                    icon: <Burnability />,
                }}
                {...stats.ghgCompliance}
            />
        </section>
    );
}
