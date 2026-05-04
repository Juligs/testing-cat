import { fetchPastEventsSheetData } from '@lib/utils/fetchPastEventsSheetData';
import { NextResponse } from 'next/server';

export const revalidate = 14400;

export async function GET() {
    try {
        const papers = await fetchPastEventsSheetData();
        return NextResponse.json(
            { papers },
            {
                headers: {
                    'Cache-Control': 'public, s-maxage=14400, stale-while-revalidate=86400',
                },
            },
        );
    } catch (err) {
        console.error('Failed to fetch past events:', err);
        return NextResponse.json({ error: 'Failed to fetch past events' }, { status: 500 });
    }
}
