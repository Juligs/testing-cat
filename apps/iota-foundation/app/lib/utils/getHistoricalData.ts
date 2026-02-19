import { micaEndpoints, MicaTimeSeriesPoint } from './fetchMica';

export type MicaTimeSeries = {
    electricity: MicaTimeSeriesPoint[];
    emissions: MicaTimeSeriesPoint[];
};

const DEFAULT_MONTHS = 12;

function filterLastMonths(series: MicaTimeSeriesPoint[], months = DEFAULT_MONTHS) {
    const now = new Date();

    const end = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate()));

    const start = new Date(end);
    start.setUTCMonth(start.getUTCMonth() - months);

    return series.filter((p) => {
        const date = new Date(`${p.date}T00:00:00Z`);
        return date >= start && date <= end;
    });
}

export async function getMicaTimeSeries(): Promise<MicaTimeSeries> {
    const data = await micaEndpoints.getHistoricalData();

    return {
        electricity: filterLastMonths(data.metrics.electricity.timeSeries),
        emissions: filterLastMonths(data.metrics.emissions.timeSeries),
    };
}
