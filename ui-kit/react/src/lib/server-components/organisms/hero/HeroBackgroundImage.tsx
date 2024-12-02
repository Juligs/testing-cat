import { MediaRenderer, ResponsiveMediaProps } from './MediaRenderer';

type HeroBackgroundImageProps = Omit<ResponsiveMediaProps, 'type' | 'videoProps' | 'sources'> & {
    src?: string;
    sources?: ResponsiveMediaProps['sources'];
};

export function HeroBackgroundImage({
    sources,
    src,
    className,
    alt,
    imageProps,
}: HeroBackgroundImageProps) {
    return (
        <div className="absolute top-0 left-0 right-0 bottom-0 object-cover w-full h-full z-[-1]">
            {sources ? (
                <MediaRenderer
                    type="image"
                    sources={sources}
                    className={`max-h-full w-full h-full object-cover object-center ${className}`}
                    alt={alt}
                    imageProps={imageProps}
                />
            ) : (
                <img
                    src={src}
                    className={`max-h-full w-full h-full object-cover object-center ${className}`}
                    alt={alt || ''}
                    {...imageProps}
                />
            )}
        </div>
    );
}
