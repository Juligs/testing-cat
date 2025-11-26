import { BASE_URL } from '@lib/constants';
import { PageMetadataProps } from '@lib/utils';
import {
    Daos,
    DecentralizedDigitalIdentities,
    EnhancedSecurity,
    IotaIdentity,
    IotaSmartContractChains,
    RegulatedCoin,
} from '@repo/icons';
import { ExploreMoreProps, FrameShowcaseData, ProjectLinksProps, ShowcasePage } from '../../types';
import { ShowcaseCategory } from '../../showcasesProjects.enums';

export const PROJECTS_LINKS_EXTRIMIAN: ProjectLinksProps = {
    website: 'https://extrimian.io/',
    contact: 'mailto:info@iota.org',
};

export const EXPLORE_MORE_SHOWCASES_EXTRIMIAN: ExploreMoreProps = {
    ctaExploreCard: [
        {
            image: '/learn/showcases/explore-more/impierce.png',
            title: 'Impierce',
            subtitle: 'Open-source identity for a digital society',
            link: '/learn/showcases/impierce',
        },
        {
            image: '/learn/showcases/explore-more/turing_space.png',
            title: 'Turing Space',
            subtitle: 'Fraud-Resistant Credentials for Global Use',
            link: '/learn/showcases/turing-space',
        },
    ],
};

export const FRAME_SHOW_CASE_DATA_EXTRIMIAN: FrameShowcaseData = {
    links: [
        { link: '/learn/showcases', text: 'Showcases' },
        { text: 'Extrimian', highlighted: true },
    ],
    verticalTitle: {
        title: 'Extrimian – INCUCAI',
        subtitle: 'Trusted identities for life-saving healthcare',
    },
    category: [{ label: 'Digital Identity' }],
    heroImage: '/learn/showcases/showcases-hero/extrimian_hero.png',
    description: {
        title: 'Digital Identities for Critical Healthcare',
        body: 'Extrimian integrates IOTA into INCUCAI, Argentina’s national organ donation and transplantation system. By issuing digital identities and notarizing documents on IOTA, the solution enhances transparency, security, and trust in this life-saving process.',
    },
    highlights: [
        {
            icon: <RegulatedCoin />,
            title: 'Government Anchor',
            body: 'INCUCAI, under Argentina’s Ministry of Health, serves as the root trust authority.',
        },
        {
            icon: <IotaIdentity />,
            title: 'Organizational Identities',
            body: '25 provincial procurement agencies gain official IOTA-based identities.',
        },
        {
            icon: <DecentralizedDigitalIdentities />,
            title: 'Employee Verification',
            body: 'Medical staff receive employment credentials tied to INCUCAI or provincial identities.',
        },
        {
            icon: <Daos />,
            title: 'Patient Inclusion',
            body: 'Patients are issued private, privacy-preserving digital identities.',
        },
        {
            icon: <EnhancedSecurity />,
            title: 'Tamper-Proof Records',
            body: 'Every fully signed medical document is notarized on the IOTA Mainnet.',
        },
        {
            icon: <IotaSmartContractChains />,
            title: 'On-Chain Trust List',
            body: 'IOTA Hierarchies record trusted institutions and their roles in the ecosystem.',
        },
    ],
};

export const SHOWCASE_EXTRIMIAN_METADATA: PageMetadataProps = {
    title: 'Extrimian - Trusted identities for life-saving healthcare | IOTA Technology Showcase',
    description:
        'Extrimian and INCUCAI use IOTA to issue secure digital identities and notarize medical records, enhancing trust and transparency in Argentina’s national organ donation system.',
    descriptionX:
        'Trusted healthcare identities on IOTA: Extrimian and INCUCAI enhance transparency in Argentina’s national organ donation system with secure, verifiable records.',
    image: '/metadata/meta_image_showcases_extrimian.png',
    keywords: [
        'IOTA',
        'Extrimian',
        'INCUCAI',
        'digital identity',
        'healthcare identity',
        'organ donation',
        'Argentina healthcare',
        'medical credentialing',
        'document notarization',
        'on-chain trust',
        'tamper-proof records',
        'Ministry of Health',
        'decentralized healthcare solutions',
    ],
    url: `${BASE_URL}/learn/showcases/extrimian`,
};

export const SHOWCASE_EXTRIMIAN: ShowcasePage = {
    category: ShowcaseCategory.RealWorldAdoption,
    card: {
        title: 'Extrimian',
        subtitle: 'Trusted Identities for Life-Saving Healthcare',
        image: '/learn/showcases/explore-more/extrimian.png',
        category: ['Digital Identity'],
    },
    metadata: SHOWCASE_EXTRIMIAN_METADATA,
    projectLinks: PROJECTS_LINKS_EXTRIMIAN,
    exploreMore: EXPLORE_MORE_SHOWCASES_EXTRIMIAN,
    frame: FRAME_SHOW_CASE_DATA_EXTRIMIAN,
};
