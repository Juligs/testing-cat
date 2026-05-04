import { LEARNING_HORIZONTAL_TITLE, LEARNING_IMAGE_CARD_CONTENT } from './constants';
import { Actions, Button, HorizontalTitle, ImageCard } from 'react-ui-kit';
import { BaseSectionProps } from '@repo/shared/interfaces';
import Link from 'next/link';

export function Learning({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section className="w-full" id={id} data-navbar-color-scheme={navbarColorScheme}>
            <div className="container py-14 xs:py-20 lg:py-30 flex flex-col gap-14 xs:gap-20 sm:gap-30">
                <HorizontalTitle {...LEARNING_HORIZONTAL_TITLE}>
                    <Actions>
                        <Link
                            href="https://docs.iota.org/iota-evm/getting-started/quick-start"
                            target="_blank"
                            aria-label="Go to the documentation"
                        >
                            <Button text="Learn more" icon />
                        </Link>
                    </Actions>
                </HorizontalTitle>

                <div className="gap-6 grid grid-cols-1 xs:grid-cols-3">
                    {LEARNING_IMAGE_CARD_CONTENT.map((data, index) => (
                        <Link
                            href={data.link}
                            target="_blank"
                            key={index}
                            className="[&>div]:h-full"
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
