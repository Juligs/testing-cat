import {
    AdvancedProgrammability,
    IdealForRwaUseCases,
    RobustComplianceControls,
} from '@repo/icons';
import { TitleTextSize } from 'react-ui-kit';

export const CUSTOMIZATION_VERTICAL_TITLE = {
    title: 'Customization, Control, and Compliance',
    subtitle: 'Personalize and manage your token with the Closed-Loop Token standard',
    body: 'Tokens created with the Closed-Loop Token standard offer advanced programmability and compliance controls, adaptable to various regulatory standards and ideal for real-world assets.',
    size: TitleTextSize.Small,
};

export const CUSTOMIZATION_ICON_CONTENT = [
    {
        icon: <AdvancedProgrammability />,
        title: 'Advanced Programmability',
        body: 'Customizable to fit specific use cases and requirements, allowing for tailored functionality.',
    },
    {
        icon: <RobustComplianceControls />,
        title: 'Robust Compliance Controls',
        body: 'Configurable to meet diverse regulatory standards, ensuring adherence to regulatory requirements.',
    },
    {
        icon: <IdealForRwaUseCases />,
        title: 'Ideal for RWA Use Cases',
        body: 'Optimized for Real World Asset applications, providing secure and adaptable solutions for asset tokenization.',
    },
];
