import { BREAKPOINTS, SourceSets, sortMediaSourcesByBreakpoint } from '@lib/server';
import { Fragment } from 'react/jsx-runtime';
interface ImageProps {
    sources: SourceSets;
    alt?: string;
    className?: string;
}
export function Image({ sources, alt, className }: ImageProps) {
    const sourcedSorted = sortMediaSourcesByBreakpoint(sources);
    return (
        <picture>
            {sourcedSorted.map(([breakpoint, { src }], index) => {
                const breakpointWidth = BREAKPOINTS[breakpoint];
                const lastElement = sourcedSorted[sourcedSorted.length - 1];
                const isLastElement = index === sourcedSorted.length - 1 && !!lastElement;
                return (
                    <Fragment key={breakpoint}>
                        <source media={`(max-width: ${breakpointWidth}px)`} srcSet={src} />
                        {isLastElement && (
                            <img className={className} alt={alt || ''} src={lastElement[1].src} />
                        )}
                    </Fragment>
                );
            })}
        </picture>
    );
}
