import { handleFilteredProposals } from '@repo/shared/utils';
import { type NextRequest, NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
    const data = await handleFilteredProposals(request);
    return NextResponse.json(data);
}
