const BASE_URL = 'https://iota.org';
const METADATA_SITE_NAME = 'IOTA Network';
const METADATA_IMAGE_FALLBACK = `${BASE_URL}/meta-image.png`;

interface PageMetadataProps {
    title?: string;
    description?: string;
    image?: string;
}
export function getPageMetadata({
    title,
    description,
    image = METADATA_IMAGE_FALLBACK,
}: PageMetadataProps) {
    const pageTitle = title ? `${METADATA_SITE_NAME} – ${title}` : METADATA_SITE_NAME;

    return {
        title: pageTitle,
        description,
        alternates: {
            canonical: '/',
        },
        keywords: [
            'IOTA',
            'EVM',
            'Smart Contracts',
            'NFTs',
            'IOTA Smart Contracts',
            'DLT',
            'dag',
            'distributed ledger',
            'blockchain',
        ],
        openGraph: {
            type: 'website',
            url: BASE_URL,
            title: pageTitle,
            siteName: METADATA_SITE_NAME,
            images: image,
        },
        twitter: {
            card: 'summary_large_image',
            creator: '@iota_',
            site: '@iota_',
            title: pageTitle,
            description,
            images: image,
        },
    };
}
