# IOTA Identity

> IOTA Identity is the decentralized identity protocol that puts individuals and organizations in control of their data. Built for security, privacy, and interoperability on the IOTA Mainnet.

**Canonical URL:** https://iota.org/products/identity
**Last updated:** 2026-02-27

## Overview

IOTA Identity empowers secure, private, and decentralized digital interactions. It provides a framework for creating verifiable, tamper-proof identities while keeping personal and sensitive data off-chain.

IOTA Identity combines W3C identity standards with the scalable execution environment of the IOTA network. Identity state and cryptographic verification material are anchored on a public ledger, while credentials and personal data remain under the control of their holders.

## The Problem IOTA Identity Solves

Digital trust requires two guarantees:

- **Data integrity**: ensuring information has not been altered
- **Data authenticity**: ensuring claims originate from a verifiable source

Traditional centralized identity systems rely on gatekeepers, concentrate sensitive data in centralized databases, and create single points of failure. IOTA Identity replaces these intermediaries with cryptographic proofs anchored on public infrastructure.

## How It Works: One Framework, Any Identity

IOTA Identity acts as a unifying layer of trust between everyone and everything. It supports identities for people, organizations, and devices. Three key roles define identity interactions:

### Holders

Owners of digital identities who maintain full control over their data. Holders decide what information to share, how much to share, and with whom, ensuring complete autonomy and privacy.

### Issuers

Trusted entities or authorities that create and provide credentials to holders. Credentials can include identity cards, health records, diplomas, certifications, or any other document type.

### Verifiers

Third parties that need to confirm the authenticity of a holder's data. They can validate any type of information: identity, age, qualifications, or other credentials.

## Core Identity Concepts

### Decentralized Identifiers (DIDs)

Unique, globally resolvable identifiers controlled by their subjects. DID Documents define how an identity can be authenticated and interacted with. Based on the W3C DID standard.

### Verifiable Credentials (VCs)

Digital certificates or passports with cryptographic verifiability. Issuers make cryptographically verifiable claims about a subject. Holders retain control over when and how claims are shared. Credentials are exchanged off-chain; cryptographic proofs are anchored on-chain.

### Verifiable Presentations (VPs)

Allow holders to present one or more credentials in response to a verifier's request. Holders disclose only the information required for a specific interaction.

## Key Capabilities

### Self-Sovereign Identity

Users create and control their digital identities without relying on third parties to store or control personal information.

### Privacy-Centric Design

Eliminates traditional data harvesting, usernames, and passwords. Users maintain full control over their data, selectively sharing only necessary information.

### Ready for Real-World Use

Enables verifiable credentials for both digital and real-world interactions. Ensures compliance and integrates seamlessly with mobile wallets.

## Privacy and Selective Disclosure

### SD-JWT Selective Disclosure

Issuers define which fields can be selectively disclosed. Cryptographic hashes and optional decoy values protect concealed data. Aligned with the eIDAS 2.0 Architecture Reference Framework.

### Zero-Knowledge Selective Disclosure

Developed in collaboration with the LINKS Foundation. Allows holders to construct proofs dynamically without issuers predefining disclosable attributes. Minimizes linkability and maximizes user privacy.

## Post-Quantum Readiness

IOTA Identity supports post-quantum and hybrid signatures for Verifiable Credentials, developed in collaboration with the LINKS Foundation. Hybrid signatures combine classical and post-quantum algorithms for gradual adoption while maintaining compatibility with existing systems.

## Real-World Applications

- **Finance**: KYC processes, digital signatures, fraud prevention
- **Supply Chain**: provenance, certifications, audit trails
- **Healthcare**: secure records and privacy-preserving data sharing
- **IoT and Smart Infrastructure**: device authentication and trusted communication
- **Governments and Enterprises**: e-government services and corporate identity management

## Identity for Organizations

IOTA Identity enables verifiable credentials for KYC/AML processes, simplifying onboarding, reducing operational costs, and building trust. Decentralized identities enable fraud-resistant document signing without reliance on centralized platforms.

## Identity for Things

Devices, sensors, and physical assets can have digital twins: verifiable digital representations with information about authenticity, ownership, history, and state. Supports machine-to-machine communication in logistics, manufacturing, and smart infrastructure.

## Position in Trust Framework

IOTA Identity is a core component of the IOTA Trust Framework. It provides the identity and credential layer upon which other trust primitives build.

## Docs and Contact

- Documentation: https://docs.iota.org/iota-identity
- Partnership inquiries: partnerships@iota.org
