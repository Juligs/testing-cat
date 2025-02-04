import { VisitWebsite, Download, BlogPost } from '@repo/icons';

export const EBSI_CONTACT_US_ANCHORLINKS = [
    {
        text: 'Visit EBSI',
        url: 'https://ec.europa.eu/digital-building-blocks/sites/display/EBSI/Home',
        isExternal: true,
        leadingIcon: <VisitWebsite />,
    },
    {
        text: 'Download presentation',
        url: 'https://files.iota.org/comms/EBSI_IOTA_Showcase_Presentation.pdf',
        isExternal: true,
        leadingIcon: <Download />,
    },
    {
        text: 'Read the blog post',
        url: 'https://blog.iota.org/european-blockchain-pcp-final/',
        isExternal: true,
        leadingIcon: <BlogPost />,
    },
];
