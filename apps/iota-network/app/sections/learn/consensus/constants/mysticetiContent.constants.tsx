import {
    HighProductivity,
    ImportFromSeed,
    IotaDnsResolver,
    ProtocolAgnosticDesign,
    SelectiveDisclosure,
    Speed,
} from '@repo/icons';
import { TitleTextSize, VerticalTitle } from 'react-ui-kit';
import { VerticalTitleWithIcon } from './components/VerticalTitleWithIcon';

export const MYSTICETI_VERTICAL_TITLE: React.ComponentProps<typeof VerticalTitle> = {
    title: 'What global scale actually requires',
    subtitle: 'The consensus you need when pilots become production',
    size: TitleTextSize.ExtraSmall,
};

export const MYSTICETI_SMALL_VERTICAL_TITLE: React.ComponentProps<typeof VerticalTitleWithIcon>[] =
    [
        {
            icon: <ProtocolAgnosticDesign />,
            title: 'Steady progress',
            subtitle: 'Your network keeps moving, even when some participants fall behind.',
        },
        {
            icon: <Speed />,
            title: 'Fast finality',
            subtitle:
                'Irreversible settlement happens quickly, so operations can move with confidence.',
        },
        {
            icon: <IotaDnsResolver />,
            title: 'Enterprise ready',
            subtitle: 'Built for the workloads global operations actually run on.',
        },
        {
            icon: <ImportFromSeed />,
            title: 'Higher resilience',
            subtitle: "Temporary slowdowns don't cascade into system-wide disruption.",
        },
        {
            icon: <HighProductivity />,
            title: 'Predictable performance',
            subtitle: 'Consistent behavior across regions, conditions, and load.',
        },
        {
            icon: <SelectiveDisclosure />,
            title: 'Parallel recovery',
            subtitle: 'Recovery happens in the background. Operations stay in the foreground.',
        },
    ];
