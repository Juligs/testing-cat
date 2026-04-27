# IOTA Consensus

> IOTA uses delegated Proof-of-Stake with independent validators to ensure security, reliability, and high-speed transactions. The current mainnet protocol is Mysticeti.

**Canonical URL:** https://iota.org/learn/consensus
**Last updated:** 2026-02-27

## Overview

IOTA's consensus mechanism ensures security and reliability for applications built on the network. The network uses delegated Proof-of-Stake (dPoS) with independent validators.

## Delegated Proof-of-Stake

IOTA uses delegated Proof-of-Stake with independent validators to prevent double-spending and enhance transaction reliability. Token holders can stake their IOTA tokens by delegating to a trusted validator, increasing the commitment to consensus across the network.

### Key Properties

- **Low latency**: quick confirmations through efficient consensus progress
- **High throughput**: scalable parallel processing
- **Fast finality**: quick irreversible confirmation
- **Energy efficient**: BFT consensus without proof-of-work compute costs
- **Secure and decentralized**: honest-majority validator security model

## Mysticeti: Current Mainnet Protocol

Mysticeti is the BFT consensus protocol currently running on IOTA Mainnet. It is optimized for low latency and high throughput, using a DAG structure to enable parallel block production with strong security guarantees.

### Mysticeti Features

- **Parallel block proposals**: multiple validators propose simultaneously to maximize bandwidth and improve censorship resistance
- **Optimized voting**: parallel certification reduces median and tail latency
- **Three-round finality**: blocks finalize in three rounds of communication
- **Fault tolerance**: resilient even if some validators are offline or faulty

The Mysticeti whitepaper is published at: https://arxiv.org/pdf/2310.14821

## Starfish: Next Consensus Protocol (Testnet)

Starfish is the next-generation consensus protocol currently on testnet. It keeps IOTA robust under real-world network conditions, designed to be resilient in challenging environments.

## Security Features

### Transaction Authentication

Authentication features provide security against unauthorized access to on-chain data.

### Checkpoint Verification

Checkpoints ensure accuracy with cryptographic hashes and validator signatures.

### Cryptography in Smart Contracts

On-chain cryptography keeps smart contract transactions secure across all execution paths.

## Validator Network

The IOTA network supports up to 150 validators. Validators process and execute transactions, securing the network. Token holders delegate stake to validators to participate in consensus and earn staking rewards.
