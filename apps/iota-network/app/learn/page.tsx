import { getPageMetadata } from '@lib/utils';
import type { Metadata } from 'next';
import {
    LearnPageHero,
    LearnPageSection1,
    LearnPageSection2,
    LearnPageSection3,
    LearnPageSection4,
    LearnPageSection5,
    LearnPageSection6,
    LearnPageSection7,
    LearnPageSection10,
} from '@sections';

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
            <LearnPageSection3 id="section-3" />
            <LearnPageSection4 id="section-4" />
            <LearnPageSection5 id="section-5" />
            <LearnPageSection6 id="section-6" />
            <LearnPageSection7 id="section-7" theme="inverted" />
            <LearnPageSection10 id="section-10" />
        </>
    );
}
