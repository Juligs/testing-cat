import { BASE_URL } from '@lib/constants';
import { PageMetadataProps } from '@lib/utils';
import {
    BuiltWithPartners,
    DecentralizedDataStorageAndSeamlessTransactions,
    DigitizingTradeData,
    FullLifecycleTracking,
    Reward,
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

export const PROJECTS_LINKS_OROBO: ProjectLinksProps = {
    website: 'https://orobo.tech/',
    contact: 'mailto:info@iota.org',
};

export const EXPLORE_MORE_SHOWCASES_OROBO: ExploreMoreProps = {
    ctaExploreCard: [
        {
            image: '/learn/showcases/explore-more/object_id.png',
            title: 'ObjectID',
            subtitle: 'Digital twins for authentic and transparent products',
            link: '/learn/showcases/objectID',
        },
        {
            image: '/learn/showcases/explore-more/twin.png',
            title: 'Turing Space',
            subtitle: 'Fraud-Resistant Credentials for Global Use',
            link: '/learn/showcases/twin',
        },
    ],
};

export const FRAME_SHOW_CASE_DATA_OROBO: FrameShowcaseData = {
    links: [
        { link: '/learn/showcases', text: 'Showcases' },
        { text: 'Orobo', highlighted: true },
    ],
    verticalTitle: {
        title: 'Orobo',
        subtitle: 'Digital passports for regulation-ready products',
    },
    category: [{ label: 'Digital Identity' }, { label: 'Product Lifecycle' }],
    heroImage: '/learn/showcases/showcases-hero/orobo_hero.png',
    description: {
        title: 'Every Product Accounted For, Every Rule Met',
        body: 'Orobo is building modern infrastructure for Digital Product Passports, starting with EV batteries and expanding to textiles and construction. Anchored by IOTA, Orobo connects supply chain actors and regulators with verifiable and compliant product data.',
    },
    highlights: [
        {
            icon: <Tokenization />,
            title: 'Regulation-Ready Passports',
            body: 'Supports compliance with EU’s Ecodesign and upcoming global product passport mandates.',
        },
        {
            icon: <DigitizingTradeData />,
            title: 'Traceable Supply Chains',
            body: 'Events such as production, transport, and recycling are immutably logged.',
        },
        {
            icon: <DecentralizedDataStorageAndSeamlessTransactions />,
            title: 'Accessible Participation',
            body: 'IOTA Gas Station removes token barriers, allowing any actor to join the system.',
        },
        {
            icon: <FullLifecycleTracking />,
            title: 'Complete Product Identities',
            body: 'Each item receives a digital twin with verifiable lifecycle data, anchored on IOTA.',
        },
        {
            icon: <Reward />,
            title: 'Privacy-Conscious Design',
            body: 'Sensitive data is hashed, ensuring auditability without exposing business secrets.',
        },
        {
            icon: <BuiltWithPartners />,
            title: 'Built for Growth',
            body: 'Custom Move contracts enable lifecycle-linked recording across diverse industries.',
        },
    ],
};

export const TESTIMONIAL_OROBO: TestimonialData = {
    name: 'Sann Carrière',
    supportingText: 'Founder, Orobo',
    content:
        'We chose IOTA because of its focus on real-world applications and a shared vision for digital ecosystems that serve both people and the planet.',
    image: '/learn/showcases/orobo_quote.png',
};

export const SHOWCASE_OROBO_METADATA: PageMetadataProps = {
    title: 'Orobo - Digital passports for regulation-ready products | IOTA Technology Showcase',
    description:
        'Orobo creates Digital Product Passports on IOTA to support supply chain traceability and regulatory compliance, starting with EV batteries and expanding to textiles and construction.',
    descriptionX:
        'From EV batteries to construction: Orobo’s Digital Product Passports on IOTA power traceability, compliance, and privacy for the circular economy.',
    image: '/metadata/meta_image_showcases_orobo.png',
    keywords: [
        'IOTA',
        'Digital Product Passport',
        'DPP',
        'EV batteries',
        'supply chain traceability',
        'regulatory compliance',
        'Ecodesign',
        'digital twin',
        'product lifecycle',
        'construction',
        'textiles',
        'privacy-preserving supply chain',
        'Move contracts',
    ],
    url: `${BASE_URL}/learn/showcases/orobo`,
};

export const SHOWCASE_OROBO: ShowcasePage = {
    category: ShowcaseCategory.RealWorldAdoption,
    card: {
        title: 'Orobo',
        subtitle: 'Digital passports for regulation-ready products',
        image: '/learn/showcases/explore-more/orobo.png',
        category: ['Digital Identity', 'Product Lifecycle'],
    },
    metadata: SHOWCASE_OROBO_METADATA,
    projectLinks: PROJECTS_LINKS_OROBO,
    exploreMore: EXPLORE_MORE_SHOWCASES_OROBO,
    frame: FRAME_SHOW_CASE_DATA_OROBO,
    testimonial: TESTIMONIAL_OROBO,
};
