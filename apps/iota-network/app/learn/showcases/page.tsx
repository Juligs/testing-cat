import { getPageMetadata } from '@lib/utils';
import type { Metadata } from 'next';
import { ShowcasesPageHero } from '@sections';

const METADATA_TITLE = 'Showcases';
const METADATA_DESCRIPTION = 'We Build Cutting-Edge Technology';

export const metadata: Metadata = getPageMetadata({
    title: METADATA_TITLE,
    description: METADATA_DESCRIPTION,
});

export default function Home() {
    return (
        <>
            <ShowcasesPageHero id="hero" theme="inverted" />
        </>
    );
}
