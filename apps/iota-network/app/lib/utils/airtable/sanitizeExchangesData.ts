import { sanitizeUrl } from '@repo/shared/utils';
import { FieldSet, Records } from 'airtable';
import { ComponentProps } from 'react';
import { ImageCard } from 'react-ui-kit';

export type ImageCardProps = Omit<
    ComponentProps<typeof ImageCard>,
    'elevated' | 'inverted' | 'subtitle' | 'overline' | 'body'
>;

export type ExchangesCards = ImageCardProps & {
    link: string;
    title: string;
    image: string;
};

type ExchangesFields = {
    Name: string;
    Website: string;
    websiteImage: string;
    'L1 Status': string;
    'Perceived Project Quality'?: 'High' | 'Medium' | 'Low';
    'Coingecko Rating'?: number;
};
const QUALITY_ORDER: Record<string, number> = {
    High: 3,
    Medium: 2,
    Low: 1,
};

export function sanitizeExchangesData(records: Records<FieldSet>): ExchangesCards[] {
    const filteredFields = records.filter((record) => {
        const fields = record.fields as ExchangesFields;

        const hasRequiredFields =
            fields['L1 Status'] === 'Listed' &&
            fields.Website &&
            fields.Name &&
            fields.websiteImage;

        return hasRequiredFields;
    });

    if (filteredFields.length === 0) {
        console.warn('No records passed the filter for Exchanges');
    }

    const sortedExchanges = filteredFields.sort((a, b) => {
        const exchangeA = a.fields as ExchangesFields;
        const exchangeB = b.fields as ExchangesFields;

        const qualityScoreA = QUALITY_ORDER[exchangeA['Perceived Project Quality'] || ''] || 0;
        const qualityScoreB = QUALITY_ORDER[exchangeB['Perceived Project Quality'] || ''] || 0;
        if (qualityScoreA !== qualityScoreB) return qualityScoreB - qualityScoreA;

        const ratingScoreA = exchangeA['Coingecko Rating'] ?? -1;
        const ratingScoreB = exchangeB['Coingecko Rating'] ?? -1;
        if (ratingScoreA !== ratingScoreB) return ratingScoreB - ratingScoreA;

        return exchangeA.Name.localeCompare(exchangeB.Name);
    });

    return sortedExchanges.map((record) => {
        const fields = record.fields as ExchangesFields;

        const imageUrl =
            Array.isArray(fields.websiteImage) && fields.websiteImage.length > 0
                ? fields.websiteImage[0].url
                : '/shared/placeholder_image.png';

        return {
            title: fields.Name,
            link: sanitizeUrl(fields.Website),
            image: imageUrl,
        };
    });
}
