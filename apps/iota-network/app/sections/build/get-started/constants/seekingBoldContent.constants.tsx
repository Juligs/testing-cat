import { SmallCtaCard } from '@components/small-CTA-card/SmallCtaCard';
import {
    Discord,
    EvaluationAndInterview,
    GitHub,
    Instagram,
    LinkedIn,
    Reddit,
    Telegram,
    XSocialIcon,
    Youtube,
} from '@repo/icons';
import { AnchorLink, CtaCard, ImageCard, TitleTextSize, VerticalTitle } from 'react-ui-kit';

export const SEEKING_CTA_CONTENT: (React.ComponentProps<typeof CtaCard> & {
    link?: string;
    isExternal?: boolean;
})[] = [
    {
        image: '/build/get-started/seeking-bold/iota_grants.png',
        title: 'IOTA Grants',
        subtitle: 'IOTA grants can ignite your project',
        link: '/build/grants',
    },
    {
        image: '/build/get-started/seeking-bold/request_proposal.png',
        title: 'Request for Proposals',
        subtitle: 'Fuel innovation that propels IOTA’s global adoption',
        // link: '/build/grants/#rpf',
    },
];
export const BUILD_PURPOSE_VERTICAL_TITLE: React.ComponentProps<typeof VerticalTitle> = {
    title: 'Build with purpose. Grow with support.',
    subtitle:
        'The IOTA ecosystem is more than technology – it’s a network of grants, guidance, and partners helping you turn ideas into real-world impact',
    size: TitleTextSize.Small,
};

export const BUILD_PURPOSE_IMAGE_CARD_CONTENT: (React.ComponentProps<typeof ImageCard> & {
    link: string;
})[] = [
    {
        overline: 'IOTA Product Adoption',
        title: "Start Building. We're here to help.",
        subtitle: 'Guiding you from concept to implementation',
        image: '/build/get-started/seeking-bold/start_building.png',
        link: 'mailto:partnerships@iota.org',
    },
    {
        overline: 'IOTA Builders Program',
        title: 'Join us as we shape the future of IOTA — one breakthrough at a time',
        subtitle: 'Shaping value-driven IOTA ecosystems where innovation thrives',
        image: '/build/get-started/seeking-bold/iotalabs.png',
        link: 'https://iotalabs.io/',
    },
];
export const CONNECT_VERTICAL_TITLE: React.ComponentProps<typeof VerticalTitle> = {
    title: 'Connect. Collaborate. Build.',
    body: 'From global summits to local meetups, join the people turning IOTA’s vision into reality – one connection at a time',
    size: TitleTextSize.Small,
};
export const CONNECT_CTA_CONTENT: (React.ComponentProps<typeof SmallCtaCard> & {
    link: string;
    isExternal: boolean;
})[] = [
    {
        image: '/shared/community_events.png',
        title: 'Attend Community Events',
        subtitle: 'Take part in IOTA workshops, hackathons, and meetups',
        link: '/connect/events',
        isExternal: false,
    },
    {
        image: '/shared/discord.png',
        title: 'Join Our Builder  Discord',
        subtitle: 'Collaborate with builders and innovators worldwide',
        link: 'https://discord.com/invite/iota-builders',
        isExternal: true,
    },
];

export const CONTRIBUTE_IMAGE_CARD_CONTENT: (React.ComponentProps<typeof ImageCard> & {
    link: string;
})[] = [
    {
        title: 'Contribute to the docs',
        body: 'Help improving the documentation or create learning resources',
        link: 'https://docs.iota.org/developer/references/contribute/contribution-process',
    },
    {
        title: 'Contribute to IOTA Repos',
        body: 'Actively participating in the IOTA community',
        link: 'https://docs.iota.org/developer/references/contribute/contribute-to-iota-repos',
    },
];

export const SEEKING_SOCIAL_LINKS: (React.ComponentProps<typeof AnchorLink> & {
    link: string;
})[] = [
    {
        leadingIcon: <Discord />,
        link: 'https://discord.iota.org',
        text: 'Discord Community',
    },
    {
        leadingIcon: <Discord />,
        link: 'https://builders-discord.iota.org/',
        text: 'Discord Builder',
    },
    {
        text: 'Telegram',
        leadingIcon: <Telegram />,
        link: 'https://t.me/IOTA_Official_Community',
    },
    {
        text: 'Reddit',
        leadingIcon: <Reddit />,
        link: 'https://www.reddit.com/r/Iota/',
    },
    {
        text: 'Instagram',
        leadingIcon: <Instagram />,
        link: 'https://www.instagram.com/iotafoundation/',
    },
    {
        text: 'X',
        leadingIcon: <XSocialIcon />,
        link: 'https://x.com/iota',
    },
    {
        text: 'GitHub',
        leadingIcon: <GitHub />,
        link: 'https://github.com/iotaledger',
    },
    {
        text: 'YouTube',
        leadingIcon: <Youtube />,
        link: 'https://www.youtube.com/c/iotafoundation',
    },
    {
        text: 'LinkedIn',
        leadingIcon: <LinkedIn />,
        link: 'https://www.linkedin.com/company/iotafoundation/',
    },

    {
        text: 'Blog',
        leadingIcon: <EvaluationAndInterview />,
        link: 'https://blog.iota.org',
    },
];
