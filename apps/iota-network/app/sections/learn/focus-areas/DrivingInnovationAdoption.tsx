'use client';
import { BaseSectionProps } from '@repo/shared/interfaces';
import { VerticalTitleWithAnchorLinks } from '@repo/shared/components';
import { DRIVING_INNOVATION_ADOPTION_ANCHORLINKS } from './constants';

export function DrivingInnovationAdoption({ id, theme }: BaseSectionProps) {
    return (
        <section className="w-full" id={id} data-theme={theme}>
            <VerticalTitleWithAnchorLinks
                content={DRIVING_INNOVATION_ADOPTION_ANCHORLINKS}
                subtitle="IOTA is driving the adoption of innovative technologies across various industries. We empower businesses with increased efficiency, security, and transparency, paving the way for a more connected and decentralized future."
            />
        </section>
    );
}
