import { Staking, Flexibility, DeveloperFriendly, BuiltWithPartners } from '@repo/icons';
import { TitleTextSize } from 'react-ui-kit';

export const DECENTRALIZED_TITLE_CONTAINER = {
    title: 'IOTA Technology Stack',
    size: TitleTextSize.ExtraSmall,
};

export const DECENTRALIZED_CONTAINER_CONTENT = [
    {
        icon: <Staking />,
        text: 'Core Tech',
        anchorLinks: [
            {
                text: 'IOTA EVM',
                link: '/products/evm',
                isExternal: false,
            },
        ],
    },
    {
        icon: <Flexibility />,
        text: 'Trust Framework',
        anchorLinks: [
            {
                text: 'IOTA Tokenization',
                link: 'docs.iota.org/developer/advanced/asset-tokenization',
                isExternal: true,
            },
        ],
    },
    {
        icon: <DeveloperFriendly />,
        text: 'Tooling',
        anchorLinks: [
            {
                text: 'IOTA Explorer',
                link: 'https://explorer.iota.org',
                isExternal: true,
            },
            {
                text: 'IOTA Identity SDK',
                link: 'https://docs.iota.org/iota-identity/getting-started/rust',
                isExternal: true,
            },
            {
                text: 'IOTA EVM Bridge',
                link: 'https://evm-bridge.iota.org',
                isExternal: true,
            },
        ],
    },
    {
        icon: <BuiltWithPartners />,
        text: 'Showcases',
        anchorLinks: [
            {
                text: 'TWIN',
                link: '/learn/showcases/twin',
                isExternal: false,
            },
        ],
    },
];
