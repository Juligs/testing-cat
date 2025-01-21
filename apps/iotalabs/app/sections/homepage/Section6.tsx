import { ArrowTopRight } from '@repo/icons';
import { TwoColumnsImageTemplate } from '@repo/shared/components';
import { FetchGrantsStatsData } from '@repo/shared/sections';
import { GrantsCarouselSkeleton } from '@sections/skeletons';
import { FetchGrantsSliderData } from '@sections/subsections';
import Link from 'next/link';
import { Suspense } from 'react';
import { Actions, Button, ButtonVariant, TitleTextSize, VerticalTitle } from 'react-ui-kit';
import { BaseSectionProps } from '@repo/shared/interfaces';

export function Section6({ id, theme }: BaseSectionProps) {
    return (
        <section className="w-full bg-labs-neutral-100" id={id} data-theme={theme}>
            <div className="container py-14 xs:py-20 lg:py-30 flex flex-col gap-14 xs:gap-20 sm:gap-30">
                <TwoColumnsImageTemplate image="/shared/how-to-apply.svg">
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
                    <FetchGrantsSliderData />
                </Suspense>
            </div>
        </section>
    );
}
