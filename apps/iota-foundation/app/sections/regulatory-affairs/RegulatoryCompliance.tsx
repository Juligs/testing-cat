'use client';
import { TwoColumnsImageTemplate } from '@repo/shared/components';
import { BaseSectionProps } from '@repo/shared/interfaces';
import { HorizontalTitle, VerticalTitle } from 'react-ui-kit';
import {
    REGULATORY_COMPLIANCE_TITLE_CONTENT,
    COMPLIANCE_PAPERS_HORIZONTAL_TITLE,
} from './constants';
import { FetchCompliancePapers } from './subsections/FetchCompliancePapers';

export function RegulatoryCompliance({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section
            className="w-full bg-iota-neutral-98"
            id={id}
            data-navbar-color-scheme={navbarColorScheme}
        >
            <div className="container py-14 xs:py-20 lg:py-30 flex flex-col items-center gap-14 xs:gap-20 lg:gap-30">
                <TwoColumnsImageTemplate image="/purpose/how_we_get_there.png">
                    <div className="sm:pr-[92px] lg:pr-[102px] text-center">
                        <VerticalTitle {...REGULATORY_COMPLIANCE_TITLE_CONTENT} />
                    </div>
                </TwoColumnsImageTemplate>
                <div className="flex flex-col gap-10 xs:gap-12">
                    <div className="w-full break-words whitespace-normal">
                        <HorizontalTitle {...COMPLIANCE_PAPERS_HORIZONTAL_TITLE} />
                    </div>
                    <FetchCompliancePapers />
                </div>
            </div>
        </section>
    );
}
