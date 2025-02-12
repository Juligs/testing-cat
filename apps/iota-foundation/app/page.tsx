import { getPageMetadata } from '@lib/utils';
import {
    HOMEPAGE_METADATA_TITLE,
    HOMEPAGE_METADATA_DESCRIPTION_X,
    HOMEPAGE_KEYWORDS,
    HOMEPAGE_METADATA_DESCRIPTION,
    HOMEPAGE_IMAGE,
    HOMEPAGE_URL,
} from '@lib/constants';
import type { Metadata } from 'next';

export const metadata: Metadata = getPageMetadata({
    title: HOMEPAGE_METADATA_TITLE,
    description: HOMEPAGE_METADATA_DESCRIPTION,
    descriptionX: HOMEPAGE_METADATA_DESCRIPTION_X,
    keywords: HOMEPAGE_KEYWORDS,
    image: HOMEPAGE_IMAGE,
    url: HOMEPAGE_URL,
    path: '/',
});

export default function Home() {
    return <div className="bg-network-primary-60 h-screen"></div>;
}
