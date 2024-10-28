import { ComponentProps } from 'react';
import { ImageCard } from 'react-ui-kit';
import Airtable, { FieldSet, Records } from 'airtable';
import { AIRTABLE_ENDPOINT_URL } from '@lib/constants';

const AIRTABLE_BASE_ID = 'appQqzg74YoTqK3Ht';
const INFRA_AIRTABLE_BASE_NAME = 'Accounts';
const INFRA_AIRTABLE_VIEW_NAME = 'iotalabs infra';

export type CardShowcase = Card & { category: string[]; link: string };
type Card = Omit<ComponentProps<typeof ImageCard>, 'elevated' | 'inverted' | 'size'>;

export async function fetchDataInfraSlider(): Promise<CardShowcase[] | undefined> {
    try {
        Airtable.configure({
            endpointUrl: AIRTABLE_ENDPOINT_URL,
            apiKey: process.env.IOTALABS_AIRTABLE_KEY,
        });
        const airtableBase = Airtable.base(AIRTABLE_BASE_ID);
        const infraViewPosts = await airtableBase(INFRA_AIRTABLE_BASE_NAME)
            .select({
                view: INFRA_AIRTABLE_VIEW_NAME,
            })
            .all();

        if (infraViewPosts !== undefined && Array.isArray(infraViewPosts)) {
            return sanitizeData(infraViewPosts);
        }
    } catch {
        console.error('Error fetching data from Airtable');
    }
}

function sanitizeData(data: Records<FieldSet>): CardShowcase[] {
    const dataInfraSliderCards: CardShowcase[] = data.map(({ fields }) => {
        return {
            link: fields.Website as string,
            title: fields.Name as string,
            body: typeof fields.Description === 'string' ? fields.Description : undefined,
            category: Array.isArray(fields['Sub-Category']) ? fields['Sub-Category'] : [],
            image:
                Array.isArray(fields.websiteImage) && fields.websiteImage.length > 0
                    ? fields.websiteImage[0].url
                    : '',
        };
    });
    return dataInfraSliderCards;
}
