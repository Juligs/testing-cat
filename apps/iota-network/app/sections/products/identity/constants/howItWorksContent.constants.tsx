import { TitleTextSize } from 'react-ui-kit';

export const HOW_IT_WORKS_VERTICAL_TITLE = {
    title: 'How it Works',
    subtitle: 'One framework. Any identity',
    body: 'Designed for individuals, organizations, and devices, IOTA Identity acts as a unifying layer of trust between everyone and everything. It streamlines identity verification and management by defining three key roles: Holders, Issuers, and Verifiers.',
    size: TitleTextSize.Small,
};

export const HOW_IT_WORKS_IMAGE_CARD_CONTENT = [
    {
        title: 'Holders',
        body: 'Holders are the owners of digital identities, maintaining full control over their data. They decide what information to share, how much to share, and with whom, ensuring complete autonomy and privacy.',
        image: '/shared/iota_tokens.png',
    },
    {
        title: 'Issuers',
        body: 'Issuers are trusted entities or authorities that create and provide credentials to holders. Credentials can include any type of document, such as identity cards, health records, diplomas, or certifications.',
        image: '/shared/users.png',
    },
    {
        title: 'Verifiers',
        body: "Verifiers are third parties that need to confirm the authenticity of a holder's data. They can validate any type of information, such as identity, age, qualifications, or other credentials.",
        image: '/shared/validators.png',
    },
];
