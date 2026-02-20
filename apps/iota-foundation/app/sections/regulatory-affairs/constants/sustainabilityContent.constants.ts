import { CtaCard, VerticalTitle } from 'react-ui-kit';

export const SUSTAINABILITY_TITLE_CONTENT: React.ComponentProps<typeof VerticalTitle> = {
    title: 'Sustainability',
    subtitle: 'Energy efficiency by design',
    body: 'IOTA’s lightweight protocol architecture consumes significantly less energy than traditional blockchains – enabling more responsible digital infrastructure at scale.',
};
export const SUSTAINABILITY_CTA_CARD_CONTENT: (React.ComponentProps<typeof CtaCard> & {
    link: string;
    text: string;
    isExternal?: boolean;
})[] = [
    {
        title: 'Sustainability Indicators',
        subtitle: 'Aligned with EU regulatory standards',
        body: 'Our sustainability metrics meet the requirements of the EU’s Markets in Crypto-Assets (MiCA) regulation and are maintained in partnership with the Crypto Carbon Ratings Institute (CCRI).',
        image: '/regulatory-affairs/sustainability.png',
        link: '/sustainability/#ccri',
        text: "CCRI's methodology",
    },
    {
        title: 'An Energy-Efficient Network',
        subtitle: 'High performance. Low consumption.',
        body: 'Our consensus design minimizes energy consumption across the network – so IOTA can deliver a powerful business impact while leaving an almost invisible footprint on the environment.',
        image: '/regulatory-affairs/energy.png',
        link: 'https://www.iota.org/products/mainnet',
        text: 'Learn more',
        isExternal: true,
    },
];
