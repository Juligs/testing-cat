import { BASE_URL } from '@lib/constants';
import { PageMetadataProps } from '@lib/utils';
import {
    AssetTokenization,
    DecentralizedDataStorageAndSeamlessTransactions,
    EnhancedSecurity,
    IotaMainnet,
    KeyRotation,
    SeamlessIntegrationWithWeb3,
} from '@repo/icons';
import {
    ExploreMoreProps,
    FrameShowcaseData,
    ProjectLinksProps,
    ShowcasePage,
    TestimonialData,
} from '../../types';
import { ShowcaseCategory } from '../../showcasesProjects.enums';

export const PROJECTS_LINKS_POOLS: ProjectLinksProps = {
    website: 'https://www.pools.finance/',
    contact: 'mailto:info@iota.org',
};

export const EXPLORE_MORE_SHOWCASES_POOLS: ExploreMoreProps = {
    ctaExploreCard: [
        {
            image: '/learn/showcases/explore-more/virtue.png',
            title: 'Virtue',
            subtitle: 'Rise Above Financial Barriers With Virtue',
            link: '/learn/showcases/virtue',
        },
        {
            image: '/learn/showcases/explore-more/salus.png',
            title: 'Salus',
            subtitle: 'Closing the Trade Finance Gap with Tokenization',
            link: '/learn/showcases/salus',
        },
    ],
};

export const FRAME_SHOW_CASE_DATA_POOLS: FrameShowcaseData = {
    links: [
        { link: '/learn/showcases', text: 'Showcases' },
        { text: 'Pools Finance', highlighted: true },
    ],
    verticalTitle: {
        title: 'Pools Finance',
        subtitle: 'Advanced liquidity infrastructure for decentralized markets',
    },
    category: [{ label: 'Decentralized Finance' }],
    heroImage: '/learn/showcases/showcases-hero/pools_hero.png',
    description: {
        title: 'Smart Liquidity for Global DeFi Trading',
        body: 'Pools Finance is a decentralized exchange providing core infrastructure for digital asset trading. At its centre are liquidity pools – shared reserves of tokens that enable trading without traditional intermediaries. By combining simple UX with advanced pool mechanics, Pools delivers fair pricing, efficient execution, and open access for users worldwide.',
    },
    highlights: [
        {
            icon: <AssetTokenization />,
            title: 'Liquidity Made Simple',
            body: 'Shared token reserves power instant and transparent trading, without middlemen.',
        },
        {
            icon: <SeamlessIntegrationWithWeb3 />,
            title: 'Efficient Mechanism',
            body: 'Advanced pool mechanisms improve pricing and reduce slippage, benefiting traders and liquidity providers.',
        },
        {
            icon: <DecentralizedDataStorageAndSeamlessTransactions />,
            title: 'Smart Routing',
            body: 'Transactions flow through the most effective pools for reliable, cost-efficient trades.',
        },
        {
            icon: <EnhancedSecurity />,
            title: 'Proven Security',
            body: 'Independently audited by Zokyo and Hacken for a secure and battle-tested foundation.',
        },
        {
            icon: <IotaMainnet />,
            title: 'Composable Infrastructure',
            body: 'Liquidity integrates into wider DeFi strategies, supporting builders and protocols across the ecosystem.',
        },
        {
            icon: <KeyRotation />,
            title: 'Open Access',
            body: 'Built for global participation, lowering barriers to entry in digital markets.',
        },
    ],
};

export const TESTIMONIAL_POOLS: TestimonialData = {
    name: 'Pools Finance Team',
    content:
        'We chose IOTA because the Foundation welcomed us and enabled us to bring a next-generation liquidity protocol to IOTA’s DeFi ecosystem.',
    image: '/learn/showcases/pools_quote.png',
};

export const SHOWCASE_POOLS_METADATA: PageMetadataProps = {
    title: 'Pools Finance - Advanced liquidity infrastructure for decentralized markets | IOTA Technology Showcase',
    description:
        'Pools Finance is a decentralized exchange (DEX) built on IOTA, offering efficient liquidity pools, smart execution, and secure, accessible trading for the global DeFi ecosystem.',
    descriptionX:
        'Trade smarter with Pools Finance—an IOTA-based DEX offering efficient liquidity pools, smart routing, and secure DeFi infrastructure for global users.',
    image: '/metadata/meta_image_showcases_pools_finance.png',
    keywords: [
        'IOTA',
        'Pools Finance',
        'DEX',
        'decentralized exchange',
        'DeFi',
        'liquidity pools',
        'smart liquidity',
        'crypto trading',
        'digital assets',
        'DeFi infrastructure',
        'slippage reduction',
        'Zokyo audit',
        'Hacken audit',
        'composable DeFi',
        'secure DEX',
    ],
    url: `${BASE_URL}/learn/showcases/pools-finance`,
};

export const SHOWCASE_POOLS: ShowcasePage = {
    category: ShowcaseCategory.RealWorldAdoption,
    card: {
        title: 'Pools Finance',
        subtitle: 'Efficient Liquidity Infrastructure for DeFi',
        image: '/learn/showcases/explore-more/pools.png',
        category: ['Decentralized Finance'],
    },
    metadata: SHOWCASE_POOLS_METADATA,
    projectLinks: PROJECTS_LINKS_POOLS,
    exploreMore: EXPLORE_MORE_SHOWCASES_POOLS,
    frame: FRAME_SHOW_CASE_DATA_POOLS,
    testimonial: TESTIMONIAL_POOLS,
};
