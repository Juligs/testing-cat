import { getPageMetadata } from '@lib/utils';
import type { Metadata } from 'next';
import { LearnPageHero, LearnPageSection1, LearnPageSection2 } from '@sections';

const METADATA_TITLE = 'Learn';
const METADATA_DESCRIPTION = 'We Build Cutting-Edge Technology';

export const metadata: Metadata = getPageMetadata({
    title: METADATA_TITLE,
    description: METADATA_DESCRIPTION,
});

export default function Home() {
    return (
        <>
            <LearnPageHero id="hero" theme="inverted" />
            <LearnPageSection1 id="section-1" />
            <LearnPageSection2 id="section-2" />
        </>
    );
}
