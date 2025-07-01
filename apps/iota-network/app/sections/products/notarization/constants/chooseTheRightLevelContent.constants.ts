import { TitleTextSize } from 'react-ui-kit';

export const CHOOSE_THE_RIGHT_LEVEL_HORIZONTAL_TITLE = {
    title: 'Choose the Right Level of Data Visibility',
    subtitle: 'Tailor how you store data on-chain based on transparency and confidentiality needs',
    size: TitleTextSize.Small,
};

export const CHOOSE_THE_RIGHT_LEVEL_IMAGE_CARD_CONTENT = [
    {
        title: 'Clear-Text Data',
        body: 'Readable data stored on-chain for full transparency, ideal for open use cases like digital product passports or sustainability claims.',
        image: '/products/notarization/choose-the-right-level/clear_text.png',
    },
    {
        title: 'Encrypted Data',
        body: 'On-chain encryption meets off-chain key management, ensuring redundancy and availability while protecting the content.',
        image: '/products/notarization/choose-the-right-level/encrypted_data.png',
    },
    {
        title: 'Digital Fingerprint',
        body: 'Only the hash is stored on-chain, with content off-chain for maximum confidentiality – ideal for sensitive personal or business records.',
        image: '/products/notarization/choose-the-right-level/digital_fingerprint.png',
    },
];
