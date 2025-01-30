import {
    CohesiveDataManagement,
    InteroperabilityAndCustomizability,
    Prototypes,
    RegulatoryCompliance,
    SustainabilityScalabilityAndTransparency,
    Tokenization,
} from '@repo/icons';
import { TitleTextSize } from 'react-ui-kit';

export const EBSI_SCALABLE_VERTICAL_TITLE_CONTENT = {
    title: 'Scalable Solutions for Europe’s Blockchain Future',
    body: 'The IOTA Foundation has completed the European Blockchain PCP, funded by the European Commission, which aims to design new DLT solutions for Europe. We’ve developed pre-commercial products and demonstrated scalability and sustainability.',
    size: TitleTextSize.Small,
};

export const EBSI_SCALABLE_ICON_CONTENT = [
    {
        icon: <CohesiveDataManagement />,
        title: 'Cohesive Data Management',
        body: 'helping the transition from data silos to data spaces, ensuring decentralized governance without compromising trust.',
    },
    {
        icon: <InteroperabilityAndCustomizability />,
        title: 'Interoperability and Customizability',
        body: 'within IOTA networks and integration with other platforms through industry-standard interfaces and connectors, while organizations can tailor the IOTA EBSI solution to their needs, whether public or private.',
    },
    {
        icon: <SustainabilityScalabilityAndTransparency />,
        title: 'Sustainability, Scalability, and Transparency',
        body: 'IOTA enables scalability with high throughput and predictable consumption, while its open-source code repositories guarantee accountability and verifiability.',
    },
    {
        icon: <Prototypes />,
        title: 'Protoypes',
        body: 'for Digital Product Passports and Intellectual Property Rights Management, expanding the original EBSI remit for identity management and credential verification.',
    },
    {
        icon: <RegulatoryCompliance />,
        title: 'Regulatory Compliance',
        body: 'with W3C, GS1, and regulations like GDPR, prioritizing compliance while preserving data utility.',
    },
    {
        icon: <Tokenization />,
        title: 'Tokenization',
        body: "used in DPP prototypes developed for the PCP to digitize assets, incentivize sustainable actions, and create a transparent and accessible digital narrative of a product's lifecycle through NFTs.",
    },
];
