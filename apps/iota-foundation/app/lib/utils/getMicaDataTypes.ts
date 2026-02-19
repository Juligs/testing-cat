import { getStats, StatsCards } from './getEnergyStats';
import { getMicaTimeSeries, MicaTimeSeries } from './getHistoricalData';

export enum MicaDataType {
    Infrastructure = 'infrastructure',
    Compliance = 'compliance',
    TimeSeries = 'time-series',
}
export type MicaDataInfra = {
    energy: StatsCards;
    emissions: StatsCards;
};

export type MicaDataCompliance = {
    energyCompliance: StatsCards;
    ghgCompliance: StatsCards;
};

export type MicaDataTimeSeries = {
    historicalData: MicaTimeSeries;
};

export type MicaDataStats = MicaDataInfra | MicaDataCompliance | MicaDataTimeSeries;

export async function getMicaData(type: MicaDataType): Promise<MicaDataStats> {
    switch (type) {
        case MicaDataType.Infrastructure: {
            const [energy, emissions] = await Promise.all([
                getStats('energy'),
                getStats('emissions'),
            ]);

            return { energy, emissions };
        }

        case MicaDataType.Compliance: {
            const [energyCompliance, ghgCompliance] = await Promise.all([
                getStats('energyCompliance'),
                getStats('ghgCompliance'),
            ]);

            return { energyCompliance, ghgCompliance };
        }

        case MicaDataType.TimeSeries: {
            const historicalData = await getMicaTimeSeries();
            return { historicalData };
        }

        default: {
            throw new Error(`Unknown MiCA data type: ${type}`);
        }
    }
}
