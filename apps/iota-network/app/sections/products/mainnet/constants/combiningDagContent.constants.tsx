import { NaturallyIntuitive, Security, SmartContract } from '@repo/icons';
import { TitleTextSize } from 'react-ui-kit';

export const COMBINING_DAG_VERTICAL_TITLE = {
    title: 'Combining DAG Architecture with Move Language',
    subtitle: 'Unmatched efficiency and flexibility',
    body: 'The IOTA Mainnet combines cutting-edge Directed Acyclic Graph ledger technology with the powerful, blockchain-agnostic Move programming language. This combination enables secure and innovative real-world asset tokenization, empowering developers a seamless experience for building economically sustainable solutions.',
    size: TitleTextSize.Small,
};

export const COMBINING_DAG_ICON_CONTENT = [
    {
        icon: <Security />,
        title: 'Inherently Secure',
        body: 'Move is designed with security as a core principle, ensuring robust protection against vulnerabilities.',
    },
    {
        icon: <NaturallyIntuitive />,
        title: 'Naturally Intuitive',
        body: 'Move offers an intuitive syntax and structure, making it accessible and easy to use for developers.',
    },
    {
        icon: <SmartContract />,
        title: 'Highly Flexible',
        body: "Move's highly expressive framework enables the creation of complex and sophisticated smart contracts.",
    },
];
