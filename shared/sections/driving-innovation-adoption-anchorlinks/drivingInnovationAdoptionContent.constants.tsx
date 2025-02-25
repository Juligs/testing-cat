import {
    AssetTokenization,
    CircularEconomy,
    DecentralizedFinance,
    IotaIdentity,
    TradeSupplyChain,
} from '@repo/icons';
import { scrollToSection } from '../../utils';

export const DRIVING_INNOVATION_ADOPTION_ANCHORLINKS = [
    {
        text: 'Digital identity',
        onClick: () => scrollToSection('#digital-identity'),
        leadingIcon: <IotaIdentity />,
    },
    {
        text: 'Trade & Supply Chains',
        onClick: () => scrollToSection('#trade-and-supply-chains'),
        leadingIcon: <TradeSupplyChain />,
    },
    {
        text: 'Circular Economy',
        onClick: () => scrollToSection('#circular-economy'),
        leadingIcon: <CircularEconomy />,
    },
    {
        text: 'Decentralized Finance',
        onClick: () => scrollToSection('#decentralized-finance'),
        leadingIcon: <DecentralizedFinance />,
    },
    {
        text: 'Asset Tokenization',
        onClick: () => scrollToSection('#real-world-asset-tokenization'),
        leadingIcon: <AssetTokenization />,
    },
];
