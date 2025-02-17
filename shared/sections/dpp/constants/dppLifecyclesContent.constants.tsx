import {
    DataInsights,
    FullLifecycleTracking,
    ProtocolAgnosticDesign,
    RegulatoryAndTechnicalCompliance,
    SmartContractIntegration,
    UserFriendlyAccess,
} from '@repo/icons';
import { TitleTextSize } from 'react-ui-kit';

export const DPP_SCALABLE_VERTICAL_TITLE_CONTENT = {
    title: 'Tracing Product Lifecycles',
    subtitle: 'Support a circular economy with IOTA-powered DPPs',
    body: 'Digital Product Passports carry product information for recycling, reuse, and repair, reducing waste, extending product lifecycles, and ensuring compliance with environmental regulations. As part of the European Blockchain PCP, we’ve developed DPP prototype solutions for plastic and electronic goods.',
    size: TitleTextSize.Small,
};

export const DPP_SCALABLE_ICON_CONTENT = [
    {
        icon: <FullLifecycleTracking />,
        title: 'Full Lifecycle Tracking',
        body: 'of products and their raw materials, from production, dismantling, recycling, and repurposing to disposal.',
    },
    {
        icon: <DataInsights />,
        title: 'Data Insights',
        body: "into a product's carbon footprint and sustainability can be used to drive informed decision-making across supply chains.",
    },
    {
        icon: <RegulatoryAndTechnicalCompliance />,
        title: 'Regulatory and Technical Compliance',
        body: 'ensuring adherence to EU regulations, environmental and technical standards such as Catena-X, EDC, and AAS.',
    },
    {
        icon: <SmartContractIntegration />,
        title: 'Smart Contract Integration',
        body: "via IOTA's EVM to enhance data security and management.",
    },
    {
        icon: <UserFriendlyAccess />,
        title: 'User-Friendly Access',
        body: 'offered by web and app-based interfaces for easy access and management of product data for SMEs, OEMs, and manufacturers.',
    },
    {
        icon: <ProtocolAgnosticDesign />,
        title: 'Protocol-Agnostic Design',
        body: 'supports various blockchain protocols, with IOTA as the preferred DLT stack, ensuring flexibility and broad compatibility.',
    },
];
