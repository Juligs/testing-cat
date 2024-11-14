'use client';
import { useEffect, useState } from 'react';
import { CardShowcase } from '@lib/airtable';
import { InfraSlider } from './InfraSlider';
import { InfrastructureCarouselSkeleton } from '@sections/skeletons';
import { revalidateInfraAPI } from '@lib/airtable/revalidate';
import { checkIfInvalidImageUrls } from '@lib/airtable';

export function FetchInfraSliderData() {
    const [dataInfraSlider, setDataInfraSlider] = useState<CardShowcase[] | undefined>(undefined);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                let data = await fetchInfraData();
                if (await hasInvalidImageUrls(data)) {
                    await handleInvalidImages();
                    data = await fetchInfraData();
                }
                setDataInfraSlider(data);
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

    const hasInvalidImageUrls = async (data: CardShowcase[]) => {
        const imageUrls = data.map(({ image }) => image);
        return await checkIfInvalidImageUrls(imageUrls);
    };

    const handleInvalidImages = async () => {
        revalidateInfraAPI();
    };

    return isLoading ? (
        <InfrastructureCarouselSkeleton />
    ) : dataInfraSlider?.length ? (
        <div className="flex flex-col gap-12">
            <InfraSlider data={dataInfraSlider} />
        </div>
    ) : null;
}
