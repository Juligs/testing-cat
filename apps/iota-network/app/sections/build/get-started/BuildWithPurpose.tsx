import { ImageCard, ImageCardSize, VerticalTitle } from 'react-ui-kit';
import { BUILD_PURPOSE_IMAGE_CARD_CONTENT, BUILD_PURPOSE_VERTICAL_TITLE } from './constants';
import Link from 'next/link';
import clsx from 'clsx';

interface BuildWithPurposeProps {
    id?: string;
    inverted?: boolean;
    className?: string;
}
export function BuildWithPurpose({ id, inverted, className }: BuildWithPurposeProps) {
    return (
        <div className={clsx('grid grid-cols-1 sm:grid-cols-[1fr_2fr] gap-6', className)} id={id}>
            <div className="max-w-[464px]">
                <VerticalTitle {...BUILD_PURPOSE_VERTICAL_TITLE} inverted={inverted} />
            </div>
            <div className="grid grid-cols-1 xs:grid-cols-2 gap-6">
                {BUILD_PURPOSE_IMAGE_CARD_CONTENT.map((data, index) => (
                    <Link
                        href={data.link}
                        key={index}
                        aria-label={`Link to ${data.title}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="[&>div]:h-full"
                    >
                        <ImageCard {...data} inverted={inverted} size={ImageCardSize.Small} />
                    </Link>
                ))}
            </div>
        </div>
    );
}
