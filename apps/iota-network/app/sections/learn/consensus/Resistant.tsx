import { RESISTANT_HORIZONTAL_TITLE, RESISTANT_IMAGE_CARD_CONTENT } from './constants';
import { HorizontalTitle, ImageCard } from 'react-ui-kit';
import { BaseSectionProps } from '@repo/shared/interfaces';
import Link from 'next/link';

export function Resistant({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section className="w-full" id={id} data-navbar-color-scheme={navbarColorScheme}>
            <div className="container py-14 xs:py-20 lg:py-30 flex flex-col gap-14 xs:gap-20 sm:gap-30">
                <HorizontalTitle {...RESISTANT_HORIZONTAL_TITLE} />

                <div className="gap-6 grid grid-cols-1 xs:grid-cols-3">
                    {RESISTANT_IMAGE_CARD_CONTENT.map((data, index) => (
                        <Link
                            href={data.link}
                            key={index}
                            className="[&>div]:h-full"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <ImageCard {...data} />
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
