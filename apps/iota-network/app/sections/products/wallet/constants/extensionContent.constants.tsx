import {
    IotaDnsResolver,
    MagicSmartContracts,
    RegulatoryCompliance,
    RobustComplianceControls,
    UserExperience,
} from '@repo/icons';
import { TitleTextSize } from 'react-ui-kit';

export const EXTENSION_VERTICAL_TITLE_CONTENT = {
    title: 'Browser Extension Wallets',
    subtitle: 'Create your own web wallet based on the open wallet standard',
    body: 'The IOTA Wallet Standard defines a unified protocol enabling dApps to automatically discover and interact with wallets across the IOTA ecosystem.',
    size: TitleTextSize.Small,
};

export const EXTENSION_TITLE_CONTENT = {
    title: 'IOTA Wallet Standard Key Features',
    size: TitleTextSize.ExtraSmall,
};

export const EXTENSION_ICON_CONTENT = [
    {
        icon: <IotaDnsResolver />,
        title: 'Standardized Connection',
        body: 'Facilitates initiating secure connections between dApps and wallets',
    },
    {
        icon: <UserExperience />,
        title: 'Event Handling',
        body: 'Allows dApps to listen for wallet events such as account additions or removals',
    },
    {
        icon: <MagicSmartContracts />,
        title: 'Personal Message Signing',
        body: 'Enables users to sign messages, aiding in public key verification',
    },
    {
        icon: <RegulatoryCompliance />,
        title: 'Transaction Signing',
        body: 'Permits users to sign transactions, returning serialized data and signatures without immediate execution',
    },
    {
        icon: <UserExperience />,
        title: 'Transaction Execution ',
        body: 'Combines signing and executing transactions in a single step for streamlined operations',
    },
    {
        icon: <RobustComplianceControls />,
        title: 'Transaction Effects Reporting',
        body: 'Allows wallets to update their internal state based on transaction outcomes reported by dApps',
    },
];
