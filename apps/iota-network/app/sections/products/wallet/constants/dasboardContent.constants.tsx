import { Interoperability, Staking, StardustMigrationSupport, TimelockSupport } from '@repo/icons';
import { ButtonVariant, TitleTextSize } from 'react-ui-kit';

export const DASHBOARD_VERTICAL_TITLE_CONTENT = {
    title: 'Connect to the IOTA Wallet Dashboard',
    subtitle: 'Your hub for managing, transferring, staking, and migrating assets with ease',
    body: 'The Dashboard dApp includes all the features of the IOTA wallet browser extension, with added capabilities like migration and time-lock support.',
    size: TitleTextSize.Small,
    inverted: true,
};

export const DASHBOARD_ICON_CONTENT = [
    {
        icon: <Staking />,
        title: 'Staking',
        body: 'Stake your IOTA tokens to earn rewards while helping secure the network.',
        link: 'https://docs.iota.org/about-iota/iota-wallet-dashboard/how-to/stake',
    },
    {
        icon: <Interoperability />,
        title: 'Wallet Switcher',
        body: 'Seamlessly switch between multiple wallets with ease.',
        link: 'https://docs.iota.org/about-iota/iota-wallet-dashboard/getting-started',
    },
    {
        icon: <StardustMigrationSupport />,
        title: 'Stardust Migration Support',
        body: 'Conveniently migrate your assets form the Stardust ledger.',
        link: 'https://docs.iota.org/about-iota/iota-wallet-dashboard/how-to/migration',
    },
    {
        icon: <TimelockSupport />,
        title: 'Timelock Support',
        body: 'Track vesting schedules, access rewards, and manage timelocked (vested) staking for optimal fund delegation.',
        link: 'https://docs.iota.org/about-iota/iota-wallet-dashboard/how-to/vesting',
    },
];

export const DASHBOARD_BUTTONS = [
    {
        text: 'Connect',
        link: 'https://wallet-dashboard.iota.org/',
        variant: ButtonVariant.Primary,
    },
    {
        text: 'Learn more',
        link: 'https://docs.iota.org/about-iota/iota-wallet-dashboard/getting-started',
        variant: ButtonVariant.Secondary,
    },
];
