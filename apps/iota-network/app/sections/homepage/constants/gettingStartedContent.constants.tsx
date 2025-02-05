import { Animation } from 'react-ui-kit/client';

export const GETTING_STARTED_VERTICAL_TITLE_CONTENT = {
    title: 'Getting Started with IOTA',
    subtitle: 'Streamlining innovation for developers',
};
export const GETTING_STARTED_IMAGE_CARD_CONTENT = [
    {
        title: 'Developer Documentation',
        link: 'https://docs.iota.org',
        animation: (
            <Animation
                src="/homepage/getting-started/developer_documentation.json"
                keepAspectRatio
            />
        ),
    },

    {
        title: 'Guides & Tutorials',
        link: 'https://docs.iota.org/developer/getting-started/coffee-example',
        animation: (
            <Animation src="/homepage/getting-started/guides_tutorial.json" keepAspectRatio />
        ),
    },
    {
        title: 'Advanced Tooling',
        link: 'https://docs.iota.org/references',
        animation: (
            <Animation src="/homepage/getting-started/advance_tooling.json" keepAspectRatio />
        ),
    },
];
