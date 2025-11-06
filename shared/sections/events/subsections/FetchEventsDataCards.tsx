'use client';
import {
    EventsCards,
    checkInvalidImageUrlsAndRevalidate,
    revalidateEventsAPI,
} from '../../../utils';
import { SliderImageCardSkeleton } from '../../../components';
import { useEffect, useState } from 'react';
import { EventsData } from './EventsData';

export function FetchEventsDataCards() {
    const [dataEvents, setDataEvents] = useState<EventsCards[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const fetchedData = await fetchEventsData();
                const validImageUrls = fetchedData
                    .map(({ image }) => image)
                    .filter((image): image is string => Boolean(image));
                const refreshedDataWithoutCache = await checkInvalidImageUrlsAndRevalidate(
                    validImageUrls,
                    fetchEventsData,
                    revalidateEventsAPI,
                );
                // If there was some error in the cached fetched data which then needed to be revalidated
                // and the revalidated data is available, then set the revalidated data
                // else set the original fetched data
                setDataEvents(refreshedDataWithoutCache || fetchedData);
            } catch (error) {
                console.error('Error fetching events data from Airtable (FetchEventsData):', error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchData();
    }, []);

    const fetchEventsData = async () => {
        const res = await fetch('/api/events?ignore-cache=true');
        return (await res.json()) as EventsCards[];
    };

    if (isLoading) {
        return <SliderImageCardSkeleton />;
    }
    return (
        <div className="flex flex-col gap-12">
            <EventsData data={dataEvents} />
        </div>
    );
}
