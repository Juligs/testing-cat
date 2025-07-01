import {
    BlogPost,
    DecentralizedDigitalIdentities,
    Prover,
    RegulatoryCompliance,
} from '@repo/icons';
import { TitleTextSize } from 'react-ui-kit';

export const HOW_IT_WORKS_VERTICAL_TITLE_CONTENT = {
    title: 'How it Works',
    subtitle: 'Anchor and verify data with decentralized trust',
    body: 'IOTA Notarization enables transparent, tamper-proof records on a decentralized ledger. Each record is independently verifiable via a unique identifier, with flexible integration through WASM/Rust libraries or Move smart contracts – ensuring trust without centralized control.',
    size: TitleTextSize.Small,
};
export const HOW_IT_WORKS_ICON_CONTENT = [
    {
        title: 'Original Data',
        body: 'The information to be notarized and stored on-chain or as a cryptographic hash to ensure privacy and verifiability.',
        icon: <BlogPost />,
    },
    {
        title: 'Provers',
        body: 'Data owners who submit the Original Data or its hash to the IOTA ledger, creating a notarized object with a unique Identifier to share with Verifiers.',
        icon: <Prover />,
    },
    {
        title: 'Verifiers',
        body: "Parties who use the Identifier to fetch the notarized object from the ledger and confirm the data's authenticity and integrity.",
        icon: <DecentralizedDigitalIdentities />,
    },
    {
        title: 'Notarized Objects & Identifiers',
        body: 'On-chain entries containing original data and metadata - each with a unique ID for easy querying and verification.',
        icon: <RegulatoryCompliance />,
    },
];
