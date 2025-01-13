import { MediaRenderer, ResponsiveMediaProps, MediaRendererDiscriminantor } from './MediaRenderer';

type HeroBackgroundProps = ResponsiveMediaProps & MediaRendererDiscriminantor;

export function HeroBackground({
    className,
    imageProps,
    videoProps,
    ...mediaProps
}: HeroBackgroundProps) {
    return (
        <div className="absolute top-0 left-0 right-0 bottom-0 object-cover w-full h-full z-[-1]">
            <MediaRenderer
                {...mediaProps}
                className={`max-h-full w-full h-full object-cover object-center ${className}`}
                imageProps={imageProps}
                videoProps={videoProps}
            />
        </div>
    );
}
