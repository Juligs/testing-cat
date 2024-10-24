import { ComponentProps } from 'react';
import { ImageCard } from 'react-ui-kit';

export type CardShowcase = Card & { category: string };
type Card = Omit<ComponentProps<typeof ImageCard>, 'elevated' | 'inverted' | 'size'>;

export async function fetchDataInfraSlider() {
    const MOCK_CARDS: CardShowcase[] = [
        {
            title: 'IOTA Streams',
            image: 'https://placehold.co/328x160',
            body: 'lorem ipsum',
            category: 'wallet',
        },
        {
            title: 'RPCs',
            image: 'https://placehold.co/328x160',
            body: 'lorem ipsum',
            category: 'RPCs',
        },
        {
            title: 'Bridges',
            image: 'https://placehold.co/328x160',
            body: 'lorem ipsum',
            category: 'Bridges',
        },
        {
            title: 'Bridges',
            image: 'https://placehold.co/328x160',
            body: 'lorem ipsum',
            category: 'Bridges',
        },
        {
            title: 'Bridges',
            image: 'https://placehold.co/328x160',
            body: 'lorem ipsum',
            category: 'Bridges',
        },
        {
            title: 'Bridges',
            image: 'https://placehold.co/328x160',
            body: 'lorem ipsum',
            category: 'Bridges',
        },
        {
            title: 'Bridges',
            image: 'https://placehold.co/328x160',
            body: 'lorem ipsum',
            category: 'Bridges',
        },
    ];
    return MOCK_CARDS;
}
