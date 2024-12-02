import { BREAKPOINTS, SourceSets, sortMediaSourcesByBreakpoint } from '@lib/server';

interface VideoProps extends React.VideoHTMLAttributes<HTMLVideoElement> {
    source?: string;
    sourceSet?: SourceSets;
    type?: string;
}

export function Video({
    source,
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
            {sourceSetSorted.map(([breakpoint, { src, type }]) => {
                const breakpointWidth = BREAKPOINTS[breakpoint];
                return (
                    <source
                        key={breakpoint}
                        media={`(max-width: ${breakpointWidth}px)`}
                        src={src}
                        type={type}
                    />
                );
            })}
            {sourceSetSorted.length > 0 && (
                <source
                    src={sourceSetSorted[sourceSetSorted.length - 1]?.[1]?.src}
                    type={sourceSetSorted[sourceSetSorted.length - 1]?.[1]?.type}
                />
            )}
            Your browser does not support the video tag.
        </>
    );
}
