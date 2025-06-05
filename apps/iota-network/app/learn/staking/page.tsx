import { getPageMetadata } from '@lib/utils';
import type { Metadata } from 'next';
import {
    HeroStaking,
    StakingStats,
    BoostYourRewards,
    EploreValidators,
    Blog,
    IotaWallet,
    StartStaking,
    StakingMoreToExplore,
    FAQs,
    LiquidStakingIcons,
} from '@sections';

import {
    STAKING_METADATA_TITLE,
    STAKING_METADATA_DESCRIPTION_X,
    STAKING_KEYWORDS,
    STAKING_METADATA_DESCRIPTION,
    STAKING_IMAGE,
    STAKING_URL,
} from '@lib/constants';
import { ContactUs } from '@repo/shared/sections';
export const metadata: Metadata = getPageMetadata({
    title: STAKING_METADATA_TITLE,
    description: STAKING_METADATA_DESCRIPTION,
    descriptionX: STAKING_METADATA_DESCRIPTION_X,
    keywords: STAKING_KEYWORDS,
    image: STAKING_IMAGE,
    url: STAKING_URL,
    path: '/learn/staking',
});

export default function Home() {
    return (
        <>
            <HeroStaking id="hero" navbarColorScheme="inverted" />
            <StakingStats id="staking-stats" />
            <BoostYourRewards id="boost-your-rewards" />
            <EploreValidators id="explore-validators" />
            <IotaWallet id="iota-wallet" />
            <LiquidStakingIcons id="liquid-staking" />
            <Blog id="blog" />
            <StartStaking id="start-staking" />
            <FAQs id="faqs" />
            <StakingMoreToExplore id="more-to-explore" />
            <ContactUs id="contact" />
        </>
    );
}
