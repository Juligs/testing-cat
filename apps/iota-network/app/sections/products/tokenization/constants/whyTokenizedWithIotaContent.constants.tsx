import {
    AnyoneCanIssueAssets,
    FullControl,
    OnChainMetadata,
    RentSpaceDontBuyIt,
} from '@repo/icons';
import { TitleTextSize } from 'react-ui-kit';

export const WHY_TOKENIZED_VERTICAL_TITLE = {
    title: 'Why Tokenize with IOTA?',
    subtitle: 'Secure, customizable, and user-friendly tokenization made simple',
    body: "Tokenize with the same security as IOTA's native token. Enjoy the flexibility to define your digital assets, from supply details, issuer ID, and metadata, all with a few clicks.",
    size: TitleTextSize.Small,
};

export const WHY_TOKENIZED_ICON_CONTENT = [
    {
        icon: <FullControl />,
        title: 'Full Control',
        body: 'Issuers can customize tokenized assets during minting to meet all Real World Asset requirements.',
    },
    {
        icon: <OnChainMetadata />,
        title: 'On-Chain Metadata',
        body: 'Move supports encoding up to 256KB of data on the ledger. For larger data, dynamic structures like maps and linked lists offer flexible storage solutions.',
    },
    {
        icon: <AnyoneCanIssueAssets />,
        title: 'Anyone Can Issue Assets',
        body: 'Creating custom tokenized assets is simple, allowing anyone, including smart contract chains, to use them programmatically.',
    },
    {
        icon: <RentSpaceDontBuyIt />,
        title: "Rent Space, Don't Buy It",
        body: 'Minting assets requires a storage deposit. When the asset is destroyed and space is freed, the deposit is fully reclaimed.',
    },
];
