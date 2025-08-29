import { BaseSectionProps } from '@repo/shared/interfaces';

const BRAND_LIBRARY_OVERVIEW =
    "Whether you're planning an event, preparing a publication, or covering news about IOTA, our asset library has everything you need. Explore our comprehensive collection of brand assets and guidelines.";

export function BrandLibraryOverview({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section className="w-full" id={id} data-navbar-color-scheme={navbarColorScheme}>
            <div className="container py-10 xs:py-16 lg:py-20 flex justify-center text-center">
                <p className="text-title-md text-darkest max-w-sm xs:max-w-lg lg:max-w-xl xl:max-w-[708px] font-medium">
                    {BRAND_LIBRARY_OVERVIEW}
                </p>
            </div>
        </section>
    );
}
