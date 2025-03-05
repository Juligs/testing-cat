'use client';
import { useEffect, useState } from 'react';
import { SanitizedJobData } from '@lib/utils';
import { CareersSlider, CareersSkeleton } from '../components';

export function FetchCareersData() {
    const [data, setData] = useState<SanitizedJobData[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const fetchedData = await fetchCareersDataRoute();
                setData(fetchedData);
            } catch (error) {
                console.error('Error fetching job data:', error);
                setData([]);
            } finally {
                setIsLoading(false);
            }
        };
        fetchData();
    }, []);

    const fetchCareersDataRoute = async () => {
        const res = await fetch('/api/jobs');
        if (!res.ok) {
            throw new Error('Network response was not ok');
        }
        return (await res.json()) as SanitizedJobData[];
    };

    if (isLoading) {
        return <CareersSkeleton />;
    }

    return <CareersSlider data={data} />;
}
