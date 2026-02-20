import { fetchCompliancePapers } from '@lib/utils/fetchCompliancePapers';
import { NextResponse } from 'next/server';

export const revalidate = 14400;

export async function GET() {
    try {
        const papers = await fetchCompliancePapers();
        return NextResponse.json({ papers });
    } catch (err) {
        console.error('Failed to fetch compliance papers:', err);
        return NextResponse.json({ error: 'Failed to fetch compliance papers' }, { status: 500 });
    }
}
