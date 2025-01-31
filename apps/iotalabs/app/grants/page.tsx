import { getPageMetadata } from '@lib/utils';
import type { Metadata } from 'next';
import {
    GrantsPageHero,
    IotaGrantsOverview,
    GrantsStats,
    SupportedInitiatives,
    HowToApply,
    Guidelines,
    TieredAssessmentFramework,
} from '@sections/grants';

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
            <GrantsPageHero id="hero" theme="inverted" />
            <IotaGrantsOverview id="overview" />
            <GrantsStats id="stats" />
            <SupportedInitiatives id="initiatives" />
            <HowToApply id="apply" />
            <Guidelines id="guidelines" theme="inverted" />
            <TieredAssessmentFramework id="tiered" />
        </>
    );
}
