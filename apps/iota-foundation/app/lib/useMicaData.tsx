'use client';

import { useEffect, useState } from 'react';
import { MicaDataType } from '@lib/utils/getMicaDataTypes';

type UseMicaDataResult<T> = {
    data?: T;
    isLoading: boolean;
    error?: Error;
};

export function useMicaData<T>(type: MicaDataType): UseMicaDataResult<T> {
    const [data, setData] = useState<T | undefined>();
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<Error | undefined>();

    useEffect(() => {
        const controller = new AbortController();

        const fetchData = async () => {
            setIsLoading(true);
            setError(undefined);

            try {
                const res = await fetch(`/api/mica?type=${type}`, {
                    signal: controller.signal,
                });

                if (!res.ok) {
                    throw new Error(`Failed to fetch MiCA data (${res.status})`);
                }

                const json = (await res.json()) as T;
                setData(json);
            } catch (err) {
                if ((err as Error).name !== 'AbortError') {
                    setError(err as Error);
                }
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();

        return () => controller.abort();
    }, [type]);

    return { data, isLoading, error };
}
