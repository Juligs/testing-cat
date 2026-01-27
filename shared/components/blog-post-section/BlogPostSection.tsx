import { BlogPostCardData, BlogSource } from '../../utils';
import { BaseSectionProps } from '../../interfaces';
import { Badge, BlogPostCard, TextLink, TitleTextSize, VerticalTitle } from 'react-ui-kit';
import Link from 'next/link';

const BLOG_URL_BY_SOURCE: Record<BlogSource, string> = {
    network: 'https://blog.iota.org/',
    labs: 'https://blog.iotalabs.io/',
};

const DEFAULT_BLOG_TITLE = 'The IOTA Blog';

export interface BlogPostSectionProps extends BaseSectionProps {
    contentTitle?: React.ComponentProps<typeof VerticalTitle>;
    dataBlog: BlogPostCardData[];
    source: BlogSource;
}

export function BlogPostSection({
    id,
    navbarColorScheme,
    contentTitle,
    dataBlog,
    source,
}: BlogPostSectionProps) {
    const blogUrl = BLOG_URL_BY_SOURCE[source];

    return (
        <section className="w-full" id={id} data-navbar-color-scheme={navbarColorScheme}>
            <div className="container flex flex-col gap-6 xs:gap-10 sm:gap-20 py-14 xs:py-20 lg:py-30">
                <div className="max-w-[800px]">
                    <VerticalTitle
                        title={contentTitle?.title ?? DEFAULT_BLOG_TITLE}
                        {...contentTitle}
                        size={TitleTextSize.ExtraSmall}
                    >
                        {blogUrl && (
                            <Link href={blogUrl} target="_blank" rel="noopener noreferrer">
                                <TextLink text="Blog posts" showIcon />
                            </Link>
                        )}
                    </VerticalTitle>
                </div>

                <div className="grid grid-cols-1 xs:grid-cols-3 gap-6">
                    {dataBlog.map((data, index) => (
                        <Link
                            key={index}
                            className="!h-full block [&>div]:h-full"
                            href={data.link}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <BlogPostCard
                                title={data.title}
                                image={data.image}
                                description={data.description}
                            >
                                {data.tags && data.tags.length > 0 && (
                                    <div className="flex flex-wrap gap-2">
                                        {data.tags?.map((tag) => (
                                            <Badge key={tag.slug} label={tag.name} />
                                        ))}
                                    </div>
                                )}
                            </BlogPostCard>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
