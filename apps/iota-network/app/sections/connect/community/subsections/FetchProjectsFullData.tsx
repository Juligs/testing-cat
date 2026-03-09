'use client';
import {
    CardShowcase,
    checkInvalidImageUrlsAndRevalidate,
    PROJECT_VIEWS,
    revalidateProjectsAPI,
} from '@repo/shared/utils';
import { useEffect, useState } from 'react';
import { ProjectsData, ProjectsSkeleton } from '@repo/shared/sections';

export function FetchProjectsFullData() {
    const [dataProjects, setDataProjects] = useState<CardShowcase[] | undefined>(undefined);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const fetchedData = await fetchIotaProjectsData();
                const validImageUrls = fetchedData
                    .map(({ image }) => image)
                    .filter((image): image is string => Boolean(image));
                const refreshedDataWithoutCache = await checkInvalidImageUrlsAndRevalidate(
                    validImageUrls,
                    fetchIotaProjectsData,
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
                console.error('Error fetching project full data from Airtable:', error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchData();
    }, []);

    const fetchIotaProjectsData = async () => {
        const res = await fetch(
            `/api/projects?${new URLSearchParams({
                'ignore-cache': 'true',
                view: PROJECT_VIEWS.IOTA_PROJECTS,
            }).toString()}`,
        );
        return (await res.json()) as CardShowcase[];
    };

    return isLoading || !dataProjects?.length ? (
        <ProjectsSkeleton />
    ) : (
        <div className="flex flex-col gap-12">
            <ProjectsData data={dataProjects} pagination />
        </div>
    );
}
