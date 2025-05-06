import {
    AssetTokenization,
    Governance,
    SelfSponsorship,
    Tokenization1,
    TokenizationOfElectronicDocuments,
} from '@repo/icons';
import { TitleTextSize } from 'react-ui-kit';

export const REALIZE_TOKENIZATION_VERTICAL_TITLE_CONTENT = {
    title: 'From Tokenization to Utility',
    body: "Realize is a pioneering tokenization platform based in Abu Dhabi, bringing the Middle East's first tokenized T-Bills Fund to market. But it goes further – by integrating tokenized assets into curated DeFi applications, it creates new opportunities. Its approach enhances liquidity, expands asset utility and yield opportunities, ensures regulatory compliance, and delivers real value to investors.",
    size: TitleTextSize.Small,
};

export const REALIZE_TOKENIZATION_ICON_CONTENT = [
    {
        icon: <AssetTokenization />,
        title: 'New Yield Opportunities',
        body: 'Unlock new yield potentials through innovative tokenization strategies and DeFi solutions.',
    },
    {
        icon: <SelfSponsorship />,
        title: 'Enhanced Liquidity',
        body: 'Convert your real-world assets into digital tokens for faster, more efficient liquidity.',
    },
    {
        icon: <Governance />,
        title: 'Strictly Governed',
        body: 'Invest in the first tokenized T-BILLS Fund domiciled in ADGM, providing security and compliance.',
    },
    {
        icon: <TokenizationOfElectronicDocuments />,
        title: 'Institutional Custody Solution',
        body: 'Take advantage of industry-leading custody services to safeguard your wealth.',
    },
    {
        icon: <Tokenization1 />,
        title: 'Direct Tokenization',
        body: 'Benefit from transparent ownership, reduced complexity, no intermediaries, and lower costs.',
    },
];
