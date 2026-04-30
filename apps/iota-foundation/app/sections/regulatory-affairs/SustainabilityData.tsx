import { TwoColumnsImageTemplate } from '@repo/shared/components';
import { BaseSectionProps } from '@repo/shared/interfaces';
import { Actions, Button, CtaCard, TextLink, VerticalTitle } from 'react-ui-kit';
import { SUSTAINABILITY_TITLE_CONTENT, SUSTAINABILITY_CTA_CARD_CONTENT } from './constants';
import { EnergyEfficiencyStats } from '@sections/sustainability/subsections/EnergyEfficiencyStats';
import Link from 'next/link';
import { Suspense } from 'react';
import { ArrayDisplayStatsSkeleton } from '@repo/shared/sections';

export async function SustainabilityData({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section className="w-full" id={id} data-navbar-color-scheme={navbarColorScheme}>
            <div className="container flex flex-col justify-center items-center py-14 xs:py-20 lg:py-30 gap-14 xs:gap-20 lg:gap-30">
                <TwoColumnsImageTemplate image="/sustainability/energy_efficiency.png">
                    <div className="sm:pr-[92px] lg:pr-[102px] text-center">
                        <VerticalTitle {...SUSTAINABILITY_TITLE_CONTENT}>
                            <Actions>
                                <Link href="/sustainability">
                                    <Button text="View Details" icon />
                                </Link>
                            </Actions>
                        </VerticalTitle>
                    </div>
                </TwoColumnsImageTemplate>
                <Suspense fallback={<ArrayDisplayStatsSkeleton count={3} />}>
                    <EnergyEfficiencyStats />
                </Suspense>
                <div className="grid grid-cols-1 xs:grid-cols-2 gap-6">
                    {SUSTAINABILITY_CTA_CARD_CONTENT.map((data, index) => (
                        <CtaCard key={index} {...data} isVertical>
                            <Link
                                href={data.link}
                                target={data.isExternal ? '_blank' : ''}
                                rel={data.isExternal ? 'noopener noreferrer' : ''}
                                className="[&>div]:h-full"
                                aria-label={`Link to ${data.title}`}
                            >
                                <TextLink text={data.text} showIcon />
                            </Link>
                        </CtaCard>
                    ))}
                </div>
            </div>
        </section>
    );
}
