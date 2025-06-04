import { TitleTextSize } from 'react-ui-kit';

export const TOKENOMICS_HORIZONTAL_TITLE = {
    title: 'Key Players in the IOTA Economy',
    subtitle:
        'The IOTA economy consists of three main participants, each playing a vital role in the ecosystem:',
    size: TitleTextSize.Medium,
};

export const TOKENOMICS_IMAGE_CARD_CONTENT = [
    {
        title: 'Users',
        body: 'submit transactions to create, modify, and transfer digital assets, or interact with dApps enabled by smart contracts.',
        image: '/shared/users.png',
    },
    {
        title: 'IOTA Token Holders',
        body: 'can stake their tokens to validators, participating in the proof-of-stake consensus',
        image: '/shared/iota_tokens.png',
    },
    {
        title: 'Validators',
        body: "process and execute transactions on the IOTA platform, ensuring the network's security and efficiency.",
        image: '/shared/validators.png',
    },
];
