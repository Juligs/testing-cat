import { BaseSectionProps } from '@repo/shared/interfaces';

const IOTA_FOUNDATION_OVERVIEW =
    "The IOTA Foundation's journey has been marked by key milestones, from its founding to its pivotal role in decentralizing technology and driving real-world applications across industries.";

export function IotaFoundationOverview({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section className="w-full" id={id} data-navbar-color-scheme={navbarColorScheme}>
            <div className="container py-10 xs:py-16 lg:py-20 flex justify-center text-center">
                <p className="text-title-md text-darkest max-w-sm xs:max-w-3xl sm:max-w-lg lg:max-w-xl xl:max-w-[708px] font-semibold">
                    {IOTA_FOUNDATION_OVERVIEW}
                </p>
            </div>
        </section>
    );
}
