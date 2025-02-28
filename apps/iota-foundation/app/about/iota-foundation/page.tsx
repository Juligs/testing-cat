import { getPageMetadata } from '@lib/utils';
import {
    ABOUT_IOTA_FOUNDATION_METADATA_TITLE,
    ABOUT_IOTA_FOUNDATION_METADATA_DESCRIPTION_X,
    ABOUT_IOTA_FOUNDATION_KEYWORDS,
    ABOUT_IOTA_FOUNDATION_METADATA_DESCRIPTION,
    ABOUT_IOTA_FOUNDATION_IMAGE,
    ABOUT_IOTA_FOUNDATION_URL,
} from '@lib/constants';
import {
    IotaFoundationHero,
    IotaFoundationOverview,
    BuildingABoldVision,
    ExpandingApplications,
    DescentralizationAndEmpowerment,
    ThrivingEcosystem,
    IotaFoundationMoreToExplore,
    DrivingGlobalAdoption,
} from '@sections';

import type { Metadata } from 'next';

export const metadata: Metadata = getPageMetadata({
    title: ABOUT_IOTA_FOUNDATION_METADATA_TITLE,
    description: ABOUT_IOTA_FOUNDATION_METADATA_DESCRIPTION,
    descriptionX: ABOUT_IOTA_FOUNDATION_METADATA_DESCRIPTION_X,
    keywords: ABOUT_IOTA_FOUNDATION_KEYWORDS,
    image: ABOUT_IOTA_FOUNDATION_IMAGE,
    url: ABOUT_IOTA_FOUNDATION_URL,
    path: '/about/iota-foundation',
});

export default function Home() {
    return (
        <>
            <IotaFoundationHero id="hero" />
            <IotaFoundationOverview id="overview" />
            <BuildingABoldVision id="bold-vision" />
            <ExpandingApplications id="expanding-applications" />
            <DescentralizationAndEmpowerment id="decentralization" />
            <DrivingGlobalAdoption id="global-adoption" />
            <ThrivingEcosystem id="thriving-ecosystem" />
            <IotaFoundationMoreToExplore id="explore" />
        </>
    );
}
