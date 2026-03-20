import { HorizontalTitle, ImageCard, TitleTextSize } from 'react-ui-kit';

type ImageCardWithLink = React.ComponentProps<typeof ImageCard> & {
    link: string;
    showcaseLink?: string;
};

export const FIRST_PARTICIPANTS_HORIZONTAL_TITLE: React.ComponentProps<typeof HorizontalTitle> = {
    title: 'The first cohort in the field',
    subtitle: 'Kickstarting real-world innovation on IOTA',
    body: 'The first program participants shipped solutions across digital identity, sustainability, product authenticity, and supply-chain workflows. Their progress validated key patterns for production use. While their day-to-day integration feedback helped us improve APIs, tooling, and documentation with shorter, faster feedback cycles.',
    size: TitleTextSize.Medium,
};

export const FIRST_PARTICIPANTS_IMAGE_CARD: ImageCardWithLink[] = [
    {
        title: 'Kalalohko',
        subtitle:
            'Enables verifiable seafood provenance from catch to buyer, supporting fairer economics and compliant supply chains.',
        image: '/build/business-innovation/first-participants/kalalohko.png',
        body: 'Kalalohko is rebuilding the seafood supply chain with transparency and fairness. As a new participant in the IOTA Business Innovation Program, it uses IOTA Identity, Notarization, and the Gas Station to trace seafood provenance, support local fishermen, and drive scalable, verifiable real-world adoption.',
        link: 'https://kalalohko.com/',
        showcaseLink: '/learn/showcases/kalalohko',
    },
    {
        title: 'Impierce',
        subtitle: 'Decentralized Identity Infrastructure for a Privacy-Respecting Digital Society',
        image: '/build/business-innovation/first-participants/impierce.png',
        body: 'A European social enterprise developing secure, privacy-first digital identity solutions. By combining open-source innovation with social impact, Impierce empowers individuals and organizations to engage in digital ecosystems without compromising personal data.',
        link: 'https://www.impierce.com/',
        showcaseLink: '/learn/showcases/impierce',
    },
    {
        title: 'Orobo',
        subtitle: 'Digital Product Passports for Trusted and Compliant Supply Chains',
        image: '/build/business-innovation/first-participants/orobo.png',
        body: "Building infrastructure for EU sustainability compliance, Orobo's Digital Product Passport platform enables full lifecycle traceability of products, from raw materials to disposal, supporting regulations like the Ecodesign for Sustainable Products Regulation.",
        link: 'http://www.orobo.tech/',
        showcaseLink: '/learn/showcases/orobo',
    },
    {
        title: 'ObjectID ',
        subtitle: 'Verifiable Product Identities to Power Transparency and Authenticity',
        image: '/build/business-innovation/first-participants/object_ID.png',
        body: 'Developed by SDV Consulting, ObjectID provides verifiable, tamper-proof identities for physical products. These digital twins ensure traceability, ownership validation, and protection against counterfeiting, leveraging blockchain and AI technologies.',
        link: 'https://objectid.io/',
        showcaseLink: '/learn/showcases/objectID',
    },
];
