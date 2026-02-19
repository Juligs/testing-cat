const MICA_BASE_URL = `${process.env.MICA_API_URL}/api`;

export type MicaEnergyCard = {
    id: string;
    label: string;
    value: string;
    unit: string;
    hasData: boolean;
};
const MICA_ENDPOINTS = {
    energyOverview: '/energy-overview',
    emissionsOverview: '/emissions-overview',
    energyCompliance: '/mica-energy-compliance',
    ghgCompliance: '/mica-ghg-compliance',
    historicalData: '/historical-data',
} as const;

export type EnergyOverview = {
    cards: MicaEnergyCard[];
    timestamp?: string;
};
export type MicaTimeSeriesPoint = {
    date: string;
    formatted_value: string;
};

export type HistoricalDataMinimal = {
    metrics: {
        electricity: {
            timeSeries: MicaTimeSeriesPoint[];
        };
        emissions: {
            timeSeries: MicaTimeSeriesPoint[];
        };
    };
};

async function micaFetch<T>(path: string, init?: RequestInit): Promise<T> {
    const res = await fetch(`${MICA_BASE_URL}${path}`, {
        ...init,
        headers: {
            'Content-Type': 'application/json',
            ...(init?.headers ?? {}),
        },
    });

    if (!res.ok) {
        throw new Error(`MiCA request failed: ${path}`);
    }

    return res.json() as Promise<T>;
}

export const micaEndpoints = {
    getEnergyOverview: () => micaFetch<EnergyOverview>(MICA_ENDPOINTS.energyOverview),

    getEmissionsOverview: () => micaFetch<EnergyOverview>(MICA_ENDPOINTS.emissionsOverview),

    getEnergyCompliance: () => micaFetch<EnergyOverview>(MICA_ENDPOINTS.energyCompliance),

    getGhgCompliance: () => micaFetch<EnergyOverview>(MICA_ENDPOINTS.ghgCompliance),

    getHistoricalData: () => micaFetch<HistoricalDataMinimal>(MICA_ENDPOINTS.historicalData),
};
