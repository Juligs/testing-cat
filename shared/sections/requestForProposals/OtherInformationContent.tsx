import { IconContent } from 'react-ui-kit';
import { BaseProposalSectionProps } from '../../utils';

export function OtherInformationContent({
    id,
    navbarColorScheme,
    proposal,
}: BaseProposalSectionProps) {
    const otherInfo = proposal['Other Information'];
    if (!otherInfo) return null;
    return (
        <section
            id={id}
            data-navbar-color-scheme={navbarColorScheme}
            className="w-full pb-14 xs:pb-20 lg:pb-30"
        >
            <IconContent title="Other Information" body={otherInfo} />
        </section>
    );
}
