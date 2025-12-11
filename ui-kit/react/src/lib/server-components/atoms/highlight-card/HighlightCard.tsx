import { ArrowTopRight } from '@repo/icons';

import clsx from 'clsx';

interface HighlightCardProps {
    /**
     *  small text above the title
     */
    overline?: string;
    /**
     * the title of the card
     */
    title: string;
    /**
     * the text body of the card
     */
    body?: string;
    /**
     * background image url
     */
    backgroundImage?: string;
    /**
     * background gradient overlay
     */
    hasGradientOverlay?: boolean;
}

export function HighlightCard({
    overline,
    title,
    body,
    backgroundImage,
    hasGradientOverlay = true,
}: HighlightCardProps) {
    const overlayStyle = {
        background: hasGradientOverlay
            ? 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.6) 60%, rgba(0,0,0,1) 100%)'
            : undefined,
        maskImage: 'linear-gradient(to top, black 60%, transparent 100%)',
        WebkitMaskImage: 'linear-gradient(to top, black 60%, transparent 100%)',
    };

    return (
        <div
            className={clsx(
                'relative flex flex-col px-8 pt-8 pb-12 rounded-3xl gap-8 cursor-pointer group min-h-[400px] bg-iota-neutral-0 bg-cover bg-center justify-between',
            )}
            style={backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : undefined}
        >
            <div
                className={clsx(
                    'absolute inset-x-0 bottom-0 h-[50%] pointer-events-none rounded-b-3xl',
                    hasGradientOverlay && 'backdrop-blur',
                )}
                style={overlayStyle}
            />

            <div className="relative z-10 flex justify-between items-start">
                <div className="flex flex-col gap-2">
                    {overline && <p className="text-label-sm text-iota-neutral-80">{overline}</p>}
                    <h3 className="text-title-md text-darkest-inverted">{title}</h3>
                </div>
                <ArrowTopRight className="text-darkest-inverted w-6 h-6 flex-none shrink-0 transform transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </div>
            {body && (
                <p className="text-body-sm text-iota-neutral-80 overflow-hidden text-ellipsis line-clamp-3 z-10">
                    {body}
                </p>
            )}
        </div>
    );
}
