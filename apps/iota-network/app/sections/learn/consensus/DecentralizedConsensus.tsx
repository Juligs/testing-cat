import {
    Actions,
    Button,
    HorizontalTitle,
    IconContent,
    TitleTextSize,
    VerticalTitle,
} from 'react-ui-kit';
import { TwoColumnsImageTemplate } from '@repo/shared/components';
import { BaseSectionProps } from '@repo/shared/interfaces';
import {
    DECENTRALIZED_CONSENSUS_VERTICAL_TITLE,
    CONSENSUS_KEY_FUTURES_ICON_CONTENT,
    DECENTRALIZED_BUTTONS,
} from './constants';
import Link from 'next/link';

export function DecentralizedConsensus({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section id={id} data-navbar-color-scheme={navbarColorScheme}>
            <div className="container flex flex-col py-14 xs:py-20 lg:py-30 gap-14 xs:gap-20 lg:gap-30">
                <TwoColumnsImageTemplate image="/shared/decentralized_grid.png">
                    <div className="sm:pr-[92px] lg:pr-[98px] text-center break-words whitespace-normal w-full">
                        <VerticalTitle {...DECENTRALIZED_CONSENSUS_VERTICAL_TITLE}>
                            <Actions>
                                {DECENTRALIZED_BUTTONS.map(
                                    ({ link, isExternal, ...buttonProps }, index) => (
                                        <Link
                                            key={index}
                                            href={link}
                                            target={isExternal ? '_blank' : undefined}
                                            rel={isExternal ? 'noopener noreferrer' : undefined}
                                        >
                                            <Button {...buttonProps} />
                                        </Link>
                                    ),
                                )}
                            </Actions>
                        </VerticalTitle>
                    </div>
                </TwoColumnsImageTemplate>
                <div className="flex flex-col gap-12">
                    <HorizontalTitle title="Key Features" size={TitleTextSize.ExtraSmall} />
                    <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-5 gap-6">
                        {CONSENSUS_KEY_FUTURES_ICON_CONTENT.map((data, index) => (
                            <div key={index} className="[&>div]:h-full">
                                <IconContent {...data} filled />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
