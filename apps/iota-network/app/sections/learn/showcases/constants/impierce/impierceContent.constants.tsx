import { BASE_URL } from '@lib/constants';
import { PageMetadataProps } from '@lib/utils';
import {
    EnhnacedFeatures,
    IotaIdentity,
    IotaMainnet,
    IroncladSecurity,
    ProofOfStake,
    Tokenization,
} from '@repo/icons';
import {
    ExploreMoreProps,
    FrameShowcaseData,
    ProjectLinksProps,
    ShowcasePage,
    TestimonialData,
} from '../../types';
import { ShowcaseCategory } from '../../showcasesProjects.enums';

export const PROJECTS_LINKS_IMPIERCE: ProjectLinksProps = {
    website: 'https://www.impierce.com/',
    contact: 'mailto:info@iota.org',
};

export const EXPLORE_MORE_SHOWCASES_IMPIERCE: ExploreMoreProps = {
    ctaExploreCard: [
        {
            image: '/learn/showcases/explore-more/object_id.png',
            title: 'ObjectID',
            subtitle: 'Digital twins for authentic and transparent products',
            link: '/learn/showcases/objectID',
        },
        {
            image: '/learn/showcases/explore-more/turing_space.png',
            title: 'Turing Space',
            subtitle: 'Fraud-Resistant Credentials for Global Use',
            link: '/learn/showcases/turing-space',
        },
    ],
};

export const FRAME_SHOW_CASE_DATA_IMPIERCE: FrameShowcaseData = {
    links: [
        { link: '/learn/showcases', text: 'Showcases' },
        { text: 'Impierce', highlighted: true },
    ],
    verticalTitle: {
        title: 'Impierce',
        subtitle: 'Open-source identity for a digital society',
    },
    category: [{ label: 'Digital Identity' }],
    heroImage: '/learn/showcases/showcases-hero/impierce_hero.png',
    description: {
        title: 'Decentralized Identity Infrastructure for Trust and Privacy',
        body: 'Impierce Technologies develops open-source tools for digital identity, built on IOTA. Its wallet, agent, and trust layer empower individuals and organizations to issue, verify, and manage credentials in line with GDPR and eIDAS 2.0.',
    },
    highlights: [
        {
            icon: <Tokenization />,
            title: 'Complete Identity Stack',
            body: 'UniMe, UniCore, and UniTrust – three core tools cover the full credential lifecycle.',
        },
        {
            icon: <EnhnacedFeatures />,
            title: 'User-Owned Data',
            body: 'Individuals hold their own keys and control what data they share.',
        },
        {
            icon: <IotaMainnet />,
            title: 'Interoperable by Design',
            body: 'Built to align with W3C standards and Europe’s eIDAS 2.0 framework.',
        },
        {
            icon: <IroncladSecurity />,
            title: 'Trusted for Institutions',
            body: 'Organizations gain a verifiable trust layer for education, commerce, and beyond.',
        },
        {
            icon: <IotaIdentity />,
            title: 'Always-On Identities',
            body: 'On-ledger documents remain verifiable at any time across IOTA nodes.',
        },
        {
            icon: <ProofOfStake />,
            title: 'Future-Proof Infrastructure',
            body: 'Supports gasless transactions and revocation standards under development.',
        },
    ],
};

export const TESTIMONIAL_IMPIERCE: TestimonialData = {
    name: 'Jelle Millenaar',
    supportingText: 'CEO, Impierce Technologies',
    content:
        'We chose IOTA as our first public DLT because of its unique ability to host the current state of digital identities directly on the ledger.',
    image: '/learn/showcases/impierce_quote.png',
};

export const SHOWCASE_IMPIERCE_METADATA: PageMetadataProps = {
    title: 'Impierce - Open-source identity for a digital society | IOTA Technology Showcase',
    description:
        'Impierce Technologies builds open-source, decentralized identity infrastructure on IOTA, empowering individuals and institutions with secure, verifiable credentials in line with eIDAS 2.0 and GDPR.',
    descriptionX:
        'Decentralized identity meets privacy and trust. Impierce provides open-source tools on IOTA for secure, self-sovereign digital identity management.',
    image: '/metadata/meta_image_showcases_impierce.png',
    keywords: [
        'IOTA',
        'digital identity',
        'decentralized identity',
        'eIDAS 2.0',
        'GDPR',
        'self-sovereign identity',
        'SSI',
        'identity wallet',
        'open-source identity',
        'trust layer',
        'verifiable credentials',
        'on-ledger identity',
        'identity infrastructure',
    ],
    url: `${BASE_URL}/learn/showcases/impierce`,
};

export const SHOWCASE_IMPIERCE: ShowcasePage = {
    category: ShowcaseCategory.RealWorldAdoption,
    card: {
        title: 'Impierce',
        subtitle: 'Open-source identity for a digital society',
        image: '/learn/showcases/explore-more/impierce.png',
        category: ['Digital Identity'],
    },
    metadata: SHOWCASE_IMPIERCE_METADATA,
    projectLinks: PROJECTS_LINKS_IMPIERCE,
    exploreMore: EXPLORE_MORE_SHOWCASES_IMPIERCE,
    frame: FRAME_SHOW_CASE_DATA_IMPIERCE,
    testimonial: TESTIMONIAL_IMPIERCE,
};
