import { EnhnacedFeatures, IotaToken, UniversalCompatibility } from '@repo/icons';
import { TitleTextSize } from 'react-ui-kit';

export const WHY_IOTA_VERTICAL_TITLE = {
    title: 'Why IOTA?',
    subtitle: 'Your trusted partner for scalable identity solutions',
    body: 'Backed by a proven track record with governments and top organizations, IOTA enables builders to create scalable, secure identity solutions. Our best-in-class protocol, aligned with global standards, ensures cost-effective tools for the modern digital economy.',
    size: TitleTextSize.Small,
};

export const WHY_IOTA_ICON_CONTENT = [
    {
        icon: <IotaToken />,
        title: 'Proven Team of Experts',
        body: 'Since 2018, the IOTA Foundation has led digital identity innovation, delivering SDKs, applications, and solutions. A finalist in the European Blockchain Pre-Commercial Procurement, IOTA aligns with regulations, industry standards, and global stakeholders.',
    },
    {
        icon: <EnhnacedFeatures />,
        title: 'Best-in-Class Tech Stack',
        body: 'IOTA Identity leverages industry-wide standards like W3C and is anchored on the fully decentralized, high-performance IOTA Mainnet. With unmatched capacity, fast processing time, and consistent low fees, it ensures cost-efficient and scalable identity solutions.',
    },
    {
        icon: <UniversalCompatibility />,
        title: 'Innovation Across Industries',
        body: "Combining cutting-edge tech with W3C-compliant SSI frameworks, IOTA Identity enables builders to create privacy-first, interoperable solutions. Flexible and compatible, it's the perfect foundation for trusted, scalable digital identity applications across any industry.",
    },
];
