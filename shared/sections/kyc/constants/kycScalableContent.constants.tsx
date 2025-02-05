import {
    BuiltWithPartners,
    ComplianceWithUpcomingEuRegulations,
    OptionToRevealVerifiedInformation,
    PrivacyPreservingOnboarding,
    SeamlessIntegrationWithWeb3,
    Tokenization,
} from '@repo/icons';
import { TitleTextSize } from 'react-ui-kit';

export const KYC_SCALABLE_VERTICAL_TITLE_CONTENT = {
    title: 'Bringing Safety and Security to DeFi',
    body: 'Our KYC solution allows users to authenticate without revealing personal information, reducing identity theft and fraud risks. It ensures regulatory compliance and improves user experience by integrating KYC into Web3 applications for smoother interactions with decentralized platforms.',
    size: TitleTextSize.Small,
};

export const KYC_SCALABLE_ICON_CONTENT = [
    {
        icon: <PrivacyPreservingOnboarding />,
        title: 'Privacy-Preserving Onboarding',
        body: 'for Web3 users, enabling secure authentication without disclosing personal data.',
    },
    {
        icon: <Tokenization />,
        title: 'Tokenization',
        body: "ensures a verified identification process by storing a soulbound KYC token in the user's wallet, securely linking it to their authenticated address.",
    },
    {
        icon: <SeamlessIntegrationWithWeb3 />,
        title: 'Seamless Integration with Web3',
        body: 'applications, providing users with a smooth and efficient onboarding experience.',
    },
    {
        icon: <ComplianceWithUpcomingEuRegulations />,
        title: 'Compliance with Upcoming EU Regulations',
        body: 'regarding AML and KYC obligations for CASPs in crypto markets.',
    },
    {
        icon: <OptionToRevealVerifiedInformation />,
        title: 'Option to Reveal Verified Information',
        body: 'to authorized parties.',
    },
    {
        icon: <BuiltWithPartners />,
        title: 'Built with Partners',
        body: 'IDnow (for identification and verification), walt.id (for tokenization), Bloom Wallet (for KYC token storage), and HAVN (for user validation).',
    },
];
