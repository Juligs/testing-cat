import { Video, Image, SourceSets } from '@lib/server';

export interface ResponsiveMediaProps {
    sources: SourceSets;
    type: 'video' | 'image';
    className?: string;
    alt?: string;
    videoProps?: React.VideoHTMLAttributes<HTMLVideoElement>;
    imageProps?: React.ImgHTMLAttributes<HTMLImageElement>;
}

export function MediaRenderer({
    sources,
    type,
    className,
    alt,
    videoProps,
    imageProps,
}: ResponsiveMediaProps): JSX.Element {
    if (type === 'image') {
        return <Image sources={sources} className={className} alt={alt} {...imageProps} />;
    }

    if (type === 'video') {
        return <Video sourceSet={sources} {...videoProps} />;
    }

    throw new Error('Invalid media type. Only "video" or "image" are supported.');
}
