import { HighlightCard, TitleTextSize, VerticalTitle } from 'react-ui-kit';

export const TOOLING_TITLE_CONTENT: React.ComponentProps<typeof VerticalTitle> = {
    title: 'Learn. Build. Ship.',
    subtitle: 'Start your IOTA journey here',
    body: 'Explore our resources for builders and devs with hands-on workshops, documentation, infrastructure providers, and product demos to help you go from idea to shipped, faster.',
    size: TitleTextSize.Small,
};

export const TOOLING_HIGHLIGHT_CONTENT: (React.ComponentProps<typeof HighlightCard> & {
    link: string;
    isExternal?: boolean;
})[] = [
    {
        overline: 'Learning Resource',
        title: 'IOTA Workshop Series',
        body: 'Practical learning. Real-world use cases. Built for builders at every skill level',
        backgroundImage: '/build/get-started/tooling/workshop.png',
        link: 'https://docs.iota.org/developer/workshops/',
        isExternal: true,
    },
    {
        overline: 'Tooling',
        title: 'IOTA VSCode Extension',
        body: 'Build on IOTA with Move language support – featuring syntax highlighting, autocompletion, and smart code navigation',
        backgroundImage: '/build/get-started/tooling/vs_code_extension.png',
        link: 'https://marketplace.visualstudio.com/items?itemName=iotaledger.iota-move',
        isExternal: true,
    },
    {
        overline: 'Ecosystem',
        title: 'Infrastructure Partners',
        body: 'Seamlessly integrate with top-tier infrastructure providers to deploy, monitor, and scale your IOTA-powered applications',
        backgroundImage: '/build/get-started/tooling/infrastructure.png',
        link: '/connect/our-community',
    },
    {
        overline: 'Tools',
        title: 'Wallets',
        body: 'Securely manage your assets, tokens, and credentials with IOTA-compatible wallets for both developers and end users',
        backgroundImage: '/build/get-started/tooling/wallets.png',
        link: '/products/wallet#iota-wallet',
    },
    {
        overline: 'Education',
        title: 'Developer Docs',
        body: 'Everything you need to build, integrate, and launch with IOTA’s tools and protocols',
        backgroundImage: '/build/get-started/tooling/developer.png',
        link: 'https://docs.iota.org/',
        isExternal: true,
    },
];

export const PRODUCTS_CTA_CONTENT = [
    {
        image: '/shared/discord.png',
        title: 'Join Our Builder  Discord',
        subtitle: 'Collaborate with builders and innovators worldwide',
        link: 'https://discord.com/invite/iota-builders',
    },
    {
        image: '/shared/iota_technology.png',
        title: 'Product Demo',
        subtitle: 'IOTA’s public infrastructure and products work together in a real-world demo ',
        link: 'https://dpp.demo.iota.org/introduction/1',
    },
];
