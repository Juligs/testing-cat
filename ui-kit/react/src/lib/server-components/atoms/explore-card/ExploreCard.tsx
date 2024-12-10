import clsx from 'clsx';
import { ArrowTopRight } from '@repo/icons';
import { ExploreCardSize } from './exploreCard.enums';
import {
    BG_COLOR,
    BG_COLOR_INVERTED,
    TEXT_COLOR,
    TEXT_COLOR_INVERTED,
    TITLE_SIZE,
    SUBTITLE_COLOR,
    SUBTITLE_COLOR_INVERTED,
} from './exploreCard.constants';

interface exploreCardProps {
    /**
     * the title of the card
     */
    title: string;
    /**
     * the subtitle of the card
     */
    subtitle?: string;
    /**
     * icon to be displayed on the card
     */
    inverted?: boolean;
    /**
     * size of the card
     */
    size?: ExploreCardSize;
}

export function ExploreCard({
    title,
    subtitle,
    inverted,
    size = ExploreCardSize.Large,
}: exploreCardProps) {
    const isSmall = size === ExploreCardSize.Small;
    const bgColors = inverted ? BG_COLOR_INVERTED : BG_COLOR;
    const textColor = inverted ? TEXT_COLOR_INVERTED : TEXT_COLOR;
    const subtitleColor = inverted ? SUBTITLE_COLOR_INVERTED : SUBTITLE_COLOR;

    return (
        <div
            className={clsx(
                'flex state-layer p-8 rounded-3xl min-h-[240px] group cursor-pointer',
                bgColors,
                textColor,
            )}
        >
            <div
                className={clsx(
                    'relative flex flex-col w-full',
                    isSmall && subtitle ? 'justify-between' : 'justify-end',
                    isSmall ? '' : 'gap-2',
                    isSmall && !subtitle ? 'justify-center' : '',
                )}
            >
                <ArrowTopRight className="absolute top-0 right-0 w-8 h-8 transform transition-transform duration-400 group-hover:translate-x-1 group-hover:-translate-y-1" />
                <p className={clsx(TITLE_SIZE[size])}>{title}</p>
                {subtitle && <p className={clsx('text-body-lg', subtitleColor)}>{subtitle}</p>}
            </div>
        </div>
    );
}
