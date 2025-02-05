import { getPageMetadata } from '@lib/utils';
import type { Metadata } from 'next';
import { TwinHero } from '@sections';
import {
    TwinMoreToExplore,
    TwinPaperless,
    TwinPartners,
    TwinContactUs,
} from '@repo/shared/sections';
import {
    TWIN_METADATA_TITLE,
    TWIN_METADATA_DESCRIPTION_X,
    TWIN_KEYWORDS,
    TWIN_METADATA_DESCRIPTION,
    TWIN_IMAGE,
    TWIN_URL,
} from '@lib/constants';

export const metadata: Metadata = getPageMetadata({
    title: TWIN_METADATA_TITLE,
    description: TWIN_METADATA_DESCRIPTION,
    descriptionX: TWIN_METADATA_DESCRIPTION_X,
    keywords: TWIN_KEYWORDS,
    image: TWIN_IMAGE,
    url: TWIN_URL,
    path: '/learn/showcases/twin',
});

export default function Home() {
    return (
        <>
            <TwinHero id="hero" />
            <TwinPartners id="partners" />
            <TwinPaperless id="paperless" />
            <TwinContactUs id="contact-us" />
            <TwinMoreToExplore id="explore" />
        </>
    );
}
