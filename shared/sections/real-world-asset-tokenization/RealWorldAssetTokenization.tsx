'use client';
import { ArrowTopRight } from '@repo/icons';
import { Actions, Button, ButtonVariant, VerticalTitle } from 'react-ui-kit';
import { useTheme } from 'react-ui-kit/client';
import { TwoColumnsImageTemplate } from '../../components';
import { BaseSectionProps } from '../../interfaces';
import { getSharedSectionLink } from '../../utils';
import { REAL_WORLD_VERTICAL_TITLE_CONTENT } from './realWorldContent.constants';

export function RealWorldAssetTokenization({ id, navbarColorScheme }: BaseSectionProps) {
    const themeContext = useTheme();
    return (
        <section
            className="w-full bg-labs-neutral-100"
            id={id}
            data-navbar-color-scheme={navbarColorScheme}
        >
            <div className="container py-14 xs:py-20 lg:py-30">
                <TwoColumnsImageTemplate image="/shared/focus-areas-sections/real_world_section.png">
                    <div className="sm:pr-[92px] lg:pr-[102px] text-center">
                        <VerticalTitle {...REAL_WORLD_VERTICAL_TITLE_CONTENT}>
                            <Actions>
                                <a
                                    href={getSharedSectionLink(
                                        '/showcases/multiknip',
                                        themeContext?.theme,
                                    )}
                                    aria-label="See showcase"
                                >
                                    <Button
                                        variant={ButtonVariant.Primary}
                                        text="See showcase"
                                        icon={<ArrowTopRight />}
                                    />
                                </a>
                            </Actions>
                        </VerticalTitle>
                    </div>
                </TwoColumnsImageTemplate>
            </div>
        </section>
    );
}
