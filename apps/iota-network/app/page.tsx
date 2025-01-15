import { getPageMetadata } from '@lib/utils';
import type { Metadata } from 'next';
import { Section2 } from '@sections';

const METADATA_TITLE = 'We Bring the Real World to Web3';
const METADATA_DESCRIPTION =
    'IOTA builds public blockchain infrastructure to integrate Web3 with the real world.';

export const metadata: Metadata = getPageMetadata({
    title: METADATA_TITLE,
    description: METADATA_DESCRIPTION,
});

export default function Home() {
    return <Section2 id="section-2" />;
}
