import { BaseSectionProps } from '@repo/shared/interfaces';
import { VerticalTitle, IconContent, TextLink, Actions, Button } from 'react-ui-kit';
import { TOOLING_VERTICAL_TITLE, TOOLING_ICON_CONTENT } from './constants';
import { TwoColumnsImageTemplate } from '@repo/shared/components';
import Link from 'next/link';
import { ArrowTopRight } from '@repo/icons';

export function Tooling({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section className="w-full" id={id} data-navbar-color-scheme={navbarColorScheme}>
            <div className="container py-14 xs:py-20 lg:py-30 flex flex-col gap-14 xs:gap-20 sm:gap-30">
                <TwoColumnsImageTemplate image="/products/identity/tooling.png">
                    <div className="sm:pr-[92px] lg:pr-[102px] text-center">
                        <VerticalTitle {...TOOLING_VERTICAL_TITLE}>
                            <Actions>
                                <Link
                                    href="https://docs.iota.org/iota-identity"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Go to the documentation"
                                >
                                    <Button text="Learn more" icon={<ArrowTopRight />} />
                                </Link>
                            </Actions>
                        </VerticalTitle>
                    </div>
                </TwoColumnsImageTemplate>
                <div className="grid grid-cols-1 xs:grid-cols-3 gap-6">
                    {TOOLING_ICON_CONTENT.map((data, index) => (
                        <IconContent
                            key={index}
                            title={data.title}
                            body={data.body}
                            icon={data.icon}
                            filled
                        >
                            <Actions>
                                <Link
                                    href={data.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={`Link to ${data.title} documentation`}
                                >
                                    <TextLink text="Learn more" showIcon />
                                </Link>
                            </Actions>
                        </IconContent>
                    ))}
                </div>
            </div>
        </section>
    );
}
