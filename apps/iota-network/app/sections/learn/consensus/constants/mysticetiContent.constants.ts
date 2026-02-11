import { SmallCtaCard } from '@components/small-CTA-card/SmallCtaCard';
import { Button, ButtonVariant, HorizontalTitle, TitleTextSize } from 'react-ui-kit';

export const MYSTICETI_HORIZONTAL_TITLE: React.ComponentProps<typeof HorizontalTitle> = {
    title: 'Mysticeti',
    subtitle: 'Current Mainnet consensus protocol',
    body: 'Mysticeti is a BFT consensus protocol optimized for low latency and high throughput, using a DAG structure to enable parallel block production with strong security guarantees.',
    size: TitleTextSize.Medium,
};

export const MYSTICETI_SMALL_CTA_CARD_CONTENT: React.ComponentProps<typeof SmallCtaCard>[] = [
    {
        title: 'Parallel block proposals',
        subtitle:
            'multiple validators propose simultaneously to maximize bandwidth and improve censorship resistance',
        image: '/learn/consensus/safety-efficiency/parallel_blocks.png',
    },
    {
        title: 'Optimized voting',
        subtitle: ' parallel certification reduces median and tail latency',
        image: '/learn/consensus/safety-efficiency/optimized_voting.png',
    },
    {
        title: 'Three-round finality',
        subtitle: 'blocks finalize in three rounds of communication',
        image: '/learn/consensus/safety-efficiency/three_round.png',
    },
    {
        title: 'Fault tolerance',
        subtitle: 'resilient even if some validators are offline or faulty',
        image: '/learn/consensus/safety-efficiency/leader_tolerance.png',
    },
];

export const MYSTICETI_BUTTONS: (React.ComponentProps<typeof Button> & { link: string })[] = [
    {
        text: 'Learn more',
        link: 'https://docs.iota.org/about-iota/iota-architecture/consensus',
        variant: ButtonVariant.Primary,
        ariaLabel: 'Go to the documentation',
    },
    {
        text: 'Read the Whitepaper',
        link: 'https://arxiv.org/pdf/2310.14821',
        ariaLabel: 'Open the whitepaper',
        variant: ButtonVariant.Secondary,
    },
];
