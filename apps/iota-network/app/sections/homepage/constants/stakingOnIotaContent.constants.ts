import { ButtonVariant } from 'react-ui-kit';

export const STAKING_ON_IOTA_VERTICAL_TITLE = {
    title: 'Staking on IOTA',
    subtitle: 'Help secure the network while earning',
    body: 'Flexible staking not only secures the IOTA network but also provides rewards, allowing you to grow your assets while contributing to the strength and stability of the ecosystem.',
};

export const STAKING_ON_IOTA_BUTTONS = [
    {
        text: 'Start staking',
        link: 'https://docs.iota.org/about-iota/iota-wallet/how-to/stake',
        ariaLabel: 'Go to the documentation',
        isExternal: true,
    },
    {
        text: 'Learn more',
        link: '/learn/staking',
        variant: ButtonVariant.Secondary,
        ariaLabel: 'go to the page',
    },
];
