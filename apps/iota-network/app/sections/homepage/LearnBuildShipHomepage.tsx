import { BaseSectionProps } from '@repo/shared/interfaces';
import { Actions, Button, HighlightCard, VerticalTitle } from 'react-ui-kit';
import {
    LEARN_BUILD_HIGHLIGHT_CONTENT,
    LEARN_BUILD_VERTICAL_TITLE,
    LEARN_BUILD_CTA_CONTENT,
    LEARN_BUILD_BUTTONS,
} from './constants';
import Link from 'next/link';
import { SmallCtaCard } from '@components/small-CTA-card/SmallCtaCard';

export function LearnBuildShipHomepage({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section
            className="w-full bg-iota-neutral-98"
            id={id}
            data-navbar-color-scheme={navbarColorScheme}
        >
            <div className="container py-14 xs:py-20 lg:py-30 flex flex-col gap-14 xs:gap-20 md:gap-30">
                <div className="grid w-full items-center grid-cols-1 sm:grid-cols-[1fr_2fr] gap-8 sm:gap-6">
                    <VerticalTitle {...LEARN_BUILD_VERTICAL_TITLE}>
                        <Actions>
                            <div className="flex gap-4">
                                {LEARN_BUILD_BUTTONS.map((button, index) => (
                                    <Actions key={index}>
                                        <Link
                                            href={button.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <Button {...button} icon />
                                        </Link>
                                    </Actions>
                                ))}
                            </div>
                        </Actions>
                    </VerticalTitle>
                    <div className="grid grid-cols-1 xs:grid-cols-2 gap-6">
                        {LEARN_BUILD_HIGHLIGHT_CONTENT.map((data, index) => (
                            <Link
                                href={data.link}
                                key={index}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="[&>div]:h-full"
                                aria-label={`Link to ${data.title}`}
                            >
                                <HighlightCard
                                    key={index}
                                    overline={data.overline}
                                    title={data.title}
                                    body={data.body}
                                    backgroundImage={data.backgroundImage}
                                />
                            </Link>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 xs:grid-cols-2  gap-6">
                    {LEARN_BUILD_CTA_CONTENT.map((data, index) => (
                        <Link
                            className="[&>div]:h-full"
                            href={data.link}
                            key={index}
                            target={data.isExternal ? '_blank' : undefined}
                            rel={data.isExternal ? 'noopener noreferrer' : undefined}
                            aria-label={`Link to ${data.title}`}
                        >
                            <SmallCtaCard {...data} />
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
