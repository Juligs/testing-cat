import {
    BlogPost,
    CohesiveDataManagement,
    InteroperabilityAndCustomizability,
    RegulatoryCompliance,
    SustainabilityScalabilityAndTransparency,
    Tokenization,
} from '@repo/icons';
import { PageMetadataProps } from '@lib/utils';
import { BASE_URL } from '@lib/constants';
import { ExploreMoreProps, FrameShowcaseData, ProjectLinksProps, ShowcasePage } from '../../types';
import { ShowcaseCategory } from '../../showcasesProjects.enums';

export const PROJECTS_LINKS_EBSI: ProjectLinksProps = {
    website: 'https://ec.europa.eu/digital-building-blocks/sites/spaces/EBSI/pages/447687044/Home',
    blog: 'https://blog.iota.org/european-blockchain-pcp-final/',
    contact: 'mailto:partnerships@iota.org',
    download: 'https://files.iota.org/comms/EBSI_IOTA_Showcase_Presentation.pdf',
};

export const EXPLORE_MORE_SHOWCASES_EBSI: ExploreMoreProps = {
    ctaExploreCard: [
        {
            image: '/learn/showcases/explore-more/kyc.png',
            title: 'Tokenized KYC',
            subtitle: 'Privacy-preserving on-chain authentication',
            link: '/learn/showcases/kyc',
        },
        {
            image: '/learn/showcases/explore-more/dpp.png',
            title: 'Digital Product Passports',
            subtitle: 'Secure, transparent product lifecycle data for a circular economy',
            link: '/learn/showcases/dpp',
        },
    ],
};

export const FRAME_SHOW_CASE_DATA_EBSI: FrameShowcaseData = {
    links: [
        { link: '/learn/showcases', text: 'Showcases' },
        { text: 'European Blockchain PCP', highlighted: true },
    ],
    verticalTitle: {
        title: 'European Blockchain PCP',
        subtitle: 'IOTA solutions for a pan-European blockchain',
    },
    category: [{ label: 'Digital Identity' }, { label: 'Product Lifecycle' }],
    heroImage: '/learn/showcases/showcases-hero/ebsi_hero.png',
    description: {
        title: 'Scalable solutions for Europe’s blockchain future',
        body: 'The IOTA Foundation has completed the European Blockchain PCP. Funded by the European Commission, it aims to design new DLT solutions for Europe. We’ve developed pre-commercial products and demonstrated scalability and sustainability.',
    },
    highlights: [
        {
            icon: <CohesiveDataManagement />,
            title: 'Cohesive Data Management',
            body: 'helping the transition from data silos to data spaces, ensuring decentralized governance without compromising trust.',
        },
        {
            icon: <InteroperabilityAndCustomizability />,
            title: 'Interoperability and Customizability',
            body: 'within IOTA networks plus integration with other platforms via industry-standard interfaces and connectors. Meanwhile, organizations can tailor our solution to their public or private needs.',
        },
        {
            icon: <SustainabilityScalabilityAndTransparency />,
            title: 'Sustainability, Scalability, and Transparency',
            body: 'enabled with high throughput and predictable consumption, while open-source code repositories guarantee accountability and verifiability.',
        },
        {
            icon: <BlogPost />,
            title: 'Prototypes',
            body: 'for Digital Product Passports and Intellectual Property Rights Management.',
        },
        {
            icon: <RegulatoryCompliance />,
            title: 'Regulatory Compliance',
            body: 'with W3C, GS1, and regulations like GDPR, prioritizing compliance while preserving data utility.',
        },
        {
            icon: <Tokenization />,
            title: 'Tokenization',
            body: "in DPP prototypes developed for the PCP to digitize assets, incentivize sustainable actions, and create a transparent digital narrative of a product's lifecycle through NFTs.",
        },
    ],
};

export const SHOWCASE_EBSI_METADATA: PageMetadataProps = {
    title: 'European Blockchain Pre-Commercial Procurement | IOTA Technology Showcase',
    description:
        "Explore IOTA's scalable solutions for Europe's blockchain future. Developed in collaboration with partners for the European Blockchain PCP, funded by the European Commission. Discover innovations in data management, sustainability, interoperability, and more.",
    descriptionX:
        "Discover IOTA's role in building a pan-European blockchain ecosystem. Innovative solutions for sustainability, scalability, and interoperability.",
    image: '/metadata/meta_image_showcases_ebsi.png',
    keywords: [
        'IOTA',
        'blockchain',
        'European Blockchain PCP',
        'DLT',
        'scalable solutions',
        'data management',
        'interoperability',
        'sustainability',
        'tokenization',
        'regulatory compliance',
        'decentralized governance',
        'technology showcase',
        'European Commission',
    ],
    url: `${BASE_URL}/learn/showcases/ebsi`,
};

export const SHOWCASE_EBSI: ShowcasePage = {
    category: ShowcaseCategory.LighthouseProjects,
    metadata: SHOWCASE_EBSI_METADATA,
    projectLinks: PROJECTS_LINKS_EBSI,
    exploreMore: EXPLORE_MORE_SHOWCASES_EBSI,
    frame: FRAME_SHOW_CASE_DATA_EBSI,
};
