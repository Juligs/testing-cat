import { IOTA_WALLET_LINK } from '@repo/shared/constants';

export const START_STAKING_CTA_CONTENT = {
    title: 'Start Staking',
    subtitle: 'Begin staking in five easy steps',
    image: '/learn/staking/start_staking.png',
};

export const TEXT_LINK_CTA = [
    {
        text: 'Stake now',
        link: 'https://explorer.iota.org/validators',
    },
    {
        text: 'Get the wallet',
        link: IOTA_WALLET_LINK,
    },
];

export const START_STAKING_LIST = [
    {
        text: '1. Download the IOTA Wallet Extension',
    },
    {
        text: "2. Create your IOTA account if you haven't yet done so",
    },
    {
        text: '3. In the wallet UI, select Stake & Earn',
    },
    {
        text: '4. Select the validator and ensure the address matches',
    },
    {
        text: '5. Choose your staking amount and follow the prompts',
    },
];
