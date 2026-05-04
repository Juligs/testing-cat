import { NextResponse } from 'next/server';
import { fetchNewsPapers } from '@lib/utils/fetchNewsSheetData';

export const revalidate = 14400;

export async function GET() {
    try {
        const papers = await fetchNewsPapers();
        return NextResponse.json({ papers });
    } catch (err) {
        console.error('Failed to fetch research papers:', err);
        return NextResponse.json({ error: 'Failed to fetch research papers' }, { status: 500 });
    }
}
