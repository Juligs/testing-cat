import { IconContent, TitleTextSize, VerticalTitle } from 'react-ui-kit';

type IconContentItemWithLink = React.ComponentProps<typeof IconContent> & {
    link?: string;
};

export const COLLECTED_DATA_VERTICAL_TITLE: React.ComponentProps<typeof VerticalTitle> = {
    title: 'Collected Data Points',
    size: TitleTextSize.ExtraSmall,
};

export const COLLECTED_DATA_ICON_CONTENT: IconContentItemWithLink[] = [
    {
        title: 'Hardware Assessment',
        body: 'CCRI gathers data on the hardware requirements for the IOTA Ecosystem',
        link: 'https://docs.iota.org/operator/validator-node/systemd',
    },
    {
        title: 'Hardware Measurement',
        body: 'CCRI maintains a state-of-the-art, temperature-controlled lab in Munich that houses a variety of hardware configurations. Depending on the hardware needs, node software is set up on the devices and monitored for their electricity usage over a full day.',
    },
    {
        title: 'Transaction Impact Analysis',
        body: 'CCRI monitors, alongside the power demand of an individual node, the transaction throughput of the node, building a model that allows to account for the increased electricity consumption due to larger transaction throughputs.',
    },
    {
        title: 'Network Energy Analysis',
        body: 'CCRI then uses an average best-guess electricity consumption and transaction throughput to calculate the total network electricity consumption by multiplying with the number of validators in the network.',
    },
    {
        title: 'Carbon Impact Estimation',
        body: 'By pinpointing node locations, CCRI generates a network-specific carbon intensity profile. The carbon intensity is then used to calculate the total carbon footprint of the network',
    },
];
