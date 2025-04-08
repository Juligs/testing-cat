import { NextRequest, NextResponse } from 'next/server';
import { getNetworkStats } from '@lib/utils';

export const revalidate = 600;

export async function GET(req: NextRequest) {
    try {
        const networkStats = await getNetworkStats();
        return NextResponse.json(networkStats);
    } catch (error) {
        console.error('Error in network-stats API route:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
