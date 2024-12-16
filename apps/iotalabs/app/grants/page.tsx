import { getPageMetadata } from '@lib/utils';
import type { Metadata } from 'next';
import { GrantsPageHero, GrantsPageSection1, GrantsPageSection3 } from '@sections/grants';

const METADATA_TITLE = 'Grants';
const METADATA_DESCRIPTION =
    'Apply for a grant from iotalabs and turn your wildest dApp dreams into reality';

export const metadata: Metadata = getPageMetadata({
    title: METADATA_TITLE,
    description: METADATA_DESCRIPTION,
});

export default function Home() {
    return (
        <>
            <GrantsPageHero id="hero-inverted" />
            <GrantsPageSection1 id="section-1" />
            <GrantsPageSection3 id="section-3" />
        </>
    );
}
