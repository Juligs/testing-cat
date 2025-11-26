import { BASE_URL } from '@lib/constants';
import { PageMetadataProps } from '@lib/utils';
import {
    BuiltWithPartners,
    ComplianceWithUpcomingEuRegulations,
    OptionToRevealVerifiedInformation,
    PrivacyPreservingOnboarding,
    SeamlessIntegrationWithWeb3,
    Tokenization,
} from '@repo/icons';
import { ExploreMoreProps, FrameShowcaseData, ProjectLinksProps, ShowcasePage } from '../../types';
import { ShowcaseCategory } from '../../showcasesProjects.enums';

export const PROJECTS_LINKS_KYC: ProjectLinksProps = {
    website: 'https://walt.id/',
    blog: 'https://blog.iota.org/iota-web3-id-solution-sandbox/',
    contact: 'mailto:partners@iota.org',
    download: 'https://files.iota.org/comms/Tokenized_KYC_IOTA_Showcase_Presentation.pdf',
};

export const EXPLORE_MORE_SHOWCASES_KYC: ExploreMoreProps = {
    ctaExploreCard: [
        {
            image: '/learn/showcases/explore-more/pcp.png',
            title: 'European Blockchain PCP',
            subtitle: 'IOTA solutions for a pan-European blockchain',
            link: '/learn/showcases/pcp',
        },
        {
            image: '/learn/showcases/explore-more/dpp.png',
            title: 'Digital Product Passports',
            subtitle: 'Secure, transparent product lifecycle data for a circular economy',
            link: '/learn/showcases/dpp',
        },
    ],
};

export const FRAME_SHOW_CASE_DATA_KYC: FrameShowcaseData = {
    links: [
        { link: '/learn/showcases', text: 'Showcases' },
        { text: 'Tokenized KYC', highlighted: true },
    ],
    verticalTitle: {
        title: 'Tokenized KYC',
        subtitle: 'Privacy-preserving on-chain authentication',
    },
    category: [{ label: 'Digital Identity' }, { label: 'Decentralized Finance' }],
    heroImage: '/learn/showcases/showcases-hero/kyc_hero.png',
    description: {
        title: 'Bringing Safety and Security to DeFi',
        body: 'Our Know Your Customer solution allows users to authenticate without revealing personal information, reducing identity theft and fraud risks. It ensures regulatory compliance and improves user experience by integrating KYC into Web3 applications.',
    },
    highlights: [
        {
            icon: <PrivacyPreservingOnboarding />,
            title: 'Privacy-Preserving Onboarding',
            body: 'for Web3 users, enabling secure authentication without disclosing personal data.',
        },
        {
            icon: <Tokenization />,
            title: 'Tokenization',
            body: "ensures verified identification by storing a soulbound KYC token in the user's wallet, securely linking it to their authenticated address.",
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
    ],
};

export const SHOWCASE_KYC_METADATA: PageMetadataProps = {
    title: 'Tokenized KYC - Privacy-Preserving On-Chain Authentication | IOTA Technology Showcase',
    description:
        "Explore IOTA's Tokenized KYC solution for privacy-preserving on-chain authentication. Reduce fraud risks, ensure regulatory compliance, and enhance Web3 user experiences with secure and decentralized identity verification.",
    descriptionX:
        "Simplify and secure identity verification with IOTA's Tokenized KYC solution. Built for Web3, this privacy-preserving approach ensures compliance and user security.",
    image: '/metadata/meta_image_showcases_kyc.png',
    keywords: [
        'IOTA',
        'Tokenized KYC',
        'privacy-preserving KYC',
        'on-chain authentication',
        'Web3',
        'blockchain',
        'decentralized identity',
        'tokenization',
        'regulatory compliance',
        'AML',
        'soulbound tokens',
        'KYC verification',
        'identity protection',
        'decentralized platforms',
        'technology showcase',
        'HAVN',
        'walt.id',
        'IDnow',
        'Bloom',
    ],
    url: `${BASE_URL}/learn/showcases/kyc`,
};

export const SHOWCASE_KYC: ShowcasePage = {
    category: ShowcaseCategory.LighthouseProjects,
    metadata: SHOWCASE_KYC_METADATA,
    projectLinks: PROJECTS_LINKS_KYC,
    exploreMore: EXPLORE_MORE_SHOWCASES_KYC,
    frame: FRAME_SHOW_CASE_DATA_KYC,
};
