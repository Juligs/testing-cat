import { DeveloperFriendly, IotaClientCli, IotaRustSdk } from '@repo/icons';
import { IconContent } from 'react-ui-kit';

export const TRUST_FRAMEWORK_ICON_CONTENT: (React.ComponentProps<typeof IconContent> & {
    link: string;
})[] = [
    {
        icon: <IotaClientCli />,
        title: 'Command Line Interfaces',
        body: 'Interact directly with the IOTA network through base commands targeting specific network features',
        link: 'https://docs.iota.org/developer/references/#iota-cli',
    },
    {
        icon: <IotaRustSdk />,
        title: 'Software Development Kits',
        body: 'Official IOTA SDKs in TypeScript and Rust – everything you need to start building, fast',
        link: 'https://docs.iota.org/developer/references/#iota-software-development-kits',
    },
    {
        icon: <DeveloperFriendly />,
        title: 'Application Libraries',
        body: 'Fluidly integrate unique IOTA features into your applications',
        link: 'https://docs.iota.org/',
    },
];
