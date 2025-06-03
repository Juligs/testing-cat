import { BaseSectionProps } from '@repo/shared/interfaces';

const GRANTS_OVERVIEW =
    'IOTA Grants support everything from bold projects to leading-edge research in DLT. See how they can help bring your vision to life.';

export function GrantsOverview({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section
            className="w-full bg-iota-neutral-96"
            id={id}
            data-navbar-color-scheme={navbarColorScheme}
        >
            <div className="container py-10 xs:py-16 lg:py-20 flex justify-center text-center">
                <p className="text-title-md text-darkest max-w-sm xs:max-w-3xl sm:max-w-lg lg:max-w-xl xl:max-w-[708px] font-semibold">
                    {GRANTS_OVERVIEW}
                </p>
            </div>
        </section>
    );
}
