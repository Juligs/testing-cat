import { BlogPost } from '@repo/icons';
import { TitleTextSize } from 'react-ui-kit';

export const EFFORTS_VERTICAL_TITLE = {
    title: 'Latest Regulatory Advocacy ',
    body: 'A selection of our most recent work promoting DLT and blockchain interests in global regulatory matters',
    size: TitleTextSize.Medium,
};

export const EFFORTS_ICON_CONTENT = [
    {
        title: "IOTA Foundation's Response to FATF AML/CFT Standards Revisions",
        body: "IOTA supports FATF's proposed changes to enhance financial inclusion while maintaining robust compliance.",
        icon: <BlogPost />,
    },
    {
        title: "IOTA Foundation's Response to IOSCO on Finfluencers Regulation",
        body: 'IOTA calls for clearer finfluencer regulations, focusing on transparency, accountability, and investor protection.',
        icon: <BlogPost />,
    },
    {
        title: "IOTA Foundation's Comments on Kenya's Virtual Asset Service Providers Bill",
        body: "IOTA proposes key refinements to Kenya's VASP Bill to align with international best practices.",
        icon: <BlogPost />,
    },
];
