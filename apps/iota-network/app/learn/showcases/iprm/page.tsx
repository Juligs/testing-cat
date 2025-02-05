import { getPageMetadata } from '@lib/utils';
import type { Metadata } from 'next';
import { IPRMHero } from '@sections';
import {
    IPRMPartners,
    IPRMTransparency,
    IPRMQuotes,
    IPRMContactUs,
    IPRMMoreToExplore,
} from '@repo/shared/sections';
import {
    IPRM_METADATA_TITLE,
    IPRM_METADATA_DESCRIPTION_X,
    IPRM_KEYWORDS,
    IPRM_METADATA_DESCRIPTION,
    IPRM_IMAGE,
    IPRM_URL,
} from '@lib/constants';

export const metadata: Metadata = getPageMetadata({
    title: IPRM_METADATA_TITLE,
    description: IPRM_METADATA_DESCRIPTION,
    descriptionX: IPRM_METADATA_DESCRIPTION_X,
    keywords: IPRM_KEYWORDS,
    image: IPRM_IMAGE,
    url: IPRM_URL,
});

export default function Home() {
    return (
        <>
            <IPRMHero id="hero" />
            <IPRMPartners id="partners" />
            <IPRMTransparency id="transparency" />
            <IPRMQuotes id="quotes" />
            <IPRMContactUs id="contact-us" />
            <IPRMMoreToExplore id="explore" />
        </>
    );
}
