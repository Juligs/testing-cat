'use client';
import { useEffect, useState } from 'react';
import { CompliancePapers } from './CompliancePapers';
import { ComplianceData } from '@lib/utils/sanitizeComplianceSheetsData';
import { PapersSkeleton } from '@components';

export function FetchCompliancePapers() {
    const [data, setData] = useState<ComplianceData[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const fetchedData = await fetchCompliancePapersData();
                setData(fetchedData);
            } catch (error) {
                console.error('Error fetching paper data:', error);
                setData([]);
            } finally {
                setIsLoading(false);
            }
        };
        fetchData();
    }, []);

    const fetchCompliancePapersData = async (): Promise<ComplianceData[]> => {
        try {
            const res = await fetch('/api/compliance-papers');

            if (!res.ok) {
                throw new Error('Failed to fetch compliance papers');
            }

            const json = await res.json();
            const [Sheet1] = json.papers;
            return [...Sheet1] as ComplianceData[];
        } catch (error) {
            console.error('Failed to fetch compliance papers', error);
            return [];
        }
    };

    if (isLoading) {
        return <PapersSkeleton />;
    }

    return <CompliancePapers data={data} />;
}
