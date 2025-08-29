import { BaseSectionProps } from '@repo/shared/interfaces';

const TRUST_HIERARCHIES_OVERVIEW =
    'Model and verify who is trusted, for what, and by whom — across people, organizations, and devices. Bring transparent, programmable trust to the digital world.';

export function TrustHierarchiesOverview({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section
            className="w-full bg-iota-neutral-96"
            id={id}
            data-navbar-color-scheme={navbarColorScheme}
        >
            <div className="container py-10 xs:py-16 lg:py-20 flex justify-center text-center">
                <p className="text-title-md text-darkest max-w-sm xs:max-w-3xl sm:max-w-lg lg:max-w-xl xl:max-w-[708px] font-semibold">
                    {TRUST_HIERARCHIES_OVERVIEW}
                </p>
            </div>
        </section>
    );
}
