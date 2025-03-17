'use client';
import { TwoColumnsImageTemplate } from '@repo/shared/components';
import { BaseSectionProps } from '@repo/shared/interfaces';
import { Actions, Button, ButtonVariant, VerticalTitle } from 'react-ui-kit';
import { EXPANDING_APPLICATIONS_TITLE_CONTENT } from './constants';
import Link from 'next/link';
import { ArrowTopRight } from '@repo/icons';

export function ExpandingApplications({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section
            className="w-full bg-labs-neutral-100"
            id={id}
            data-navbar-color-scheme={navbarColorScheme}
        >
            <div className="container py-14 xs:py-20 lg:py-30">
                <TwoColumnsImageTemplate image="/about/iota-foundation/expanding_application.png">
                    <div className="sm:pr-[92px] lg:pr-[102px] text-center">
                        <VerticalTitle {...EXPANDING_APPLICATIONS_TITLE_CONTENT}>
                            <Actions>
                                <Link
                                    href="mailto:partnerships@iota.org"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Mail to Partnerships"
                                >
                                    <Button
                                        variant={ButtonVariant.Primary}
                                        text="Product Adoption"
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
