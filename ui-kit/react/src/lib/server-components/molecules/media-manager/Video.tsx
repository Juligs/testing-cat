import { BREAKPOINTS, SourceSets, sortMediaSourcesByBreakpoint } from '@lib/server';

interface VideoProps extends React.VideoHTMLAttributes<HTMLVideoElement> {
    source?: string;
    sources?: { src: string; type: string }[];
    sourceSet?: SourceSets;
    type?: string;
}

export function Video({
    source,
    sources = [],
    type = 'video/mp4',
    muted = true,
    loop = true,
    autoPlay = true,
    playsInline = true,
    sourceSet,
    ...videoProps
}: VideoProps) {
    return (
        <video
            muted={muted}
            loop={loop}
            autoPlay={autoPlay}
            playsInline={playsInline}
            preload="auto"
            {...videoProps}
        >
            {source ? (
                <VideoSource src={source} type={type} />
            ) : sources.length > 0 ? (
                sources.map((source, index) => (
                    <VideoSource key={index} src={source.src} type={source.type} />
                ))
            ) : sourceSet ? (
                <VideoSourceSet sourceSet={sourceSet} />
            ) : null}
        </video>
    );
}

function VideoSource({ src, type }: { src: string; type: string }) {
    return (
        <>
            <source src={src} type={type} />
            Your browser does not support video on HTML.
        </>
    );
}

function VideoSourceSet({ sourceSet }: { sourceSet: SourceSets }) {
    const sourceSetSorted = sortMediaSourcesByBreakpoint(sourceSet);
    return (
        <>
            {sourceSetSorted.map(([breakpoint, sourceData]) => {
                const breakpointWidth = BREAKPOINTS[breakpoint];
                if (sourceData.sources) {
                    return sourceData.sources.map(({ src, type }, index) => (
                        <source
                            key={`${breakpoint}-${index}`}
                            media={`(max-width: ${breakpointWidth}px)`}
                            src={src}
                            type={type}
                        />
                    ));
                } else {
                    return (
                        <source
                            key={breakpoint}
                            media={`(max-width: ${breakpointWidth}px)`}
                            src={sourceData.src}
                            type={sourceData.type}
                        />
                    );
                }
            })}
            {sourceSetSorted.length > 0 && (
                <source
                    src={
                        sourceSetSorted[sourceSetSorted.length - 1]?.[1]?.sources?.[0]?.src ||
                        sourceSetSorted[sourceSetSorted.length - 1]?.[1]?.src
                    }
                    type={
                        sourceSetSorted[sourceSetSorted.length - 1]?.[1]?.sources?.[0]?.type ||
                        sourceSetSorted[sourceSetSorted.length - 1]?.[1]?.type
                    }
                />
            )}
            Your browser does not support the video tag.
        </>
    );
}
