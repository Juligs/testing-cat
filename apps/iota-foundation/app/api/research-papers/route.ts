import { NextResponse } from 'next/server';
import { fetchResearchPapers } from '@lib/utils';
export const revalidate = 14400;

export async function GET(request: Request) {
    const url = new URL(request.url);
    const protocol = process.env.NODE_ENV === 'development' ? 'http' : 'https';
    const referer = `${protocol}://${url.host}`;

    try {
        const papers = await fetchResearchPapers(referer);
        return NextResponse.json({ papers });
    } catch (err) {
        console.error('Failed to fetch research papers:', err);
        return NextResponse.json({ error: 'Failed to fetch research papers' }, { status: 500 });
    }
}
