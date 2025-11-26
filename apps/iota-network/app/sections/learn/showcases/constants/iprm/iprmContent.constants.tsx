import { BASE_URL } from '@lib/constants';
import { PageMetadataProps } from '@lib/utils';
import {
    DecentralizedDigitalIdentities,
    InterplanetaryFileSystem,
    IotaSmartContractChains,
    IprMarketplace,
    Nfts,
    SmartContractForMediaMpeg,
} from '@repo/icons';
import {
    ExploreMoreProps,
    FrameShowcaseData,
    ProjectLinksProps,
    ShowcasePage,
    TestimonialData,
} from '../../types';
import { ShowcaseCategory } from '../../showcasesProjects.enums';

export const PROJECTS_LINKS_IPRM: ProjectLinksProps = {
    blog: 'https://blog.iota.org/ipr-management-iota/',
    contact: 'mailto:info@iota.org',
    download: 'https://files.iota.org/comms/IPR_Management_IOTA_Showcase_Presentation.pdf',
};

export const EXPLORE_MORE_SHOWCASES_IPRM: ExploreMoreProps = {
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

export const FRAME_SHOW_CASE_DATA_IPRM: FrameShowcaseData = {
    links: [
        { link: '/learn/showcases', text: 'Showcases' },
        { text: 'Intellectual Property Rights Management', highlighted: true },
    ],
    verticalTitle: {
        title: 'Intellectual Property Rights Management',
        subtitle: 'Automated and transparent rights contracts and payments',
    },
    category: [{ label: 'Digital Identity' }, { label: 'Tokenization of Real-World Assets' }],
    heroImage: '/learn/showcases/showcases-hero/iprm_hero.png',
    description: {
        title: 'Transparent and Fair Rights Payment',
        body: 'Managing intellectual property rights is difficult due to payment transparency and user experience issues that make it challenging for artists and rights holders to track and verify their earnings. Our prototype solution uses DLT and Smart Contracts for Media to simplify rights management with automated, transparent digital contracts.',
    },
    highlights: [
        {
            icon: <IotaSmartContractChains />,
            title: 'IOTA Smart Contract Chains',
            body: 'ensure that contracts are immutable and transparent, thus guaranteeing the integrity of agreements.',
        },
        {
            icon: <Nfts />,
            title: 'NFTs',
            body: 'represent intellectual property rights and contractual obligations, providing clear and traceable records.',
        },
        {
            icon: <InterplanetaryFileSystem />,
            title: 'Inter Planetary File System',
            body: 'facilitates decentralized storage of contract data, so all information is securely and transparently maintained.',
        },
        {
            icon: <DecentralizedDigitalIdentities />,
            title: 'Decentralized Digital Identities',
            body: "enable secure and verified interactions among participants, enhancing the system's overall trustworthiness.",
        },
        {
            icon: <SmartContractForMediaMpeg />,
            title: 'Smart Contract for Media MPEG-21',
            body: 'standard converts traditional legal documents into machine-readable smart contracts.',
        },
        {
            icon: <IprMarketplace />,
            title: 'IPR Marketplace',
            body: 'platform streamlines the negotiation and execution processes.',
        },
    ],
};

export const TESTIMONIALS_IPRM: TestimonialData = {
    name: 'Philippe Rixhon',
    supportingText: 'CEO, Valunode',
    content:
        'First tokenisation of synchronization rights – Valunode transferred rights declarations from Musika Peripherika – a media project of Creative Europe – to IOTA. Then, IOTA successfully tokenized licensing and remuneration between musicians and filmmakers! Our collaboration paves the way to drastic process accelerations and cost reductions.',
    image: '/learn/showcases/iprm_quote.png',
};

export const SHOWCASE_IPRM_METADATA: PageMetadataProps = {
    title: 'Intellectual Property Rights Management | IOTA Technology Showcase',
    description:
        "Discover IOTA's innovative approach to automated and transparent rights contracts and payments. Using DLT, smart contracts, and NFTs, this solution simplifies intellectual property rights management for fair and transparent transactions.",
    descriptionX:
        "Simplify intellectual property rights management with IOTA's innovative blockchain solutions. Learn how automated contracts and NFTs enhance transparency and fairness.",
    image: '/metadata/meta_image_showcases_iprm.png',
    keywords: [
        'IOTA',
        'Intellectual Property Rights',
        'blockchain',
        'DLT',
        'smart contracts',
        'NFTs',
        'decentralized identities',
        'IPR Marketplace',
        'Smart Contract for Media MPEG-21',
        'InterPlanetary File System',
        'rights management',
        'transparent payments',
        'Musika Peripherika',
        'digital contracts',
        'technology showcase',
    ],
    url: `${BASE_URL}/learn/showcases/iprm`,
};

export const SHOWCASE_IPRM: ShowcasePage = {
    category: ShowcaseCategory.LighthouseProjects,
    metadata: SHOWCASE_IPRM_METADATA,
    projectLinks: PROJECTS_LINKS_IPRM,
    testimonial: TESTIMONIALS_IPRM,
    exploreMore: EXPLORE_MORE_SHOWCASES_IPRM,
    frame: FRAME_SHOW_CASE_DATA_IPRM,
};
