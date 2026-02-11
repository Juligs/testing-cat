import Link from 'next/link';
import { Actions, Button, HorizontalTitle, IconContent, VerticalTitle, Video } from 'react-ui-kit';
import {
    STARFISH_BUTTONS,
    STARFISH_HORIZONTAL_TITLE_CONTENT,
    STARFISH_ICON_CONTENT,
    STARFISH_VERTICAL_TITLE_CONTENT,
} from './constants';
import { BaseSectionProps } from '@repo/shared/interfaces';

export function StarfishSection({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section
            id={id}
            data-navbar-color-scheme={navbarColorScheme}
            className="relative w-full overflow-hidden bg-iota-neutral-4"
        >
            <div className="absolute top-0 left-0 w-full h-[65%] overflow-hidden z-0">
                <Video
                    src="https://files.iota.org/media/iota-network/starfish_tesnet_section_bg.mp4"
                    poster="https://files.iota.org/media/iota-network/starfish_tesnet_section_bg_poster.jpg"
                    className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(180deg,rgba(10,15,23,0)_63.85%,#0A0F17_100%)]" />
            </div>

            <div className="container relative z-10 py-14 xs:py-20 lg:py-30 flex flex-col items-center gap-14 xs:gap-20 sm:gap-30">
                <div className="w-full sm:w-[952px] text-center">
                    <VerticalTitle {...STARFISH_VERTICAL_TITLE_CONTENT} isCentered inverted>
                        <Actions>
                            {STARFISH_BUTTONS.map((data, index) => (
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
                    {STARFISH_ICON_CONTENT.map((data, index) => (
                        <IconContent key={index} {...data} inverted filled />
                    ))}
                </div>

                <HorizontalTitle {...STARFISH_HORIZONTAL_TITLE_CONTENT} inverted />
            </div>
        </section>
    );
}
