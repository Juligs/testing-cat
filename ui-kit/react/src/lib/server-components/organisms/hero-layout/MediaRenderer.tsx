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
          type: 'video';
          source: string;
          sourceSet?: never;
      }
    | {
          type: 'video';
          sourceSet: SourceSets;
          source?: never;
      }
    | {
          type: 'image';
          src: string;
          sources?: never;
      }
    | {
          type: 'image';
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
    if (restProps.type === 'image') {
        return <ImageController {...restProps} className={className} alt={alt} {...imageProps} />;
    }

    if (restProps.type === 'video') {
        const { source, ...otherRestProps } = restProps;

        const videoAttributes = {
            src: source,
            ...videoProps,
            ...otherRestProps,
            className,
        };

        return <Video {...videoAttributes} />;
    }

    throw new Error('Invalid media type. Only "video" or "image" are supported.');
}
