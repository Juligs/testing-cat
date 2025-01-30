import { BaseSectionProps } from '@repo/shared/interfaces';
import { HorizontalTitle, ImageCard } from 'react-ui-kit';
import { FOCUS_AREAS_HORIZONTAL_TITLE, FOCUS_AREAS_IMAGE_CARD_CONTENT } from './constants';
import Link from 'next/link';

export function Section7({ id, theme }: BaseSectionProps) {
    return (
        <section className="w-full bg-network-neutral-6" id={id} data-theme={theme}>
            <div className="container py-14 xs:py-20 lg:py-30 flex flex-col gap-6 xs:gap-14 sm:gap-20">
                <div className="w-full">
                    <HorizontalTitle {...FOCUS_AREAS_HORIZONTAL_TITLE} />
                </div>
                <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-6">
                    {FOCUS_AREAS_IMAGE_CARD_CONTENT.map((data, index) => (
                        <Link href={data.link} key={index} className="[&>div]:h-full">
                            <ImageCard
                                key={index}
                                title={data.title}
                                subtitle={data.subtitle}
                                image={data.image}
                                inverted
                            />
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
