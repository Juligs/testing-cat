'use client';

import { useEffect, useState } from 'react';
import { BlogPostCardSkeleton, BlogPostSection } from '../../components';
import { BlogPostCardData, BlogSource } from '../../utils';

interface FetchBlogPostsSectionProps {
    source: BlogSource;
    tags?: string[];
    contentTitle?: React.ComponentProps<typeof BlogPostSection>['contentTitle'];
    id?: string;
}

export function FetchBlogPostsSection({
    source,
    tags,
    contentTitle,
    id,
}: FetchBlogPostsSectionProps) {
    const [posts, setPosts] = useState<BlogPostCardData[] | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchPosts = async () => {
            setIsLoading(true);
            try {
                const params = new URLSearchParams({
                    'ignore-cache': 'true',
                    source,
                });

                if (tags?.length) {
                    params.set('tags', tags.join(','));
                }

                const res = await fetch(`/api/blog?${params.toString()}`);
                const data = await res.json();

                if (!Array.isArray(data)) {
                    console.error('Fetch Blog Posts Section Invalid response:', data);
                    setPosts([]);
                    return;
                }

                setPosts(data);
            } catch (error) {
                console.error('Fetch Blog Posts Section', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchPosts();
    }, [source, tags?.join(',')]);

    if (isLoading || !posts) {
        return <BlogPostCardSkeleton />;
    }

    return <BlogPostSection id={id} source={source} contentTitle={contentTitle} dataBlog={posts} />;
}
