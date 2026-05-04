import {
    HighProductivity,
    MagicSmartContracts,
    ProtocolAgnosticDesign,
    Prototypes,
    SecureAndEfficientTransactions,
    TargetedSpendingDefinedByIssuingCompanyOrMunicipality,
    TokenizationOfElectronicDocuments,
    W3ConformingDecentralizedIdentifiers,
} from '@repo/icons';
import { TitleTextSize } from 'react-ui-kit';

export const KEY_TOPICS_VERTICAL_TITLE_CONTENT = {
    title: 'Key Focus Areas',
    body: 'Beyond the Chain sparks discussions among researchers, developers, and policymakers to evaluate current challenges and propose cutting-edge solutions. Here are some of the key areas and topics',
    size: TitleTextSize.Small,
};

export const KEY_TOPICS_ICON_CONTENT = [
    {
        icon: <W3ConformingDecentralizedIdentifiers />,
        title: 'Applications of zero-knowledge proofs and decentralized identities',
    },
    {
        icon: <SecureAndEfficientTransactions />,
        title: 'Parallel execution and dependency tracking of smart contract transactions',
    },
    {
        icon: <TokenizationOfElectronicDocuments />,
        title: 'Maximum Extractable Value and its implications for fairness and robustness',
    },
    {
        icon: <HighProductivity />,
        title: 'Formal descriptions, security analysis, and performance evaluation',
    },
    {
        icon: <MagicSmartContracts />,
        title: 'Writing access models and mitigation of centralization effects in DLTs',
    },
    {
        icon: <ProtocolAgnosticDesign />,
        title: 'Interoperability, standardization, and integration of DLTs',
    },
    {
        icon: <TargetedSpendingDefinedByIssuingCompanyOrMunicipality />,
        title: 'Transaction fee mechanisms in DAG-based DLTs',
    },
    {
        icon: <Prototypes />,
        title: 'Practical applications of DAG-based DLTs in various domains',
    },
];
