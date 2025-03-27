import { BaseSectionProps } from '@repo/shared/interfaces';
import { Actions, HorizontalTitle, IconContent, TextLink } from 'react-ui-kit';
import { LATEST_ICON_CONTENT, LATEST_HORIZONTAL_TITLE } from './constants';
import Link from 'next/link';

export function Latest({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section className="w-full" id={id} data-navbar-color-scheme={navbarColorScheme}>
            <div className="container py-14 xs:py-20 lg:py-30 flex flex-col gap-14 xs:gap-20 sm:gap-30">
                <div className="w-full">
                    <HorizontalTitle {...LATEST_HORIZONTAL_TITLE} />
                </div>
                <div className="grid grid-cols-1  sm:grid-cols-3 gap-6">
                    {LATEST_ICON_CONTENT.map((data, index) => (
                        <IconContent key={index} {...data}>
                            <Actions>
                                <Link
                                    href={data.link}
                                    target="_blank"
                                    rel="nopener noreferrer"
                                    aria-label={`Read blog post: ${data.title}`}
                                >
                                    <TextLink text="Read the blog post" showIcon />
                                </Link>
                            </Actions>
                        </IconContent>
                    ))}
                </div>
            </div>
        </section>
    );
}
