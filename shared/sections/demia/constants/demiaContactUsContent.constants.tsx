import { BlogPost, Download, VisitWebsite } from '@repo/icons';

export const DEMIA_CONTACT_US_ANCHORLINKS = [
    {
        text: 'Visit Demia',
        url: 'https://demia.net',
        isExternal: true,
        leadingIcon: <VisitWebsite />,
    },
    {
        text: 'Download presentation',
        url: 'https://files.iota.org/comms/Demia_IOTA_Showcase_Presentation.pdf',
        isExternal: true,
        leadingIcon: <Download />,
    },
    {
        text: 'Read the blog post',
        url: 'https://blog.iota.org/iota-and-climatecheck-launch-new-digitalmrv-solution-and-strategic-partnership-e3c4f55c8958/',
        isExternal: true,
        leadingIcon: <BlogPost />,
    },
];
