'use client';

import { Actions, TextLink, TitleTextSize, VerticalTitle } from 'react-ui-kit';
import { useTheme } from 'react-ui-kit/client';
import { RWA_VERTICAL_TITLE_CONTENT } from './rwaContent.constants';
import { RwaCarousel } from './RwaCarousel';
import { BaseSectionProps } from '@repo/shared/interfaces';
import { getSharedSectionLink } from '../../utils';
interface RwaProps extends BaseSectionProps {
    showLink?: boolean;
}

export function Rwa({ id, navbarColorScheme, showLink = true }: RwaProps) {
    const themeContext = useTheme();
    return (
        <section className="bg-white" id={id} data-navbar-color-scheme={navbarColorScheme}>
            <div className="container py-14 xs:py-20 lg:py-30 flex flex-col gap-6 xs:gap-10 sm:gap-20">
                <VerticalTitle
                    title={RWA_VERTICAL_TITLE_CONTENT.title}
                    size={TitleTextSize.Small}
                    isCentered
                >
                    {showLink && (
                        <a
                            href={getSharedSectionLink('/showcases', themeContext?.theme)}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="See Showcases"
                        >
                            <Actions>
                                <TextLink text="See Showcases" showIcon />
                            </Actions>
                        </a>
                    )}
                </VerticalTitle>
                <RwaCarousel />
            </div>
        </section>
    );
}
