import {
    AnonymizedDataCollectionAndRewardDistribution,
    DecentralizedDataStorageAndSeamlessTransactions,
    DiverseUseCases,
    IntegrationWithLocalRetailers,
    MultipleTokensManagedSimultaneously,
    TargetedSpendingDefinedByIssuingCompanyOrMunicipality,
} from '@repo/icons';
import { PageMetadataProps } from '@lib/utils';
import { BASE_URL } from '@lib/constants';
import {
    ExploreMoreProps,
    FrameShowcaseData,
    ProjectLinksProps,
    ShowcasePage,
    TestimonialData,
} from '../../types';

export const PROJECTS_LINKS_MULTIKNIP: ProjectLinksProps = {
    website: 'https://pbtokn.com/',
    blog: 'https://blog.iota.org/using-data-to-cut-energy-use-while-boosting-local-economies/',
    contact: 'mailto:info@iota.org',
    download: 'https://files.iota.org/comms/MultiKnip_IOTA_Showcase_Presentation.pdf',
};
export const EXPLORE_MORE_SHOWCASES_MULTIKNIP: ExploreMoreProps = {
    ctaExploreCard: [
        {
            image: '/learn/showcases/explore-more/realize.png',
            title: 'Realize',
            subtitle: 'Unlocking Yields for Tokenized Assets',
            link: '/learn/showcases/realize',
        },
        {
            image: '/learn/showcases/explore-more/virtue.png',
            title: 'Virtue',
            subtitle: 'Rise Above Financial Barriers With Virtue',
            link: '/learn/showcases/virtue',
        },
    ],
};

export const FRAME_SHOW_CASE_DATA_MULTIKNIP: FrameShowcaseData = {
    links: [
        { link: '/learn/showcases', text: 'Showcases' },
        { text: 'MultiKnip', highlighted: true },
    ],
    verticalTitle: {
        title: 'MultiKnip',
        subtitle: 'Using digital tokens to drive purpose, value and change',
    },
    category: [{ label: 'Tokenization of Real-World Assets' }, { label: 'Product Lifecycle' }],
    heroImage: '/learn/showcases/showcases-hero/multiknip_hero.png',
    description: {
        title: 'A digital wallet to incentivize change',
        body: 'Challenges over privacy issues and reward distribution hamper the incentivizing of social initiatives. IoT Nederland’s MultiKnip uses IOTA to store and distribute digital tokens that promote social inclusion, healthcare, tourism, sustainability, and economic growth, boosting local economies through fiat or service-based rewards',
    },
    highlights: [
        {
            icon: <DiverseUseCases />,
            title: 'Diverse Use Cases',
            body: 'aiming to foster social inclusion, health, tourism, sustainability, economic growth and more.',
        },
        {
            icon: <TargetedSpendingDefinedByIssuingCompanyOrMunicipality />,
            title: 'Targeted Spending Defined by Issuing Company or Municipality ',
            body: 'in terms of eligibility, quantity, authorized vendors, and the nature of goods or services offered.',
        },
        {
            icon: <MultipleTokensManagedSimultaneously />,
            title: 'Multiple Tokens Managed Simultaneously',
            body: 'in a single wallet interface, enabling efficient management of various tokens for different purposes.',
        },
        {
            icon: <DecentralizedDataStorageAndSeamlessTransactions />,
            title: 'Decentralized Data Storage and Seamless Transactions',
            body: 'via the IOTA Mainnet, ensuring both privacy and efficiency.',
        },
        {
            icon: <AnonymizedDataCollectionAndRewardDistribution />,
            title: 'Anonymized Data Collection and Reward Distribution',
            body: 'through QR code activation.',
        },
        {
            icon: <IntegrationWithLocalRetailers />,
            title: 'Integration with Local Retailers',
            body: 'for redeeming rewards and compensation in fiat money.',
        },
    ],
};

export const TESTIMONIALS_MULTIKNIP: TestimonialData = {
    name: 'Adri Wischmann',
    supportingText: 'Founder of PBTokn.com',
    content:
        'IOTA’s unique characteristics paved the way for our application to be used in several governmental use-cases for purpose bound money, especially the ones about sustainability.',
    image: '/learn/showcases/multiknip_quotes.png',
};

export const SHOWCASE_MULTIKNIP_METADATA: PageMetadataProps = {
    title: 'MultiKnip - Using Digital Tokens to Drive Purpose, Value, and Change | IOTA Technology Showcase',
    description:
        'Explore MultiKnip, an IOTA-powered digital wallet for incentivizing social initiatives. Promote sustainability, social inclusion, and economic growth with privacy-preserving digital tokens.',

    descriptionX:
        'Learn how MultiKnip and IOTA enable privacy-preserving digital wallets for social impact, sustainability, and local economic development.',
    image: '/metadata/meta_image_showcases_multiKnip.png',
    keywords: [
        'IOTA',
        'MultiKnip',
        'digital wallet',
        'digital tokens',
        'blockchain',
        'social inclusion',
        'economic growth',
        'sustainability',
        'reward distribution',
        'decentralized transactions',
        'privacy-preserving technology',
        'targeted spending',
        'local economies',
        'anonymized rewards',
        'integration with retailers',
        'technology showcase',
        'KPN IoT',
    ],
    url: `${BASE_URL}/learn/showcases/multiknip`,
};
export const SHOWCASE_MULTIKNIP: ShowcasePage = {
    metadata: SHOWCASE_MULTIKNIP_METADATA,
    projectLinks: PROJECTS_LINKS_MULTIKNIP,
    testimonial: TESTIMONIALS_MULTIKNIP,
    exploreMore: EXPLORE_MORE_SHOWCASES_MULTIKNIP,
    frame: FRAME_SHOW_CASE_DATA_MULTIKNIP,
};
