import { BaseSectionProps } from '@repo/shared/interfaces';

const BUSINESS_OVERVIEW =
    'Are you building something impactful? The IOTA Business Innovation Program supports startups, enterprises, and developers in transforming visionary ideas into scalable solutions.';

export function BusinessInnovationOverview({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section className="w-full" id={id} data-navbar-color-scheme={navbarColorScheme}>
            <div className="container py-10 xs:py-16 lg:py-20 flex justify-center text-center">
                <p className="text-title-md text-darkest max-w-sm xs:max-w-3xl sm:max-w-lg lg:max-w-xl xl:max-w-[708px] font-semibold">
                    {BUSINESS_OVERVIEW}
                </p>
            </div>
        </section>
    );
}
