import {
    HighProductivity,
    IotaDnsResolver,
    Speed,
    SustainabilityScalabilityAndTransparency,
} from '@repo/icons';
import { IconContent, TitleTextSize, VerticalTitle } from 'react-ui-kit';

export const PROOF_POINTS_VERTICAL_TITLE: React.ComponentProps<typeof VerticalTitle> = {
    title: 'Proof points that matter',
    body: 'Starfish is designed to support scalable, fault-tolerant operation in distributed environments',
    size: TitleTextSize.ExtraSmall,
};

export const PROOF_POINTS_ICON_CONTENT: React.ComponentProps<typeof IconContent>[] = [
    {
        icon: <IotaDnsResolver />,
        title: 'Scalable by design',
        body: 'Built to support high-throughput operation as activity grows',
    },
    {
        icon: <HighProductivity />,
        title: 'Fault tolerant',
        body: 'Remains secure and operational when some participants fall behind',
    },
    {
        icon: <Speed />,
        title: 'Stable latency',
        body: 'What Starfish delivers when your network is under pressure',
    },
    {
        icon: <SustainabilityScalabilityAndTransparency />,
        title: 'Distributed validation',
        body: 'Evaluated for environments where validators operate across regions',
    },
];
