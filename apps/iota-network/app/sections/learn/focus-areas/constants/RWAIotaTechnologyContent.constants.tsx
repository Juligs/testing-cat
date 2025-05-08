import { Staking, Flexibility, DeveloperFriendly, BuiltWithPartners } from '@repo/icons';
import { TitleTextSize } from 'react-ui-kit';

export const RWA_STACK_TITLE_CONTAINER = {
    title: 'IOTA Technology Stack',
    size: TitleTextSize.ExtraSmall,
};

export const RWA_STACK_CONTAINER_CONTENT = [
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
                link: 'https://docs.iota.org/iota-identity',
                isExternal: true,
            },
        ],
    },
    {
        icon: <BuiltWithPartners />,
        text: 'Showcases',
        anchorLinks: [
            {
                text: 'Realize',
                link: '/learn/showcases/realize',
                isExternal: false,
            },
            {
                text: 'Tokenized KYC',
                link: '/learn/showcases/kyc',
                isExternal: false,
            },
        ],
    },
];
