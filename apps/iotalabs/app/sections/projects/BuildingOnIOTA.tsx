import { BuildingCTA } from '@components';
import { BaseSectionProps } from '@repo/shared/interfaces';

export function BuildingOnIOTA({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section
            className="w-full bg-labs-neutral-100"
            id={id}
            data-navbar-color-scheme={navbarColorScheme}
        >
            <div className="container py-14 xs:py-20 lg:py-30 flex flex-col gap-14 xs:gap-20 sm:gap-30">
                <BuildingCTA />
            </div>
        </section>
    );
}
