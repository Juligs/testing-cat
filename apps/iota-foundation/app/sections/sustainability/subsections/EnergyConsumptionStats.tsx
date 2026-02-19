'use client';

import { useMicaData } from '@lib/useMicaData';
import { MicaDataCompliance, MicaDataType } from '@lib/utils/getMicaDataTypes';
import { ArrayDisplayStatsSkeleton } from '@repo/shared/sections';
import { EnergyConsumptionInfrastructure } from './InfrastructureOfIota';
import { TitleTextSize, VerticalTitle } from 'react-ui-kit';
import { formatDateAsOf } from '@lib/utils/formatDateAsOf';

export function EnergyConsumptionStats() {
    const { data, isLoading, error } = useMicaData<MicaDataCompliance>(MicaDataType.Compliance);

    if (isLoading) {
        return <ArrayDisplayStatsSkeleton count={3} />;
    }

    if (
        error ||
        !data ||
        (!data.energyCompliance.cards.length && !data.ghgCompliance.cards.length)
    ) {
        return null;
    }

    return (
        <div className="flex flex-col gap-12 w-full justify-center items-center">
            <div className="flex max-w-[708px]">
                <VerticalTitle
                    title="Energy Consumption and Sustainability Indicators"
                    size={TitleTextSize.Small}
                    isCentered
                />
            </div>
            <div className="flex flex-col gap-6">
                <EnergyConsumptionInfrastructure stats={data} />
                <p className="text-iota-neutral-50 text-body-sm items-center justify-center flex">
                    Sources: Values as of {formatDateAsOf(data.energyCompliance.timestamp)}
                </p>
            </div>
        </div>
    );
}
