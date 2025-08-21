import { IotaClientPtbCli, SelectiveDisclosure, UserExperience } from '@repo/icons';
import { TitleTextSize } from 'react-ui-kit';

export const HOW_IT_WORKS_VERTICAL_TITLE_CONTENT = {
    title: 'How it Works',
    subtitle: 'A cryptographic method for structured trust',
    body: 'IOTA Hierarchies assigns and delegates roles through cryptographic accreditations, creating a verifiable chain of trust.',
    size: TitleTextSize.Medium,
};

export const HOW_IT_WORKS_CTA_CARD_CONTENT = [
    {
        title: 'Root Authority:\nDelegate from the Top',
        subtitle:
            'Initiates the trust structure. Defines roles, issues accreditations, and revokes permissions as needed.',
        image: '/products/trust-hierarchies/define_delegate.png',
        link: 'https://docs.iota.org/developer/iota-hierarchies/explanations/federation#the-root-authority',
    },
    {
        title: 'Federation:\nSet the Rules of Trust',
        subtitle:
            'Establishes a shared trust domain, where entities follow common roles, rules, and policies.',
        image: '/products/trust-hierarchies/modular_structure.png',
        link: 'https://docs.iota.org/developer/iota-hierarchies/explanations/federation#federation',
    },
];

export const HOW_IT_WORKS_ICON_CONTENT = [
    {
        title: 'Trusted Property: Define What Matters',
        body: 'Specifies what entities are allowed to do, from certifying products to verifying identities.',
        icon: <UserExperience />,
        link: 'https://docs.iota.org/developer/iota-hierarchies/#trust-distribution-in-everyday-life',
    },
    {
        title: 'Accreditation: Connect the Chain',
        body: 'Grants permission through cryptographic delegation that defines trust scope and lineage.',
        icon: <IotaClientPtbCli />,
        link: 'https://docs.iota.org/developer/iota-hierarchies/explanations/accreditation',
    },
    {
        title: 'Attestation: Deliver Verifiable Proof',
        body: 'A signed, verifiable statement that confirms a trusted action was performed by an authorized party.',
        icon: <SelectiveDisclosure />,
        link: 'https://docs.iota.org/developer/iota-hierarchies/explanations/terminology#attestation',
    },
];
