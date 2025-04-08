import { BaseSectionProps } from '@repo/shared/interfaces';
import { Badge, BlogPostCard, VerticalTitle } from 'react-ui-kit';
import { GET_STARTED_VERTICAL_TITLE, GET_STARTED_BLOG_POST_CARD_CONTENT } from './constants';
import Link from 'next/link';

export function GetStarted({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section className="w-full" id={id} data-navbar-color-scheme={navbarColorScheme}>
            <div className="container py-14 xs:py-20 lg:py-30 flex flex-col gap-6 xs:gap-10 sm:gap-20 overflow-hidden">
                <div className="w-full text-start break-words">
                    <VerticalTitle {...GET_STARTED_VERTICAL_TITLE} />
                </div>
                <div className="grid grid-cols-1 xs:grid-cols-3 gap-6">
                    {GET_STARTED_BLOG_POST_CARD_CONTENT.map((data, index) => (
                        <Link
                            key={index}
                            href={data.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="[&>div]:h-full"
                            aria-label={`Link to ${data.title}`}
                        >
                            <BlogPostCard
                                title={data.title}
                                description={data.description}
                                image={data.image}
                            >
                                <Badge label={data.label} />
                            </BlogPostCard>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
