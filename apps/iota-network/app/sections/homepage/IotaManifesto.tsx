import { BaseSectionProps } from '@repo/shared/interfaces';
import Link from 'next/link';
import { Actions, Button, ButtonVariant, VerticalTitle } from 'react-ui-kit';
import { IOTA_MANIFESTO_CTA_CARD_CONTENT, IOTA_MANIFESTO_VERTICAL_TITLE } from './constants';
import { TwoColumnsImageTemplate } from '@repo/shared/components';
import { ArrowTopRight } from '@repo/icons';
import { SmallCtaCard } from '@components/small-CTA-card/SmallCtaCard';

export function IotaManifesto({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section className="w-full" id={id} data-navbar-color-scheme={navbarColorScheme}>
            <div className="container py-14 sm:py-20 lg:py-30 flex justify-center items-center flex-col gap-14 xs:gap-20 w-full">
                <TwoColumnsImageTemplate image="/homepage/why-iota/manifesto.png">
                    <div className="sm:pr-[92px] lg:pr-[102px] text-center">
                        <VerticalTitle {...IOTA_MANIFESTO_VERTICAL_TITLE}>
                            <Actions>
                                <Link
                                    href="https://manifesto.iota.org/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Go to the manifesto"
                                >
                                    <Button
                                        variant={ButtonVariant.Primary}
                                        text="Read the manifesto"
                                        icon={<ArrowTopRight />}
                                    />
                                </Link>
                            </Actions>
                        </VerticalTitle>
                    </div>
                </TwoColumnsImageTemplate>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:w-full">
                    {IOTA_MANIFESTO_CTA_CARD_CONTENT.map((data, index) => (
                        <Link
                            href={data.link}
                            target={data.isExternal ? '_blank' : undefined}
                            rel={data.isExternal ? 'noopener noreferrer' : undefined}
                            className="[&>div]:h-full"
                            key={index}
                            aria-label={`Link to ${data.title}`}
                        >
                            <SmallCtaCard {...data} />
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
