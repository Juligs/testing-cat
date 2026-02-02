import { FieldSet, Records } from 'airtable';
import { ComponentProps } from 'react';
import { ImageCard } from 'react-ui-kit';

export type CardShowcase = Card & { category: string[]; link: string; websitePosition?: number };
type Card = Omit<ComponentProps<typeof ImageCard>, 'elevated' | 'inverted' | 'size'>;

type InfraFields = {
    'Sub-Category': string[];
    Website: string;
    Name: string;
    websiteDescription?: string;
    websiteImage?: { url: string }[];
    websitePosition?: number;
};

interface SanitizeOptions {
    allowedCategories?: string[];
    placeholderImageUrl?: string;
    requireWebsitePosition?: boolean;
}

export async function sanitizeEcosystemProjectsData(
    records: Records<FieldSet>,
    {
        allowedCategories,
        placeholderImageUrl = '/homepage/placeholder_image.png',
        requireWebsitePosition = false,
    }: SanitizeOptions,
): Promise<CardShowcase[]> {
    const normalizedCategories = allowedCategories
        ? new Set(allowedCategories.map((c) => c.toLowerCase()))
        : null;

    const filteredRecords = records.filter((record) => {
        const fields = record.fields as Partial<InfraFields>;

        const hasRequiredFields =
            fields.Name &&
            fields.Website &&
            Array.isArray(fields['Sub-Category']) &&
            fields['Sub-Category'].length > 0;

        const categoryCondition =
            !normalizedCategories ||
            fields['Sub-Category']!.some((c) => normalizedCategories.has(c.toLowerCase()));

        const websitePositionCondition =
            !requireWebsitePosition || fields.websitePosition !== undefined;

        return !!(hasRequiredFields && categoryCondition && websitePositionCondition);
    });

    if (filteredRecords.length === 0) {
        console.log('sanitizeEcosystemProjectsData No records passed the filter');
    }

    return filteredRecords.map(({ fields }) => {
        const record = fields as unknown as InfraFields;
        const categories = record['Sub-Category'];

        return {
            link: record.Website,
            title: record.Name,
            body: record.websiteDescription,
            category: normalizedCategories
                ? categories.filter((c) => normalizedCategories.has(c.toLowerCase()))
                : categories,
            image: record.websiteImage?.[0]?.url ?? placeholderImageUrl,
            ...(record.websitePosition !== undefined
                ? { websitePosition: record.websitePosition }
                : {}),
        };
    });
}
