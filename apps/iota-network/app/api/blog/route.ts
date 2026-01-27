import { getBlogPostsFromRequest } from '@repo/shared/utils/ghost-blog';
import { NextResponse } from 'next/server';
export const revalidate = 14400;
export async function GET(req: Request) {
    try {
        const posts = await getBlogPostsFromRequest(req);
        return NextResponse.json(posts);
    } catch (error) {
        console.error('error fetching ghost posts', error);

        return NextResponse.json({ error: 'Failed to fetch posts' }, { status: 500 });
    }
}
