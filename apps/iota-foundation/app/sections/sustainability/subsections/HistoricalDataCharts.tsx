'use client';

import { MicaDataTimeSeries } from '@lib/utils/getMicaDataTypes';
import { MicaAreaChart } from '../components/MicaAreaChart';
import { Electricity, Emissions } from '@repo/icons';
import { ChartHistoricalCard } from '../components/ChartHistoricalCard';

export function HistoricalDataCharts({ stats }: { stats: MicaDataTimeSeries }) {
    const hasElectricity =
        stats?.historicalData?.electricity && stats.historicalData.electricity.length > 0;

    const hasEmissions =
        stats?.historicalData?.emissions && stats.historicalData.emissions.length > 0;

    if (!hasElectricity && !hasEmissions) {
        return null;
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-[36px] w-full">
            {hasElectricity && (
                <ChartHistoricalCard
                    icon={<Electricity className="w-12 h-12 text-foundation-primary-40" />}
                    title="Network electricity consumption"
                    footer="Electricity kWh"
                >
                    <MicaAreaChart
                        data={stats.historicalData.electricity}
                        unit="kWh"
                        label="Electricity (day, total)"
                    />
                </ChartHistoricalCard>
            )}

            {hasEmissions && (
                <ChartHistoricalCard
                    icon={<Emissions className="w-12 h-12 text-foundation-primary-40" />}
                    title="Network carbon emissions"
                    footer="Emissions kgCO₂e"
                >
                    <MicaAreaChart
                        data={stats.historicalData.emissions}
                        unit="kgCO₂e"
                        label="Emissions (day, total)"
                    />
                </ChartHistoricalCard>
            )}
        </div>
    );
}
