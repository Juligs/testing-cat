import { BASE_URL } from '@lib/constants';
import { PageMetadataProps } from '@lib/utils';
import {
    GasStation,
    IotaIdentity,
    ObjectDataModel,
    SmartContract,
    TokenizationOfElectronicDocuments,
} from '@repo/icons';
import { ExploreMoreProps, FrameShowcaseData, ProjectLinksProps, ShowcasePage } from '../../types';
import { ShowcaseCategory } from '../../showcasesProjects.enums';

export const PROJECTS_LINKS_SALUS: ProjectLinksProps = {
    website: 'https://www.salusplatform.com/',
    contact: 'mailto:info@iota.org',
    blog: 'https://blog.iota.org/trade-finance-reinvented/',
};

export const EXPLORE_MORE_SHOWCASES_SALUS: ExploreMoreProps = {
    ctaExploreCard: [
        {
            image: '/learn/showcases/explore-more/twin.png',
            title: 'Twin',
            subtitle: 'Seamless transfer of digital trade data across borders',
            link: '/learn/showcases/twin',
        },
        {
            image: '/learn/showcases/explore-more/pools.png',
            title: 'Pools Finance',
            subtitle: 'Efficient Liquidity Infrastructure for DeFi',
            link: '/learn/showcases/pools-finance',
        },
    ],
};

export const FRAME_SHOW_CASE_DATA_SALUS: FrameShowcaseData = {
    links: [
        { link: '/learn/showcases', text: 'Showcases' },
        { text: 'Salus', highlighted: true },
    ],
    verticalTitle: {
        title: 'Salus',
        subtitle: 'Closing the trade finance gap with tokenization',
    },
    category: [{ label: 'Tokenization of Real-World Assets' }, { label: 'Product Lifecycle' }],
    heroImage: '/learn/showcases/showcases-hero/salus_hero.png',
    description: {
        title: 'Tokenizing Critical Minerals',
        body: 'The global trade finance gap has been estimated at $2.5 trillion, locking SMEs out of funding and slowing access to markets such as essential critical minerals. Salus addresses this by turning shipments into auditable digital assets funders can trust – unlocking faster, more trustworthy financing for vital resources.',
    },
    highlights: [
        {
            icon: <IotaIdentity />,
            title: 'Digital Identity & Credentials',
            body: 'Digital Identity of all parties – from miners to buyers, inspectors and investors – securely stored on the IOTA ledger.',
        },
        {
            icon: <TokenizationOfElectronicDocuments />,
            title: 'Tokenization',
            body: 'Key trade documents representing the ownership and provenance of critical minerals are issued as NFTs and anchored on the IOTA ledger.',
        },
        {
            icon: <ObjectDataModel />,
            title: 'Audit Trails and Event Linking',
            body: 'Data like the content of a container or date of an inspection is anchored on IOTA for a tamper-proof audit trail for each item through the supply chain',
        },
        {
            icon: <SmartContract />,
            title: 'Smart Contracts',
            body: 'Core trade finance processes like transferring title, managing collateral, and executing payments are automated via IOTA Smart Contracts.',
        },
        {
            icon: <GasStation />,
            title: 'IOTA Gas Station',
            body: 'Each TWIN node’s Gas Station covers user fees, so participants can run IOTA Move smart contracts in the Salus dApp without managing tokens.',
        },
    ],
};

export const SHOWCASE_SALUS_METADATA: PageMetadataProps = {
    title: 'Salus - Closing the Trade Finance Gap with Tokenization  | IOTA Technology Showcase',
    description:
        'Salus unlocks trade finance for critical minerals by tokenizing shipments as digital assets on IOTA. With NFTs, smart contracts, and tamper-proof audit trails, SMEs gain faster, trusted access to funding and global markets.',
    descriptionX:
        'Salus | Closing the $2.5T Trade Finance Gap with Tokenized Critical Minerals on IOTA',
    image: '/metadata/meta_image_showcases_salus.png',
    keywords: [
        'IOTA',
        'TWIN',
        'Trade Worldwide Information Pipeline',
        'trade finance gap',
        'critical minerals',
        'tokenization',
        'digital assets',
        'NFT trade documents',
        'supply chain audit trail',
        'smart contracts',
        'digital identity',
        'Salus platform',
    ],
    url: `${BASE_URL}/learn/showcases/salus`,
};

export const SHOWCASE_SALUS: ShowcasePage = {
    category: ShowcaseCategory.RealWorldAdoption,
    card: {
        title: 'Salus',
        subtitle: 'Closing the Trade Finance Gap with Tokenization',
        image: '/learn/showcases/explore-more/salus.png',
        category: ['Tokenization of Real-World Assets', 'Product Lifecycle'],
    },
    metadata: SHOWCASE_SALUS_METADATA,
    projectLinks: PROJECTS_LINKS_SALUS,
    exploreMore: EXPLORE_MORE_SHOWCASES_SALUS,
    frame: FRAME_SHOW_CASE_DATA_SALUS,
};
