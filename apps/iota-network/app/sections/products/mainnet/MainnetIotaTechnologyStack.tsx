import { STACK_HORIZONTAL_TITLE, STACK_IMAGE_CARD_CONTENT } from './constants';
import { Actions, ImageCard, TextLink, VerticalTitle } from 'react-ui-kit';
import { BaseSectionProps } from '@repo/shared/interfaces';
import Link from 'next/link';

export function MainnetIotaTechnologyStack({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section className="w-full" id={id} data-navbar-color-scheme={navbarColorScheme}>
            <div className="container py-14 xs:py-20 lg:py-30 flex flex-col gap-14 xs:gap-20 sm:gap-30">
                <VerticalTitle {...STACK_HORIZONTAL_TITLE}>
                    <Actions>
                        <Link href="/learn/showcases" aria-label="Go to the Showcases page">
                            <TextLink text="Learn more" showIcon />
                        </Link>
                    </Actions>
                </VerticalTitle>

                <div className="gap-6 grid grid-cols-1 xs:grid-cols-3">
                    {STACK_IMAGE_CARD_CONTENT.map((data, index) => (
                        <Link href={data.link} key={index} aria-label="Go to the page">
                            <ImageCard {...data} />
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
