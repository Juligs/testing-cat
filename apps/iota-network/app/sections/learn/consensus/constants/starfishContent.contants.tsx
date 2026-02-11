import {
    ArrowTopRight,
    IotaDnsResolver,
    SeamlessIntegrationWithWeb3,
    TradeSupplyChain,
    UserExperience,
} from '@repo/icons';
import {
    Button,
    ButtonVariant,
    HorizontalTitle,
    IconContent,
    TitleTextSize,
    VerticalTitle,
} from 'react-ui-kit';

export const STARFISH_VERTICAL_TITLE_CONTENT: React.ComponentProps<typeof VerticalTitle> = {
    overline: 'On Testnet - Starfish improvements',
    title: 'Robust under real-world network conditions',
    subtitle: ['Starfish keeps IOTA moving through rough sea'],
    body: 'Trade doesn’t pause for storms or port delays. Starfish is the next consensus upgrade that helps IOTA keep progressing when parts of the network slow down, while recovery happens in parallel.',
};

export const STARFISH_BUTTONS: (React.ComponentProps<typeof Button> & { link: string })[] = [
    {
        text: 'Learn more',
        link: 'https://docs.iota.org/about-iota/iota-architecture/consensus#the-starfish-protocol',
        variant: ButtonVariant.Primary,
        icon: <ArrowTopRight />,
        inverted: false,
    },
    {
        text: 'Read the paper',
        link: 'https://eprint.iacr.org/2025/567',
        variant: ButtonVariant.Secondary,
        icon: <ArrowTopRight />,
        inverted: true,
    },
];

export const STARFISH_ICON_CONTENT: React.ComponentProps<typeof IconContent>[] = [
    {
        title: 'Built for real adoption',
        body: 'The kind of steady operation trade infrastructure needs.',
        icon: <TradeSupplyChain />,
    },
    {
        title: 'Operations continue',
        body: 'Temporary delays don’t freeze the whole network.',
        icon: <IotaDnsResolver />,
    },
    {
        title: 'Designed for disruption',
        body: 'Doesn’t hinge on every participant moving at the same pace.',
        icon: <UserExperience />,
    },
    {
        title: 'Early access on testnet',
        body: 'Starfish comes to testnet first.',
        icon: <SeamlessIntegrationWithWeb3 />,
    },
];

export const STARFISH_HORIZONTAL_TITLE_CONTENT: React.ComponentProps<typeof HorizontalTitle> = {
    title: 'Starfish Upgrade',
    subtitle: 'Next Testnet Consensus',
    body: 'Starfish is a BFT protocol inspired by Mysticeti, built to address observed robustness limitations while retaining high throughput and fast finality.',
    size: TitleTextSize.Small,
};
