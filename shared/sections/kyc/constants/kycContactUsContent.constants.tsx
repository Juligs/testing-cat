import { VisitWebsite, Download, BlogPost } from '@repo/icons';

export const KYC_CONTACT_US_ANCHORLINKS = [
    {
        text: 'Visit Walt.id',
        url: 'https://walt.id',
        isExternal: true,
        leadingIcon: <VisitWebsite />,
    },
    {
        text: 'Download presentation',
        url: 'https://files.iota.org/comms/Tokenized_KYC_IOTA_Showcase_Presentation.pdf',
        isExternal: true,
        leadingIcon: <Download />,
    },
    {
        text: 'Read the blog post',
        url: 'https://blog.iota.org/iota-web3-id-solution-sandbox/',
        isExternal: true,
        leadingIcon: <BlogPost />,
    },
];
