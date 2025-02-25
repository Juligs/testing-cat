'use client';
import { VerticalTitleWithAnchorLinks } from '../../components';
import { BaseSectionProps } from '../../interfaces';
import { DRIVING_INNOVATION_ADOPTION_ANCHORLINKS } from './drivingInnovationAdoptionContent.constants';

export function DrivingInnovationAdoption({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section
            className="w-full bg-iota-neutral-98"
            id={id}
            data-navbar-color-scheme={navbarColorScheme}
        >
            <VerticalTitleWithAnchorLinks
                content={DRIVING_INNOVATION_ADOPTION_ANCHORLINKS}
                subtitle="IOTA drives the adoption of innovative technologies across industries. We empower businesses with increased efficiency, security, and transparency for a more connected and decentralized future."
            />
        </section>
    );
}
