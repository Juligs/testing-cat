import { ComponentProps } from 'react';
import { ImageCard } from 'react-ui-kit';
import { FieldSet, Records } from 'airtable';

export type CardShowcase = Card & { category: string[]; link: string };
type Card = Omit<ComponentProps<typeof ImageCard>, 'elevated' | 'inverted' | 'size'>;

interface SanitizeInfraDataOptions {
    allowedCategories: string[];
    placeholderImageUrl?: string;
}

export async function sanitizeInfraData(
    data: Records<FieldSet>,
    options: SanitizeInfraDataOptions,
): Promise<CardShowcase[]> {
    const { allowedCategories, placeholderImageUrl = '/homepage/placeholder-image.svg' } = options;

    const sanitizedCards: CardShowcase[] = await Promise.all(
        data.map(async ({ fields }) => {
            const imageUrl =
                Array.isArray(fields.websiteImage) && fields.websiteImage.length > 0
                    ? `${fields.websiteImage[0].url}`
                    : placeholderImageUrl;

            const filteredCategories = Array.isArray(fields['Sub-Category'])
                ? fields['Sub-Category'].filter((category) =>
                      allowedCategories
                          .map((allowed) => allowed.toLowerCase())
                          .includes(category.toLowerCase()),
                  )
                : [];

            return {
                link: fields.Website as string,
                title: fields.Name as string,
                body:
                    typeof fields.websiteDescription === 'string'
                        ? fields.websiteDescription
                        : undefined,
                category: filteredCategories,
                image: imageUrl,
            };
        }),
    );

    return sanitizedCards;
}
