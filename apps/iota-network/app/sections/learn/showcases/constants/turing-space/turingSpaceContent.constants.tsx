import { BASE_URL } from '@lib/constants';
import { PageMetadataProps } from '@lib/utils';
import {
    BuiltWithPartners,
    EnhancedSecurity,
    IotaDnsResolver,
    SmartContract,
    Tokenization,
    W3ConformingVerifiableCredentials,
} from '@repo/icons';
import {
    ExploreMoreProps,
    FrameShowcaseData,
    ProjectLinksProps,
    ShowcasePage,
    TestimonialData,
} from '../../types';
import { ShowcaseCategory } from '../../showcasesProjects.enums';

export const PROJECTS_LINKS_TURING_SPACE: ProjectLinksProps = {
    website: 'https://turingcerts.com/',
    contact: 'mailto:info@iota.org',
};

export const EXPLORE_MORE_SHOWCASES_TURING_SPACE: ExploreMoreProps = {
    ctaExploreCard: [
        {
            image: '/learn/showcases/explore-more/impierce.png',
            title: 'Impierce',
            subtitle: 'Open-source identity for a digital society',
            link: '/learn/showcases/impierce',
        },
        {
            image: '/learn/showcases/explore-more/twin.png',
            title: 'Twin',
            subtitle: 'Seamless transfer of digital trade data across borders',
            link: '/learn/showcases/twin',
        },
    ],
};

export const FRAME_SHOW_CASE_DATA_TURING_SPACE: FrameShowcaseData = {
    links: [
        { link: '/learn/showcases', text: 'Showcases' },
        { text: 'Turing Space', highlighted: true },
    ],
    verticalTitle: {
        title: 'Turing Space',
        subtitle: 'Fraud-resistant credentials for global use',
    },
    category: [{ label: 'Digital Identity' }],
    heroImage: '/learn/showcases/showcases-hero/turing_space_hero.png',
    description: {
        title: 'Your Credentials, Borderless and Secure',
        body: 'Turing Space enables secure, cross-border verification of diplomas, medical certificates, and more with its Turing Certs platform. Built on IOTA, it delivers fraud-resistant credentials and real-time verification for a truly global trust layer.',
    },
    highlights: [
        {
            icon: <W3ConformingVerifiableCredentials />,
            title: 'Fraud-Resistant Credentials',
            body: 'Immutable, tamper-proof certificates anchored on IOTA.',
        },
        {
            icon: <IotaDnsResolver />,
            title: 'Instant Verification',
            body: 'Credentials can be checked in seconds across borders and industries.',
        },
        {
            icon: <EnhancedSecurity />,
            title: 'Lower Costs',
            body: 'Digitized workflows cut verification costs by up to 50%.',
        },
        {
            icon: <SmartContract />,
            title: 'Privacy First',
            body: 'Data is shared selectively, keeping issuers private during verification.',
        },
        {
            icon: <Tokenization />,
            title: 'Global Adoption',
            body: 'Already used with WHO and in Taiwan for millions of corporate IDs.',
        },
        {
            icon: <BuiltWithPartners />,
            title: 'Standards-Based',
            body: 'Built on W3C and GDPR principles, future-proof for evolving regulations.',
        },
    ],
};

export const TESTIMONIAL_TURING_SPACE: TestimonialData = {
    name: 'Henry Hang',
    supportingText: 'CTO, Turing Space',
    content:
        "IOTA's low-cost transactions eliminate barriers to adoption, allowing us to scale credential issuance affordably for large-scale projects.",
    image: '/learn/showcases/turing_space_quote.png',
};

export const SHOWCASE_TURING_SPACE_METADATA: PageMetadataProps = {
    title: 'Turing Space - Fraud-resistant credentials for global use | IOTA Technology Showcase',
    description:
        'Turing Space uses IOTA to issue fraud-resistant, verifiable credentials like diplomas and medical certificates, enabling secure, cross-border verification at low cost.',
    descriptionX:
        'From diplomas to medical records, Turing Space uses IOTA to issue secure, globally verifiable credentials—fast, fraud-resistant, and privacy-preserving.',
    image: '/metadata/meta_image_showcases_turing_space.png',
    keywords: [
        'IOTA',
        'Turing Space',
        'Turing Certs',
        'digital credentials',
        'certificate verification',
        'fraud-resistant certificates',
        'cross-border verification',
        'diploma verification',
        'medical certificates',
        'GDPR',
        'W3C standards',
        'decentralized identity',
        'global trust layer',
    ],
    url: `${BASE_URL}/learn/showcases/turing-space`,
};

export const SHOWCASE_TURING_SPACE: ShowcasePage = {
    category: ShowcaseCategory.RealWorldAdoption,
    card: {
        title: 'Turing Space',
        subtitle: 'Fraud-Resistant Credentials for Global Use',
        image: '/learn/showcases/explore-more/turing_space.png',
        category: ['Digital Identity'],
    },
    metadata: SHOWCASE_TURING_SPACE_METADATA,
    projectLinks: PROJECTS_LINKS_TURING_SPACE,
    exploreMore: EXPLORE_MORE_SHOWCASES_TURING_SPACE,
    frame: FRAME_SHOW_CASE_DATA_TURING_SPACE,
    testimonial: TESTIMONIAL_TURING_SPACE,
};
