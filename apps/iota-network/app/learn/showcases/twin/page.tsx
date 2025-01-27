import { getPageMetadata } from '@lib/utils';
import type { Metadata } from 'next';
import { TwinPageHero, TwinPageSection1, TwinPageLastSection } from '@sections';
import { HowItWorks } from '@repo/shared/sections';

const METADATA_TITLE = 'TWIN';
const METADATA_DESCRIPTION = 'Seamless transfer of digital trade data across borders';

export const metadata: Metadata = getPageMetadata({
    title: METADATA_TITLE,
    description: METADATA_DESCRIPTION,
});

export default function Home() {
    return (
        <>
            <TwinPageHero id="hero" />
            <TwinPageSection1 id="section1" />
            <HowItWorks id="how-it-works" />
            <TwinPageLastSection id="last-section" />
        </>
    );
}
