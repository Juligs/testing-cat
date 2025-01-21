import { BaseSectionProps } from '@repo/shared/interfaces';
import { ImageCard, VerticalTitle } from 'react-ui-kit';
import { OUR_FEATURES_IMAGE_CARD_CONTENT, OUR_FEATURES_VERTICAL_TITLE } from './constants';
import Link from 'next/link';

export function Section3({ id, theme }: BaseSectionProps) {
    return (
        <section className="w-full" id={id} data-theme={theme}>
            <div className="container py-14 xs:py-20 lg:py-30 flex flex-col items-center justify-center gap-6 xs:gap-10 sm:gap-20">
                <div className="max-w-[568px]">
                    <VerticalTitle {...OUR_FEATURES_VERTICAL_TITLE} />
                </div>
                <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-4 gap-6">
                    {OUR_FEATURES_IMAGE_CARD_CONTENT.map((data, index) => (
                        <Link
                            href={data.link}
                            key={index}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="[&>div]:h-full"
                        >
                            <ImageCard
                                key={index}
                                title={data.title}
                                body={data.body}
                                image={data.image}
                            />
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
