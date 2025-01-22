'use client';
import { BaseSectionProps } from '@repo/shared/interfaces';
import { VerticalTitleWithAnchorLinksSection } from '@repo/shared/components';
import { SECTION1_ANCHORLINKS } from './constants';

export function Section1({ id, theme }: BaseSectionProps) {
    return (
        <section className="w-full" id={id} data-theme={theme}>
            <VerticalTitleWithAnchorLinksSection
                content={SECTION1_ANCHORLINKS}
                subtitle="IOTA is driving the adoption of innovative technologies across various industries. We empower businesses with increased efficiency, security, and transparency, paving the way for a more connected and decentralized future."
            />
        </section>
    );
}
