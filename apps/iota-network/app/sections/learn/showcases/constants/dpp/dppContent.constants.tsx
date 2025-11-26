import { BASE_URL } from '@lib/constants';
import { PageMetadataProps } from '@lib/utils';
import {
    IotaIdentity,
    Notarization,
    RegulatoryAndTechnicalCompliance,
    SeamlessIntegrationWithWeb3,
    SmartContract,
    W3ConformingVerifiableCredentials,
} from '@repo/icons';
import { ExploreMoreProps, FrameShowcaseData, ProjectLinksProps, ShowcasePage } from '../../types';
import { ShowcaseCategory } from '../../showcasesProjects.enums';

export const PROJECTS_LINKS_DPP: ProjectLinksProps = {
    blog: 'https://blog.iota.org/dpp-plastics-iota/',
    contact: 'mailto:info@iota.org',
    download: 'https://files.iota.org/comms/DPP_IOTA_Showcase_Presentation.pdf',
};

export const EXPLORE_MORE_SHOWCASES_DPP: ExploreMoreProps = {
    ctaExploreCard: [
        {
            image: '/learn/showcases/explore-more/pcp.png',
            title: 'European Blockchain PCP',
            subtitle: 'IOTA solutions for a pan-European blockchain',
            link: '/learn/showcases/pcp',
        },
        {
            image: '/learn/showcases/explore-more/iprm.png',
            title: 'Intellectual Property Rights Management',
            subtitle: 'Automated and transparent rights contracts and payments',
            link: '/learn/showcases/iprm',
        },
    ],
};

export const FRAME_SHOW_CASE_DATA_DPP: FrameShowcaseData = {
    links: [
        { link: '/learn/showcases', text: 'Showcases' },
        { text: 'Digital Product Passports', highlighted: true },
    ],
    verticalTitle: {
        title: 'Digital Product Passports',
        subtitle: 'Secure, transparent product lifecycle data for a circular economy',
    },
    category: [{ label: 'Digital Identity' }, { label: 'Product Lifecycle' }],
    heroImage: '/learn/showcases/showcases-hero/dpp_hero.png',
    description: {
        title: 'Tracing Product Lifecycles',
        subtitle: 'Support a circular economy with IOTA-powered DPPs',
        body: 'Digital Product Passports carry product information for recycling, reuse, and repair, reducing waste, extending product lifecycles, and ensuring compliance with environmental regulations. As part of the European Blockchain PCP, we’ve developed DPP prototype solutions for plastic and electronic goods.',
    },
    highlights: [
        {
            icon: <Notarization />,
            title: 'Notarization',
            body: 'records and guarantees data immutably via the distributed ledger, and verifies product-related data and documents.',
        },
        {
            icon: <IotaIdentity />,
            title: 'IOTA Identity',
            body: 'handles the registration and management of Decentralized Identifiers, as well as the issuance and verification of Verifiable Credentials.',
        },
        {
            icon: <SmartContract />,
            title: 'Smart Contracts',
            body: 'manage lifecycle events, providing a transparent and auditable trail.',
        },
        {
            icon: <W3ConformingVerifiableCredentials />,
            title: 'Verifiable Credential Attribute-Based Access Control Oracle',
            body: 'provides secure and authorized updates of Verifiable Credentials.',
        },
        {
            icon: <SeamlessIntegrationWithWeb3 />,
            title: 'Auditable Item Graph',
            body: 'enables object traceability and composability by capturing digital twins of physical or digital objects.',
        },
        {
            icon: <RegulatoryAndTechnicalCompliance />,
            title: 'Regulatory and Technical Compliance',
            body: 'ensuring adherence to EU regulations and environmental and tech standards, such as Gaia-X and GS1.',
        },
    ],
};

export const SHOWCASE_DPP_METADATA: PageMetadataProps = {
    title: 'Digital Product Passports - Secure Product Lifecycle Data for a Circular Economy | IOTA Technology Showcase',
    description:
        "Discover IOTA's Digital Product Passports (DPPs) for secure and transparent product lifecycle data. Support recycling, reuse, and compliance with environmental regulations to drive a circular economy.",
    descriptionX:
        'IOTA introduces Digital Product Passports for a sustainable circular economy. Learn how blockchain empowers product traceability and compliance.',
    image: '/metadata/meta_image_showcases_dpp.png',
    keywords: [
        'IOTA',
        'Digital Product Passports',
        'DPPs',
        'circular economy',
        'product lifecycle',
        'blockchain',
        'sustainability',
        'recycling',
        'reuse',
        'notarization',
        'IOTA Identity',
        'smart contracts',
        'auditable item graph',
        'environmental compliance',
        'technology showcase',
        'traceability',
        'UOC',
        'Digimarc',
        'eReuse',
        'Agro2Circular',
    ],
    url: `${BASE_URL}/learn/showcases/dpp`,
};

export const SHOWCASE_DPP: ShowcasePage = {
    category: ShowcaseCategory.LighthouseProjects,
    metadata: SHOWCASE_DPP_METADATA,
    projectLinks: PROJECTS_LINKS_DPP,
    exploreMore: EXPLORE_MORE_SHOWCASES_DPP,
    frame: FRAME_SHOW_CASE_DATA_DPP,
};
