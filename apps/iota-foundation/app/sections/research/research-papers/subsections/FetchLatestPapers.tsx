'use client';
import { useEffect, useState } from 'react';
import { PaperData } from '@lib/utils';
import { PapersLayout } from './PapersLayout';
import { PapersSkeleton } from '../components';

export function FetchLatestPapers() {
    const [data, setData] = useState<PaperData[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const fetchedData = await fetchLatestPapersData();
                setData(fetchedData);
            } catch (error) {
                console.error('Error fetching paper data:', error);
                setData([]);
            } finally {
                setIsLoading(false);
            }
        };
        fetchData();
    }, []);

    const fetchLatestPapersData = async (): Promise<PaperData[]> => {
        try {
            const res = await fetch('/api/research-papers');

            const json = await res.json();
            const [coordicide, preCoordicide] = json.papers;
            return [...coordicide, ...preCoordicide] as PaperData[];
        } catch (error) {
            console.log('error api', error);
            return [];
        }
    };

    if (isLoading) {
        return <PapersSkeleton />;
    }

    return <PapersLayout data={data} />;
}
