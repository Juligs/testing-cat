import { BaseSectionProps } from '@repo/shared/interfaces';

const TOOLING_OVERVIEW =
    'The IOTA Toolkit gives you everything to interact with the network. Explore the resources, tap into the tech, and unlock what’s next';

export function ToolingOverview({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section
            className="w-full bg-iota-neutral-96"
            id={id}
            data-navbar-color-scheme={navbarColorScheme}
        >
            <div className="container py-10 xs:py-16 lg:py-20 flex justify-center text-center">
                <p className="text-title-md text-darkest max-w-sm xs:max-w-3xl sm:max-w-lg lg:max-w-xl xl:max-w-[708px] font-semibold">
                    {TOOLING_OVERVIEW}
                </p>
            </div>
        </section>
    );
}
