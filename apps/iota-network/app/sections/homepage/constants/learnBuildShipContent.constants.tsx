import { SmallCtaCard } from '@components/small-CTA-card/SmallCtaCard';
import { Button, ButtonVariant, HighlightCard, TitleTextSize, VerticalTitle } from 'react-ui-kit';

type LearnBuildCtaItem = React.ComponentProps<typeof SmallCtaCard> & {
    link: string;
    isExternal?: boolean;
};

type LearnHighlightContent = React.ComponentProps<typeof HighlightCard> & {
    link: string;
};

type ButtonsContent = React.ComponentProps<typeof Button> & {
    link: string;
};
export const LEARN_BUILD_VERTICAL_TITLE: React.ComponentProps<typeof VerticalTitle> = {
    title: 'Learn. Build. Ship.',
    subtitle: 'IOTA Workshop Series',
    body: 'Practical learning. Real-world use cases. Built for builders of every skill level.',
    size: TitleTextSize.Small,
};

export const LEARN_BUILD_BUTTONS: ButtonsContent[] = [
    {
        text: 'Get started',
        link: 'https://docs.iota.org/developer/workshops/core/I-introduction-to-smart-contracts',
        variant: ButtonVariant.Primary,
    },
    {
        text: 'Explore Series',
        link: 'https://docs.iota.org/developer/workshops/',
        variant: ButtonVariant.Secondary,
    },
];

export const LEARN_BUILD_CTA_CONTENT: LearnBuildCtaItem[] = [
    {
        image: '/build/workshop-series/event-teaser/community_events.png',
        title: 'Attend Community Events',
        subtitle: 'Take part in IOTA workshops, hackathons, and meetups.',
        link: '/connect/events',
        isExternal: false,
    },
    {
        image: '/homepage/join_discord.png',
        title: 'Join Our Builder  Discord',
        subtitle: 'Collaborate with builders and innovators worldwide.',
        link: 'https://discord.com/invite/iota-builders',
        isExternal: true,
    },
];
export const LEARN_BUILD_HIGHLIGHT_CONTENT: LearnHighlightContent[] = [
    {
        overline: 'Core Workshop 01',
        title: 'Init and Deploy a Grants package',
        body: 'Publish, authorize, mint, and verify — implement a core Move function as part of a hands-on package publish on IOTA.',
        backgroundImage: '/build/workshop-series/modules/init_and_deploy.png',
        link: 'https://docs.iota.org/developer/workshops/core/I-introduction-to-smart-contracts',
    },
    {
        overline: 'Core Workshop 02',
        title: 'Coordination with Shared Objects, Dynamic Fields & PTBs',
        body: 'Create a shared Registry, index student-to-grant IDs, and compose an atomic Programmable Transaction Block (PTB) that mints and indexes in one go.',
        backgroundImage: '/build/workshop-series/modules/coordination.png',
        link: 'https://docs.iota.org/developer/workshops/core/II-shared-objects-dynamic-fields-ptbs',
    },
];
