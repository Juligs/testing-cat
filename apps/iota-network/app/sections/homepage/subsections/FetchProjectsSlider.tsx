'use client';
import {
    CardShowcase,
    checkInvalidImageUrlsAndRevalidate,
    revalidateProjectsAPI,
} from '@repo/shared/utils';
import { useEffect, useState } from 'react';
import { SliderImageCardSkeleton } from '@repo/shared/components';
import { ProjectsSlider } from './ProjectsSlider';

export function FetchProjectsSlider() {
    const [dataProjects, setDataProjects] = useState<CardShowcase[] | undefined>(undefined);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const fetchedData = await fetchInfraData();
                const validImageUrls = fetchedData
                    .map(({ image }) => image)
                    .filter((image): image is string => Boolean(image));
                const refreshedDataWithoutCache = await checkInvalidImageUrlsAndRevalidate(
                    validImageUrls,
                    fetchInfraData,
                    revalidateProjectsAPI,
                );
                // If there was some error in the cached fetched data which then needed to be revalidated
                // and the revalidated data is available, then set the revalidated data
                // else set the original fetched data
                if (refreshedDataWithoutCache) {
                    setDataProjects(refreshedDataWithoutCache);
                } else {
                    setDataProjects(fetchedData);
                }
            } catch (error) {
                console.error(
                    'Error fetching infra slider data from Airtable (FetchProjectsSlider):',
                    error,
                );
            } finally {
                setIsLoading(false);
            }
        };
        fetchData();
    }, []);

    const fetchInfraData = async () => {
        const res = await fetch('/api/projects?useWebsitePosition=true');
        return (await res.json()) as CardShowcase[];
    };

    return isLoading || !dataProjects?.length ? (
        <SliderImageCardSkeleton />
    ) : (
        <div className="flex flex-col gap-12">
            <ProjectsSlider data={dataProjects} />
        </div>
    );
}
