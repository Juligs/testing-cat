import { DnsResolver, IotaClientCli, IotaExplorer } from '@repo/icons';

export const TOOLING_VERTICAL_TITLE = {
    title: 'Tech and Tooling',
    subtitle: 'All you need to issue and manage digital identities',
    body: 'Stable client libraries allow for creating, managing, and authenticating digital identities and sharing verifiable credentials. Based on a Rust implementation, it supports W3C DID and verifiable credential standards and methods.',
};

export const TOOLING_ICON_CONTENT = [
    {
        icon: <IotaClientCli />,
        title: 'Client Libraries',
        body: 'Rust and WASM libraries allow on-chain creation, identity management, and off-chain retrieval/resolution of identities.',
        link: 'https://docs.iota.org/iota-identity/getting-started/rust',
    },
    {
        icon: <IotaExplorer />,
        title: 'IOTA Universal Resolver',
        body: 'The IOTA Universal Resolver supports the did:iota method, enabling smooth resolution of Decentralized Identifiers across the network. Aligned with W3C standards, it ensures interoperability and simplifies self-sovereign identity management.',
        link: 'https://docs.iota.org/iota-identity/getting-started/universal-resolver',
    },
    {
        icon: <DnsResolver />,
        title: 'Domain Linkage',
        body: 'Domain Linkage connects Decentralized Identifiers to public domains, proving both are controlled by the same entity. This enables trust transfer and verification of credentials.',
        link: 'https://docs.iota.org/iota-identity/how-tos/domain-linkage/create-and-verify',
    },
];
