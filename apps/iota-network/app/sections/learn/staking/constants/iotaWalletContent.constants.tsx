import { ButtonVariant, TitleTextSize } from 'react-ui-kit';
import { IOTA_WALLET_LINK } from '@repo/shared/constants';

export const IOTA_WALLET_VERTICAL_TITLE_CONTENT = {
    title: 'IOTA Wallet',
    subtitle: 'Manage your stake and track your rewards',
    body: 'The IOTA Wallet browser extension has everything you need to start and manage your staking on IOTA. Effortlessly track your rewards and un-stake whenever you need with no lock-up period.',
    size: TitleTextSize.Small,
};

export const IOTA_WALLET_BUTTONS = [
    {
        text: 'Get the wallet',
        link: IOTA_WALLET_LINK,
        variant: ButtonVariant.Primary,
    },
    {
        text: 'Learn more',
        link: 'https://docs.iota.org/about-iota/iota-wallet/getting-started',
        variant: ButtonVariant.Secondary,
    },
];
