import { NextResponse } from 'next/server';
import { sanitizeJobs } from '@lib/utils';

const PERSONIO_BASE_URL = 'https://iota-foundation.jobs.personio.com/search.json';
export const revalidate = 14400;
export async function GET() {
    const data = await fetchPersonioJobs();
    return NextResponse.json(data);
}

async function fetchPersonioJobs() {
    try {
        const response = await fetch(PERSONIO_BASE_URL);
        const fetchedJobs = await response.json();

        if (!fetchedJobs || fetchedJobs.length === 0) {
            console.log('No jobs found in Personio response');
            return [];
        }

        return sanitizeJobs(fetchedJobs);
    } catch (error) {
        console.log(`Error fetching jobs from ${PERSONIO_BASE_URL}:`, error);
        return [];
    }
}
