import { TwoColumnsImageTemplate } from '@repo/shared/components';
import {
    BOOST_YOUR_REWARDS_VERTICAL_TITLE_CONTENT,
    BOOST_YOUR_REWARDS_IMAGE_CARD_CONTENT,
} from './constants';
import { Actions, Button, ImageCard, VerticalTitle } from 'react-ui-kit';
import { BaseSectionProps } from '@repo/shared/interfaces';
import Link from 'next/link';
import { ArrowTopRight } from '@repo/icons';
import { IOTA_WALLET_LINK } from '@repo/shared/constants';

export function BoostYourRewards({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section className="w-full" id={id} data-navbar-color-scheme={navbarColorScheme}>
            <div className="container py-14 xs:py-20 lg:py-30 flex flex-col gap-14 xs:gap-20 sm:gap-30">
                <TwoColumnsImageTemplate image="/shared/boost_rewards.png">
                    <div className="sm:pr-[92px] lg:pr-[102px] text-center">
                        <VerticalTitle {...BOOST_YOUR_REWARDS_VERTICAL_TITLE_CONTENT}>
                            <Actions>
                                <Link
                                    href={IOTA_WALLET_LINK}
                                    target="_blank"
                                    rel="noopener noreferre"
                                    aria-label="go to the wallet"
                                >
                                    <Button text="Start Staking" icon={<ArrowTopRight />} />
                                </Link>
                            </Actions>
                        </VerticalTitle>
                    </div>
                </TwoColumnsImageTemplate>
                <div className="gap-6 grid grid-cols-1 xs:grid-cols-3">
                    {BOOST_YOUR_REWARDS_IMAGE_CARD_CONTENT.map((data, index) => (
                        <ImageCard key={index} {...data} isHoverable={false} />
                    ))}
                </div>
            </div>
        </section>
    );
}
