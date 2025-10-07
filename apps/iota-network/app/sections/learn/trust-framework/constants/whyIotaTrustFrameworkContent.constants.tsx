import {
    CircularEconomy,
    Flexibility,
    RegulatoryAndTechnicalCompliance,
    SeamlessIntegrationWithWeb3,
    SourceCode,
} from '@repo/icons';
import { TitleTextSize } from 'react-ui-kit';

export const WHY_IOTA_VERTICAL_TITLE_CONTENT = {
    title: 'Why IOTA?',
    subtitle: 'Scale without cost, technology without barriers',
    body: 'The IOTA Trust Framework gives enterprises and institutions an open, reliable alternative to proprietary or pay-per-use services. Built for real-world needs, it lets organizations focus on delivering value.',
    size: TitleTextSize.Small,
};

export const WHY_IOTA_ICON_CONTENT = [
    {
        icon: <SourceCode />,
        title: 'Open Source',
        body: 'Built with transparency, reviewed by peers, and improved by the community',
    },
    {
        icon: <CircularEconomy />,
        title: 'Free',
        body: 'No licensing or usage fees: scale without rising infrastructure costs',
    },
    {
        icon: <Flexibility />,
        title: 'Neutral',
        body: 'Operated by a non-profit foundation, free from vendor lock-in or bias',
    },
    {
        icon: <RegulatoryAndTechnicalCompliance />,
        title: 'Compliant',
        body: 'Aligned with identity, data, and financial regulations',
    },
    {
        icon: <SeamlessIntegrationWithWeb3 />,
        title: 'Public Infrastructure',
        body: 'Anchored to the decentralized IOTA Mainnet for resilience and verifiability',
    },
];
