import {
    Flexibility,
    ImmutableStorageOfDynamicData,
    IotaIdentity,
    MultiTierControl,
} from '@repo/icons';
import { TitleTextSize } from 'react-ui-kit';

export const SOLVING_RECURRING_VERTICAL_TITLE_CONTENT = {
    title: 'Addressing business trust challenges',
    body: 'From verifying identities to ensuring data integrity, businesses struggle with fragmented processes that block trust, scale, and usability. IOTA Trust Framework products solve these common business challenges.',
    size: TitleTextSize.Small,
};

export const SOLVING_RECURRING_ICON_CONTENT = [
    {
        icon: <IotaIdentity />,
        title: 'Identity Gaps',
        body: 'Verifying people, organizations, and devices in open networks',
    },
    {
        icon: <ImmutableStorageOfDynamicData />,
        title: 'Data Risks',
        body: 'Proving information is authentic, untampered, and verifiable',
    },
    {
        icon: <Flexibility />,
        title: 'Access Barriers',
        body: 'Managing who can see or do what is complex and unreliable',
    },
    {
        icon: <MultiTierControl />,
        title: 'Process Friction',
        body: 'Reducing Intermediaries and extra steps like fees that slow adoption and usability',
    },
];
