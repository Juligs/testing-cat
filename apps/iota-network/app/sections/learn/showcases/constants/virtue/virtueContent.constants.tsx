import { BASE_URL } from '@lib/constants';
import { PageMetadataProps } from '@lib/utils';
import {
    AssetTokenization,
    DecentralizedFinance,
    EnhancedSecurity,
    Flexibility,
    Interoperability,
} from '@repo/icons';
import { ExploreMoreProps, FrameShowcaseData, ProjectLinksProps, ShowcasePage } from '../../types';
import { ShowcaseCategory } from '../../showcasesProjects.enums';

export const PROJECTS_LINKS_VIRTUE: ProjectLinksProps = {
    website: 'https://virtue.money/',
    contact: 'mailto:info@iota.org',
};

export const EXPLORE_MORE_SHOWCASES_VIRTUE: ExploreMoreProps = {
    ctaExploreCard: [
        {
            image: '/learn/showcases/explore-more/pools.png',
            title: 'Pools Finance',
            subtitle: 'Efficient Liquidity Infrastructure for DeFi',
            link: '/learn/showcases/pools-finance',
        },
        {
            image: '/learn/showcases/explore-more/twin.png',
            title: 'Twin',
            subtitle: 'Seamless transfer of digital trade data across borders',
            link: '/learn/showcases/twin',
        },
    ],
};

export const FRAME_SHOW_CASE_DATA_VIRTUE: FrameShowcaseData = {
    links: [
        { link: '/learn/showcases', text: 'Showcases' },
        { text: 'Virtue', highlighted: true },
    ],
    verticalTitle: {
        title: 'Virtue',
        subtitle: 'Unlock liquidity and rise above financial barriers',
    },
    category: [{ label: 'Decentralized Finance' }],
    heroImage: '/learn/showcases/showcases-hero/virtue_hero.png',
    description: {
        title: 'Make Your Tokens Work For You',
        body: 'Virtue is a stablecoin protocol built on IOTA. Mint VUSD by locking IOTA or stIOTA as collateral, and use it across DeFi tools, without selling your tokens. Stability, composability, and growth – all native to IOTA.',
    },
    highlights: [
        {
            icon: <AssetTokenization />,
            title: 'Easily borrow VUSD stablecoin',
            body: 'A secure stablecoin pegged to USD.',
        },
        {
            icon: <Interoperability />,
            title: 'Fixed Interest Rate',
            body: 'Borrowers access liquidity with stable costs, free from rate fluctuations.',
        },
        {
            icon: <DecentralizedFinance />,
            title: 'Efficient Collateral Use',
            body: 'Unlock more borrowing power with less locked capital.',
        },
        {
            icon: <Flexibility />,
            title: 'Diverse Collateral Options',
            body: 'Back VUSD with IOTA, stIOTA, and more coming soon.',
        },
        {
            icon: <EnhancedSecurity />,
            title: 'Secure & Decentralized',
            body: 'Built for security with full decentralization at its core.',
        },
    ],
};

export const SHOWCASE_VIRTUE_METADATA: PageMetadataProps = {
    title: 'Virtue - Rise above financial barriers with Virtue | IOTA Technology Showcase',
    description:
        'Virtue is a decentralized stablecoin protocol on IOTA that lets you mint VUSD by locking IOTA or stIOTA as collateral—access liquidity without selling your assets.',
    descriptionX:
        'Unlock liquidity without selling. Virtue lets you mint VUSD stablecoins using IOTA or stIOTA as collateral—secure, decentralized, and built for DeFi.',
    image: '/metadata/meta_image_showcases_virtue.png',
    keywords: [
        'IOTA',
        'Virtue',
        'stablecoin',
        'VUSD',
        'DeFi',
        'crypto borrowing',
        'collateralized stablecoin',
        'stIOTA',
        'fixed interest rate',
        'decentralized finance',
        'liquidity protocol',
        'stable borrowing',
        'DeFi collateral',
        'mint VUSD',
    ],
    url: `${BASE_URL}/learn/showcases/virtue`,
};

export const SHOWCASE_VIRTUE: ShowcasePage = {
    category: ShowcaseCategory.RealWorldAdoption,
    card: {
        title: 'Virtue',
        subtitle: 'Rise above financial barriers',
        image: '/learn/showcases/explore-more/virtue.png',
        category: ['Decentralized Finance'],
    },
    metadata: SHOWCASE_VIRTUE_METADATA,
    projectLinks: PROJECTS_LINKS_VIRTUE,
    exploreMore: EXPLORE_MORE_SHOWCASES_VIRTUE,
    frame: FRAME_SHOW_CASE_DATA_VIRTUE,
};
