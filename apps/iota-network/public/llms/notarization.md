# IOTA Notarization

> IOTA Notarization creates verifiable, immutable, and privacy-respecting records on-chain. A flexible framework for tamper-proof data anchoring across industries.

**Canonical URL:** https://iota.org/products/notarization
**Last updated:** 2026-02-27

## Overview

IOTA Notarization enables transparent, tamper-proof records on a decentralized ledger. It allows data owners to anchor, update, and verify data on-chain using flexible methods that fit their use case.

Each notarized record is independently verifiable via a unique identifier. Integration is available through WASM/Rust libraries or Move smart contracts, ensuring trust without centralized control.

## How It Works

IOTA Notarization involves four core elements:

### Original Data

The information to be notarized and stored on-chain, or as a cryptographic hash to ensure privacy and verifiability.

### Provers

Data owners who submit the Original Data or its hash to the IOTA ledger, creating a notarized object with a unique Identifier to share with Verifiers.

### Verifiers

Parties who use the Identifier to fetch the notarized object from the ledger and confirm the data's authenticity and integrity.

### Notarized Objects and Identifiers

On-chain entries containing original data and metadata. Each has a unique ID for easy querying and verification. Records are updatable for evolving data like product lifecycle events.

## Data Visibility Options

Three levels of data storage to match transparency and confidentiality requirements:

### Clear-Text Data

Readable data stored on-chain for full transparency. Ideal for open use cases like digital product passports or sustainability claims.

### Encrypted Data

On-chain encryption meets off-chain key management. Ensures redundancy and availability while protecting the content.

### Digital Fingerprint

Only the hash is stored on-chain, with content off-chain for maximum confidentiality. Ideal for sensitive personal or business records.

## Real-World Use Cases

### Legal and Regulatory Compliance

Anchor court documents, contracts, and filings on-chain. Ensure they are immutable and publicly verifiable.

### Credentials and Certifications

Secure academic degrees, professional licenses, and training records with immutable, independently verifiable proofs.

### Ownership and IP Protection

Prove authorship, rights, and existence of patents, digital works, or property deeds with immutable timestamps.

### Digital Product Passports and Supply Chains

Capture product lifecycle events with updatable records for traceability, sustainability, and provenance.

### Public Registries and Digital Twins

Create live, shareable representations of assets like vehicles, permits, or public records with verifiable history and metadata.

### IoT and Real-Time Systems

Record continuous device and sensor updates on-chain for trusted real-time automation, monitoring, and auditability.

## Integration

IOTA Notarization integrates via:

- WASM/Rust libraries for off-chain integration
- Move smart contracts for on-chain automation
- REST APIs for standard application integration

## Position in Trust Framework

IOTA Notarization is a core component of the IOTA Trust Framework. It provides the data integrity layer for applications requiring tamper-proof records.

## Docs and Contact

- Documentation: https://docs.iota.org/developer/iota-notarization/
- Partnership inquiries: partnerships@iota.org
