import { BASE_URL } from '@lib/constants';

const METADATA_SITE_NAME = 'IOTA Foundation';
const METADATA_IMAGE_FALLBACK = `${BASE_URL}/metadata/meta_image_home.png`;
const KEYWORDS_FALLBACK = [
    'IOTA Foundation',
    'DLT',
    'distributed ledger technology',
    'blockchain research',
    'non-profit organization',
    'IOTA mission',
    'IOTA partners',
    'real-world adoption',
    'sustainability',
    'decentralized innovation',
    'Web3 research',
    'circular economy',
    'digital identity',
    'trade and supply chains',
    'real-world asset tokenization',
    'IOTA projects',
    'IOTA blog',
    'contact IOTA Foundation',
];
interface PageMetadataProps {
    url?: string;
    title?: string;
    description?: string;
    image?: string;
    path?: string;
    descriptionX?: string;
    keywords?: string[];
}
export function getPageMetadata({
    url,
    title,
    description,
    descriptionX,
    image,
    keywords,
    path = '',
}: PageMetadataProps) {
    const pageTitle = title ? `${METADATA_SITE_NAME} - ${title}` : METADATA_SITE_NAME;
    const pageKeywords = keywords || KEYWORDS_FALLBACK;
    const pageUrl = url || BASE_URL;
    const pageImage = image
        ? `${BASE_URL}${image.startsWith('/') ? image : `/${image}`}`
        : METADATA_IMAGE_FALLBACK;
    const canonicalUrl = `${BASE_URL}${path}`;

    return {
        title: pageTitle,
        description,
        alternates: {
            canonical: canonicalUrl,
        },
        pageKeywords,
        openGraph: {
            type: 'website',
            url: pageUrl,
            title: pageTitle,
            siteName: METADATA_SITE_NAME,
            images: pageImage,
        },
        twitter: {
            card: 'summary_large_image',
            creator: '@iota',
            site: '@iota',
            title: pageTitle,
            descriptionX,
            image: pageImage,
        },
    };
}
