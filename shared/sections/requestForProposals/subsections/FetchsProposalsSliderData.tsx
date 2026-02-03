'use client';
import {
    checkInvalidImageUrlsAndRevalidate,
    ProposalCards,
    revalidateProposalsAPI,
} from '../../../utils';
import { useEffect, useState } from 'react';
import { ProposalsSliderData } from './ProposalsSliderData';
import { ChipsCarouselSkeleton } from '../../skeletons';

export function FetchsProposalsSliderData() {
    const [dataProposalsSlider, setDataProposalSlider] = useState<ProposalCards[] | undefined>(
        undefined,
    );
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const fetchedData = await fetchProposalsData();
                const imageUrls = fetchedData
                    .map(({ image }) => image)
                    .filter((image): image is string => Boolean(image));
                const refreshedDataWithoutCache = await checkInvalidImageUrlsAndRevalidate(
                    imageUrls,
                    fetchProposalsData,
                    revalidateProposalsAPI,
                );
                // If there was some error in the cached fetched data which then needed to be revalidated
                // and the revalidated data is available, then set the revalidated data
                // else set the original fetched data
                if (refreshedDataWithoutCache) {
                    setDataProposalSlider(refreshedDataWithoutCache);
                } else {
                    setDataProposalSlider(fetchedData);
                }
            } catch (error) {
                console.error(
                    'Error fetching proposals data from Airtable (FetchProposalsSliderData):',
                    error,
                );
            } finally {
                setIsLoading(false);
            }
        };
        fetchData();
    }, []);

    const fetchProposalsData = async () => {
        const res = await fetch('/api/proposals?ignore-cache=true&type=proposalCards');
        return (await res.json()) as ProposalCards[];
    };

    return isLoading || !dataProposalsSlider?.length ? (
        <ChipsCarouselSkeleton chipCount={2} />
    ) : (
        <div className="flex flex-col gap-12">
            <ProposalsSliderData data={dataProposalsSlider} />
        </div>
    );
}
