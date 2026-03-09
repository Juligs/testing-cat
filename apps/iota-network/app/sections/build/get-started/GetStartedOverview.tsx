import { BaseSectionProps } from '@repo/shared/interfaces';

const GET_STARTED_OVERVIEW =
    'Tap into the tools, support, and community to build and use what’s next';

export function GetStartedOverview({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section
            className="w-full bg-iota-neutral-96"
            id={id}
            data-navbar-color-scheme={navbarColorScheme}
        >
            <div className="container py-10 xs:py-16 lg:py-20 flex justify-center text-center">
                <p className="text-headline-sm text-darkest max-w-sm xs:max-w-3xl sm:max-w-lg lg:max-w-xl xl:max-w-[708px] font-semibold">
                    {GET_STARTED_OVERVIEW}
                </p>
            </div>
        </section>
    );
}
