import { BASE_URL } from '@lib/constants';
import { PageMetadataProps } from '@lib/utils';
import {
    AssetTokenization,
    Governance,
    SelfSponsorship,
    Tokenization,
    TokenizationOfElectronicDocuments,
} from '@repo/icons';
import {
    ExploreMoreProps,
    FrameShowcaseData,
    ProjectLinksProps,
    ShowcasePage,
    TestimonialData,
} from '../../types';

export const PROJECTS_LINKS_REALIZE: ProjectLinksProps = {
    website: 'https://www.realizeassets.com/',
    blog: 'https://blog.realizeassets.com/realize-t-bills-fund-launches-as-the-first-tokenized-tbill-fund-in-adgm/',
    contact: 'mailto:info@iota.org',
};

export const EXPLORE_MORE_SHOWCASES_REALIZE: ExploreMoreProps = {
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

export const FRAME_SHOWCASE_DATA_REALIZE: FrameShowcaseData = {
    links: [
        { link: '/learn/showcases', text: 'Showcases' },
        { text: 'Realize', highlighted: true },
    ],
    verticalTitle: {
        title: 'Realize',
        subtitle: 'Unlocking yields for tokenized assets',
    },
    category: [{ label: 'Tokenization of Real-World Assets' }],
    heroImage: '/learn/showcases/showcases-hero/realize_hero.png',
    description: {
        title: 'From Tokenization to Utility',
        body: 'Realize is a pioneering tokenization platform based in Abu Dhabi, bringing the Middle East’s first tokenized T-Bills Fund to market. But it goes further: by integrating tokenized assets into curated DeFi applications, it creates new opportunities. Its approach enhances liquidity, expands asset utility and yield opportunities, ensures regulatory compliance, and delivers real value to investors.',
    },
    highlights: [
        {
            icon: <AssetTokenization />,
            title: 'New Yield Opportunities',
            body: 'Unlock new yield potentials through innovative tokenization strategies and DeFi solutions.',
        },
        {
            icon: <SelfSponsorship />,
            title: 'Enhanced Liquidity',
            body: 'Convert your real-world assets into digital tokens for faster, more efficient liquidity.',
        },
        {
            icon: <Governance />,
            title: 'Strictly Governed',
            body: 'Invest in the first tokenized T-BILLS Fund domiciled in ADGM, providing security and compliance.',
        },
        {
            icon: <TokenizationOfElectronicDocuments />,
            title: 'Institutional Custody Solution',
            body: 'Take advantage of industry-leading custody services to safeguard your wealth.',
        },
        {
            icon: <Tokenization />,
            title: 'Direct Tokenization',
            body: 'Benefit from transparent ownership, reduced complexity, no intermediaries, and lower costs.',
        },
    ],
};

export const SHOWCASE_REALIZE_METADATA: PageMetadataProps = {
    title: 'Realize - Unlocking Yields for Tokenized Assets | IOTA Technology Showcase',
    description:
        "Discover Realize, Abu Dhabi's pioneering tokenization platform, launching the Middle East's first tokenized T-Bills Fund. By integrating tokenized assets into curated DeFi applications, Realize creates new yield opportunities, enhances liquidity, and ensures regulatory compliance - paving the way for a new era of digital finance.",
    descriptionX:
        'Realize is bringing real-world assets on-chain with institutional-grade tokenization, unlocking new liquidity and yield opportunities for investors. Explore the future of tokenized asset management.',
    image: '/metadata/meta_image_showcases_realize.png',
    keywords: [
        'IOTA',
        'Realize',
        'tokenization',
        'DeFi',
        'T-Bills',
        'digital assets',
        'blockchain finance',
        'real-world assets',
        'Abu Dhabi',
        'ADGM',
        'liquidity solutions',
        'institutional custody',
        'regulated tokenization',
        'secure transactions',
        'yield generation',
        'asset management',
        'finance innovation',
        'on-chain assets',
        'blockchain',
    ],
    url: `${BASE_URL}/learn/showcases/realize`,
};

export const TESTIMONIAL_SHOWCASE_REALIZE: TestimonialData = {
    name: 'Robert Daykin',
    supportingText: 'Co-Founder',
    content:
        'Realize is redefining finance by bringing real-world assets on-chain with unparalleled transparency and efficiency. We chose IOTA as our launchpad because of its scalable architecture and regulatory-friendly framework – ensuring seamless, cost-effective tokenization at institutional grade. This is the future of asset management, and we’re making it a reality.',
    image: '/learn/showcases/realize_quote.png',
};

export const SHOWCASE_REALIZE: ShowcasePage = {
    metadata: SHOWCASE_REALIZE_METADATA,
    projectLinks: PROJECTS_LINKS_REALIZE,
    exploreMore: EXPLORE_MORE_SHOWCASES_REALIZE,
    frame: FRAME_SHOWCASE_DATA_REALIZE,
    testimonial: TESTIMONIAL_SHOWCASE_REALIZE,
};
