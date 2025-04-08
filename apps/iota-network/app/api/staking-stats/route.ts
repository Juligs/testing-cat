import { NextRequest, NextResponse } from 'next/server';
import { getStakingStats } from '@lib/utils';

export const revalidate = 600;

export async function GET(req: NextRequest) {
    try {
        const stakingStats = await getStakingStats();
        return NextResponse.json(stakingStats);
    } catch (error) {
        console.error('Error in stakingStats API route:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
