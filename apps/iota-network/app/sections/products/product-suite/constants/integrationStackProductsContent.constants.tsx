import { TitleTextSize, VerticalTitle } from 'react-ui-kit';
import { Animation } from 'react-ui-kit/client';

export const INTEGRATION_STACK_VERTICAL_TITLE_CONTENT: React.ComponentProps<typeof VerticalTitle> =
    {
        title: 'A Stack to Power the World',
        size: TitleTextSize.ExtraSmall,
        isCentered: true,
    };

export const INTEGRATION_STACK_CTA_CARD_CONTENT = [
    {
        title: 'IOTA Mainnet',
        subtitle: 'Move-based Layer 1 with object-centric architecture',
        animation: <Animation src="/homepage/integration-stack/cta-animation/tangle.json" />,
        link: '/products/mainnet',
    },
    {
        title: 'IOTA EVM',
        subtitle: 'High-performance Layer 2 EVM with seamless interoperability',
        animation: <Animation src="/homepage/integration-stack/cta-animation/evm.json" />,
        link: '/products/evm',
    },
];
