import { StatsSection } from '@sections/subsections';
import { GrantsStatsSkeleton } from '@sections/skeletons';
import { Suspense } from 'react';

export function Section2({ id }: { id: string }) {
    return (
        <section className="w-full bg-labs-primary-100" id={id}>
            <div className="container py-12">
                <Suspense fallback={<GrantsStatsSkeleton />}>
                    <StatsSection />
                </Suspense>
            </div>
        </section>
    );
}
