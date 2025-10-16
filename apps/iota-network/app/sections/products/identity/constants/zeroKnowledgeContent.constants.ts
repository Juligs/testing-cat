import { ButtonVariant, TitleTextSize } from 'react-ui-kit';

export const ZERO_KNOWLEDGE_VERTICAL_TITLE = {
    title: 'Zero-Knowledge Credentials',
    subtitle: 'Giving you unmatched privacy and control over your data',
    body: 'The IOTA Foundation, in partnership with the LINKS Foundation, has introduced privacy-preserving selective disclosure credentials to IOTA Identity. This feature enables users to share only specific parts of their credentials, ensuring full control over their information and its recipients.',
};

export const ZERO_KNOWLEDGE_BUTTONS = [
    {
        text: 'Learn more',
        link: 'https://docs.iota.org/iota-identity/how-tos/verifiable-credentials/zero-knowledge-selective-disclosure',
        ariaLabel: 'Go to the documentation',
    },
    {
        text: 'Read the blog post',
        link: 'https://blog.iota.org/iota-identity-zero-knowledge/',
        variant: ButtonVariant.Secondary,
        ariaLabel: 'Go to the Blog',
    },
];

export const ZERO_KNOWLEDGE_IMAGE_CARD = [
    {
        title: 'Selective Disclosure Based on JSON Web Token ',
        image: '/products/identity/zero_knowledge/json_web_token.png',
        body: 'The issuer is required to decide which credential fields can be disclosed by a holder which can disclose prepared concealed values to verifiers as needed.',
        link: 'https://www.ietf.org/archive/id/draft-ietf-jose-json-proof-token-02.html',
    },
    {
        title: 'Selective Disclosure Based on BBS+',
        image: '/products/identity/zero_knowledge/BBS.png',
        body: 'Any combination of disclosures can be constructed on an ad hoc basis, allowing more flexibility compared to SD-JWT.',
        link: 'https://www.ietf.org/archive/id/draft-irtf-cfrg-bbs-signatures-05.html',
    },
];

export const ZERO_KNOWLEDGE_TITLE = {
    title: 'Supports two selective disclosure implementations',
    size: TitleTextSize.ExtraSmall,
};
