import { BaseSectionProps } from '@repo/shared/interfaces';
import Link from 'next/link';
import { Actions, HorizontalTitle, IconContent, TextLink, TitleTextSize } from 'react-ui-kit';
import { TRUST_FRAMEWORK_ICON_CONTENT } from './constants';
import { SmallCtaCard } from '@components/small-CTA-card/SmallCtaCard';
import { CTA_MAINNET } from '@sections/products/product-suite/constants';

export function TrustFrameworkGetStarted({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section
            className="bg-iota-neutral-98"
            id={id}
            data-navbar-color-scheme={navbarColorScheme}
        >
            <div className="container py-14 xs:py-20 lg:py-30 flex flex-col gap-14 xs:gap-20">
                <HorizontalTitle
                    title="IOTA Trust Framework"
                    subtitle="An open-source product suite that makes digital trust easy to implement and scale"
                    size={TitleTextSize.Small}
                />
                <div className="grid grid-cols-1 xs:grid-cols-2 w-full gap-6">
                    {CTA_MAINNET.map((data, index) => (
                        <Link
                            className="[&>div]:h-full"
                            href={data.link}
                            key={index}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Link to ${data.title}`}
                        >
                            <SmallCtaCard {...data} />
                        </Link>
                    ))}
                </div>
                <div className="flex flex-col gap-12">
                    <HorizontalTitle
                        title="IOTA Tooling"
                        subtitle="Our comprehensive toolkit helps you start integrating IOTA into your project"
                        size={TitleTextSize.Small}
                    />
                    <div className="grid grid-cols-1 xs:grid-cols-3 gap-6">
                        {TRUST_FRAMEWORK_ICON_CONTENT.map((data, index) => (
                            <IconContent key={index} {...data} filled>
                                <Actions>
                                    <Link
                                        href={data.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <TextLink text="Learn more" showIcon />
                                    </Link>
                                </Actions>
                            </IconContent>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
