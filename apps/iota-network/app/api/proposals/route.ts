import { handleFilteredProposals } from '@repo/shared/utils';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET(request: Request) {
    const data = await handleFilteredProposals(request);
    return NextResponse.json(data);
}
