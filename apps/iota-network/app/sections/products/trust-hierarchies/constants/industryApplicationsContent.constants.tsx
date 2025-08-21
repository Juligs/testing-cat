import {
    ClientLibraries,
    Flexibility,
    IotaChains,
    RegulatedCoin,
    RegulatoryAndTechnicalCompliance,
} from '@repo/icons';

export const INDUSTRY_APPLICATIONS_VERTICAL_TITLE = {
    title: 'Industry Applications',
    subtitle: 'IOTA Hierarchies general-purpose design supports trusted delegation across sectors',
};

export const INDUSTRY_APPLICATION_ICONT_CONTENT = [
    {
        icon: <IotaChains />,
        title: 'Supply Chains',
        body: 'Certify products at every step with attestations issued by accredited parties, ensuring only trusted entities can validate quality and compliance.',
    },
    {
        icon: <ClientLibraries />,
        title: 'Education',
        body: 'Universities can delegate diploma issuance to departments or professors, creating verifiable, tamper-proof academic credentials.',
    },
    {
        icon: <RegulatedCoin />,
        title: 'Legal & Compliance',
        body: 'Public authorities can accredit notaries, auditors, or inspectors, establishing transparent chains of trust for legal documents and reports.',
    },
    {
        icon: <RegulatoryAndTechnicalCompliance />,
        title: 'Government',
        body: 'Enable layered governance by delegating roles from national to local authorities. Citizens can verify that permits or certificates are legitimate.',
    },
    {
        icon: <Flexibility />,
        title: 'IoT and Automation',
        body: 'Devices can verify commands and data based on accredited trust chains, supporting secure machine-to-machine interactions at scale.',
    },
];
