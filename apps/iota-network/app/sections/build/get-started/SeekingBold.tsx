import {
    Actions,
    AnchorLink,
    Button,
    CtaCard,
    HorizontalTitle,
    ImageCard,
    ImageCardSize,
    TextLink,
    TitleTextSize,
    VerticalTitle,
    Video,
} from 'react-ui-kit';
import { BaseSectionProps } from '@repo/shared/interfaces';
import {
    SEEKING_CTA_CONTENT,
    CONNECT_VERTICAL_TITLE,
    CONNECT_CTA_CONTENT,
    CONTRIBUTE_IMAGE_CARD_CONTENT,
    SEEKING_SOCIAL_LINKS,
} from './constants';
import { SmallCtaCard } from '@components/small-CTA-card/SmallCtaCard';
import Link from 'next/link';
import { FetchEventsDataCards } from '@repo/shared/sections/events/subsections';
import clsx from 'clsx';
import { FetchGrantsStatsDataGetStarted } from './subsections/FetchGrantsStatsDataGetStarted';
import { BuildWithPurpose } from './BuildWithPurpose';

export function SeekingBold({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section
            className="w-full box-border relative overflow-hidden bg-iota-neutral-4"
            id={id}
            data-navbar-color-scheme={navbarColorScheme}
        >
            <Video
                src="https://files.iota.org/media/iota-network/why_build_on_iota.mp4"
                poster="https://files.iota.org/media/iota-network/why_build_on_iota_poster.jpg"
                className="absolute top-0 left-0 w-full h-auto object-contain z-0"
            />

            <div className="container py-14 xs:py-20 lg:py-30 flex flex-col gap-14 xs:gap-20 w-full relative z-10">
                <HorizontalTitle
                    title="Seeking Bold Innovators"
                    size={TitleTextSize.Medium}
                    inverted
                />
                <FetchGrantsStatsDataGetStarted />
                <div className="grid grid-cols-1 xs:grid-cols-2 gap-6">
                    {SEEKING_CTA_CONTENT.map((data, index) =>
                        data?.link ? (
                            <Link
                                key={index}
                                href={data.link}
                                target={data.isExternal ? '_blank' : undefined}
                                rel={data.isExternal ? 'noopener noreferrer' : undefined}
                                aria-label={`Link to ${data.title}`}
                            >
                                <CtaCard {...data} aspectVideo small alignStart inverted />
                            </Link>
                        ) : (
                            <CtaCard {...data} key={index} aspectVideo small alignStart inverted />
                        ),
                    )}
                </div>
                <BuildWithPurpose inverted />
                <div className="flex flex-col gap-10 sm:gap-0 sm:flex-row sm:justify-between w-full items-center">
                    <div className="sm:max-w-[464px]">
                        <VerticalTitle {...CONNECT_VERTICAL_TITLE} inverted>
                            <Actions>
                                <Link href="https://luma.com/user/iota" target="_blank">
                                    <Button text="Subscribe for future events" icon inverted />
                                </Link>
                            </Actions>
                        </VerticalTitle>
                    </div>
                    <div className="sm:max-w-[708px]">
                        <FetchEventsDataCards isFeatured inverted />
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2  gap-6">
                    {CONNECT_CTA_CONTENT.map((data, index) => (
                        <Link
                            className="[&>div]:h-full"
                            href={data.link}
                            key={index}
                            target={data.isExternal ? '_blank' : undefined}
                            rel={data.isExternal ? 'noopener noreferrer' : undefined}
                            aria-label={`Link to ${data.title}`}
                        >
                            <SmallCtaCard {...data} hasSmallTitle inverted />
                        </Link>
                    ))}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="max-w-[464px]">
                        <VerticalTitle
                            title="Contribute to the Ecosystem"
                            inverted
                            size={TitleTextSize.Small}
                        />
                    </div>
                    <div className="grid grid-cols-1 xs:grid-cols-2 gap-6">
                        {CONTRIBUTE_IMAGE_CARD_CONTENT.map((data, index) => (
                            <ImageCard {...data} inverted size={ImageCardSize.Small}>
                                <Link
                                    href={data.link}
                                    key={index}
                                    aria-label={`Link to ${data.title}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="[&>div]:h-full"
                                >
                                    <TextLink text="Learn more" showIcon inverted />
                                </Link>
                            </ImageCard>
                        ))}
                    </div>
                </div>
                <div className="flex flex-col gap-12 w-full items-center">
                    <HorizontalTitle
                        title="Join the Community"
                        body="To engage with IOTA and its ecosystem projects, connect with our official channels on these platforms"
                        size={TitleTextSize.Small}
                        inverted
                    />
                    <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-4 gap-6 w-full">
                        {SEEKING_SOCIAL_LINKS.map((data, index) => {
                            const isLastRow = index >= SEEKING_SOCIAL_LINKS.length - 2;

                            return (
                                <Link
                                    href={data.link}
                                    key={index}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={clsx(
                                        '[&>div]:h-full [&_div>svg]:text-network-primary-80',
                                        isLastRow && 'xs:col-span-2',
                                    )}
                                >
                                    <AnchorLink {...data} inverted />
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
