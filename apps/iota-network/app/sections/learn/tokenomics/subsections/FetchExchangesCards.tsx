'use client';
import { ExchangesCards } from '@lib/utils';
import { checkInvalidImageUrlsAndRevalidate, revalidateExchangesAPI } from '@repo/shared/utils';
import { useEffect, useState } from 'react';
import { ExchangesData } from './ExchangesData';
import { ArrayDisplayStatsSkeleton } from '@repo/shared/sections';

export function FetchExchangesCards() {
    const [dataExchanges, setDataExchanges] = useState<ExchangesCards[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const fetchedData = await fetchExchangesData();
                const validImageUrls = fetchedData
                    .map(({ image }) => image)
                    .filter((image): image is string => Boolean(image));
                const refreshedDataWithoutCache = await checkInvalidImageUrlsAndRevalidate(
                    validImageUrls,
                    fetchExchangesData,
                    revalidateExchangesAPI,
                );
                // If there was some error in the cached fetched data which then needed to be revalidated
                // and the revalidated data is available, then set the revalidated data
                // else set the original fetched data
                setDataExchanges(refreshedDataWithoutCache || fetchedData);
            } catch (error) {
                console.error(
                    'Error fetching exchanges data from Airtable FetchExchangesData:',
                    error,
                );
            } finally {
                setIsLoading(false);
            }
        };
        fetchData();
    }, []);

    const fetchExchangesData = async () => {
        const res = await fetch('/api/exchanges?ignore-cache=true');
        return (await res.json()) as ExchangesCards[];
    };

    if (isLoading) {
        return <ArrayDisplayStatsSkeleton count={3} />;
    }
    return (
        <div className="flex flex-col gap-12">
            <ExchangesData data={dataExchanges} />
        </div>
    );
}
