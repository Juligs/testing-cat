import { NextRequest, NextResponse } from 'next/server';
import { fetchExchangesData } from '@lib/utils';

export const dynamic = 'force-dynamic';

export async function GET(req: NextRequest) {
    try {
        const exchangesData = await fetchExchangesData();
        return NextResponse.json(exchangesData);
    } catch (error) {
        console.error('Error in exchanges API route:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
