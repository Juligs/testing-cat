'use client';
import { ArrowTopRight } from '@repo/icons';
import { Actions, Button, ButtonVariant, VerticalTitle } from 'react-ui-kit';
import { TwoColumnsImageTemplate } from '@repo/shared/components';
import { BaseSectionProps } from '@repo/shared/interfaces';
import { LIQUID_STAKING_TITLE } from './constants';
import Link from 'next/link';

export function LiquidStaking({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section id={id} data-navbar-color-scheme={navbarColorScheme}>
            <div className="container py-14 xs:py-20 lg:py-30">
                <TwoColumnsImageTemplate image="/learn/tokenomics/liquid_staking.png">
                    <div className="sm:pr-[92px] lg:pr-[102px] text-center">
                        <VerticalTitle {...LIQUID_STAKING_TITLE}>
                            <Actions>
                                <Link
                                    href="https://swirlstake.com/"
                                    aria-label="Go to the Swirl Stake website"
                                    target="_blak"
                                    rel="nopener noreferrer"
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
