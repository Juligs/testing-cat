import { BREAKPOINTS, SourceSets, sortMediaSourcesByBreakpoint } from '@lib/server';
import { Fragment } from 'react/jsx-runtime';

interface ImageBaseProps {
    alt?: string;
    className?: string;
}

interface ImageSourcesProps extends ImageBaseProps {
    sources: SourceSets;
}

export function ImageSources({ sources, alt, className }: ImageSourcesProps) {
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
                            <img
                                className={className}
                                alt={alt || lastElement[1].src}
                                src={lastElement[1].src}
                            />
                        )}
                    </Fragment>
                );
            })}
        </picture>
    );
}

interface ImageProps extends ImageBaseProps {
    src: string;
}

export function Image({ src, alt, className }: ImageProps) {
    return <img src={src} alt={alt} className={className} />;
}

export type ImageControllerType = ImageSourcesProps | ImageProps;

export function ImageController(props: ImageControllerType) {
    const { alt, className } = props;
    if ('sources' in props) {
        return <ImageSources sources={props.sources} alt={alt} className={className} />;
    }

    return <Image src={props.src} alt={alt} className={className} />;
}
