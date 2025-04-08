import { TitleTextSize } from 'react-ui-kit';
import { Animation } from 'react-ui-kit/client';
export const LEARNING_RESOURCES_VERTICAL_TITLE_CONTENT = {
    title: 'Learning Resources',
    subtitle: 'Dive into our Move learning resources to build robust and efficient smart contracts',
    isCentered: true,
    size: TitleTextSize.Small,
};

export const LEARNING_RESOURCES_IMAGE_CARD = [
    {
        title: 'Docs',
        subtitle: 'Find the latest documentation for Move on IOTA.',
        link: 'https://docs.iota.org',
        animation: <Animation src="/shared/developer_documentation.json" keepAspectRatio />,
    },
    {
        title: 'Sample Code',
        subtitle: 'Showcase of packages that offer coding techniques.',
        link: 'https://docs.iota.org/developer/iota-101/move-overview/conventions',
        animation: <Animation src="/shared/guides_tutorial.json" keepAspectRatio />,
    },
];
