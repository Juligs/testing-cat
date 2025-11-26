import { BASE_URL } from '@lib/constants';
import { PageMetadataProps } from '@lib/utils';
import {
    DigitizingTradeData,
    HighProductivity,
    IntegrationWithLocalRetailers,
    IotaExplorer,
    Reward,
    TargetedSpendingDefinedByIssuingCompanyOrMunicipality,
} from '@repo/icons';
import {
    ExploreMoreProps,
    FrameShowcaseData,
    ProjectLinksProps,
    ShowcasePage,
    TestimonialData,
} from '../../types';
import { ShowcaseCategory } from '../../showcasesProjects.enums';

export const PROJECTS_LINKS_KALALOHKO: ProjectLinksProps = {
    website: 'https://kalalohko.com/',
    contact: 'mailto:info@iota.org',
};

export const EXPLORE_MORE_SHOWCASES_KALALOHKO: ExploreMoreProps = {
    ctaExploreCard: [
        {
            image: '/learn/showcases/explore-more/twin.png',
            title: 'TWIN',
            subtitle: 'Seamless transfer of digital trade data across borders',
            link: '/learn/showcases/twin',
        },
        {
            image: '/learn/showcases/explore-more/salus.png',
            title: 'Salus',
            subtitle: 'Closing the Trade Finance Gap with Tokenization',
            link: '/learn/showcases/salus',
        },
    ],
};

export const FRAME_SHOW_CASE_DATA_KALALOHKO: FrameShowcaseData = {
    links: [
        { link: '/learn/showcases', text: 'Showcases' },
        { text: 'Kalalohko', highlighted: true },
    ],
    verticalTitle: {
        title: 'Kalalohko',
        subtitle: 'Fair and transparent seafood industry ecosystems',
    },
    category: [{ label: 'Trade & Supply Chain' }],
    heroImage: '/learn/showcases/showcases-hero/kalalohko_hero.png',
    description: {
        title: 'Seafood You Can Trace and Trust',
        body: 'Kalalohko is reshaping the seafood industry with technology that improves traceability, fairness, and sustainability. By anchoring records on IOTA, it gives fishermen, processors, and restaurants a transparent system and consumers a verified story of their food.',
    },
    highlights: [
        {
            icon: <TargetedSpendingDefinedByIssuingCompanyOrMunicipality />,
            title: 'Empowering Fishermen',
            body: 'Creates fairer economics and higher payouts for local fishing communities.',
        },
        {
            icon: <DigitizingTradeData />,
            title: 'From Net to Plate',
            body: 'Each catch is tracked from origin through processing to the consumer.',
        },
        {
            icon: <IntegrationWithLocalRetailers />,
            title: 'Ecological Balance',
            body: 'Supports sustainable fishing and healthier ecosystems by promoting local sourcing.',
        },
        {
            icon: <IotaExplorer />,
            title: 'Transparent Records',
            body: 'Supply chain actors have verifiable, tamper-proof data on IOTA.',
        },
        {
            icon: <Reward />,
            title: 'Lower Costs for All',
            body: 'Optimized logistics reduce expenses for restaurants, consumers, and municipalities.',
        },
        {
            icon: <HighProductivity />,
            title: 'Scalable Model',
            body: 'Can expand from seafood to other food sectors and artisanal products.',
        },
    ],
};

export const TESTIMONIALS_KALALOHKO: TestimonialData = {
    name: 'Tommi Lindholm',
    supportingText: 'Chairman, Kalalohko',
    content:
        'We are in the business of upsetting a very conservative industry... In our view, IOTA brings transparency, decentralization, and accountability to commerce.',
    image: '/learn/showcases/kalalohko_quote.png',
};

export const SHOWCASE_KALALOHKO_METADATA: PageMetadataProps = {
    title: 'Kalalohko - Fair and transparent seafood industry ecosystems | IOTA Technology Showcase',
    description:
        'Kalalohko uses IOTA to bring transparency, traceability, and fairness to the seafood industry, empowering local fishermen and delivering verified catch-to-consumer data.',
    descriptionX:
        'Seafood you can trace and trust. Kalalohko uses IOTA to deliver fair, transparent supply chains from local fishermen to your plate.',
    image: '/metadata/meta_image_showcases_kalalohko.png',
    keywords: [
        'IOTA',
        'Kalalohko',
        'seafood traceability',
        'sustainable fishing',
        'supply chain transparency',
        'fair trade seafood',
        'fisherman empowerment',
        'food provenance',
        'net to plate',
        'tamper-proof records',
        'transparent seafood',
        'local sourcing',
        'blockchain seafood',
    ],
    url: `${BASE_URL}/learn/showcases/kalalohko`,
};

export const SHOWCASE_KALALOHKO: ShowcasePage = {
    category: ShowcaseCategory.RealWorldAdoption,
    card: {
        title: 'Kalalohko',
        subtitle: 'Fair and transparent seafood industry ecosystems',
        image: '/learn/showcases/explore-more/kalakoho.png',
        category: ['Trade & Supply Chain'],
    },
    metadata: SHOWCASE_KALALOHKO_METADATA,
    projectLinks: PROJECTS_LINKS_KALALOHKO,
    exploreMore: EXPLORE_MORE_SHOWCASES_KALALOHKO,
    frame: FRAME_SHOW_CASE_DATA_KALALOHKO,
    testimonial: TESTIMONIALS_KALALOHKO,
};
