import { BaseSectionProps } from '@repo/shared/interfaces';
import { Actions, Button, ImageCard, HorizontalTitle, ButtonVariant } from 'react-ui-kit';
import { FIRST_PARTICIPANTS_IMAGE_CARD, FIRST_PARTICIPANTS_HORIZONTAL_TITLE } from './constants';
import Link from 'next/link';
import { ArrowTopRight } from '@repo/icons';

export function FirstParticipants({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section className="w-full" id={id} data-navbar-color-scheme={navbarColorScheme}>
            <div className="container py-14 xs:py-20 lg:py-30 flex flex-col gap-14 xs:gap-20 sm:gap-30">
                <HorizontalTitle {...FIRST_PARTICIPANTS_HORIZONTAL_TITLE}>
                    <Actions>
                        <Link
                            href="https://blog.iota.org/first-participants-bip/"
                            target="_blank"
                            rel="nopener noreferrer"
                            aria-label="Go to the blog"
                        >
                            <Button
                                text="Read the blog post"
                                icon={<ArrowTopRight />}
                                variant={ButtonVariant.Secondary}
                            />
                        </Link>
                    </Actions>
                </HorizontalTitle>
                <div className="grid grid-cols-1 xs:grid-cols-3 gap-6">
                    {FIRST_PARTICIPANTS_IMAGE_CARD.map((data, index) => (
                        <Link
                            href={data.link}
                            key={index}
                            target="_blank"
                            rel="nopener noreferrer"
                            aria-label={`Link to ${data.title}`}
                            className="[&>div]:h-full"
                        >
                            <ImageCard {...data} />
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
