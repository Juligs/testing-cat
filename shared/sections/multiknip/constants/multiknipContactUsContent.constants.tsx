import { VisitWebsite, Download, BlogPost } from '@repo/icons';

export const MULTIKNIP_CONTACT_US_ANCHORLINKS = [
    {
        text: 'Visit MultiKnip',
        url: 'https://pbtokn.com/multiknip-ebs.html',
        isExternal: true,
        leadingIcon: <VisitWebsite />,
    },
    {
        text: 'Download presentation',
        url: 'https://files.iota.org/comms/MultiKnip_IOTA_Showcase_Presentation.pdf',
        isExternal: true,
        leadingIcon: <Download />,
    },
    {
        text: 'Read the blog post',
        url: 'https://blog.iota.org/using-data-to-cut-energy-use-while-boosting-local-economies/',
        isExternal: true,
        leadingIcon: <BlogPost />,
    },
];
