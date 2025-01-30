import {
    AnonymizedDataCollectionAndRewardDistribution,
    DecentralizedDataStorageAndSeamlessTransactions,
    DiverseUseCases,
    IntegrationWithLocalRetailers,
    MultipleTokensManagedSimultaneously,
    TargetedSpendingDefinedByIssuingCompanyOrMunicipality,
} from '@repo/icons';
import { TitleTextSize } from 'react-ui-kit';

export const MULTIKNIP_DIGITAL_WALLET_VERTICAL_TITLE_CONTENT = {
    title: 'A Digital Wallet to Incentivize Change',
    body: 'Challenges over privacy issues and reward distribution hamper the incentivizing of social initiatives. IoT Nederland’s MultiKnip uses IOTA to store and distribute digital tokens that promote social inclusion, healthcare, tourism, sustainability, and economic growth, boosting local economies through fiat or service-based rewards',
    size: TitleTextSize.Small,
};

export const MULTIKNIP_DIGITAL_WALLET_ICON_CONTENT = [
    {
        icon: <DiverseUseCases />,
        title: 'Diverse Use Cases',
        body: 'aiming to foster social inclusion, health, tourism, sustainability, economic growth and more.',
    },
    {
        icon: <TargetedSpendingDefinedByIssuingCompanyOrMunicipality />,
        title: 'Targeted Spending Defined by Issuing Company or Municipality',
        body: 'in terms of eligibility, quantity, authorized vendors, and the nature of goods or services offered.',
    },
    {
        icon: <MultipleTokensManagedSimultaneously />,
        title: 'Multiple Tokens Managed Simultaneously',
        body: 'in a single wallet interface, enabling efficient management of various tokens for different purposes.',
    },
    {
        icon: <DecentralizedDataStorageAndSeamlessTransactions />,
        title: 'Decentralized Data Storage and Seamless Transactions',
        body: 'via the IOTA Tangle, ensuring both privacy and efficiency.',
    },
    {
        icon: <AnonymizedDataCollectionAndRewardDistribution />,
        title: 'Anonymized Data Collection and Reward Distribution',
        body: 'through QR code activation.',
    },
    {
        icon: <IntegrationWithLocalRetailers />,
        title: 'Integration with Local Retailers',
        body: 'for redeeming rewards and compensation in fiat money.',
    },
];
