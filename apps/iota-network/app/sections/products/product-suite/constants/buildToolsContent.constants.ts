import { ContactUsWithIcons } from '@components/contact-us-with-icons';
import { ImageCard } from 'react-ui-kit';

type BaseItem = {
    link: string;
    isExternal?: boolean;
};

export type ImageCardItem = BaseItem &
    React.ComponentProps<typeof ImageCard> & {
        isImageCard: true;
    };
export type ExploreCtaItem = BaseItem &
    React.ComponentProps<typeof ContactUsWithIcons> & {
        isImageCard: false;
    };

export type BuildToolItem = ImageCardItem | ExploreCtaItem;

export const BUILD_CONTENT_MAINNET: BuildToolItem[] = [
    {
        isImageCard: true,
        title: 'IOTA SDKs',
        body: 'TypeScript and Rust SDKs – everything you need to start building, fast',
        link: 'https://docs.iota.org/developer/references/#iota-software-development-kits',
    },
    {
        isImageCard: true,
        title: 'IOTA CLI',
        body: 'Interact directly with the IOTA network through base commands',
        link: 'https://docs.iota.org/developer/references/#iota-cli',
    },
    {
        isImageCard: true,
        title: 'IOTA API',
        body: 'Connect to the IOTA network to query, track, and test or submit transactions',
        link: 'https://docs.iota.org/developer/references/iota-api',
    },
    {
        isImageCard: true,
        title: 'IOTA Custom Indexer',
        body: 'Secure and verifiable trust delegation in digital ecosystems',
        link: 'https://docs.iota.org/developer/advanced/custom-indexer',
    },
    {
        isImageCard: false,
        title: 'IOTA VS Coder Extention',
        subtitle: 'Build on IOTA with Move language support',
        image: '/products/product-suite/vs_code.png',
        link: 'https://marketplace.visualstudio.com/items?itemName=iotaledger.iota-move&ssr=false#overview',
    },
];
export const BUILD_CONTENT_EVM: BuildToolItem[] = [
    {
        isImageCard: false,
        title: 'IOTA ISC SDK',
        subtitle:
            'Compatibility with existing smart contracts and tooling from other EVM based chains like Ethereum',
        image: '/products/product-suite/vs_code.png',
        link: 'https://docs.iota.org/developer/iota-evm/getting-started/languages-and-vms',
        isExternal: true,
    },
];
