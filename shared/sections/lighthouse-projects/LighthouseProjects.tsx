'use client';
import { Actions, ImageCard, TextLink, TitleTextSize, VerticalTitle } from 'react-ui-kit';
import { useTheme } from 'react-ui-kit/client';
import { BaseSectionProps } from '../../interfaces';
import { getSharedSectionLink } from '../../utils';
import {
    LIGHTHOUSE_IMAGE_CARD_CONTENT,
    LIGHTHOUSE_VERTICAL_TITLE_CONTENT,
} from './lighthouseContent.constants';
import clsx from 'clsx';

interface LighthouseProjectsProps extends BaseSectionProps {
    showLink?: boolean;
    animation?: boolean;
    small?: boolean;
}

export function LighthouseProjects({
    id,
    navbarColorScheme,
    showLink = true,
    animation = true,
    small,
}: LighthouseProjectsProps) {
    const themeContext = useTheme();
    return (
        <section className="bg-white" id={id} data-navbar-color-scheme={navbarColorScheme}>
            <div
                className={clsx(
                    'container flex flex-col gap-6 xs:gap-10 sm:gap-20',
                    small ? 'py-10 xs:py-16 lg:py-20' : 'py-14 xs:py-20 lg:py-30',
                )}
            >
                <VerticalTitle
                    title={LIGHTHOUSE_VERTICAL_TITLE_CONTENT.title}
                    size={small ? TitleTextSize.ExtraSmall : TitleTextSize.Small}
                    isCentered
                >
                    {showLink && (
                        <a
                            href={getSharedSectionLink(
                                '/showcases/#lighthouse-projects',
                                themeContext?.theme,
                            )}
                            aria-label="Learn more about lighthouse projects"
                        >
                            <Actions>
                                <TextLink text="Learn more" showIcon />
                            </Actions>
                        </a>
                    )}
                </VerticalTitle>
                <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-4 gap-6">
                    {LIGHTHOUSE_IMAGE_CARD_CONTENT.map((data, index) => (
                        <a
                            key={index}
                            href={getSharedSectionLink(data.link, themeContext?.theme)}
                            className="[&>div]:h-full"
                            aria-label="Link to Lighthouse Project"
                        >
                            {animation && (
                                <ImageCard
                                    title={data.title}
                                    subtitle={data.subtitle}
                                    animation={data.animation}
                                />
                            )}
                            {!animation && (
                                <ImageCard
                                    title={data.title}
                                    subtitle={data.subtitle}
                                    image={data.image}
                                />
                            )}
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
