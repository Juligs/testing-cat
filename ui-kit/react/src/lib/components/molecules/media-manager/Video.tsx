interface VideoProps extends React.VideoHTMLAttributes<HTMLVideoElement> {
    source: string;
    type?: string;
}

export function Video({
    source,
    type = 'video/mp4',
    muted = true,
    loop = true,
    autoPlay = true,
    playsInline = true,
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
            <source src={source} type={type} />
            Your browser does not support video on HTML.
        </video>
    );
}
