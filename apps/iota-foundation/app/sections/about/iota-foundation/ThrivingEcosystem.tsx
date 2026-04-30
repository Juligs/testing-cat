'use client';
import { TwoColumnsImageTemplate } from '@repo/shared/components';
import { BaseSectionProps } from '@repo/shared/interfaces';
import { Actions, Button, ButtonVariant, VerticalTitle } from 'react-ui-kit';
import { THRIVING_ECOSYSTEM_TITLE_CONTENT } from './constants';
import Link from 'next/link';

export function ThrivingEcosystem({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section
            className="w-full bg-labs-neutral-100"
            id={id}
            data-navbar-color-scheme={navbarColorScheme}
        >
            <div className="container py-14 xs:py-20 lg:py-30">
                <TwoColumnsImageTemplate image="/about/iota-foundation/thriving_ecosystem.png">
                    <div className="sm:pr-[92px] lg:pr-[102px] text-center">
                        <VerticalTitle {...THRIVING_ECOSYSTEM_TITLE_CONTENT}>
                            <Actions>
                                <Link
                                    href="https://iotalabs.io"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="iotalabs"
                                >
                                    <Button variant={ButtonVariant.Primary} text="iotalabs" icon />
                                </Link>
                            </Actions>
                        </VerticalTitle>
                    </div>
                </TwoColumnsImageTemplate>
            </div>
        </section>
    );
}
