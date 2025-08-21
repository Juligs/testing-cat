import { Speed, W3ConformingVerifiableCredentials, DecentralizedFinance } from '@repo/icons';
import { TitleTextSize } from 'react-ui-kit';

export const WHY_IOTA_VERTICAL_TITLE = {
    title: 'Why Choose IOTA Hierarchies?',
    subtitle: 'Verifiable delegation, built for the real world',
    size: TitleTextSize.Small,
};

export const WHY_IOTA_ICON_CONTENT = [
    {
        icon: <W3ConformingVerifiableCredentials />,
        title: 'Built on Proven Identity Infrastructure',
        body: 'IOTA Hierarchies extends IOTA Identity with structured delegation and trust layers. It follows global standards like W3C and integrates easily with existing identity systems.',
        link: 'https://www.iota.org/products/identity',
        arialLabel: 'Go to the Identity page',
    },
    {
        icon: <Speed />,
        title: 'High-Performance, Low Fees',
        body: 'The underlying IOTA network enables high-throughput and low-fee operations, making IOTA Hierarchies ideal for  real-time updates, device communication, or resource-constrained use-cases.',
        link: 'https://www.iota.org/products/mainnet',
        arialLabel: 'Go to the Mainnet page',
    },
    {
        icon: <DecentralizedFinance />,
        title: 'Tailored for the Real Economy',
        body: 'From digital product passports to public infrastructure, IOTA Hierarchies aligns with real-world regulatory and operational needs, making it enterprise- and government-ready.',
        link: 'https://www.iota.org/learn/showcases/dpp',
        arialLabel: 'Go to the DPP page',
    },
];
