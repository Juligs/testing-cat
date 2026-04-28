import { Actions, Button, ButtonVariant, VerticalTitle } from 'react-ui-kit';
import { PAST_EVENTS_TITLE } from './constants/pastEventsContent.constants';
import Link from 'next/link';
import React from 'react';
import { TwoColumnsImageTemplate } from '@repo/shared/components';
import { ArrowTopRight } from '@repo/icons/src';
import { BaseSectionProps } from '@repo/shared/interfaces';

export function PastEvents({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section
            className="bg-iota-neutral-98"
            id={id}
            data-navbar-color-scheme={navbarColorScheme}
        >
            <div className="container py-14 xs:py-20 lg:py-30 flex flex-col sm:flex-row gap-6 items-center">
                <TwoColumnsImageTemplate image="/beyond-the-chain/overview/past_events.png">
                    <div className="sm:pr-[92px] lg:pr-[102px] text-center">
                        <VerticalTitle {...PAST_EVENTS_TITLE}>
                            <Actions>
                                <Link
                                    href="/beyond-the-chain/workshop-highlights/2025"
                                    aria-label="Learn more"
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
