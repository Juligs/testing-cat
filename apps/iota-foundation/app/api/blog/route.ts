import { fetchBlogPostsFromQuery } from '@repo/shared/utils/ghost-blog';
import { type NextRequest, NextResponse } from 'next/server';
export const revalidate = 14400;
export async function GET(req: NextRequest) {
    const searchParams = req.nextUrl.searchParams;
    try {
        const posts = await fetchBlogPostsFromQuery(searchParams);
        return NextResponse.json(posts);
    } catch (error) {
        console.error('error fetching ghost posts', error);

        return NextResponse.json({ error: 'Failed to fetch posts' }, { status: 500 });
    }
}
