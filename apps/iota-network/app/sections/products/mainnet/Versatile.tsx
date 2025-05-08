import { VERSATILE_HORIZONTAL_TITLE, VERSATILE_IMAGE_CARD_CONTENT } from './constants';
import { Actions, Button, HorizontalTitle, ImageCard } from 'react-ui-kit';
import { BaseSectionProps } from '@repo/shared/interfaces';
import Link from 'next/link';
import { ArrowTopRight } from '@repo/icons';

export function Versatile({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section className="w-full" id={id} data-navbar-color-scheme={navbarColorScheme}>
            <div className="container py-14 xs:py-20 lg:py-30 flex flex-col gap-14 xs:gap-20 sm:gap-30">
                <HorizontalTitle {...VERSATILE_HORIZONTAL_TITLE}>
                    <Actions>
                        <Link
                            href="https://docs.iota.org/developer/evm-to-move/"
                            target="_blank"
                            aria-label="Go to the documentation"
                        >
                            <Button text="Learn more" icon={<ArrowTopRight />} />
                        </Link>
                    </Actions>
                </HorizontalTitle>

                <div className="gap-6 grid grid-cols-1 xs:grid-cols-3">
                    {VERSATILE_IMAGE_CARD_CONTENT.map((data, index) => (
                        <Link
                            href={data.link}
                            target="_blank"
                            key={index}
                            aria-label="Go to the documentation"
                        >
                            <ImageCard {...data} />
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
