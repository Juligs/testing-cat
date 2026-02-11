import { HorizontalTitle, ImageCard, TitleTextSize } from 'react-ui-kit';

export const RESISTANT_HORIZONTAL_TITLE: React.ComponentProps<typeof HorizontalTitle> = {
    title: 'Resistant Against External Threats',
    subtitle:
        'Best-in class security measures prevent ledger manipulation and attempts to disrupt the network',
    size: TitleTextSize.ExtraSmall,
};

export const RESISTANT_IMAGE_CARD_CONTENT: (React.ComponentProps<typeof ImageCard> & {
    link: string;
})[] = [
    {
        title: 'Transaction Authentication',
        subtitle:
            'Authentication features provide security against unauthorized access to on-chain data.',
        image: '/learn/consensus/resistant-against/transaction_authentication.png',
        link: 'https://docs.iota.org/developer/cryptography/transaction-auth',
    },
    {
        title: 'Checkpoint Verification',
        subtitle: 'Checkpoints ensure accuracy with cryptographic hashes and validator signatures.',
        image: '/shared/mainnet_utilization.png',
        link: 'https://docs.iota.org/developer/cryptography/checkpoint-verification',
    },
    {
        title: 'Cryptography in Smart Contracts',
        subtitle: 'Cryptography keeps your smart contract transactions secure.',
        image: '/shared/functional_representation.png',
        link: 'https://docs.iota.org/developer/cryptography/on-chain',
    },
];
