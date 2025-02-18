'use client';
import { BaseSectionProps } from '@repo/shared/interfaces';
import Link from 'next/link';
import { Actions, Button, CtaCard, ImageCard, VerticalTitle } from 'react-ui-kit';
import {
    OUR_FOCUS_AREAS_CTA_CARD_CONTENT,
    OUR_FOCUS_AREAS_IMAGE_CARD_CONTENT,
    OUR_FOCUS_AREAS_VERTICAL_TITLE_CONTENT,
} from './constants';
import { ArrowTopRight } from '@repo/icons';

export function OurFocusAreas({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section id={id} data-navbar-color-scheme={navbarColorScheme}>
            <div className="container py-14 sm:py-20 lg:py-30 flex justify-center items-center flex-col gap-20 xs:gap-30 w-full">
                <div className="w-full xs:w-[650px] text-center">
                    <VerticalTitle {...OUR_FOCUS_AREAS_VERTICAL_TITLE_CONTENT}>
                        <Link href="/our-work/focus-areas" aria-label={'Explore all areas'}>
                            <Actions>
                                <Button text="Explore all areas" icon={<ArrowTopRight />} />
                            </Actions>
                        </Link>
                    </VerticalTitle>
                </div>
                <div className="flex flex-col gap-6 w-full h-full">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {OUR_FOCUS_AREAS_CTA_CARD_CONTENT.map((data, index) => (
                            <Link
                                key={index}
                                href={data.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="[&>div]:h-full"
                                aria-label={`Link to ${data.title}`}
                            >
                                <CtaCard
                                    title={data.title}
                                    subtitle={data.subtitle}
                                    image={data.image}
                                    brand
                                    isVertical
                                ></CtaCard>
                            </Link>
                        ))}
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                        {OUR_FOCUS_AREAS_IMAGE_CARD_CONTENT.map((data, index) => (
                            <Link
                                key={index}
                                href={data.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="[&>div]:h-full"
                                aria-label={`Link to ${data.title}`}
                            >
                                <ImageCard
                                    title={data.title}
                                    subtitle={data.subtitle}
                                    image={data.image}
                                ></ImageCard>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
