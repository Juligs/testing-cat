import { BASE_URL } from '@lib/constants';

export interface PageMetadataProps {
    title?: string;
    description?: string;
    descriptionX?: string;
    path?: string;
    keywords?: string[];
}

export function getPageMetadata({
    title,
    description,
    descriptionX,
    path = '',
    keywords = [],
}: PageMetadataProps) {
    const canonicalUrl = `${BASE_URL}${path}`;

    return {
        title,
        description,
        keywords,
        alternates: {
            canonical: canonicalUrl,
        },
        openGraph: {
            type: 'website',
            url: canonicalUrl,
            title,
            description,
            siteName: 'TWIN',
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description: descriptionX ?? description,
        },
    };
}
