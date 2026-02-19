'use client';
import { useMicaData } from '@lib/useMicaData';
import { MicaDataInfra, MicaDataType } from '@lib/utils/getMicaDataTypes';
import { ArrayDisplayStatsSkeleton } from '@repo/shared/sections';
import { InfrastructureOfIota } from './InfrastructureOfIota';
import { TitleTextSize, VerticalTitle } from 'react-ui-kit';
import { formatDateAsOf } from '@lib/utils/formatDateAsOf';

export function EnergyEfficiencyStats() {
    const { data, isLoading, error } = useMicaData<MicaDataInfra>(MicaDataType.Infrastructure);

    if (isLoading) {
        return <ArrayDisplayStatsSkeleton count={3} />;
    }

    if (error || !data || (!data.energy.cards.length && !data.emissions.cards.length)) {
        return null;
    }

    return (
        <div className="flex flex-col gap-12 w-full">
            <div className="flex justify-center items-center">
                <VerticalTitle title="Infrastructure of IOTA" size={TitleTextSize.Small} />
            </div>

            <div className="flex flex-col gap-6">
                <InfrastructureOfIota stats={data} />
                <p className="text-iota-neutral-50 text-body-sm flex justify-center">
                    Sources: Values as of {formatDateAsOf(data.emissions.timestamp)}
                </p>
            </div>
        </div>
    );
}
