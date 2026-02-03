import { VerticalTitle, TitleTextSize, IconContent, Button } from 'react-ui-kit';
import { BaseProposalSectionProps } from '../../utils';
import Link from 'next/link';
import { ArrowTopRight } from '@repo/icons';
import { PROPOSAL_FORM_URL } from './constants';

type NonFunctionalRequirementsProps = BaseProposalSectionProps & {
    isOpen: boolean;
};

export function NonFunctionalRequirements({
    id,
    navbarColorScheme,
    proposal,
    isOpen,
}: NonFunctionalRequirementsProps) {
    const selectionCriteria = proposal['Selection Criteria'];
    return (
        <section className="w-full" id={id} data-navbar-color-scheme={navbarColorScheme}>
            <div className="flex flex-col gap-12 w-full">
                {selectionCriteria && (
                    <VerticalTitle
                        title="Non-Functional Requirements "
                        size={TitleTextSize.ExtraSmall}
                    />
                )}
                <div className="flex flex-col gap-6 w-full">
                    {selectionCriteria && (
                        <IconContent title="Selection Criteria" body={selectionCriteria}>
                            {isOpen && (
                                <div className="mt-12">
                                    <Link
                                        href={PROPOSAL_FORM_URL}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <Button text="Apply now" icon={<ArrowTopRight />} />
                                    </Link>
                                </div>
                            )}
                        </IconContent>
                    )}
                </div>
            </div>
        </section>
    );
}
