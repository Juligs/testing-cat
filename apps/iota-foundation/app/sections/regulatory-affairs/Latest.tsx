import { BaseSectionProps } from '@repo/shared/interfaces';
import { Actions, HorizontalTitle, ImageCard, TextLink } from 'react-ui-kit';
import { LATEST_HORIZONTAL_TITLE, LATEST_REGULATORY_CONTENT } from './constants';
import Link from 'next/link';

export function Latest({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section className="w-full" id={id} data-navbar-color-scheme={navbarColorScheme}>
            <div className="container py-14 xs:py-20 lg:py-30 flex flex-col gap-14 xs:gap-20 sm:gap-30">
                <div className="w-full">
                    <HorizontalTitle {...LATEST_HORIZONTAL_TITLE} />
                </div>
                <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-6">
                    {LATEST_REGULATORY_CONTENT.map((data, index) => (
                        <ImageCard key={index} {...data} isHoverable={false}>
                            <Actions>
                                <Link href={data.link} target="_blank" rel="noopener noreferrer">
                                    <TextLink text="Read the blog post" showIcon />
                                </Link>
                            </Actions>
                        </ImageCard>
                    ))}
                </div>
            </div>
        </section>
    );
}
