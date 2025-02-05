'use client';

import { BaseSectionProps } from '@repo/shared/interfaces';
import Link from 'next/link';
import { CtaCard, ImageCard, TitleTextSize, VerticalTitle } from 'react-ui-kit';
import {
    INTEGRATION_STACK_IMAGE_CARD_CONTENT,
    INTEGRATION_STACK_CTA_CARD_CONTENT,
    INTEGRATION_STACK_VERTICAL_TITLE_CONTENT,
} from './constants';

export function IntegrationStack({ id, theme }: BaseSectionProps) {
    return (
        <section className="w-full" id={id} data-theme={theme}>
            <div className="container py-14 sm:py-20 lg:py-30 flex justify-center  items-center flex-col gap-14 xs:gap-20 w-full">
                <div className="w-full xs:w-[650px] text-center">
                    <VerticalTitle
                        title={INTEGRATION_STACK_VERTICAL_TITLE_CONTENT.title}
                        size={TitleTextSize.Small}
                        subtitle={
                            Array.isArray(INTEGRATION_STACK_VERTICAL_TITLE_CONTENT.subtitle)
                                ? INTEGRATION_STACK_VERTICAL_TITLE_CONTENT.subtitle.map(
                                      (line, index) => <p key={index}>{line}</p>,
                                  )
                                : INTEGRATION_STACK_VERTICAL_TITLE_CONTENT.subtitle
                        }
                        body={INTEGRATION_STACK_VERTICAL_TITLE_CONTENT.body}
                        isCentered
                    />
                </div>
                <div className="flex flex-col gap-6 w-full h-full">
                    <div className="grid grid-cols-1 xs:grid-cols-2 gap-6">
                        {INTEGRATION_STACK_CTA_CARD_CONTENT.map((data, index) => (
                            <Link
                                key={index}
                                href={data.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="[&>div]:h-full"
                            >
                                <CtaCard
                                    title={data.title}
                                    subtitle={data.subtitle}
                                    animation={data.animation}
                                    brand
                                    isVertical
                                ></CtaCard>
                            </Link>
                        ))}
                    </div>
                    <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-4 gap-6">
                        {INTEGRATION_STACK_IMAGE_CARD_CONTENT.map((data, index) => (
                            <Link
                                key={index}
                                href={data.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="[&>div]:h-full"
                            >
                                <ImageCard
                                    title={data.title}
                                    subtitle={data.subtitle}
                                    animation={data.animation}
                                ></ImageCard>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
