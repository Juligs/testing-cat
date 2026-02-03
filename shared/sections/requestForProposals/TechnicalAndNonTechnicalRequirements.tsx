import { IconContent } from 'react-ui-kit';
import { ComponentProps } from 'react';
import { BaseProposalSectionProps } from '../../utils';
import ReactMarkdown from 'react-markdown';

type IconContentItem = Omit<ComponentProps<typeof IconContent>, 'body'> & {
    bodyContent: React.ReactNode;
};

export function TechnicalAndNonTechnicalRequirements({
    id,
    navbarColorScheme,
    proposal,
}: BaseProposalSectionProps) {
    const technicalRequirementsContent: IconContentItem[] = [
        proposal['Technical Requirements'] && {
            title: 'Technical Requirements',
            bodyContent: (
                <div className="prose text-body-md marker:text-medium prose-li:text-medium">
                    <ReactMarkdown>{proposal['Technical Requirements']}</ReactMarkdown>
                </div>
            ),
        },
        proposal['Non-Technical Requirements'] && {
            title: 'Non-Technical Requirements',
            bodyContent: (
                <div className="prose text-body-md marker:text-medium prose-li:text-medium">
                    <ReactMarkdown>{proposal['Non-Technical Requirements']}</ReactMarkdown>
                </div>
            ),
        },
    ].filter(Boolean) as IconContentItem[];
    if (!technicalRequirementsContent.length) return null;

    return (
        <section className="w-full py-12" id={id} data-navbar-color-scheme={navbarColorScheme}>
            <div className="flex flex-col gap-12 w-full">
                {technicalRequirementsContent.map((data, index) => (
                    <IconContent key={index} title={data.title}>
                        {data.bodyContent}
                    </IconContent>
                ))}
            </div>
        </section>
    );
}
