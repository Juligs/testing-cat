import { TitleTextSize, VerticalTitle, CtaCard, ImageCard } from 'react-ui-kit';
import { CTA_CARD_CONTENT, IMAGE_CARD_CONTENT, VERTICAL_TITLE_CONTENT } from './constants';

import Link from 'next/link';

export function Section3({ id }: { id: string }) {
    return (
        <section className="w-full" id={id}>
            <div className="container py-14 sm:py-20 lg:py-30 flex justify-center  items-center flex-col gap-14 xs:gap-20 w-full">
                <div className="w-full xs:w-[650px] text-center">
                    <VerticalTitle
                        title={VERTICAL_TITLE_CONTENT.title}
                        size={TitleTextSize.Small}
                        subtitle={
                            Array.isArray(VERTICAL_TITLE_CONTENT.subtitle)
                                ? VERTICAL_TITLE_CONTENT.subtitle.map((line, index) => (
                                      <p key={index}>{line}</p>
                                  ))
                                : VERTICAL_TITLE_CONTENT.subtitle
                        }
                        body={VERTICAL_TITLE_CONTENT.body}
                        isCentered
                    />
                </div>
                <div className="flex flex-col gap-6 w-full h-full">
                    <div className="grid grid-cols-1 xs:grid-cols-2 gap-6">
                        {CTA_CARD_CONTENT.map((data, index) => (
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
                                    image={data.image}
                                    brand
                                    isVertical
                                ></CtaCard>
                            </Link>
                        ))}
                    </div>
                    <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-4 gap-6">
                        {IMAGE_CARD_CONTENT.map((data, index) => (
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
