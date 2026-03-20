import { BaseSectionProps } from '@repo/shared/interfaces';

const BUSINESS_OVERVIEW =
    'The IOTA Business Innovation Program supported a first wave of teams building real-world solutions on IOTA. While the program has now concluded, the work continues: deployments are live, integrations are growing, and the feedback we gathered has directly informed our roadmap. Especially around APIs, developer experience, and faster iteration cycles.';

export function BusinessInnovationOverview({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section
            className="w-full bg-iota-neutral-92"
            id={id}
            data-navbar-color-scheme={navbarColorScheme}
        >
            <div className="container py-10 xs:py-16 lg:py-20 flex justify-center text-center">
                <p className="text-title-md text-darkest max-w-sm xs:max-w-3xl sm:max-w-lg lg:max-w-xl xl:max-w-[708px] font-semibold">
                    {BUSINESS_OVERVIEW}
                </p>
            </div>
        </section>
    );
}
