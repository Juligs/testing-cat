import { VerticalTitle, Actions, Button, ButtonVariant } from 'react-ui-kit';
import { TwoColumnsImageTemplate } from '@repo/shared/components';
import Link from 'next/link';
import { ArrowTopRight } from '@repo/icons';
import { WHAT_IS_IOTA_VERTICAL_TITLE_CONTENT } from './constants';
import { BaseSectionProps } from '@repo/shared/interfaces';

export function WhatIsIOTA({ id, theme }: BaseSectionProps) {
    return (
        <section className="w-full bg-labs-neutral-100" id={id} data-theme={theme}>
            <div className="container py-14 xs:py-20 lg:py-30">
                <TwoColumnsImageTemplate image="/learn/intro/section2/what-is-iota.png">
                    <div className="sm:pr-[92px] lg:pr-[102px] text-center">
                        <VerticalTitle {...WHAT_IS_IOTA_VERTICAL_TITLE_CONTENT}>
                            <Actions>
                                <Link
                                    href="https://docs.iota.org/about-iota"
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
