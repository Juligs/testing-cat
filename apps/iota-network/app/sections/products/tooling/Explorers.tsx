import { EXPLORERS_VERTICAL_TITLE, EXPLORERS_IMAGE_CARD_CONTENT } from './constants';
import { ImageCard, VerticalTitle } from 'react-ui-kit';
import { BaseSectionProps } from '@repo/shared/interfaces';
import Link from 'next/link';

export function Explorers({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section className="w-full" id={id} data-navbar-color-scheme={navbarColorScheme}>
            <div className="container py-14 xs:py-20 lg:py-30 flex flex-col gap-14 xs:gap-20 sm:gap-30 items-center">
                <VerticalTitle {...EXPLORERS_VERTICAL_TITLE} isCentered />

                <div className="gap-6 grid grid-cols-1 xs:grid-cols-3">
                    {EXPLORERS_IMAGE_CARD_CONTENT.map((data, index) => (
                        <Link key={index} href={data.link} className="[&>div]:h-full">
                            <ImageCard {...data} />
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
