import { Video, SourceSets, ImageController } from '@lib/server';

export interface ResponsiveMediaProps {
    className?: string;
    alt?: string;
    videoProps?: React.VideoHTMLAttributes<HTMLVideoElement>;
    imageProps?: React.ImgHTMLAttributes<HTMLImageElement>;
}

export type MediaRendererProps = ResponsiveMediaProps & MediaRendererDiscriminantor;

export type MediaRendererDiscriminantor =
    | {
          mediaType: 'video';
          sources?: { src: string; type: string }[];
          source?: string;
          sourceSet?: never;
          type?: string;
      }
    | {
          mediaType: 'video';
          source?: never;
          sourceSet: SourceSets;
          sources?: never;
          type?: string;
      }
    | {
          mediaType: 'image';
          src: string;
          sources?: never;
      }
    | {
          mediaType: 'image';
          sources: SourceSets;
          src?: never;
      };

export function MediaRenderer({
    className,
    alt,
    videoProps,
    imageProps,
    ...restProps
}: MediaRendererProps): JSX.Element {
    if (restProps.mediaType === 'image') {
        const { mediaType, ...filteredProps } = restProps;

        return (
            <ImageController {...filteredProps} className={className} alt={alt} {...imageProps} />
        );
    }

    if (restProps.mediaType === 'video') {
        const { source, sources, sourceSet, mediaType, ...filteredProps } = restProps;
        const videoAttributes = {
            source,
            sources,
            sourceSet,
            ...videoProps,
            ...filteredProps,
            className,
        };

        return <Video {...videoAttributes} />;
    }

    throw new Error('Invalid media type. Only "video" or "image" are supported.');
}
