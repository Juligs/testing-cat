import type { ComponentProps } from 'react';
import { DisplayStats } from 'react-ui-kit';
import { EnergyOverview, micaEndpoints, MicaEnergyCard } from './fetchMica';

export type StatsCards = {
    cards: ComponentProps<typeof DisplayStats>[];
    timestamp?: string;
};

function mapCards(cards: MicaEnergyCard[] = [], timestamp?: string): StatsCards {
    return {
        cards: cards.map(({ label, value, unit, hasData }) => ({
            label,
            value: hasData ? value : '-',
            supportingText: unit,
        })),
        timestamp,
    };
}

async function safeStatsFetcher(fetcher: () => Promise<EnergyOverview>): Promise<StatsCards> {
    try {
        const data = await fetcher();
        return mapCards(data.cards, data.timestamp);
    } catch (error) {
        console.error('Mica stats fetch failed', error);
        return { cards: [] };
    }
}
const STATS_FETCHERS = {
    energy: micaEndpoints.getEnergyOverview,
    emissions: micaEndpoints.getEmissionsOverview,
    energyCompliance: micaEndpoints.getEnergyCompliance,
    ghgCompliance: micaEndpoints.getGhgCompliance,
} as const;

export function getStats(key: keyof typeof STATS_FETCHERS): Promise<StatsCards> {
    return safeStatsFetcher(STATS_FETCHERS[key]);
}
