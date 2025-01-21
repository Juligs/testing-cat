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
    SECTION8_BUTTONS,
    SECTION8_CTA_CARD_CONTENT,
    SECTION8_IMAGE_CARD_CONTENT,
    SECTION8_TEXT_LINK,
    SECTION8_VERTICAL_TITLE_CONTENT,
} from './constants';
import { BaseSectionProps } from '@repo/shared/interfaces';

export function Section8({ id, theme }: BaseSectionProps) {
    return (
        <section
            className="w-full box-border relative overflow-hidden bg-network-neutral-4"
            id={id}
            data-theme={theme}
        >
            <Video
                src="https://files.iota.org/media/iota-network/why_build_on_iota.mp4"
                poster="https://files.iota.org/media/iota-network/why_build_on_iota_poster.jpg"
                className="absolute top-0 left-0 w-full h-auto object-contain z-0"
            />

            <div className="container py-14 xs:py-20 lg:py-30 flex justify-center items-center flex-col gap-14 xs:gap-20 sm:gap-30 w-full relative z-10">
                <div className="w-full sm:w-[952px] text-center">
                    <VerticalTitle
                        title={SECTION8_VERTICAL_TITLE_CONTENT.title}
                        size={TitleTextSize.Medium}
                        subtitle={
                            Array.isArray(SECTION8_VERTICAL_TITLE_CONTENT.subtitle)
                                ? SECTION8_VERTICAL_TITLE_CONTENT.subtitle.map((line, index) => (
                                      <p key={index}>{line}</p>
                                  ))
                                : SECTION8_VERTICAL_TITLE_CONTENT.subtitle
                        }
                        body={SECTION8_VERTICAL_TITLE_CONTENT.body}
                        isCentered
                        inverted
                    >
                        <Actions>
                            {SECTION8_BUTTONS.map((data, index) => (
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
                    {SECTION8_IMAGE_CARD_CONTENT.map((data, index) => (
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
                <CtaCard {...SECTION8_CTA_CARD_CONTENT}>
                    <Actions>
                        {SECTION8_TEXT_LINK.map((data, index) => (
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
