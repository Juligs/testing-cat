import {
    BuiltWithPartners,
    DecentralizedDigitalIdentities,
    EliminatesCostlyDelays,
    SecureAndEfficientTransactions,
    TokenizationOfElectronicDocuments,
    TwinConsortium,
} from '@repo/icons';
import { PageMetadataProps } from '@lib/utils';
import { BASE_URL } from '@lib/constants';
import { ExploreMoreProps, FrameShowcaseData, ProjectLinksProps, ShowcasePage } from '../../types';
import { ShowcaseCategory } from '../../showcasesProjects.enums';

export const PROJECTS_LINKS_TWIN: ProjectLinksProps = {
    website: 'https://www.twin.org/',
    contact: 'mailto:info@iota.org',
    download: 'https://files.iota.org/comms/TWIN_IOTA_Showcase_Presentation.pdf',
};

export const EXPLORE_MORE_SHOWCASES_TWIN: ExploreMoreProps = {
    ctaExploreCard: [
        {
            image: '/learn/showcases/explore-more/kalalohko.png',
            title: 'Kalalohko',
            subtitle: 'Fair and transparent seafood industry ecosystems',
            link: '/learn/showcases/kalalohko',
        },
        {
            image: '/learn/showcases/explore-more/salus.png',
            title: 'Salus',
            subtitle: 'Closing the Trade Finance Gap with Tokenization',
            link: '/learn/showcases/salus',
        },
    ],
};

export const FRAME_SHOW_CASE_DATA_TWIN: FrameShowcaseData = {
    links: [
        { link: '/learn/showcases', text: 'Showcases' },
        { text: 'TWIN', highlighted: true },
    ],
    verticalTitle: {
        title: 'TWIN',
        subtitle: 'Seamless transfer of digital trade data across borders',
    },
    category: [{ label: 'Trade & Supply Chain' }, { label: 'Product Lifecycle' }],
    heroImage: '/learn/showcases/showcases-hero/twin_hero.png',
    description: {
        title: 'Moving paperless trade across borders',
        body: 'Traditional trade suffers from limited data transparency and traceability, reducing efficiency and trust. Built on IOTA, the Trade Worldwide Information Network (TWIN) enables instant, secure data sharing across global supply chains, with use cases in Africa and Europe highlighting economic and efficiency gains.',
    },
    highlights: [
        {
            icon: <DecentralizedDigitalIdentities />,
            title: 'Digitizing Trade Data',
            body: 'leads to an 80% reduction in transaction costs, a 50% shrink of the trade finance gap, a 35% increase in SME efficiency, and a decrease in cross-border processing times from weeks to days.',
        },
        {
            icon: <SecureAndEfficientTransactions />,
            title: 'Secure and Efficient Transactions',
            body: 'through underlying IOTA tech including our Mainnet and Digital Identities.',
        },
        {
            icon: <EliminatesCostlyDelays />,
            title: 'Eliminates Costly Delays',
            body: 'by ensuring that digital trade certificates are authenticated, reducing the need for manual document storage and checks.',
        },
        {
            icon: <BuiltWithPartners />,
            title: 'Collaboration with Governments and Logistic Companies',
            body: "to customize TWIN's open-source features to suit their requirements and international operations.",
        },
        {
            icon: <TokenizationOfElectronicDocuments />,
            title: 'Tokenization of Electronic Documents',
            body: 'as NFTs, which require verified digital identities to access full documents, thus maintaining document sovereignty and security.',
        },
        {
            icon: <TwinConsortium />,
            title: 'TWIN Consortium',
            body: 'includes the IOTA Foundation, Trademark Africa, The World Economic Forum, Tony Blair Institute for Global Change, Institute of Export and International Trade, and the Global Alliance for Trade Facilitation.',
        },
    ],
};

export const SHOWCASE_TWIN_METADATA: PageMetadataProps = {
    title: 'TWIN - Seamless Transfer of Digital Trade Data Across Borders | IOTA Technology Showcase',
    description:
        'Discover TWIN, an IOTA-powered digital platform enabling global supply chain participants to securely share and access trade data. Reduce costs, enhance efficiency, and foster transparency in international trade.',
    descriptionX:
        'Enhance cross-border trade efficiency with TWIN, an IOTA-based solution for secure and transparent global trade data sharing.',
    image: '/metadata/meta_image_showcases_twin.png',
    keywords: [
        'IOTA',
        'TWIN',
        'Trade Worldwide Information Pipeline',
        'digital trade',
        'blockchain',
        'global supply chain',
        'trade data transparency',
        'digital identities',
        'tokenization',
        'secure transactions',
        'SME efficiency',
        'trade finance',
        'cross-border trade',
        'open-source solutions',
        'technology showcase',
        'Tony Blair Institute',
        'World Economic Forum',
        'Trademark Africa',
        'Global Alliance for Trade Facilitation',
    ],
    url: `${BASE_URL}/learn/showcases/twin`,
};

export const SHOWCASE_TWIN: ShowcasePage = {
    category: ShowcaseCategory.RealWorldAdoption,
    card: {
        title: 'TWIN',
        subtitle: 'Seamless transfer of digital trade data across borders',
        image: '/learn/showcases/explore-more/twin.png',
        category: ['Trade & Supply Chain', 'Product Lifecycle'],
    },
    metadata: SHOWCASE_TWIN_METADATA,
    projectLinks: PROJECTS_LINKS_TWIN,
    exploreMore: EXPLORE_MORE_SHOWCASES_TWIN,
    frame: FRAME_SHOW_CASE_DATA_TWIN,
};
