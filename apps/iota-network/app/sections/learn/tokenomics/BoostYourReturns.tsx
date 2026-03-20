'use client';
import { ArrowTopRight } from '@repo/icons';
import { Actions, Button, ButtonVariant, VerticalTitle } from 'react-ui-kit';
import { TwoColumnsImageTemplate } from '@repo/shared/components';
import { BaseSectionProps } from '@repo/shared/interfaces';
import { BOOST_YOUR_RETURNS_TITLE } from './constants';
import Link from 'next/link';

export function BoostYourReturns({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section id={id} data-navbar-color-scheme={navbarColorScheme}>
            <div className="container py-14 xs:py-20 lg:py-30">
                <TwoColumnsImageTemplate image="/shared/boost_rewards.png">
                    <div className="sm:pr-[92px] lg:pr-[102px] text-center">
                        <VerticalTitle {...BOOST_YOUR_RETURNS_TITLE}>
                            <Actions>
                                <Link
                                    href="https://docs.iota.org/about-iota/iota-architecture/staking-rewards"
                                    aria-label="Go to the documentation"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Button
                                        variant={ButtonVariant.Primary}
                                        text="Learn more"
                                        icon={<ArrowTopRight />}
                                    />
                                </Link>
                            </Actions>
                        </VerticalTitle>
                    </div>
                </TwoColumnsImageTemplate>
            </div>
        </section>
    );
}
