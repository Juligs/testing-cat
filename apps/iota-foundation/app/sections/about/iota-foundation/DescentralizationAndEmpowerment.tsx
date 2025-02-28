'use client';
import { TwoColumnsImageTemplate } from '@repo/shared/components';
import { BaseSectionProps } from '@repo/shared/interfaces';
import { Actions, Button, ButtonVariant, VerticalTitle } from 'react-ui-kit';
import { DECENTRALIZATION_AND_EMPOWERMENT_TITLE_CONTENT } from './constants';
import Link from 'next/link';
import { ArrowTopRight } from '@repo/icons';

export function DescentralizationAndEmpowerment({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section
            className="w-full bg-labs-neutral-100"
            id={id}
            data-navbar-color-scheme={navbarColorScheme}
        >
            <div className="container py-14 xs:py-20 lg:py-30">
                <TwoColumnsImageTemplate
                    image="/about/iota-foundation/descentralization_and_empowerment.png"
                    reverse
                >
                    <div className="sm:pl-[92px] lg:pl-[102px] text-center">
                        <VerticalTitle {...DECENTRALIZATION_AND_EMPOWERMENT_TITLE_CONTENT}>
                            <Actions>
                                <Link
                                    href="https://govern.iota.org"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Governance Forum"
                                >
                                    <Button
                                        variant={ButtonVariant.Primary}
                                        text="Governance Forum"
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
