'use client';
import { useEffect, useState } from 'react';
import { CardShowcase } from '@lib/airtable';
import { InfraSlider } from './InfraSlider';
import { InfrastructureCarouselSkeleton } from '@sections/skeletons';
import { revalidateInfraAPI } from '@lib/airtable/revalidate';
import { checkInvalidImageUrlsAndRevalidate } from '@shared/utils';

export function FetchInfraSliderData() {
    const [dataInfraSlider, setDataInfraSlider] = useState<CardShowcase[] | undefined>(undefined);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const data = await fetchInfraData();
                const result = await checkInvalidImageUrlsAndRevalidate(
                    data.map(({ image }) => image),
                    fetchInfraData,
                    revalidateInfraAPI,
                );

                if (result) {
                    setDataInfraSlider(result);
                } else {
                    setDataInfraSlider(data);
                }
            } catch (error) {
                console.error('Error fetching data from Airtable:', error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchData();
    }, []);

    const fetchInfraData = async () => {
        const res = await fetch('/api/dataInfraSlider');
        return (await res.json()) as CardShowcase[];
    };

    return isLoading ? (
        <InfrastructureCarouselSkeleton />
    ) : dataInfraSlider?.length ? (
        <div className="flex flex-col gap-12">
            <InfraSlider data={dataInfraSlider} />
        </div>
    ) : null;
}
