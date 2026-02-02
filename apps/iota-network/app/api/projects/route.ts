import { fetchProjects } from '@repo/shared/utils';
import { NextRequest, NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams;

    const view = searchParams.get('view') ?? undefined;
    const useWebsitePosition = searchParams.get('useWebsitePosition') === 'true';

    const data = await fetchProjects({
        view,
        useWebsitePosition,
    });

    return NextResponse.json(data);
}
