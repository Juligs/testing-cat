'use client';
import { TwoColumnsImageTemplate } from '@repo/shared/components';
import { BaseSectionProps } from '@repo/shared/interfaces';
import { VerticalTitle } from 'react-ui-kit';
import { BREAKING_BOUNDARIES_TITLE_CONTENT } from './constants';

export function BreakingBoundaries({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section
            className="w-full bg-labs-neutral-100"
            id={id}
            data-navbar-color-scheme={navbarColorScheme}
        >
            <div className="container py-14 xs:py-20 lg:py-30">
                <TwoColumnsImageTemplate image="/about/team-and-careers/breaking_boundaries.png">
                    <div className="sm:pr-[92px] lg:pr-[102px] text-center">
                        <VerticalTitle {...BREAKING_BOUNDARIES_TITLE_CONTENT} />
                    </div>
                </TwoColumnsImageTemplate>
            </div>
        </section>
    );
}
