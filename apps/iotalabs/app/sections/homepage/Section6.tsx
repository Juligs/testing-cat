import { HorizontalTitle, TitleTextSize } from 'react-ui-kit';
import { FetchGrantsSliderData } from '@sections/subsections';
import { GrantsCarouselSkeleton } from '@sections/skeletons';
import { Suspense } from 'react';

export function Section6({ id }: { id: string }) {
    return (
        <section className="w-full bg-labs-neutral-100" id={id}>
            <div className="container w-full flex flex-col py-14 xs:py-20 lg:py-30  gap-14 xs:gap-20 sm:gap-30">
                <div className="w-full">
                    <HorizontalTitle
                        title="IOTA Grants"
                        size={TitleTextSize.Medium}
                        subtitle="Dream big, innovate fearlessly, and let iotalabs help you transform your vision into the future"
                        body="At iotalabs, we celebrate the transformative projects that have emerged from our Grants Program. "
                    />
                </div>
                <Suspense fallback={<GrantsCarouselSkeleton />}>
                    <FetchGrantsSliderData />
                </Suspense>
            </div>
        </section>
    );
}
