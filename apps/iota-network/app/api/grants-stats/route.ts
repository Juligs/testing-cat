import { NextResponse } from 'next/server';
import { fetchGrantsStats } from '@repo/shared/utils';

export const revalidate = 14400;

export async function GET() {
    const data = await fetchGrantsStats();
    return NextResponse.json(data);
}
