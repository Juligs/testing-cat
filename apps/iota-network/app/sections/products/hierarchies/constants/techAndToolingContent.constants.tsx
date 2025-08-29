import { TrustSchemas, ClientLibraries, IotaIdentity, SelectiveDisclosure } from '@repo/icons';
import { TitleTextSize } from 'react-ui-kit';

export const TECH_AND_TOOLING_VERTICAL_TITLE = {
    title: 'Tech & Tooling',
    subtitle: 'Built for Developers and Solution Providers',
    body: 'IOTA Hierarchies provides free and open-source tools to model, delegate, and validate trust, using smart contracts, libraries, and composable APIs.',
    size: TitleTextSize.Medium,
};

export const TECH_AND_TOOLING_ICON_CONTENT = [
    {
        icon: <SelectiveDisclosure />,
        title: 'On-Chain and Off-Chain Validation',
        body: 'Choose between RUST/WASM libraries based validation — enabling fast, fee-less checks or secure on-chain proofs depending on your needs.',
        link: 'https://docs.iota.org/developer/iota-hierarchies/how-tos/validation/get-accreditations',
    },
    {
        icon: <ClientLibraries />,
        title: 'Rust & WASM libraries',
        body: 'Deploy federations, manage accreditations, and verify trust using the Rust & WASM libraries.',
        link: 'https://docs.iota.org/developer/iota-hierarchies/getting-started/rust',
    },
    {
        icon: <IotaIdentity />,
        title: 'Integration with IOTA Identity and Other DID methods',
        body: 'Compatible with IOTA Identity and other decentralized identity systems – but can also run independently as a trust layer.',
        link: 'https://docs.iota.org/developer/iota-hierarchies/explanations/hierarchies-and-identity',
    },
    {
        icon: <TrustSchemas />,
        title: 'Structured Delegation with Constraints',
        body: 'Assign properties, define value constraints, and build fine-grained permission logic using customizable conditions.',
        link: 'https://docs.iota.org/developer/iota-hierarchies/how-tos/add-property',
    },
];
