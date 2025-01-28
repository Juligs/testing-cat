import { getPageMetadata } from '@lib/utils';
import type { Metadata } from 'next';
import { TwinHero } from '@sections';
import { TwinLastSection, TwinSection2, TwinSection1 } from '@repo/shared/sections';

const METADATA_TITLE = 'TWIN';
const METADATA_DESCRIPTION = 'Seamless transfer of digital trade data across borders';

export const metadata: Metadata = getPageMetadata({
    title: METADATA_TITLE,
    description: METADATA_DESCRIPTION,
});

export default function Home() {
    return (
        <>
            <TwinHero id="hero" />
            <TwinSection1 id="section1" />
            <TwinSection2 id="section2" />
            <TwinLastSection id="last-section" />
        </>
    );
}
