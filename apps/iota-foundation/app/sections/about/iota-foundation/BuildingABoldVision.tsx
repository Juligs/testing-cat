'use client';
import { TwoColumnsImageTemplate } from '@repo/shared/components';
import { BaseSectionProps } from '@repo/shared/interfaces';
import { Actions, Button, ButtonVariant, VerticalTitle } from 'react-ui-kit';
import { BUILDING_A_BOLD_VISION_TITLE_CONTENT } from './constants';
import Link from 'next/link';
import { ArrowTopRight } from '@repo/icons';

export function BuildingABoldVision({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section
            className="w-full bg-labs-neutral-100"
            id={id}
            data-navbar-color-scheme={navbarColorScheme}
        >
            <div className="container py-14 xs:py-20 lg:py-30">
                <TwoColumnsImageTemplate image="/about/iota-foundation/bold_vision.png" reverse>
                    <div className="sm:pl-[92px] lg:pl-[102px] text-center">
                        <VerticalTitle {...BUILDING_A_BOLD_VISION_TITLE_CONTENT}>
                            <Actions>
                                <Link
                                    href="https://blog.iota.org/iota-first-chapter-synopsis-506fdf874437/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Our First Blog Post"
                                >
                                    <Button
                                        variant={ButtonVariant.Primary}
                                        text="Our First Blog Post"
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
