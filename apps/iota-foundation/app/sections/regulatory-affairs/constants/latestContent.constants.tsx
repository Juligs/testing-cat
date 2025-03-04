import { BlogPost } from '@repo/icons';
import { TitleTextSize } from 'react-ui-kit';

export const LATEST_HORIZONTAL_TITLE = {
    title: 'Latest Regulatory Advocacy ',
    body: 'A selection of our most recent work promoting DLT and blockchain interests in global regulatory matters',
    size: TitleTextSize.Medium,
};

export const LATEST_ICON_CONTENT = [
    {
        title: "IOTA Foundation's Response to FATF AML/CFT Standards Revisions",
        body: "We support FATF's proposed changes to enhance financial inclusion while maintaining robust compliance.",
        icon: <BlogPost />,
    },
    {
        title: "IOTA Foundation's Response to IOSCO on Finfluencers Regulation",
        body: 'We call for clearer finfluencer regulations, focusing on transparency, accountability, and investor protection.',
        icon: <BlogPost />,
    },
    {
        title: "IOTA Foundation's Comments on Kenya's Virtual Asset Service Providers Bill",
        body: "We proposes key refinements to Kenya's VASP Bill to align with international best practices.",
        icon: <BlogPost />,
    },
];
