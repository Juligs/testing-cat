import { ButtonVariant, TitleTextSize } from 'react-ui-kit';

export const SAFETY_AND_EFFICIENCY_VERTICAL_TITLE = {
    title: 'Safety and Efficiency',
    subtitle: 'Consensus powered by Mysticeti',
    body: 'IOTA’s consensus is built on the Mysticeti protocol. It enables efficient, secure consensus, maintaining transaction integrity and data even in the face of malicious nodes. It also ensures high fault tolerance, protection against attacks, and uninterrupted operations.',
    size: TitleTextSize.Small,
};

export const SAFETY_AND_EFFICIENCY_IMAGE_CARD_CONTENT = [
    {
        title: 'Parallel Blocks',
        body: 'Multiple validators can propose blocks in parallel, utilizing the full bandwidth of the IOTA network and ensuring censorship resistance.',
        image: '/learn/consensus/safety-efficiency/parallel_blocks.png',
    },
    {
        title: 'Quick Commitment',
        body: 'Transactions are finalized in just three communication rounds - the theoretical minimum for fast consensus.',
        image: '/learn/consensus/safety-efficiency/quick_commitment.png',
    },
    {
        title: 'Reduced Latencies',
        body: 'IOTA enables voting and certifying leaders on blocks in parallel, significantly reducing both median and tail latencies.',
        image: '/learn/consensus/safety-efficiency/reduced_latencies.png',
    },
    {
        title: 'Leader Tolerance',
        body: 'IOTA tolerates unavailable leaders without significantly increasing commit latencies, maintaining consistent performance.',
        image: '/learn/consensus/safety-efficiency/leader_tolerance.png',
    },
];

export const SAFETY_AND_EFFICIENCY_BUTTONS = [
    {
        text: 'Learn more',
        link: 'https://docs.iota.org/about-iota/iota-architecture/consensus',
        variant: ButtonVariant.Primary,
        ariaLabel: 'Go to the documentation',
    },
    {
        text: 'Read the paper',
        link: 'https://arxiv.org/pdf/2310.14821',
        ariaLabel: 'Open the whitepaper',
        variant: ButtonVariant.Secondary,
    },
];
