import { FieldSet, Records } from 'airtable';
import { ComponentProps } from 'react';
import { ImageCard } from 'react-ui-kit';

export type CardProposal = Omit<
    ComponentProps<typeof ImageCard>,
    'elevated' | 'inverted' | 'size' | 'subtitle'
>;

export type ProposalCards = CardProposal & {
    link: string;
    status: string;
};

export type RfPFields = {
    slug: string;
    'RfP Title': string;
    'Scope of Work'?: string;
    Status: string;
    Purpose: string;
    'Technical Requirements'?: string;
    'Non-Technical Requirements'?: string;
    'Other Information'?: string;
    'Selection Criteria'?: string;
    'Relationship Management'?: string;
    'Maximum Budget'?: string;
    'Deadline?'?: boolean;
    'Deadline Detail'?: string;
    image?: string;
};

export interface ProposalCardFilterTypes {
    proposalCards: ProposalCards[];
    fullData: RfPFields[];
}

export function sanitizeProposalsData(records: Records<FieldSet>): ProposalCardFilterTypes {
    const allowedStatuses = new Set(['accepted', 'closed']);

    const filteredFields = records.filter((record) => {
        const fields = record.fields as RfPFields;
        const status = fields.Status;
        return (
            fields.slug &&
            fields['RfP Title'] &&
            fields.Status &&
            fields.Purpose &&
            typeof status === 'string' &&
            allowedStatuses.has(status.toLowerCase())
        );
    });

    if (filteredFields.length === 0) {
        console.warn('No records passed the filter for Proposals');
    }

    const cards: ProposalCards[] = filteredFields.map((record) => {
        const fields = record.fields as RfPFields;
        const imageUrl =
            Array.isArray(fields.image) && fields.image.length > 0
                ? `${fields.image[0].url}`
                : '/homepage/placeholder_proposals.png';

        return {
            overline: fields['Relationship Management'],
            title: fields['RfP Title'],
            body: fields.Purpose,
            link: `/request-for-proposals/proposal-${fields.slug}`,
            image: imageUrl,
            status: fields.Status,
        };
    });

    const full: RfPFields[] = filteredFields.map((record) => record.fields as RfPFields);
    return {
        proposalCards: cards,
        fullData: full,
    };
}
