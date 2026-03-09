'use client';
import { ExchangesCards } from '@lib/utils';
import { useEffect, useState } from 'react';
import { ExchangesDataGetStarted } from './ExchangesDataGetStarted';
import { ArrayAnchorLinkSkeleton } from '../components/AnchorLinkSkeleton';

export function FetchExchangesLinks() {
    const [dataExchanges, setDataExchanges] = useState<ExchangesCards[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const fetchedData = await fetchExchangesData();
                setDataExchanges(fetchedData);
            } catch (error) {
                console.error(
                    'Error fetching grants exchanges from Airtable (FetchExchangesData)',
                    error,
                );
            } finally {
                setIsLoading(false);
            }
        };
        fetchData();
    }, []);

    const fetchExchangesData = async () => {
        const res = await fetch('/api/exchanges');
        return (await res.json()) as ExchangesCards[];
    };

    if (isLoading) {
        return <ArrayAnchorLinkSkeleton count={12} />;
    }
    return (
        <div className="flex flex-col gap-12">
            <ExchangesDataGetStarted data={dataExchanges} />
        </div>
    );
}
