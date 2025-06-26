import { IotaIdentity, IotaIdentityResolver } from '@repo/icons';

export const LIBS_CTA_CARD_CONTENT = {
    title: 'Application Libraries',
    subtitle: 'Fluidly integrate unique IOTA features into your applications',
    link: 'https://docs.iota.org/',
    image: '/products/tooling/libs.png',
};

export const LIBS_ICON_CONTENT = [
    {
        title: 'IOTA Identity',
        body: 'Unifying trust with standard decentralized identity solutions across DLTs and IOTA-specific methods',
        icon: <IotaIdentity />,
        link: 'https://docs.iota.org/iota-identity',
    },
    {
        title: 'IOTA Universal Resolver for DIDs',
        body: 'Resolves Decentralized Identifiers across multiple DID methods',
        icon: <IotaIdentityResolver />,
        link: 'https://docs.iota.org/iota-identity/getting-started/universal-resolver',
    },
];
