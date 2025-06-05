import { ArrowTopRight } from '@repo/icons';
import { TwoColumnsImageTemplate } from '@repo/shared/components';
import { FetchGrantsStatsData } from '@repo/shared/sections';
import { GrantsCarouselSkeleton } from '@repo/shared/components';
import { FetchGrantsSliderData } from '@repo/shared/sections';
import Link from 'next/link';
import { Suspense } from 'react';
import { Actions, Button, ButtonVariant, TitleTextSize, VerticalTitle } from 'react-ui-kit';
import { BaseSectionProps } from '@repo/shared/interfaces';

export function IOTAGrants({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section
            className="w-full bg-labs-neutral-100"
            id={id}
            data-navbar-color-scheme={navbarColorScheme}
        >
            <div className="container py-14 xs:py-20 lg:py-30 flex flex-col gap-14 xs:gap-20 sm:gap-30">
                <TwoColumnsImageTemplate image="/shared/grants.png">
                    <div className="sm:pr-[92px] lg:pr-[102px] text-center">
                        <VerticalTitle
                            title="IOTA Grants"
                            subtitle="Dream big, innovate fearlessly, and let iotalabs help you transform your vision into the future"
                            body="At iotalabs, we celebrate the transformative projects that have emerged from our Grants Program. "
                            size={TitleTextSize.Medium}
                        >
                            <Actions>
                                <Link href="/grants">
                                    <Button
                                        text="Learn more"
                                        icon={<ArrowTopRight />}
                                        variant={ButtonVariant.Primary}
                                    />
                                </Link>
                            </Actions>
                        </VerticalTitle>
                    </div>
                </TwoColumnsImageTemplate>
                <FetchGrantsStatsData />
                <Suspense fallback={<GrantsCarouselSkeleton />}>
                    <FetchGrantsSliderData itemsToShow={6} />
                </Suspense>
            </div>
        </section>
    );
}
