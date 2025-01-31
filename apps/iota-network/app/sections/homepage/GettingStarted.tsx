import { VerticalTitle, ImageCard, TitleTextSize } from 'react-ui-kit';
import {
    GETTING_STARTED_IMAGE_CARD_CONTENT,
    GETTING_STARTED_VERTICAL_TITLE_CONTENT,
} from './constants';
import Link from 'next/link';
import { BaseSectionProps } from '@repo/shared/interfaces';

export function GettingStarted({ id, theme }: BaseSectionProps) {
    return (
        <section className="w-full" id={id} data-theme={theme}>
            <div className="container py-14 xs:py-20 lg:py-30 flex flex-col gap-6 xs:gap-10 sm:gap-20">
                <VerticalTitle
                    title={GETTING_STARTED_VERTICAL_TITLE_CONTENT.title}
                    subtitle={GETTING_STARTED_VERTICAL_TITLE_CONTENT.subtitle}
                    size={TitleTextSize.Small}
                />
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    {GETTING_STARTED_IMAGE_CARD_CONTENT.map((data, index) => (
                        <Link
                            key={index}
                            href={data.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="[&>div]:h-full"
                        >
                            <ImageCard title={data.title} image={data.image} />
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
