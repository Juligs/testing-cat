import { ComponentProps } from 'react';
import { ImageCard } from 'react-ui-kit';
import { FieldSet, Records } from 'airtable';

export type CardShowcase = Card & { category: string[]; link: string };
type Card = Omit<ComponentProps<typeof ImageCard>, 'elevated' | 'inverted' | 'size'>;

export async function sanitizeInfraData(data: Records<FieldSet>): Promise<CardShowcase[]> {
    const dataInfraSliderCards: CardShowcase[] = await Promise.all(
        data.map(async ({ fields }) => {
            const imageUrl =
                Array.isArray(fields.websiteImage) && fields.websiteImage.length > 0
                    ? `${fields.websiteImage[0].url}`
                    : '/homepage/placeholder-image.svg';
            return {
                link: fields.Website as string,
                title: fields.Name as string,
                body:
                    typeof fields.websiteDescription === 'string'
                        ? fields.websiteDescription
                        : undefined,
                category: Array.isArray(fields['Sub-Category'])
                    ? fields['Sub-Category'].map((category) =>
                          category.trim().replace(/\s+/g, ' ').toLowerCase(),
                      )
                    : [],
                image: imageUrl ?? '/homepage/placeholder-image.svg',
            };
        }),
    );
    return dataInfraSliderCards;
}
