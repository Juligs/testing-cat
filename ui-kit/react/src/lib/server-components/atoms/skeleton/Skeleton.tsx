import { clsx } from 'clsx';
import { DEFAULT_BG_COLOR, INVERTED_BG_COLOR } from './skeleton.contants';
interface SkeletonProps {
    /**
     * The width of the skeleton
     */
    width?: string;
    /**
     * The height of the skeleton
     */
    height?: string;
    /**
     * Color inverted
     */
    inverted?: boolean;
}

export function Skeleton({ width = 'w-full', height = 'h-4', inverted }: SkeletonProps) {
    return (
        <div
            className={clsx(
                'animate-pulse bg-gradient-to-r from rounded-md',
                inverted ? INVERTED_BG_COLOR : DEFAULT_BG_COLOR,
                width,
                height,
            )}
        />
    );
}
