import { ArrowTopRight } from '@repo/icons';
import { BaseSectionProps } from '@repo/shared/interfaces';
import Link from 'next/link';
import { Actions, Button, VerticalTitle } from 'react-ui-kit';
import { BLOG_POSTS_TITLE_CONTENT } from './constants';

export function BlogPosts({ id, theme }: BaseSectionProps) {
    return (
        <section className="w-full" id={id} data-theme={theme}>
            <div className="container py-14 xs:py-20 lg:py-30">
                <div className="w-1/2 text-center">
                    <VerticalTitle {...BLOG_POSTS_TITLE_CONTENT}>
                        <Actions>
                            <Link
                                href="https://blog.iota.org/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Link to blog posts"
                            >
                                <Button text="Blog Posts" icon={<ArrowTopRight />} />
                            </Link>
                        </Actions>
                    </VerticalTitle>
                </div>
            </div>
        </section>
    );
}
