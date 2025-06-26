import { getPageMetadata } from '@lib/utils';
import type { Metadata } from 'next';
import {
    HeroWallet,
    WalletOverview,
    IotaWalletPage,
    Dashboard,
    Extension,
    OtherWallets,
    WalletMoreToExplore,
} from '@sections';
import {
    WALLET_METADATA_TITLE,
    WALLET_METADATA_DESCRIPTION_X,
    WALLET_KEYWORDS,
    WALLET_METADATA_DESCRIPTION,
    WALLET_IMAGE,
    WALLET_URL,
} from '@lib/constants';
export const metadata: Metadata = getPageMetadata({
    title: WALLET_METADATA_TITLE,
    description: WALLET_METADATA_DESCRIPTION,
    descriptionX: WALLET_METADATA_DESCRIPTION_X,
    keywords: WALLET_KEYWORDS,
    image: WALLET_IMAGE,
    url: WALLET_URL,
    path: '/products/wallet',
});

export default function Home() {
    return (
        <>
            <HeroWallet id="hero" navbarColorScheme="inverted" />
            <WalletOverview id="overview" />
            <IotaWalletPage id="iota-wallet" />
            <Dashboard id="iota-wallet-dashboard" navbarColorScheme="inverted" />
            <Extension id="browser-extension-wallets" />
            <OtherWallets id="other-wallets" />
            <WalletMoreToExplore id="more to explore" />
        </>
    );
}
