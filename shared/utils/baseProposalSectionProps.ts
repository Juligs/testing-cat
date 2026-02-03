import { BaseSectionProps } from '../interfaces';
import { RfPFields } from './airtable';

export type BaseProposalSectionProps = BaseSectionProps & {
    proposal: RfPFields;
};
