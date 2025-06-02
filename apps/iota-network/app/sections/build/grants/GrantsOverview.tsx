import { BaseSectionProps } from '@repo/shared/interfaces';

const GRANTS_OVERVIEW =
    'IOTA Grants range from funding innovative IOTA projects and initiatives to research grants and scholarships at the cutting-edge of DLT research. Discover how they can turn your ideas into reality.';

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
