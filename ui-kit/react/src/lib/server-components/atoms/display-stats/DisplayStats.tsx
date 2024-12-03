import clsx from 'clsx';
import {
    DEFAULT_BG_COLOR,
    INVERTED_BG_COLOR,
    LIGHT_BG_COLOR,
    DEFAULT_TEXT_COLOR,
    INVERTED_TEXT_COLOR,
    HIGLIGHTED_TEXT_COLOR,
} from './displayStats.constans';

interface DisplayStatsProps {
    /**
     * label of the stats
     */
    label: string;
    /**
     * value of the stats
     */
    value: string;
    /**
     * inverted colors
     */
    inverted?: boolean;
    /**
     * highlight colors
     */
    highlighted?: boolean;
}

export function DisplayStats({ label, value, inverted, highlighted }: DisplayStatsProps) {
    const bgColors = highlighted
        ? inverted
            ? LIGHT_BG_COLOR
            : LIGHT_BG_COLOR
        : inverted
          ? INVERTED_BG_COLOR
          : DEFAULT_BG_COLOR;

    const textColor = highlighted
        ? inverted
            ? HIGLIGHTED_TEXT_COLOR
            : HIGLIGHTED_TEXT_COLOR
        : inverted
          ? INVERTED_TEXT_COLOR
          : DEFAULT_TEXT_COLOR;

    return (
        <div
            className={clsx(
                'flex flex-col justify-between items-start p-6 rounded-3xl w-full min-h-[180px]',
                bgColors,
                textColor,
            )}
        >
            <p className="text-label-sm">{label}</p>
            <p className="text-headline-sm">{value}</p>
        </div>
    );
}
