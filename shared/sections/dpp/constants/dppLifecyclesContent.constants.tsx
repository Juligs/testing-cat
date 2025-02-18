import {
    IotaIdentity,
    RegulatoryAndTechnicalCompliance,
    RegulatoryCompliance,
    SeamlessIntegrationWithWeb3,
    SmartContract,
    W3ConformingVerifiableCredentials,
} from '@repo/icons';
import { TitleTextSize } from 'react-ui-kit';

export const DPP_SCALABLE_VERTICAL_TITLE_CONTENT = {
    title: 'Tracing Product Lifecycles',
    subtitle: 'Support a circular economy with IOTA-powered DPPs',
    body: "Digital Product Passports carry product information for recycling, reuse, and repair, reducing waste, extending product lifecycles, and ensuring compliance with environmental regulations. As part of the European Blockchain PCP, we've developed DPP prototype solutions for plastic and electronic goods.",
    size: TitleTextSize.Small,
};

export const DPP_SCALABLE_ICON_CONTENT = [
    {
        icon: <RegulatoryCompliance />,
        title: 'Notarization',
        body: 'records and guarantees data immutably via the distributed ledger, and verifies product-related data and documents.',
    },
    {
        icon: <IotaIdentity />,
        title: 'IOTA Identity',
        body: 'handles the registration and management of Decentralized Identifiers, as well as the issuance and verification of Verifiable Credentials.',
    },
    {
        icon: <SmartContract />,
        title: 'Smart Contracts',
        body: 'manage lifecycle events, providing a transparent and auditable trail.',
    },
    {
        icon: <W3ConformingVerifiableCredentials />,
        title: 'Verifiable Credential Attribute-Based Access Control Oracle',
        body: 'provides secure and authorized updates of Verifiable Credentials.',
    },
    {
        icon: <SeamlessIntegrationWithWeb3 />,
        title: 'Auditable Item Graph',
        body: 'enables object traceability and composability by capturing digital twins of physical or digital objects.',
    },
    {
        icon: <RegulatoryAndTechnicalCompliance />,
        title: 'Regulatory and Technical Compliance',
        body: 'ensuring adherence to EU regulations, environmental and technical standards such as Gaia-X and GS1.',
    },
];
