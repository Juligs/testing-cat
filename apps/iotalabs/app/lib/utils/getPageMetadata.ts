import { METADATA_IMAGE_FALLBACK, METADATA_SITE_NAME, METADATA_WEBSITE_URL } from '../constants';

export function getPageMetadata({
    title,
    description,
    image = METADATA_IMAGE_FALLBACK,
}: {
    title: string;
    description: string;
    image?: string;
}) {
    const pageTitle = `${title} | ${METADATA_SITE_NAME}`;

    return {
        title: pageTitle,
        description,
        alternates: {
            canonical: METADATA_WEBSITE_URL,
        },
        openGraph: {
            type: 'website',
            url: METADATA_WEBSITE_URL,
            title: pageTitle,
            description,
            siteName: METADATA_SITE_NAME,
            images: [
                {
                    url: image,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            creator: '@iota',
            site: '@iota',
            title: pageTitle,
            description,
            images: image,
        },
    };
}
