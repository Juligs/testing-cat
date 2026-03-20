import { BaseSectionProps } from '@repo/shared/interfaces';
import { VerticalTitle, Actions, Button, IconContent, TextLink } from 'react-ui-kit';
import { WHY_IOTA_VERTICAL_TITLE, WHY_IOTA_ICON_CONTENT } from './constants';
import Link from 'next/link';
import { TwoColumnsImageTemplate } from '@repo/shared/components';
import { ArrowTopRight } from '@repo/icons';

export function WhyIotaGas({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section className="w-full" id={id} data-navbar-color-scheme={navbarColorScheme}>
            <div className="container py-14 xs:py-20 lg:py-30 flex flex-col gap-14 xs:gap-20 sm:gap-30">
                <TwoColumnsImageTemplate image="/shared/data_visualization_dashboard.png">
                    <div className="sm:pr-[92px] lg:pr-[102px] text-center">
                        <VerticalTitle {...WHY_IOTA_VERTICAL_TITLE}>
                            <Actions>
                                <Link
                                    href="https://docs.iota.org/operator/gas-station/architecture/features"
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
                    {WHY_IOTA_ICON_CONTENT.map((data, index) => (
                        <IconContent key={index} {...data} filled>
                            <Actions>
                                <Link
                                    href={data.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={`Learn more about ${data.title}`}
                                >
                                    <TextLink text="Learn More" showIcon />
                                </Link>
                            </Actions>
                        </IconContent>
                    ))}
                </div>
            </div>
        </section>
    );
}
