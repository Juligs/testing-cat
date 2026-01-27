import { BlogPostCard } from 'react-ui-kit';
import { ComponentProps } from 'react';
import { formatDate } from '../formatDate';
import { isValidUrl } from '../isValidUrl';

export type BlogPostCardProps = ComponentProps<typeof BlogPostCard>;

export type BlogPostTag = {
    name: string;
    slug: string;
};

export type BlogPostCardData = BlogPostCardProps & {
    tags?: BlogPostTag[];
    link: string;
};

export interface GhostPost {
    published_at: string;
    feature_image: string;
    title: string;
    tags?: {
        name: string;
        slug: string;
    }[];
    url: string;
}

export function sanitizeBlogPosts(posts: GhostPost[]): BlogPostCardData[] {
    if (!Array.isArray(posts) || posts.length === 0) {
        console.warn('sanitizeGhostPosts No posts received');
        return [];
    }

    const filteredPosts = posts.filter((post) => {
        const hasRequiredFields =
            isValidUrl(post.url) &&
            post.url.length > 0 &&
            typeof post.title === 'string' &&
            post.title.length > 0 &&
            typeof post.feature_image === 'string' &&
            post.feature_image.length > 0 &&
            typeof post.published_at === 'string';

        const allConditionsMet = !!hasRequiredFields;

        return allConditionsMet;
    });

    return filteredPosts.map((post) => ({
        title: post.title,
        image: post.feature_image,
        link: post.url,
        tags: post.tags?.map((tag) => ({
            name: tag.name,
            slug: tag.slug,
        })),
        description: formatDate(post.published_at),
    }));
}
