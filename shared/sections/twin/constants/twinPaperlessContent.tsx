import {
    BuiltWithPartners,
    DigitizingTradeData,
    EliminatesCostlyDelays,
    Placeholder,
    SecureAndEfficientTransactions,
    TokenizationOfElectronicDocuments,
    TwinConsortium,
} from '@repo/icons';
import { TitleTextSize } from 'react-ui-kit';

export const TWIN_PAPERLESS_TITLE_CONTENT = {
    title: 'Moving Paperless Trade Across Borders',
    body: [
        'Traditional trade lacks data transparency and traceability, hindering efficiency and trust. The Trade Worldwide Information Pipeline (TWIN) is a digital platform built on IOTA that enables global supply chain participants to share and access data instantly and securely.',
        'TWIN use cases in Africa and Europe show the potential for significant economic benefits and increased efficiency in trade.',
    ],
    size: TitleTextSize.Small,
};

export const TWIN_PAPERLESS_ICON_CONTENT = [
    {
        icon: <DigitizingTradeData />,
        title: 'Digitizing Trade Data',
        body: 'leads to an 80% reduction in transaction costs, a 50% shrink of the trade finance gap, a 35% increase in SME efficiency, and a decrease in cross-border processing times from weeks to days.',
    },
    {
        icon: <SecureAndEfficientTransactions />,
        title: 'Secure and Efficient Transactions',
        body: 'through underlying IOTA tech including the Tangle and Digital Identities.',
    },
    {
        icon: <EliminatesCostlyDelays />,
        title: 'Eliminates Costly Delays',
        body: 'by ensuring that digital trade certificates are authenticated, reducing the need for manual document storage and checks.',
    },
    {
        icon: <BuiltWithPartners />,
        title: 'Collaboration with Governments and Logistic Companies',
        body: "to customize TWIN's open-source features to suit their requirements and international operations.",
    },
    {
        icon: <TokenizationOfElectronicDocuments />,
        title: 'Tokenization of Electronic Documents',
        body: 'as NFTs, which require verified digital identities to access full documents, thus maintaining document sovereignty and security.',
    },
    {
        icon: <TwinConsortium />,
        title: 'TWIN Consortium',
        body: 'includes the IOTA Foundation, Trademark Africa, The World Economic Forum, Tony Blair Institute for Global Change, Institute of Export and International Trade, Global Alliance for Trade Facilitation.',
    },
];
