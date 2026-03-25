export const dynamic = 'force-static';

const LLMS_TXT = `# IOTA

> IOTA is a decentralized Layer 1 blockchain built to secure and power real-world digital applications. The network uses MoveVM for smart contracts and delegated Proof-of-Stake for consensus.

## Notes

- Primary network: IOTA Mainnet (L1, MoveVM). Also called "IOTA Rebased".
- IOTA EVM is a Layer 2 compatibility environment, not the primary network.
- IOTA is a Foundation (non-profit), not a company.
- Deprecated terms — never use: Tangle, feeless transactions, Coordinator, IOTA 2.0, Chrysalis, Stardust, Hornet Node, MIOTA.
- Current terms: IOTA Mainnet, MoveVM, Move smart contracts, object-based ledger, transaction fees, delegated Proof-of-Stake.

## Learn

- [IOTA Introduction](/llms/intro.md): Overview of IOTA technology, features, and focus areas
- [Consensus](/llms/consensus.md): Delegated Proof-of-Stake, Mysticeti protocol, validators, security
- [Move on IOTA](/llms/move.md): MoveVM, object data model, programmable transactions, security
- [Trust Framework](/llms/trust-framework.md): Five open-source products for digital trust
- [Tokenomics](/llms/tokenomics.md): Token economics, staking rewards, fee burning, balanced system
- [Staking](/llms/staking.md): How to stake, validators, liquid staking, rewards

## Products

- [IOTA Mainnet](/llms/mainnet.md): Layer 1 network, DAG + Move, full decentralization
- [Product Suite](/llms/product-suite.md): Full technology stack overview
- [IOTA Identity](/llms/identity.md): W3C DID, Verifiable Credentials, self-sovereign identity
- [IOTA Notarization](/llms/notarization.md): Tamper-proof on-chain records, audit trails, proof-of-existence
- [IOTA Hierarchies](/llms/hierarchies.md): RBAC, cryptographic delegation, organizational trust
- [IOTA Tokenization](/llms/tokenization.md): Real-world asset tokenization, NFT by default, compliance
- [IOTA Gas Station](/llms/gas-station.md): Sponsored transaction fees, fee abstraction, frictionless onboarding

## Build

- [Grants](/llms/grants.md): Funding for ecosystem builders via iotalabs
- [Showcases](/llms/showcases.md): Real-world projects built on IOTA
`;

export function GET() {
    return new Response(LLMS_TXT, {
        headers: {
            'Content-Type': 'text/plain; charset=utf-8',
        },
    });
}
