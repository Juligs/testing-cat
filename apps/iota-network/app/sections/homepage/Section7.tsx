import Link from 'next/link';
import {
    Actions,
    Button,
    CtaCard,
    ImageCard,
    TextLink,
    TitleTextSize,
    VerticalTitle,
    Video,
} from 'react-ui-kit';
import {
    SECTION7_BUTTONS,
    SECTION7_CTA_CARD_CONTENT,
    SECTION7_IMAGE_CARD_CONTENT,
    SECTION7_TEXT_LINK,
    SECTION7_VERTICAL_TITLE_CONTENT,
} from './constants/section7Content.constants';

export function Section7({ id }: { id: string }) {
    return (
        <section
            className="w-full box-border relative overflow-hidden bg-network-neutral-4"
            id={id}
        >
            <Video
                src="https://files.iota.org/media/iota-network/why_build_on_iota.mp4"
                poster="https://files.iota.org/media/iota-network/why_build_on_iota_poster.jpg"
                className="absolute top-0 left-0 w-full h-auto object-contain z-0"
            />

            <div className="container py-14 xs:py-20 lg:py-30 flex justify-center items-center flex-col gap-14 xs:gap-20 sm:gap-30 w-full relative z-10">
                <div className="w-full sm:w-[952px] text-center">
                    <VerticalTitle
                        title={SECTION7_VERTICAL_TITLE_CONTENT.title}
                        size={TitleTextSize.Medium}
                        subtitle={
                            Array.isArray(SECTION7_VERTICAL_TITLE_CONTENT.subtitle)
                                ? SECTION7_VERTICAL_TITLE_CONTENT.subtitle.map((line, index) => (
                                      <p key={index}>{line}</p>
                                  ))
                                : SECTION7_VERTICAL_TITLE_CONTENT.subtitle
                        }
                        body={SECTION7_VERTICAL_TITLE_CONTENT.body}
                        isCentered
                        inverted
                    >
                        <Actions>
                            {SECTION7_BUTTONS.map((data, index) => (
                                <Link
                                    key={index}
                                    href={data.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Button
                                        text={data.text}
                                        variant={data.variant}
                                        icon={data.icon}
                                        inverted={data.inverted}
                                    />
                                </Link>
                            ))}
                        </Actions>
                    </VerticalTitle>
                </div>
                <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-4 gap-6">
                    {SECTION7_IMAGE_CARD_CONTENT.map((data, index) => (
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
                                inverted
                            ></ImageCard>
                        </Link>
                    ))}
                </div>
                <CtaCard
                    title={SECTION7_CTA_CARD_CONTENT.title}
                    subtitle={SECTION7_CTA_CARD_CONTENT.subtitle}
                    image={SECTION7_CTA_CARD_CONTENT.image}
                    inverted
                >
                    <Actions>
                        {SECTION7_TEXT_LINK.map((data, index) => (
                            <Link
                                key={index}
                                href={data.link}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <TextLink text={data.text} showIcon inverted />
                            </Link>
                        ))}
                    </Actions>
                </CtaCard>
            </div>
        </section>
    );
}
