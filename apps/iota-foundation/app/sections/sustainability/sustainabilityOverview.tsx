import { BaseSectionProps } from '@repo/shared/interfaces';

const SUSTAINABILITY_OVERVIEW =
    'Driving sustainability forward by creating a greener, more energy-efficient decentralized blockchain infrastructure to build and secure our digital world';

export function SustainabilityOverview({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section className="w-full" id={id} data-navbar-color-scheme={navbarColorScheme}>
            <div className="container py-10 xs:py-16 lg:py-20 flex justify-center text-center">
                <p className="text-title-md text-darkest max-w-sm xs:max-w-3xl sm:max-w-lg lg:max-w-xl xl:max-w-[708px]">
                    {SUSTAINABILITY_OVERVIEW}
                </p>
            </div>
        </section>
    );
}
