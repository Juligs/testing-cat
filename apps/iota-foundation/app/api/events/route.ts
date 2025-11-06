import { NextRequest, NextResponse } from 'next/server';
import { fetchEventsData } from '@repo/shared/utils';

export const dynamic = 'force-dynamic';

export async function GET(req: NextRequest) {
    try {
        const eventsData = await fetchEventsData();
        return NextResponse.json(eventsData);
    } catch (error) {
        console.error('Error in events API route:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
