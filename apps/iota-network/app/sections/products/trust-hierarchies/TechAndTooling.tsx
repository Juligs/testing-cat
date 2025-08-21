import { BaseSectionProps } from '@repo/shared/interfaces';
import { IconContent, TextLink, Actions, Button, HorizontalTitle } from 'react-ui-kit';
import { TECH_AND_TOOLING_VERTICAL_TITLE, TECH_AND_TOOLING_ICON_CONTENT } from './constants';
import Link from 'next/link';
import { ArrowTopRight } from '@repo/icons';

export function TechAndTooling({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section id={id} data-navbar-color-scheme={navbarColorScheme}>
            <div className="container py-14 xs:py-20 lg:py-30 flex flex-col gap-14 xs:gap-20 sm:gap-30">
                <HorizontalTitle {...TECH_AND_TOOLING_VERTICAL_TITLE}>
                    <Actions>
                        <Link
                            href="https://docs.iota.org/developer/iota-hierarchies/getting-started/rust"
                            target="_blank"
                            aria-label="Go to the documentation"
                        >
                            <Button text="Learn more" icon={<ArrowTopRight />} />
                        </Link>
                    </Actions>
                </HorizontalTitle>
                <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-6">
                    {TECH_AND_TOOLING_ICON_CONTENT.map((data, index) => (
                        <IconContent key={index} {...data} filled>
                            <Link
                                href={data.link}
                                target="_blank"
                                aria-label="Go to the documentation"
                            >
                                <TextLink text="Learn more" showIcon />
                            </Link>
                        </IconContent>
                    ))}
                </div>
            </div>
        </section>
    );
}
