import { Frame, IotaLogo } from '@repo/icons';

export const TRADE_AND_SUPPLY_VERTICAL_TITLE_CONTENT = {
    title: 'Global Trade & Supply Chain',
    body: 'Traditional trade lacks transparency and real-time visibility, slowing supply chain efficiency. IOTA breaks data silos, enabling inclusive, transparent, and digitally powered ecosystems for global trade.',
};

export const TRADE_AND_SUPPLY_ICON_CONTENT = [
    [
        {
            icon: <Frame />,
            body: '$33 trillion global trade market hampered by  significant inefficiencies and siloed systems',
            transparent: true,
        },
        {
            icon: <IotaLogo />,
            body: 'A shared infrastructure securing data integrity, data authenticity and data control',
            transparent: false,
        },
    ],
    [
        {
            icon: <Frame />,
            body: 'Manual processes plagued by delays, disputes, and lack of accuracy',
            transparent: true,
        },
        {
            icon: <IotaLogo />,
            body: 'Automated verification and settlements',
            transparent: false,
        },
    ],
    [
        {
            icon: <Frame />,
            body: '50 documents per shipment driving 10-30% of trade costs and no single source of truth',
            transparent: true,
        },
        {
            icon: <IotaLogo />,
            body: 'Cost efficient digital data sharing and tracking at scale',
            transparent: false,
        },
    ],
];
