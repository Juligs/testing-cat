import { OnLedgerRevocation, TimelockSupport, UserExperience } from '@repo/icons';
import { TitleTextSize } from 'react-ui-kit';

export const NOTARIZATION_WORKFLOW_VERTICAL_TITLE = {
    title: 'Notarization That Fits Your Workflow',
    subtitle: 'Select the method that matches your data needs',
    size: TitleTextSize.Small,
};

export const LOCKED_NOTARIZATION_CTA_CARD_CONTENT = {
    title: 'Locked Notarization',
    subtitle:
        'Immutable on-chain storage with optional time-locks that prevent edits or deletions. Ideal for certificates, licenses, and other critical records requiring long-term integrity.',
    link: 'https://docs.iota.org/developer/iota-notarization/explanations/locked-notarization',
    image: '/products/notarization/locked_notarization.png',
};

export const LOCKED_NOTARIZATION_ICON_CONTENT = [
    {
        title: 'Locking Mechanism',
        body: 'A time-lock ensures the owner cannot alter or delete the object until the lock expires.',
        icon: <TimelockSupport />,
    },
    {
        title: 'Immutable Data',
        body: 'Once locked, the data remains non-updateable for the duration of the time-lock.',
        icon: <OnLedgerRevocation />,
    },
    {
        title: 'Fixed Ownership',
        body: 'Ownership is non-transferable and cannot be reassigned under any circumstances.',
        icon: <UserExperience />,
    },
];

export const DYNAMIC_NOTARIZATION_CTA_CARD_CONTENT = {
    title: 'Dynamic Notarization',
    subtitle:
        'A single updatable on-chain object that reflects the latest state and supports ownership transfers for multi-party collaboration. Ideal for supply chain updates, product statuses, or digital passports.',
    link: 'https://docs.iota.org/developer/iota-notarization/explanations/dynamic-notarization',
    image: '/products/notarization/dynamic_notarization.png',
};

export const DYNAMIC_NOTARIZATION_ICON_CONTENT = [
    {
        title: 'Flexible Control',
        body: 'No time lock means the data can be changed or deleted at any time by the current owner.',
        icon: <TimelockSupport />,
    },
    {
        title: 'Fully Updatable',
        body: 'Each update overwrites the previous one, with only the most recent state stored on-chain.',
        icon: <OnLedgerRevocation />,
    },
    {
        title: 'Transferable Ownership',
        body: 'Ownership can be reassigned, enabling different parties to update the object at various stages.',
        icon: <UserExperience />,
    },
];
