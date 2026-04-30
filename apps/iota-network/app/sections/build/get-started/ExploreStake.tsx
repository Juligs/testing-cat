import { BaseSectionProps } from '@repo/shared/interfaces';
import {
    Actions,
    Button,
    HighlightCard,
    HorizontalTitle,
    ImageCard,
    TitleTextSize,
    VerticalTitle,
} from 'react-ui-kit';
import {
    EXPLORE_CARD_VERTICAL_TITLE,
    EXPLORE_CARD_IMAGE_CARD_CONTENT,
    EXPLORE_CARD_CTA_CARD_CONTENT,
    STAKING_CARD_VERTICAL_TITLE,
    EXPLORE_VALIDATORS_HIGHLIGHT_CARD_CONTENT,
    EXPLORE_VALIDATORS_CTA_CARD_CONTENT,
} from './constants';
import Link from 'next/link';
import { SmallCtaCard } from '@components/small-CTA-card/SmallCtaCard';
import { FetchExchangesLinks } from './subsections';

export function ExploreStake({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section id={id} data-navbar-color-scheme={navbarColorScheme}>
            <div className="container py-14 xs:py-20 lg:py-30 w-full flex flex-col gap-20 xs:gap-30">
                <div className="grid grid-cols-1 sm:grid-cols-[1fr_2fr] gap-6">
                    <div className="max-w-[464px]">
                        <VerticalTitle {...EXPLORE_CARD_VERTICAL_TITLE} />
                    </div>
                    <div className="grid grid-cols-1 xs:grid-cols-2 gap-6">
                        {EXPLORE_CARD_IMAGE_CARD_CONTENT.map((data, index) => (
                            <Link href={data.link} key={index} aria-label={`Link to ${data.title}`}>
                                <ImageCard {...data} />
                            </Link>
                        ))}
                    </div>
                </div>
                <div className="flex flex-col gap-12 w-full">
                    <HorizontalTitle
                        title="Wallets"
                        subtitle="Manage assets, tokens, and credentials with IOTA wallets for developers and users"
                        size={TitleTextSize.ExtraSmall}
                    />
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {EXPLORE_CARD_CTA_CARD_CONTENT.map((data, index) => (
                            <Link
                                href={data.link}
                                key={index}
                                aria-label={`Link to ${data.title}`}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <SmallCtaCard
                                    {...data}
                                    key={index}
                                    isFilled
                                    imgSizes="(max-width: 1080px) 680px, 354px"
                                />
                            </Link>
                        ))}
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-[1fr_2fr] gap-6">
                    <div className="max-w-full xs:max-w-[464px] flex flex-col h-full justify-center">
                        <VerticalTitle {...STAKING_CARD_VERTICAL_TITLE}>
                            <Actions>
                                <Link
                                    href="/learn/staking"
                                    aria-label="Link to Learn more about Staking"
                                >
                                    <Button text="Learn more" icon />
                                </Link>
                            </Actions>
                        </VerticalTitle>
                    </div>
                    <div className="grid grid-cols-1 xs:grid-cols-2 gap-6">
                        {EXPLORE_VALIDATORS_HIGHLIGHT_CARD_CONTENT.map((data, index) => (
                            <Link
                                href={data.link}
                                key={index}
                                aria-label={`Link to ${data.title}`}
                                target={data.isExternal ? '_blank' : ''}
                                rel={data.isExternal ? 'noopener noreferrer' : ''}
                            >
                                <HighlightCard {...data} />
                            </Link>
                        ))}
                    </div>
                </div>
                <HorizontalTitle
                    title="Explorers & Validators"
                    subtitle="Comprehensive search capabilities to help you find anything, anytime"
                    size={TitleTextSize.ExtraSmall}
                />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {EXPLORE_VALIDATORS_CTA_CARD_CONTENT.map((data, index) => (
                        <Link
                            href={data.link}
                            key={index}
                            aria-label={`Link to ${data.title}`}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <SmallCtaCard {...data} key={index} smallGap hasSmallTitle />
                        </Link>
                    ))}
                </div>
                <div className="flex flex-col gap-12">
                    <HorizontalTitle
                        title="Buying IOTA Tokens"
                        subtitle="Visit these exchanges to start your IOTA journey"
                        size={TitleTextSize.ExtraSmall}
                    />
                    <FetchExchangesLinks />
                </div>
            </div>
        </section>
    );
}
