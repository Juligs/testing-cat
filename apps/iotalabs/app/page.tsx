import type { Metadata } from 'next';

import {
    Hero,
    HomepageOverview,
    EngineBehind,
    Empowering,
    NewEra,
    GettingStarted,
    IOTAGrants,
    EVMToolkit,
    Infrastructure,
    BuildWith,
    News,
} from '@sections';
import { getPageMetadata } from '@lib/utils';
const METADATA_TITLE = 'Power Up Your Builder Journey';
const METADATA_DESCRIPTION =
    'iotalabs propels the IOTA ecosystem through grants, growth initiatives, builder support, and strategic partnerships. Join us in shaping the future of IOTA—one breakthrough at a time.';

export const metadata: Metadata = getPageMetadata({
    title: METADATA_TITLE,
    description: METADATA_DESCRIPTION,
});

export default function Home() {
    return (
        <>
            <Hero id="hero" navbarColorScheme="inverted" />
            <HomepageOverview id="overview" />
            <EngineBehind id="engine" />
            <Empowering id="empowering" navbarColorScheme="inverted" />
            <NewEra id="new-era" />
            <GettingStarted id="getting-started" />
            <IOTAGrants id="grants" />
            <EVMToolkit id="evm-toolkit" navbarColorScheme="inverted" />
            <Infrastructure id="infrastructure" />
            <BuildWith id="build-with" />
            <News id="news" />
        </>
    );
}
