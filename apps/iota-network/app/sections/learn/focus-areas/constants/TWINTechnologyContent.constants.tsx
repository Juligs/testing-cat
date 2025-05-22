import { Staking, Flexibility, DeveloperFriendly, BuiltWithPartners } from '@repo/icons';
import { TitleTextSize } from 'react-ui-kit';

export const TWIN_TITLE_CONTAINER = {
    title: 'IOTA Technology Stack',
    size: TitleTextSize.ExtraSmall,
};

export const TWIN_CONTAINER_CONTENT = [
    {
        icon: <Staking />,
        text: 'Core Tech',
        anchorLinks: [
            {
                text: 'IOTA Mainnet',
                link: '/products/mainnet',
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
                link: '/products/tokenization',
                isExternal: false,
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
