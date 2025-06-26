import { IotaClientCli, IotaClientPtbCli, IotaDappKit } from '@repo/icons';

export const CLI_CTA_CARD_CONTENT = {
    title: 'Command Line Interfaces',
    subtitle:
        'Interact directly with the IOTA network through base commands targeting specific network features',
    link: 'https://docs.iota.org/references#iota-cli',
    image: '/products/tooling/cli.png',
};

export const CLI_ICON_CONTENT = [
    {
        title: 'IOTA Client CLI',
        body: 'Effortless generate addresses, access networks, and more',
        icon: <IotaClientCli />,
        link: 'https://docs.iota.org/references/cli/client',
    },
    {
        title: 'IOTA Client PTB CLI',
        body: 'Build, dry-run, and execute programmable transaction blocks via terminal',
        icon: <IotaClientPtbCli />,
        link: 'https://docs.iota.org/references/cli/ptb',
    },
    {
        title: 'IOTA Move CLI',
        body: 'Direct on-chain access to all IOTA Move functions',
        icon: <IotaDappKit />,
        link: 'https://docs.iota.org/references/cli/move',
    },
];
