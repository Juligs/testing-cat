'use client';
import { useEffect, useState } from 'react';
import { CardShowcase } from '@lib/airtable';
import { InfraSlider } from './InfraSlider';
import { InfrastructureCarouselSkeleton } from '@sections/skeletons';
import { revalidateInfraAPI } from '@lib/airtable/revalidate';
import { checkInvalidImageUrlsAndRevalidate } from '@repo/shared';

export function FetchInfraSliderData() {
    const [dataInfraSlider, setDataInfraSlider] = useState<CardShowcase[] | undefined>(undefined);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const fetchedData = await fetchInfraData();
                const imageUrls = fetchedData
                    .map(({ image }) => image)
                    .filter((image): image is string => Boolean(image));
                const refreshedDataWithoutCache = await checkInvalidImageUrlsAndRevalidate(
                    imageUrls,
                    fetchInfraData,
                    revalidateInfraAPI,
                );
                // If there was some error in the cached fetched data which then needed to be revalidated
                // and the revalidated data is available, then set the revalidated data
                // else set the original fetched data
                if (refreshedDataWithoutCache) {
                    setDataInfraSlider(refreshedDataWithoutCache);
                } else {
                    setDataInfraSlider(fetchedData);
                }
            } catch (error) {
                console.error(
                    'Error fetching infra slider data from Airtable (FetchInfraSliderData):',
                    error,
                );
            } finally {
                setIsLoading(false);
            }
        };
        fetchData();
    }, []);

    const fetchInfraData = async () => {
        const res = await fetch('/api/infra');
        return (await res.json()) as CardShowcase[];
    };

    return isLoading || !dataInfraSlider?.length ? (
        <InfrastructureCarouselSkeleton />
    ) : (
        <div className="flex flex-col gap-12">
            <InfraSlider data={dataInfraSlider} />
        </div>
    );
}
