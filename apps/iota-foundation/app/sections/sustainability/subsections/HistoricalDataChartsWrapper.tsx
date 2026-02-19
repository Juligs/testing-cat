'use client';

import { useMicaData } from '@lib/useMicaData';
import { MicaDataTimeSeries, MicaDataType } from '@lib/utils/getMicaDataTypes';
import { HistoricalDataCharts } from './HistoricalDataCharts';
import { MicaAreaChartSkeleton } from '../components/MicaAreaChartSkeleton';
import { VerticalTitle } from 'react-ui-kit';
import { HISTORICAL_DATA_VERTICAL_TITLE } from '../constants';

export function HistoricalDataChartsWrapper() {
    const { data, isLoading, error } = useMicaData<MicaDataTimeSeries>(MicaDataType.TimeSeries);

    if (isLoading) {
        return <MicaAreaChartSkeleton />;
    }

    if (error || !data) {
        return null;
    }

    return (
        <>
            <div className="flex justify-center max-w-[708px] text-center">
                <VerticalTitle {...HISTORICAL_DATA_VERTICAL_TITLE} />
            </div>
            <HistoricalDataCharts stats={data} />
        </>
    );
}
