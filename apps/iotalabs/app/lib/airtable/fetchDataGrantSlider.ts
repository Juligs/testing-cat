import { ComponentProps } from 'react';
import { ImageCard } from 'react-ui-kit';
import Airtable, { FieldSet, Records } from 'airtable';
import { AIRTABLE_ENDPOINT_URL } from '@lib/constants';

const AIRTABLE_BASE_ID = 'appQqzg74YoTqK3Ht';
const INFRA_AIRTABLE_BASE_NAME = 'Applications';
const INFRA_AIRTABLE_VIEW_NAME = 'iotalabs applications';

export type GrantsCardData = Card & {
    link: string;
    websiteTwitter?: string;
    websitePosition?: number;
};
type Card = Omit<ComponentProps<typeof ImageCard>, 'inverted' | 'size'>;

export async function fetchDataGrantsSlider(): Promise<GrantsCardData[]> {
    try {
        Airtable.configure({
            endpointUrl: AIRTABLE_ENDPOINT_URL,
            apiKey: process.env.IOTALABS_AIRTABLE_KEY,
        });
        const airtableBase = Airtable.base(AIRTABLE_BASE_ID);
        const grantViewPosts = (
            await airtableBase(INFRA_AIRTABLE_BASE_NAME)
                .select({
                    view: INFRA_AIRTABLE_VIEW_NAME,
                    fields: [
                        'Grant Name',
                        'websiteFeaturedPosition',
                        'websiteDescription',
                        'websiteLink',
                        'websiteTwitter',
                        'websiteCardBackground',
                    ],
                })
                .all()
        ).filter((record) => record.fields['Grant Name'] && record.fields['websiteLink']);
        if (!grantViewPosts) {
            throw new Error('Error fetching from Airtable');
        }
        if (grantViewPosts !== undefined && Array.isArray(grantViewPosts)) {
            return sanitizeData(grantViewPosts);
        }
    } catch {
        console.error('Error fetching data from Airtable');
    }
    return [];
}

function extractTwitterUsername(url?: string): string {
    const regex = /^https:\/\/(?:x\.com|twitter\.com)\/([a-zA-Z0-9_]{1,15})$/;
    const match = (url || '').match(regex);
    return match ? '@' + (match[1] ?? 'X account') : 'X account';
}

function sanitizeData(data: Records<FieldSet>): GrantsCardData[] {
    const dataGrantSliderCards: GrantsCardData[] = data.map(({ fields }) => {
        return {
            title: fields['Grant Name'] as string,
            subtitle: extractTwitterUsername(fields.websiteTwitter as string),
            websiteTwitter: fields.websiteTwitter as string,
            body:
                typeof fields.websiteDescription === 'string'
                    ? fields.websiteDescription
                    : undefined,
            image:
                Array.isArray(fields.websiteCardBackground) &&
                fields.websiteCardBackground.length > 0
                    ? fields.websiteCardBackground[0].url
                    : '/homepage/placeholder-image.svg',
            link: fields.websiteLink as string,
            websitePosition: fields.websiteFeaturedPosition as number,
        };
    });
    return dataGrantSliderCards;
}
