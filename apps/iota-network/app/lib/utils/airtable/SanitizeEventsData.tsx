import { sanitizeUrl } from '@repo/shared/utils';
import { FieldSet, Records } from 'airtable';
import { ComponentProps } from 'react';
import { ImageCard } from 'react-ui-kit';

export type Card = Omit<
    ComponentProps<typeof ImageCard>,
    'elevated' | 'inverted' | 'size' | 'subtitle'
>;

export type EventsCards = Card & {
    link: string;
    category: string;
    startDate?: string;
    endDate?: string;
    location?: string;
};

export type EventsFields = {
    websiteShown: boolean;
    'Event Title': string;
    Description: string;
    'Start Date': string;
    'End Date'?: string;
    Location: string;
    Image: string;
    Categories: string;
    URL: string;
    'Is External?'?: string;
};

export function sanitizeEventsData(records: Records<FieldSet>): EventsCards[] {
    const currentDate = new Date();

    const filteredFields = records.filter((record) => {
        const fields = record.fields as EventsFields;
        const startDate = new Date(fields['Start Date']);
        const endDate = fields['End Date'] ? new Date(fields['End Date']) : null;
        const isInProgress = startDate <= currentDate;
        const sanitizedUrl = sanitizeUrl(fields.URL);

        const hasRequiredFields =
            fields.websiteShown === true &&
            fields['Event Title'] &&
            fields['Start Date'] &&
            fields.Categories &&
            fields.Location &&
            fields.Description &&
            fields.Image &&
            sanitizedUrl;

        const dateCondition = endDate
            ? isInProgress
                ? endDate >= currentDate
                : startDate >= currentDate
            : startDate >= currentDate;

        const allConditionsMet = !!(hasRequiredFields && dateCondition);

        return allConditionsMet;
    });

    if (filteredFields.length === 0) {
        console.warn('No records passed the filter for Events');
    }

    return filteredFields.map((record) => {
        const fields = record.fields as EventsFields;

        const imageUrl =
            Array.isArray(fields.Image) && fields.Image.length > 0
                ? fields.Image[0].url
                : '/shared/placeholder_image.png';

        return {
            title: fields['Event Title'],
            body: fields.Description,
            link: sanitizeUrl(fields.URL),
            image: imageUrl,
            category: fields.Categories,
            startDate: fields['Start Date'],
            endDate: fields['End Date'],
            location: fields.Location,
        };
    });
}
