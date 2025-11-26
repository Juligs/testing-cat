import { BASE_URL } from '@lib/constants';
import { PageMetadataProps } from '@lib/utils';
import {
    DecentralizedDigitalIdentities,
    GasStation,
    IotaDnsResolver,
    IotaExplorer,
    IotaMainnet,
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

export const PROJECTS_LINKS_OBJECT_ID: ProjectLinksProps = {
    website: 'https://objectid.io/',
    contact: 'mailto:info@iota.org',
};

export const EXPLORE_MORE_SHOWCASES_OBJECT_ID: ExploreMoreProps = {
    ctaExploreCard: [
        {
            image: '/learn/showcases/explore-more/impierce.png',
            title: 'Impierce',
            subtitle: 'Open-source identity for a digital society',
            link: '/learn/showcases/impierce',
        },
        {
            image: '/learn/showcases/explore-more/orobo.png',
            title: 'Orobo',
            subtitle: 'Digital passports for regulation-ready products',
            link: '/learn/showcases/orobo',
        },
    ],
};

export const FRAME_SHOW_CASE_DATA_OBJECT_ID: FrameShowcaseData = {
    links: [
        { link: '/learn/showcases', text: 'Showcases' },
        { text: 'ObjectID', highlighted: true },
    ],
    verticalTitle: {
        title: 'ObjectID',
        subtitle: 'Digital twins for authentic and transparent products',
    },
    category: [{ label: 'Product Lifecycle' }, { label: 'Digital Identity' }],
    heroImage: '/learn/showcases/showcases-hero/objectid_hero.png',
    description: {
        title: 'Secure Every Product, Prove Every Step',
        body: 'ObjectID by SDV Consulting creates tamper-proof digital identities for physical goods. With anti-counterfeit protection, traceability, and lifecycle tracking on IOTA, every product – from luxury goods to industrial parts – gains a unique, trusted presence in the digital world, without central control.',
    },
    highlights: [
        {
            icon: <DecentralizedDigitalIdentities />,
            title: 'Unique Digital Twins',
            body: 'Each product receives a non-transferable ObjectID on IOTA, tied to a tamper-proof QR code for instant authentication.',
        },
        {
            icon: <IotaMainnet />,
            title: 'End-to-End Traceability',
            body: 'Lifecycle events like creation, transfers, and scans are immutably recorded on IOTA.',
        },
        {
            icon: <IotaDnsResolver />,
            title: 'Anti-Counterfeit Protection',
            body: 'Duplicate detection, geolocation, and domain-linked brand identities safeguard against forgery and spoofing.',
        },
        {
            icon: <IotaExplorer />,
            title: 'Ledger-Based Verification',
            body: 'Checks happen directly on the ledger or via IOTA Explorer, removing dependence on central servers.',
        },
        {
            icon: <GasStation />,
            title: 'User-Friendly Access',
            body: 'IOTA Gas Station covers transaction costs, allowing verification without the need for wallets or tokens.',
        },
        {
            icon: <W3ConformingVerifiableCredentials />,
            title: 'Future-Proof and Interoperable',
            body: 'Built on open standards like W3C DID, ensuring records remain verifiable and audit-ready.',
        },
    ],
};

export const TESTIMONIAL_OBJECT_ID: TestimonialData = {
    name: 'Stefano Della Valle',
    supportingText: 'CEO, SDV Consulting',
    content:
        'We chose IOTA after extensive technical exploration because it aligns with our vision: real-world adoption is what truly matters.',
    image: '/learn/showcases/objectID_quote.png',
};

export const SHOWCASE_OBJECT_ID_METADATA: PageMetadataProps = {
    title: 'ObjectID - Digital twins for authentic and transparent products | IOTA Technology Showcase',
    description:
        'ObjectID by SDV Consulting uses IOTA to create tamper-proof digital twins for physical products, ensuring authenticity, traceability, and anti-counterfeit protection without central servers.',
    descriptionX:
        'From luxury goods to industrial parts, ObjectID gives every product a secure, verifiable digital twin on IOTA—traceable, authentic, and fraud-resistant.',
    image: '/metadata/meta_image_showcases_object_id.png',
    keywords: [
        'IOTA',
        'ObjectID',
        'digital twin',
        'product authentication',
        'anti-counterfeit',
        'traceability',
        'SDV Consulting',
        'W3C DID',
        'QR code verification',
        'ledger-based verification',
        'physical product identity',
        'supply chain transparency',
        'decentralized product tracking',
    ],
    url: `${BASE_URL}/learn/showcases/objectID`,
};

export const SHOWCASE_OBJECT_ID: ShowcasePage = {
    category: ShowcaseCategory.RealWorldAdoption,
    card: {
        title: 'ObjectID',
        subtitle: 'Digital twins for authentic and transparent products',
        image: '/learn/showcases/explore-more/object_id.png',
        category: ['Digital Identity', 'Product Lifecycle'],
    },
    metadata: SHOWCASE_OBJECT_ID_METADATA,
    projectLinks: PROJECTS_LINKS_OBJECT_ID,
    exploreMore: EXPLORE_MORE_SHOWCASES_OBJECT_ID,
    frame: FRAME_SHOW_CASE_DATA_OBJECT_ID,
    testimonial: TESTIMONIAL_OBJECT_ID,
};
