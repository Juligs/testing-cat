import {
    ArrowTopRight,
    EnhancedSecurity,
    HighProductivity,
    IotaDnsResolver,
    Speed,
    SustainabilityScalabilityAndTransparency,
} from '@repo/icons';
import { Button, ButtonVariant, IconContent, VerticalTitle } from 'react-ui-kit';

export const DECENTRALIZED_CONSENSUS_VERTICAL_TITLE: React.ComponentProps<typeof VerticalTitle> = {
    title: 'A decentralized consensus you can build on',
    subtitle: 'Low Latency, High Throughput and Fast Finality',
    body: 'IOTA’s delegated Proof-of-Stake with independent validators prevents double-spending and enhances transaction reliability. Stakers can indirectly validate by delegating stake to a trusted validator, increasing the commitment to consensus across the network.',
};
export const CONSENSUS_KEY_FUTURES_ICON_CONTENT: React.ComponentProps<typeof IconContent>[] = [
    {
        icon: <IotaDnsResolver />,
        title: 'Low latency',
        body: 'quick confirmations through efficient consensus progress',
    },
    {
        icon: <HighProductivity />,
        title: 'High throughput',
        body: 'scalable parallel processing',
    },
    {
        icon: <Speed />,
        title: 'Fast finality',
        body: 'quick irreversible confirmation',
    },
    {
        icon: <SustainabilityScalabilityAndTransparency />,
        title: 'Energy efficient',
        body: 'BFT consensus without PoW compute costs',
    },
    {
        icon: <EnhancedSecurity />,
        title: 'Secure & decentralized',
        body: 'honest-majority validator security model',
    },
];

export const DECENTRALIZED_BUTTONS: (React.ComponentProps<typeof Button> & {
    link: string;
    isExternal?: boolean;
})[] = [
    {
        text: 'Learn more',
        link: 'https://docs.iota.org/about-iota/iota-architecture/consensus',
        variant: ButtonVariant.Primary,
        icon: <ArrowTopRight />,
        isExternal: true,
    },
    {
        text: 'Get started staking',
        link: '/learn/staking',
        variant: ButtonVariant.Secondary,
    },
];
