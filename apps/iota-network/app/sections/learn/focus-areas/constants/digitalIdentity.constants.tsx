import { Frame, IotaLogo } from '@repo/icons';

export const DIGITAL_IDENTITY_VERTICAL_TITLE_CONTENT = {
    title: 'Digital Identity',
    body: 'IOTA’s Digital Identity solutions offer a universal trust layer for secure, verifiable interactions across various applications. With W3C-compliant technology, IOTA supports diverse use cases through verifiable credentials and robust authentication, ensuring seamless and secure digital interactions.',
};

export const DIGITAL_IDENTITY_ICON_CONTENT = [
    [
        {
            icon: <Frame />,
            body: 'Centralized systems create single points of failure and verification friction',
            transparent: true,
        },
        {
            icon: <IotaLogo />,
            body: 'User-controlled credentials that work globally',
            transparent: false,
        },
    ],
    [
        {
            icon: <Frame />,
            body: 'Users lack control over personal data',
            transparent: true,
        },
        {
            icon: <IotaLogo />,
            body: 'Privacy-preserving verification',
            transparent: false,
        },
    ],
    [
        {
            icon: <Frame />,
            body: 'Every platform and service has its own KYC process',
            transparent: true,
        },
        {
            icon: <IotaLogo />,
            body: 'Eliminate repeated KYC processes',
            transparent: false,
        },
    ],
];
