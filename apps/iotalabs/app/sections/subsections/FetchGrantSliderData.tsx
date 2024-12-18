'use client';
import { useEffect, useState } from 'react';
import { GrantsCardData } from '@lib/airtable';
import { GrantSlider } from './GrantsSlider';
import { GrantsCarouselSkeleton } from '@sections/skeletons';
import { revalidateGrantsAPI } from '@lib/airtable';
import { checkInvalidImageUrlsAndRevalidate } from '@shared/utils';

export function FetchGrantsSliderData() {
    const [dataGrantsSlider, setDataGrantsSlider] = useState<GrantsCardData[] | undefined>(
        undefined,
    );
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const data = await fetchGrantsData();
                const imageUrls = data
                    .map(({ image }) => image)
                    .filter((image): image is string => Boolean(image));
                const result = await checkInvalidImageUrlsAndRevalidate(
                    imageUrls,
                    fetchGrantsData,
                    revalidateGrantsAPI,
                );

                if (result) {
                    setDataGrantsSlider(result);
                } else {
                    setDataGrantsSlider(data);
                }
            } catch (error) {
                console.error('Error fetching data from Airtable:', error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchData();
    }, []);

    const fetchGrantsData = async () => {
        const res = await fetch('/api/dataGrantsSlider');
        return (await res.json()) as GrantsCardData[];
    };

    return isLoading ? (
        <GrantsCarouselSkeleton />
    ) : dataGrantsSlider?.length ? (
        <div className="flex flex-col gap-12">
            <GrantSlider data={dataGrantsSlider} />
        </div>
    ) : null;
}
