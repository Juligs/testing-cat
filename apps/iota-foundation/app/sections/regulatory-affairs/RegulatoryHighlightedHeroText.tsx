import { BaseSectionProps } from '@repo/shared/interfaces';

const PURPOSE_OVERVIEW =
    'In a rapidly evolving world, the IOTA Foundation works with regulators and policymakers to provide legal certainty for the DLT and blockchain industry';

export function RegulatoryHighlightedHeroText({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section className="w-full" id={id} data-navbar-color-scheme={navbarColorScheme}>
            <div className="container py-10 xs:py-16 lg:py-20 flex justify-center text-center">
                <p className="text-title-md text-darkest max-w-sm xs:max-w-3xl sm:max-w-lg lg:max-w-xl xl:max-w-[708px] font-semibold">
                    {PURPOSE_OVERVIEW}
                </p>
            </div>
        </section>
    );
}
