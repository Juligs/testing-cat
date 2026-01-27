import { HorizontalTitle, ImageCard, TitleTextSize } from 'react-ui-kit';

type ImageCardWithLink = React.ComponentProps<typeof ImageCard> & {
    link: string;
};

export const FIRST_PARTICIPANTS_HORIZONTAL_TITLE: React.ComponentProps<typeof HorizontalTitle> = {
    title: 'Introducing the First Wave of Participants',
    subtitle: 'Kickstarting Real-World Innovation on the IOTA Mainnet',
    body: 'The first participants in IOTA’s Business Innovation Program are building real-world solutions on the new IOTA Mainnet. Kalalohko, Impierce, Orobo, and ObjectID tackle challenges in digital identity, sustainability, and product authenticity, leveraging IOTA’s tech, funding, and support to bring trust and transparency to global systems.',
    size: TitleTextSize.Medium,
};

export const FIRST_PARTICIPANTS_IMAGE_CARD: ImageCardWithLink[] = [
    {
        title: 'Kalalohko',
        subtitle:
            'Enables verifiable seafood provenance from catch to buyer, supporting fairer economics and compliant supply chains.',
        image: '/build/business-innovation/first-participants/kalalohko.png',
        body: 'Kalalohko is rebuilding the seafood supply chain with transparency and fairness. As a new participant in the IOTA Business Innovation Program, it uses IOTA Identity, Notarization, and the Gas Station to trace seafood provenance, support local fishermen, and drive scalable, verifiable real-world adoption.',
        link: 'https://blog.iota.org/kalalohko-joins-iota-bip/',
    },
    {
        title: 'Impierce',
        subtitle: 'Decentralized Identity Infrastructure for a Privacy-Respecting Digital Society',
        image: '/build/business-innovation/first-participants/impierce.png',
        body: 'A European social enterprise developing secure, privacy-first digital identity solutions. By combining open-source innovation with social impact, Impierce empowers individuals and organizations to engage in digital ecosystems without compromising personal data.',
        link: 'https://www.impierce.com/',
    },
    {
        title: 'Orobo',
        subtitle: 'Digital Product Passports for Trusted and Compliant Supply Chains',
        image: '/build/business-innovation/first-participants/orobo.png',
        body: "Building infrastructure for EU sustainability compliance, Orobo's Digital Product Passport platform enables full lifecycle traceability of products, from raw materials to disposal, supporting regulations like the Ecodesign for Sustainable Products Regulation.",
        link: 'http://www.orobo.tech/',
    },
    {
        title: 'ObjectID ',
        subtitle: 'Verifiable Product Identities to Power Transparency and Authenticity',
        image: '/build/business-innovation/first-participants/object_ID.png',
        body: 'Developed by SDV Consulting, ObjectID provides verifiable, tamper-proof identities for physical products. These digital twins ensure traceability, ownership validation, and protection against counterfeiting, leveraging blockchain and AI technologies.',
        link: 'https://objectid.io/',
    },
];
