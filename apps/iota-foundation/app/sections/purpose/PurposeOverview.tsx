import { BaseSectionProps } from '@repo/shared/interfaces';

const PURPOSE_OVERVIEW =
    'Driven by innovation, integrity, collaboration, and sustainability, we work towards a borderless world powered by DLT';

export function PurposeOverview({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section className="w-full" id={id} data-navbar-color-scheme={navbarColorScheme}>
            <div className="container py-10 xs:py-16 lg:py-20 flex justify-center text-center">
                <p className="text-headline-sm text-darkest max-w-sm xs:max-w-3xl sm:max-w-lg lg:max-w-xl xl:max-w-[708px] font-semibold">
                    {PURPOSE_OVERVIEW}
                </p>
            </div>
        </section>
    );
}
