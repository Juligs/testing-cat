import { BaseSectionProps } from '@repo/shared/interfaces';

const WORKSHOP_OVERVIEW =
    'Practical learning. Real-world use cases. Built for builders of every skill level.';

export function WorkshopOverview({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section
            className="w-full bg-network-primary-20"
            id={id}
            data-navbar-color-scheme={navbarColorScheme}
        >
            <div className="container py-10 xs:py-16 lg:py-20 flex justify-center text-center">
                <p className="text-headline-sm text-network-primary-100 max-w-sm xs:max-w-3xl sm:max-w-[708px] xl:max-w-[708px] font-semibold">
                    {WORKSHOP_OVERVIEW}
                </p>
            </div>
        </section>
    );
}
