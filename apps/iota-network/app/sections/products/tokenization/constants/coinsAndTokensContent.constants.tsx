import {
    AssetCreation,
    Burnability,
    InGameCurrency,
    LoyaltyTokens,
    Nfts,
    RegulatedCoin,
} from '@repo/icons';
export const COINS_AND_TOKENS_VERTICAL_TITLE_CONTENT = {
    title: 'Coins and Tokens',
    subtitle: 'Securely manage and trade ownership rights on the blockchain',
};

export const COINS_AND_TOKENS_ICON_CONTENT = [
    {
        icon: <AssetCreation />,
        title: 'Asset Creation',
        body: 'Easily split assets into fractions - each one keeps the same name, description, and details so everything stays consistent.',
        link: 'https://docs.iota.org/developer/standards/coin-manager',
    },
    {
        icon: <Nfts />,
        title: 'NFTs vs FTs',
        body: "Fractions come as either fungible or non-fungible tokens - built to stay in sync and together reflect the asset's total value.",
        link: 'https://docs.iota.org/developer/iota-101/nft/create-nft',
    },
    {
        icon: <Burnability />,
        title: 'Burnability',
        body: 'You can choose to let fractions of your asset be burned - removing them from circulation for good.',
        link: 'https://docs.iota.org/developer/standards/coin#minting-and-burning-coins',
    },
    {
        icon: <RegulatedCoin />,
        title: 'Regulated Coin',
        body: 'With the IOTA Coin standard, you gain advanced access control, including the power to create a deny list for your coin.',
        link: 'https://docs.iota.org/developer/iota-101/create-coin/regulated',
    },
    {
        icon: <InGameCurrency />,
        title: 'In-Game Currency',
        body: 'Leverages the Closed-Loop Token standard to create in-game currencies.',
        link: 'https://docs.iota.org/developer/iota-101/create-coin/in-game-token',
    },
    {
        icon: <LoyaltyTokens />,
        title: 'Loyalty Tokens',
        body: 'With the Closed-Loop Token standard, you can issue tokens designed for use in specific services, ensuring targeted utility.',
        link: 'https://docs.iota.org/developer/iota-101/create-coin/loyalty',
    },
];
