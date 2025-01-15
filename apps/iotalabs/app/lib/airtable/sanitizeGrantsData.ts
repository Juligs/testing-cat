import { ComponentProps } from 'react';
import { ImageCard } from 'react-ui-kit';
import { FieldSet, Records } from 'airtable';
import { sanitizeXData } from '@repo/shared/utils';

export type GrantsCardData = Card & {
    link: string;
    websiteTwitter?: string;
    websitePosition?: number;
    subtitle?: string;
};
type Card = Omit<
    ComponentProps<typeof ImageCard>,
    'inverted' | 'size' | 'subtitle' | 'isHoverable'
>;

export async function sanitizeGrantsData(data: Records<FieldSet>): Promise<GrantsCardData[]> {
    const dataGrantSliderCards: GrantsCardData[] = data.map(({ fields }) => {
        const urlX = sanitizeXData(fields.websiteTwitter as string);
        const imageUrl =
            Array.isArray(fields.websiteCardBackground) && fields.websiteCardBackground.length > 0
                ? `${fields.websiteCardBackground[0].url}`
                : '/homepage/placeholder-image.svg';
        return {
            title: fields['Grant Name'] as string,
            websiteTwitter: urlX.url,
            body:
                typeof fields.websiteDescription === 'string'
                    ? fields.websiteDescription
                    : undefined,
            image: imageUrl ?? '/homepage/placeholder-image.svg',
            link: fields.websiteLink as string,
            websitePosition: fields.websiteFeaturedPosition as number,
        };
    });
    return dataGrantSliderCards;
}
