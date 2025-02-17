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
    title: "Scalable Solutions for Europe's Blockchain Future",
    body: "The IOTA Foundation has completed the European Blockchain Pre-Commercial Procurement (PCP). Funded by the European Commission, it aims to design new DLT solutions for Europe. We've developed product solutions and demonstrated scalability and sustainability.",
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
        body: 'within IOTA networks plus integration with other platforms via industry-standard interfaces and connectors. Meanwhile, organizations can tailor our solution to their public or private needs.',
    },
    {
        icon: <SustainabilityScalabilityAndTransparency />,
        title: 'Sustainability, Scalability, and Transparency',
        body: "enabled with high throughput and predictable consumption, while IOTA's open-source code repositories guarantee accountability and verifiability.",
    },
    {
        icon: <Prototypes />,
        title: 'Protoypes',
        body: 'for Digital Product Passports (DPPs) and Intellectual Property Rights Management.',
    },
    {
        icon: <RegulatoryCompliance />,
        title: 'Regulatory Compliance',
        body: 'with W3C, GS1, and regulations like GDPR, prioritizing compliance while preserving data utility.',
    },
    {
        icon: <Tokenization />,
        title: 'Tokenization',
        body: "in DPP prototypes developed for the PCP to digitize assets, incentivize sustainable actions, and create a transparent digital narrative of a product's lifecycle through NFTs.",
    },
];
