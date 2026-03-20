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
    WHY_BUILD_BUTTONS,
    WHY_BUILD_CTA_CARD_CONTENT,
    WHY_BUILD_IMAGE_CARD_CONTENT,
    WHY_BUILD_TEXT_LINK,
    WHY_BUILD_VERTICAL_TITLE_CONTENT,
} from './constants';
import { BaseSectionProps } from '@repo/shared/interfaces';

export function WhyBuild({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section
            className="w-full box-border relative overflow-hidden bg-iota-neutral-4"
            id={id}
            data-navbar-color-scheme={navbarColorScheme}
        >
            <Video
                src="https://files.iota.org/media/iota-network/why_build_on_iota.mp4"
                poster="https://files.iota.org/media/iota-network/why_build_on_iota_poster.jpg"
                className="absolute top-0 left-0 w-full h-auto object-contain z-0"
            />

            <div className="container py-14 xs:py-20 lg:py-30 flex justify-center items-center flex-col gap-14 xs:gap-20 sm:gap-30 w-full relative z-10">
                <div className="w-full sm:w-[952px] text-center">
                    <VerticalTitle
                        title={WHY_BUILD_VERTICAL_TITLE_CONTENT.title}
                        size={TitleTextSize.Medium}
                        subtitle={
                            Array.isArray(WHY_BUILD_VERTICAL_TITLE_CONTENT.subtitle)
                                ? WHY_BUILD_VERTICAL_TITLE_CONTENT.subtitle.map((line, index) => (
                                      <p key={index}>{line}</p>
                                  ))
                                : WHY_BUILD_VERTICAL_TITLE_CONTENT.subtitle
                        }
                        body={WHY_BUILD_VERTICAL_TITLE_CONTENT.body}
                        isCentered
                        inverted
                    >
                        <Actions>
                            {WHY_BUILD_BUTTONS.map((data, index) => (
                                <Link
                                    key={index}
                                    href={data.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={`Link to ${data.text}`}
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
                    {WHY_BUILD_IMAGE_CARD_CONTENT.map((data, index) => (
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
                                inverted
                            ></ImageCard>
                        </Link>
                    ))}
                </div>
                <CtaCard {...WHY_BUILD_CTA_CARD_CONTENT}>
                    <Actions>
                        {WHY_BUILD_TEXT_LINK.map((data, index) => (
                            <Link
                                key={index}
                                href={data.link}
                                target={data.isExternal ? '_blank' : undefined}
                                rel={data.isExternal ? 'noopener noreferrer' : undefined}
                                aria-label={`Link to ${data.text}`}
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
