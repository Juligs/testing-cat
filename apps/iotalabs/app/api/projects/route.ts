import { fetchProjects } from '@repo/shared/utils';
import { NextRequest, NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
    const useWebsitePosition = request.nextUrl.searchParams.get('useWebsitePosition') === 'true';
    const data = await fetchProjects({
        useWebsitePosition,
    });

    return NextResponse.json(data);
}
