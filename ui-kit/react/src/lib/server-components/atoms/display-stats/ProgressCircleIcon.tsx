import {
    ICON_COLOR_INVERTED,
    ICON_COLOR_DEFAULT,
    ICON_BG_INVERTED,
    ICON_BG_DEFAULT,
} from './displayStats.constans';

interface ProgressCircleIconProps {
    progress: number;
    size?: number;
    inverted?: boolean;
}
const VIEWBOX_SIZE = 48;
const CIRCLE_RADIUS = 22;
const STROKE_WIDTH = 4;

export function ProgressCircleIcon({
    progress,
    size = VIEWBOX_SIZE,
    inverted = false,
}: ProgressCircleIconProps) {
    const center = VIEWBOX_SIZE / 2;
    const clampedProgress = Math.min(100, Math.max(0, progress));
    const circumference = 2 * Math.PI * CIRCLE_RADIUS;
    const offset = circumference - (clampedProgress / 100) * circumference;
    const strokeClass = inverted ? ICON_COLOR_INVERTED : ICON_COLOR_DEFAULT;
    const bgClass = inverted ? ICON_BG_INVERTED : ICON_BG_DEFAULT;

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox={`0 0 ${VIEWBOX_SIZE} ${VIEWBOX_SIZE}`}
            fill="none"
        >
            <circle
                cx={center}
                cy={center}
                r={CIRCLE_RADIUS}
                className={bgClass}
                stroke="currentColor"
                strokeWidth={STROKE_WIDTH}
            />
            <circle
                cx={center}
                cy={center}
                r={CIRCLE_RADIUS}
                className={strokeClass}
                stroke="currentColor"
                strokeWidth={STROKE_WIDTH}
                strokeDasharray={circumference}
                strokeDashoffset={offset}
                strokeLinecap="round"
                transform={`rotate(-90 ${center} ${center})`}
            />
        </svg>
    );
}
