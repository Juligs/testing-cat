const vercelUrl = process.env.VERCEL_URL || process.env.NEXT_PUBLIC_VERCEL_URL;
const BASE_URL = `https://${vercelUrl || 'iotalabs.io'}`;
const METADATA_SITE_NAME = 'iotalabs';
const METADATA_IMAGE_FALLBACK = `${BASE_URL}/meta_image.png`;

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
            creator: '@iotalabs_',
            site: '@iotalabs_',
            title: pageTitle,
            description,
            images: image,
        },
    };
}
