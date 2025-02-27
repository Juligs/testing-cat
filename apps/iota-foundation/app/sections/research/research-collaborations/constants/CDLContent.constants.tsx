import { ButtonVariant, TitleTextSize } from 'react-ui-kit';

export const CDL_TITLE_CONTENT = {
    title: 'CDL-BOT',
    subtitle: 'Researching DLT interoperability in the Internet of Things',
    body: 'We?ve partnered with TU Wien?s Christian Doppler Laboratory Blockchain Technologies for the Internet of Things (CDL-BOT). The research aims to integrate new technologies, explore cross-blockchain token transfers, and enhance smart contract interoperability to advance the DLT ecosystem.',
    size: TitleTextSize.Small,
};

export const CDL_BUTTONS = [
    {
        text: 'Learn more',
        link: 'https://www.cdl-bot.at/en',
        variant: ButtonVariant.Primary,
    },
    {
        text: 'Blog Post',
        link: 'https://blog.iota.org/iota-pantos-and-tu-wien-announce-opening-of-christian-doppler-laboratory-for-dlt-research-3eb4389148bc/',
        variant: ButtonVariant.Secondary,
    },
];
