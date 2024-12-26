import { FieldSet, Records } from 'airtable';
import { ComponentProps } from 'react';
import { ImageCard } from 'react-ui-kit';

export type CardShowcase = Card & { category: string[]; link: string };
type Card = Omit<ComponentProps<typeof ImageCard>, 'elevated' | 'inverted' | 'size'>;

type InfraFields = {
    'Sub-Category': string[];
    Website: string;
    Name: string;
    websiteDescription?: string;
    websiteImage?: { url: string }[];
};

interface SanitizeOptions {
    allowedCategories: string[];
    placeholderImageUrl?: string;
}

export async function sanitizeInfraData(
    data: Records<FieldSet>,
    { allowedCategories, placeholderImageUrl = '/homepage/placeholder-image.svg' }: SanitizeOptions,
): Promise<CardShowcase[]> {
    const normalizedCategories = new Set(allowedCategories.map((c) => c.toLowerCase()));

    return data
        .filter((record) => {
            const categories = record.fields['Sub-Category'];
            return (
                Array.isArray(categories) &&
                categories.some((c) => normalizedCategories.has(c.toLowerCase()))
            );
        })
        .map(({ fields }) => {
            const record = fields as unknown as InfraFields;

            return {
                link: record.Website,
                title: record.Name,
                body: record.websiteDescription,
                category: record['Sub-Category'].filter((c) =>
                    normalizedCategories.has(c.toLowerCase()),
                ),
                image: record.websiteImage?.[0]?.url ?? placeholderImageUrl,
            };
        });
}
