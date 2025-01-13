'use client';
import { useEffect, useState } from 'react';
import { GrantsCardData } from '@lib/airtable';
import { GrantSlider } from './GrantsSlider';
import { GrantsCarouselSkeleton } from '@sections/skeletons';
import { revalidateGrantsAPI } from '@lib/airtable';
import { checkInvalidImageUrlsAndRevalidate } from '@repo/shared';

export function FetchGrantsSliderData() {
    const [dataGrantsSlider, setDataGrantsSlider] = useState<GrantsCardData[] | undefined>(
        undefined,
    );
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const fetchedGrantsData = await fetchGrantsData();
                const imageUrls = fetchedGrantsData
                    .map(({ image }) => image)
                    .filter((image): image is string => Boolean(image));
                const refreshedGrantsDataWithoutCache = await checkInvalidImageUrlsAndRevalidate(
                    imageUrls,
                    fetchGrantsData,
                    revalidateGrantsAPI,
                );
                // If there was some error in the cached fetched data which then needed to be revalidated
                // and the revalidated data is available, then set the revalidated data
                // else set the original fetched data
                if (refreshedGrantsDataWithoutCache) {
                    setDataGrantsSlider(refreshedGrantsDataWithoutCache);
                } else {
                    setDataGrantsSlider(fetchedGrantsData);
                }
            } catch (error) {
                console.error(
                    'Error fetching grants slider data from Airtable (FetchGrantsSliderData):',
                    error,
                );
            } finally {
                setIsLoading(false);
            }
        };
        fetchData();
    }, []);

    const fetchGrantsData = async () => {
        const res = await fetch('/api/grants');
        return (await res.json()) as GrantsCardData[];
    };

    return isLoading || !dataGrantsSlider?.length ? (
        <GrantsCarouselSkeleton />
    ) : (
        <div className="flex flex-col gap-12">
            <GrantSlider data={dataGrantsSlider} />
        </div>
    );
}
