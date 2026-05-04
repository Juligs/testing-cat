import { VerticalTitle, Actions, Button, ButtonVariant } from 'react-ui-kit';
import { TwoColumnsImageTemplate } from '@repo/shared/components';
import Link from 'next/link';
import { WHAT_IS_IOTA_VERTICAL_TITLE_CONTENT } from './constants';
import { BaseSectionProps } from '@repo/shared/interfaces';

export function WhatIsIOTA({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section
            className="w-full bg-labs-neutral-100"
            id={id}
            data-navbar-color-scheme={navbarColorScheme}
        >
            <div className="container py-14 xs:py-20 lg:py-30">
                <TwoColumnsImageTemplate image="/learn/intro/what-is-iota/what_is_iota.png">
                    <div className="sm:pr-[92px] lg:pr-[102px] text-center">
                        <VerticalTitle {...WHAT_IS_IOTA_VERTICAL_TITLE_CONTENT}>
                            <Actions>
                                <Link
                                    href="https://docs.iota.org/about-iota"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Link to Learn more"
                                >
                                    <Button
                                        variant={ButtonVariant.Primary}
                                        text="Learn more"
                                        icon
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
