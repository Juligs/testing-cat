import { GasFees, ObjectDataModel, Speed } from '@repo/icons';
import { TitleTextSize } from 'react-ui-kit';

export const WHY_IOTA_VERTICAL_TITLE = {
    title: 'Why IOTA?',
    subtitle: 'Performance, scalability, and architecture purpose-built for verifiable records',
    body: "IOTA's underlying technology makes it uniquely suited for industrial-grade notarization, combining low costs, high throughput, and object-based precision",
    size: TitleTextSize.Small,
};

export const WHY_IOTA_ICON_CONTENT = [
    {
        icon: <Speed />,
        title: 'Performance at Scale',
        body: 'Process over 50,000 transactions per second with sub-second finality. IOTA is built for real-time, high-volume notarization workflows without bottlenecks.',
        link: '/learn/consensus',
    },
    {
        icon: <GasFees />,
        title: 'Cost-Efficient and Decentralized',
        body: 'Typical transaction fees are just ~0.005 IOTA, enabling affordable notarization at scale. Secured by a decentralized Delegated Proof-of-Stake (dPoS) network for trust and protection against censorship.',
        link: '/learn/tokenomics',
    },
    {
        icon: <ObjectDataModel />,
        title: 'Built for Precise Data Control',
        body: "IOTA's object-based Mainnet architecture, powered by the Move language, enables tamper-proof records, versioning, and fine-grained ownership. Ideal for complex and evolving data needs.",
        link: '/products/mainnet',
    },
];
