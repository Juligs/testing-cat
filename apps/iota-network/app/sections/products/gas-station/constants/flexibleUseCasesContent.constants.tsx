import { CircularEconomy, GasFees, SelfSponsorship } from '@repo/icons';
import { TitleTextSize } from 'react-ui-kit';

export const FLEXIBLE_USE_CASES_VERTICAL_TITLE = {
    title: 'Flexible Use Cases',
    subtitle: 'Adaptable sponsorship models for any scale',
    body: 'IOTA Gas Station offers sponsorship models suited for everything from individual dApps to large-scale ecosystems. Enhance user adoption while efficiently managing costs.',
    size: TitleTextSize.Small,
};

export const FLEXIBLE_USE_CASES_ICON_CONTENT = [
    {
        icon: <GasFees />,
        title: 'Single-dApp Sponsorship',
        body: 'Projects can sponsor transaction fees for their users, ensuring a frictionless experience within a specific application.',
    },
    {
        icon: <SelfSponsorship />,
        title: 'Paid Gas Service',
        body: 'Entrepreneurs can offer sponsorship as a service for businesses struggling with managing gas fees, offering subscription or pay-per-use pricing.',
    },
    {
        icon: <CircularEconomy />,
        title: 'Ecosystem and Validator Model',
        body: 'Enterprises and validators can reinvest rewards to sponsor transactions, creating a self-sustaining ecosystem for large-scale use cases.',
    },
];
