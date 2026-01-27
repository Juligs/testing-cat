import { sanitizeBlogPosts } from './getBlogPosts';
import { ghostClient } from './ghostApiClient';

export async function getBlogPostsFromRequest(req: Request) {
    const { searchParams } = new URL(req.url);

    const source = (searchParams.get('source') as 'network' | 'labs') ?? 'network';

    const tagsParam = searchParams.get('tags');
    const tagSlugs = tagsParam?.split(',').map((t) => t.trim());
    const filter = tagSlugs?.length ? tagSlugs.map((slug) => `tag:${slug}`).join('+') : undefined;

    const ghost = ghostClient(source);

    const rawPosts = await ghost.posts.browse({
        limit: 3,
        include: 'tags',
        order: 'published_at DESC',
        filter,
    });

    return sanitizeBlogPosts(rawPosts);
}
