import { CtaCard, TitleTextSize, VerticalTitle, Video } from 'react-ui-kit';
import { Animation } from 'react-ui-kit/client';

export const INTEGRATION_STACK_VERTICAL_TITLE_CONTENT: React.ComponentProps<typeof VerticalTitle> =
    {
        title: 'A Stack to Power the World',
        body: 'The IOTA Integration Stack builds the foundations of a new digital economy',
        size: TitleTextSize.ExtraSmall,
        isCentered: true,
    };

export const INTEGRATION_STACK_CTA_CARD_CONTENT: (React.ComponentProps<typeof CtaCard> & {
    link: string;
})[] = [
    {
        title: 'IOTA Mainnet',
        subtitle: 'Move-based Layer 1 with object-centric architecture',
        animation: <Animation src="/homepage/integration-stack/cta-animation/tangle.json" />,
        link: '/products/mainnet',
        brand: true,
    },
    {
        title: 'Consensus for real applications',
        subtitle:
            'Starfish keeps IOTA moving through rough seas. Robust under real-world network conditions',
        image: '/homepage/integration-stack/starfish.png',
        link: '/learn/consensus/#starfish',
        inverted: true,
        animation: (
            <Video
                src="https://files.iota.org/media/iota-network/starfish_video_cta_card.mp4"
                poster="https://files.iota.org/media/iota-network/starfish_video_cta_card_poster.jpg"
                className="w-full h-full object-cover"
            />
        ),
    },
];

export const TRUST_FRAMEWORK_PAGE = {
    title: 'Trust Framework',
    size: TitleTextSize.ExtraSmall,
};
