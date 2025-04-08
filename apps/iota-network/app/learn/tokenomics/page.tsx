import { getPageMetadata } from '@lib/utils';
import type { Metadata } from 'next';
import {
    HeroTokenomics,
    KeyPlayers,
    BalancedSystem,
    IotaEconomy,
    BoostYourReturns,
    KeyPlayersMoreToExplore,
    Exchanges,
    InstitutionalAcquisition,
    Wallets,
} from '@sections';
import { ContactUs } from '@repo/shared/sections';
import {
    TOKENOMICS_METADATA_TITLE,
    TOKENOMICS_METADATA_DESCRIPTION_X,
    TOKENOMICS_KEYWORDS,
    TOKENOMICS_METADATA_DESCRIPTION,
    TOKENOMICS_IMAGE,
    TOKENOMICS_URL,
} from '@lib/constants';
export const metadata: Metadata = getPageMetadata({
    title: TOKENOMICS_METADATA_TITLE,
    description: TOKENOMICS_METADATA_DESCRIPTION,
    descriptionX: TOKENOMICS_METADATA_DESCRIPTION_X,
    keywords: TOKENOMICS_KEYWORDS,
    image: TOKENOMICS_IMAGE,
    url: TOKENOMICS_URL,
    path: '/learn/tokenomics',
});

export default function Home() {
    return (
        <>
            <HeroTokenomics id="hero" navbarColorScheme="inverted" />
            <KeyPlayers id="key-players" navbarColorScheme="inverted" />
            <BalancedSystem id="balanced-system" />
            <IotaEconomy id="iota-economy" />
            <BoostYourReturns id="boost-your-returns" />
            <Exchanges id="exchanges" />
            <InstitutionalAcquisition id="institutional-acqusition" navbarColorScheme="inverted" />
            <Wallets id="wallets" />
            <KeyPlayersMoreToExplore id="more-to-explore" />
            <ContactUs id="contact" />
        </>
    );
}
