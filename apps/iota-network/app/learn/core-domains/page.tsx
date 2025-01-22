import { getPageMetadata } from '@lib/utils';
import type { Metadata } from 'next';
import { CorePageHero } from '@sections';

const METADATA_TITLE = 'Core Domains';
const METADATA_DESCRIPTION =
    'Explore our diverse focus areas leveraging DLT to address real business needs';

export const metadata: Metadata = getPageMetadata({
    title: METADATA_TITLE,
    description: METADATA_DESCRIPTION,
});

export default function Home() {
    return (
        <>
            <CorePageHero id="hero" theme="inverted" />
        </>
    );
}
