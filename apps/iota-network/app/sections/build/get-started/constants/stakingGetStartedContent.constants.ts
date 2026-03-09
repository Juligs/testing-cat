import { HorizontalTitle, ImageCard, TitleTextSize } from 'react-ui-kit';

export const STAKING_GET_STARTED_TITLE: React.ComponentProps<typeof HorizontalTitle> = {
    title: 'Tapping into the next wave of onchain markets',
    subtitle:
        'IOTA powers emerging sectors where blockchain can make a real difference – supply chains, energy, mobility, digital identity, and more',
    size: TitleTextSize.Small,
};

export const STAKING_GET_STARTED_CONTENT: (React.ComponentProps<typeof ImageCard> & {
    link: string;
})[] = [
    {
        title: 'Explore Case Studies',
        subtitle: 'See how ideas became real-world success',
        link: '/learn/showcases',
        image: '/build/get-started/staking/showcases.png',
    },
    {
        title: 'See Real-World Deployments',
        subtitle: 'Experience IOTA technology in action today',
        link: '/connect/our-community',
        image: '/build/get-started/staking/real_world.png',
    },
];
