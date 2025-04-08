import {
    DeveloperFriendly,
    EnhancedSecurity,
    HighProductivity,
    UniversalCompatibility,
} from '@repo/icons';
import { TitleTextSize } from 'react-ui-kit';
export const WHY_MOVE_VERTICAL_TITLE_CONTENT = {
    title: 'Why Move?',
    subtitle: 'Streamlining smart contract development with advanced abstractions',
    body: 'Move is a universal language for smart contract programming, offering first-class abstractions for assets, transfers, and access control. This enables safer and more efficient development.',
    size: TitleTextSize.Small,
};

export const WHY_MOVE_ICON_CONTENT = [
    {
        icon: <EnhancedSecurity />,
        title: 'Enhanced Security',
        body: 'Move offers robust protection against vulnerabilities through its first-class abstractions for assets and access control.',
    },
    {
        icon: <HighProductivity />,
        title: 'High Productivity',
        body: "Move's intuitive design enables higher productivity, facilitating the creation of complex smart contracts with ease.",
    },
    {
        icon: <UniversalCompatibility />,
        title: 'Universal Compatibility',
        body: 'Move can be implemented across various distributed ledger technologies, providing flexibility and broad applicability.',
    },
    {
        icon: <DeveloperFriendly />,
        title: 'Developer Friendly',
        body: 'Move flattens the Web3 learning curve, making it easier for developers to write secure and efficient smart contracts quickly.',
    },
];
