import { VerticalTitle, TitleTextSize, IconContent } from 'react-ui-kit';
import { ComponentProps } from 'react';
import { BaseProposalSectionProps } from '../../utils';
import { DataInsights, MultiTierControl } from '@repo/icons';

type IconContentItem = ComponentProps<typeof IconContent>;

export function FunctionalRequirementsIcon({
    id,
    navbarColorScheme,
    proposal,
}: BaseProposalSectionProps) {
    const iconContent: IconContentItem[] = [
        proposal.Purpose && {
            title: 'Purpose',
            body: proposal.Purpose,
            icon: <DataInsights />,
        },
        proposal['Scope of Work'] && {
            title: 'Scope of Work',
            body: proposal['Scope of Work'],
            icon: <MultiTierControl />,
        },
    ].filter(Boolean) as IconContentItem[];
    if (!iconContent.length) return null;

    return (
        <section className="w-full" id={id} data-navbar-color-scheme={navbarColorScheme}>
            <div className="flex flex-col gap-12 w-full">
                <VerticalTitle title="Functional Requirements" size={TitleTextSize.ExtraSmall} />
                <div className="flex flex-col gap-6 w-full">
                    {iconContent.map((data, index) => (
                        <IconContent key={index} {...data} filled />
                    ))}
                </div>
            </div>
        </section>
    );
}
