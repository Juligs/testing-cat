import { BaseSectionProps } from '@repo/shared/interfaces';
import { Actions, Button, VerticalTitle } from 'react-ui-kit';
import { EVENT_TEASER_VERTICAL_TITLE, EVENT_TEASER_CTA_CONTENT } from './constants';
import Link from 'next/link';
import { FetchEventsDataCards } from '@repo/shared/sections/events/subsections';
import { SmallCtaCard } from '@components/small-CTA-card/SmallCtaCard';
import { Separator } from '@components/separator';
import { ArrowTopRight } from '@repo/icons';

export function EventTeaser({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section className="w-full" id={id} data-navbar-color-scheme={navbarColorScheme}>
            <div className="container py-14 xs:py-20 lg:py-30 flex flex-col gap-14 xs:gap-20">
                <div className="flex flex-col gap-10 sm:gap-0 sm:flex-row sm:justify-between w-full items-center">
                    <div className="sm:max-w-[464px]">
                        <VerticalTitle {...EVENT_TEASER_VERTICAL_TITLE}>
                            <Actions>
                                <Link href="https://luma.com/user/iota" target="_blank">
                                    <Button
                                        text="Subscribe for future events"
                                        icon={<ArrowTopRight />}
                                    />
                                </Link>
                            </Actions>
                        </VerticalTitle>
                    </div>
                    <div className="sm:max-w-[708px]">
                        <FetchEventsDataCards useFeatured />
                    </div>
                </div>
                <Separator />
                <div className="grid grid-cols-1 sm:grid-cols-2  gap-6">
                    {EVENT_TEASER_CTA_CONTENT.map((data, index) => (
                        <Link
                            className="[&>div]:h-full"
                            href={data.link}
                            key={index}
                            target={data.isExternal ? '_blank' : undefined}
                            rel={data.isExternal ? 'noopener noreferrer' : undefined}
                            aria-label={`Link to ${data.title}`}
                        >
                            <SmallCtaCard {...data} isFilled hasSmallTitle />
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
